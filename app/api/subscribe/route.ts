import { NextRequest, NextResponse } from "next/server"

const GROUP_IDS: Record<string, string> = {
  "google-ads-audit": "183385341709780775",
  "meta-ads":         "183385342262379987",
  "whatsapp-bot":     "183385342906205428",
  "seo":              "183385343490262499",
  "ai-agent":         "183385344085853462",
  "newsletter":       "183385344663618823",
}

export async function POST(req: NextRequest) {
  const apiKey = process.env.MAILERLITE_API_KEY
  if (!apiKey) {
    return NextResponse.json({ error: "Not configured" }, { status: 503 })
  }

  const { email, name, tag } = await req.json()

  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ error: "Invalid email" }, { status: 400 })
  }

  const groupId = tag ? GROUP_IDS[tag] : null

  try {
    // Create or update subscriber
    const res = await fetch("https://connect.mailerlite.com/api/subscribers", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        email,
        fields: { name: name || "" },
        groups: groupId ? [groupId] : [],
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
