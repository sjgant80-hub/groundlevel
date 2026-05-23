# GROUNDLEVEL v2

**Free AI legal agent for freelancers. One HTML file. Works offline. Your data never leaves your device.**

Been stiffed by a platform? GroundLevel identifies your rights, drafts every document, and tells you exactly where to file.

## Download

**[Download GroundLevel-v2.html](https://sjgant80-hub.github.io/groundlevel/)** — save it anywhere, open in Chrome. That's it.

No install. No account. No server. One file.

## What it does

You describe what happened in plain English. GroundLevel's 9-agent system parses your situation and generates:

- **Legal analysis** — which laws protect you, how strong your case is (0-95 score)
- **Ready-to-send documents** — Letter Before Action (UK), Demand Letter (US), GDPR Subject Access Request, BBB Complaint, FTC Complaint
- **Evidence checklist** — exactly what to gather
- **Escalation timeline** — day-by-day action plan with deadlines
- **Tracking** — mark steps done, add notes, export your case

## Dual jurisdiction

Works for **UK** and **US** freelancers:

| UK | US |
|---|---|
| Consumer Rights Act 2015 | FTC Act Section 5 |
| Late Payment of Commercial Debts Act 1998 | State small claims (all 50 states + DC) |
| GDPR / Data Protection Act 2018 | State Attorney General complaints |
| Employment Rights Act 1996 | FLSA |
| MCOL (Money Claim Online) | BBB / FTC complaint filing |

Built-in database covers DataAnnotation, Upwork, Fiverr, Freelancer, and Toptal with platform-specific procedures.

## Plug in any LLM

Works fully offline with built-in templates. Add any LLM API key to power up with AI-enhanced analysis:

| Provider | Type |
|---|---|
| OpenAI (GPT-4o) | OpenAI-compatible |
| DeepSeek | OpenAI-compatible |
| Groq (Llama 3.3) | OpenAI-compatible |
| Together AI | OpenAI-compatible |
| Mistral | OpenAI-compatible |
| OpenRouter (any model) | OpenAI-compatible |
| Ollama (local) | OpenAI-compatible |
| LM Studio (local) | OpenAI-compatible |
| Google Gemini | Native API |
| Anthropic Claude | Native API |
| Custom endpoint | Any URL |

Settings > LLM Provider > pick one > paste key > Test Connection > Save.

## Architecture

Single HTML file. No build step. No dependencies. No framework.

- **L1 FACE** — 6 screens: landing, describe, analysis, dashboard, tracking, resolution
- **L2 SWARM** — 9 agents: case analyst, document drafter, timeline manager, legal researcher, rights explainer, evidence collector, template optimiser, escalation engine, orchestrator
- **L3 CASCADE** — tiered inference: T0 offline (built-in legal DB) → T3 API (any provider)
- **L4 BLOOM** — 7-ring intent router (R0 ground → R6 watcher)
- **L5 PERSIST** — IndexedDB storage, all data on-device
- **L6 SKIN** — calming blue/white/green palette, mobile-first responsive, dark mode
- **L7 ASS** — application state + lifecycle management

## Quick start

1. Download `GroundLevel-v2.html`
2. Open it in Chrome (or any modern browser)
3. Click "Describe what happened"
4. Type what happened in plain English
5. Click "Analyse My Case"
6. Review your case strength, rights, and legal position
7. Click "Build My Action Plan"
8. Copy/download your documents and start sending them

## Optional: power up with AI

1. Open Settings (gear icon)
2. Pick a provider (e.g. Groq for free fast inference)
3. Paste your API key
4. Click "Test Connection"
5. Save — your next analysis will be AI-enhanced

## Legal notice

GroundLevel is a legal **information** tool, not legal advice. Always consult a solicitor (UK) or attorney (US) for advice specific to your situation. Verify all information against primary sources.

## License

MIT — do whatever you want with it.

---

Built by [AI Native Solutions](https://github.com/sjgant80-hub) · v18 protocol · sovereign
