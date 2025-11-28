"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-[#2B0F4F] via-[#461D7C] to-black text-white flex flex-col">
      {/* NAVBAR */}
      <header className="w-full border-b border-white/10 bg-black/10 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          {/* Left: Logo + wordmark */}
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/logo.png"
              alt="Whirl Logo"
              width={40}
              height={40}
              className="rounded-xl"
              priority
            />
            <div className="flex flex-col">
              <span className="font-semibold tracking-[0.18em] text-xs uppercase text-white/70">
                Whirl
              </span>
              <span className="text-xs text-white/50">
                LSU Social App
              </span>
            </div>
          </Link>

          {/* Right: Nav links */}
          <nav className="hidden sm:flex items-center gap-4 text-sm">
            <Link href="/download" className="text-white/80 hover:text-white transition">
              Download
            </Link>

            <Link
              href="https://github.com/ghebert3/4330-Group-Project"
              target="_blank"
              className="text-white/80 hover:text-white transition"
            >
              GitHub
            </Link>

            <Link
              href="/contact"
              className="text-white/80 hover:text-white transition"
            >
              Contact / FAQ
            </Link>

            <Link href="/download">
              <button className="ml-2 px-4 py-2 rounded-full bg-white text-[#461D7C] font-semibold shadow-md hover:bg-purple-100 transition">
                Get the App
              </button>
            </Link>
          </nav>

          {/* Mobile CTA */}
          <div className="sm:hidden">
            <Link href="/download">
              <button className="px-4 py-2 rounded-full bg-white text-[#461D7C] text-sm font-semibold shadow-md hover:bg-purple-100 transition">
                Get Whirl
              </button>
            </Link>
          </div>
        </div>
      </header>

      {/* HERO */}
      <section className="flex-1">
        <div className="max-w-6xl mx-auto px-6 py-12 md:py-16 grid md:grid-cols-2 gap-10 items-center">
          {/* Left: Text */}
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 bg-black/40 border border-white/15 rounded-full px-4 py-1 text-xs text-white/80">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              Built by LSU students · Beta for @lsu.edu
            </div>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight">
              Meet new{" "}
              <span className="text-yellow-300">Tigers</span>, find your people,{" "}
              and stay connected to campus life.
            </h1>

            <p className="text-sm md:text-base text-white/75 max-w-xl leading-relaxed">
              Whirl is an LSU-only social app that helps you find study partners,
              gym buddies, gamers, and new friends based on your classes,
              interests, and campus activities.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4">
              <Link href="/download">
                <button className="px-6 py-3 rounded-full bg-white text-[#461D7C] font-semibold shadow-lg hover:bg-purple-100 transition">
                  Get Whirl (Beta)
                </button>
              </Link>

              <Link
                href="https://github.com/ghebert3/4330-Group-Project"
                target="_blank"
              >
                <button className="px-6 py-3 rounded-full border border-white/40 text-white/90 hover:bg-white/10 transition">
                  View project on GitHub
                </button>
              </Link>
            </div>

            <p className="text-xs text-white/60">
              Available to LSU students with a valid{" "}
              <span className="font-semibold text-white">@lsu.edu</span> email.
            </p>
          </div>

          {/* Right: App mock / card */}
          <div className="relative">
            <div className="absolute -top-8 -left-6 w-32 h-32 bg-purple-500/30 blur-3xl rounded-full" />
            <div className="absolute -bottom-10 -right-8 w-40 h-40 bg-yellow-300/20 blur-3xl rounded-full" />

            <div className="relative bg-black/40 border border-white/15 rounded-3xl shadow-2xl p-5 max-w-sm mx-auto">
              {/* Top pill */}
              <div className="flex items-center justify-between text-xs text-white/60 mb-4">
                <span className="px-3 py-1 rounded-full bg-black/40 border border-white/20">
                  Whirl · Campus Feed
                </span>
                <span>Now · LSU</span>
              </div>

              {/* Card content */}
              <div className="bg-black/40 border border-white/20 rounded-2xl p-4 mb-4 space-y-3">
                <div className="text-xs text-white/60">Tonight · Middleton Library</div>
                <div className="font-semibold text-sm">
                  CSC 4330 Exam Study Group
                </div>
                <p className="text-xs text-white/70">
                  “Looking for 2–3 more people to review past exams and practice problems 👀”
                </p>

                <div className="flex items-center justify-between pt-2">
                  <div className="px-3 py-1 rounded-full bg-purple-500/20 border border-purple-300/60 text-[11px]">
                    Matched via <span className="font-semibold">Classes + Interests</span>
                  </div>
                  <div className="text-right text-[11px] text-white/70">
                    <div>Connections this week</div>
                    <div className="text-lg font-bold text-yellow-300">128</div>
                  </div>
                </div>
              </div>

              {/* Quote */}
              <div className="flex items-center justify-between text-[11px] text-white/60">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-full bg-gradient-to-r from-orange-400 to-purple-500" />
                  <span>“Met more people here than all last year.”</span>
                </div>
                <span>— LSU Student</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="bg-black/30 border-t border-white/10">
        <div className="max-w-6xl mx-auto px-6 py-10 space-y-6">
          <h2 className="text-lg font-semibold">Why students use Whirl</h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: "🎓",
                title: "LSU-only community",
                desc: "Sign in with your @lsu.edu email so every profile is verified and local to campus."
              },
              {
                icon: "🤝",
                title: "Find your people",
                desc: "Match with students who share your classes, interests, or favorite campus spots."
              },
              {
                icon: "📚",
                title: "Study smarter",
                desc: "Build or join study groups for specific courses and exams without endless group chats."
              },
              {
                icon: "💪",
                title: "More than just class",
                desc: "Meet gym partners, gamers, and people who enjoy the same hobbies you do."
              },
              {
                icon: "🛡️",
                title: "Privacy first",
                desc: "Powered by Supabase authentication and secure session handling for peace of mind."
              },
              {
                icon: "🚀",
                title: "Built by students",
                desc: "Created by LSU students who understand campus life and ship new features regularly."
              }
            ].map((f, i) => (
              <div
                key={i}
                className="bg-white/5 border border-white/10 rounded-2xl p-5 shadow-lg"
              >
                <div className="text-2xl mb-2">{f.icon}</div>
                <div className="font-semibold mb-1">{f.title}</div>
                <div className="text-sm text-white/75 leading-relaxed">{f.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="bg-[#070214]/80 border-t border-white/10">
        <div className="max-w-6xl mx-auto px-6 py-10 grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-4">
            <h2 className="text-lg font-semibold">How Whirl works</h2>
            <ol className="space-y-3 text-sm text-white/75 list-decimal list-inside">
              <li>Download the app and sign in with your @lsu.edu email.</li>
              <li>Select your interests, classes, and what you are looking for.</li>
              <li>Get matched with other students for study groups, meetups, or events.</li>
              <li>Connect, chat, and meet around campus when it fits your schedule.</li>
            </ol>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-2xl p-5 text-sm text-white/80 space-y-3">
            <div className="font-semibold text-base">Built for campus life</div>
            <p>
              Whirl started as a simple way to connect classmates and quickly grew into a
              campus-focused social hub. Our goal is to make it easier to meet people in a way
              that feels natural, safe, and centered around LSU.
            </p>
            <p>
              If you have ideas, feedback, or just want to report something that feels off,
              we genuinely want to hear from you.
            </p>
            <Link href="/contact" className="inline-block mt-1 text-sm text-yellow-300 hover:text-yellow-200">
              Reach out to the team →
            </Link>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/10 bg-black/40">
        <div className="max-w-6xl mx-auto px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/55">
          <div>
            © {new Date().getFullYear()} Whirl · Built by LSU students · Not affiliated with LSU.
          </div>
          <div className="flex items-center gap-4">
            <Link href="/privacy" className="hover:text-white/80">
              Privacy
            </Link>
            <Link href="/terms" className="hover:text-white/80">
              Terms
            </Link>
          </div>
        </div>
      </footer>
    </main>
  );
}