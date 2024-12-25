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
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  img1,
  img2,
  img3,
  img4,
  img5,
  img6,

  hack1,
  hack2,
  hack3,
  hack4,
  hack5,
  hack6,
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
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Open Source",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Frontend Developer",
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
    title: "Information Technology Intern",
    company_name: "SATI , Vidisha",
    
    icon: img5,
    iconBg: "#383E56",
    
    date: "june 2023 - july 2023",
    points: [
      "Gained hands-on experience in various IT domains, including software development, network administration, and database management.",
      "Worked on collaborative projects under mentorship, enhancing problem-solving skills and adaptability in a professional environment.",
    ],
  },
  {
    title: "AI-ML Intern",
    company_name: "YBI Foundation",
     
    
    icon: img6,
    iconBg: "#383E56",
    

    date: "July 2023 - Aug 2023",
    points: [
      "Collaborated on real-world artificial intelligence and machine learning projects, applying theoretical knowledge to develop data-driven solutions.",
      "Developed and optimized algorithms using Python, TensorFlow, and scikit-learn to solve complex problems.",
    ],
  },
];

export const hackathons = [
  {
    name: "Code Conquest 2024",
    description:
      "Vidisha",
   
    image: hack3,
   
  },
  {
    name: "Hackover Flow 2.0 ",
    description:
      "Mumbai",
   
    image: hack2,
   
  },
  {
    name: " Version beta 7.0 ",
    description:
      "Manit Bhopal",
   
    image: hack1,
   
  },
  {
    name: "Hack The Mountains 5.0 ",
    description:
      "RAjkot",
   
    image: hack6,
   
  },
  {
    name: " Smart India Hackathon 2024",
    description:
      "On-Campus",
   
    image: hack5,
 
  },
  {
    name: "Smart India Hackathon 2023 ",
    description:
      "On-Campus",
   
    image: hack4,
   
  },
];

const projects = [

  {
    name: "Mind'sCool",
    description:
      "Gamified mental wellness platform designed to support users in managing mental health through engaging activities and rewards. Features include a unique relationship tree that grows with task completion, fostering motivation and personal growth.",
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
    image: img2,
    deployment_link: "https://mindscool.netlify.app/",
    source_code_link: "https://github.com/Kunwar-awadhiya/mind-scool",
  },

  {
    name: "Bail Recknor",
    description:
      "Digital solution aimed at streamlining the bail process for undertrial prisoners, legal aid providers, and judicial authorities. Integrates parameters like offense nature, to enhance efficiency and transparency in bail applications.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "Tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: img3,
    deployment_link: "https://bailreckonerr.netlify.app/",
    source_code_link: "https://github.com/Kunwar-awadhiya/Bail_Recknor",
  },

  {
    name: "Advance login Authentication",
    description:
      "Secure authentication system techniques like authentication and token-based validation to ensure robust user account protection and prevent unauthorized access.",
    tags: [
      {
        name: "React.js",
        color: "blue-text-gradient",
      },
      {
        name: "Mongodb",
        color: "green-text-gradient",
      },
      {
        name: "Tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: img4,
    deployment_link: "",
    source_code_link: "https://github.com/Kunwar-awadhiya/Advance-login-authentication",
  },
];
export { services, technologies, experiences,  projects };
