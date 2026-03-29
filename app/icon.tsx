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
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: 6,
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            border: "1.5px solid rgba(6,182,212,0.5)",
            borderRadius: 4,
            padding: "2px 4px",
          }}
        >
          <span
            style={{
              color: "rgba(6,182,212,0.8)",
              fontSize: 9,
              fontWeight: 700,
              letterSpacing: "0.1em",
              lineHeight: 1,
            }}
          >
            .pro
          </span>
        </div>
      </div>
    ),
    { ...size }
  )
}
