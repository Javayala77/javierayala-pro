import { NextRequest, NextResponse } from "next/server"

// Health check endpoint
export async function GET() {
  return NextResponse.json({
    status: "active",
    service: "Calendly Webhook - Javier Ayala",
    events: ["invitee.created", "invitee.canceled"]
  })
}

// Webhook handler
export async function POST(request: NextRequest) {
  try {
    const payload = await request.json()
    
    const event = payload.event
    const eventData = payload.payload
    
    if (!event || !eventData) {
      return NextResponse.json(
        { error: "Invalid webhook payload" },
        { status: 400 }
      )
    }
    
    if (event === "invitee.created") {
      // Extract invitee information
      const invitee = eventData.invitee || {}
      const scheduledEvent = eventData.scheduled_event || {}
      const questionsAndAnswers = eventData.questions_and_answers || []
      
      const name = invitee.name || "N/A"
      const email = invitee.email || "N/A"
      const phone = invitee.text_reminder_number || "N/A"
      const scheduledTime = scheduledEvent.start_time || "N/A"
      
      // Extract custom question answers
      const getAnswer = (questionText: string): string => {
        const qa = questionsAndAnswers.find((q: { question: string; answer: string }) => 
          q.question?.toLowerCase().includes(questionText.toLowerCase())
        )
        return qa?.answer || "N/A"
      }
      
      const businessName = getAnswer("business name")
      const businessType = getAnswer("business type") || getAnswer("type of business") || getAnswer("industry")
      const monthlySpend = getAnswer("spend") || getAnswer("budget") || getAnswer("monthly")
      const mainChallenge = getAnswer("challenge") || getAnswer("goal") || getAnswer("help")
      
      // Log booking data
      console.log("\n========================================")
      console.log("NEW BOOKING:")
      console.log("========================================")
      console.log(`Name: ${name}`)
      console.log(`Email: ${email}`)
      console.log(`Phone: ${phone}`)
      console.log(`Time: ${scheduledTime}`)
      console.log(`Business Name: ${businessName}`)
      console.log(`Business Type: ${businessType}`)
      console.log(`Monthly Spend: ${monthlySpend}`)
      console.log(`Challenge: ${mainChallenge}`)
      console.log("========================================\n")
      
      return NextResponse.json({ 
        success: true, 
        message: "Booking received",
        invitee: name 
      })
    }
    
    if (event === "invitee.canceled") {
      const invitee = eventData.invitee || {}
      const name = invitee.name || "N/A"
      const email = invitee.email || "N/A"
      
      console.log("\n========================================")
      console.log("BOOKING CANCELED:")
      console.log("========================================")
      console.log(`Name: ${name}`)
      console.log(`Email: ${email}`)
      console.log("========================================\n")
      
      return NextResponse.json({ 
        success: true, 
        message: "Cancellation received",
        invitee: name 
      })
    }
    
    // Unknown event type
    console.log(`Unknown Calendly event: ${event}`)
    return NextResponse.json({ 
      success: true, 
      message: `Event ${event} received but not processed` 
    })
    
  } catch (error) {
    console.error("Webhook error:", error)
    return NextResponse.json(
      { error: "Failed to process webhook" },
      { status: 400 }
    )
  }
}
