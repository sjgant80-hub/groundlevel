/* ◊·κ=φ⁴ · GroundLevel service worker
 * cache-first · works fully offline · re-fetches on update */

const CACHE = 'groundlevel-v3-1';
const SHELL = [
  './',
  './index.html',
  './manifest.json',
];

self.addEventListener('install', (e) => {
  e.waitUntil((async () => {
    const c = await caches.open(CACHE);
    await c.addAll(SHELL).catch(() => {});
    self.skipWaiting();
  })());
});

self.addEventListener('activate', (e) => {
  e.waitUntil((async () => {
    const keys = await caches.keys();
    await Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)));
    self.clients.claim();
  })());
});

self.addEventListener('fetch', (e) => {
  const req = e.request;
  // only cache GET same-origin
  if (req.method !== 'GET') return;
  const url = new URL(req.url);
  // network-first for the audit-shim CDN (so updates land)
  if (url.host.includes('sjgant80-hub.github.io')) {
    e.respondWith(
      fetch(req).then(r => {
        if (r.ok) {
          const clone = r.clone();
          caches.open(CACHE).then(c => c.put(req, clone));
        }
        return r;
      }).catch(() => caches.match(req))
    );
    return;
  }
  // cache-first for app shell
  if (url.origin === location.origin) {
    e.respondWith(
      caches.match(req).then(cached => {
        if (cached) return cached;
        return fetch(req).then(r => {
          if (r.ok) {
            const clone = r.clone();
            caches.open(CACHE).then(c => c.put(req, clone));
          }
          return r;
        }).catch(() => caches.match('./index.html'));
      })
    );
  }
});

self.addEventListener('message', (e) => {
  if (e.data && e.data.type === 'SKIP_WAITING') self.skipWaiting();
});
