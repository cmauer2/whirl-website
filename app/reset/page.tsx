"use client";

import { useEffect, useState } from "react";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

export default function ResetPassword() {
  const [status, setStatus] = useState("Checking your reset link...");
  const [password, setPassword] = useState("");
  const [sessionValid, setSessionValid] = useState(false);

  useEffect(() => {
    async function check() {
      const { data, error } = await supabase.auth.getSession();

      if (error || !data.session) {
        setStatus("This reset link is invalid or expired.");
        return;
      }

      setSessionValid(true);
      setStatus("Enter your new password below.");
    }

    check();
  }, []);

  async function updatePassword(e: any) {
    e.preventDefault();
    setStatus("Updating password...");

    const { error } = await supabase.auth.updateUser({ password });

    if (error) {
      setStatus("Error updating password. Try again.");
      return;
    }

    setStatus("Password updated! You may return to the Whirl app.");
    setSessionValid(false);
  }

  return (
    <main
      style={{
        minHeight: "100vh",
        backgroundColor: "#2b0a6b",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "2rem",
      }}
    >
      <div style={{ background: "#fff", padding: 32, borderRadius: 12, maxWidth: 400 }}>
        <h1 style={{ marginTop: 0 }}>Update your Whirl password</h1>
        <p>{status}</p>

        {sessionValid && (
          <form onSubmit={updatePassword}>
            <input
              type="password"
              placeholder="New password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              minLength={8}
              style={{
                width: "100%",
                padding: 10,
                marginBottom: 12,
                borderRadius: 8,
                border: "1px solid #ccc",
              }}
            />
            <button
              type="submit"
              style={{
                width: "100%",
                padding: 10,
                borderRadius: 999,
                border: "none",
                background: "#5b46ff",
                color: "#fff",
                fontWeight: 600,
                cursor: "pointer",
              }}
            >
              Save new password
            </button>
          </form>
        )}
      </div>
    </main>
  );
}