"use client";

/** Último recurso (erro no layout raiz): sem dependências de fontes ou CSS. */
export default function GlobalError({
  retry,
}: {
  error: Error & { digest?: string };
  retry: () => void;
}) {
  return (
    <html lang="pt-BR">
      <body
        style={{
          margin: 0,
          minHeight: "100vh",
          display: "grid",
          placeItems: "center",
          background: "#0e0e0e",
          color: "#ffffff",
          fontFamily: "Georgia, serif",
          textAlign: "center",
          padding: "24px",
        }}
      >
        <main>
          <p
            style={{
              color: "#b8a07a",
              letterSpacing: "0.24em",
              fontSize: 13,
              textTransform: "uppercase",
            }}
          >
            Marcelo Maschke Hair Salon
          </p>
          <h1 style={{ fontWeight: 400, fontSize: 40, margin: "16px 0" }}>
            Tivemos um imprevisto.
          </h1>
          <button
            type="button"
            onClick={() => retry()}
            style={{
              background: "#b8a07a",
              color: "#0e0e0e",
              border: 0,
              minHeight: 48,
              padding: "0 28px",
              fontSize: 14,
              letterSpacing: "0.16em",
              textTransform: "uppercase",
              cursor: "pointer",
            }}
          >
            Tentar novamente
          </button>
        </main>
      </body>
    </html>
  );
}
