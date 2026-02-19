# GroundLevel 🟢
### UK Rights Protection App

Record encounters. Detect bluffs. Analyse against actual UK law. File complaints in one click.

---

## Stack

- **Next.js 14** — frontend + API routes
- **Supabase** — auth + database
- **Anthropic Claude** — AI legal analysis + complaint generation
- **Stripe** — subscriptions (£9/month Pro)

---

## Deploy on Replit (30 minutes)

### 1. Create Replit project

1. Go to [replit.com](https://replit.com) → New Repl
2. Choose **Next.js** template
3. Delete the boilerplate, paste this entire project folder in

### 2. Set up Supabase

1. Go to [supabase.com](https://supabase.com) → New project
2. Go to **SQL Editor** → paste contents of `supabase_schema.sql` → Run
3. Go to **Settings → API** → copy:
   - Project URL
   - anon/public key
   - service_role key (keep secret)
4. Go to **Authentication → Settings** → set Site URL to your Replit URL

### 3. Set up Stripe

1. Go to [stripe.com](https://stripe.com) → Dashboard
2. **Products** → Add product → "GroundLevel Pro" → £9/month recurring
3. Copy the **Price ID** (starts with `price_`)
4. **Developers → API Keys** → copy publishable + secret keys
5. **Developers → Webhooks** → Add endpoint:
   - URL: `https://your-replit-url.replit.app/api/webhook`
   - Events: `checkout.session.completed`, `customer.subscription.deleted`, `customer.subscription.updated`
   - Copy webhook signing secret

### 4. Set environment variables in Replit

Go to **Secrets** (lock icon) and add:

```
NEXT_PUBLIC_SUPABASE_URL=https://xxxxx.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJxxx...
SUPABASE_SERVICE_ROLE_KEY=eyJxxx...
ANTHROPIC_API_KEY=sk-ant-xxx...
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_live_xxx...
STRIPE_SECRET_KEY=sk_live_xxx...
STRIPE_WEBHOOK_SECRET=whsec_xxx...
STRIPE_PRO_PRICE_ID=price_xxx...
NEXT_PUBLIC_APP_URL=https://your-replit-url.replit.app
```

### 5. Install and run

```bash
npm install
npm run dev
```

---

## Deploy on Vercel (faster)

```bash
# Install Vercel CLI
npm i -g vercel

# In project folder
vercel

# Add environment variables in Vercel dashboard
# Settings → Environment Variables
```

---

## Project Structure

```
groundlevel/
├── pages/
│   ├── index.js          # Landing page
│   ├── app.js            # Main app (4-tab interface)
│   ├── auth.js           # Sign in / Sign up
│   ├── _app.js           # Auth wrapper
│   └── api/
│       ├── analyse.js    # AI legal analysis (Claude)
│       ├── complaint.js  # Complaint letter generation
│       ├── checkout.js   # Stripe checkout
│       ├── webhook.js    # Stripe webhook handler
│       ├── profile.js    # User profile + encounters
│       ├── patterns.js   # Badge number pattern data
│       └── save-encounter.js
├── lib/
│   ├── supabase.js       # Supabase client
│   └── uklaw.js          # UK law database
├── styles/
│   └── globals.css
├── supabase_schema.sql   # Database schema
└── .env.example          # Environment variables template
```

---

## Features

### Free Tier
- ⏺ Record encounters (timestamp, badge number, location)
- 📖 Know your rights for any encounter type
- ⚡ Bluff detector (10+ common bluffs pre-loaded)
- 🔍 5 AI analyses per month

### Pro Tier (£9/month)
- Everything in free
- Unlimited AI analyses
- Complaint letter generation (IOPC, SIA, LGO)
- Pattern database access
- Full encounter history

---

## Legal Notice

GroundLevel provides general information about UK law for educational purposes. It is not legal advice. Always consult a qualified solicitor for specific legal matters.

---

## Monetisation

- **B2C**: £9/month Pro subscriptions
- **B2B**: Civil liberties orgs, law firms (anonymised pattern data API)
- **Affiliate**: Legal aid referrals

---

Built by GroundLevel · Not legal advice · Know your rights

