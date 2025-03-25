import type {
  TNavLink,
  TService,
  TTechnology,
  TExperience,
  TTestimonial,
  TProject,
} from '../types';

import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  mine,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  laravel,
  php as phpIcon,
  python as pythonIcon,
  flutter as flutterIcon,
  react as reactIcon,
  alumni as alumniIcon,
  microservice as microservicesIcon,
  carrent,
  jobit,
  mint,
  client,
  ecomerce,
  waa,
  threejs,
} from '../assets';

export const navLinks: TNavLink[] = [
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'experience',
    title: 'Experience',
  },
  {
    id: 'tech',
    title: 'Tech',
  },
  {
    id: 'work',
    title: 'Work',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
];

const services: TService[] = [
  {
    title: 'Web & Mobile App Developer',
    icon: web,
  },
  {
    title: 'Backend & Microservice Developer',
    icon: backend,
  },
  {
    title: 'Full-stack Developer',
    icon: creator,
  },
  {
    title: 'Real-time App Developer',
    icon: mobile,
  },
];

const technologies: TTechnology[] = [
  {
    name: 'HTML 5',
    icon: html,
  },
  {
    name: 'CSS 3',
    icon: css,
  },
  {
    name: 'JavaScript',
    icon: javascript,
  },
  {
    name: 'TypeScript',
    icon: typescript,
  },
  {
    name: 'React JS',
    icon: reactjs,
  },
  {
    name: 'Redux Toolkit',
    icon: redux,
  },
  {
    name: 'Tailwind CSS',
    icon: tailwind,
  },
  {
    name: 'Node JS',
    icon: nodejs,
  },
  {
    name: 'MongoDB',
    icon: mongodb,
  },
  {
    name: 'Three JS',
    icon: threejs,
  },
  {
    name: 'git',
    icon: git,
  },
  {
    name: 'figma',
    icon: figma,
  },
  {
    name: 'docker',
    icon: docker,
  },
  {
    name: 'laravel',
    icon: laravel,
  },
];

const experiences: TExperience[] = [
  {
    title: 'Machine Learning Engineer',
    companyName: 'Independent Projects',
    icon: pythonIcon, // Replace with an appropriate icon
    iconBg: '#4B8BBE',
    date: '2021 - Present',
    points: [
      'Developed machine learning models using Python for tasks such as image classification and natural language processing.',
      'Built an advanced chatbot using NLP techniques to provide intelligent user interaction.',
      'Created an image classification tool to categorize images into animals, vehicles, and buildings.',
    ],
  },
  {
    title: 'Backend Developer',
    companyName: 'Freelance',
    icon: phpIcon, // Replace with an appropriate icon
    iconBg: '#8993BE',
    date: '2020 - 2021',
    points: [
      'Designed and developed a hospital management system using PHP and SQL.',
      'Implemented secure login systems and streamlined database operations for user and admin workflows.',
      'Ensured the system supported scalability and robust user management.',
    ],
  },
  {
    title: 'Web Developer',
    companyName: 'Adventist Alumni',
    icon: alumniIcon, // Replace with an appropriate icon
    iconBg: '#03b1fc',
    date: '2023',
    points: [
      'Developed a responsive website for Adventist Alumni using HTML, CSS, JavaScript, and Bootstrap.',
      'Integrated dynamic content and showcased community impact projects.',
      'Utilized free hosting solutions and GitHub for version control and collaboration.',
    ],
  },
  {
    title: 'Full Stack Developer',
    companyName: 'Personal Projects',
    icon: reactIcon, // Replace with an appropriate icon
    iconBg: '#61DAFB',
    date: '2022 - Present',
    points: [
      'Built a React-based full-stack e-commerce platform with a Node.js backend and MongoDB database.',
      'Created a dynamic admin dashboard for managing users, products, and payments.',
      'Focused on delivering scalable, user-friendly web applications.',
    ],
  },
  {
    title: 'Mobile App Developer',
    companyName: 'Freelance',
    icon: flutterIcon, // Replace with an appropriate icon
    iconBg: '#02569B',
    date: '2022 - Present',
    points: [
      'Developed mobile applications using Flutter, including a music player app with a modern UI and robust features.',
      'Created user-friendly and visually appealing mobile app interfaces.',
      'Focused on cross-platform compatibility and performance optimization.',
    ],
  },
  {
    title: 'Service Developer',
    companyName: 'Code Collab Platform',
    icon: microservicesIcon, // Replace with an appropriate icon
    iconBg: '#FF9900',
    date: '2023 - Present',
    points: [
      'Developing Code Collab, a collaborative coding platform as a service, leveraging microservices architecture.',
      'Integrated features like real-time chat, video calling, and an IDE for collaborative development.',
      'Focused on deploying scalable and modular services to support dynamic user requirements.',
      'Utilized Docker and Kubernetes for containerization and orchestration of services.',
    ],
  },
];

