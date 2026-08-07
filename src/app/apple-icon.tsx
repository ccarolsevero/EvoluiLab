import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#141311",
          borderRadius: 40,
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: 10,
          }}
        >
          <span
            style={{
              color: "#c4a574",
              fontSize: 110,
              fontWeight: 600,
              lineHeight: 1,
              letterSpacing: "-0.06em",
              fontFamily:
                "ui-sans-serif, system-ui, -apple-system, Segoe UI, sans-serif",
            }}
          >
            e
          </span>
          <div
            style={{
              width: 72,
              height: 6,
              background: "#c4a574",
              borderRadius: 3,
            }}
          />
        </div>
      </div>
    ),
    { ...size }
  );
}
