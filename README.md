# RSM — ResolveSync Management Website

A clean, responsive corporate website for **ResolveSync Management (RSM)**, built to communicate the company's services, approach, and contact information in a clear and professional way.

The website is built with plain **HTML, CSS, and JavaScript**, making it lightweight, easy to maintain, and suitable for static hosting.

---

## About ResolveSync Management

**ResolveSync Management (RSM)** provides practical management and execution support for businesses, teams, organizations, projects, and events.

The website is designed to communicate RSM's:

* Identity and positioning
* Services
* Approach to project and event delivery
* Who RSM supports
* Contact options

The design uses a professional navy, blue, and cream visual identity with clean typography and subtle motion.

---

## Website Structure

The website is organized into the following pages:

```text
RSM Website
│
├── Home
├── About
├── Services
├── How We Work
├── Why RSM
└── Contact
```

### Pages

#### Home

Introduces RSM, its core services, who it supports, and provides a clear call to action.

#### About

Explains who RSM is, its approach, values, and what the organization believes.

#### Services

Presents RSM's main service areas:

* Project Management
* Event Management
* Operations & Business Support
* Strategy & Planning

#### How We Work

Explains RSM's process from understanding an objective through planning, coordination, execution, and review.

#### Why RSM

Highlights the reasons clients and teams can work with RSM, including clarity, structure, coordination, accountability, flexibility, and execution.

#### Contact

Provides RSM's contact information and a project enquiry form.

---

## Design System

### Color Palette

| Color | Value     | Usage                           |
| ----- | --------- | ------------------------------- |
| Navy  | `#0a2b55` | Primary brand color             |
| Blue  | `#1764d8` | Accent and interactive elements |
| Ink   | `#172235` | Main text                       |
| Muted | `#667085` | Secondary text                  |
| Cream | `#fbfaf7` | Soft background                 |
| Soft  | `#f6f8fb` | Section background              |
| White | `#ffffff` | Cards and contrast areas        |

### Typography

The website uses clean, modern sans-serif typography with **DM Sans** and **Manrope** where available.

The typography is intentionally kept professional, readable, and moderate in scale.

---

## Features

* Responsive design for desktop, tablet, and mobile
* Mobile navigation menu
* Scroll reveal animations
* Accessible navigation controls
* Responsive service cards
* Contact enquiry form
* WhatsApp contact integration
* Floating WhatsApp button
* Social media links
* Dynamic footer year
* Reduced-motion support
* SEO-friendly page titles and descriptions
* Lightweight vanilla JavaScript

---

## Contact Form

The current contact form prepares a project enquiry and opens WhatsApp with the information already filled in.

This allows visitors to quickly send their enquiry to RSM without requiring a traditional backend server.

The form includes:

* Name
* Email
* Service
* Project message
* Honeypot spam field
* Basic frontend validation

### Future Form Setup

A dedicated form service such as **Formspree** can be connected later to allow enquiries to be submitted directly through the website and delivered to RSM's email.

API keys, private credentials, or other secrets should never be placed inside frontend JavaScript.

---

## Security

The website is designed as a static frontend and does not store sensitive user information.

Security considerations include:

* No API keys or private credentials in frontend code
* Basic frontend form validation
* Honeypot spam protection
* Safe handling of external links
* No unnecessary third-party scripts
* No sensitive information stored in the repository

If a backend or form service is added, server-side validation, rate limiting, sanitization, and appropriate security protections should also be implemented.

---

## Accessibility

The website includes accessibility considerations such as:

* Descriptive page titles
* Semantic HTML structure
* Accessible navigation controls
* ARIA attributes for the mobile menu
* Descriptive image alt text
* Keyboard-friendly interactive elements
* Reduced-motion support
* Readable color contrast

---

## Technologies

The website is built using:

* HTML5
* CSS3
* JavaScript
* Google Fonts
* Font Awesome
* Git
* GitHub

No frontend framework is required for the current version.

---

## Project Structure

```text
RSM/
│
├── index.html
├── about.html
├── services.html
├── how-we-work.html
├── why-rsm.html
├── contact.html
│
├── css/
│   └── styles.css
│
├── js/
│   └── main.js
│
├── assets/
│   ├── logo-full.png
│   ├── logo-mark-white-96.png
│   └── favicon.svg
│
└── README.md
```

---

## Local Development

Because the website is built with plain HTML, CSS, and JavaScript, it does not require a build process.

The project can be opened using:

* VS Code Live Server
* A local web server
* Python's built-in HTTP server

Example:

```bash
python -m http.server
```

Then open the local server address in a browser.

---

## Deployment

The website can be deployed using static hosting platforms such as:

* GitHub Pages
* Netlify
* Cloudflare Pages

The current project is suitable for GitHub Pages because it does not require a server-side runtime.

---

## SEO

Each main page includes:

* A unique page title
* A meta description
* Semantic HTML
* Descriptive headings
* Image alt text

Recommended future SEO improvements include:

* Custom domain
* Canonical URLs
* Open Graph metadata
* `sitemap.xml`
* `robots.txt`
* Google Search Console
* Optimized social sharing image

---

## Testing Checklist

Before launch, test the website on:

### Desktop

* Chrome
* Edge
* Firefox

### Mobile

* Android
* iPhone

### Functional Testing

* Navigation links
* Mobile menu
* Contact form
* WhatsApp links
* Social media links
* Footer links
* Buttons
* Page responsiveness
* Scroll animations

### Accessibility Testing

* Keyboard navigation
* Focus states
* Image alt text
* Menu accessibility
* Reduced-motion behavior

---

## Launch Checklist

Before the final public launch:

* [ ] Finalize website content
* [ ] Test all navigation links
* [ ] Test contact form
* [ ] Confirm WhatsApp number
* [ ] Confirm RSM email
* [ ] Confirm social media links
* [ ] Test mobile responsiveness
* [ ] Test desktop responsiveness
* [ ] Add custom domain if available
* [ ] Connect Google Search Console
* [ ] Add `sitemap.xml`
* [ ] Add `robots.txt`
* [ ] Add Open Graph metadata
* [ ] Perform final accessibility check

---

## Future Improvements

Possible future improvements include:

* Direct email form submission
* Formspree or backend integration
* Custom domain
* Analytics
* Improved spam protection
* Client/project case studies
* Testimonials
* Additional program pages
* Enhanced SEO
* Performance optimization

These improvements can be added as RSM's website and services grow.

---

## Project Status

**Status:** Active Development

The current version focuses on presenting RSM's identity, services, working process, value proposition, and contact options through a clean and professional multi-page website.

The website is intentionally kept lightweight so that it can be maintained and updated easily as RSM develops.

---

## Contact

**ResolveSync Management (RSM)**

Email: [resolvesyncmanagement@gmail.com](mailto:resolvesyncmanagement@gmail.com)

WhatsApp: +234 812 167 8176

Instagram: @resolvesyncmng

TikTok: @resolvesync.manag

X: @ResolvesyncMng

LinkedIn: ResolveSync Management

---

## License

This project is developed for **ResolveSync Management (RSM)**.

All brand assets, logos, written content, and original design materials belong to RSM unless otherwise stated.