const testimonials: TTestimonial[] = [
  {
    testimonial:
      'I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.',
    name: 'Sara Lee',
    designation: 'CFO',
    company: 'Acme Co',
    image: 'https://randomuser.me/api/portraits/women/4.jpg',
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: 'Chris Brown',
    designation: 'COO',
    company: 'DEF Corp',
    image: 'https://randomuser.me/api/portraits/men/5.jpg',
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: 'Lisa Wang',
    designation: 'CTO',
    company: '456 Enterprises',
    image: 'https://randomuser.me/api/portraits/women/6.jpg',
  },
];

/**
 * [
  
  



  
]

 */
const workprojects: TProject[] = [
  {
    name: 'GUI-Based Weather Prediction AI Model',
    description:
      'Developed a weather prediction system using machine learning and a user-friendly GUI built with Tkinter. The model analyzes weather parameters to provide accurate forecasts.',
    tags: [
      { name: 'Python', color: 'blue-text-gradient' },
      { name: 'Tkinter', color: 'green-text-gradient' },
      { name: 'Machine Learning', color: 'yellow-text-gradient' },
      { name: 'Scikit-Learn', color: 'pink-text-gradient' },
    ],
    image: jobit,
    sourceCodeLink: 'https://github.com/AbeDevSaga/gui-based-weather-prediction-ai-model',
    url: 'Currently under development',
  },
  {
    name: 'GUI-Based Image Classifier AI Model',
    description:
      'Developed an image classifier using machine learning to categorize images into various categories (e.g., animals, vehicles, buildings). A user-friendly GUI built with Tkinter allows users to upload and classify images easily.',
    tags: [
      { name: 'Python', color: 'blue-text-gradient' },
      { name: 'Tkinter', color: 'green-text-gradient' },
      { name: 'TensorFlow', color: 'yellow-text-gradient' },
      { name: 'Machine Learning', color: 'pink-text-gradient' },
    ],
    image: jobit,
    sourceCodeLink: 'https://github.com/AbeDevSaga/gui-based-image-classifier-ai-model',
    url: 'Currently under development',
  },
  {
    name: 'Personal portfolio',
    description:
      "A web-based platform that enables users to explore, access, and engage with Harari Innovation and Technology Agency's programs, projects, and resources, offering a seamless and efficient solution for fostering innovation and technological advancement.",
    tags: [
      {
        name: 'Laravel',
        color: 'blue-text-gradient',
      },
      {
        name: 'Blade',
        color: 'green-text-gradient',
      },
      {
        name: 'css',
        color: 'pink-text-gradient',
      },
    ],
    image: mine,
    sourceCodeLink: 'https://github.com/AbeDevSaga/portfolio',
    url: 'https://portfolio-abedevsagas-projects.vercel.app/',
  },
];

