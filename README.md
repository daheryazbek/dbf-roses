# DBF ROSES Website

Bilingual (English/Spanish) B2B business website for **DBF GLOBAL ROSES S.A.S.** built with Next.js + TypeScript + Tailwind CSS.

## Tech Stack

- Next.js (App Router)
- TypeScript
- Tailwind CSS

## Local Run

1. Install Node.js 20+.
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start development server:
   ```bash
   npm run dev
   ```
4. Open `http://localhost:3000`.

English default route: `/en`.
Spanish route: `/es`.

## Build for Production

```bash
npm run build
npm run start
```

## Project Structure

- `src/app/[lang]/...`: localized pages (`/en` and `/es`)
- `src/components/`: reusable UI components
- `src/lib/content.ts`: bilingual content source (all EN/ES copy)
- `public/placeholders/`: placeholder visual assets

## Where To Replace Branding and Images

1. Logo text placeholder:
   - `src/components/layout/site-header.tsx`
   - Replace the text logo with your official brand mark (e.g. `/public/logo.svg`).

2. Section image placeholders:
   - `public/placeholders/*.svg`
   - Swap with real company imagery as needed.

## Future Integrations (Marked in Code)

1. Contact form backend integration:
   - `src/components/forms/contact-form.tsx`
   - Comment included where to connect API/CRM/email service.

2. WhatsApp direct link:
   - `src/app/[lang]/contact/page.tsx`
   - Comment included where to replace placeholder URL with WhatsApp Business link.

## SEO

- Per-page metadata for EN/ES (`generateMetadata`)
- `src/app/sitemap.ts`
- `src/app/robots.ts`

## Notes

- This site is positioned as a **commercial export partner**, not a retail flower store.
- No backend included by design (static front-end form behavior only).

