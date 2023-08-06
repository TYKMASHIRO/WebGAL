self.addEventListener('install', (ev) => {
  // console.log('[service worker] installing');
  ev.waitUntil(self.skipWaiting());
});

// fetch事件是每次页面请求资源时触发的
self.addEventListener('fetch', function (event) {
  const url = event.request.url;
  const isReturnCache = !!(url.match('/assets/') && !url.match('game'));
  if (isReturnCache) {
    console.log('%cCACHED: ' + url, 'color: #005CAF; padding: 2px;');
  }
  if (!isReturnCache) {
    // 什么也不做
  } else {
    let isError = false;
    const resp = // 检查在缓存中是否有匹配的资源
      caches.match(event.request).then(function (response) {
        // 如果缓存中有匹配的资源，则返回缓存资源
        if (response) {
          return response;
        }
        // 如果没有匹配的资源，则尝试从网络请求
        // 同时将获取的资源存入缓存
        return fetch(event.request)
          .then(function (networkResponse) {
            const clonedResponse = networkResponse.clone();
            // eslint-disable-next-line max-nested-callbacks
            caches.open('my-cache').then(function (cache) {
              cache.put(event.request, clonedResponse);
            });
            return networkResponse;
          })
          .catch(function (error) {
            console.error('Fetching failed:', error);
            isError = true;
            throw error;
          });
      });
    if (!isError) event.respondWith(resp);
  }
});
