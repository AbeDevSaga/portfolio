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
  meta,
  starbucks,
  tesla,
  shopify,
  hinta,
  php as phpIcon,
  python as pythonIcon,
  flutter as flutterIcon,
  react as reactIcon,
  alumni as alumniIcon,
  microservice as microservicesIcon,
  carrent,
  jobit,
  tripguide,
  project4,
  hintas,
  threejs,
  portfolio,
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

// const experiences: TExperience[] = [
//   {
//     title: 'React.js Developer',
//     companyName: 'Starbucks',
//     icon: starbucks,
//     iconBg: '#383E56',
//     date: 'March 2020 - April 2021',
//     points: [
//       'Developing and maintaining web applications using React.js and other related technologies.',
//       'Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.',
//       'Implementing responsive design and ensuring cross-browser compatibility.',
//       'Participating in code reviews and providing constructive feedback to other developers.',
//     ],
//   },
//   {
//     title: 'React Native Developer',
//     companyName: 'Tesla',
//     icon: tesla,
//     iconBg: '#E6DEDD',
//     date: 'Jan 2021 - Feb 2022',
//     points: [
//       'Developing and maintaining web applications using React.js and other related technologies.',
//       'Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.',
//       'Implementing responsive design and ensuring cross-browser compatibility.',
//       'Participating in code reviews and providing constructive feedback to other developers.',
//     ],
//   },
//   {
//     title: 'Web Developer',
//     companyName: 'Shopify',
//     icon: shopify,
//     iconBg: '#383E56',
//     date: 'Jan 2022 - Jan 2023',
//     points: [
//       'Developing and maintaining web applications using React.js and other related technologies.',
//       'Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.',
//       'Implementing responsive design and ensuring cross-browser compatibility.',
//       'Participating in code reviews and providing constructive feedback to other developers.',
//     ],
//   },

//   {
//     title: 'Full stack Developer',
//     companyName: 'HInTA',
//     icon: hinta,
//     iconBg: '#383E56',
//     date: 'Jan 2023 - Present',
//     points: [
//       'Developing and maintaining web applications using Laravel and other related technologies.',
//       'Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.',
//       'Implementing responsive design and ensuring cross-browser compatibility.',
//       'Participating in code reviews and providing constructive feedback to other developers.',
//     ],
//   },

//   {
//     title: 'Full stack Developer',
//     companyName: 'Mass Media Agency',
//     icon: meta,
//     iconBg: '#E6DEDD',
//     date: 'Jan 2023 - Present',
//     points: [
//       'Developing and maintaining web applications using React.js and other related technologies.',
//       'Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.',
//       'Implementing responsive design and ensuring cross-browser compatibility.',
//       'Participating in code reviews and providing constructive feedback to other developers.',
//     ],
//   },
// ];

// const footerDatas: TFooterData[] = [
//   {},
//   {},
//   {},
//   {},
//   {},
// ]
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
    name: 'Harari Innovation and Technology Agency',
    description:
      "A web-based platform that enables users to explore, access, and engage with Harari Innovation and Technology Agency's programs, projects, and resources, offering a seamless and efficient solution for fostering innovation and technological advancement.",
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'restapi',
        color: 'green-text-gradient',
      },
      {
        name: 'scss',
        color: 'pink-text-gradient',
      },
    ],
    image: jobit,
    sourceCodeLink: 'https://github.com/',
  },
  {
    name: "Murti Guto Student's Union",
    description:
      "A web-based platform that enables users to explore, access, and engage with Murti Guto Student's Union activities, events, and resources, offering a seamless and efficient solution for student connection and collaboration.",
    tags: [
      {
        name: 'nextjs',
        color: 'blue-text-gradient',
      },
      {
        name: 'supabase',
        color: 'green-text-gradient',
      },
      {
        name: 'css',
        color: 'pink-text-gradient',
      },
    ],
    image: tripguide,
    sourceCodeLink: 'https://github.com/',
  },
  {
    name: 'School Managment System',
    description:
      'A web-based platform that enables users to manage, track, and streamline school operations, including student information, attendance, grades, and communication, offering a seamless and efficient solution for educational administration.',
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
    image: project4,
    sourceCodeLink: 'https://github.com/',
  },
  {
    name: 'Harari Technology Agency',
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
    image: hintas,
    sourceCodeLink: 'https://github.com/',
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
    image: portfolio,
    sourceCodeLink: 'https://github.com/',
  },
];

export { services, technologies, experiences, testimonials, projects };
