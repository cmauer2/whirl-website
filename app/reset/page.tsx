// app/reset/page.tsx
'use client';

import { useState } from 'react';
import { supabase } from '@/lib/supabaseClient';

export default function ResetPasswordPage() {
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');
  const [loading, setLoading] = useState(false);
  const [mode, setMode] = useState<'form' | 'done' | 'error'>('form');
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    if (!password || !passwordConfirm) {
      setError('Please fill out both fields.');
      return;
    }
    if (password !== passwordConfirm) {
      setError('Passwords do not match.');
      return;
    }

    setLoading(true);
    try {
      // Supabase will use the access token from the URL fragment
      const { error: updateError } = await supabase.auth.updateUser({
        password,
      });

      if (updateError) throw updateError;

      setMode('done');
    } catch (err: any) {
      console.error(err);
      setMode('error');
      setError(err?.message ?? 'Something went wrong. Try requesting a new reset email.');
    } finally {
      setLoading(false);
    }
  };

  const containerStyle: React.CSSProperties = {
    minHeight: '100vh',
    backgroundColor: '#461D7C',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '1.5rem',
  };

  const cardStyle: React.CSSProperties = {
    maxWidth: 420,
    width: '100%',
    backgroundColor: 'white',
    borderRadius: 16,
    padding: '2rem',
    boxShadow: '0 12px 30px rgba(0,0,0,0.25)',
  };

  return (
    <main style={containerStyle}>
      <section style={cardStyle}>
        <h1 style={{ marginBottom: '0.75rem', color: '#461D7C' }}>
          Reset your Whirl password
        </h1>

        {mode === 'form' && (
          <form onSubmit={handleSubmit}>
            <label style={{ display: 'block', marginBottom: '0.75rem' }}>
              <span style={{ fontSize: '0.9rem', fontWeight: 600 }}>New password</span>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                style={{
                  width: '100%',
                  marginTop: '0.25rem',
                  padding: '0.6rem 0.75rem',
                  borderRadius: 8,
                  border: '1px solid #ddd',
                }}
              />
            </label>

            <label style={{ display: 'block', marginBottom: '0.75rem' }}>
              <span style={{ fontSize: '0.9rem', fontWeight: 600 }}>Confirm password</span>
              <input
                type="password"
                value={passwordConfirm}
                onChange={(e) => setPasswordConfirm(e.target.value)}
                required
                style={{
                  width: '100%',
                  marginTop: '0.25rem',
                  padding: '0.6rem 0.75rem',
                  borderRadius: 8,
                  border: '1px solid #ddd',
                }}
              />
            </label>

            {error && (
              <p style={{ color: 'red', marginBottom: '0.75rem', fontSize: '0.9rem' }}>
                {error}
              </p>
            )}

            <button
              type="submit"
              disabled={loading}
              style={{
                width: '100%',
                padding: '0.75rem',
                borderRadius: 8,
                border: 'none',
                backgroundColor: '#461D7C',
                color: 'white',
                fontWeight: 600,
                cursor: 'pointer',
              }}
            >
              {loading ? 'Updating…' : 'Update password'}
            </button>
          </form>
        )}

        {mode === 'done' && (
          <p>
            Your password has been updated successfully. You can now log in to the Whirl app
            with your new password.
          </p>
        )}

        {mode === 'error' && (
          <>
            <p style={{ color: 'red', marginBottom: '0.75rem' }}>
              {error ?? 'Something went wrong with your reset link.'}
            </p>
            <p style={{ fontSize: '0.9rem' }}>
              Try requesting a new password reset email from the Whirl app.
            </p>
          </>
        )}
      </section>
    </main>
  );
}