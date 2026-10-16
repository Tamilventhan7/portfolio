# Tamil Venthan A - Portfolio

Open `index.html` in a browser to preview (needs internet for fonts and Tailwind).

## Deploy for free (pick one)
**Vercel (you already use it):** vercel.com > Add New > Project > import a GitHub repo containing these files, or drag the folder into https://vercel.com/new.
**Netlify Drop:** go to https://app.netlify.com/drop and drag this whole folder in.
**GitHub Pages:** push these files to a repo, then Settings > Pages > Deploy from branch `main` / root.

After deploying, send a test message through the contact form. It should arrive in the inbox your Web3Forms access key was created with.

## Edit content
Everything is in the `<script>` block at the bottom of `index.html` (top of the script):
- `POSTERS`: add `{ src: 'assets/posters/poster-01.jpg', title: '...', caption: '...' }` and drop images in `assets/posters/`
- `TESTIMONIALS`: add `{ quote: '...', name: '...', role: '...' }`. The section stays hidden until you add real entries.
- `PROJECTS`, `SKILLS`, `CERTS`: edit or add entries.
- To add a certificate: put the PDF in `assets/certificates/`, a JPG preview in `assets/cert-previews/` (same file name), then add a line to `CERTS`.

Resume: replace `assets/Tamil_Venthan_A_Resume.pdf` whenever you update it.
