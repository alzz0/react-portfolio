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

   self.addEventListener('install', function (e) {
    console.log('[Service Worker] Install');
    e.waitUntil(
      caches.open(dataCacheName).then(function (cache) {
          console.log('[Service Worker] Caching app shell');
          return cache.addAll(filesToCache);
      }).then(function(e){
        return self.skipWaiting();
      })
    );
});

    // active service worker
    self.addEventListener("activate", evt => {
      console.log("service worker has been actived");
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
