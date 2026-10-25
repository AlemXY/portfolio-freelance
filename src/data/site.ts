/**
 * Datos públicos y enlaces del portafolio.
 *
 * Evitar publicar teléfonos, direcciones o correos sin autorización.
 * Verificar periódicamente las demostraciones externas y sus licencias.
 */
export const site = {
  name: "Alex Cabana",
  role: "Desarrollador web freelance",
  location: "Perú",
  github: "https://github.com/AlemXY",
  // Se puede mostrar un correo público adicional cuando el titular decida proporcionarlo.
  publicEmail: "",
  // Número internacional sin '+' ni espacios. Si está vacío, no se presenta WhatsApp.
  publicWhatsapp: "",
};

export const navigation = [
  { href: "#inicio", label: "Inicio" },
  { href: "#servicios", label: "Servicios" },
  { href: "#proyectos", label: "Proyectos" },
  { href: "#sobre-mi", label: "Sobre mí" },
  { href: "#proceso", label: "Proceso" },
] as const;

export const services = [
  {
    icon: "layout",
    number: "01",
    name: "Sitios web para negocios",
    description:
      "Una página clara, atractiva y adaptable para mostrar lo que ofrece tu negocio y facilitar el contacto.",
    detail: "Presencia digital profesional",
  },
  {
    icon: "zap",
    number: "02",
    name: "Landing pages",
    description:
      "Páginas enfocadas en presentar una campaña, un producto o un servicio con una llamada a la acción.",
    detail: "Comunicación orientada a objetivos",
  },
  {
    icon: "shopping",
    number: "03",
    name: "Catálogos digitales",
    description:
      "Una forma de presentar productos, fotografías e información de manera ordenada y fácil de consultar.",
    detail: "Tus productos, mejor presentados",
  },
  {
    icon: "wrench",
    number: "04",
    name: "Mejoras y mantenimiento",
    description:
      "Correcciones visuales, ajustes responsive, actualización de contenido y mejoras en sitios existentes.",
    detail: "Tu web, al día",
  },
] as const;

export type Project = {
  name: string;
  type: string;
  year: string;
  description: string;
  tags: readonly string[];
  image?: string;
  imageAlt?: string;
  visual: "burger" | "cerati" | "screenora";
  demo?: string;
  repository?: string;
  note?: string;
};

export const projects: Project[] = [
  {
    name: "ElderBurger",
    type: "Sitio gastronómico conceptual",
    year: "2026",
    description:
      "Una experiencia web para explorar la carta, descubrir el restaurante y preparar solicitudes de reserva por WhatsApp.",
    tags: ["React", "TypeScript", "Vite", "Netlify"],
    image: "/media/elderburger.webp",
    imageAlt: "Hamburguesa con acompañamientos del proyecto ElderBurger",
    visual: "burger",
    demo: "https://elder-burger.netlify.app/",
    repository: "https://github.com/AlemXY/ElderBurger",
    note: "Proyecto demostrativo: no confirma reservas ni verifica disponibilidad.",
  },
  {
    name: "Cerativerse",
    type: "Sitio creativo / homenaje",
    year: "2026",
    description:
      "Un sitio temático dedicado a la música de Gustavo Cerati, con una propuesta visual y maquetación personalizada.",
    tags: ["HTML", "CSS", "Diseño responsive"],
    image: "/media/cerativerse.webp",
    imageAlt:
      "Captura referencial de Cerativerse facilitada en el portafolio original",
    visual: "cerati",
    demo: "https://cerati-verse.vercel.app/html/index.html",
    note: "Proyecto de homenaje no afiliado al artista.",
  },
  {
    name: "Screenora",
    type: "Proyecto académico full stack",
    year: "2026",
    description:
      "Demostración de una plataforma de contenidos con frontend React, API en Node.js y persistencia en MongoDB.",
    tags: ["React", "TypeScript", "Node.js", "MongoDB"],
    visual: "screenora",
    demo: "https://screenora.netlify.app/",
    repository: "https://github.com/AlemXY/screenora-backend",
    note: "Demo académica; la disponibilidad de su backend debe comprobarse.",
  },
];

export const process = [
  {
    step: "01",
    title: "Conversemos",
    description:
      "Me cuentas sobre tu negocio, tu público y lo que necesitas lograr.",
  },
  {
    step: "02",
    title: "Definimos el alcance",
    description:
      "Acordamos funcionalidades, entregables, tiempos y presupuesto antes de comenzar.",
  },
  {
    step: "03",
    title: "Diseño y desarrollo",
    description:
      "Construyo la solución y comparto avances para recibir tus comentarios.",
  },
  {
    step: "04",
    title: "Publicación y entrega",
    description:
      "Probamos el sitio, coordinamos la publicación y definimos el soporte posterior.",
  },
] as const;
