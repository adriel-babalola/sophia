# Sophia

A white-label bookstore for organizations to share books and devotionals.

## The Problem

Churches, schools, and communities have collections of books and devotionals they want to share with members, but there's no simple way to do it. Building a custom app takes months and costs thousands. Sophia solves this.

## How It Works

**For organizations:**
- Upload books (PDFs) via an admin dashboard
- Add metadata: title, author, description, cover image, category
- Hit deploy → your bookstore is live

**For members:**
- Browse and search books by title, author, category
- Download PDFs directly or read in-app
- No account needed (public by default, member-only in v2)

## V1 Scope

This is the proof-of-concept: a simple, functional bookstore built for a church or similar organization.

**Features:**
- Admin dashboard (upload, edit, delete books)
- Public bookstore app (browse, search, download)
- Book metadata: title, author, description, cover, category
- Analytics: track download counts
- No authentication required (v1)

**What's NOT in v1:**
- Multi-org support (that's v2)
- Payments/monetization
- Community features (ratings, reviews)
- Mobile app (web-first)

## Tech Stack

- **Frontend:** React 19 + Tailwind v4
- **Backend:** Node.js + Express
- **Database:** MongoDB
- **Storage:** Cloudinary (PDFs + cover images)
- **Auth:** Clerk (admin only)
- **Hosting:** Vercel (frontend) + Railway (backend)

## Architecture

```
Admin Dashboard (React)
  ↓ (upload form)
Backend API (Express)
  ↓
MongoDB (book metadata)
Cloudinary (PDFs + images)
  ↓
Public App (React)
  ↓ (browse, download)
Members
```

## Timeline (6 weeks for Unfold)

- **Week 1:** Scope, one-liner, this README ✓
- **Week 2:** Backend setup (Express, MongoDB, Cloudinary, Clerk)
- **Week 3:** Admin panel (upload form, book list, CRUD)
- **Week 4:** Public app (homepage, search, detail page, download)
- **Week 5:** Polish, bug fixes, analytics
- **Week 6:** Documentation, demo, showcase

## Why I'm Building This

I've seen communities struggle to share knowledge digitally. Sophia removes that friction. Plus, learning React Native while shipping a real product is exactly the challenge I want.

---
