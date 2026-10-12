# Ronnie — 3D Creator Portfolio

A single-page portfolio site built with React, TypeScript, Tailwind CSS, and Framer Motion.

## Getting started

```bash
npm install
npm run dev
```

Then open the local URL it prints (usually http://localhost:5173).

## Contact form email delivery

The contact form sends messages through the Vercel serverless function in
`api/contact.js`. Configure these environment variables in the Vercel project
settings:

- `RESEND_API_KEY` — a Resend API key. Keep it server-side; never add it to
  client code or a `VITE_` variable.
- `RESEND_FROM_EMAIL` — optional. Set this to a sender address on a domain
  verified in Resend. If omitted, the function uses Resend's onboarding sender.

The function sends inquiries to `ronniemuworozi@gmail.com`. For local end-to-end
testing, run the app with the Vercel CLI (`vercel dev`) and configure the same
environment variables locally. The regular Vite dev server does not run
serverless functions.

To build for production:

```bash
npm run build
npm run preview
```

## Adding your own projects

This is the part you'll come back to. Open **`src/data/projects.ts`** — every
project card on the site is generated from the `projects` array in that file.

To add a finished project:

1. Drop your images into `src/assets/projects/`.
2. At the top of `src/data/projects.ts`, import them, e.g.:
   ```ts
   import myProjectShot1 from '../assets/projects/my-project-1.png';
   import myProjectShot2 from '../assets/projects/my-project-2.png';
   import myProjectShot3 from '../assets/projects/my-project-3.png';
   ```
3. Add a new object to the `projects` array:
   ```ts
   {
     number: '04',
     name: 'My New Project',
     category: 'Client', // or 'Personal'
     liveUrl: 'https://your-live-link.com',
     col1Image1: myProjectShot1,
     col1Image2: myProjectShot2,
     col2Image: myProjectShot3,
   },
   ```
4. Save — the Projects section updates automatically, including the
   sticky-stack scroll effect and card numbering.

You can also just paste an image URL as a plain string instead of importing
a local file, if the image is already hosted somewhere online.

To remove the current placeholder projects, just delete their objects from
the array (or delete all three to start from a clean slate — the section
will show a "No projects yet" placeholder until you add one).

## Swapping your portrait photo

Your hero photo lives at `src/assets/portrait.jpg`. Replace that file with a
new image (same filename) any time you want to update the hero portrait —
no code changes needed.

## Structure

```
src/
  components/      All UI pieces (Hero, Marquee, About, Services, Projects, + reusable bits)
  data/projects.ts Editable project list (see above)
  assets/          Portrait photo + your project images
```
