# 🎓 Accredian Enterprise — Full Stack Web Application

<p align="center">
  <a href="https://accredian1.netlify.app/">
    <img src="https://img.shields.io/badge/Live-Demo-blue?style=for-the-badge&logo=vercel">
  </a>
  <a href="https://github.com/abhishekshivahre08/accredian.git">
    <img src="https://img.shields.io/badge/GitHub-Repo-black?style=for-the-badge&logo=github">
  </a>
</p>

---

A production-grade, full-stack clone of the [Accredian Enterprise](https://enterprise.accredian.com/) website built with **Next.js 14**, **TypeScript**, **Tailwind CSS**, and **MongoDB**.

---



## 🛠️ Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 14 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS |
| Database | MongoDB (via Mongoose) |
| Forms | React Hook Form + Zod |
| Animations | CSS Keyframes + Intersection Observer |
| Notifications | React Hot Toast |
| Deployment | Vercel |

---

## 📁 Project Structure

```
accredian-enterprise/
├── src/
│   ├── app/
│   │   ├── api/
│   │   │   ├── leads/
│   │   │   │   └── route.ts        # POST (create lead) + GET (list leads)
│   │   │   └── stats/
│   │   │       └── route.ts        # GET (dashboard stats)
│   │   ├── globals.css             # Global styles + Tailwind
│   │   ├── layout.tsx              # Root layout with metadata
│   │   └── page.tsx                # Main landing page
│   ├── components/
│   │   ├── sections/
│   │   │   ├── Hero.tsx            # Hero section with animated background
│   │   │   ├── TrustedBy.tsx       # Marquee of company logos
│   │   │   ├── WhyAccredian.tsx    # Feature cards grid
│   │   │   ├── Stats.tsx           # Animated counter stats
│   │   │   ├── Programs.tsx        # Filterable program cards
│   │   │   ├── HowItWorks.tsx      # Step-by-step process
│   │   │   ├── Partners.tsx        # Institute partner grid
│   │   │   ├── Testimonials.tsx    # Auto-rotating carousel
│   │   │   ├── LeadForm.tsx        # Lead capture form (MongoDB)
│   │   │   └── FAQ.tsx             # Accordion FAQ
│   │   ├── Navbar.tsx              # Sticky nav with dropdown + mobile
│   │   └── Footer.tsx              # Full footer with links
│   └── lib/
│       ├── mongodb.ts              # MongoDB connection singleton
│       └── models/
│           └── Lead.ts             # Mongoose Lead schema
├── .env.example                    # Environment variable template
├── tailwind.config.js
├── tsconfig.json
├── next.config.js
└── package.json
```

---

## 🚀 Getting Started (Local Setup)

### Prerequisites

- **Node.js** v18.17 or later ([Download](https://nodejs.org/))
- **npm** v9+ or **yarn** v1.22+
- **MongoDB** — either:
  - [MongoDB Atlas](https://www.mongodb.com/atlas) (free cloud, recommended)
  - [MongoDB Community Server](https://www.mongodb.com/try/download/community) (local)
- **Git**

---

### Step 1 — Clone the Repository

```bash
git clone https://github.com/YOUR_USERNAME/accredian-enterprise.git
cd accredian-enterprise
```

---

### Step 2 — Install Dependencies

```bash
npm install
# or
yarn install
```

---

### Step 3 — Configure Environment Variables


```

#### How to get a MongoDB URI (Atlas — free):

1. Go to [mongodb.com/atlas](https://www.mongodb.com/atlas) → Sign up / Log in
2. Create a free **M0 cluster** (select any region)
3. Create a **database user** with a username and password
4. Under **Network Access**, add `0.0.0.0/0` (allow all IPs) or your specific IP
5. Click **Connect** → **Connect your application** → Copy the URI
6. Replace `<username>` and `<password>` in the URI with your credentials

---

### Step 4 — Run the Development Server

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

### Step 5 — Build for Production

```bash
npm run build
npm start
```







## 🔌 API Endpoints

### `POST /api/leads`
Creates a new enterprise lead in MongoDB.

**Request Body:**
```json
{
  "fullName": "John Smith",
  "email": "john@company.com",
  "phone": "+91 98765 43210",
  "company": "Acme Corp",
  "designation": "Head of L&D",
  "teamSize": "51-200",
  "trainingNeeds": "Data Science & AI",
  "message": "We need a 3-month program for 80 engineers."
}
```

**Response (201):**
```json
{
  "success": true,
  "message": "Thank you! Our enterprise team will contact you within 24 hours.",
  "data": { "id": "...", "email": "...", "fullName": "..." }
}
```

### `GET /api/leads`
Returns paginated list of all leads.

**Query Params:** `?page=1&limit=10&status=new`

### `GET /api/stats`
Returns dashboard statistics (total leads, by status, recent).

---

## 🤖 AI Usage — Transparency Report

This project was built with **Claude (Anthropic)** as the primary AI assistant. Here is exactly where AI helped and what was done manually:

### ✅ AI-Generated (with review)
| Component | AI Contribution |
|---|---|
| Overall project structure | Suggested App Router layout and folder conventions |
| Mongoose schema | Generated `Lead.ts` schema with validation and indexes |
| API routes (`/api/leads`, `/api/stats`) | Generated with Zod validation and error handling |
| Tailwind config | Generated animation keyframes and custom color palette |
| Component boilerplate | Generated initial structure for all 10+ sections |
| Form validation | Suggested React Hook Form + Zod pattern |
| README template | Generated markdown structure |

### ✏️ Manually Modified / Improved
| Area | Manual Work |
|---|---|
| Design system | Chose specific color palette (indigo/brand + orange accent), typography (DM Serif Display + Plus Jakarta Sans), dark hero gradient |
| Animation logic | Fine-tuned `IntersectionObserver` timing, delays, and `animate-on-scroll` CSS class toggling |
| Programs filter | Designed the filterable tab system and card layout |
| Testimonials carousel | Built auto-rotate timer with pause on manual navigation |
| Stats counter | Implemented `useCountUp` hook with RAF-based animation |
| Mobile responsiveness | Manually tested and fixed breakpoints for all sections |
| Navbar dropdown | Built hover-based dropdown with delay and mobile hamburger |
| MongoDB singleton | Adapted connection caching pattern for Next.js edge cases |
| Copy & content | All text content, program descriptions, and testimonials written/curated manually |

---

## 🧩 Component Reusability

- All sections are **standalone components** importable individually
- `btn-primary`, `btn-secondary`, `card`, `input-field` are **Tailwind utility components** in `globals.css`
- `animate-on-scroll` + IntersectionObserver pattern is **reused across all sections**
- `LeadForm` calls the API generically — can be reused on any page with different `source` values
- MongoDB model and API route are **schema-first** and easy to extend

---

## 🔮 Improvements with More Time

1. **Admin Dashboard** — A `/admin` route with authentication (NextAuth.js) showing all leads with status management, charts (Chart.js), and export to CSV
2. **Email Notifications** — Nodemailer/Resend integration to auto-email leads and notify the sales team on new submissions
3. **SEO Optimization** — Per-page `generateMetadata`, structured data (JSON-LD), and Open Graph images via `next/og`
4. **Dark Mode** — Full dark mode toggle using `next-themes` with system preference detection
5. **Animations** — Upgrade from CSS keyframes to Framer Motion for smoother, more orchestrated page transitions
6. **Testing** — Unit tests with Jest/Vitest for API routes and component tests with Testing Library
7. **Rate Limiting** — Add API rate limiting (e.g., Upstash Redis) to prevent spam submissions
8. **CMS Integration** — Integrate Sanity.io or Contentful so the programs and testimonials can be managed without code changes
9. **Analytics** — Add Vercel Analytics + Posthog for funnel tracking and form drop-off analysis
10. **Performance** — Add ISR (Incremental Static Regeneration) for program pages and image optimization with `next/image`

---

## 🧪 Testing the API Locally

```bash
# Create a lead
curl -X POST http://localhost:3000/api/leads \
  -H "Content-Type: application/json" \
  -d '{
    "fullName": "Test User",
    "email": "test@company.com",
    "phone": "9876543210",
    "company": "Test Corp",
    "designation": "Manager",
    "teamSize": "51-200",
    "trainingNeeds": "Data Science & AI",
    "message": "Test inquiry"
  }'

# Get all leads
curl http://localhost:3000/api/leads

# Get stats
curl http://localhost:3000/api/stats
```

---

## 📦 Available Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start development server at localhost:3000 |
| `npm run build` | Build for production |
| `npm start` | Start production server |
| `npm run lint` | Run ESLint |

---


---

## 👤 Author

**Abhishek Shivahre**

* 🔗 LinkedIn: https://www.linkedin.com/in/abhishek-shivhare-42009b327/
* 🌐 Portfolio: https://abhishekshivhare.netlify.app/
