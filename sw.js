// Minimal service worker — exists only to satisfy PWA installability
// requirements (Chrome's install prompt checks for a registered service
// worker with a fetch handler). This deliberately does NOT implement
// offline caching; every request still goes to the network as normal.
// Add real caching later if offline support is ever wanted.

self.addEventListener('install', (event) => {
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  self.clients.claim();
});

self.addEventListener('fetch', (event) => {
  // Pass every request straight through to the network, unmodified.
  event.respondWith(fetch(event.request));
});
