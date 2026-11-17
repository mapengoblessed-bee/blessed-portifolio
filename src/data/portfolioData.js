export const personalInfo = {
  fullName: "Mapengo Blessed",
  preferredName: "Mapengo",
  title: "Informatics Student & Aspiring Software Developer",
  subheading: "Preparing for Year 3 Industrial Attachment (2026/2027)",
  location: "Gweru, Zimbabwe",
  relocationWilling: true, // Willing to relocate for industrial attachment
  
  // Professional Bio
  shortIntro: "Informatics undergraduate student at the National University of Science and Technology (NUST), Zimbabwe. Passionate about data analytics, software development, network engineering, and architecting practical digital solutions that address African socio-economic challenges.",
  
  fullBio: [
    "I am currently an Informatics undergraduate student at the National University of Science and Technology (NUST) in Bulawayo, Zimbabwe, actively preparing for my Year 3 Industrial Attachment. My academic coursework and independent projects have focused on full-stack software development, relational database modeling, and software engineering principles.",
    "Driven by curiosity and a commitment to technological development across Southern Africa, I have developed functional prototypes ranging from community-based financial systems (MukoLend) to civic traffic monitoring dashboards (BSTMS) and logistics optimization models.",
    "I am actively seeking an industrial attachment opportunity where I can contribute to production systems, collaborate with experienced software engineers, expand my technical depth, and deliver measurable value to an innovative organization."
  ],

  // Attachment status banner
  attachmentStatus: {
    isAvailable: true,
    targetPeriod: "Year 3 Industrial Attachment (8 to 12 Months)",
    academicYear: "Year 2",
    institution: "National University of Science and Technology (NUST), Zimbabwe",
    faculty: "Faculty of Applied Science",
    department: "Department of Informatics"
  },

  // Contact links
  contact: {
    email: "mapengoblessed@gmail.com",
    phone: "+263784709833",
    locationCity: "Bulawayo, Zimbabwe",
    github: "https://github.com/mapengoblessed-bee",
    linkedin: "https://linkedin.com/in/mapengoblessed",
    twitter: "https://twitter.com/mapengoblessed",
    cvFileName: "cv.pdf",
    cvDownloadPath: "/cv.pdf"
  },

  // Profile image settings
  avatar: {
    useCustomImage: true, // Set to true when you add profile.jpg into /public/
    imageSrc: "/profile.jpeg",
    fallbackInitials: "DEV",
    tagline: "Informatics @ NUST"
  }
};

/**
 * ============================================================================
 * TECHNICAL SKILLS
 * ============================================================================
 * Categorized technical skills reflecting honest academic and project exposure.
 * Levels: "Proficient", "Familiar / In Progress", "Academic Exposure"
 */
