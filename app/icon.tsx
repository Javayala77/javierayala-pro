import { ImageResponse } from "next/og"

export const size = { width: 32, height: 32 }
export const contentType = "image/png"

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: 32,
          height: 32,
          background: "#060609",
          borderRadius: 8,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Cyan glow top-left */}
        <div
          style={{
            position: "absolute",
            top: -6,
            left: -6,
            width: 20,
            height: 20,
            borderRadius: "50%",
            background: "rgba(6,182,212,0.35)",
            filter: "blur(6px)",
          }}
        />
        {/* Violet glow bottom-right */}
        <div
          style={{
            position: "absolute",
            bottom: -6,
            right: -6,
            width: 16,
            height: 16,
            borderRadius: "50%",
            background: "rgba(139,92,246,0.3)",
            filter: "blur(5px)",
          }}
        />
        {/* JA text */}
        <span
          style={{
            fontSize: 13,
            fontWeight: 900,
            color: "white",
            letterSpacing: "-0.5px",
            lineHeight: 1,
            position: "relative",
            zIndex: 1,
          }}
        >
          JA
        </span>
        {/* Cyan dot accent */}
        <div
          style={{
            position: "absolute",
            bottom: 5,
            right: 5,
            width: 4,
            height: 4,
            borderRadius: "50%",
            background: "#06b6d4",
          }}
        />
      </div>
    ),
    { ...size }
  )
}
