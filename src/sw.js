// install service worker

self.addEventListener("install", evt => {
  console.log("service worker installed");
});

// active service worker
self.addEventListener("activate", evt => {
  console.log("service worker has been actived");
});

self.addEventListener("fetch", evt => {
  console.log("Fetch", evt);
});
