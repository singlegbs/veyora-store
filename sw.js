'use strict';
const VERSION = 'veyora-pwa-v16-20261121-hero-brand';
const SHELL = ["/","/index.html","/style.css?v=20261117-product10","/products.js?v=20261117-product10","/catalog.js?v=20261117-product10","/store.js?v=20261117-product10","/catalog-view.js?v=20261117-product10","/store-update.js?v=first-paint-20261118","/account.js?v=20261117-product10","/offline.html","/manifest.webmanifest","/icon-192.png","/icon-512.png","/icon-512-maskable.png","/apple-touch-icon.png"];
self.addEventListener('install', event => {
  event.waitUntil(caches.open(VERSION).then(cache => cache.addAll(SHELL.map(path => new Request(path, {cache: 'reload'})))).then(() => self.skipWaiting()));
});
self.addEventListener('activate', event => {
  event.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(key => key.startsWith('veyora-pwa-') && key !== VERSION).map(key => caches.delete(key)))).then(() => self.clients.claim()));
});
self.addEventListener('fetch', event => {
  const request = event.request;
  const url = new URL(request.url);
  // Never intercept payment, checkout, non-GET, API, or cross-origin traffic.
  if (request.method !== 'GET' || url.origin !== self.location.origin || /paystack|checkout|payment|transaction|\/api\//i.test(url.pathname + url.search)) return;
  if (request.mode === 'navigate') {
    event.respondWith(fetch(request, {cache: 'no-store'}).then(response => response.ok ? response : Promise.reject(new Error('Offline'))).catch(async () => {
      const cache = await caches.open(VERSION);
      // The offline page keeps network-dependent checkout out of an offline shell.
      return await cache.match('/offline.html') || await cache.match('/index.html');
    }));
    return;
  }
  // Cache only shell resources: no customer data or large product image library.
  const allowed = SHELL.some(path => new URL(path, self.location.origin).href === url.href);
  if (!allowed) return;
  const update = caches.open(VERSION).then(async cache => {
    const response = await fetch(request, {cache: 'no-cache'});
    if (response.ok && response.type === 'basic') await cache.put(request, response.clone());
    return response;
  });
  event.waitUntil(update.then(() => undefined).catch(() => undefined));
  event.respondWith(caches.open(VERSION).then(async cache => await cache.match(request) || update));
});
