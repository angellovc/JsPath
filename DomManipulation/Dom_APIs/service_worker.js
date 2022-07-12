const VERSION = 'v1';


self.addEventListener('install', event => {
  event.waitUntil(precache());
});

// when you do a fetch the service worker will store in the cache the response
// in order to use it later
self.addEventListener('fetch', event => {
  const request = event.request;
  // get
  if (request.method !== 'GET') {
    return;
  }

  event.respondWith(cachedResponse(request));
  event.waitUntil(updateCache(request));
});

async function precache() {
  const cache = await caches.open(VERSION);
  return cache.addAll([
    './index.jpeg',
  ]);
}

async function cachedResponse(request) {
    // every time a fetch is executed, the browser will search frist in the cache
    // when response is not present there, the fetch request is executed 
    // and will store the result in the cache

  const cache = await caches.open(VERSION);
  const response = await cache.match(request);
  return response || fetch(request);
}

async function updateCache(request) {
  const cache = await caches.open(VERSION);
  const response = await fetch(request);
  return cache.put(request, response);
}