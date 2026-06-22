/* 夜須Challengers ラッパー Service Worker
 *
 * 役割は「PWAとしてインストール可能にする」ことと「ラッパーの殻(index/manifest/icon)を
 * オフラインでも開けるようにする」だけ。アプリ本体は別オリジン(script.google.com)の
 * iframe で動くオンライン専用なので、本体まではキャッシュしない（できない）。
 */
var CACHE = 'challengers-shell-v1';
var ASSETS = [
  './',
  './index.html',
  './manifest.json',
  './icon-192.png',
  './icon-512.png',
  './apple-touch-icon.png',
  './favicon-32.png',
  './favicon.ico'
];

self.addEventListener('install', function (e) {
  e.waitUntil(
    caches.open(CACHE).then(function (c) { return c.addAll(ASSETS); })
      .then(function () { return self.skipWaiting(); })
  );
});

self.addEventListener('activate', function (e) {
  e.waitUntil(
    caches.keys().then(function (keys) {
      return Promise.all(keys.filter(function (k) { return k !== CACHE; })
        .map(function (k) { return caches.delete(k); }));
    }).then(function () { return self.clients.claim(); })
  );
});

self.addEventListener('fetch', function (e) {
  var req = e.request;
  var url;
  try { url = new URL(req.url); } catch (err) { return; }

  /* GAS本体など別オリジン、GET以外はSWが一切介入しない（素通り） */
  if (req.method !== 'GET' || url.origin !== self.location.origin) return;

  /* 殻はキャッシュ優先、無ければネット、両方ダメならindexで代替 */
  e.respondWith(
    caches.match(req).then(function (cached) {
      return cached || fetch(req).catch(function () { return caches.match('./index.html'); });
    })
  );
});
