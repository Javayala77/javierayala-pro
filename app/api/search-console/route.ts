import { NextResponse } from "next/server"
import { GoogleAuth } from "google-auth-library"

const SITE_URL = process.env.GSC_SITE_URL ?? "https://javierayala.pro/"
const SC_API = "https://searchconsole.googleapis.com/webmasters/v3"

async function getAuthClient() {
  const auth = new GoogleAuth({
    credentials: {
      client_email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
      private_key: process.env.GOOGLE_SERVICE_ACCOUNT_PRIVATE_KEY?.replace(/\\n/g, "\n"),
    },
    scopes: ["https://www.googleapis.com/auth/webmasters.readonly"],
  })
  return auth.getClient()
}

async function querySearchAnalytics(client: Awaited<ReturnType<typeof getAuthClient>>, body: object) {
  const url = `${SC_API}/sites/${encodeURIComponent(SITE_URL)}/searchAnalytics/query`
  const res = await (client as any).request({ url, method: "POST", data: body })
  return res.data
}

export async function GET() {
  if (!process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL || !process.env.GOOGLE_SERVICE_ACCOUNT_PRIVATE_KEY) {
    return NextResponse.json({ error: "Search Console not configured" }, { status: 503 })
  }

  try {
    const client = await getAuthClient()

    const endDate = new Date()
    const startDate = new Date()
    startDate.setDate(endDate.getDate() - 28)
    const fmt = (d: Date) => d.toISOString().split("T")[0]
    const dateRange = { startDate: fmt(startDate), endDate: fmt(endDate) }

    const [overview, topQueries, topPages] = await Promise.all([
      // Overall totals
      querySearchAnalytics(client, {
        ...dateRange,
        dimensions: [],
        rowLimit: 1,
      }),
      // Top queries by clicks
      querySearchAnalytics(client, {
        ...dateRange,
        dimensions: ["query"],
        orderBy: [{ fieldName: "clicks", sortOrder: "DESCENDING" }],
        rowLimit: 10,
      }),
      // Top pages by clicks
      querySearchAnalytics(client, {
        ...dateRange,
        dimensions: ["page"],
        orderBy: [{ fieldName: "clicks", sortOrder: "DESCENDING" }],
        rowLimit: 10,
      }),
    ])

    return NextResponse.json({
      overview: overview.rows?.[0] ?? { clicks: 0, impressions: 0, ctr: 0, position: 0 },
      topQueries: topQueries.rows ?? [],
      topPages: topPages.rows ?? [],
    })
  } catch (err: any) {
    console.error("Search Console error:", err?.message)
    return NextResponse.json({ error: err?.message ?? "Failed to fetch data" }, { status: 500 })
  }
}
