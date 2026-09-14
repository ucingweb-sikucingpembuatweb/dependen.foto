# dependent.foto

Production-oriented Next.js / TypeScript / Tailwind photography portfolio concept.

## Run

```bash
npm install
npm run dev
```

Then open http://localhost:3000.

## Design benchmark

The direction was informed by current image-first photography portfolio patterns: full-bleed presentation, project-led storytelling, horizontal galleries, editorial typography, and motion. Indonesian references included graduation and sports photography services, while international references included photography portfolio/editorial and running-photography sites.

## Image licensing note

The demo uses remote image URLs for prototyping. Before deploying as a real photography business, replace them with photographs you own or have explicit commercial/web usage rights for. The graduation image comes from an Indonesian photography portfolio; the running references include publicly indexed Indonesian running imagery. Verify rights before production use.

## Production next steps

- Replace demo image URLs with owned/licensed `/public` or CDN assets.
- Add real portfolio/project data.
- Connect a real Instagram account if desired.
- Add analytics and a proper booking/inquiry flow.
- Configure the real `dependent.foto` domain.


## Fixed
The `@/*` TypeScript path alias is configured in `tsconfig.json`, and the story parallax hook is declared at component scope so React Hooks rules are respected.
