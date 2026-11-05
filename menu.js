/* ============================================================
   MENÚ Y PIE DE PÁGINA DE PINTENSIA
   Para agregar, sacar o renombrar una opción, editá la lista
   SECCIONES_MENU de acá abajo. Se actualiza en todas las páginas.
   ============================================================ */
(function () {
  var mail = (typeof MAIL_CONTACTO !== "undefined") ? MAIL_CONTACTO : "pintensia@gmail.com";
  var formulario = (typeof LINK_FORMULARIO !== "undefined") ? LINK_FORMULARIO : "#";

  function linkMail(asunto, cuerpo) {
    return "mailto:" + mail + "?subject=" + encodeURIComponent(asunto) + (cuerpo ? "&body=" + encodeURIComponent(cuerpo) : "");
  }

  var SECCIONES_MENU = [
    { titulo: "Para negocios", links: [
      { texto: "Sumá tu negocio gratis", href: formulario, externo: true },
      { texto: "Planes y Pintensia Plus", href: "planes.html", dorado: true },
      { texto: "Cambiar mis datos o darme de baja",
        href: linkMail("Cambios en mi negocio", "¡Hola! Mi negocio es: \n\nQuiero (cambiar datos / darme de baja): \n\n") }
    ]},
    { titulo: "Para vecinos", links: [
      { texto: "Avisar un error",
        href: linkMail("Aviso de error en Pintensia", "¡Hola! Quiero avisar que:\n\nNegocio: \nQué pasa (cerró, cambió el teléfono, otra cosa): \n\nGracias!") },
      { texto: "Sugerir una mejora",
        href: linkMail("Sugerencia para Pintensia", "¡Hola! Se me ocurre que Pintensia podría:\n\n") }
    ]},
    { titulo: "Pintensia", links: [
      { texto: "Quiénes somos", href: "quienes-somos.html" },
      { texto: "Ir a la guía", href: "./" }
    ]}
  ];

  var css = "" +
    ".menu-boton{position:absolute;top:10px;right:10px;z-index:40;display:flex;align-items:center;gap:5px;padding:7px 12px;border-radius:999px;" +
    "border:1px solid #e7e1d2;background:#fff;color:#18224a;font:700 0.82rem Manrope,-apple-system,'Segoe UI',Roboto,sans-serif;cursor:pointer;box-shadow:0 2px 8px rgba(24,34,74,.08)}" +
    ".menu-boton svg{width:18px;height:18px}" +
    ".menu-fondo{position:fixed;inset:0;background:rgba(24,34,74,.35);z-index:90;opacity:0;pointer-events:none;transition:opacity .2s}" +
    ".menu-panel{position:fixed;top:0;right:0;bottom:0;width:min(340px,88vw);background:#fff;z-index:91;transform:translateX(100%);visibility:hidden;transition:transform .25s ease,visibility .25s;" +
    "overflow-y:auto;padding:18px 24px 28px;box-shadow:-8px 0 30px rgba(24,34,74,.15);font-family:Manrope,-apple-system,'Segoe UI',Roboto,sans-serif;color:#18224a}" +
    "body.menu-abierto .menu-fondo{opacity:1;pointer-events:auto}body.menu-abierto .menu-panel{transform:none;visibility:visible}body.menu-abierto{overflow:hidden}" +
    ".menu-cabeza{display:flex;align-items:center;justify-content:space-between;margin-bottom:8px}.menu-cabeza img{height:26px;width:auto}" +
    ".menu-cerrar{border:0;background:none;width:38px;height:38px;font-size:1.6rem;line-height:1;cursor:pointer;color:#18224a}" +
    ".menu-panel h3,.pie-sitio h3{margin:26px 0 4px;font-size:0.72rem;letter-spacing:.08em;text-transform:uppercase;color:#5a6284;font-weight:700}" +
    ".menu-panel ul,.pie-sitio ul{list-style:none;margin:0;padding:0}" +
    ".menu-cabeza a{display:block}" +
    ".menu-panel ul a{display:block;padding:11px 0;border-bottom:1px solid #e7e1d2;text-decoration:none;color:#18224a;font-weight:600;font-size:1.05rem}" +
    ".menu-panel ul li:last-child a{border-bottom:0}" +
    ".menu-panel ul a:hover{color:#1d49a7}" +
    ".menu-panel ul a.dorado{color:#8a5d00}" +
    ".menu-panel .menu-mail{margin-top:30px;font-size:0.82rem;color:#5a6284}.menu-panel .menu-mail a{color:#1d49a7;font-weight:700;text-decoration:none}" +
    ".pie-sitio{max-width:1000px;margin:24px auto 0;padding:22px 16px 30px;border-top:1px solid #e7e1d2;font-family:Manrope,-apple-system,'Segoe UI',Roboto,sans-serif;color:#18224a}" +
    ".pie-sitio .pie-columnas{display:grid;gap:4px 24px}" +
    ".pie-sitio h3{margin-top:14px}" +
    ".pie-sitio a{color:#1d49a7;text-decoration:none;font-weight:600;font-size:0.92rem;display:inline-block;padding:4px 0}" +
    ".pie-sitio .pie-final{margin-top:22px;text-align:center;font-size:0.8rem;color:#5a6284}" +
    "@media(min-width:700px){.pie-sitio .pie-columnas{grid-template-columns:repeat(3,1fr)}}";
  var estilo = document.createElement("style");
  estilo.textContent = css;
  document.head.appendChild(estilo);

  function crearLink(l, enMenu) {
    var a = document.createElement("a");
    a.href = l.href;
    if (l.externo) { a.target = "_blank"; a.rel = "noopener"; }
    if (l.dorado && enMenu) a.className = "dorado";
    a.textContent = l.texto;
    return a;
  }

  function armarListas(contenedor, conDetalle) {
    SECCIONES_MENU.forEach(function (sec) {
      var bloque = document.createElement("div");
      var h = document.createElement("h3");
      h.textContent = sec.titulo;
      var ul = document.createElement("ul");
      sec.links.forEach(function (l) {
        var li = document.createElement("li");
        li.appendChild(crearLink(l, conDetalle));
        ul.appendChild(li);
      });
      bloque.appendChild(h);
      bloque.appendChild(ul);
      contenedor.appendChild(bloque);
    });
  }

  /* Botón de menú */
  var boton = document.createElement("button");
  boton.type = "button";
  boton.className = "menu-boton";
  boton.setAttribute("aria-label", "Abrir menú");
  boton.setAttribute("aria-expanded", "false");
  boton.innerHTML = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"><line x1="4" y1="7" x2="20" y2="7"/><line x1="4" y1="12" x2="20" y2="12"/><line x1="4" y1="17" x2="20" y2="17"/></svg><span>Menú</span>';

  var fondo = document.createElement("div");
  fondo.className = "menu-fondo";

  var panel = document.createElement("nav");
  panel.className = "menu-panel";
  panel.setAttribute("aria-label", "Menú");
  panel.innerHTML = '<div class="menu-cabeza"><a href="./"><img src="logo.png" alt="Pintensia"></a><button type="button" class="menu-cerrar" aria-label="Cerrar menú">×</button></div>';
  armarListas(panel, true);
  var pieMail = document.createElement("p");
  pieMail.className = "menu-mail";
  pieMail.innerHTML = 'Escribinos a <a href="' + linkMail("Consulta sobre Pintensia") + '">' + mail + "</a>";
  panel.appendChild(pieMail);

  function abrir() { document.body.classList.add("menu-abierto"); boton.setAttribute("aria-expanded", "true"); }
  function cerrar() { document.body.classList.remove("menu-abierto"); boton.setAttribute("aria-expanded", "false"); }
  boton.addEventListener("click", abrir);
  fondo.addEventListener("click", cerrar);
  panel.querySelector(".menu-cerrar").addEventListener("click", cerrar);
  document.addEventListener("keydown", function (e) { if (e.key === "Escape") cerrar(); });

  document.body.insertBefore(boton, document.body.firstChild);
  document.body.appendChild(fondo);
  document.body.appendChild(panel);

  /* Pie de página con los mismos links */
  var pie = document.createElement("footer");
  pie.className = "pie-sitio";
  var columnas = document.createElement("div");
  columnas.className = "pie-columnas";
  armarListas(columnas, false);
  pie.appendChild(columnas);
  var final = document.createElement("p");
  final.className = "pie-final";
  final.innerHTML = 'Pintensia, la guía de negocios y servicios de General Pinto<br><a href="' + linkMail("Consulta sobre Pintensia") + '">' + mail + "</a>";
  pie.appendChild(final);
  var lugar = document.getElementById("pieSitio");
  if (lugar) lugar.replaceWith(pie); else document.body.insertBefore(pie, fondo);
})();
