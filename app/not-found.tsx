import Link from "next/link";

export default function NotFound() {
  return (
    <main className="container-x flex min-h-screen flex-col items-center justify-center text-center">
      <p className="eyebrow">404</p>
      <h1 className="mt-6 font-heading text-display-sm font-semibold">Page not found</h1>
      <p className="mt-4 max-w-md text-fg-muted">The page you are looking for doesn&apos;t exist or has moved.</p>
      <Link
        href="/"
        className="mt-8 inline-flex items-center rounded-full bg-accent-gradient px-6 py-3 font-heading text-sm font-semibold text-bg transition-transform duration-300 hover:scale-[1.03]"
      >
        Back home
      </Link>
    </main>
  );
}