const projects: TProject[] = [
  {
    name: 'Harari Mass Media',
    description:
      'A web-based platform that enables users to explore, access, and engage with Harari news, events, and cultural resources, offering a seamless and efficient solution for community information and engagement.',
    tags: [
      {
        name: 'Laravel',
        color: 'blue-text-gradient',
      },
      {
        name: 'Mysql',
        color: 'green-text-gradient',
      },
      {
        name: 'tailwind',
        color: 'pink-text-gradient',
      },
    ],
    image: carrent,
    sourceCodeLink: 'https://github.com/',
  },
  {
    name: 'Adventist Alumni Website (Aluminia)',
    description:
      'Developed a responsive, interactive alumni website using Next.js and Tailwind CSS. Implemented SSR for enhanced SEO and performance. Designed the UI for maximum usability and cross-device responsiveness. Integrated RESTful APIs for alumni data management and event registrations. Ensured scalability and fast load times with optimized server-side rendering.',
    tags: [
      { name: 'Next.js', color: 'blue-text-gradient' },
      { name: 'Tailwind CSS', color: 'pink-text-gradient' },
      { name: 'REST API', color: 'green-text-gradient' },
    ],
    image: waa,
    sourceCodeLink: 'https://github.com/AbeDevSaga/waa-aluminia',
    url: 'https://abedevsaga.github.io/waa-aluminia/',
  },
  {
    name: 'Portfolio Website for Clients',
    description:
      'Built personalized portfolio websites for multiple clients using Next.js and Tailwind CSS. Developed SEO-optimized pages with server-side rendering (SSR) for faster performance. Designed custom layouts for modern, responsive web designs. Integrated dynamic content through API connections for personalized client data. Optimized performance and accessibility for a seamless user experience across devices.',
    tags: [
      { name: 'Next.js', color: 'blue-text-gradient' },
      { name: 'Tailwind CSS', color: 'pink-text-gradient' },
      { name: 'SEO', color: 'green-text-gradient' },
    ],
    image: client,
    sourceCodeLink: 'https://github.com/AbeDevSaga/client-portfolio',
    url: 'https://lalisa-personal-portfolio.vercel.app/',
  },
  {
    name: 'E-Commerce Platform',
    description:
      'Developed a high-performance online store using Next.js for server-side rendering & SEO. Integrated payment gateways (Chapa) for secure transactions. Used MongoDB & PostgreSQL for managing products, users, and orders.',
    tags: [
      { name: 'Next.js', color: 'blue-text-gradient' },
      { name: 'MongoDB', color: 'green-text-gradient' },
      { name: 'PostgreSQL', color: 'yellow-text-gradient' },
      { name: 'Chapa', color: 'pink-text-gradient' },
    ],
    image: ecomerce,
    sourceCodeLink: 'https://github.com/AbeDevSaga/React-Admin-Dashboard',
    url: 'Currently under review',
  },
  {
    name: 'Code Collaboration Platform',
    description:
      'Built a VSCode-like online coding platform with real-time collaboration using React, Node.js, and WebSockets. Integrated Docker-based environments for isolated coding sessions. Implemented Git-based version control for seamless project tracking. Included features like file management, real-time collaboration, and terminal integration. Designed using a microservice architecture to ensure scalability and maintainability.',
    tags: [
      { name: 'React', color: 'blue-text-gradient' },
      { name: 'Node.js', color: 'green-text-gradient' },
      { name: 'WebSockets', color: 'pink-text-gradient' },
      { name: 'Docker', color: 'orange-text-gradient' },
    ],
    image: jobit,
    sourceCodeLink: 'https://github.com/AbeDevSaga/code-collab',
    url: 'Currently under development',
  },
  {
    name: 'Feedback and Corruption Suggestion System',
    description:
      'Developed a web-based platform for the Ministry of Innovation and Technology that enables users to submit feedback and report corruption-related suggestions.',
    tags: [
      { name: 'MongoDB', color: 'green-text-gradient' },
      { name: 'Express.js', color: 'blue-text-gradient' },
      { name: 'React.js', color: 'yellow-text-gradient' },
      { name: 'Node.js', color: 'pink-text-gradient' },
    ],
    image: mint,
    sourceCodeLink: 'https://github.com/AbeDevSaga/feedback-corruption-system',
    url: 'https://feedback-website.onrender.com/homepage',
  },
];

export { services, technologies, experiences, testimonials, projects, workprojects };