export const skillCategories = [
  {
    id: "programming",
    title: "Programming Languages",
    description: "Core languages utilized in coursework, algorithms, and applications.",
    skills: [
      {
        name: "Python",
        level: "Proficient",
        experience: "Academic coursework, Flask backend development, scripts & data structures.",
        isHighlight: true
      },
      {
        name: "Java",
        level: "Proficient",
        experience: "Object-Oriented Programming (OOP), design patterns, and desktop/enterprise systems.",
        isHighlight: true
      },
      {
        name: "JavaScript (ES6+)",
        level: "Proficient",
        experience: "Modern DOM manipulation, asynchronous programming, APIs, and React fundamentals.",
        isHighlight: true
      }
    ]
  },
  {
    id: "web-dev",
    title: "Web Development",
    description: "Frontend and backend frameworks for modern responsive web applications.",
    skills: [
      {
        name: "Flask (Python)",
        level: "Proficient",
        experience: "RESTful routing, Jinja2 templates, ORM integration, session & auth handling.",
        isHighlight: true
      },
      {
        name: "HTML5 & CSS3",
        level: "Proficient",
        experience: "Semantic markup, modern CSS Grid/Flexbox, responsive design, accessibility.",
        isHighlight: true
      },
      {
        name: "React",
        level: "In Progress",
        experience: "Functional components, state hooks, responsive single-page applications.",
        isHighlight: false
      }
    ]
  },
  {
    id: "databases",
    title: "Databases & Storage",
    description: "Relational database modeling, query writing, and data integrity.",
    skills: [
      {
        name: "SQLite",
        level: "Proficient",
        experience: "Embedded relational database used in rapid prototyping, Flask apps, and local testing.",
        isHighlight: true
      },
      {
        name: "SQL (Structured Query Language)",
        level: "Proficient",
        experience: "DDL/DML operations, complex joins, subqueries, normalization (1NF-3NF), indexing.",
        isHighlight: true
      },
      {
        name: "PostgreSQL",
        level: "In Progress / Learning",
        experience: "Currently expanding knowledge of PostgreSQL for production cloud deployment.",
        isHighlight: false,
        isInProgress: true
      }
    ]
  },
  {
    id: "tools",
    title: "Developer Tools & Version Control",
    description: "Daily developer tooling and collaborative workflow environments.",
    skills: [
      {
        name: "Git",
        level: "Proficient",
        experience: "Branching strategies, staging, commits, merge conflict resolution, commit hygiene.",
        isHighlight: true
      },
      {
        name: "GitHub",
        level: "Proficient",
        experience: "Repository hosting, pull requests, project tracking, issue management.",
        isHighlight: true
      },
      {
        name: "VS Code",
        level: "Proficient",
        experience: "Primary IDE configured with linting, debugging, GitLens, and live development tools.",
        isHighlight: true
      }
    ]
  },
  {
    id: "other",
    title: "Methodologies & System Analysis",
    description: "Core informatics disciplines, system modeling, and engineering practices.",
    skills: [
      {
        name: "System Analysis & Design",
        level: "Proficient",
        experience: "UML modeling (Class, Use Case, Sequence), Data Flow Diagrams (DFDs), Entity-Relationship (ERD) diagrams.",
        isHighlight: true
      },
      {
        name: "Software Engineering",
        level: "Proficient",
        experience: "SDLC principles, Agile basics, requirements engineering, architectural patterns (MVC).",
        isHighlight: true
      },
      {
        name: "Data Analysis",
        level: "Foundational",
        experience: "Simulated dataset analysis, descriptive metrics, structured data formatting.",
        isHighlight: false
      }
    ]
  }
];

/**
 * ============================================================================
 * FEATURED PROJECTS
 * ============================================================================
 * Key projects demonstrating full-stack engineering, civic tech, algorithms,
 * and web applications.
 */
