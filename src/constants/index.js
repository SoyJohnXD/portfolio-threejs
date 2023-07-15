import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  vue,
  tailwind,
  php,
  laravel,
  git,
  figma,
  docker,
  tvco,
  world_office,
  ccxc,
  intevo,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "Acerca",
  },
  {
    id: "work",
    title: "Trabajos",
  },
  {
    id: "contact",
    title: "Contactame",
  },
];

const services = [
  {
    title: "Desarrollador Web",
    icon: web,
  },
  {
    title: "Desarrollador Jr. Three ",
    icon: mobile,
  },
  {
    title: "Desarrollador  Jr. BackEnd",
    icon: backend,
  },
  {
    title: "Streamer en Twitch",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Vue JS",
    icon: vue,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "PHP",
    icon: php,
  },
  {
    name: "Laravel",
    icon: laravel,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Técnico en Automatización de Pruebas de calidad",
    company_name: "World Office S.A.S",
    icon: world_office,
    iconBg: "#383E56",
    date: "Diciembre 2019 - Junio 2020",
    points: [
      "Implementación de un esquema de automatización de pruebas.",
      "Pruebas QA y aseguramiento de la calidad.",
      "Herramientas como Selenium web Driver - Protractor",
      "Automatizacion de pruebas para Agular",
    ],
  },
  {
    title: "Desarrollador y Diseñador Web",
    company_name: "Soportes TV CO",
    icon: tvco,
    iconBg: "#383E56",
    date: "Octubre 2020 - Febrero 2022",
    points: [
      "Gestión de páginas web comerciales y procesos internos.",
      "Implementación de lenguajes: JavaScript, PHP, HTML5, CSS3, y uso de Bootstrap",
      "Creación de contenido optimizado para el posicionamiento en buscadores (SEO) de Google.",
      "Estructuración de bases de datos relacionales utilizando MySQL.",
      "Desarrollo y diseño de contenido comercial con herramientas de Adobe como Photoshop, Illustrator y After Effects.",
    ],
  },
  {
    title: "Desarrollador FullStack",
    company_name: "intevo S.A.S",
    icon: intevo,
    iconBg: "#fff",
    date: "Febrero 2022 - Octubre 2022",
    points: [
      "Gestión de páginas web, ecomerce y landing page.",
      "Implementación de lenguajes: TypeScript, Laravel, VueJs, Nuxtjs, Yi2, React",
      "Corrección de bugs y Mantenimiento.",
      "Participar en revisiones de código y brindar comentarios constructivos a otros desarrolladores.",
    ],
  },
  {
    title: "Desarrolador Frontend Junior",
    company_name: "CCXC",
    icon: ccxc,
    iconBg: "#00a99d",
    date: "Octubre 2022 - Presente",
    points: [
      "Desarrollo y mantenimiento de aplicaciones web utilizando React.js y otras tecnologías relacionadas.",
      "Colaborar con equipos multifuncionales que incluyen diseñadores, gerentes de productos y otros desarrolladores para crear productos de alta calidad.",
      "Implementar un diseño receptivo y garantizar la compatibilidad entre navegadores.",
      "Fomentando la Excelencia en el Desarrollo: Colaboración en Revisiones de Código y Retroalimentación Constructiva",
    ],
  },
];

const testimonials = [
  {
    testimonial: "Responsable, amable y muy bueno para trabajar en equipo.",
    name: "Marta Cordoba",
    designation: "Analista QA",
    company: "World Office SAS",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "Optimiza muy bien las tareas y es muy comprometido con los tiempos de entrega.",
    name: "Sediel Ruiz",
    designation: "Desarrollador FullStack Senior",
    company: "Wepay4u",
    image:
      "https://media.licdn.com/dms/image/C4D03AQFpO8wuwavoSQ/profile-displayphoto-shrink_800_800/0/1668099785078?e=1694649600&v=beta&t=6jJX_f0cV4Ekcv9u1gUww0x_bCF35WyqSaY2Lw9vs5M",
  },
  {
    testimonial:
      "Buen lider, organizado, su logica para programar es increible",
    name: "Juan Chacon",
    designation: "Desarrollador FullStack",
    company: "Intevo SAS",
    image:
      "https://media.licdn.com/dms/image/D4E03AQExNEm_hKL7Ow/profile-displayphoto-shrink_800_800/0/1685907466646?e=1694649600&v=beta&t=fvTZYY4q8gUVwkfCfDaKp3_ChyQS39F3cZkMptqnJ1U",
  },
];

const projects = [
  {
    name: "Renta de autos",
    description:
      "Plataforma basada en la web que permite a los usuarios buscar, reservar y administrar alquileres de autos de varios proveedores, brindando una solución conveniente y eficiente para las necesidades de transporte.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
