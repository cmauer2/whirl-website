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
  const [confirmPassword, setConfirmPassword] = useState("");
  const [sessionValid, setSessionValid] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    const checkSession = async () => {
      setStatus("Checking your reset link...");

      const { data, error } = await supabase.auth.getSession();

      if (error) {
        console.error(error);
        setStatus("Something went wrong reading the reset link.");
        setSessionValid(false);
        return;
      }

      if (!data.session || !data.session.user) {
        setStatus(
          "This reset link is invalid or has expired. Please request a new one from the Whirl app."
        );
        setSessionValid(false);
        return;
      }

      setSessionValid(true);
      setStatus("Enter a new password for your Whirl account.");
    };

    checkSession();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!password) {
      setStatus("Please enter a new password.");
      return;
    }

    if (password !== confirmPassword) {
      setStatus("Passwords do not match.");
      return;
    }

    setSubmitting(true);
    setStatus("Saving your new password...");

    const { error } = await supabase.auth.updateUser({ password });

    setSubmitting(false);

    if (error) {
      console.error(error);
      setStatus(
        "We couldn't update your password. The reset link may have expired. Please request a new one from the Whirl app."
      );
      return;
    }

    setStatus(
      "Your password has been updated! You can close this window and return to the Whirl app to log in."
    );
    setSessionValid(false);
  };

  return (
    <main
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "#0f172a",
        fontFamily: "system-ui, -apple-system, BlinkMacSystemFont, sans-serif",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: 420,
          background: "white",
          padding: 24,
          borderRadius: 16,
          boxShadow: "0 20px 40px rgba(15, 23, 42, 0.35)",
        }}
      >
        <h1
          style={{
            fontSize: 24,
            fontWeight: 700,
            marginBottom: 8,
            color: "#111827",
          }}
        >
          Reset your Whirl password
        </h1>
        <p style={{ fontSize: 14, color: "#4b5563", marginBottom: 16 }}>
          {status}
        </p>

        {sessionValid && (
          <form onSubmit={handleSubmit}>
            <label
              style={{
                display: "block",
                fontSize: 14,
                fontWeight: 500,
                color: "#111827",
                marginBottom: 4,
              }}
            >
              New password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={{
                width: "100%",
                padding: "10px 12px",
                borderRadius: 8,
                border: "1px solid #d1d5db",
                marginBottom: 12,
                fontSize: 14,
              }}
            />

            <label
              style={{
                display: "block",
                fontSize: 14,
                fontWeight: 500,
                color: "#111827",
                marginBottom: 4,
              }}
            >
              Confirm new password
            </label>
            <input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              style={{
                width: "100%",
                padding: "10px 12px",
                borderRadius: 8,
                border: "1px solid #d1d5db",
                marginBottom: 16,
                fontSize: 14,
              }}
            />

            <button
              type="submit"
              disabled={submitting}
              style={{
                width: "100%",
                padding: "10px 12px",
                borderRadius: 999,
                border: "none",
                background: submitting ? "#4f46e5" : "#5b46ff",
                color: "#fff",
                fontWeight: 600,
                fontSize: 15,
                cursor: submitting ? "default" : "pointer",
                opacity: submitting ? 0.8 : 1,
              }}
            >
              {submitting ? "Saving..." : "Save new password"}
            </button>
          </form>
        )}
      </div>
    </main>
  );
}