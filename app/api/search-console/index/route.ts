import { NextRequest, NextResponse } from "next/server"
import { GoogleAuth } from "google-auth-library"

const SITE_URL = process.env.GSC_SITE_URL ?? "https://javierayala.pro/"
const INDEXING_API = "https://indexing.googleapis.com/v3/urlNotifications:publish"
const INSPECTION_API = "https://searchconsole.googleapis.com/v1/urlInspection/index:inspect"

function getMissingEnvResponse() {
  if (!process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL || !process.env.GOOGLE_SERVICE_ACCOUNT_PRIVATE_KEY) {
    return NextResponse.json({ error: "Search Console not configured" }, { status: 503 })
  }
  return null
}

function getCredentials() {
  return {
    client_email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
    private_key: process.env.GOOGLE_SERVICE_ACCOUNT_PRIVATE_KEY?.replace(/\\n/g, "\n"),
  }
}

async function getClient(scopes: string[]) {
  const auth = new GoogleAuth({ credentials: getCredentials(), scopes })
  return auth.getClient()
}

// POST /api/search-console/index
// Body: { urls: string[] }
// Submits URLs to the Google Indexing API for crawling
export async function POST(req: NextRequest) {
  const missing = getMissingEnvResponse()
  if (missing) return missing

  let urls: string[]
  try {
    const body = await req.json()
    urls = body?.urls
    if (!Array.isArray(urls) || urls.length === 0) throw new Error()
  } catch {
    return NextResponse.json({ error: "Body must be { urls: string[] }" }, { status: 400 })
  }

  try {
    const client = await getClient(["https://www.googleapis.com/auth/indexing"])

    const settled = await Promise.allSettled(
      urls.map((url) =>
        (client as any).request({
          url: INDEXING_API,
          method: "POST",
          data: { url, type: "URL_UPDATED" },
        })
      )
    )

    const results = settled.map((result, i) => {
      if (result.status === "fulfilled") {
        return { url: urls[i], status: "submitted" }
      }
      const msg: string = (result.reason as any)?.response?.data?.error?.message
        ?? (result.reason as any)?.message
        ?? "Unknown error"
      return { url: urls[i], status: "error", error: msg }
    })

    return NextResponse.json({ results })
  } catch (err: any) {
    return NextResponse.json({ error: err?.message ?? "Failed" }, { status: 500 })
  }
}

// GET /api/search-console/index?url=https://...
// Inspects a single URL via the URL Inspection API
export async function GET(req: NextRequest) {
  const missing = getMissingEnvResponse()
  if (missing) return missing

  const url = req.nextUrl.searchParams.get("url")
  if (!url) {
    return NextResponse.json({ error: "url query param required" }, { status: 400 })
  }

  try {
    const client = await getClient(["https://www.googleapis.com/auth/webmasters"])
    const res = await (client as any).request({
      url: INSPECTION_API,
      method: "POST",
      data: { inspectionUrl: url, siteUrl: SITE_URL },
    })

    const result = res.data?.inspectionResult
    const index = result?.indexStatusResult

    return NextResponse.json({
      url,
      verdict: index?.verdict ?? "UNKNOWN",
      coverageState: index?.coverageState ?? "Unknown",
      lastCrawlTime: index?.lastCrawlTime ?? null,
      crawledAs: index?.crawledAs ?? null,
      googleCanonical: index?.googleCanonical ?? null,
      robotsTxtState: index?.robotsTxtState ?? null,
      indexingState: index?.indexingState ?? null,
    })
  } catch (err: any) {
    const msg: string = err?.response?.data?.error?.message ?? err?.message ?? "Failed"
    return NextResponse.json({ error: msg }, { status: 500 })
  }
}
