import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
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
          borderRadius: 7,
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: 2,
          }}
        >
          <span
            style={{
              color: "#c4a574",
              fontSize: 20,
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
              width: 14,
              height: 1.5,
              background: "#c4a574",
              borderRadius: 1,
            }}
          />
        </div>
      </div>
    ),
    { ...size }
  );
}
