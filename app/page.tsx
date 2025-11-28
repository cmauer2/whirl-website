"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-50 flex flex-col">
      {/* Background accents */}
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950" />
        <div className="absolute inset-y-0 right-[-10%] w-2/3 bg-gradient-to-b from-violet-500/20 via-fuchsia-500/10 to-emerald-400/10 blur-3xl" />
        <div className="absolute inset-0 opacity-[0.12] bg-[radial-gradient(circle_at_top,_#ffffff_0,_transparent_60%)]" />
      </div>

      {/* NAVBAR */}
      <header className="sticky top-0 z-20 border-b border-slate-800/80 bg-slate-950/85 backdrop-blur-xl">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          {/* Brand */}
          <Link href="/" className="flex items-center gap-3 cursor-pointer">
            <Image
              src="/tornado-whirl-logo-transparent.png"
              alt="Whirl tornado logo"
              width={150}
              height={150}
              className="h-10 w-auto object-contain transition-transform duration-150 hover:scale-[1.03]"
              priority
            />
              <span className="text-[11px] text-slate-400 ml-1">
                LSU campus social app
              </span>
          </Link>

          {/* Desktop nav */}
          <nav
            className="hidden md:flex items-center gap-6 text-sm"
            aria-label="Main navigation"
          >
            <Link
              href="/download"
              className="text-slate-300 hover:text-white transition cursor-pointer"
            >
              Download
            </Link>
            <Link
              href="/faq"
              className="text-slate-300 hover:text-white transition cursor-pointer"
            >
              FAQ
            </Link>
            <Link
              href="/contact"
              className="text-slate-300 hover:text-white transition cursor-pointer"
            >
              Contact
            </Link>
            <Link
              href="https://github.com/ghebert3/4330-Group-Project"
              target="_blank"
              className="text-slate-300 hover:text-white transition cursor-pointer"
            >
              GitHub
            </Link>

            <Link href="/download" className="cursor-pointer">
              <button className="ml-2 inline-flex items-center gap-2 rounded-full bg-slate-50 text-slate-900 text-sm font-semibold px-4 py-2 shadow-md shadow-slate-900/50 hover:bg-slate-200 transition cursor-pointer">
                Get the app
                <span className="text-xs text-slate-600">beta</span>
              </button>
            </Link>
          </nav>

          {/* Mobile CTA */}
          <div className="flex items-center gap-2 md:hidden">
            <Link href="/download" className="cursor-pointer">
              <button className="rounded-full bg-slate-50 text-slate-900 text-xs font-semibold px-3 py-2 shadow-md shadow-slate-900/50 hover:bg-slate-200 transition cursor-pointer">
                Get Whirl
              </button>
            </Link>
          </div>
        </div>
      </header>

      {/* MAIN CONTENT */}
      <div className="flex-1">
        <section className="max-w-6xl mx-auto px-6 py-10 md:py-14 grid lg:grid-cols-[1.15fr,0.95fr] gap-10 lg:gap-14 items-start">
          {/* LEFT – HERO + COPY */}
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-400/5 px-3 py-1 text-[11px] text-emerald-200">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              Live in beta for LSU students
            </div>

            <div className="space-y-4">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight">
                One place to{" "}
                <span className="bg-gradient-to-r from-violet-300 via-fuchsia-300 to-amber-200 bg-clip-text text-transparent">
                  meet your people
                </span>{" "}
                at LSU.
              </h1>
              <p className="text-sm md:text-base text-slate-300 leading-relaxed max-w-xl">
                Whirl connects LSU students with study partners, gym buddies,
                current campus events, and new friends. You choose who you want
                to match with based on your classes, interests, and campus life.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <Link href="/download" className="cursor-pointer">
                <button className="inline-flex items-center gap-2 rounded-full bg-violet-500 px-6 py-3 text-sm font-semibold text-slate-50 shadow-lg shadow-violet-500/40 hover:bg-violet-400 transition cursor-pointer">
                  Download Whirl
                  <span className="text-[11px] rounded-full bg-violet-300/20 px-2 py-0.5 border border-violet-200/40 text-violet-50">
                    iOS / Android beta
                  </span>
                </button>
              </Link>

              <Link href="/faq" className="cursor-pointer">
                <button className="inline-flex items-center gap-2 rounded-full border border-slate-600 px-5 py-3 text-sm font-medium text-slate-100 hover:border-slate-400 hover:bg-slate-900/60 transition cursor-pointer">
                  How it works
                  <span className="text-xs text-slate-400">FAQ</span>
                </button>
              </Link>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-2 text-xs text-slate-300">
              <div className="rounded-2xl border border-slate-800 bg-slate-900/60 px-4 py-3">
                <div className="text-[11px] text-slate-400">Connections this week</div>
                <div className="text-xl font-semibold text-emerald-300">128</div>
              </div>
              <div className="rounded-2xl border border-slate-800 bg-slate-900/60 px-4 py-3">
                <div className="text-[11px] text-slate-400">Study groups created</div>
                <div className="text-xl font-semibold text-violet-200">42</div>
              </div>
              <div className="rounded-2xl border border-slate-800 bg-slate-900/60 px-4 py-3 hidden sm:block">
                <div className="text-[11px] text-slate-400">Built by</div>
                <div className="text-sm font-semibold text-slate-100">
                  LSU CS students
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT – REAL APP SCREENSHOTS */}
          <div className="w-full">
            <div className="relative mx-auto max-w-sm">
              {/* Glow behind phones */}
              <div className="absolute -inset-x-10 -top-8 h-40 bg-gradient-to-b from-violet-400/30 via-fuchsia-400/20 to-transparent blur-3xl" />

              {/* Stacked screenshots */}
              <div className="relative">
                {/* Back screenshot */}
                <div className="absolute -top-6 -left-4 w-[72%] rotate-[-10deg] rounded-[2rem] border border-slate-700/80 bg-slate-900/90 shadow-2xl shadow-black/70 overflow-hidden">
                  <div className="bg-slate-900/80 h-4 w-full" />
                  <div className="relative w-full">
                    <Image
                      src="/meetpage-UI.png"
                      alt="Whirl profile / meet page screen"
                      width={700}
                      height={1600}
                      className="w-full h-auto object-cover"
                      priority
                    />
                  </div>
                </div>

                {/* Front screenshot */}
                <div className="relative w-full rounded-[2rem] border border-slate-600 bg-slate-900/95 shadow-2xl shadow-black/80 overflow-hidden">
                  <div className="bg-slate-900/90 h-4 w-full" />
                  <Image
                    src="/meetup-UI.png"
                    alt="Whirl home / search screen"
                    width={700}
                    height={1600}
                    className="w-full h-auto object-cover"
                    priority
                  />
                </div>
              </div>

              {/* Badge */}
              <div className="absolute -bottom-7 left-1/2 -translate-x-1/2 rounded-full border border-slate-700 bg-slate-950/90 px-4 py-2 text-[11px] text-slate-300 shadow-lg shadow-black/70 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                Actual in-app screenshots · LSU students only with{" "}
                <span className="font-semibold text-slate-100">@lsu.edu</span>
              </div>
            </div>
          </div>
        </section>

        {/* SECONDARY SECTION */}
        <section className="border-t border-slate-800 bg-slate-950/90">
          <div className="max-w-6xl mx-auto px-6 py-10 grid md:grid-cols-3 gap-6">
            <div className="space-y-3">
              <h2 className="text-sm font-semibold text-slate-100">
                Built for LSU, not the whole world
              </h2>
              <p className="text-xs text-slate-300 leading-relaxed">
                Whirl is a small, focused, and local mobile application. Every account is
                tied to an @lsu.edu email so you know you are connecting with real
                LSU students.
              </p>
            </div>

            <div className="space-y-3">
              <h2 className="text-sm font-semibold text-slate-100">
                Simple, safe, and respectful
              </h2>
              <p className="text-xs text-slate-300 leading-relaxed">
                You choose what to share. We rely on Supabase authentication and
                modern security practices so you can focus on meeting people, not
                managing privacy settings.
              </p>
            </div>

            <div className="space-y-3">
              <h2 className="text-sm font-semibold text-slate-100">
                Made by LSU CS students
              </h2>
              <p className="text-xs text-slate-300 leading-relaxed">
                Whirl started in our Software Systems (CSC 4330) class as a group
                project. Any sort of feedback would be greatly appreciated.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-1 text-[11px] text-violet-300 hover:text-violet-200 cursor-pointer"
              >
                Share feedback with the team →
              </Link>
            </div>
          </div>
        </section>
      </div>

      {/* FOOTER */}
      <footer className="border-t border-slate-800 bg-slate-950/95">
        <div className="max-w-6xl mx-auto px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-slate-400">
          <div className="text-center sm:text-left">
            © {new Date().getFullYear()} Whirl. Built by LSU students. Not affiliated with LSU.
          </div>
          <div className="flex items-center gap-4">
            <Link href="/privacy" className="hover:text-slate-200 cursor-pointer">
              Privacy
            </Link>
            <Link href="/terms" className="hover:text-slate-200 cursor-pointer">
              Terms
            </Link>
          </div>
        </div>
      </footer>
    </main>
  );
}