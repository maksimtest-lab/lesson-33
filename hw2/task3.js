console.log(1);

const CACHE_NAME = 'cache_v1';
// Добавляем изначальный кэш
self.addEventListener('install', event => {
  event.waitUntil(
    (async () => {
      const cache = await caches.open(CACHE_NAME);
      const imageUrls = [
        './images/image_1.jpg'
      ];

      console.log('caching', imageUrls);

      await cache.addAll(imageUrls);

      // активирует Service Worker минуя фазу ожидания активации
      self.skipWaiting();
    })()
  );
});

self.addEventListener('activate', (event) => {
    // с помощью self.clients.claim() можно начать перехватывать запросы не ожидая перезагрузки страницы, работает в паре с self.skipWaiting()
    event.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', event => {
  event.respondWith(
    (async () => {
      try {
        // Пытаемся найти ресурс в кэше
        const cachedResponse = await caches.match(event.request);

        // Если ресурс есть в кеше, возвращаем его
        if (cachedResponse) {
          return cachedResponse;
        }

        // Если ресурс нет в кеше, получаем его из сети
        const response = await fetch(event.request);

        // Обновляем кэш с полученным ресурсом
        const cache = await caches.open(CACHE_NAME);
        cache.put(event.request, response.clone());

        return response;
      } catch (error) {
        // Если кэша нету, возвращаем страницу fallback.html или какое-то кастомное сообщение об этом, тут уже на ваше усмотрение
        console.log(error);
        // return await cache.match('fallback.html');
      }
    })()
  );
});