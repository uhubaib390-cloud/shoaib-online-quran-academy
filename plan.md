# Shoaib Online Quran Academy — Implementation Plan

## Product scope
Rebrand the reference Ahmad Online Quran Academy experience as **SHOAIB ONLINE QURAN ACADEMY** while preserving its editorial rhythm: quiet Islamic typography, one-to-one learning, course discovery, teachers, pricing, free trial, and admission/contact conversion paths. The build includes public routes for the requested academy pages plus an admin-ready dashboard surface.

## Implementation approach
- React + Wouter for public and admin-ready routes.
- A content-first client model for courses, pricing, FAQs, trust points, and testimonials so the public site is easy to hand off to a future content-management layer.
- Express JSON endpoint at `/api/inquiries` for admission, trial, registration, and contact submissions with server-side validation and a clear success response. The UI does not pretend to have a payment integration or a teacher identity that was not supplied.
- Drizzle/MySQL starter remains enabled for the managed project. The first public release keeps the data model additive and non-destructive; the dashboard UI is structured for database-backed management without destructive migrations.
- Route manifest in `client/public/manus-routes.json` covers every public page, course detail pattern, and `/admin`.

## Project structure
- `client/src/App.tsx`: route map and global providers.
- `client/src/pages/Home.tsx`: public content model, homepage sections, shared page shell, forms, course detail, and admin dashboard presentation.
- `client/src/index.css`: visual system, responsive layout, Islamic geometric motifs, motion, and accessible form styling.
- `client/public/manus-routes.json`: crawler/preview route declarations.
- `server/_core/index.ts`: health route plus inquiry submission endpoint.
- `drizzle/schema.ts`: existing auth schema retained unchanged until a safe data migration is explicitly needed.

## Design direction
Three candidate styles sampled for the reference-led build:
- 0.06 — **Quiet Editorial Madrasa**: gallery-like typography, generous whitespace, restrained green/gold accents.
- 0.04 — **Royal Geometric Heritage**: darker surfaces, framed panels, richer ornament.
- 0.03 — **Contemporary Learning Journal**: lighter cards, more product-like navigation, minimal ornament.

Chosen style: **Quiet Editorial Madrasa**.

- **Design Movement:** contemporary editorial Islamic education, influenced by museum catalogues and traditional manuscript framing.
- **Core Principles:** reverence without heaviness; clarity before decoration; one-to-one care made visible; calm conversion moments.
- **Color Philosophy:** deep green signals trust and spiritual grounding; cream gives the page the warmth of paper; muted gold is reserved for guidance, focus, and small moments of delight.
- **Layout Paradigm:** a vertical story with offset editorial blocks, asymmetrical split sections, and narrow reading columns rather than repeated centered cards.
- **Signature Elements:** arch-shaped image/profile frames; thin gold rules with numbered section markers; low-contrast geometric pattern fields.
- **Interaction Philosophy:** every action is gentle and specific: “Begin with a free trial,” “Explore the learning path,” and “Request a teacher.” Hover motion is short and tactile rather than flashy.
- **Animation:** fade-and-rise on section entry, subtle card lift on hover, and a slow pattern drift in hero/deep-green sections; no constant looping or scroll hijacking.
- **Typography System:** Cormorant Garamond for display headings and Arabic-inspired editorial moments; DM Sans for navigation, labels, body copy, and forms. Uppercase micro-labels carry the rhythm of the reference site.
- **Brand Essence:** a calm, qualified one-to-one Quran learning home for families worldwide; personality: reverent, patient, assured.
- **Brand Voice:** headlines should feel invitational and grounded; CTAs should be direct but never salesy. Examples: “Let your learning begin with care.” / “Ask for a time that fits your family.”
- **Wordmark & Logo:** a compact open-book / eight-point star mark next to a stacked two-line wordmark; the mark is rendered in a gold-lined rounded square for use as the site favicon later.
- **Signature Brand Color:** `#0f5b4c` — Shoaib Emerald, a deep, warm green distinct from generic teal.

## Deferred-but-ready items
The supplied attachment contains requirements for an actual teacher photograph, but no image file was present in the workspace. The main teacher section therefore uses an unmistakable admin-managed portrait slot and never invents a face, name, or qualification. The female teacher section deliberately uses a neutral illustrated motif and no personal identity.
