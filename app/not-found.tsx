import Link from "next/link";
import { Header } from "@/components/sections/Header";
import { Footer } from "@/components/sections/Footer";

export default function NotFound() {
  return (
    <>
      <Header />
      <main className="relative flex min-h-[70vh] items-center justify-center bg-teal-50 px-5 py-20">
        <div
          aria-hidden
          className="absolute inset-0 opacity-[0.18]"
          style={{
            backgroundImage:
              "radial-gradient(700px 400px at 80% 20%, rgba(120,191,191,0.55), transparent 60%), radial-gradient(500px 300px at 10% 90%, rgba(174,219,219,0.55), transparent 60%)",
          }}
        />
        <div className="container-x relative mx-auto max-w-2xl text-center">
          <p className="mb-6 inline-block border border-teal-300 bg-white/60 px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-teal-700 backdrop-blur">
            Error 404 · Page not found
          </p>
          <h1 className="text-5xl font-extrabold leading-[1.05] tracking-tight text-teal-900 md:text-7xl">
            <span className="block text-teal-700">404</span>
            <span className="block">We couldn&apos;t find that page.</span>
          </h1>
          <p className="mx-auto mt-6 max-w-lg text-base leading-relaxed text-teal-900/80 md:text-lg">
            The page you&apos;re looking for may have moved, been renamed, or never
            existed. Let&apos;s get you back on track.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link
              href="/"
              className="inline-flex items-center bg-teal-700 px-6 py-3 text-sm font-semibold text-white shadow-card transition-colors hover:bg-teal-900"
            >
              Back to home
              <span aria-hidden className="ml-2">
                →
              </span>
            </Link>
            <Link
              href="/#contact"
              className="inline-flex items-center border border-teal-700 bg-white px-6 py-3 text-sm font-semibold text-teal-700 transition-colors hover:bg-teal-100"
            >
              Contact us
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
