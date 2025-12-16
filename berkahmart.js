self.addEventListener("install", e => {
  e.waitUntil(
    caches.open("simpeltoko-v1").then(cache => {
      return cache.addAll([
        "/",
        "/?m=1",  // versi mobile
        "https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css",
        "https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap",
        "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEi8k_pPGR8SLcvTEWba2jN-E5k2NCYSNMrHLwMbRxe2rupBDSEUEOgKYb4HdlTUnhbAnEDI6jRa_RTV6F1-n8jTHH7dF8v-zkqZ9BzggXVBkZ2yhggIGmrOblG5uZa3wreds-pGwLwZ5UhLAq5mbBw3zqsCW6aHQszkqiuwydFZ9HOiqvy2kEDJudXwZXVq/s1600/512x512.png"
      ]);
    })
  );
});

self.addEventListener("fetch", e => {
  e.respondWith(
    caches.match(e.request).then(response => {
      return response || fetch(e.request);
    })
  );
});

