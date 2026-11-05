/* Funciones que comparten la guía (index.html) y las vidrieras (vidriera.html).
   No hace falta tocar nada acá. */

function normalizar(texto) {
  return (texto || "")
    .toString()
    .toLowerCase()
    .replace(/[áàäâ]/g, "a")
    .replace(/[éèëê]/g, "e")
    .replace(/[íìïî]/g, "i")
    .replace(/[óòöô]/g, "o")
    .replace(/[úùüû]/g, "u")
    .replace(/ñ/g, "n")
    .trim();
}

function valorHabilitado(valor) {
  const v = normalizar(valor);
  if (!v) return null;
  if (v === "si" || v === "true" || v === "x" || v.startsWith("habilitad")) return true;
  if (v === "no" || v === "false" || v.startsWith("no ") || v.startsWith("emprend")) return false;
  return null;
}

function esPublicado(valor) {
  const v = normalizar(valor);
  return v === "si" || v === "sí" || v === "true" || v === "x" || v === "publicado";
}

function linkInstagram(valor) {
  const v = (valor || "").toString().trim();
  if (!v) return "";
  if (/^https?:\/\//i.test(v)) return v;
  if (/^(www\.)?instagram\.com\//i.test(v)) return "https://" + v;
  return "https://www.instagram.com/" + v.replace(/^@/, "").replace(/\/+$/, "") + "/";
}

function linkWhatsapp(telefono) {
  let n = (telefono || "").toString().replace(/[^0-9]/g, "");
  if (!n) return "";
  if (!n.startsWith("54")) n = "549" + n.replace(/^0/, "");
  return "https://wa.me/" + n;
}

function linkMaps(nombre) {
  return "https://www.google.com/maps/search/?api=1&query=" + encodeURIComponent(nombre + " General Pinto Buenos Aires");
}

/* Dirección corta de cada vidriera: "ABC Técnica" -> "abc-tecnica" */
function slugNegocio(nombre) {
  return normalizar(nombre).replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "");
}

/* Las columnas de Pintensia Plus empiezan con "Plus" o "Vidriera" (ej. "Plus: fotos").
   La guía las ignora para no confundirlas con las columnas comunes. */
function esColumnaVidriera(titulo) {
  const t = normalizar(titulo);
  return t.startsWith("vidriera") || t.startsWith("plus");
}

/* La columna que completás vos cuando llega el pago: "Plus activo" (o "Vidriera activa") */
function esColumnaActiva(titulo) {
  return ["plus activo", "pintensia plus activo", "vidriera activa"].includes(normalizar(titulo));
}

/* Convierte un link de Google Drive (como los que guarda el formulario al subir fotos)
   en una imagen que se puede mostrar. Acepta varios links separados por coma. */
function imagenesDeDrive(texto) {
  return (texto || "").toString().split(/[,\s]+/).map(link => {
    const m = link.match(/(?:id=|\/d\/)([-\w]{20,})/);
    if (m) return "https://drive.google.com/thumbnail?id=" + m[1] + "&sz=w1600";
    return /^https:\/\//i.test(link) ? link : "";
  }).filter(Boolean);
}
