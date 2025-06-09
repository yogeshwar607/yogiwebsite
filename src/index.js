// Minimal Worker entry (src/index.js) for serving static assets from dist.
export default {
  fetch(request, env, ctx) {
    // In wrangler dev, env.ASSETS may not be available; return a simple 200 response (or a fallback) instead.
    // (In production, Wrangler (with [site] bucket) automatically serves static files from dist.)
    return new Response("Static site served by Wrangler (dev mode).", { status: 200 });
  }
}; 