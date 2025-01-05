import {
  web,
  backend,
  creator,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  threejs,
} from "../assets";
import img6 from '../assets/img6.png';
import img7 from '../assets/img7.png';
import fiverr from '../assets/fiverr.webp';
import disney from '../assets/disney.jpeg';
import edgeledger from '../assets/edge-ledger.webp';
import movix from '../assets/movix.webp';
import fileSystem from '../assets/fileSystem.png';
import admin from '../assets/admin.png';
import fashion_nest from '../assets/fashion_nest.png';
import tata from '../assets/company/tata-power.jpg';
import vedaz from '../assets/company/vedaz.png';

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
    title: "Software Developer",
    icon: web,
  },
  {
    title: "Full Stack Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
  {
    title: "Frontend Developer",
    icon: web,
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
    title: "Software Developer Intern",
    company_name: "Vedaz.io",
    icon: vedaz,
    iconBg: "#383E56",
    date: "Dec 2024 - Feb 2024",
    points: [
      "Migrated an existing website to Remix, enhancing performance and scalability, while developing responsive and user - friendly web and mobile applications using Remix and Tailwind CSS.",
      "Authored clean, efficient, and maintainable code by adhering to industry best practices, resulting in improved code quality and reduced technical debt.",
      "Collaborated with frontend and backend developers to seamlessly integrate server-side logic with Remix, improving overall application functionality and user experience.",
    ],
  },
  {
    title: "Software Engineer Intern",
    company_name: "Tata Power DDL",
    icon: tata,
    iconBg: "#383E56",
    date: "Aug 2022 - Oct 2022",
    points: [
      "Engineered a comprehensive web application for Tata Power DDL employees, streamlining internal processes, and reducing average task completion time by 20%.",
      "Constructed robust back-end functionality using ASP.NET and C# with JavaScript and Bootstrap for responsive front-end design.",
      "Incorporated secure user authentication using Firebase, reducing unauthorized access incidents by 30%.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "Harsh is talented, smart, hard-working guy. He is always keen to learn something new, work on new projects and coming up with new ideas. He is a great young man who has got a great attitude, the skill and the will to succeed at the task in hand. He is absolutely humble in what he does and a great team player.",
    name: "Vinay Dabas",
    designation: "Senior Solution Architect",
    company: "Ping Identity",
    image: "https://www.kuppingercole.com/pics/croppedImg_202101291704.jpg",
  },
  {
    testimonial:
      "Harsh is a highly talented and dedicated software engineer with an extensive knowledge of programming languages and a stellar track record of producing enterprise level scalable applications. His commitment to producing clean, maintainable code greatly contributes to the long-term success of the projects he works on.",
    name: "Arvind Sangwan",
    designation: "Software Engineer",
    company: "CMPA",
    image: "https://media.licdn.com/dms/image/D5603AQGcVDwJnjNUoQ/profile-displayphoto-shrink_200_200/0/1673044415007?e=2147483647&v=beta&t=YiULChXOOnoQkyniByZwwnyF_y8xpmu25w-jNZPbfxg",
  },
];

const projects = [
  {
    name: "Disney+ Clone",
    description:
      "Engineered a Full-stack web application, improving load speed by 40% and achieving a 0.01 CLS score for enhanced user experience. Shaped an engaging and responsive user interface using Styled-Components.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "redux",
        color: "green-text-gradient",
      },
      {
        name: "firebase",
        color: "green-text-gradient",
      },
      {
        name: "styled-components",
        color: "pink-text-gradient",
      },

    ],
    image: disney,
    source_code_link: "https://github.com/harsh-sangwan2002/disney-clone",
  },
  {
    name: "Fiverr",
    description:
      "Designed a Full-stack web application, optimizing page load times to achieve an average First Contentful Paint (FCP) of less than 500 milliseconds for enhanced user experience. Achieved an average RESTful API response time of 50 milliseconds using Node.js and Express.",
    tags: [
      {
        name: "react.js",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
      {
        name: "node.js",
        color: "blue-text-gradient",
      },
    ],
    image: fiverr,
    source_code_link: "https://github.com/harsh-sangwan2002/fiverr",
  },
  {
    name: "File System Organizer",
    description:
      "Engineered a command line tool using Node.js and JavaScript to streamline file organization, improving workflow efficiency. Achieved a weekly time savings of 3 hours per user through automated file management, boosting overall productivity by 20%.",
    tags: [
      {
        name: "nodejs",
        color: "blue-text-gradient",
      },
      {
        name: "javascript",
        color: "green-text-gradient",
      },
    ],
    image: fileSystem,
    source_code_link: "https://github.com/harsh-sangwan2002/File-System-Organizer",
  },
];

const featuredProjects = [
  {
    title: "Dsiney+ Clone",
    company_name: "React.js, Node.js, Express, Styled-Components",
    icon: disney,
    iconBg: "#383E56",
    date: "Oct 2024 - Nov 2024",
    points: [
      "Engineered a full-stack web application with Firebase authentication, managing profiles & ensuring seamless streaming and enhanced user experience.",
      "Developed UI interfaces integrated with Firebase for secure user authentication and real-time database functionality, reducing load time by 40% with code-splitting and lazy-loading, and achieving a 0.01 CLS score.",
      "Implemented security measures against vulnerabilities like XSS, CSRF, and SQL injection.",
    ],
  },
  {
    title: "Movix App",
    company_name: "React.js, SCSS, Firebase, RestAPI",
    icon: movix,
    iconBg: "#383E56",
    date: "Sept 2023 - Oct 2023",
    points: [
      "Designed a full-stack Movix App, leveraging TMDB API for seamless movie data integration and enriched user experience.",
      "Crafted a modern and responsive interface with ReactJS, JSX, and SCSS, simplifying movie exploration and selection.",
      "Implemented Firebase for secure user authentication and hosting, providing a seamless and reliable platform.", ,
    ],
  },
  {
    title: "File System Organizer",
    company_name: "Node.js, JavaScript",
    icon: fileSystem,
    iconBg: "#383E56",
    date: "Aug 2023 - Sept 2023",
    points: [
      "Engineered Node.js CLI simplifies organization, offering time-saving solutions for file clutter.",
      "Node.js tool organizes files, intelligently categorizing clutter into structured folders.",
      "JavaScript streamlines file sorting, creating a neatly organized directory for users.",
      "Users save 3 hours weekly through the tool's efficient file management capabilities.",
    ],
  },
  {
    title: "Edge Ledger Website",
    company_name: "HTML, CSS, JavaScript, Lightbox",
    icon: edgeledger,
    iconBg: "#383E56",
    date: "Jan 2022 - Feb 2022",
    points: [
      "Designed a modern, responsive interface, delivering a smooth and visually appealing user experience for seamless navigation.",
      "Built interactive features using HTML5, CSS3, and JavaScript, optimizing functionality and user engagement.",
      "Integrated Lightbox for enhanced media display, creating an intuitive platform for showcasing visual content effectively."
    ],
  },
];

export { services, technologies, experiences, testimonials, projects, featuredProjects };
