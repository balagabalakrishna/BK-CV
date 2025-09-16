import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Bala Krishna  ",
  initials: "AS",
  url: "https://cv-pink-two.vercel.app/",
  location: "Mumbai , IN",
  // locationLink: "https://www.google.com/maps/place/sanfrancisco",
  description:
    "Software Engineer turned Entrepreneur. I love building things and helping people. Very active on Twitter.",
  summary: ` Full Stack Engineer building fast, functional web experiences with Next.js, TS, Postgres, Framer Motion. Think technical precision meets creative problem-solving.

I craft premium landing pages in my free time—most of them free because I'm generous like that. Currently working on some secret app, learning new technology because apparently I don't sleep enough.

And for fun? State-level boxer. Gold and Bronze. Bringing that same discipline (and punchline) to code.`,
  avatarUrl: "/p2.png",
  skills: [
    "C++",
    "JWT",
    "AWS",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    // { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "singhashirwad2003@gmail.com |",
    tel: "+918421933430",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/Ethan4582",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/ashirwad08singh/",
        icon: Icons.linkedin,

        navbar: true,
      },
     
      Resume: {
        name: "Resume",
        url: "https://drive.google.com/file/d/1389lMAKrxu8uQrAlWMFkvSl_ANu2C2MV/view?usp=sharing",
        icon: NotebookIcon,
        navbar: true,
      },
    },
  },

 
  education: [
    {
      school: "Vit Bhopal University",
      href: "https://vitbhopal.ac.in/",
      degree: "B.Tech in Computer Science (Cyber Security and Digital Forensics)",
      logoUrl: "/VIT.png",
      start: "2022",
      end: "2026",
    },
     {
      school: "Relaince Foundation ",
      href: "https://www.rfs.edu.in/Lodhivali-EM/",
      degree: "Class 12 ",
      logoUrl: "/R3.png",
      start: "2019",
      end: "2021",
    },
    {
      school: "Yak Public School",
      href: "https://yakschool.com/",
      degree: "Class 10 ",
      logoUrl: "/49.png",
      start: "2017",
      end: "2019",
    },

  ],
  projects : [
    {
 "title": "RepoSense",
 "href": "https://reposense.framer.website/",
 "dates": "August 2025 ",
 "active": true,
 "type": "fullstack",
 "description": "RepoSense transforms GitHub repositories into intelligent, conversational workspaces. Upload any repo and get AI-powered file summaries, natural language Q&A about your codebase, meeting transcription with issue extraction, and team collaboration features.",
 "technologies": [
   "Next.js",
   "TypeScript",
   "PostgreSQL",
   "Prisma",
   "TailwindCSS",
   "Gemini AI",
   "LangChain",
   "Hugging Face",
   "Assembly.AI",
   "Cloudinary",
   "Stripe",
   "Neon "
 ],
 links: [
   {
     type: "Website",
     href: "https://reposense.framer.website/",
     icon: <Icons.globe className="size-3" />
   },
   {
     type: "Source",
     href: "https://github.com/Ethan4582/RepoSense",
     icon: <Icons.github className="size-3" />
   }
 ],
 image: "/79.png",
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
    Issued: "Oracle Cloud",
    href: "https://catalog-education.oracle.com/ords/certview/sharebadge?id=53916C63D6D95CDA8844D6F4D45BA3BF012996FFC4AE266488BF9A691C60A401",
    title: "Oracle Certified Foundations Associate",
    logoUrl: "https://brm-workforce.oracle.com/pdf/certview/images/OCI25FNDCFAV1.png",
    date: "August 2025",
    description: " It validates core Oracle Cloud Infrastructure knowledge.Relevant for technical and non-technical roles, including development, procurement, and management."
  },
  {
Issued: "Oracle Cloud",
href: "https://catalog-education.oracle.com/pls/certview/sharebadge?id=B1753AAEE7A384D8B59BF091DBE43BAC336854F8D07BB724892054A897484010",
title: "Oracle AI Vector Search Certified Professional",
logoUrl: "https://brm-workforce.oracle.com/pdf/certview/images/DB23AIOCP.png",
date: "September 2025",
description: "It validates expertise in using Oracle Database 23ai for AI-driven applications like vector searches and RAG. Designed for DBAs and developers with Python and AI/ML familiarity."
},


   {
    Issued: "MongoDB Database",
    href: "https://www.credly.com/badges/da73279c-138f-4954-bf2f-5aeba4dd5875",
    title: "MongoDB Certified Associate Database Administrator",
    logoUrl: "https://images.credly.com/size/680x680/images/395e38b5-2a2e-49aa-9416-df8f5619399d/image.png",
    date: "June 2025",
    description: "MongoDB database implementation, configuration, and administration skills including CRUD operations and replication."
  },

  {
    Issued: "Oracle Cloud",
    href: "https://catalog-education.oracle.com/pls/certview/sharebadge?id=41F45AEE1A4D80F538C7162AFC7C016C71BB3F0C25DCEFB7DAE6D764751C6BBD",
    title: "Oracle Cloud Certified AI Foundations Associate",
    logoUrl: "https://brm-workforce.oracle.com/pdf/certview/images/OCI25AICFAV1.png",
    date: "August 2025",
    description: "Foundational AI, ML, and Generative AI knowledge within Oracle Cloud Infrastructure environment."
  },
 
  
  {
    Issued: "Oracle Cloud",
    href: "https://catalog-education.oracle.com/pls/certview/sharebadge?id=1B2DBEEAA71F5E4FEB8016398AD0C2F1526BCB285AF4F93C9510E9361208814F",
    title: "Data Platform Certified Foundations Associate",
    logoUrl: "https://brm-workforce.oracle.com/pdf/certview/images/OCI25DCFAV2.png",
    date: "August 2025",
    description: "This certification validates foundational knowledge of the core data management cloud services offered on the Oracle Cloud Infrastructure (OCI) platform."
  },
    
  {
    Issued: "MongoDB Atlas",
    href: "https://www.credly.com/badges/da73279c-138f-4954-bf2f-5aeba4dd5875",
    title: "MongoDB Certified Associate Atlas Administrator",
    logoUrl: "https://images.credly.com/images/77a9f71b-6ee5-4378-8a51-9e91de54b950/image.png",
    date: "June 2025",
    description: "MongoDB Atlas cloud deployment management, security best practices, and performance optimization."
  },
  
  {
    Issued: "Oracle Cloud",
    href: "https://catalog-education.oracle.com/ords/certview/sharebadge?id=F49248EB27FA087279A16F6A084F0EF04E4A3FC34C63334E5A9636D0C0F066ED",
    title: "MySQL HeatWave Implementation Associate",
    logoUrl: "https://brm-workforce.oracle.com/pdf/certview/images/MYSQLHWIMPOCA.png",
    date: "August 2025",
    description: "This certification validates foundational knowledge of the core data management cloud services offered on the Oracle Cloud Infrastructure (OCI) platform."
  },

]
} as const;
