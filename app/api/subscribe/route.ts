import { NextRequest, NextResponse } from "next/server"

const GROUP_IDS: Record<string, string> = {
  "google-ads-audit":  "183385341709780775",
  "landing-page":      "178133860121314601",
  "google-ai-score":   "183385341709780775", // routes to Google Ads Audit group
  "newsletter":        "183385341709780775", // all email subs go to Google Ads Audit group
}

export async function POST(req: NextRequest) {
  const apiKey = process.env.MAILERLITE_API_KEY
  if (!apiKey) {
    return NextResponse.json({ error: "Not configured" }, { status: 503 })
  }

  const { email, name, tag, fields: extraFields } = await req.json()

  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ error: "Invalid email" }, { status: 400 })
  }

  const groupId = tag ? (GROUP_IDS[tag] ?? GROUP_IDS["google-ads-audit"]) : GROUP_IDS["google-ads-audit"]

  try {
    const res = await fetch("https://connect.mailerlite.com/api/subscribers", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        email,
        fields: { name: name || "", ...(extraFields || {}) },
        groups: [groupId],
      }),
    })

    if (!res.ok) {
      const err = await res.json()
      console.error("MailerLite error:", err)
      return NextResponse.json({ error: "Subscription failed" }, { status: 500 })
    }

    return NextResponse.json({ success: true })
  } catch (e) {
    console.error(e)
    return NextResponse.json({ error: "Server error" }, { status: 500 })
  }
}
