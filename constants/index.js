import GithubIcon from "./../public/assets/icons/github.svg";
import LinkedInIcon from "./../public/assets/icons/linkedin.svg";
import XIcon from "./../public/assets/icons/x.svg";
import InstagramIcon from "./../public/assets/icons/instagram.svg";
import FrontendIcon from "./../public/assets/icons/frontend.svg";
import LeaderShipIcon from "./../public/assets/icons/leadership.svg";
import ProblemSolvingIcon from "./../public/assets/icons/problem-solving.svg";
import FreelancerIcon from "./../public/assets/icons/freelance.svg";
import BackendIcon from "./../public/assets/icons/backend.svg";
import FullStackIcon from "./../public/assets/icons/full-stack.svg";

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
    id: "skills",
    title: "Skills",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Ethical Hacking",
    icon: <FullStackIcon />,
  },
  {
    title: "Frontend Developer",
    icon: <FrontendIcon />,
  },
  // {
  //   title: "Backend Developer",
  //   icon: <BackendIcon />,
  // },
  {
    title: "Web Penetration Testing",
    icon: <ProblemSolvingIcon />,
  },
  {
    title: "Bug Bounty",
    icon: <FreelancerIcon />,
  },
  // {
  //   title: "Leadership",
  //   icon: <LeaderShipIcon />,
  // },
];

const technologies = {
  languages: [
    {
      name: "HTML5",
      icon: "/assets/tech/html5.svg",
      link: "https://html.spec.whatwg.org/multipage/",
    },
    {
      name: "CSS3",
      icon: "/assets/tech/css3.svg",
      link: "https://www.w3.org/Style/CSS/Overview.en.html",
    },
    {
      name: "JavaScript",
      icon: "/assets/tech/javascript.svg",
      link: "https://262.ecma-international.org/",
    },
    {
      name: "Bash",
      icon: "/assets/tech/gnu-bash.png",
      link: "https://www.gnu.org/software/bash/",
    },
//    {
//      name: "C",
//      icon: "/assets/tech/c.svg",
//      link: "https://en.cppreference.com/w/c",
//    },
//    {
//      name: "Java",
//      icon: "/assets/tech/java.svg",
//      link: "https://www.java.com/en/",
//    },
    {
      name: "Python",
      icon: "/assets/tech/python.svg",
      link: "https://www.python.org/",
    },
  ],
  frameworks: [
    {
      name: "Metasploit",
      icon: "/assets/tech/metasploit.svg",
      link: "https://www.metasploit.com/",
    },
    {
      name: "Burp Suite",
      icon: "/assets/tech/burp.svg",
      link: "https://portswigger.net/burp",
    },
    {
      name: "OWASP",
      icon: "/assets/tech/Owasp.svg",
      link: "https://owasp.org/",
    },
  ],
  libraries: [
    {
      name: "Scapy",
      icon: "/assets/tech/scapy_logo.png",
      link: "https://github.com/secdev/scapy",
    },
    
  ],
  tools: [
    {
      name: "Git",
      icon: "/assets/tech/git.svg",
      link: "https://git-scm.com/",
    },
    {
      name: "Github",
      icon: "/assets/icons/github.svg",
      link: "https://github.com/",
    },
    {
      name: "NMAP",
      icon: "/assets/tech/nmap.svg",
      link: "https://nmap.org/",
    },
    {
      name: "Whireshark",
      icon: "/assets/tech/Wireshark.svg",
      link: "https://www.wireshark.org/",
    },
    {
      name: "Hydra",
      icon: "/assets/tech/hydra.svg",
      link: "https://www.kali.org/tools/hydra/",
    },
  ],
  environments: [
    {
      name: "Kali Linux",
      icon: "/assets/tech/kalilinux.svg",
      link: "https://kali.org/",
    },
    {
      name: "VM Ware",
      icon: "/assets/tech/vmware2.svg",
      link: "https://www.vmware.com/",
    },
  ],
 databases: [
    {
      name: "Shodan",
      icon: "/assets/tech/shodan.svg",
      link: "https://www.shodan.io/",
    },
     {
      name: "Censys",
      icon: "/assets/tech/censys.svg",
      link: "https://www.censys.com/",
    },
     {
      name: "Amass",
      icon: "/assets/tech/Amass.png",
      link: "https://github.com/owasp-amass/amass",
    },
  ],

};

