"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#461D7C] text-white flex flex-col">
      {/* TOP NAV */}
      <header className="w-full max-w-5xl mx-auto px-6 py-5 flex items-center justify-between">
        {/* Logo + Name */}
        <div className="flex items-center gap-3">
          <Image
            src="/tornado-whirl-logo-transparent.png"
            alt="Whirl logo"
            width={40}
            height={40}
            className="rounded-xl"
            priority
          />
          <span className="text-lg font-semibold tracking-wide">Whirl</span>
        </div>

        {/* Nav Buttons */}
        <nav className="flex items-center gap-3 text-sm">
          <Link href="/download">
            <button className="px-4 py-2 rounded-full bg-white text-[#461D7C] font-semibold shadow-md hover:bg-purple-100 transition">
              Download
            </button>
          </Link>

          <Link
            href="https://github.com/ghebert3/4330-Group-Project"
            target="_blank"
          >
            <button className="px-4 py-2 rounded-full border border-white/40 text-white/90 hover:bg-white/10 transition">
              GitHub
            </button>
          </Link>

          <Link href="/contact">
            <button className="px-4 py-2 rounded-full border border-white/40 text-white/90 hover:bg-white/10 transition">
              Contact / FAQ
            </button>
          </Link>
        </nav>
      </header>

      {/* HERO SECTION */}
      <section className="flex-1 flex items-center">
        <div className="w-full max-w-5xl mx-auto px-6 py-10 flex flex-col items-center text-center gap-6">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">
            LSU’s campus social app.
          </h1>

          <p className="text-sm md:text-base text-white/80 max-w-xl">
            Meet new Tigers for study sessions, workouts, gaming, and hangouts —
            all verified with your <span className="font-semibold">@lsu.edu</span> email.
          </p>

          {/* Primary CTAs */}
          <div className="flex flex-wrap justify-center gap-4 mt-2">
            <Link href="/download">
              <button className="px-6 py-3 rounded-full bg-white text-[#461D7C] font-semibold shadow-lg hover:bg-purple-100 transition">
                Get Whirl
              </button>
            </Link>

            <Link
              href="https://github.com/ghebert3/4330-Group-Project"
              target="_blank"
            >
              <button className="px-6 py-3 rounded-full border border-white/40 text-white/90 hover:bg-white/10 transition">
                View the code on GitHub
              </button>
            </Link>
          </div>

          <p className="text-xs text-white/60 mt-4">
            Built by LSU students. Beta access for <span className="font-semibold text-white">@lsu.edu</span> emails.
          </p>
        </div>
      </section>

      {/* FOOTER (tiny + subtle) */}
      <footer className="w-full py-4 text-center text-[11px] text-white/50">
        © {new Date().getFullYear()} Whirl · Not affiliated with LSU.
      </footer>
    </main>
  );
}