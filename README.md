# 🌿 Krushiva – Farm to Kitchen Website

A production-ready Next.js 14 website for Krushiva, a B2B vegetable supply business based in Nashik, India.

---

## 🚀 Getting Started

### 1. Install Dependencies

```bash
npm install
```

### 2. Add Your Images

Place your vegetable images in the `/public/images/` folder with **exactly** these filenames:

| Image File | Used On |
|---|---|
| `hero-farm.jpg` | Home page hero background (Indian farm photo) |
| `about.jpg` | About page + Home Why Krushiva section |
| `onion.jpg` | Onion product card |
| `potato.jpg` | Potato product card |
| `tomato.jpg` | Tomato product card |
| `green-chilli.jpg` | Green Chilli product card |
| `ginger.jpg` | Ginger product card |
| `amla.jpg` | Amla product card |
| `brinjal.jpg` | Brinjal product card |
| `haldi.jpg` | Haldi (Turmeric) product card |
| `category-leafy.jpg` | Leafy Vegetables category |
| `category-root.jpg` | Root Vegetables category |
| `category-bulbs.jpg` | Bulbs & Tubers category |
| `category-fruit.jpg` | Fruit Vegetables category |
| `category-seasonal.jpg` | Seasonal Produce category |

> **Tip:** Product card images are displayed at 220px height with `object-fit: cover`. Recommended image size: 800×600px or larger.

### 3. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

### 4. Build for Production

```bash
npm run build
npm start
```

---

## 📁 Project Structure

```
krushiva/
├── public/
│   └── images/          ← PUT ALL YOUR IMAGES HERE
├── src/
│   ├── app/
│   │   ├── page.tsx     ← Home page
│   │   ├── about/       ← About page
│   │   ├── products/    ← Products page
│   │   ├── contact/     ← Contact page
│   │   ├── layout.tsx   ← Root layout (Navbar + Footer)
│   │   └── globals.css  ← All styles
│   └── components/
│       ├── Navbar.tsx       ← Desktop + Mobile nav
│       ├── Footer.tsx       ← Footer
│       ├── ProductCard.tsx  ← Reusable product card
│       └── WhatsAppBtn.tsx  ← WhatsApp CTA button
└── README.md
```

---

## 📞 Contact Details (Pre-configured)

- **WhatsApp:** +91 83907 66825
- **Phone:** +91 89997 02877
- **Email:** krushiva4@gmail.com
- **Location:** Nashik, Maharashtra, India

---

## 🛠 Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Styling:** Tailwind CSS + Custom CSS
- **Fonts:** Playfair Display, Cormorant Garamond, Lato (Google Fonts)
- **Icons:** Lucide React
- **Images:** Next.js Image component (optimized)

---

## 🌐 Deployment

Deploy easily on:
- **Vercel** (Recommended): Connect GitHub repo → Auto deploy
- **Netlify**: `npm run build` → Deploy `out/` folder (add `output: 'export'` to next.config.js)
- **Any VPS**: `npm run build && npm start`

---

## ✅ Features

- ✅ Mobile-first responsive design
- ✅ Hamburger menu for mobile
- ✅ WhatsApp-first enquiry flow
- ✅ SEO metadata on all pages
- ✅ Smooth scroll & hover animations
- ✅ Embedded Google Map (Nashik)
- ✅ Contact form → opens WhatsApp pre-filled
- ✅ No cart, no payments, no complexity

---

*Founded by Balu Nagargoje · Nashik, India 🌿*
