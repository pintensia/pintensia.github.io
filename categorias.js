/* ================================================================
   CATEGORÍAS DE PINTENSIA
   ================================================================
   Este archivo agrupa las categorías que vienen de la planilla
   ("Categoría u oficio") en RUBROS grandes, para que la página
   muestre pocos botones fáciles de usar.

   CÓMO EDITARLO (sin saber programar):
   - Cada rubro tiene: un nombre, un emoji y una lista de
     categorías entre comillas, separadas por comas.
   - Para sumar una categoría nueva a un rubro, agregala a su lista
     tal como está escrita en la planilla, entre comillas y con coma.
     No importan mayúsculas ni tildes.
   - Si una categoría de la planilla no está en ninguna lista,
     el negocio aparece igual, dentro del rubro "Otros".
   - Un negocio puede tener más de una categoría: en la planilla
     separalas con punto y coma. Ej: "Accesorios de moda; Regalería".
   ================================================================ */

const RUBROS = [
  {
    nombre: "Alimentos y almacén",
    emoji: "🛒",
    categorias: [
      "Carnicería",
      "Dietética / Suplementos",
      "Kiosco",
      "Lácteos / Quesería",
      "Panadería",
      "Pastelería",
      "Pollería",
      "Supermercado",
      "Verdulería",
      "Vinoteca"
    ]
  },
  {
    nombre: "Gastronomía y salidas",
    emoji: "🍽️",
    categorias: [
      "Heladería / Yogurtería",
      "Restaurante / Bar",
      "Rotisería / Comida para llevar"
    ]
  },
  {
    nombre: "Ropa y moda",
    emoji: "👕",
    categorias: [
      "Accesorios de moda",
      "Tienda de ropa",
      "Zapatería"
    ]
  },
  {
    nombre: "Comercios, hogar y regalos",
    emoji: "🎁",
    categorias: [
      "Cotillón",
      "Electrodomésticos / Hogar",
      "Hogar / Deco",
      "Imprenta / Estampados",
      "Mercería",
      "Muebles y deco",
      "Pañalera",
      "Pesca y camping",
      "Regalería",
      "Telas / Mercería"
    ]
  },
  {
    nombre: "Tecnología y celulares",
    emoji: "📱",
    categorias: [
      "Celulares y accesorios",
      "Informática"
    ]
  },
  {
    nombre: "Construcción y ferretería",
    emoji: "🔨",
    categorias: [
      "Corralón / Materiales de construcción / Ferretería",
      "Electricidad",
      "Maderera",
      "Sanitarios"
    ]
  },
  {
    nombre: "Autos y transporte",
    emoji: "🚗",
    categorias: [
      "Estación de servicio",
      "Gomería",
      "Lavadero de autos",
      "Repuestos / Autopartes",
      "Repuestos / Lubricentro",
      "Taller mecánico",
      "Transporte",
      "Fletes"
    ]
  },
  {
    nombre: "Salud",
    emoji: "🩺",
    categorias: [
      "Farmacia",
      "Laboratorio",
      "Odontología",
      "Prepagas",
      "Hospital",
      "Medicina clínica",
      "Obstetricia",
      "Óptica"
    ]
  },
  {
    nombre: "Belleza y cuidado personal",
    emoji: "💇",
    categorias: [
      "Barbería",
      "Peluquería",
      "Uñas / Manicura"
    ]
  },
  {
    nombre: "Deporte y clubes",
    emoji: "⚽",
    categorias: [
      "Clubes deportivos",
      "Danza",
      "Escuela de equitación",
      "Gimnasio"
    ]
  },
  {
    nombre: "Eventos y turismo",
    emoji: "🎉",
    categorias: [
      "Fotografía",
      "Hotel / Alojamiento",
      "Salón de eventos",
      "Sonido e iluminación para eventos",
      "Turismo / Museo"
    ]
  },
  {
    nombre: "Servicios profesionales",
    emoji: "💼",
    categorias: [
      "Cochería / Funeraria",
      "Escribanía",
      "Estudio jurídico",
      "Seguros"
    ]
  },
  {
    nombre: "Campo y veterinaria",
    emoji: "🐄",
    categorias: [
      "Agro",
      "Veterinaria / Agroveterinaria"
    ]
  },
  {
    nombre: "Instituciones y servicios públicos",
    emoji: "🏛️",
    categorias: [
      "Educación / Estética",
      "Organismo público",
      "Cultura",
      "Policia",
      "Servicios públicos"
    ]
  }
];

/* Rubro para las categorías que no estén en ninguna lista de arriba */
const RUBRO_OTROS = { nombre: "Otros", emoji: "📌" };
