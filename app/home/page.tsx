"use client";

import React from "react";
import Link from "next/link";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-purple-800 via-purple-900 to-black text-white">
      {/* NAVBAR */}
      <header className="max-w-6xl mx-auto px-6 py-6 flex items-center justify-between">
        {/* Left: Logo */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-yellow-300 to-white text-purple-700 font-extrabold flex items-center justify-center shadow-xl">
            W
          </div>
          <span className="font-bold text-lg tracking-wide">Whirl</span>
        </div>

        {/* Right: Links */}
        <nav className="flex items-center gap-6 text-sm">
          <Link href="#download">
            <button className="px-4 py-2 bg-yellow-300 text-black font-semibold rounded-full shadow-md hover:opacity-90 transition">
              Download
            </button>
          </Link>

          <Link
            href="https://github.com/your-org/your-repo"
            target="_blank"
            className="hover:opacity-80 transition"
          >
            GitHub
          </Link>

          <Link href="#faq" className="hover:opacity-80 transition">
            Contact / FAQ
          </Link>
        </nav>
      </header>

      {/* HERO */}
      <section className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-12 items-center">
        {/* LEFT SIDE */}
        <div>
          <div className="inline-flex items-center gap-2 bg-black/40 border border-white/20 rounded-full px-4 py-1 mb-4 text-xs">
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            LSU-only campus social app
          </div>

          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 leading-tight">
            Meet new Tigers — <span className="text-yellow-300">instantly.</span>
          </h1>

          <p className="text-white/70 text-sm md:text-base max-w-md leading-6 mb-6">
            Whirl helps LSU students find study partners, gym buddies, gamers,
            and friends based on interests, classes, and campus life.
          </p>

          <div className="flex flex-wrap gap-4 mb-4" id="download">
            <Link href="#download">
              <button className="px-6 py-3 bg-purple-700 hover:bg-purple-800 rounded-full shadow-lg text-white font-semibold transition">
                Get the App (Soon)
              </button>
            </Link>

            <Link
              href="https://github.com/your-org/your-repo"
              target="_blank"
              className="px-6 py-3 border border-white/40 rounded-full hover:bg-white/10 transition"
            >
              View on GitHub
            </Link>
          </div>

          <p className="text-xs text-white/60">
            <strong className="text-white">Beta:</strong> LSU students only with
            <strong className="text-white"> @lsu.edu</strong> emails.
          </p>
        </div>

        {/* RIGHT SIDE (Mockup Card) */}
        <div className="bg-black/40 rounded-2xl border border-white/20 shadow-2xl p-6 max-w-sm mx-auto">
          <div className="flex justify-between mb-4 text-xs text-white/60">
            <span className="px-3 py-1 bg-black/40 border border-white/20 rounded-full">
              Whirl · Campus Feed
            </span>
            <span>Now · LSU</span>
          </div>

          <div className="bg-black/40 border border-white/20 p-4 rounded-xl mb-4">
            <div className="font-semibold mb-1">Tonight · Middleton Library</div>
            <div className="text-xs text-white/60 mb-4">
              “Study group for CSC 4330 exam · need 2 more people 👀”
            </div>

            <div className="flex justify-between">
              <div className="bg-purple-500/20 border border-purple-300 rounded-full px-3 py-1 text-xs">
                Matched via <strong>Interests</strong>
              </div>
              <div className="text-right text-xs">
                <span className="text-white/60">Connections this week</span>
                <div className="text-yellow-300 font-bold text-lg">128</div>
              </div>
            </div>
          </div>

          <div className="flex justify-between text-xs text-white/60">
            <div className="flex items-center gap-2">
              <div className="w-5 h-5 rounded-full bg-gradient-to-r from-orange-400 to-purple-500" />
              “Met more people here than all last year.”
            </div>
            <span>— LSU Student</span>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="max-w-6xl mx-auto px-6 py-10 grid gap-10">
        <h2 className="text-lg font-semibold">Why Whirl?</h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              icon: "🎓",
              title: "LSU-only community",
              desc: "Sign up with your @lsu.edu email so every match is verified.",
            },
            {
              icon: "🤝",
              title: "Meetups that match you",
              desc: "Find study groups, gym partners, gamers, or friends instantly.",
            },
            {
              icon: "⚡",
              title: "Simple & fast",
              desc: "Set your interests and start meeting new Tigers in minutes.",
            },
            {
              icon: "🛡",
              title: "Privacy focused",
              desc: "Your data stays secure with Supabase. You stay in control.",
            },
            {
              icon: "📍",
              title: "Campus-centered",
              desc: "Built fully around LSU classes, life, and campus culture.",
            },
            {
              icon: "🚀",
              title: "Constantly updating",
              desc: "New features roll out weekly. Your feedback shapes Whirl.",
            },
          ].map((f, i) => (
            <div
              key={i}
              className="bg-black/40 border border-white/20 rounded-xl p-5 shadow-lg"
            >
              <div className="text-2xl mb-2">{f.icon}</div>
              <div className="font-semibold mb-1">{f.title}</div>
              <div className="text-white/60 text-sm leading-5">{f.desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ / CONTACT */}
      <section
        id="faq"
        className="max-w-6xl mx-auto px-6 py-12 grid md:grid-cols-2 gap-10 border-t border-white/20"
      >
        <div>
          <h3 className="text-lg font-semibold mb-3">FAQ</h3>

          <p className="text-white/70 mb-4">
            <strong className="text-white">Who can use Whirl?</strong>  
            LSU students only.
          </p>

          <p className="text-white/70 mb-4">
            <strong className="text-white">Is this official LSU software?</strong>  
            No — Whirl is student-made and not affiliated with LSU.
          </p>

          <p className="text-white/70 mb-4">
            <strong className="text-white">Is there an app?</strong>  
            Yes, Android/iOS beta builds coming soon.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-3">Contact the Team</h3>
          <p className="text-white/70 mb-3">
            Have ideas or found issues? Reach out anytime.
          </p>

          <div className="inline-flex items-center gap-2 px-3 py-2 border border-white/40 rounded-full text-sm">
            📧 contact@joinwhirl.fun
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="text-center py-6 text-white/50 text-xs">
        © {new Date().getFullYear()} Whirl — Built by LSU students.
      </footer>
    </main>
  );
}