export const projectsData = [
  {
    id: "mukolend",
    title: "MukoLend",
    subtitle: "Community-Based Peer-to-Peer Micro-Lending Platform",
    category: "FinTech Prototype",
    statusBadge: "Academic Prototype",
    featured: true,
    isPrototype: true,
    disclaimer: "Academic prototype project with simulated transactions. Designed as a conceptual demonstration and not a licensed financial deposit-taking service.",
    overview: "A Zimbabwean community-focused peer-to-peer lending web platform engineered around trusted social groups and informal rotating savings circles (Mukando / Round-Robin). Built to address financial exclusion through transparent digital accounting.",
    problemStatement: "Informal savings and lending groups in Zimbabwean communities frequently face accounting discrepancies, lack of verifiable transaction histories, and complex tracking of rotational disbursements.",
    solution: "MukoLend provides an intuitive interface for group administrators and members to simulate loan requests, peer verifications, repayment schedules, and automated balance reconciliation.",
    keyFeatures: [
      "Simulated User Accounts & Identity Verification",
      "Community Savings Group Creation & Management",
      "Peer-to-Peer Loan Request & Approval Flow",
      "Automated Repayment Tracking & Balance Ledgers",
      "Simulated Transaction History with Exportable Summaries"
    ],
    techStack: ["Python (Flask)", "SQLite", "JavaScript", "HTML5", "CSS3", "Responsive UI"],
    githubUrl: "mukolend",
    liveUrl: "[MUKOLEND RENDER URL]",
    mockupType: "mukolend",
    colorAccent: "#06b6d4" // Cyan
  },
  {
    id: "bstms",
    title: "Bulawayo Smart Traffic Monitoring System (BSTMS)",
    subtitle: "Civic Web Dashboard for Urban Traffic Flow Analysis",
    category: "Civic Tech / IoT Dashboard",
    statusBadge: "Completed Prototype",
    featured: true,
    isPrototype: true,
    disclaimer: "Powered by simulated telemetry data modeled after peak and off-peak congestion patterns on 4 key Bulawayo arterial roads.",
    overview: "A web-based traffic monitoring dashboard that visualizes simulated vehicle density, average speeds, and congestion alert states across four major Bulawayo road corridors.",
    problemStatement: "Urban commuters and municipal logistics operators in Bulawayo lack real-time visibility into bottleneck zones during morning and evening rush hours along high-density routes.",
    solution: "BSTMS provides traffic management personnel and road users with live congestion indexes, bottleneck indicators, speed advisories, and historical trend comparisons.",
    keyFeatures: [
      "Simulated Monitoring of 4 Key Bulawayo Arteries (JMN Nkomo St, Khami Rd, Plumtree Rd, Luveve Rd)",
      "Dynamic Congestion Index (Normal, Moderate, Heavy, Bottleneck)",
      "Interactive Speed Trend & Vehicle Density Metrics",
      "Automated Incident Advisory & Alternate Route Flags",
      "Clean, High-Contrast Night/Day Operations UI"
    ],
    techStack: ["JavaScript (ES6+)", "Flask / Python API", "HTML5/CSS3", "CSS Grid", "Chart Visualizations"],
    githubUrl: "BSTMS",
    liveUrl: "[BSTMS RENDER URL]",
    mockupType: "bstms",
    colorAccent: "#3b82f6" // Electric Blue
  },
  {
    id: "logistics-route",
    title: "Logistics Route Optimisation System",
    subtitle: "Intra-City Delivery Dispatch & Efficiency Optimizer",
    category: "Algorithms & Operations",
    statusBadge: "Algorithmic Prototype",
    featured: true,
    isPrototype: true,
    disclaimer: "Tested against simulated regional multi-stop delivery matrices and road coordinate datasets.",
    overview: "An optimization system designed to improve delivery routing, reduce fleet fuel consumption, and cut transit delays through algorithmic dispatch sequencing.",
    problemStatement: "Last-mile courier and delivery distribution in urban centers suffer from arbitrary stop sequencing, resulting in excessive mileage, elevated fuel overheads, and missed delivery windows.",
    solution: "The system implements heuristic shortest-path and matrix evaluation algorithms to reorder multi-stop delivery itineraries for optimal vehicle routing.",
    optimisationDetails: {
      method: "Heuristic Travelling Salesperson Problem (TSP) approximation & distance matrix minimization.",
      inputs: "Stop coordinates, consignment weights, vehicle capacity limits, delivery time windows.",
      outputs: "Sequenced dispatch itinerary, turn-by-turn waypoint ordering, projected fuel savings.",
      results: "Demonstrated simulated reduction of ~18-24% in total travel distance compared to unoptimized sequences."
    },
    keyFeatures: [
      "Multi-Stop Route Sequence Evaluation",
      "Delivery Constraint & Priority Sorting",
      "Interactive Route Map & Stop Timeline Display",
      "Comparative Fuel Consumption & Distance Analytics",
      "Exportable Dispatch Manifest for Drivers"
    ],
    techStack: ["Python", "Algorithmic Analysis", "Data Structures", "JSON API", "Interactive Frontend UI"],
    githubUrl: "logistics-route-optimisation",
    liveUrl: "[LOGISTICS DEMO URL]",
    mockupType: "logistics",
    colorAccent: "#10b981" // Emerald
  },
  {
    id: "raindrop-tech",
    title: "Raindrop Technologies",
    subtitle: "Enterprise Technology Company Portal & Client Management",
    category: "Full-Stack Web Application",
    statusBadge: "Full-Stack Web App",
    featured: true,
    isPrototype: false,
    disclaimer: "Demonstrating full-stack engineering, relational database logging, and responsive enterprise design.",
    overview: "A production-grade corporate website for Raindrop Technologies, showcasing enterprise software services, interactive quotation requests, and a secure backend lead inquiry system.",
    problemStatement: "Small-to-medium technology enterprises need a professional, fast-loading digital touchpoint that captures prospective client inquiries reliably into a structured database.",
    solution: "Engineered a responsive web application powered by Flask and SQLite with form validation, sanitized input storage, service catalogs, and mobile-optimized interfaces.",
    keyFeatures: [
      "Dynamic Enterprise Service Showcase",
      "Client Inquiry & Project Quote Request Pipeline",
      "Relational Database Integration for Inbound Leads",
      "High-Performance Responsive Layout for Mobile & Desktop",
      "Accessible Design Compliant with Modern UI Standards"
    ],
    techStack: ["Python (Flask)", "SQLite / SQL", "HTML5 & CSS3", "JavaScript", "Responsive Design"],
    githubUrl: "raindrop-technologies",
    liveUrl: "[RAINDROP LIVE URL]",
    mockupType: "raindrop",
    colorAccent: "#8b5cf6" // Violet
  }
];

