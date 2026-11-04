/* Service worker de Pintensia: permite instalar la app y abrirla sin internet.
   Siempre intenta traer lo último de internet; si no hay conexión,
   muestra la última versión guardada (incluidos los datos de la planilla). */
const CACHE = "pintensia-v1";
const BASICOS = ["./", "index.html", "categorias.js", "logo.png", "icono-192.png", "manifest.webmanifest"];

self.addEventListener("install", e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(BASICOS)).then(() => self.skipWaiting()));
});

self.addEventListener("activate", e => {
  e.waitUntil(
    caches.keys()
      .then(claves => Promise.all(claves.filter(k => k !== CACHE).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", e => {
  const req = e.request;
  if (req.method !== "GET") return;
  const url = new URL(req.url);
  const propio = url.origin === self.location.origin;
  const planilla = url.hostname === "docs.google.com" && url.pathname.includes("/gviz/");
  const fuentes = url.hostname.endsWith("fonts.googleapis.com") || url.hostname.endsWith("fonts.gstatic.com");
  if (!propio && !planilla && !fuentes) return;

  e.respondWith(
    fetch(req)
      .then(resp => {
        const copia = resp.clone();
        caches.open(CACHE).then(c => c.put(req, copia));
        return resp;
      })
      .catch(() => caches.match(req).then(r => r || (propio && req.mode === "navigate" ? caches.match("./") : Response.error())))
  );
});