const experiences = [
  // {
  //   title: "Full Stack Developer",
  //   company_name: "Tech Lead at GDSC MVJCE",
  //   icon: "/assets/company/gdsc-logo.svg",
  //   iconBg: "#E6DEDD",
  //   date: "July 2023 - Present",
  //   points: [
  //     "Currently serving as the Tech Lead of GDSC, responsible for guiding technical aspects, fostering collaboration, and contributing to strategic decisions.",
  //     "Led induction programs, ensured new member alignment with GDSC's mission, and provided technical mentorship.",
  //     "Developed GDSC MVJCE website, enhancing the organization's online visibility.",
  //     "Spearheaded promotional campaigns, actively engaged with the GDSC community, and played a key role in planning and executing events.",
  //   ],
  // },
  {
    title: "Cyber Security Intern",
    company_name: "Intern at Shadowfox",
    //icon: "/assets/company/LOGO.svg",
    iconBg: "#E6DEDD",
    date: "July 2025",
    points: [
      "Spearheaded project-based tasks at beginner, intermediate, and advanced levels during a 1-month virtual internship program, strengthening core cybersecurity skills.",
      "Collaborated with cross-functional mentors and peers to solve real-world cybersecurity challenges and present practical solutions",
      "Implemented self-paced learning strategies alongside mentor-guided sessions, leading to measurable skill advancement and completion of project milestones.",
      "Managed end-to-end project submission requirements, including documentation and presentations, ensuring timely and high-quality deliverables.",
    ],
  },
  {
    title: "Cyber Security Intern",
    company_name: "Intern at Codec Technologies",
    //icon: "/assets/company/drdo-cabs.png",
    iconBg: "#E6DEDD",
    date: "June 2025",
    points: [
      "Completed a structured, one-month virtual internship focused on foundational to intermediate cybersecurity concepts and practical implementation.",
      "Engaged in multiple project-based modules covering real-world security scenarios, enhancing technical proficiency and problem-solving skills.",
      "Participated in live mentor-led sessions and self-guided learning tracks to deepen understanding of ethical hacking, vulnerability scanning, and OSINT.",
      "Delivered project outcomes with comprehensive documentation and demo presentations, meeting quality standards and submission deadlines.",
    ],
  },
  // {
  //   title: "Frontend Developer",
  //   company_name: "Tech team member at GDSC MVJCE",
  //   icon: "/assets/company/gdsc-logo.svg",
  //   iconBg: "#E6DEDD",
  //   date: "February 2022 - July 2023",
  //   points: [
  //     "Successfully planned and executed induction programs, providing new members with crucial information about the organization's goals and values.",
  //     "Demonstrated web development expertise by conducting CSS workshops, equipping participants with practical web design and styling skills.",
  //     "Played a crucial role in promoting GDSC events and actively collaborated with cross-functional teams to deliver high-quality projects, fostering teamwork and innovation.",
  //     "Actively engaged with the GDSC community, assisted in workshops, and contributed to planning and managing GDSC events, ensuring their success and growth.",
  //   ],
  // },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Web Spyder: Python baseed Website OINT CLI Tool",
    description:
      "Developed a command-line tool for collecting OSINT data from websites. Features: WHOIS lookup, DNS records, subdomain discovery, CMS detection, SSL certificate info, and IP tracing. Designed a modular CLI interface allowing users to run specific scans or a full footprinting operation in a single command.",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "requests",
        color: "green-text-gradient",
      },
      {
        name: "BeautifulSoup",
        color: "pink-text-gradient",
      },
      {
        name: "DNSPython",
        color: "orange-text-gradient",
      },
      {
        name: "CLI",
        color: "yellow-text-gradient",
      },
    ],
    image:"/assets/projects/WebSpyder.png",
    source_code_link: "https://github.com/hackwithyash/WebSpyder",
