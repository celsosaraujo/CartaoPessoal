const cacheName = 'cartao-celso-v1';
const filesToCache = [
  './',
  './manifest.webmanifest',
  './index.html',
  './css/style.css',
  './script/main.js',
  './image/fotoCelso.png'
];

// Instala o Service Worker e armazena em cache os arquivos
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(cacheName).then(cache => {
      return cache.addAll(filesToCache);
    })
  );
  self.skipWaiting();
});

// Serve os arquivos do cache quando estiver offline
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});