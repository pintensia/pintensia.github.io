/* ============================================================
   CORTINA "MUY PRONTO"
   Se prende y apaga desde config.js (CORTINA_ACTIVA).
   Quien entra con ?prueba=CLAVE_PRUEBA ve el sitio completo
   desde ese celular o compu. Con ?prueba=salir vuelve a ver la cortina.
   Con ?prueba=CLAVE&video se oculta el cartel de "Modo prueba" hasta cerrar la pestaña.
   ============================================================ */
(function () {
  if (typeof CORTINA_ACTIVA === "undefined" || !CORTINA_ACTIVA) return;

  var GUARDADO = "pintensia-prueba";
  function leer() { try { return localStorage.getItem(GUARDADO); } catch (e) { return null; } }
  function guardar(v) { try { if (v) localStorage.setItem(GUARDADO, v); else localStorage.removeItem(GUARDADO); } catch (e) {} }

  var param = new URLSearchParams(location.search).get("prueba");
  if (param === "salir") guardar(null);
  else if (param) guardar(param);

  // Que Google no la muestre mientras está la cortina
  var robots = document.createElement("meta");
  robots.name = "robots";
  robots.content = "noindex";
  document.head.appendChild(robots);

  var esPrueba = leer() === CLAVE_PRUEBA;

  if (esPrueba) {
    // Con ?video no se muestra el cartel de "Modo prueba" (para grabar la pantalla)
    var params = new URLSearchParams(location.search);
    try {
      if (params.has("video")) sessionStorage.setItem("pintensia-video", "1");
      if (sessionStorage.getItem("pintensia-video")) return;
    } catch (e) { if (params.has("video")) return; }
    document.addEventListener("DOMContentLoaded", function () {
      var aviso = document.createElement("a");
      aviso.href = "?prueba=salir";
      aviso.textContent = "Modo prueba · solo vos ves esto";
      aviso.title = "Tocá para ver lo que ve la gente";
      aviso.style.cssText = "position:fixed;left:50%;bottom:12px;transform:translateX(-50%);z-index:200;background:#18224a;color:#fff;" +
        "font:700 12px Manrope,-apple-system,'Segoe UI',Roboto,sans-serif;padding:7px 14px;border-radius:999px;text-decoration:none;opacity:.85;white-space:nowrap";
      document.body.appendChild(aviso);
    });
    return;
  }

  var css = document.createElement("style");
  css.textContent =
    "body>*:not(#cortina){display:none!important}" +
    "html,body{background:#f6f3eb!important}" +
    "#cortina{min-height:100vh;min-height:100dvh;display:flex;flex-direction:column;align-items:center;justify-content:center;text-align:center;" +
    "padding:40px 20px;box-sizing:border-box;font-family:Manrope,-apple-system,'Segoe UI',Roboto,sans-serif;color:#18224a}" +
    "#cortina img{width:min(320px,72vw);height:auto;display:block}" +
    "#cortina h1{font-family:Outfit,Manrope,sans-serif;font-weight:700;font-size:clamp(1.7rem,6.5vw,2.6rem);line-height:1.15;margin:36px 0 0;letter-spacing:-.01em}" +
    "#cortina h1 em{font-style:normal;color:#1d49a7}" +
    "#cortina .pill{margin-top:24px;display:inline-block;background:#ffefc2;color:#7a4f00;border:2px solid #f1d78a;font-weight:800;font-size:.95rem;" +
    "letter-spacing:.06em;text-transform:uppercase;padding:9px 22px;border-radius:999px}" +
    "#cortina .lugar{margin-top:40px;font-size:.85rem;font-weight:700;color:#5a6284}";
  document.head.appendChild(css);

  document.title = "Pintensia · Muy pronto";

  document.addEventListener("DOMContentLoaded", function () {
    var c = document.createElement("main");
    c.id = "cortina";
    c.innerHTML = '<img src="logo.png" alt="Pintensia" width="439" height="98">' +
      "<h1>Algo se está armando<br>en <em>Pinto</em> 👀</h1>" +
      '<span class="pill">Muy pronto</span>' +
      '<p class="lugar">General Pinto</p>';
    document.body.insertBefore(c, document.body.firstChild);
  });
})();
