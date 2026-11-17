# Tofnova Technology — React (Vite) version

Original HTML/CSS/JS landing page converted to a React project. Design and styling are unchanged (`src/styles/style.css` is the same stylesheet), every section is now its own component.

## Run
```bash
npm install
npm run dev       # development  -> http://localhost:5173
npm run build     # production build -> dist/
npm run preview   # preview the build
```
Upload the contents of `dist/` to your hosting (public_html).

## Structure
```
public/assets/            logo, favicon, team photos
src/
  main.jsx, App.jsx
  styles/style.css        same CSS as the original site
  config/site.js          WhatsApp number + FORM_ENDPOINT (form inbox)
  data/                   all text/content (services, skills, team, faq ...)
  hooks/                  useSmoothScroll, useGsapAnimations, useScrollSpy,
                          useMagnetic, useInView
  lib/                    smoothScroll (Lenis), env flags
  components/
    layout/    Header, Footer, Preloader, Cursor, WhatsAppFloat
    sections/  Hero, Marquee, About, Services, WhyUs, Skills, Process,
               Team, Work, Faq, CtaBand, Contact, ContactInfo, LeadForm
    ui/        Button, Counter, SkillBar, ServiceCard, FaqItem,
               TeamCard, SocialLinks
    icons/     ServiceIcons, WhatsAppIcon
```

## Editing content
Text, services, skills, team members and FAQ live in `src/data/*.js` — edit there, no need to touch components.

## Contact form
Validates, checks the honeypot, then opens WhatsApp with the details pre-filled. To also save/email submissions, set `FORM_ENDPOINT` in `src/config/site.js`.
