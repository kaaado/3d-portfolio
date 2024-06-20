import {
  laravel,
  men,
  women,
  mobile,
  c,
  php,
  python,
  mysql,
  postgres,
  java,
  backend,
  web,
  javascript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  freelance,
  omaraa,
  air,
  stock,
  joke,
  dashboard,
  school,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Full Stack Web Developer",
    icon: web,
  },
  {
    title: "Frontend Web Developer",
    icon: mobile,
  },
  {
    title: "Backend Web Developer",
    icon: backend,
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
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
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
    name: "php",
    icon: php,
  },
  {
    name: "latavel",
    icon: laravel,
  },
  {
    name: "C",
    icon: c,
  },{
    name: "java",
    icon: java,
  },{
    name: "python",
    icon: python,
  },
  {
    name: "mysql",
    icon: mysql,
  },
  {
    name: "postgres Sql",
    icon: postgres,
  },
];

const experiences = [
  {
    title: "Full Stack Web Developer",
    company_name: "freelance",
    icon: freelance,
    iconBg: "#383E56",
    date: "April 2024 - Present",
    points: [
      "Developing and maintaining web applications using web technologies.",
      "Develop and manage the whole project alone.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
 
];

const testimonials = [
  {
    testimonial:
      "Good .",
    name: "Ibtissam Ykhlef",
    company: "Client",
        designation: "",
    image: women,
  },
   {
    testimonial:
      "Thanks 👍.",
    name: "Bessma Benslimane",
    designation: "",
    company: "Client",
    image: women,
  },
];

const projects = [
  {
    name: "El Omaraa Clinic ",
    description:
      "El Omaraa Clinic website serves as the online presence for El Omaraa Clinic, a hospital located in Mascara, Algeria. The website is built using HTML, CSS, JavaScript, PHP, and MySQL. It includes both the original public-facing website and a dashboard website for managing the clinic and its employees.",
    tags: [
      {
        name: "html",
        color: "green-text-gradient",
      },{
        name: "css",
        color: "pink-text-gradient",
      },{
        name: "javascript",
        color: "blue-text-gradient",
      },
      {
        name: "php",
        color: "green-text-gradient",
      },
      {
        name: "mysql",
        color: "pink-text-gradient",
      },
    ],
    image: omaraa,
    source_code_link: "https://github.com/kaaado/El-Omaraa",
  },
  {
    name: "Air Travel Management",
    description:
      "The Air Travel is a web application designed to provide insights into air travel data. This application allows users to visualize various statistics and trends related to air travel, including flight schedules, destinations, and other key metrics.",
    tags: [
       {
        name: "html",
        color: "green-text-gradient",
      },{
        name: "css",
        color: "pink-text-gradient",
      },{
        name: "javascript",
        color: "blue-text-gradient",
      },
      {
        name: "php",
        color: "green-text-gradient",
      },
      {
        name: "mysql",
        color: "pink-text-gradient",
      },
    ],
    image: air,
    source_code_link: "https://github.com/kaaado/Air-Travel",
  },
  {
    name: "Stock Management Website",
    description:
      "This project is a stock management website developed using React.js for the frontend and Laravel for the backend. It allows users to manage and store data in a stock database.",
    tags: [
       {
        name: "html",
        color: "green-text-gradient",
      },{
        name: "css",
        color: "pink-text-gradient",
      },{
        name: "javascript",
        color: "blue-text-gradient",
      },
      {
        name: "reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "php",
        color: "green-text-gradient",
      },,{
        name: "laravel",
        color: "red-text-gradient",
      },
      {
        name: "mysql",
        color: "pink-text-gradient",
      },
    ],
    image: stock,
    source_code_link: "https://github.com/kaaado/Gestion-de-Stock",
  },{
    name: "School Management Website",
    description:
      " The website aims to provide a platform for students, teachers, and administrators to access and manage school-related information.",
    tags: [
     {
        name: "html",
        color: "green-text-gradient",
      },{
        name: "css",
        color: "pink-text-gradient",
      },{
        name: "javascript",
        color: "blue-text-gradient",
      },
      {
        name: "php",
        color: "green-text-gradient",
      },
      {
        name: "mysql",
        color: "pink-text-gradient",
      },
    ],
    image: school,
    source_code_link: "https://github.com/kaaado/School",
  },
  {
    name: "Dashboard Website",
    description:
      "The dashboard website project built using React.js for the frontend, HTML, CSS, MySQL, and Laravel PHP for the backend. It allows users to manage and store users and products with authentication for login and register functionalities.",
    tags: [
      {
        name: "html",
        color: "green-text-gradient",
      },{
        name: "css",
        color: "pink-text-gradient",
      },{
        name: "javascript",
        color: "blue-text-gradient",
      },
      {
        name: "reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "php",
        color: "green-text-gradient",
      },,{
        name: "laravel",
        color: "red-text-gradient",
      },
      {
        name: "mysql",
        color: "pink-text-gradient",
      },
    ],
    image: dashboard,
    source_code_link: "https://github.com/kaaado/Dashboard",
  },
  {
    name: "Jokes app",
    description:
      "Jokes app aimes to provide a random funny jokes in many categoires.",
    tags: [
      {
        name: "html",
        color: "green-text-gradient",
      },{
        name: "css",
        color: "pink-text-gradient",
      },{
        name: "javascript",
        color: "blue-text-gradient",
      },
      {
        name: "reactjs",
        color: "blue-text-gradient",
      },{
        name: "api",
        color: "gold-text-gradient",
      },
    ],
    image: joke,
    source_code_link: "https://github.com/kaaado/Jokes1",
  },
];

export { services, technologies, experiences, testimonials, projects };
