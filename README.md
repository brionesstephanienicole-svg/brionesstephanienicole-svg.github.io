# Stephanie Nicole Briones — Developer Portfolio

A lightweight, responsive personal portfolio built with HTML, CSS, and vanilla JavaScript. It is designed to run as a static site on GitHub Pages.

## About

Stephanie Nicole Briones is an Information Technology student interested in web development, system development, databases, UI/UX, and software engineering. This site presents selected project work and a growing technical toolkit.

## Features

- Dark, responsive developer portfolio with custom local project illustrations
- Animated hero role, section reveals, sticky navigation, and accessible mobile menu
- Skills, project, journey, GitHub, and contact sections
- Reduced-motion support, keyboard focus styles, semantic sections, and skip link
- Contact form that prepares an email draft after the placeholder recipient is replaced; no message is sent or stored by the site
- Static-site friendly paths, custom favicon, metadata, and 404 page

## Technologies Used

- HTML5
- CSS3
- Vanilla JavaScript
- Inline SVG artwork and favicon

Google Fonts are loaded from a CDN as progressive enhancement. System fallbacks are included.

## Project Structure

```text
/
├── index.html
├── 404.html
├── css/style.css
├── js/script.js
├── assets/
│   ├── icons/favicon.svg
│   └── images/profile-placeholder.svg
└── resume/README.txt
```

## How to Run Locally

1. Clone or download this project.
2. Open the project folder in VS Code.
3. Open `index.html` with the Live Server extension, or open the file directly in a browser.

There is no build step, package installation, or server requirement.

## How to Customize

Search the source for `PLACEHOLDER` and replace clearly marked contact and personal details before publishing. Do not add made-up dates, experience, metrics, or project URLs.

### Adding My Profile Photo

The current profile photo is `assets/images/stephanie-profile.jpg`. To change it, replace that file or update the image `src` in `index.html`. Keep the `alt` text accurate. A square image works best; the layout crops it to a circle.

### Adding My Resume

Put your approved PDF in `resume/`, then add a link to its relative path in `index.html`, for example `resume/Stephanie-Nicole-Briones-CV.pdf`. Until you add the file, the portfolio intentionally avoids linking to a broken download.

### Updating Project Links

The Quadracafe POS and HRMS source buttons currently open your GitHub repositories page because their exact repository URLs were not available. Replace those links in `index.html` with the direct repository URLs when ready. Replace “Demo coming soon” only when a working demo exists.

### Updating Contact Information

The email address is currently set to `stephanienicoleespinosabriones@gmail.com` in `index.html` and `js/script.js`. Update both files if it changes.

## GitHub Pages Deployment

1. Create a GitHub repository for the portfolio.
2. Push this project to GitHub, with `index.html` at the repository root.
3. Open the repository **Settings**.
4. Open **Pages** in the sidebar.
5. Under **Build and deployment**, choose **Deploy from a branch**.
6. Select branch **main** and folder **/ (root)**.
7. Click **Save**.
8. Wait for the GitHub Pages deployment to finish.
9. Open the generated URL shown on the Pages settings screen.

All site assets use relative paths so the site works on a GitHub Pages project URL.

## Contact Form Setup

The current form validates fields and opens the visitor’s default mail app with a prefilled message after you configure your recipient email in `js/script.js`. It does not submit anything to a server, and it does not claim that a message was sent. Visitors still need to review and send the draft themselves.

For a hosted form, create your own Formspree or Web3Forms endpoint, then follow that provider’s current setup instructions and update the form action/JavaScript. Never put secret API keys, SMTP credentials, or private tokens in this public repository.

## Security Notes

- Never commit passwords, API keys, tokens, database credentials, or private personal information to GitHub.
- Review your resume and project contents for information you do not intend to make public.
- External links opened in a new tab use `rel="noopener noreferrer"`.
- Keep dependencies and third-party scripts to a minimum; this site does not require a backend.
