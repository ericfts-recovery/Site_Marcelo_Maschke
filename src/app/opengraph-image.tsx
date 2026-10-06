import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";
import { siteConfig } from "@/content/site";

export const alt = `${siteConfig.name} — ${siteConfig.tagline}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

/** Imagem de compartilhamento (WhatsApp, Instagram, Facebook) gerada no build. */
export default async function OpengraphImage() {
  const cormorant = await loadDisplayFont();

  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        background: "#0e0e0e",
        padding: "72px 80px",
        fontFamily: "Cormorant",
        color: "#ffffff",
        position: "relative",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: 32,
          left: 32,
          right: 32,
          bottom: 32,
          border: "1px solid rgba(184,160,122,0.45)",
          display: "flex",
        }}
      />
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 20,
          color: "#b8a07a",
          fontSize: 26,
          letterSpacing: 8,
        }}
      >
        <div style={{ width: 64, height: 1, background: "#b8a07a", display: "flex" }} />
        HAIR SALON
      </div>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <div style={{ fontSize: 112, lineHeight: 1 }}>Marcelo Maschke</div>
        <div style={{ fontSize: 44, color: "#b8a07a", marginTop: 24 }}>{siteConfig.tagline}</div>
      </div>
      <div style={{ display: "flex", fontSize: 28, color: "#a8a8a5", letterSpacing: 2 }}>
        Visagismo · Mechas · Mega hair · Cortes · Unhas · Make · Penteados · Noivas
      </div>
    </div>,
    {
      ...size,
      fonts: [{ name: "Cormorant", data: cormorant, style: "normal", weight: 500 }],
    },
  );
}

/** Cacheado para que a imagem seja gerada uma vez no build (Cache Components). */
async function loadDisplayFont() {
  "use cache";
  const file = await readFile(
    join(process.cwd(), "src/assets/fonts/cormorant-garamond-latin-500-normal.woff"),
  );
  return new Uint8Array(file).buffer;
}
