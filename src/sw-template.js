if ("function" === typeof importScripts) {
  importScripts(
    "https://storage.googleapis.com/workbox-cdn/releases/3.5.0/workbox-sw.js"
  );
  /* global workbox */
  if (workbox) {
    console.log("Workbox is loaded");

    /* injection point for manifest files.  */
    workbox.precaching.precacheAndRoute([]);

    /* custom cache rules*/
    workbox.routing.registerNavigationRoute("/index.html", {
      blacklist: [/^\/_/, /\/[^\/]+\.[^\/]+$/]
    });
    // install service worker

    self.addEventListener("install", evt => {
      console.log("service worker installed");
    });

    // active service worker
   const cacheName = ['jiah-static-v2'];

self.addEventListener('activate', (e) => {
    console.log('[Service Worker] Activated');
    e.waitUntil(
        caches.keys().then(cacheNames => {
            return Promise.all(
                cacheNames.map(thisCacheName => {
                    if (!cacheName.includes(thisCacheName)) {
                        console.log(`[Service Worker] Removing Cached Files from Cach-${thisCacheName}`);
                        return caches.delete(thisCacheName);
                    }
                })
            );
        })
    );
});

    self.addEventListener("fetch", evt => {
      console.log("Fetch", evt);
    });

    workbox.routing.registerRoute(
      /\.(?:png|gif|jpg|jpeg)$/,
      workbox.strategies.cacheFirst({
        cacheName: "images",
        plugins: [
          new workbox.expiration.Plugin({
            maxEntries: 60,
            maxAgeSeconds: 30 * 24 * 60 * 60 // 30 Days
          })
        ]
      })
    );
  } else {
    console.log("Workbox could not be loaded. No Offline support");
  }
}
