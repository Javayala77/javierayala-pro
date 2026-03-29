"use client"

import { Bot } from "lucide-react"

const conversation = [
  {
    type: "customer",
    time: "11:47 PM",
    message: "Hi I need my AC fixed tomorrow",
  },
  {
    type: "agent",
    time: "11:47 PM",
    message: "Hi! Thanks for reaching out to CoolAir HVAC. I can help with that!\n\nWhat's the issue with your AC? And what's your address so I can confirm we service your area?",
  },
  {
    type: "customer",
    time: "11:48 PM",
    message: "It's not cooling.\n123 SW 8th Street Miami",
  },
  {
    type: "agent",
    time: "11:48 PM",
    message: "Perfect — we do service that area!\n\nI have availability tomorrow:\n→ 9:00 AM\n→ 11:00 AM\n→ 2:00 PM\n\nWhich works best for you?",
  },
  {
    type: "customer",
    time: "11:49 PM",
    message: "9am works",
  },
  {
    type: "agent",
    time: "11:49 PM",
    message: "You're booked!\n\nAppointment confirmed:\n📅 Tomorrow at 9:00 AM\n📍 123 SW 8th Street Miami\n🔧 AC Repair\n\nYou'll receive a confirmation and reminder before your appointment.\n\nSee you tomorrow!",
  },
]

export function AIAgentSolution() {
  return (
    <section className="px-4 py-16 sm:py-24 bg-gradient-to-b from-transparent via-purple-500/5 to-transparent">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-10 sm:mb-14">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black leading-tight mb-4 text-balance">
            Meet Your New{" "}
            <span className="text-purple-400">AI Booking Agent.</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-400">
            Always On. Never Tired.
          </p>
          <p className="text-base sm:text-lg text-white font-medium mt-2">
            It answers. It qualifies. It books. You just show up.
          </p>
        </div>
        
        {/* Chat Mockup */}
        <div className="max-w-md mx-auto">
          <div className="rounded-2xl bg-[#12121a] border border-purple-500/20 overflow-hidden shadow-2xl shadow-purple-500/10">
            {/* Chat Header */}
            <div className="px-4 py-3 bg-purple-600/20 border-b border-purple-500/20 flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-purple-600 flex items-center justify-center">
                <Bot className="h-5 w-5 text-white" />
              </div>
              <div>
                <p className="font-semibold text-white text-sm">AutoBook AI Agent</p>
                <p className="text-xs text-green-400 flex items-center gap-1">
                  <span className="w-2 h-2 rounded-full bg-green-400"></span>
                  Online 24/7
                </p>
              </div>
            </div>
            
            {/* Messages */}
            <div className="p-4 space-y-3 max-h-[500px] overflow-y-auto">
              {conversation.map((msg, index) => (
                <div 
                  key={index}
                  className={`flex ${msg.type === "customer" ? "justify-end" : "justify-start"}`}
                >
                  <div 
                    className={`max-w-[85%] rounded-2xl px-4 py-2.5 ${
                      msg.type === "customer" 
                        ? "bg-purple-600 text-white rounded-br-md" 
                        : "bg-gray-800 text-gray-100 rounded-bl-md"
                    }`}
                  >
                    <p className="text-sm whitespace-pre-line">{msg.message}</p>
                    <p className={`text-xs mt-1 ${msg.type === "customer" ? "text-purple-200" : "text-gray-500"}`}>
                      {msg.time}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Caption */}
          <p className="text-center mt-6 text-gray-400 text-sm sm:text-base">
            This happened at <span className="text-purple-400 font-bold">11:47pm</span>. While you were sleeping.
            <br />
            <span className="text-white font-medium">Your competitor was not booked.</span>
          </p>
        </div>
      </div>
    </section>
  )
}
