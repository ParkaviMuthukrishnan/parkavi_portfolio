/**
 * Fixed, non-interactive backdrop: animated accent blobs, a soft floor glow,
 * a vignette and a subtle film grain. Pure CSS — no JS on the main thread.
 */
export function Background() {
  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      {/* Accent blobs (single accent gradient family) */}
      <div
        className="absolute -left-[10%] top-[-10%] h-[55vmax] w-[55vmax] animate-blob rounded-full opacity-[0.22] will-change-transform"
        style={{
          background: "radial-gradient(circle at center, rgba(249,115,22,0.55) 0%, rgba(249,115,22,0) 60%)",
        }}
      />
      <div
        className="absolute right-[-15%] top-[20%] h-[50vmax] w-[50vmax] animate-blob-alt rounded-full opacity-[0.16] will-change-transform"
        style={{
          background: "radial-gradient(circle at center, rgba(251,191,36,0.5) 0%, rgba(251,191,36,0) 60%)",
        }}
      />
      <div
        className="absolute bottom-[-25%] left-[30%] h-[45vmax] w-[45vmax] animate-blob rounded-full opacity-[0.12] will-change-transform [animation-delay:-12s]"
        style={{
          background: "radial-gradient(circle at center, rgba(249,115,22,0.5) 0%, rgba(249,115,22,0) 60%)",
        }}
      />

      {/* Floor glow (echoes the warm horizon light in the reference design) */}
      <div
        className="absolute bottom-0 left-1/2 h-[30vh] w-[80vw] -translate-x-1/2 translate-y-1/2 rounded-[100%] opacity-40"
        style={{
          background: "radial-gradient(ellipse at center, rgba(249,115,22,0.35) 0%, rgba(249,115,22,0) 70%)",
        }}
      />

      {/* Vignette */}
      <div
        className="absolute inset-0"
        style={{
          background: "radial-gradient(ellipse at center, rgba(11,9,12,0) 40%, rgba(11,9,12,0.7) 100%)",
        }}
      />

      {/* Grain */}
      <div className="grain absolute inset-0 opacity-[0.07] mix-blend-overlay" />
    </div>
  );
}
