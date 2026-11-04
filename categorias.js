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
     Las respuestas del formulario (casillas por rubro) se juntan solas.
   ================================================================ */

const RUBROS = [
  {
    nombre: "Alimentos y almacén",
    emoji: "🛒",
    categorias: [
      "Almacén",
      "Carnicería",
      "Dietética / Suplementos",
      "Fiambrería",
      "Kiosco",
      "Lácteos / Quesería",
      "Panadería",
      "Pastelería",
      "Pollería",
      "Productos regionales",
      "Supermercado",
      "Verdulería",
      "Vinoteca"
    ]
  },
  {
    nombre: "Autos y transporte",
    emoji: "🚗",
    categorias: [
      "Chapa y pintura",
      "Estación de servicio",
      "Fletes",
      "Gomería",
      "Lavadero de autos",
      "Remis / Taxi",
      "Repuestos / Autopartes",
      "Repuestos / Lubricentro",
      "Taller de motos",
      "Taller mecánico",
      "Transporte"
    ]
  },
  {
    nombre: "Belleza y cuidado personal",
    emoji: "💇",
    categorias: [
      "Barbería",
      "Cosmetología / Estética facial",
      "Depilación",
      "Maquillaje",
      "Masajes",
      "Peluquería",
      "Pestañas y cejas",
      "Tatuajes / Piercing",
      "Uñas / Manicura"
    ]
  },
  {
    nombre: "Campo y mascotas",
    emoji: "🐄",
    categorias: [
      "Agro",
      "Alimento balanceado / Pet shop",
      "Peluquería canina",
      "Veterinaria / Agroveterinaria"
    ]
  },
  {
    nombre: "Comercios, hogar y regalos",
    emoji: "🎁",
    categorias: [
      "Artículos de limpieza",
      "Bazar",
      "Cotillón",
      "Electrodomésticos / Hogar",
      "Florería / Vivero",
      "Hogar / Deco",
      "Imprenta / Estampados",
      "Juguetería",
      "Librería / Fotocopias",
      "Mercería",
      "Muebles y deco",
      "Pañalera",
      "Perfumería",
      "Pesca y camping",
      "Regalería",
      "Relojería / Joyería",
      "Telas / Mercería"
    ]
  },
  {
    nombre: "Construcción y ferretería",
    emoji: "🔨",
    categorias: [
      "Corralón / Materiales de construcción / Ferretería",
      "Electricidad",
      "Maderera",
      "Pinturería",
      "Sanitarios",
      "Vidriería / Aberturas"
    ]
  },
  {
    nombre: "Deporte y clubes",
    emoji: "⚽",
    categorias: [
      "Clubes deportivos",
      "Danza",
      "Escuela de equitación",
      "Gimnasio",
      "Pilates / Yoga"
    ]
  },
  {
    nombre: "Educación y clases",
    emoji: "📚",
    categorias: [
      "Apoyo escolar / Clases particulares",
      "Cursos y talleres",
      "Idiomas",
      "Jardín maternal",
      "Música"
    ]
  },
  {
    nombre: "Eventos y turismo",
    emoji: "🎉",
    categorias: [
      "Alquiler de vajilla / mobiliario",
      "Animación infantil",
      "Catering",
      "DJ",
      "Fotografía",
      "Hotel / Alojamiento",
      "Salón de eventos",
      "Sonido e iluminación para eventos",
      "Turismo / Museo"
    ]
  },
  {
    nombre: "Gastronomía y salidas",
    emoji: "🍽️",
    categorias: [
      "Café / Bar",
      "Comida casera / Viandas",
      "Heladería / Yogurtería",
      "Pizzería",
      "Restaurante / Bar",
      "Rotisería / Comida para llevar"
    ]
  },
  {
    nombre: "Instituciones y servicios públicos",
    emoji: "🏛️",
    categorias: [
      "Cultura",
      "Educación / Estética",
      "Organismo público",
      "Policía",
      "Servicios públicos"
    ]
  },
  {
    nombre: "Oficios y servicios para el hogar",
    emoji: "🛠️",
    categorias: [
      "Albañil",
      "Carpintero",
      "Cerrajero",
      "Electricista",
      "Fumigación",
      "Gasista",
      "Herrero",
      "Jardinería / Parquero",
      "Limpieza",
      "Modista / Arreglos de ropa",
      "Pintor",
      "Plomero",
      "Reparación de electrodomésticos",
      "Tapicero",
      "Técnico en aire acondicionado / Refrigeración",
      "Zapatero / Arreglo de calzado"
    ]
  },
  {
    nombre: "Ropa y moda",
    emoji: "👕",
    categorias: [
      "Accesorios de moda",
      "Lencería",
      "Ropa de trabajo / Uniformes",
      "Ropa deportiva",
      "Ropa infantil",
      "Tienda de ropa",
      "Zapatería"
    ]
  },
  {
    nombre: "Salud",
    emoji: "🩺",
    categorias: [
      "Acompañante terapéutico",
      "Cardiología",
      "Dermatología",
      "Enfermería",
      "Farmacia",
      "Fonoaudiología",
      "Ginecología",
      "Hospital",
      "Kinesiología",
      "Laboratorio",
      "Medicina clínica",
      "Nutricionista",
      "Obstetricia",
      "Odontología",
      "Oftalmología",
      "Óptica",
      "Pediatría",
      "Podología",
      "Prepagas",
      "Psicología",
      "Psicopedagogía",
      "Traumatología"
    ]
  },
  {
    nombre: "Servicios profesionales",
    emoji: "💼",
    categorias: [
      "Arquitectura",
      "Cochería / Funeraria",
      "Contador",
      "Diseño gráfico / Marketing",
      "Escribanía",
      "Estudio jurídico",
      "Gestoría",
      "Inmobiliaria",
      "Seguros"
    ]
  },
  {
    nombre: "Tecnología y celulares",
    emoji: "📱",
    categorias: [
      "Celulares y accesorios",
      "Informática",
      "Internet / Cable",
      "Reparación de celulares",
      "Reparación de computadoras"
    ]
  }
];

/* Rubro para las categorías que no estén en ninguna lista de arriba */
const RUBRO_OTROS = { nombre: "Otros", emoji: "📌" };
