import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Admin Login",
  robots: { index: false, follow: false, googleBot: { index: false, follow: false } },
};

export default function AdminLoginPage({
  searchParams,
}: {
  searchParams: { next?: string; error?: string };
}) {
  const next = searchParams.next ?? "/audit";
  const hasError = searchParams.error === "1";

  return (
    <div className="min-h-screen flex items-center justify-center bg-zinc-950">
      <div className="w-full max-w-sm rounded-2xl border border-zinc-800 bg-zinc-900 p-8 shadow-2xl">
        <div className="mb-6 text-center">
          <div className="mx-auto mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-zinc-800">
            <svg className="h-5 w-5 text-zinc-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
          </div>
          <h1 className="text-lg font-semibold text-white">Admin Access</h1>
          <p className="mt-1 text-[13px] text-zinc-500">Enter your admin password to continue.</p>
        </div>

        <form action="/api/admin/auth" method="POST">
          <input type="hidden" name="next" value={next} />
          <div className="mb-4">
            <label htmlFor="password" className="mb-1.5 block text-[12px] font-medium text-zinc-400">
              Password
            </label>
            <input
              id="password"
              type="password"
              name="password"
              required
              autoFocus
              className="w-full rounded-lg border border-zinc-700 bg-zinc-800 px-3.5 py-2.5 text-[14px] text-white placeholder-zinc-600 outline-none focus:border-zinc-500 focus:ring-1 focus:ring-zinc-500"
              placeholder="Enter admin password"
            />
          </div>
          {hasError && (
            <p className="mb-3 rounded-lg bg-red-900/40 px-3.5 py-2 text-[13px] text-red-400">
              Incorrect password. Please try again.
            </p>
          )}
          <button
            type="submit"
            className="w-full rounded-lg bg-white px-4 py-2.5 text-[14px] font-semibold text-zinc-900 transition hover:bg-zinc-100"
          >
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
}
