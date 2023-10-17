self.addEventListener("install", (e) => {
  e.waitUntil(
    caches
      .open("static")
      .then((cache) =>
        cache.addAll(["./", "./images/logo192.png", "./src/style.css"])
      )
  );
});

self.addEventListener("fetch", (e) => {
  console.log("fetch now", e.request.url);

  e.respondWith(caches.match(e.request)).then((response) => {
    return response || fetch(e.request);
  });
});
