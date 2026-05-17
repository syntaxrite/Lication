import type { Metadata } from "next";
import { SignInButton, SignUpButton } from "@clerk/nextjs";

export const metadata: Metadata = {
  title: "Lication — Freelancer Client Portal",
  description:
    "A clean client portal for freelancers to manage projects, files, and updates.",
};

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#f8fbff] text-slate-900">
      {/* Background glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-[#eef6ff] to-[#dfefff]" />

      {/* Snowy mountain shapes */}
      <div className="absolute bottom-0 left-0 w-full">
        <svg
          viewBox="0 0 1440 400"
          className="w-full"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 320L180 170L320 280L520 80L760 300L980 140L1200 290L1440 110V400H0V320Z"
            fill="#dbeafe"
          />

          <path
            d="M0 340L210 220L390 330L620 130L840 320L1030 190L1240 320L1440 180V400H0V340Z"
            fill="#bfdbfe"
          />
        </svg>
      </div>

      {/* Content */}
      <section className="relative z-10 mx-auto flex min-h-screen max-w-6xl flex-col items-center justify-center px-6 text-center">
        <div className="rounded-full border border-slate-200 bg-white/70 px-4 py-1 text-sm font-medium backdrop-blur">
          Temporary Preview Build
        </div>

        <h1 className="mt-8 max-w-4xl text-5xl font-bold tracking-tight sm:text-6xl lg:text-7xl">
          Client portals for modern freelancers.
        </h1>

        <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
          Lication helps freelancers share updates, manage projects, and give
          clients a clean professional workspace.
        </p>

        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          <SignUpButton mode="redirect">
            <button className="rounded-2xl bg-slate-900 px-6 py-3 text-sm font-semibold text-white shadow-lg transition hover:scale-105 hover:bg-slate-700">
              Get Started
            </button>
          </SignUpButton>

          <SignInButton mode="redirect">
            <button className="rounded-2xl border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-900 shadow-sm transition hover:scale-105 hover:bg-slate-50">
              Sign In
            </button>
          </SignInButton>
        </div>

        <div className="mt-24 grid w-full max-w-5xl gap-6 md:grid-cols-3">
          <div className="rounded-3xl border border-slate-200 bg-white/80 p-6 shadow-sm backdrop-blur">
            <h2 className="text-lg font-semibold">Project Updates</h2>

            <p className="mt-3 text-sm leading-7 text-slate-600">
              Share progress and milestones with clients in a structured way.
            </p>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-white/80 p-6 shadow-sm backdrop-blur">
            <h2 className="text-lg font-semibold">File Sharing</h2>

            <p className="mt-3 text-sm leading-7 text-slate-600">
              Upload deliverables and keep everything organized in one place.
            </p>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-white/80 p-6 shadow-sm backdrop-blur">
            <h2 className="text-lg font-semibold">Professional Experience</h2>

            <p className="mt-3 text-sm leading-7 text-slate-600">
              Give clients a cleaner experience than messy chat threads.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
