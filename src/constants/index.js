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
    tripguide,


  } from "../assets";

  import soloinsight from "../assets/company/soloinsight.png";
  import pos from "../assets/pos.png";

  import flutter from "../assets/tech/flutter.png";
  import cpp from "../assets/tech/c++.png";
  import python from "../assets/tech/python.png";
  
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
      name: "Vejiworld",
      description:
        "E-Commerce Mobile application that enables users to place orders for groceries.",
      tags: [
        {
          name: "java",
          color: "blue-text-gradient",
        },
        {
          name: "native-android",
          color: "green-text-gradient",
        },
        {
          name: "firebase",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/IbrahimBasit5802",
    },
    {
      name: "Trip Guide",
      description:
        "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "supabase",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/IbrahimBasit5802",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };