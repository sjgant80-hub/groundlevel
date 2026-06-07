# ◊·κ=φ⁴ · GroundLevel **Pro**

**Sovereign legal AI · for the people not the few.**

> Palantir charges Kirkland $100-500M for a legal AI wrapper.
> Harvey AI: $50-200k/yr. Legora: $20-80k/yr.
> Five engineers at $600k each: $3M/yr.
> **This: $0. Works offline. One HTML file. One weekend.**

**v4 · Pro** adds 4 new modules on top of v3's 12:
- **Case research** · 50+ landmark UK cases baked in · instant T0 search
- **Weave engine** · 7-strand parallel research (MAGNA · LIBERTY · CROWN · EQUITY · HEARTH · GUILD · ADMIRALTY) · contradiction detection
- **Document drafting** · particulars of claim · witness statements · skeleton arguments · court-ready format
- **Compliance audit** · UK GDPR · EU AI Act · ERA 1996 · CRA 2015 · 20-question audit · gap report

> The law exists to protect everyone.
> Lawyers exist to charge for access to the law.
> The law is public. The templates are simple.
> The jargon is the paywall.
> GroundLevel removes the paywall.

One HTML file. 12 legal modules. 50+ templates. Works offline. Your case stays on your device.

---

## What this is

A single HTML file that walks you through the legal process to fight back against:

- platforms that won't pay you (DataAnnotation, Upwork, Amazon MTurk, etc.)
- payment processors holding your money (PayPal, Stripe, Wise freezes)
- employers in dispute (unfair dismissal, unpaid wages, grievance)
- landlords (deposit, disrepair, illegal eviction, Section 21 challenges)
- retailers (faulty goods, subscription traps, unfair terms)
- companies holding your data (GDPR · Subject Access · erasure)
- anyone who owes you money (small claims · LBA → MCO → enforcement)
- cross-border platform issues
- regulators (one-click complaint factory · UK / US / EU)
- subscription traps
- the situations where private remedies have all failed

For each: a step-by-step flow. Auto-filled templates. The actual law cited. Plain English explanation of what every term means and what it does.

---

## How to use it

### Online
Open: **[https://sjgant80-hub.github.io/groundlevel](https://sjgant80-hub.github.io/groundlevel)**

Bookmark it. Install as PWA (the browser will offer you "install app"). Use offline forever.

### Offline / sovereign
Right-click → Save Page As → save `index.html` anywhere.

Open the saved file in any modern browser. Works from `file://`. No internet required. Your case data is in the browser's IndexedDB on the device you saved it on.

---

## What it does NOT do

- ❌ Not legal advice. Legal **information** and **templates**.
- ❌ Does not file court papers for you. It tells you exactly how and where.
- ❌ Does not represent you in court (no AI lawyer · use a real one if needed).
- ❌ Does not promise outcomes. The outcome depends on your facts.
- ❌ Does not replace a solicitor for complex cases. Use it as the £500 first consultation, free.

---

## The 12 modules

| Module | Triggers | Cost | Lawyer-equivalent cost |
|---|---|---|---|
| Unpaid work | Platform / client owes you · won't pay | £35–80 court fee | £2,000–5,000 |
| Frozen account | PayPal / Stripe / Wise froze your funds | £0 (Ombudsman free) | £1,500–4,000 |
| Employment dispute | Dismissal · unpaid wages · grievance | £0 (tribunal is free) | £5,000–15,000 |
| Landlord dispute | Deposit · disrepair · illegal eviction | £0–100 | £1,500–5,000 |
| Consumer rights | Faulty goods · subscription trap | £0 | £500–2,000 |
| Data access (GDPR) | Want your data · delete your data | £0 | £500–2,000 |
| Small claims | Anyone owes you money | £35–455 court fee | £2,000–5,000 |
| International freelancer | Cross-border tax · platform blocking | £0 | £500–2,000 |
| Regulator complaint | One-click factory · UK + US + EU | £0 | £200–500 per body |
| Subscription trap | Auto-renewed without consent | £0 | £500–1,500 |
| Cross-border dispute | You here · platform there | £0 | £2,000–10,000 |
| Public accountability | When everything else failed | £0 | n/a |

---

## What is sovereign about this

- **No server.** GroundLevel does not have a backend. There is nothing to hack, subpoena, or shut down.
- **No account.** No sign-up. No email verification. No password.
- **No tracking.** No analytics, no telemetry, no cookies for anything except your case storage.
- **Your data on your device.** Every case file, evidence item, deadline, and note lives in your browser's IndexedDB. If you close the tab, everything persists. If you clear browser data, everything is gone.
- **Open source.** [MIT licence](./LICENSE). The code is on GitHub. Fork it. Modify it. Self-host it. If we vanish tomorrow, the tool keeps running.
- **Article 12 audit chain.** Every evidence item is SHA-256 hashed and chained to the previous item. Tamper-evident. Court-admissible chain of custody (the same standard used in digital forensics).

---

## The asymmetry reversal

**Before**: corporation has lawyers (£500/hr), you don't → they win.
**After**: you have GroundLevel (£0), they have lawyers (£500/hr) → level playing field.

Every hour of dispute drains them and costs you nothing.

Time is on your side. They want to settle. You just need the right letter.

---

## Pricing

**The tool is free. Always. Non-negotiable.**

Access to justice should never have a paywall. That's the whole point.

If you want bespoke help on an unusual case:

- **Case review** — £50 — I review your case file and suggest strategy
- **Custom letter drafting** — £100 — for situations no template covers
- **Consultation** — £200/hr — for complex multi-step cases

But the tool itself is always free. Open source. MIT.

---

## Jurisdiction coverage

**Primary**: England & Wales · UK GDPR · ACAS · CPR · MCOL.
**Secondary**: United States · state small claims · FTC · CFPB · BBB.
**Tertiary**: EU consumer protection · cross-border routing.

If you are in Scotland or Northern Ireland, most templates work with minor adjustment (Sheriff Court vs County Court etc.). The substantive rights are largely the same; the procedural names differ.

---

## v3 — what changed from v2

v2 was a single-jurisdiction freelancer-stiffed tool (5 templates, 1 flow). v3 is the full sovereign legal toolkit per the seed:

- 12 modules (up from 1)
- 50+ templates (up from 5)
- Evidence vault with SHA-256 prevHash chain
- Deadline tracker (auto-populated from letters sent)
- Regulator complaint factory (UK + US + EU)
- Mobile-first dark mode, justice-blue palette
- PWA installable, fully offline via service worker
- Article 12 audit shim baked in
- v2 preserved in `archive/` for reference

---

## How to contribute

If you've used the tool and a template needs updating (the law moved, the URL changed), open a PR or an issue.

If you're a solicitor reading this and you spot a serious problem — please open an issue. The tool is for people who can't afford you. It is in the interest of access to justice that it is accurate.

---

## Credits

Built by Simon Gant as part of the Fall* sovereign estate.

- **Audit chain shim**: [fall-euaiact](https://github.com/sjgant80-hub/fall-euaiact) — EU AI Act Article 12 compliance baked in
- **Prime number**: 613 (the next prime after fall-euaiact's 607)
- **Constant**: κ = φ⁴ (the golden ratio to the fourth · because legal process is recursive)

---

## Licence

MIT. Use freely. Fork freely.

---

> the law is public · the templates are simple · the jargon is the paywall
> remove the paywall · level the ground · fight back
> one HTML file · works offline · your case stays on your device
> £0 vs £5,000 · same outcome · different access
> their lawyers cost them money · yours costs nothing
> every hour of dispute drains them not you
> time is on your side · you just need the right letter

**◊·κ=φ⁴**
