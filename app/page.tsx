import type { Metadata } from "next";
import { SignInButton, SignUpButton } from "@clerk/nextjs";

export const metadata: Metadata = {
  title: "Lication — Freelancer Client Portal",
  description: "A calm, professional space for files, feedback, and invoices.",
};

const features = [
  {
    title: "Project Updates",
    desc: "Share progress and milestones in a structured, clear space your client actually checks.",
  },
  {
    title: "File Sharing",
    desc: "Upload deliverables and keep everything organised. No more lost Drive links.",
  },
  {
    title: "Clean Experience",
    desc: "Give clients something professional — not a WhatsApp thread and three email chains.",
  },
];

export default function Home() {
  return (
    <main style={{ fontFamily: "'Inter', system-ui, sans-serif" }}>

      {/* Nav */}
      <nav style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 50,
        background: "rgba(249,248,245,0.9)", backdropFilter: "blur(10px)",
        borderBottom: "1px solid #e5e2d9",
        display: "flex", justifyContent: "space-between", alignItems: "center",
        padding: "1rem 2rem",
      }}>
        <span style={{
          fontFamily: "'Playfair Display', Georgia, serif",
          fontSize: "1.2rem", fontWeight: 500, color: "#1c1b18",
          letterSpacing: "0.02em",
        }}>
          Lication
        </span>

        <div style={{ display: "flex", gap: "0.75rem", alignItems: "center" }}>
          <SignInButton mode="redirect">
            <button style={{
              background: "none", border: "none", cursor: "pointer",
              fontSize: "0.82rem", color: "#6b6860", fontFamily: "inherit",
              padding: "0.4rem 0.75rem",
            }}>
              Sign in
            </button>
          </SignInButton>
          <SignUpButton mode="redirect">
            <button style={{
              background: "#1c1b18", color: "#f9f8f5",
              border: "none", cursor: "pointer",
              fontSize: "0.82rem", fontFamily: "inherit", fontWeight: 500,
              padding: "0.5rem 1.25rem",
              borderRadius: "6px",
              transition: "opacity 0.15s",
            }}>
              Get started free
            </button>
          </SignUpButton>
        </div>
      </nav>

      {/* Hero */}
      <section style={{
        minHeight: "100vh",
        display: "flex", flexDirection: "column",
        alignItems: "center", justifyContent: "center",
        textAlign: "center",
        padding: "8rem 1.5rem 4rem",
        position: "relative", overflow: "hidden",
        background: "linear-gradient(to bottom, #f9f8f5, #eeebd8)",
      }}>

        {/* Mountain SVG */}
        <svg
          style={{ position: "absolute", bottom: 0, left: 0, width: "100%", opacity: 0.12, pointerEvents: "none" }}
          viewBox="0 0 1440 360" fill="none" preserveAspectRatio="xMidYMax meet"
        >
          <polygon points="0,360 240,160 460,280 700,80 940,260 1180,100 1440,200 1440,360" fill="#3d5247" />
          <polygon points="0,360 180,220 400,320 660,140 900,300 1140,160 1360,280 1440,220 1440,360" fill="#2c2b28" opacity="0.5" />
          {/* Snow caps */}
          <polygon points="700,80 740,130 660,130" fill="white" opacity="0.6" />
          <polygon points="1180,100 1210,138 1150,138" fill="white" opacity="0.5" />
          <polygon points="240,160 268,195 212,195" fill="white" opacity="0.4" />
        </svg>

        {/* Badge */}
        <div style={{
          display: "inline-block",
          border: "1px solid #d4cfc4",
          background: "rgba(255,255,255,0.7)",
          padding: "0.3rem 1rem",
          borderRadius: "99px",
          fontSize: "0.72rem", fontWeight: 500,
          letterSpacing: "0.08em", textTransform: "uppercase",
          color: "#3d5247", marginBottom: "2rem",
        }}>
          Free client portal
        </div>

        <h1 style={{
          fontFamily: "'Playfair Display', Georgia, serif",
          fontSize: "clamp(2.8rem, 7vw, 5.5rem)",
          fontWeight: 400, lineHeight: 1.1,
          color: "#1c1b18", maxWidth: 760,
          marginBottom: "1.5rem",
        }}>
          Your client experience,{" "}
          <em style={{ color: "#3d5247" }}>elevated.</em>
        </h1>

        <p style={{
          fontSize: "1rem", fontWeight: 300,
          color: "#6b6860", maxWidth: 440,
          lineHeight: 1.8, marginBottom: "2.5rem",
        }}>
          One calm space for files, updates, and invoices.
          No more scattered Drive links and WhatsApp chaos.
        </p>

        <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap", justifyContent: "center" }}>
          <SignUpButton mode="redirect">
            <button style={{
              background: "#1c1b18", color: "#f9f8f5",
              border: "none", cursor: "pointer", fontFamily: "inherit",
              fontSize: "0.85rem", fontWeight: 500,
              padding: "0.85rem 2rem", borderRadius: "8px",
              transition: "opacity 0.15s",
            }}>
              Start for free
            </button>
          </SignUpButton>

          <SignInButton mode="redirect">
            <button style={{
              background: "white", color: "#1c1b18",
              border: "1px solid #d4cfc4", cursor: "pointer", fontFamily: "inherit",
              fontSize: "0.85rem", fontWeight: 400,
              padding: "0.85rem 2rem", borderRadius: "8px",
            }}>
              Sign in
            </button>
          </SignInButton>
        </div>

        {/* Trust row */}
        <div style={{
          marginTop: "3rem",
          display: "flex", gap: "1.75rem", flexWrap: "wrap", justifyContent: "center",
        }}>
          {["Free forever plan", "No credit card", "5-min setup"].map((t) => (
            <span key={t} style={{ fontSize: "0.75rem", color: "#8a877e", display: "flex", alignItems: "center", gap: "0.35rem" }}>
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#3d5247" strokeWidth="2.5"><polyline points="20 6 9 17 4 12" /></svg>
              {t}
            </span>
          ))}
        </div>
      </section>

      {/* Features */}
      <section style={{
        padding: "5rem 1.5rem",
        background: "#f9f8f5",
        borderTop: "1px solid #e5e2d9",
      }}>
        <div style={{ maxWidth: 960, margin: "0 auto" }}>
          <p style={{
            textAlign: "center", fontSize: "0.72rem",
            fontWeight: 500, letterSpacing: "0.12em",
            textTransform: "uppercase", color: "#b8935a",
            marginBottom: "0.75rem",
          }}>
            What you get
          </p>
          <h2 style={{
            fontFamily: "'Playfair Display', Georgia, serif",
            fontSize: "clamp(1.8rem, 4vw, 2.8rem)",
            fontWeight: 400, textAlign: "center",
            color: "#1c1b18", marginBottom: "3rem", lineHeight: 1.2,
          }}>
            One link. Everything your client needs.
          </h2>

          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: "1px",
            background: "#e5e2d9",
            border: "1px solid #e5e2d9",
            borderRadius: "12px", overflow: "hidden",
          }}>
            {features.map((f) => (
              <div key={f.title} style={{
                background: "#f9f8f5",
                padding: "2rem 1.75rem",
              }}>
                <h3 style={{
                  fontSize: "0.9rem", fontWeight: 500,
                  color: "#1c1b18", marginBottom: "0.6rem",
                  letterSpacing: "0.01em",
                }}>
                  {f.title}
                </h3>
                <p style={{
                  fontSize: "0.85rem", fontWeight: 300,
                  color: "#6b6860", lineHeight: 1.75,
                }}>
                  {f.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{
        borderTop: "1px solid #e5e2d9",
        padding: "1.75rem 2rem",
        display: "flex", justifyContent: "space-between",
        alignItems: "center", flexWrap: "wrap", gap: "1rem",
        background: "#f9f8f5",
      }}>
        <span style={{
          fontFamily: "'Playfair Display', Georgia, serif",
          fontSize: "1rem", color: "#1c1b18",
        }}>
          Lication
        </span>
        <span style={{ fontSize: "0.72rem", color: "#b0ad a6" }}>
          © 2026 Lication. Built for freelancers.
        </span>
      </footer>
    </main>
  );
}
