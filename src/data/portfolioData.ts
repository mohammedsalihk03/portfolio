import {
  PersonalInfo,
  EducationItem,
  ProjectItem,
  CertificationItem,
  HackathonItem,
  LeadershipItem,
  SkillCategory
} from '../types/portfolio';

export const personalInfo: PersonalInfo = {
  name: "Mohammed Salih K",
  title: "Computer Science & Engineering (Data Science) Student",
  email: "mohammedsalihk0304@gmail.com",
  location: "Malappuram, Kerala, India",
  linkedin: "https://www.linkedin.com/in/mohammed-salih-674a53291",
  github: "https://github.com/mohammedsalihk03",
  leetcode: "https://leetcode.com/u/msalihk/",
  careerInterests: [
    "Software Engineering",
    "Backend Development",
    "Artificial Intelligence",
    "Machine Learning",
    "Data Science",
    "Financial Technology (FinTech)",
    "Data Analytics"
  ],
  profilePhotoPath: "/images/profile/profile-photo.jpeg",
  resumePdfPath: "/resume/resume.pdf"
};

export const educationData: EducationItem[] = [
  {
    id: "edu-1",
    institution: "Mar Athanasius College of Engineering, Kothamangalam",
    degree: "Bachelor of Technology (B.Tech)",
    field: "Computer Science & Engineering (Data Science)",
    cgpa: "7.8",
    expectedGraduation: "2027",
    location: "Kothamangalam, Kerala"
  },
  {
    id: "edu-2",
    institution: "EMEA Higher Secondary School, Kondotty",
    degree: "Higher Secondary Education (Class XII)",
    percentage: "98.8%",
    location: "Kondotty, Kerala"
  },
  {
    id: "edu-3",
    institution: "VHM Higher Secondary School, Morayur",
    degree: "Secondary School Education (Class X)",
    percentage: "98%",
    location: "Morayur, Kerala"
  }
];

export const projectsData: ProjectItem[] = [
  {
    id: "proj-1",
    slug: "global-money-flow-intelligence-platform",
    title: "Global Money Flow Intelligence Platform",
    description: "System designed for tracking, analyzing, and visualizing international financial transaction patterns and cross-border money flows.",
    features: [
      "Real-time transaction tracking and metrics",
      "Cross-border money flow analytics",
      "Financial pattern visualization and reporting"
    ],
    techStack: ["Python", "Data Analytics", "FinTech Architecture"],
    myContribution: "Designed backend data processing workflows and implemented financial transaction analytics logic.",
    githubUrl: "https://github.com/mohammedsalihk03"
  },
  {
    id: "proj-2",
    slug: "ai-driver-drowsiness-detection",
    title: "AI-Based Driver Drowsiness Detection System",
    description: "Computer vision system detecting real-time driver fatigue and drowsiness through facial landmark tracking and alert mechanisms.",
    features: [
      "Real-time facial landmark detection",
      "Eye Aspect Ratio (EAR) drowsiness calculation",
      "Automated audio and visual safety alerts"
    ],
    techStack: ["Python", "Artificial Intelligence", "Computer Vision", "OpenCV"],
    myContribution: "Integrated AI computer vision pipeline and calibrated detection thresholds for frame processing.",
    githubUrl: "https://github.com/mohammedsalihk03"
  },
  {
    id: "proj-3",
    slug: "crimex-case-management",
    title: "Criminal Case Management System (CRIMEX)",
    description: "Comprehensive database and management application for logging, querying, and updating criminal investigation case records.",
    features: [
      "Secure criminal case record logging",
      "Investigation history and update tracking",
      "Role-based data access controls"
    ],
    techStack: ["Java", "MySQL", "Database Management Systems (DBMS)"],
    myContribution: "Designed relational database schemas, structured SQL queries, and implemented core Java business logic.",
    githubUrl: "https://github.com/mohammedsalihk03"
  },
  {
    id: "proj-4",
    slug: "ai-traffic-light-control",
    title: "AI Traffic Light Control System",
    description: "Intelligent traffic management system dynamically adjusting signal timing based on real-time vehicle density assessment.",
    features: [
      "Real-time vehicle density estimation",
      "Adaptive signal duration adjustment",
      "Traffic congestion reduction optimization"
    ],
    techStack: ["Python", "Artificial Intelligence", "Computer Vision"],
    myContribution: "Developed vehicle count algorithms and dynamic signal switching decision logic.",
    githubUrl: "https://github.com/mohammedsalihk03"
  },
  {
    id: "proj-5",
    slug: "kiliboard-android-keyboard",
    title: "KiliBoard Android Keyboard Game",
    description: "Interactive Android keyboard utility and game designed for custom layout typing engagement.",
    features: [
      "Custom Android input method keyboard",
      "Interactive typing challenge mechanics",
      "Lightweight, responsive mobile interface"
    ],
    techStack: ["Java", "Android Development", "OOP"],
    myContribution: "Implemented custom Android Input Method Service keyboard layout and game state management.",
    githubUrl: "https://github.com/mohammedsalihk03"
  }
];

