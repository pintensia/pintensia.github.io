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
   ================================================================ */

const RUBROS = [
  {
    nombre: "Alimentos y almacén",
    emoji: "🛒",
    categorias: [
      "Almacén / Alimentos", "Supermercado / Almacén", "Kiosco", "Kiosco / Almacén",
      "Carnicería", "Pollería", "Panadería", "Panadería / Cafetería", "Pastelería",
      "Verdulería", "Verdulería / Mercado", "Mercado / Alimentos frescos",
      "Lácteos / Quesería", "Quesería / Fiambrería", "Dietética",
      "Dietética / Suplementos", "Vinoteca"
    ]
  },
  {
    nombre: "Gastronomía y salidas",
    emoji: "🍽️",
    categorias: [
      "Gastronomía", "Restaurante", "Restaurante / Bar", "Bar", "Bar / Salón",
      "Cafetería / Bar", "Cervecería / Pizzería", "Hamburguesería / Cervecería",
      "Pizzería", "Rotisería / Comida para llevar", "Heladería", "Heladería / Postres"
    ]
  },
  {
    nombre: "Ropa y moda",
    emoji: "👕",
    categorias: [
      "Tienda de ropa", "Accesorios de moda", "Lencería", "Zapatería",
      "Confecciones / Uniformes"
    ]
  },
  {
    nombre: "Comercios, hogar y regalos",
    emoji: "🎁",
    categorias: [
      "Comercio", "Tienda general", "Galería comercial", "Regalería", "Cotillón",
      "Hogar / Deco", "Muebles y deco", "Electrodomésticos / Hogar", "Mercería",
      "Telas / Mercería", "Pañalera", "Artículos deportivos", "Pesca y camping",
      "Estampados / Personalizados", "Imprenta"
    ]
  },
  {
    nombre: "Tecnología y celulares",
    emoji: "📱",
    categorias: ["Celulares y accesorios", "Telefonía / Celulares", "Informática"]
  },
  {
    nombre: "Construcción y ferretería",
    emoji: "🔨",
    categorias: [
      "Corralón / Materiales de construcción", "Ferretería",
      "Ferretería / Materiales de construcción", "Maderera", "Sanitarios", "Electricidad"
    ]
  },
  {
    nombre: "Autos y transporte",
    emoji: "🚗",
    categorias: [
      "Estación de servicio", "Gomería", "Taller mecánico", "Repuestos / Autopartes",
      "Repuestos / Lubricentro", "Lavadero de autos", "Transporte", "Transporte / Fletes"
    ]
  },
  {
    nombre: "Salud",
    emoji: "🩺",
    categorias: [
      "Farmacia", "Laboratorio", "Odontología", "Óptica", "Prepaga / Salud", "Salud",
      "Salud / Hospital", "Salud / Médico", "Salud / Obstetricia"
    ]
  },
  {
    nombre: "Belleza y cuidado personal",
    emoji: "💇",
    categorias: ["Peluquería", "Barbería", "Uñas / Manicura"]
  },
  {
    nombre: "Deporte y clubes",
    emoji: "⚽",
    categorias: [
      "Gimnasio", "Gimnasio / Boxeo", "Club", "Danza", "Escuela de equitación",
      "Sociedad de fomento / Gimnasio"
    ]
  },
  {
    nombre: "Eventos y turismo",
    emoji: "🎉",
    categorias: [
      "Salón de eventos", "Sonido e iluminación para eventos", "Fotografía",
      "Hotel / Alojamiento", "Turismo / Museo"
    ]
  },
  {
    nombre: "Servicios profesionales",
    emoji: "💼",
    categorias: ["Escribanía", "Estudio jurídico", "Seguros", "Cochería / Funeraria"]
  },
  {
    nombre: "Campo y veterinaria",
    emoji: "🐄",
    categorias: ["Agro", "Veterinaria", "Veterinaria / Agroveterinaria"]
  },
  {
    nombre: "Instituciones y servicios públicos",
    emoji: "🏛️",
    categorias: [
      "Organismo público", "Organismo público / Cultura", "Servicios públicos",
      "Seguridad", "Institución comercial", "Educación / Estética"
    ]
  }
];

/* Rubro para las categorías que no estén en ninguna lista de arriba */
const RUBRO_OTROS = { nombre: "Otros", emoji: "📌" };
