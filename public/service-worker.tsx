// interface ExtendableEvent extends Event {
//     waitUntil(fn: Promise<any>): void;
// }

// const CACHE_NAME = "video-cache-v1";
// const CACHE_URLS = ["/video.mp4"];

// self.addEventListener('install', (event:ExtendableEvent) => {
//     event.waitUntil(
//         caches.open(CACHE_NAME).then((cache) => {
//             return cache.addAll(CACHE_URLS);
//         })
//     );
// });


// const serviceWorkerSelf = self as ServiceWorkerGlobalScope;