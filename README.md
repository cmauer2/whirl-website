# Whirl Website

This is the official web home for **Whirl**, an LSU-only campus social app built by LSU students.  
This website originally existed as a **simple gateway for Supabase password resets, password creation, and authentication flows**, but has since evolved into the **full public-facing website** for the Whirl mobile app.

The website includes a modern landing page, a secure password-reset screen, and the foundation for future pages such as updates, features, and documentation.

---

## 🚀 Features

### ✔️ Modern Landing Page
A clean, mobile-friendly homepage introducing the app, showing features, and providing basic navigation.

### ✔️ Password Reset Handler (Supabase Auth)
Handles secure password reset sessions triggered from the mobile app.

### ✔️ Global Layout & Styling
Shared layout, fonts, and TailwindCSS configuration.

### ✔️ Deployed on Vercel
The entire site is hosted and auto-deployed via **Vercel**, providing instant updates on every push to the repository.

---

## 🛠 Tech Stack

- **Next.js 14**
- **React**
- **TailwindCSS**
- **Supabase (Auth + API)**
- **Vercel Hosting**

---

## 📦 Getting Started

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

The site will run at:

```
http://localhost:3000
```

---

## 🔑 Environment Variables

Create a `.env.local` file and include:

```
NEXT_PUBLIC_SUPABASE_URL=your-supabase-url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-supabase-anon-key
```

These are used by the password reset page to communicate with Supabase.

---

## 🌐 Deployment (Vercel)

This project is deployed using **Vercel**, with automatic CI/CD:

1. Push changes to GitHub  
2. Vercel auto-builds  
3. New version goes live in seconds

---

## 📬 Contact

Have ideas, feedback, or issues?

📧 **contact@joinwhirl.fun**

---

## © License

© 2025 Whirl  
Built by LSU students — not affiliated with LSU.