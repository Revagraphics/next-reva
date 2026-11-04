# Reva Graphics

Reva Graphics is a Next.js App Router site for the agency's services, portfolio,
and contact information.

## Development

Install dependencies and start the development server:

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

Useful project commands:

```bash
npm run lint
npm run build
npm run start
```

## Routes

Routes are defined under `src/app`:

- `/` — Home
- `/about` — About
- `/application` — Mobile applications
- `/branding` — Branding
- `/catalogue` — Catalogue and brochure viewer
- `/cloud` — Cloud services
- `/contact` — Contact
- `/content` — Content services
- `/corporate` — Corporate printing
- `/designing` — Design services
- `/development` — Web development
- `/events` — Event printing
- `/gifting` — Corporate gifting
- `/marketing` — Digital marketing
- `/portfolio` — Portfolio
- `/printing` — Printing
- `/stationery` — Stationery
- `/videopage` — Video production and editing

Keep route metadata in each route's server `page.jsx`. Interactive pages use
client components alongside their route files; keep browser APIs and React
hooks inside those client components. Files served directly by URL belong in
`public`.

## Catalogues

Catalogue metadata is maintained server-side in `src/lib/catalogues.js`.
Place each PDF in `public` and add its slug, title, description, cover URL,
PDF URL, and page count to that list. The catalogue gallery reads
`/api/catalogues`, and each item is available at `/catalogue/{slug}`. The PDF
viewer is loaded only on the slug page, not in the catalogue gallery.

## Contact form

The contact form posts to `/api/contact`, which forwards the inquiry to the
PHP mail handler. Next.js serves files in `public` as static assets; it does not
execute PHP. Deploy `backend/contact.php` to a PHP-enabled host, then configure
the server-only `CONTACT_PHP_ENDPOINT` environment variable in each deployment
with that handler's HTTPS URL. For local development, HTTP is allowed for localhost.

The PHP host must have `mail()` configured. Its recipient and sender can be
overridden with `CONTACT_TO_EMAILS` (comma-separated addresses) and
`CONTACT_FROM_EMAIL`. Keep these deployment settings out of source control.
