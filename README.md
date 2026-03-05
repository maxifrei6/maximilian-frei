# Academic Portfolio (Static)

A single-page academic portfolio. Pure static HTML, Tailwind CSS (CDN), and vanilla JavaScript. No build step—ready for GitHub Pages.

## Contents

- **index.html** — Single-page site (hero, education, experience, projects, papers)
- **style.css** — Theme variables, fonts, drawer and layout utilities
- **assets/** — Put `profile-image.jpg` here for the hero photo.
- **assets/pdf/** — Add your PDFs here: `cv.pdf` (compile from `cv/main.tex` and save as `cv.pdf`), plus optional papers/project PDFs.

## GitHub Pages

1. Push this repo to GitHub.
2. Settings → Pages → Source: **Deploy from a branch**.
3. Branch: **main** (or your default), folder: **/ (root)**.
4. Save. The site will be at `https://<username>.github.io/<repo>/`.

`.nojekyll` is included so Jekyll does not process the site.

## Local preview

Open `index.html` in a browser, or run a simple server:

```sh
python3 -m http.server 8000
```

Then visit http://localhost:8000
