// app/page.tsx
import Image from 'next/image';
import logo from '../public/tornado-whirl-logo-transparent.png';

export default function LandingPage() {
  return (
    <main
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: '#f7f7fb',
        fontFamily:
          'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
        padding: '32px 16px',
      }}
    >
      {/* Top navigation / header */}
      <header
        style={{
          width: '100%',
          maxWidth: 960,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginBottom: 32,
        }}
      >
        {/* Logo + title */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <Image
            src={logo}
            alt="Whirl Logo"
            width={40}
            height={40}
            style={{ borderRadius: 8 }}
          />
          <span style={{ fontWeight: 700, fontSize: 18 }}>Whirl</span>
        </div>

        {/* Navigation links */}
        <nav style={{ display: 'flex', gap: 16, fontSize: 14 }}>
          <a href="/home" style={{ textDecoration: 'none', color: '#555' }}>
            Home
          </a>
          <a href="/contact" style={{ textDecoration: 'none', color: '#555' }}>
            Contact
          </a>
          <a href="/reset" style={{ textDecoration: 'none', color: '#555' }}>
            Reset Password
          </a>
        </nav>
      </header>

      {/* Hero content */}
      <section
        style={{
          width: '100%',
          maxWidth: 960,
          display: 'grid',
          gridTemplateColumns: 'minmax(0, 1.3fr) minmax(0, 1fr)',
          gap: 32,
          alignItems: 'center',
        }}
      >
        {/* Left side (text) */}
        <div>
          <h1
            style={{
              fontSize: 'clamp(28px, 4vw, 40px)',
              marginBottom: 16,
              color: '#111827',
            }}
          >
            LSU&apos;s campus social app.
          </h1>

          <p
            style={{
              fontSize: 16,
              color: '#4b5563',
              maxWidth: 480,
              lineHeight: 1.6,
            }}
          >
            Whirl connects LSU students through meetups, events, and campus life.
            Discover what&apos;s happening around you, connect with classmates,
            and make campus feel smaller in the best way.
          </p>

          {/* Call-to-action buttons */}
          <div
            style={{
              marginTop: 24,
              display: 'flex',
              flexWrap: 'wrap',
              gap: 12,
            }}
          >
            <a
              href="#"
              style={{
                padding: '10px 20px',
                backgroundColor: '#461D7C',
                color: 'white',
                borderRadius: 999,
                textDecoration: 'none',
                fontSize: 14,
                fontWeight: 600,
              }}
            >
              Download app (coming soon)
            </a>

            <a
              href="/home"
              style={{
                padding: '10px 20px',
                backgroundColor: 'white',
                color: '#111827',
                borderRadius: 999,
                textDecoration: 'none',
                fontSize: 14,
                fontWeight: 500,
                border: '1px solid #e5e7eb',
              }}
            >
              <a href="https://github.com/ghebert3/4330-Group-Project">GitHub</a>
            </a>
          </div>
        </div>

        {/* Right visual mockup */}
        <div
          style={{
            backgroundColor: 'white',
            borderRadius: 24,
            padding: 20,
            boxShadow: '0 10px 30px rgba(15,23,42,0.08)',
          }}
        >
          <div
            style={{
              width: '100%',
              aspectRatio: '9 / 16',
              borderRadius: 24,
              border: '1px solid #e5e7eb',
              padding: 16,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              background:
                'linear-gradient(150deg, #461D7C 0%, #1f1533 50%, #fbbf24 120%)',
              color: 'white',
            }}
          >
            <div>
              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 8,
                  padding: '6px 10px',
                  borderRadius: 999,
                  backgroundColor: 'rgba(17,24,39,0.3)',
                  fontSize: 11,
                  marginBottom: 12,
                }}
              >
                <span
                  style={{
                    display: 'inline-block',
                    width: 6,
                    height: 6,
                    borderRadius: '50%',
                    backgroundColor: '#4ade80',
                  }}
                ></span>
                Live on LSU campus
              </div>

              <h2 style={{ fontSize: 20, margin: 0, marginBottom: 8 }}>
                See what&apos;s happening tonight
              </h2>
              <p style={{ fontSize: 13, margin: 0, opacity: 0.9 }}>
                Meetups, events, and more — all in one feed.
              </p>
            </div>

            {/* Mini feed preview */}
            <div
              style={{
                backgroundColor: 'rgba(15,23,42,0.7)',
                borderRadius: 16,
                padding: 10,
                fontSize: 12,
              }}
            >
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  marginBottom: 4,
                }}
              >
                <span>Study group @ Middleton</span>
                <span style={{ opacity: 0.8 }}>7:00 PM</span>
              </div>

              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  marginBottom: 4,
                }}
              >
                <span>Pickup basketball</span>
                <span style={{ opacity: 0.8 }}>UREC Courts</span>
              </div>

              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span>Late night coffee</span>
                <span style={{ opacity: 0.8 }}>Highland</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer
        style={{
          width: '100%',
          maxWidth: 960,
          marginTop: 40,
          fontSize: 12,
          color: '#9ca3af',
          textAlign: 'center',
          paddingTop: 16,
          borderTop: '1px solid #e5e7eb',
        }}
      >
        <span>© {new Date().getFullYear()} Whirl. Built for LSU students.</span>
      </footer>
    </main>
  );
}