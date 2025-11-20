// app/page.tsx
export default function HomePage() {
  return (
    <main
      style={{
        minHeight: '100vh',
        backgroundColor: '#461D7C', // LSU purple
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'white',
        textAlign: 'center',
        padding: '2rem',
      }}
    >
      <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>Whirl</h1>
      <p style={{ maxWidth: 480, lineHeight: 1.5 }}>
        LSU-only campus social app for discovering events, meeting people, and staying in the loop.
      </p>
      <p style={{ marginTop: '2rem', fontSize: '0.9rem', opacity: 0.8 }}>
        This site also handles password reset links for the Whirl mobile app.
      </p>
    </main>
  );
}