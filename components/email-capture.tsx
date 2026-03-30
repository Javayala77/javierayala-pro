"use client"

import { useState } from "react"
import { ArrowRight, CheckCircle2, Loader2 } from "lucide-react"

type Props = {
  tag?: string
  placeholder?: string
  ctaText?: string
  successText?: string
  accentClass?: string
  btnClass?: string
}

export default function EmailCapture({
  tag,
  placeholder = "Your email address",
  ctaText = "Send It to Me Free",
  successText = "Check your inbox — and message us on WhatsApp to get started.",
  accentClass = "border-cyan-500/30 focus:border-cyan-500/60",
  btnClass = "from-cyan-600 to-cyan-500",
}: Props) {
  const [email, setEmail] = useState("")
  const [name, setName] = useState("")
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")
  const [errorMsg, setErrorMsg] = useState("")

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setStatus("loading")
    setErrorMsg("")

    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, name, tag }),
      })

      if (res.ok) {
        setStatus("success")
      } else {
        const data = await res.json()
        setErrorMsg(data.error || "Something went wrong. Try again.")
        setStatus("error")
      }
    } catch {
      setErrorMsg("Connection error. Try again.")
      setStatus("error")
    }
  }

  if (status === "success") {
    return (
      <div className="flex flex-col items-center gap-3 py-4 text-center">
        <CheckCircle2 className="h-8 w-8 text-green-400" />
        <p className="text-sm font-bold text-white">You&apos;re in!</p>
        <p className="text-xs text-gray-400 max-w-xs">{successText}</p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3 w-full max-w-sm mx-auto text-left">
      <input
        type="text"
        placeholder="Your first name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className={`h-12 px-4 rounded-xl bg-white/[0.04] border text-sm text-white placeholder:text-gray-600 outline-none transition-colors w-full ${accentClass}`}
      />
      <input
        type="email"
        placeholder={placeholder}
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        className={`h-12 px-4 rounded-xl bg-white/[0.04] border text-sm text-white placeholder:text-gray-600 outline-none transition-colors w-full ${accentClass}`}
      />
      {errorMsg && (
        <p className="text-xs text-red-400">{errorMsg}</p>
      )}
      <button
        type="submit"
        disabled={status === "loading"}
        className={`flex items-center justify-center gap-2 h-12 w-full rounded-full bg-gradient-to-r ${btnClass} text-white font-bold text-sm disabled:opacity-60 transition-all hover:opacity-90`}
      >
        {status === "loading" ? (
          <Loader2 className="h-4 w-4 animate-spin" />
        ) : (
          <>{ctaText} <ArrowRight className="h-4 w-4" /></>
        )}
      </button>
      <p className="text-center text-[10px] text-gray-600">No spam. Unsubscribe anytime.</p>
    </form>
  )
}
