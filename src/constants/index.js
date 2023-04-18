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
  meta,
  carrent,
  jobit,
  tripguide,
  threejs,
  vitamin,
  amazething,
  tactictoe,
  premierpigs,
  battleship,
  amazethingapp,
  tactictoeTrain,
  josep,
} from "../assets";

const navLinks = [
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
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
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
    title: "Full Stack Developer",
    company_name: "Multivitamin",
    icon: vitamin,
    iconBg: "#000000",
    date: "Jan 2023 - April 2023",
    points: [
      "Designed and implemented web and mobile applications using React and Next.js with another engineer, focusing on developing a veteran recruitment platform.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Full Stack Developer",
    company_name: "Amazething",
    icon: amazething,
    iconBg: "#023020",
    date: "Jun 2022 - Dec 2022",
    points: [
      "Collaborated with a team of four engineers to develop a multiplayer game with a learning component that visualizes different algorithms like Merge Sort, Quick Sort, Dijkstra's, and A* pathfinding.",
      "Utilized SocketIO for real-time gameplay and Auth0 for server-side authentication, and Redux for state control.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
    ],
  },
  {
    title: "Full Stack Developer",
    company_name: "Tactic-toe",
    icon: tactictoe,
    iconBg: "#FFFFFF",
    date: "Jan 2022 - Jun 2023",
    points: [
      "Worked with a team of two engineers under an Agile management system to develop an AI app using Angular, SocketIO, and PostgreSQL for real-time player interaction and efficient data management.",
      "Improved reinforcement learning by accounting for board symmetry, allowing for 80% faster model improvement",
      "Refactored code into TypeScript to improve reliability and prevent future bugs.",
      "Utilized Express and Passport.js for server-side routing and authentication to ensure a secure and user-friendly experience",
    ],
  },
  {
    title: "Full stack Developer",
    company_name: "Groupo Premier Pigs",
    icon: premierpigs,
    iconBg: "#FFFFFF",
    date: "Jun 2021 - Dec 2021",
    points: [
      `Developed a mobile application that allows farmers to place orders for feed from the company's factory`,
      "Created a website built in Angular to manage orders, addresses, and capacity of the feed mill",
      " Connected the mobile app and website in real time through an APIPremierFarming was a project dedicated to improving the management of feed orders.",
      "Developed a mobile application that allows farmers to place orders d from the company's factory",
      "Connected the mobile app and website in real time through an API",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I had the pleasure of working with Jacky on the development of an app for my Premier Pigs Agriculture business, and I couldn't be more satisfied with the results. From the initial concept to the final product, Jacky showcased their exceptional skills, creativity, and dedication to bringing my vision to life.",
    name: "Josep Abellana",
    designation: "CFO",
    company: "Groupo Premier Pig",
    image: josep,
  },
  {
    testimonial:
      "I highly recommend Jacky as a software engineer. I have had the pleasure of working with him on several projects, and I can attest to his excellent problem-solving skills. He is able to quickly identify and resolve any issues that arise, and his coding skills are top-notch.",
    name: "Vadim Gnezdyshkin",
    designation: "Software Engineer",
    company: "Tatictoe",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "I highly recommend Jacky as a colleague. I had the pleasure of working with him on a project, and I found him to be a joy to work with. He is intelligent, entertaining, and a driven problem solver. I think he would be an asset to any team, and I would welcome the opportunity to work with him again in the future.",
    name: "Marija Vitkauskaite",
    designation: "Software Engineer",
    company: "Amazething",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Tactictoe",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "angular",
        color: "blue-text-gradient",
      },
      {
        name: "postgresdb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: tactictoeTrain,
    source_code_link: "https://github.com/majilaii/tActIctoe",
  },
  {
    name: "Amazething",
    description:
      "An innovative multiplayer game with a unique learning component that focuses on algorithm visualization",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "socketio",
        color: "green-text-gradient",
      },
      {
        name: "restapi",
        color: "pink-text-gradient",
      },
    ],
    image: amazethingapp,
    source_code_link: "https://github.com/majilaii/aMAZEthing",
  },
  {
    name: "Battleship",
    description:
      "A Single Player Battleship App, a modern, user-friendly adaptation of the classic Battleship game designed for mobile and desktop devices.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "tailwindcss",
        color: "green-text-gradient",
      },
      {
        name: "epxressjs",
        color: "pink-text-gradient",
      },
    ],
    image: battleship,
    source_code_link: "https://github.com/majilaii/battleship-app",
  },
];

export {
  services,
  technologies,
  experiences,
  testimonials,
  projects,
  navLinks,
};
