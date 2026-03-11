const cacheName = 'bass-trainer-v1';
const assets = [
  './',
  './index.html',
  './manifest.json',
  // Add your CSS or JS filenames here, like:
  // './style.css',
];

// Install the service worker and cache files
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(cacheName).then(cache => {
      return cache.addAll(assets);
    })
  );
});

// Serve files from cache when offline
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});
