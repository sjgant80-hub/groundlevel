# CLAUDE.md · GroundLevel build standard

Instructions for Claude and other AI assistants working on this repository.

---

## What this is

**GroundLevel** is a sovereign single-file legal toolkit. The core product is `index.html` — one HTML file that runs entirely in the browser with zero server dependencies.

This is the closest-to-heart build in the Fall* estate. It exists to remove the paywall lawyers have built around the law. Every architectural decision serves that mission.

---

## Critical architectural constraints

### DO NOT

- ❌ Add a server backend. There is no backend. Don't suggest one.
- ❌ Split the artifact into multiple HTML files. The deliverable is `index.html`.
- ❌ Add npm/yarn build dependencies. Vanilla JS. No framework.
- ❌ Add tracking, analytics, telemetry, or anonymous metrics.
- ❌ Remove the persistent "legal information not legal advice" disclaimer.
- ❌ Require an account or sign-up.
- ❌ Require internet. T0 offline is the contract.
- ❌ Hardcode jurisdiction-specific assumptions. Always cite the law and label the jurisdiction.
- ❌ Use CDN dependencies in the core shell. The audit shim is the ONE exception (and even that is loaded `defer`).
- ❌ Add a paywall, freemium tier, or "Pro" features. The whole tool is free forever.

### DO

