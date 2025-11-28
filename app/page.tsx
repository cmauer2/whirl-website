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
      <header className="sticky top-0 z-20 border-b border-slate-800/80 bg-slate-950/80 backdrop-blur-xl">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          {/* Brand */}
          <Link href="/" className="flex items-center gap-3">
            <div className="relative">
              <div className="w-9 h-9 rounded-2xl bg-gradient-to-br from-violet-400 via-fuchsia-400 to-amber-300 shadow-lg shadow-violet-500/40 flex items-center justify-center text-slate-950 font-extrabold text-lg">
                W
              </div>
            </div>
            <div className="flex flex-col leading-tight">
              <span className="font-semibold tracking-[0.18em] text-[11px] uppercase text-slate-200">
                Whirl
              </span>
              <span className="text-[11px] text-slate-400">
                LSU campus social app
              </span>
            </div>
          </Link>

          {/* Nav links */}
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <Link href="/download" className="text-slate-300 hover:text-white transition">
              Download
            </Link>
            <Link href="/faq" className="text-slate-300 hover:text-white transition">
              FAQ
            </Link>
            <Link href="/contact" className="text-slate-300 hover:text-white transition">
              Contact
            </Link>
            <Link
              href="https://github.com/ghebert3/4330-Group-Project"
              target="_blank"
              className="text-slate-300 hover:text-white transition"
            >
              GitHub
            </Link>

            <Link href="/download">
              <button className="ml-2 inline-flex items-center gap-2 rounded-full bg-slate-50 text-slate-900 text-sm font-semibold px-4 py-2 shadow-md shadow-slate-900/50 hover:bg-slate-200 transition">
                Get the app
                <span className="text-xs text-slate-600">beta</span>
              </button>
            </Link>
          </nav>

          {/* Mobile CTAs */}
          <div className="flex items-center gap-2 md:hidden">
            <Link href="/download">
              <button className="rounded-full bg-slate-50 text-slate-900 text-xs font-semibold px-3 py-2 shadow-md shadow-slate-900/50 hover:bg-slate-200 transition">
                Get Whirl
              </button>
            </Link>
          </div>
        </div>
      </header>

      {/* MAIN CONTENT */}
      <div className="flex-1">
        <div className="max-w-6xl mx-auto px-6 py-10 md:py-14 grid lg:grid-cols-[1.15fr,0.95fr] gap-10 lg:gap-14 items-start">
          {/* LEFT – HERO + COPY */}
          <section className="space-y-8">
            {/* Tag */}
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-400/5 px-3 py-1 text-[11px] text-emerald-200">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              Live in beta for LSU students
            </div>

            {/* Headline */}
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
                gamers, and new friends. No massive group chats, no random DMs – just
                focused matches based on your classes, interests, and campus life.
              </p>
            </div>

            {/* Primary actions */}
            <div className="flex flex-wrap items-center gap-3">
              <Link href="/download">
                <button className="inline-flex items-center gap-2 rounded-full bg-violet-500 px-6 py-3 text-sm font-semibold text-slate-50 shadow-lg shadow-violet-500/40 hover:bg-violet-400 transition">
                  Download Whirl
                  <span className="text-[11px] rounded-full bg-violet-300/20 px-2 py-0.5 border border-violet-200/40 text-violet-50">
                    iOS / Android beta
                  </span>
                </button>
              </Link>

              <Link href="/faq">
                <button className="inline-flex items-center gap-2 rounded-full border border-slate-600 px-5 py-3 text-sm font-medium text-slate-100 hover:border-slate-400 hover:bg-slate-900/60 transition">
                  How it works
                  <span className="text-xs text-slate-400">FAQ</span>
                </button>
              </Link>
            </div>

            {/* Social proof / stats */}
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
          </section>

          {/* RIGHT – APP PREVIEW PANEL */}
          <section className="w-full">
            <div className="relative mx-auto max-w-sm">
              {/* Glow behind "phone" */}
              <div className="absolute -inset-x-4 -top-6 h-40 bg-gradient-to-b from-violet-400/30 via-fuchsia-400/20 to-transparent blur-3xl" />

              {/* Card */}
              <div className="relative rounded-[2rem] border border-slate-700 bg-slate-900/90 shadow-2xl shadow-black/70 p-4">
                {/* "Status bar" */}
                <div className="flex items-center justify-between text-[10px] text-slate-400 mb-3 px-1">
                  <span>Whirl preview</span>
                  <span>LSU · Now</span>
                </div>

                {/* Phone mock */}
                <div className="rounded-[1.5rem] border border-slate-700 bg-gradient-to-b from-slate-900 via-slate-950 to-slate-900 overflow-hidden p-3 space-y-3">
                  {/* Top filter row */}
                  <div className="flex items-center justify-between text-[11px] text-slate-300">
                    <div className="inline-flex items-center gap-2">
                      <span className="rounded-full bg-slate-800 px-3 py-1">
                        Campus feed
                      </span>
                      <span className="rounded-full border border-slate-700 px-2 py-1 text-slate-400">
                        For you
                      </span>
                    </div>
                    <span className="text-[10px] text-emerald-300 flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                      Online
                    </span>
                  </div>

                  {/* Feed card 1 */}
                  <div className="rounded-2xl bg-slate-900/80 border border-slate-700/80 p-3 space-y-2">
                    <div className="flex items-center justify-between text-[11px] text-slate-400">
                      <span>Tonight · Middleton Library</span>
                      <span className="rounded-full bg-emerald-500/10 text-emerald-300 px-2 py-0.5">
                        Study
                      </span>
                    </div>
                    <div className="text-sm font-medium text-slate-100">
                      CSC 4330 exam review group
                    </div>
                    <p className="text-[11px] text-slate-300">
                      “We’re walking through past tests and tricky problems – need 2 more.”
                    </p>
                    <div className="flex items-center justify-between pt-1 text-[10px] text-slate-400">
                      <span>Matched via Classes + Interests</span>
                      <span>3 joined · 1 spot left</span>
                    </div>
                  </div>

                  {/* Feed card 2 */}
                  <div className="rounded-2xl bg-slate-900/80 border border-slate-700/80 p-3 space-y-2">
                    <div className="flex items-center justify-between text-[11px] text-slate-400">
                      <span>Tomorrow · UREC</span>
                      <span className="rounded-full bg-amber-400/10 text-amber-200 px-2 py-0.5">
                        Fitness
                      </span>
                    </div>
                    <div className="text-sm font-medium text-slate-100">
                      Looking for a gym buddy
                    </div>
                    <p className="text-[11px] text-slate-300">
                      “Leg day around 6 pm – intermediate, just want someone consistent.”
                    </p>
                    <div className="flex items-center gap-2 text-[10px] text-slate-400">
                      <div className="w-5 h-5 rounded-full bg-gradient-to-br from-violet-400 to-fuchsia-400" />
                      <span>Suggested based on your interests</span>
                    </div>
                  </div>

                  {/* Quote */}
                  <div className="mt-1 rounded-2xl border border-slate-700 bg-slate-900/80 p-3 text-[11px] text-slate-300 flex items-start gap-2">
                    <span className="text-xl leading-none text-emerald-300">“</span>
                    <p>
                      I met more people in my major with Whirl in a week than I did all
                      last semester.
                    </p>
                  </div>
                </div>
              </div>

              {/* Small floating badge */}
              <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 rounded-full border border-slate-700 bg-slate-950/90 px-4 py-2 text-[11px] text-slate-300 shadow-lg shadow-black/70 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                LSU students only with <span className="font-semibold text-slate-100">@lsu.edu</span>
              </div>
            </div>
          </section>
        </div>

        {/* SECONDARY SECTIONS */}
        <section className="border-t border-slate-800 bg-slate-950/90">
          <div className="max-w-6xl mx-auto px-6 py-10 grid md:grid-cols-3 gap-6">
            {/* Column 1 */}
            <div className="space-y-3">
              <h2 className="text-sm font-semibold text-slate-100">
                Built for LSU, not the whole world
              </h2>
              <p className="text-xs text-slate-300 leading-relaxed">
                Whirl is intentionally small, focused, and local. Every account is tied to
                an @lsu.edu email so you know you are connecting with real LSU students.
              </p>
            </div>

            {/* Column 2 */}
            <div className="space-y-3">
              <h2 className="text-sm font-semibold text-slate-100">
                Simple, safe, and respectful
              </h2>
              <p className="text-xs text-slate-300 leading-relaxed">
                You choose what to share. We rely on Supabase authentication and modern
                security practices so you can focus on meeting people, not managing privacy
                settings.
              </p>
            </div>

            {/* Column 3 */}
            <div className="space-y-3">
              <h2 className="text-sm font-semibold text-slate-100">
                Made by students like you
              </h2>
              <p className="text-xs text-slate-300 leading-relaxed">
                Whirl started as a class project and grew into something bigger. Your
                feedback shapes what we build next – from new matching options to better
                event discovery.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-1 text-[11px] text-violet-300 hover:text-violet-200"
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
            <Link href="/privacy" className="hover:text-slate-200">
              Privacy
            </Link>
            <Link href="/terms" className="hover:text-slate-200">
              Terms
            </Link>
          </div>
        </div>
      </footer>
    </main>
  );
}