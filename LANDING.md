# Esports landing page

The landing page is an English, static season concept for team.webart.work, built in the existing Angular app.

## Content

- Edit game descriptions, roles, illustrative fixtures and results in `src/app/pages/landing/landing.component.ts`.
- Edit hero, stories and club introduction in the adjacent HTML template.
- The Chess, CS2 and Brawl Stars divisions, fixtures and results are preview content, not verified team announcements. Player slots are intentionally marked "To be announced".
- The existing translation infrastructure remains available, but this first design uses English copy. The previous starter language picker has been replaced by navigation for the esports page.
- `companyId` is empty for the static phase. Bootstrap uses local company data without requesting the demo API. Set a real ID when live content is ready.

## Design and assets

- Palette source: https://webart.work — acid yellow #d7d71d, red #c53d3d and charcoal. The esports design darkens the surfaces; light mode uses a darker yellow for readable text.
- Brand spider: https://webart.work/landing/logo.svg, saved as `src/assets/brand-logo.svg`.
- `src/assets/esports-hero.png`: original AI-generated arena artwork, not a photograph of actual Web Art Work players.
- Original logo.png remains the social metadata image. The site uses the vector spider for navigation and favicon.
- Fonts: Barlow Condensed and Inter, served through Google Fonts.

## Preview

Run `npm ci`, then `npm start`. Run `npm run build` for the prerendered output in `dist/app/browser`.

Working interactions: page navigation, mobile menu, upcoming/results tabs, game and story page links, and light/dark theme. Teams, Matches, News, About, Community, three games, and three stories have empty pages with a heading and shared layout. These placeholders are prerendered but marked noindex and omitted from the sitemap until content is added. Home and accessibility links retain their normal behavior.

No deployment or push was performed.

