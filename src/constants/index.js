import {
    mobile,
    backend,
    creator,
    web,
    javascript,

    html,
    css,

    nodejs,
    mongodb,
    git,
    docker,
    jobit,
   


  } from "../assets";

  import soloinsight from "../assets/company/soloinsight.png";
  import datainsight from "../assets/company/datainsight.jpeg";
  import pos from "../assets/pos.png";
  import fac from "../assets/Faculty.png";
  import flutter from "../assets/tech/flutter.png";
  import cpp from "../assets/tech/c++.png";
  import python from "../assets/tech/python.png";

  import neural from "../assets/neural.png";
  import brick from "../assets/brick.png";
  import lesion from "../assets/lesion.png";
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
      id: "projects",
      title: "Projects",
    },
    {
      id: "recommendations",
      title: "Recommendations",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "App Developer",
      icon: web,
    },
    {
      title: "Flutter Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "C++ Developer",
      icon: creator,
    },
  ];
  
  const technologies = [

    {
      name: "C++",
      icon: cpp,
    },

    {
      name: "Python",
      icon: python,
    },
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
      name: "Flutter",
      icon: flutter,
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
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [

    {
      title: "Summer Intern",
      company_name: "DataInsight",
      icon: datainsight,
      iconBg: "#FFFFFF",
      date: "June 2023 - August 2023",
      points: [
        "Worked on the platform and pipeline for Digitizing Prescriptions in Pakistan.",
        "Integrated fine-tuned YOLO model in Flutter using Flask RestApi.",
        "Implemented database using MongoDB.",
        "Worked with Flutter, NodeJS, Flask, and MongoDB.",
      ],
    },
    
    {
      title: "Android Developer and Networking Intern",
      company_name: "SoloInsight",
      icon: soloinsight,
      iconBg: "#FFFFFF",
      date: "June 2017 - September 2017",
      points: [
        "Maintaining Cloud Gate application.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Hands on experience with Android SDK, Android Studio, and Android Emulators.",
        "Setting up servers, apache and active directory domain controllers.",
      ],
    },



  ];
  
  const testimonials = [
    {
      testimonial:
        "Ibrahim has served the Google Developer Student Clubs - FAST Islamabad as the Head of App Developers, in the Technicals department. A budding talent Ibrahim, stood out as the best member of the team with his everlasting spirit of peer-to-peer learning that lead to his team organizing an insightful bootcamp on Flutter.", 

      name: "Maaz Ali Nadeem",
      designation: "President",
      company: "ADSOC",
      image: "https://media.licdn.com/dms/image/D4D03AQE1--q_yOXSVA/profile-displayphoto-shrink_800_800/0/1666282202684?e=1684368000&v=beta&t=8PKrIW625rlwj7WjOeCURIqlw9GFdG13r8uvV57K6Ic",
    },

  ];
  
  const projects = [
    {
      name: "Arabian Nights POS",
      description:
        "App-based platform that allows managers, chefs, and waiters to perform their jobs effectively and with ease. Each with their own separate view to run a cafe business smoothly.",
      tags: [
        {
          name: "flutter",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "nodeJS",
          color: "pink-text-gradient",
        },
        {
          name: "expressJS",
          color: "blue-text-gradient",
        }
      ],
      image: pos,
      source_code_link: "https://github.com/IbrahimBasit5802",
    },
    {
      name: "Property Guru",
      description:
        "A mobile application for in house management of real estate businesses.",
      tags: [
        {
          name: "flutter",
          color: "blue-text-gradient",
        },
        {
          name: "nodeJS",
          color: "green-text-gradient",
        },
        {
          name: "mongodb",
          color: "pink-text-gradient",
        },
        {
          name: "expressJS",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/IbrahimBasit5802",
    },
    {
      name: "Flex",
      description:
        "An asp .net WebApp to manage a university's database system withseparate interfaces for administrators, faculty, and students.",
      tags: [
        {
          name: "C#",
          color: "blue-text-gradient",
        },
        {
          name: "asp .net",
          color: "green-text-gradient",
        },
        {
          name: "sql server",
          color: "pink-text-gradient",
        },
        {
          name: "JavaScript",
          color: "pink-text-gradient",
        },
      ],
      image: fac,
      source_code_link: "https://github.com/Haider-29/Flex",
    },
    {
      name: "Neural Network",
      description:
        "Implemented a neural network  using Operating System Concepts in C++. Used threads to paralleize the computations of the neural network. Weights and biases exchanged between processes through pipes.",
      tags: [
        {
          name: "C++",
          color: "blue-text-gradient",
        },
        {
          name: "Threads",
          color: "green-text-gradient",
        },
        {
          name: "Semaphores",
          color: "pink-text-gradient",
        },
      ],
     
      image: neural,
      source_code_link: "https://github.com/IbrahimBasit5802/neural-network",
    },
    {
      name: "Brick Breaker",
      description:
        "Created the Brick Breaker game from scratch in asssembly using masm 8086 assembler.",
      tags: [
        {
          name: "Assembly",
          color: "blue-text-gradient",
        },
        {
          name: "MASM8086",
          color: "green-text-gradient",
        },

      ],
     
      image: brick,
      source_code_link: "https://github.com/IbrahimBasit5802/BrickBreaker",
    },
    {
      name: "Lesion Detection and Segmentation",
      description:
        "Used Connected Component Labeling algorithm to segment black-and-white lesion images. Implemented K-Means Clustering algorithm to categorize colored lesion images.",
      tags: [
        {
          name: "C++",
          color: "blue-text-gradient",
        },
        {
          name: "opencv2",
          color: "green-text-gradient",
        },

      ],
     
      image: lesion,
      source_code_link: "https://github.com/IbrahimBasit5802/LesionDetection",
    },
    
  ];
  
  export { services, technologies, experiences, testimonials, projects };