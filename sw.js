<<<<<<< HEAD
const C='focusflow-v3',F=['./','./index.html','./manifest.webmanifest','./icon-192.png','./icon-512.png'];
=======
const C='focusflow-v2',F=['./','./index.html','./manifest.webmanifest','./icon-192.png','./icon-512.png'];
>>>>>>> c1e117f0f54b4276f67d8e2ddd1f5e8ea5891058
self.addEventListener('install',e=>{e.waitUntil(caches.open(C).then(c=>c.addAll(F)));self.skipWaiting()});
self.addEventListener('activate',e=>e.waitUntil(caches.keys().then(k=>Promise.all(k.filter(x=>x!==C).map(x=>caches.delete(x))))));
self.addEventListener('fetch',e=>e.respondWith(caches.match(e.request).then(r=>r||fetch(e.request))));