/**
 * ============================================================================
 * EDUCATION & ACADEMIC QUALIFICATIONS
 * ============================================================================
 * Authentic educational chronology. Placeholders for school names, years,
 * and examination grades until confirmed by the student.
 */
export const educationData = [
  {
    id: "nust",
    institution: "National University of Science and Technology (NUST)",
    location: "Bulawayo, Zimbabwe",
    qualification: "Bachelor of Science Honours Degree in Informatics",
    period: "2026/27 — Present ",
    currentStage: "Preparing for Year 3 Industrial Attachment",
    isCurrent: true,
    badge: "Current Degree",
    description: "Rigorous undergraduate program combining computer science, systems analysis, software engineering, database technologies, and information systems management.",
    keyModules: [
      "Object-Oriented Programming (Java & Python)",
      "Database Systems & Relational Modeling (SQL, SQLite)",
      "Data Visualization",
      "Data Analysis & Simulation",
      "Application Development",
      "Data Communication & Computer Networks",
      "Applied Statistics ",
      "Discrete Mathematics"
    ],
    academicHighlights: [
      "Strong academic orientation toward practical software development and database design.",
      "Hands-on project work developing prototypes for real-world scenarios.",
      "Eligible and actively preparing for Year 3 Industrial Attachment placement."
    ]
  },
  {
    id: "a-level",
    institution: "Nhedziwa High School, Chimanimani",
    location: "Zimbabwe",
    qualification: "Zimbabwe Advanced Level (A-Level) Certificate",
    period: "2023",
    currentStage: "Completed",
    isCurrent: false,
    badge: "Advanced Level",
    isPlaceholder: true,
    examinationBoard: "ZIMSEC",
    description: "Advanced secondary education focusing on analytical, mathematical, and scientific disciplines.",
    subjectsAndGrades: [
      { subject: "Pure Mathematics", grade: "A" },
      { subject: "Biology", grade: "A" },
      { subject: "Crop Science", grade: "A" }
    ],
  },
  {
    id: "o-level",
    institution: "Nhedziwa High School, Chimanimani",
    location: "Zimbabwe",
    qualification: "Zimbabwe Ordinary Level (O-Level) Certificate",
    period: "2021",
    currentStage: "Completed",
    isCurrent: false,
    badge: "Ordinary Level",
    isPlaceholder: true,
    examinationBoard: "ZIMSEC",
    description: "Foundational secondary school qualification covering sciences, mathematics, and humanities.",
    subjectsAndGrades: [
      { subject: "English Language", grade: "B" },
      { subject: "Mathematics", grade: "A" },
      { subject: "Combined Science", grade: "B" },
      { subject: "Geography", grade: "A" },
      { subject: "History", grade: "A" },
      { subject: "Biology", grade: "B" },
      { subject: "Agriculture", grade: "B" }
    ],
  }
];