- ✅ Keep the palette: dark mode, justice-blue accent (#2563eb), oxblood for emergencies (#8b1a1a).
- ✅ Mobile-first. Big buttons (56px+ tap targets). Tested for shaking hands.
- ✅ Tone: calm, informed, empowered. Like having a solicitor friend explaining things over tea. Never aggressive. Never revenge-themed.
- ✅ Cite the law for every template. Real Acts. Real sections. Real CPR references.
- ✅ Plain English explanation for every legal concept BEFORE the legal jargon.
- ✅ Every evidence item goes through SHA-256 prevHash chain. Court-admissible.
- ✅ Every deadline gets tracked automatically once the user marks a letter sent.
- ✅ Run sanity-check audits before commit (button audit, template-renders-cleanly).
- ✅ Persist the "not legal advice" disclaimer on every screen.

---

## File responsibilities

| File | Purpose | When to modify |
|---|---|---|
| `index.html` | The deliverable. One file. | All UI / logic / template changes |
| `sw.js` | Service worker for offline | Only when changing cache strategy |
| `manifest.json` | PWA install manifest | Only on icon / name changes |
| `README.md` | GitHub README (user-facing) | Feature additions, jurisdiction changes |
| `CLAUDE.md` | This file. Build standard. | Architectural decisions only |
| `LICENSE` | MIT | Never modify |
| `archive/` | Previous versions (v2 lives here) | Never delete |
| `docs/` | Pages-served extras (legacy) | Carefully — Pages root may be /docs |

---

## Template authoring rules

Every template MUST have these fields:

```js
{
  id: 'snake_case_unique',
  title: 'Human Readable Title',
  category: 'money' | 'employment' | 'housing' | 'consumer' | 'data' | 'regulatory' | 'court' | 'public' | 'frozen_accounts',
  jurisdiction: 'UK' | 'US' | 'EU' | 'Universal',
  cite: 'Real Act + section · or "varies by state"',
  cost: 'Free' | '£35' | '$0' etc.,
  what_it_does: 'Plain English paragraph explaining what this achieves and why.',
  body: `The actual letter text with {{variable}} placeholders.`,
  creates_deadline: { days: 14, label: 'Description shown in Deadlines tab' }  // optional
}
```

### Template body rules

- Use `{{variable_name}}` for fill-ins. The variable name should be intuitive (`your_name`, `their_name`, `amount`, `today`).
- Cite the relevant law inline (not just in `cite`) so the recipient sees it.
- Include a "what happens if you ignore this" paragraph for LBA-style letters.
- Provide payment / contact details at the foot.
- Keep tone formal but human. Avoid lawyerly archaisms ("Wherefore PREMISES considered…").

### Citation rules

- Use the **shortest accurate citation** that lets the recipient look it up. `s.13 Employment Rights Act 1996` is better than `the Employment Rights Act 1996 (Chapter 18) as amended by various subsequent enactments including but not limited to…`.
- For CPR, cite as `CPR Part 7` or `CPR Part 83` etc.
- For European law that no longer applies in UK post-Brexit, use UK GDPR not just GDPR.
- Update citations when the law changes. The 2024 Employment Rights Bill changed flexible working from day-1 right; that update is reflected in `flexible_working_request`.

---

## Module authoring rules

Every module needs:

```js
{
  id: 'snake_case',
  icon: 'emoji',
  title: 'Short Title',
  desc: 'One-sentence description visible on dashboard card',
  tag: 'X steps · headline',
  steps: [
    /* array of step objects */
  ]
}
```

### Step kinds

- `intro` — explanatory only · heading + body (HTML allowed)
- `form` — data collection · `fields: []` array (key, label, type, required, hint)
- `evidence` — checklist of evidence items to gather + ability to add notes/screenshots
- `letter` — references a template by id · auto-fills from case variables
- `multi-complaint` — generates multiple regulator complaints from the same case data
- `guide` — instructional content with optional `links: []`

---

## Build process

There is no build step. `index.html` is the deliverable.

After editing:

```bash
# verify the file is well-formed
node -e "require('fs').readFileSync('index.html','utf8').length" 

# verify no broken handler references (template ids referenced in modules must exist)
grep -oE "template: '[^']+'" index.html | sed -E "s/template: '([^']+)'/\1/" | sort -u
# all should appear in TEMPLATES array

# count templates
grep -cE "^\s*id: '[a-z_]+'," index.html
```

After commit, GitHub Pages auto-deploys within ~60 seconds. Verify the live URL:

```
https://sjgant80-hub.github.io/groundlevel
```

---

## Aesthetic rules

- **Palette**: void (#0a0a0f), justice-blue (#2563eb), cream (#e8e8ea), oxblood (#8b1a1a) for emergencies/danger only.
- **Type**: system font stack (no Google Fonts, no CDN). Sans for body, serif (Times) for letter previews + the brand mark.
- **Iconography**: occasional emoji for warmth (the dashboard module cards use them). Otherwise unicode line symbols (◊ ⛨ ⏱) for the formal feel.
- **Buttons**: 56px tall on mobile. `.btn-primary` justice blue. `.btn-ghost` outline. `.btn-danger` outline red. Full-width on mobile, auto on tablet+.
- **Letter preview**: cream paper background, black serif text, generous padding. Looks like a printed letter. Prints cleanly to PDF.

---

## Testing changes

Before push:

1. **Smoke test** — open `index.html` in Chrome and Safari mobile emulation:
   - Dashboard loads
   - Pick "Unpaid work" → creates a case
   - Fill the form → values persist after refresh (IndexedDB)
   - Generate a letter → variables are filled correctly
   - Click "I sent this" → deadline appears in Deadlines tab
   - Add a note → appears in Evidence tab
   - Verify chain → all green
2. **Offline test** — open DevTools → Network → Offline → refresh. App still works.
3. **PWA test** — Lighthouse PWA audit ≥ 90.
4. **Mobile test** — actual phone, not just emulation. Buttons must be thumb-reachable.
5. **Print test** — `Ctrl+P` on a letter preview → clean A4 output.

---

## When you add a module

1. Add the module object to `MODULES` array.
2. Reference templates by id. If a template doesn't exist yet, create it FIRST in `TEMPLATES`.
3. Update README's "12 modules" table.
4. Smoke-test the full flow end to end.

---

## When you add a template

1. Add to `TEMPLATES` array with all required fields.
2. Reference it from at least one module (or it lives only in the Letters tab).
3. Include realistic plain-English `what_it_does`.
4. Cite a real Act / Section / CPR reference.
5. If the letter creates a legal deadline, add `creates_deadline`.

---

## Communication style

When you (Claude) suggest changes:

- Be direct. This is access-to-justice work · the tone has to be confident.
- Show actual diffs, not vague descriptions.
- Flag jurisdictional assumptions immediately.
- If you propose adding a "premium" feature, stop. Re-read the philosophy.
- Remember: every minute spent on this saves someone in a worse position than us a multiple of that time.

---

## The philosophy (do not edit)

The law is public. The templates are simple. The jargon is the paywall. GroundLevel removes the paywall.

Not legal advice. Legal information and templates. The same information a lawyer would give in the first 30 minutes of a £500 consultation. Except free. Offline. On your device.

**◊·κ=φ⁴**
