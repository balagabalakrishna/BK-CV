import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Krishna  ",
  initials: "balaga",
  url: "https://cv-pink-two.vercel.app/",
  location: "HYDERABAD,TG",
  // locationLink: "https://www.google.com/maps/place/sanfrancisco",
  description:
    "Software Engineer turned Entrepreneur. I love building things and helping people.",
  summary: ` A results-oriented Software Developer with a focus on backend engineering and AI integration. I leverage my expertise in Python, Flask, and modern APIs to build robust applications that solve real problems. My experience includes leading a team to develop a multi-LLM response analysis tool and creating an AI-powered semantic search engine. I am passionate about harnessing the power of data and automation to create efficient and impactful software.`,
  avatarUrl: "\krishn new.jpg",
  skills: [
    "Python",
    "SQL",
    "Product Management",
    "Flask",
    "Natural Language Processing (NLP)",
    "Cloud Computing (AWS, GCP)",
    "HTML",
    "CSS",
    "JavaScript",
    "pandas",
    "NumPy",
    'Java',
    "Matplotlib",
    "Seaborn",
    "Scikit-learn",
    "Power BI",
    "Prompt Engineering",
    "AWS",
    "Git",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    // { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: " balagabalakrishna0001@gmail.com |",
    tel: "+91 9010108221",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/balagabalakrishna",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/bala-krishna-balaga-bbaa13240",
        icon: Icons.linkedin,

        navbar: true,
      },
     
      Resume: {
        name: "Resume",
        url: "https://drive.google.com/file/d/1aAvEOAsflnGApSEFvO_s87GFqhMJJ7gn/view?usp=drivesdk",
        icon: NotebookIcon,
        navbar: true,
      },
    },
  },

 
  education: [
    {
      school: "Vit Bhopal University",
      href: "https://vitbhopal.ac.in/",
      degree: "B.Tech in Computer Science (Cloud Computing and Automation)",
      logoUrl: "/VIT.png",
      start: "2022",
      end: "2026",
    },
     {
      school: "Sri chaitanya jr college",
      href: "https://srichaitanya.net/",
      degree: "Class 12 ",
      
      logoUrl: "https://www.deccanchronicle.com/h-upload/2024/09/09/1839673-srica.jpg",
      start: "2020",
      end: "2022",
    },
    {
      school: "Sri chaitanya high school",
      href: "https://srichaitanyaschool.net/",
      
      degree: "Class 10 ",
      logoUrl: "https://www.deccanchronicle.com/h-upload/2024/09/09/1839673-srica.jpg",
      start: "2019",
      end: "2020",
    },

  ],
  projects : [
    {
 "title": "CODE NEST - Code Search, Connected by AI.",
 "href": "https://reposense.framer.website/",
 "dates": "August 2025 ",
 "active": true,
 "type": "AI",
 "description": "Go beyond text matching. Use AI-powered semantic search to explore your codebase by purpose and functionality, making it effortless to discover how to implement a feature without knowing the exact naming convention.",
 "technologies": [
   "Python",
   "API",
   "HTML",
    "CSS",
    "Streamlit",
    "FAISS",
    "GEMINI AI"
  
 ],
 
 links: [
   {
     type: "Website",
     href: " ",
     icon: <Icons.globe className="size-3" />
   },
   {
     type: "Source",
     href: "https://github.com/balagabalakrishna/CODE-SNIPPET-SEARCH-",
     icon: <Icons.github className="size-3" />
   }
 ],
 image: "/Screenshot 2025-09-19 151932.png",
 video: ""
},


  {
 "title": "Blinkit Sales Analysis and Time Series Forecasting",
 "href": "https://reposense.framer.website/",
 "dates": "August 2025 ",
 "active": true,
 "type": "AI",
 "description": "This project involved analyzing historical sales data to build a time series forecasting model that predicts future product demand. By identifying key trends and seasonal patterns, the model provides Blinkit with actionable insights to optimize inventory management, reduce waste, and ensure product availability for customers.",
 "technologies": [
   "Python",
   "Pandas",
   "EXCEL", 
   "Numpy",
   "Seaborn",
   "Scikit-learn",
   "HTML",
    "CSS",
    "Streamlit",
    "XG-BOOST",
    "Power BI"
  
  
 ],
 
 links: [
   {
     type: "Website",
     href: " ",
     icon: <Icons.globe className="size-3" />
   },
   {
     type: "Source",
     href: "https://github.com/balagabalakrishna/CODE-SNIPPET-SEARCH-",
     icon: <Icons.github className="size-3" />
   }
 ],
 image: "/Screenshot 2025-09-19 153043.png",
 video: ""
},


  {
 "title": "Bharat KYC - Accessible KYC Solution for All",
 "href": "https://reposense.framer.website/",
 "dates": " upcoming ",
 "active": true,
 "type": "AI",
 "description": "Spearheaded a project management initiative to build an accessible KYC solution tailored for low-connectivity environments and users with varying digital literacy. My role involved defining project scope, managing the product backlog, prioritizing user-centric features like voice-assisted navigation and offline functionality, and ensuring on-time delivery. The project successfully enhanced financial inclusion by making digital verification processes more accessible.",
 "technologies": [
   "HTML",
    "CSS",
    "JavaScript",
    "React",
    " Tailwind CSS",
    "MY SQL",
    " Google Vision API (Online)",
    "Web Speech API",
    "AWS"
  
 ],
 
 links: [
   {
     type: "Website",
     href: " ",
     icon: <Icons.globe className="size-3" />
   },
   {
     type: "Source",
     href: "https://github.com/balagabalakrishna/lightweight-kyc_bharat-product-design-",
     icon: <Icons.github className="size-3" />
   }
 ],
 image: "/Screenshot 2025-09-19 153403.png",
 video: ""
},



  {
 "title": "Land Gateway - Hyderabad's Direct Real Estate Portal",
 "href": "https://reposense.framer.website/",
 "dates": "August 2025 ",
 "active": true,
 "type": "AI",
 "description": "Land Gateway is a direct-to-owner real estate platform helping users find their dream home or plot in Hyderabad without brokerage fees. We connect buyers directly with verified property dealers and owners, acting as a secure middleman to ensure trusted and transparent transactions.",
 "technologies": [
   "HTML",
     "CSS",
      "JavaScript", 
      "React",
      "Google Maps API " ,
      " Python",
      "Flask",
      "SQLite",
      " WhatsApp Business API ",
      "Vercel"
 ],
 
 links: [
   {
     type: "Website",
     href: " ",
     icon: <Icons.globe className="size-3" />
   },
   {
     type: "Source",
     href: "/Screenshot 2025-09-19 153733.png",
     icon: <Icons.github className="size-3" />
   }
 ],
 image: "/Screenshot 2025-09-19 153733.png",
 video: ""
},

  {
 "title": "Rank MIND - A Multiple LLM Models response analysis tool",
 "href": "https://reposense.framer.website/",
 "dates": "August 2025 ",
 "active": true,
 "type": "Fullstack",
 "description": "RankMind AI is a streamlined web application that empowers users to instantly compare responses from five leading AI models—including GPT-4, Gemini, and Llama 3.1—side-by-side. It intelligently ranks the best output based on accuracy and relevance, cutting through the noise to deliver the most reliable answer for any query.",
 "technologies": [
   "Python",
   "API",
   "FLASK",
    "HTML",
    "CSS",
    "JavaScript",
    "Gemini AI",
    "NVIDIA LLM",
    "Cohere",
    "Deepseek",
    "LLM as Router"
    
  
 ],
 
 links: [
   {
     type: "Website",
     href: " ",
     icon: <Icons.globe className="size-3" />
   },
   {
     type: "Source",
     href: "https://github.com/balagabalakrishna/CODE-SNIPPET-SEARCH-",
     icon: <Icons.github className="size-3" />
   }
 ],
 image: "/rank mind concept.jpg",
 video: ""
},
  

 {
 "title": "Aura - Suggests a helpful presence that's always around you.",
 "href": "https://reposense.framer.website/",
 "dates": "August 2025 ",
 "active": true,
 "type": "AI",
 "description": "Chat Assistant is a conversational AI partner built with the Gemini API, designed to be your go-to for daily tasks. It helps you draft emails, get homework help, brainstorm ideas, and plan your day, all through a simple and intuitive chat interface. It's a smart, responsive tool that makes productivity effortless.",
 "technologies": [
   "Google Gemini API",
   "Python",
   "Flask",
   "HTML",
    "CSS",
    "JavaScript",
    "RESTful API",
    "vercel",
    "SQL lite"
  
 ],
 
 links: [
   {
     type: "Website",
     href: " ",
     icon: <Icons.globe className="size-3" />
   },
   {
     type: "Source",
     href: "https://github.com/balagabalakrishna/CODE-SNIPPET-SEARCH-",
     icon: <Icons.github className="size-3" />
   }
 ],
 image: "/project aura.jpg",
 video: ""
},
  
],
  
  // hackathons: [
  //   {
  //     title: "Hack Western 5",
  //     dates: "November 23rd - 25th, 2018",
  //     location: "London, Ontario",
  //     description:
  //       "Developed a mobile application which delivered bedtime stories to children using augmented reality.",
  //     image:
  //       "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-western.png",
  //     mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",

  //     links: [],
  //   },
  //   
  // ],

  certifications: [

  {
    Issued: "ETHNUS",
    href: "https://drive.google.com/file/d/1g7JKFtyauL4IFXs43kKRfh8DyGLTxLj0/view?usp=drivesdk",
    title: "AWS Solution Architect",
    logoUrl: "\Screenshot 2025-09-19 142010.png",
    date: "August 2025",
    description: " It validates core Oracle Cloud Infrastructure knowledge.Relevant for technical and non-technical roles, including development, procurement, and management."
  },
  {
Issued: "ETHNUS",
href: "https://drive.google.com/file/d/1Kkq8WfpLLyAO3oNwMaUmye2E1FDPwumK/view?usp=drivesdk",
title: "MERN FULL-STACK DEVELOPER",
logoUrl: "\Screenshot 2025-09-19 142102.png",
date: "September 2025",
description: "It validates expertise in using Oracle Database 23ai for AI-driven applications like vector searches and RAG. Designed for DBAs and developers with Python and AI/ML familiarity."
},


   {
    Issued: "LINKEDIN",
    href: "https://drive.google.com/file/d/1t4v2U2LeTwIrqykx2fPV9YsfV_d3jy7a/view?usp=drivesdk",
    title: "SYSTEM Administrator",
    logoUrl: "\Screenshot 2025-09-19 142150.png",
    date: "June 2025",
    description: "MongoDB database implementation, configuration, and administration skills including CRUD operations and replication."
  },

  {
    Issued: "LINKEDIN",
    href: "https://drive.google.com/file/d/1_kuCwYk0gVh0GNwc8VEzY9CC05-ZUAzg/view?usp=drivesdk",
    title: "PROJECT MANAGEMENT FOR PROFESSIONALS",
    logoUrl: "\Screenshot 2025-09-19 142224.png",
    date: "August 2025",
    description: "Foundational AI, ML, and Generative AI knowledge within Oracle Cloud Infrastructure environment."
  },
 


]
} as const;
