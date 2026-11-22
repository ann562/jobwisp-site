# Jobwisp website

Home, support and privacy policy pages for the Jobwisp Chrome extension.

- `index.html`: home page (Chrome Web Store **Homepage URL**)
- `support.html`: help and contact (**Support URL**)
- `privacy.html`: privacy policy (**Privacy policy URL**)

Live site (once GitHub Pages is on): https://ann562.github.io/jobwisp-site/

Support contact: jobwisp@gmail.com

## To finish setup

1. Turn on GitHub Pages: **Settings** > **Pages** > Source **Deploy from a branch**,
   Branch **main**, folder **/ (root)**, then **Save**.
2. After the extension is published, paste its Chrome Web Store link into `site.js`.

## Using your own domain later

In **Settings** > **Pages** > **Custom domain**, enter your domain and save first. Then at your
registrar add four **A** records for `@` (185.199.108.153, 185.199.109.153, 185.199.110.153,
185.199.111.153) and a **CNAME** for `www` pointing to `ann562.github.io`. When it works,
tick **Enforce HTTPS**.
