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

    self.addEventListener("install", function(e) {
      e.waitUntil(
        Promise.all([
          caches.open(STATIC_CACHE_NAME),
          caches.open(APP_CACHE_NAME),
          self.skipWaiting()
        ]).then(function(storage) {
          var static_cache = storage[0];
          var app_cache = storage[1];
          return Promise.all([
            static_cache.addAll(CACHE_STATIC),
            app_cache.addAll(CACHE_APP)
          ]);
        })
      );
    });

    self.addEventListener("activate", function(e) {
      e.waitUntil(
        Promise.all([
          self.clients.claim(),
          caches.keys().then(function(cacheNames) {
            return Promise.all(
              cacheNames.map(function(cacheName) {
                if (
                  cacheName !== APP_CACHE_NAME &&
                  cacheName !== STATIC_CACHE_NAME
                ) {
                  console.log("deleting", cacheName);
                  return caches.delete(cacheName);
                }
              })
            );
          })
        ])
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
