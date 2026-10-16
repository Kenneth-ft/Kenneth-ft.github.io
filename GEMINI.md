# Workspace Guidelines: Kenneth Tubungbanua Portfolio

## Project & Hosting Architecture
This repository (`Kenneth-ft.github.io`) is a **purely static website** hosted on **GitHub Pages**.

### Mandatory Technical Constraints
1. **Zero Server-Side Runtime / Zero Databases**:
   - Only client-side technologies are permitted: semantic HTML5, modern vanilla CSS3, and vanilla ES6 JavaScript.
   - Do NOT introduce server-side runtimes (Node.js/Express, PHP, Python Flask/Django, Ruby on Rails) or SQL/NoSQL databases.
   - Any dynamic functionality (e.g., project filters, git graph branch switching, contact forms) must run 100% in the user's browser.

2. **GitHub Pages Quotas & Build Performance**:
   - **Repository Size (< 1 GB)**: Keep repository assets lightweight. Optimize and compress all images (JPG/PNG/WebP under 500 KB). Do NOT commit raw video files (`.mp4`, `.mov`) or large CAD assembly files (`.step`, `.sldasm`); link to external hosts or GrabCAD/GitHub Releases instead.
   - **Build Quota & Timeouts (10 builds/hr, 10 min timeout)**: The site relies on the `.nojekyll` flat-file pipeline for near-instant (1-3 second) deploys. Do not add complex, fragile build systems that could fail or time out.

3. **Security & Public Repo Hygiene**:
   - This repository is publicly visible on GitHub.
   - Never commit sensitive personal data (private phone numbers, physical home addresses, unlisted emails), private API keys, or access tokens.
   - Contact forms must operate either through client-side feedback, `mailto:`, or serverless static form endpoints (e.g. Formspree) without exposing credentials.

4. **Design Aesthetic & Branding**:
   - Dark theme (`#0e1117`) with cyan/blue accents (`#58a6ff`), glassmorphism headers, and high-contrast typography.
   - Center Kenneth's identity: BASc Mechatronic Systems Engineering at SFU, bare-metal C/C++ firmware, PCB design, and hands-on mechanical diagnostics.