/**
 * ============================================================================
 * CERTIFICATIONS
 * ============================================================================
 * Certified courses, technical credentials, and bootcamps.
 * Note: These are structured placeholders. Do NOT invent certificates.
 */
export const certificationsData = [
  {
    id: "cert-1",
    name: "[INSERT CERTIFICATE NAME — e.g., Python Programming Essentials]",
    issuer: "[INSERT ISSUING BODY — e.g., Cisco Networking Academy / Coursera]",
    completionDate: "[INSERT MONTH, YEAR]",
    credentialId: "[CREDENTIAL ID OR VERIFICATION CODE]",
    verificationUrl: "[INSERT VERIFICATION URL]",
    status: "Placeholder — Ready for Actual Credential",
    isPlaceholder: true,
    category: "Programming"
  },
  {
    id: "cert-2",
    name: "[INSERT CERTIFICATE NAME — e.g., Relational Database & SQL Fundamentals]",
    issuer: "[INSERT ISSUING BODY — e.g., freeCodeCamp / Sololearn / IBM]",
    completionDate: "[INSERT MONTH, YEAR]",
    credentialId: "[CREDENTIAL ID OR VERIFICATION CODE]",
    verificationUrl: "[INSERT VERIFICATION URL]",
    status: "Placeholder — Ready for Actual Credential",
    isPlaceholder: true,
    category: "Databases"
  },
  {
    id: "cert-3",
    name: "[INSERT CERTIFICATE NAME — e.g., Version Control with Git & GitHub]",
    issuer: "[INSERT ISSUING BODY — e.g., LinkedIn Learning / Coursera]",
    completionDate: "[INSERT MONTH, YEAR]",
    credentialId: "[CREDENTIAL ID OR VERIFICATION CODE]",
    verificationUrl: "[INSERT VERIFICATION URL]",
    status: "Placeholder — Ready for Actual Credential",
    isPlaceholder: true,
    category: "Developer Tools"
  }
];

/**
 * ============================================================================
 * ACHIEVEMENTS & EXTRACURRICULAR RECOGNITION
 * ============================================================================
 * Genuine academic, technical, hackathon, and campus achievements.
 */
export const achievementsData = [
  {
    id: "achieve-1",
    title: "NUST Student Innovation, Hackathon Participant]",
    date: "2026",
    category: "Hackathon & Innovation",
    description: "Collaborated on designing and developing a software prototype solving community challenges under time constraints.",
    isPlaceholder: true
  },
  {
    id: "achieve-2",
    title: "Academic Excellence Award — Object-Oriented Programming & Database Systems",
    date: "2026",
    category: "Academic",
    description: "Recognized for high-standard coursework in Database Systems and Object-Oriented Programming.",
    isPlaceholder: true
  },
  {
    id: "achieve-3",
    title: "Tech Community Engagement — Peer Mentorship / Student Society",
    date: "2026",
    category: "Community & Leadership",
    description: "Active member of campus computing society, participating in collaborative coding sessions and technology workshops.",
    isPlaceholder: false
  }
];

/**
 * ============================================================================
 * NAVIGATION LINKS
 * ============================================================================
 */
export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Education", href: "#education" },
  //{ label: "Certifications", href: "#certifications" },
  { label: "Achievements", href: "#achievements" },
  { label: "Contact", href: "#contact" }
];
