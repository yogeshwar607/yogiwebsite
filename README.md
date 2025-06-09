# start command
` npm run start`

# yogeshwar.soulputs.com

# credit to https://github.com/tamino-martinius for website design

# yogiwebsite

## Overview

This project is a Vue 2 static site (built with webpack) that is served via Cloudflare Workers (using wrangler).

## Local Development

- **Install dependencies:**  
  Run `npm install` (or `yarn install`).

- **Build:**  
  Run `npm run build` (or `yarn build`) to generate the static site (in the `dist` folder).

- **Preview locally:**  
  Run `npm run preview` (or `yarn preview`) to start a local http server (using serve) on the `dist` folder (usually at http://localhost:3000).

- **Wrangler (Cloudflare Workers) Dev:**  
  (Optional) Run `npm run wrangler:dev` (or `yarn wrangler:dev`) to preview using wrangler (in dev mode, a fallback message is shown).

## Deployment

- **Deploy (using wrangler):**  
  Run `npm run wrangler:publish` (or `yarn wrangler:publish`) to deploy your static site (from the `dist` folder) via Cloudflare Workers.

- **Cloudflare Dashboard:**  
  In the Cloudflare dashboard (for example, in Pages or Workers), set your build command to:  
  `npm run build` (or `yarn build`).