//    deployed_link: "https://quick-edit-app.vercel.app",
  },
  {
    name: "Password Strength Checker",
    description:
      "A stylish, intuitive, and user-friendly Password Strength Checker built using Python and PyQt5. This tool evaluates the strength of your password and provides helpful suggestions to make it stronger. Features include real-time feedback, progress bar visualization, and optional show/hide password functionality.",
    tags: [
      {
        name: "Python",
        color: "blue-text-gradient",
      },
      {
        name: "PyQt5",
        color: "green-text-gradient",
      },
      {
        name: "GUI Design",
        color: "pink-text-gradient",
      },
//     {
//        name: "fabricjs",
//       color: "orange-text-gradient",
//     },
//     {
//       name: "liveblocks",
//       color: "yellow-text-gradient",
//     },
    ],
    image: "/assets/projects/Pass.png",
    source_code_link: "https://github.com/hackwithyash/Password-Strength-Checker",
//    deployed_link: "https://fig-pro-github.vercel.app",
  },
  // {
  //   name: "GDSC Website",
  //   description:
  //     "Welcome to the official repository for the GDSC MVJCE Website, built with Next.js, Styled Components, and Prisma! This website serves as the central hub for all things tech-related at GDSC MVJCE. From insightful blog posts to incredible community projects, and from exciting tech events to getting to know our team, you'll find it all here.",
  //   tags: [
  //     {
  //       name: "next.js",
  //       color: "blue-text-gradient",
  //     },
  //     {
  //       name: "styled-components",
  //       color: "green-text-gradient",
  //     },
  //     {
  //       name: "three.js",
  //       color: "pink-text-gradient",
  //     },
  //     {
  //       name: "prisma",
  //       color: "orange-text-gradient",
  //     },
  //     {
  //       name: "framer-motion",
  //       color: "yellow-text-gradient",
  //     },
  //   ],
  //   image: "/assets/projects/gdsc-website.png",
  //   source_code_link: "https://github.com/GDSC-MVJCE/gdscmvjce-website.git",
  //   deployed_link: "https://gdscmvjce.vercel.app/",
  // },
  {
    name: "DigiTrace – Phone Number OSINT Tool",
    description:
      "DigiTrace is a Python-based OSINT (Open Source Intelligence) tool for tracing Indian phone numbers. It fetches detailed information like owner name, SIM card provider, location, IP address, and more, using publicly available resources like calltracer.in.",
    tags: [
      {
        name: "Python",
        color: "blue-text-gradient",
      },
      {
        name: "Numverify API",
        color: "green-text-gradient",
      },
      {
        name: "Phonenumbers",
        color: "pink-text-gradient",
      },
      {
        name: "CLI",
        color: "orange-text-gradient",
      },
//      {
//        name: "tanstack/react-query",
//        color: "yellow-text-gradient",
//      },
    ],
    image: "/assets/projects/Digitrace.webp",
    source_code_link:
      "https://github.com/hackwithyash/DigiTrace",
//    deployed_link:"https://github.com/Shivam-Sharma-1/Facility-Management-System?tab=readme-ov-file#demo",
  },
  // {
  //   name: "Netflix Clone",
  //   description:
  //     "Netflix-Clone is a fully responsive web application that replicates the popular streaming platform Netflix. It is built using Next.js, Prisma, React, NextAuth.js, Tailwind CSS, MongoDB and TypeScript. This project aims to showcase the implementation of these technologies to create a feature-rich clone of Netflix.",
  //   tags: [
  //     {
  //       name: "next.js",
  //       color: "blue-text-gradient",
  //     },
  //     {
  //       name: "typescript",
  //       color: "green-text-gradient",
  //     },
  //     {
  //       name: "tailwindcss",
  //       color: "pink-text-gradient",
  //     },
  //     {
  //       name: "mongodb",
  //       color: "orange-text-gradient",
  //     },
  //   ],
  //   image: "/assets/projects/netflix-clone.png",
  //   source_code_link: "https://github.com/Shivam-Sharma-1/Netflix-Clone.git",
  //   deployed_link: "https://netflix-clone12345.vercel.app",
  // },
  // {
  //   name: "Van-Life",
  //   description:
  //     "VanLife is a user-friendly website built with React that simplifies van searches. It is a web app used to browse different types of vans. It allows users to log in and offers convenient tag-based filtering for easy browsing.",
  //   tags: [
  //     {
  //       name: "react",
  //       color: "blue-text-gradient",
  //     },
  //     {
  //       name: "mirage.js",
  //       color: "green-text-gradient",
  //     },
  //     {
  //       name: "firebase-firestore",
  //       color: "pink-text-gradient",
  //     },
  //   ],
  //   image: "/assets/projects/vanlife.png",
  //   source_code_link: "https://github.com/Shivam-Sharma-1/Van-Life.git",
  //   deployed_link: "https://myvanlife.netlify.app",
  // },
  // {
  // 	name: "Spooky-Run",
  // 	description:
  // 		"Spooky Run is a web based 2D arcade style game that allows players to play as a lost dog finding its way back home through a spooky forest. The game is built using vanilla JavaScript and utilizes HTML5 and the 'canvas' element to render graphics and handle user input.",
  // 	tags: [
  // 		{
  // 			name: "html5",
  // 			color: "blue-text-gradient"
  // 		},
  // 		{
  // 			name: "css3",
  // 			color: "green-text-gradient"
  // 		},
  // 		{
  // 			name: "javascript",
  // 			color: "pink-text-gradient"
  // 		}
  // 	],
  // 	image: "/assets/projects/spooky-run.png",
  // 	source_code_link: "https://github.com/Shivam-Sharma-1/Spooky-Run.git",
  // 	deployed_link: "https://shivam-sharma-1.github.io/Spooky-Run"
  // }
];

const socials = [
  {
    id: "github",
    icon: <GithubIcon />,
    link: "https://github.com/hackwithyash",
  },
  {
    id: "linkedin",
    icon: <LinkedInIcon />,
    link: "https://www.linkedin.com/in/hackwithyash",
  },
  {
    id: "x",
    icon: <XIcon />,
    link: "https://twitter.com/dexinvent",
  },
//  {
//    id: "instagram",
//    icon: <InstagramIcon />,
//    link: "https://www.instagram.com/",
//  },
];

const heroTexts = [
  "Ethical Hacker",
  500,
  "Bug Hunter",
  500,
  "Web Penetration Tester",
  500,
  "CTF Player",
  500,
  "OSINT",
  500,
//  "Problem solver",
//  500,
];

export {
  navLinks,
  services,
  technologies,
  experiences,
  testimonials,
  projects,
  socials,
  heroTexts,
};
