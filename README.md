# Tamil Venthan A - Portfolio

## Run in VS Code
1. Unzip the file, then File > Open Folder and pick the unzipped folder.
2. Install the "Live Server" extension, right-click `index.html` > Open with Live Server (or just double-click `index.html`).
3. Internet is needed for fonts, icons and the GitHub section.
You do NOT need Node.js unless you change Tailwind classes (see "Rebuild CSS").

## Deploy on Vercel
Drag the folder into https://vercel.com/new (or push to GitHub and import it). `404.html` is picked up automatically.
After deploying:
- In `index.html` replace `YOUR-SITE.vercel.app` with your real URL (3 places in the head) for the WhatsApp/LinkedIn share preview.
- Vercel dashboard > your project > Analytics > Enable (the script is already in the page).
- Send a test message through the contact form.

## Edit content (script block in index.html)
- `TESTIMONIALS`, `PROJECTS`, `SKILLS`, `CERTS`, `POSTERS`.
- Project pop-ups: text is in `PD`. Screenshots go in `assets/projects/<slug>/1.jpg, 2.jpg ...` in the order listed in `shots`:
  transitops (4), indoor-railway (3), mobile-app-ui (3), smart-india-hackathon (3), tvx-company (3). Missing images are hidden.
- Certificate Verify button: add `verify: 'https://...'` to a CERTS entry. Without it, the button shows "Verification link will be updated soon."
- Posters: add to `POSTERS` and drop images in `assets/posters/`.
- Resume: replace `assets/Tamil_Venthan_A_Resume.pdf`.

## Rebuild CSS (only after changing Tailwind classes)
`npm install` once, then `npm run build`. Output: `assets/css/tailwind.css`.

## Shortcuts
Ctrl+K (Cmd+K on Mac) opens the command palette.
