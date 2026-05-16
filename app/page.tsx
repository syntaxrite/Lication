import type { Metadata } from "next";
import { SignInButton, SignUpButton } from "@clerk/nextjs";

export const metadata: Metadata = {
  title: "Lication — Client Portal for Freelancers",
  description:
    "Lication is a simple client portal for freelancers to share updates, manage files, and keep client communication organized.",
  keywords: [
    "client portal",
    "freelancer portal",
    "freelancer client portal",
    "project updates",
    "client dashboard",
  ],
  robots: {
    index: true,
    follow: true,
  },
};

const features = [
  {
    title: "Organized client workspace",
    description:
      "Keep files, updates, and conversations in one place instead of across random chats.",
  },
  {
    title: "Cleaner handoffs",
    description:
      "Give each client a simple portal where they can follow progress without confusion.",
  },
  {
    title: "Built for freelancers",
    description:
      "A focused experience for solo creators, agencies, and small service businesses.",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <section className="mx-auto flex min-h-screen w-full max-w-6xl flex-col justify-center px-6 py-16 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <div className="mb-5 inline-flex rounded-full border border-slate-200 bg-slate-50 px-4 py-1 text-sm font-medium text-slate-700">
              Temporary landing page
            </div>

            <h1 className="max-w-xl text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              Client portals made simple for freelancers.
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">
              Lication helps freelancers give clients a clean, private place to
              view updates, files, and progress — without messy back-and-forth.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <SignUpButton mode="redirect">
                <button className="inline-flex items-center justify-center rounded-xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-700">
                  Get started
                </button>
              </SignUpButton>

              <SignInButton mode="redirect">
                <button className="inline-flex items-center justify-center rounded-xl border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-50">
                  Sign in
                </button>
              </SignInButton>
            </div>

            <p className="mt-4 text-sm text-slate-500">
              Built with Clerk for auth and Vercel for deployment.
            </p>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6 shadow-sm">
            <div className="rounded-2xl bg-white p-5 shadow-sm">
              <p className="text-sm font-medium text-slate-500">Preview</p>

              <div className="mt-3 space-y-3">
                <div className="h-3 w-3/4 rounded-full bg-slate-200" />
                <div className="h-3 w-1/2 rounded-full bg-slate-200" />
                <div className="h-3 w-5/6 rounded-full bg-slate-200" />
              </div>

              <div className="mt-6 grid gap-3 sm:grid-cols-3">
                <div className="rounded-xl border border-slate-200 p-3">
                  <div className="text-xs text-slate-500">Projects</div>
                  <div className="mt-1 text-lg font-semibold">12</div>
                </div>

                <div className="rounded-xl border border-slate-200 p-3">
                  <div className="text-xs text-slate-500">Clients</div>
                  <div className="mt-1 text-lg font-semibold">08</div>
                </div>

                <div className="rounded-xl border border-slate-200 p-3">
                  <div className="text-xs text-slate-500">Updates</div>
                  <div className="mt-1 text-lg font-semibold">24</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 grid gap-4 md:grid-cols-3">
          {features.map((feature) => (
            <article
              key={feature.title}
              className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
            >
              <h2 className="text-base font-semibold">{feature.title}</h2>

              <p className="mt-2 text-sm leading-7 text-slate-600">
                {feature.description}
              </p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