export const certificationsData: CertificationItem[] = [
  {
    id: "cert-1",
    title: "100 Days of Code: The Complete Python Pro Bootcamp",
    issuer: "Udemy"
  },
  {
    id: "cert-2",
    title: "Generative AI",
    issuer: "International Centre for Free and Open Source Solutions (ICFOSS)"
  },
  {
    id: "cert-3",
    title: "Cybersecurity Workshop",
    issuer: "TECHMAGHI, IIT Delhi"
  },
  {
    id: "cert-4",
    title: "GenAI Powered Data Analytics Job Simulation",
    issuer: "Tata Group"
  },
  {
    id: "cert-5",
    title: "NASA International Space Apps Challenge",
    issuer: "Participant"
  },
  {
    id: "cert-6",
    title: "Technoverse Hackathon 2026 (Cognizant)",
    issuer: "Participant"
  },
  {
    id: "cert-7",
    title: "Diplomacy and Expertise",
    issuer: "MACE Model United Nations (MUN)"
  }
];

export const hackathonsData: HackathonItem[] = [
  {
    id: "hack-1",
    title: "NASA International Space Apps Challenge 2023",
    organizer: "NASA",
    year: "2023",
    role: "Participant"
  },
  {
    id: "hack-2",
    title: "Technoverse Hackathon 2026 (Cognizant)",
    organizer: "Cognizant",
    year: "2026",
    role: "Participant"
  }
];

export const leadershipData: LeadershipItem[] = [
  {
    id: "lead-1",
    role: "Media Head",
    organization: "TELEI",
    responsibilities: [
      "Led media campaigns for technical events.",
      "Managed promotional content creation.",
      "Planned branding strategies.",
      "Increased event visibility through digital outreach."
    ]
  },
  {
    id: "lead-2",
    role: "Sponsorship Team Head",
    organization: "ENCIDE",
    responsibilities: [
      "Coordinated sponsorship activities.",
      "Communicated with industry partners.",
      "Supported technical event execution."
    ]
  },
  {
    id: "lead-3",
    role: "Media Team Member",
    organization: "Google Developers Group on Campus (GDG on Campus), MACE",
    responsibilities: [
      "Designed promotional content.",
      "Supported event branding.",
      "Assisted in community engagement."
    ]
  }
];

export const skillsData: SkillCategory[] = [
  {
    category: "Programming Languages",
    skills: ["Python", "C++", "Java (Basic)"]
  },
  {
    category: "Web Technologies",
    skills: ["HTML"]
  },
  {
    category: "Databases",
    skills: ["MySQL", "MongoDB", "Firebase"]
  },
  {
    category: "Developer Tools & Platforms",
    skills: ["Git", "GitHub", "VS Code", "Figma"]
  },
  {
    category: "APIs & Services",
    skills: ["Google Maps API"]
  },
  {
    category: "Core Computer Science",
    skills: ["Data Structures", "Database Management Systems (DBMS)", "Object-Oriented Programming (OOP)", "Problem Solving"]
  },
  {
    category: "AI & Emerging Technologies",
    skills: ["Artificial Intelligence", "Generative AI"]
  },
  {
    category: "Languages",
    skills: ["English", "Malayalam"]
  }
];
