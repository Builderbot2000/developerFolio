/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Kevin Tang",
  title: "Hi, I'm Kevin",
  subTitle: emoji(
    "A passionate Full Stack Software Developer with an interest in AI and experience in building web services on the cloud."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1ofFdKF_mqscH8WvXkSObnVvC9kK7Ldlu/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/Builderbot2000",
  linkedin: "https://www.linkedin.com/in/kevin-tang-682014164/",
  gmail: "kevintang1118@outlook.com",
  gitlab: "https://gitlab.com/Builderbot2000",
  facebook: "https://www.facebook.com/kevin.tang.5817300/",
  medium: "https://medium.com/@kevintang1118",
  stackoverflow: "https://stackoverflow.com/users/10097048/kevin-tang",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I Do",
  subTitle:
    "FULL-STACK SOFTWARE ENGINEER WITH END-TO-END PRODUCT OWNERSHIP EXPERIENCE",
  skills: [
    emoji(
      "⚡ Own features across the full software lifecycle—from requirements and system design to implementation, testing, deployment, and long-term maintenance"
    ),
    emoji(
      "⚡ Design and build highly interactive, accessible front-end interfaces using React, Next.js, Angular, and modern CSS frameworks"
    ),
    emoji(
      "⚡ Architect and implement scalable back-end services and RESTful APIs using Node.js, Express, Spring Boot, ASP.NET, and FastAPI"
    ),
    emoji(
      "⚡ Develop data-driven and AI-powered systems, including ML pipelines, ETL workflows, and retrieval-augmented generation (RAG) solutions"
    ),
    emoji(
      "⚡ Deploy, monitor, and optimize cloud-native applications on AWS, Azure, and GCP using containerization, CI/CD pipelines, and cost-efficient infrastructure"
    ),
    emoji(
      "⚡ Collaborate in Agile teams, contributing to product strategy, technical leadership, code reviews, and production support"
    )
  ],
  softwareSkills: [
    // Core Web Fundamentals
    {
      skillName: "HTML5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "CSS3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "SCSS / Sass",
      fontAwesomeClassname: "fab fa-sass"
    },

    // Languages
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js-square"
    },
    {
      skillName: "TypeScript",
      fontAwesomeClassname: "fas fa-code"
    },
    {
      skillName: "Python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "Java",
      fontAwesomeClassname: "fab fa-java"
    },
    {
      skillName: "C / C++",
      fontAwesomeClassname: "fas fa-microchip"
    },
    {
      skillName: "C# / .NET",
      fontAwesomeClassname: "fas fa-terminal"
    },
    {
      skillName: "Ruby",
      fontAwesomeClassname: "fas fa-gem"
    },

    // Frontend Frameworks & State
    {
      skillName: "React / Next.js",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "Angular",
      fontAwesomeClassname: "fab fa-angular"
    },
    {
      skillName: "Redux",
      fontAwesomeClassname: "fas fa-layer-group"
    },
    {
      skillName: "UI/UX",
      fontAwesomeClassname: "fas fa-pencil-ruler"
    },

    // Backend & APIs
    {
      skillName: "Node.js",
      fontAwesomeClassname: "fab fa-node-js"
    },
    {
      skillName: "REST APIs / HTTP",
      fontAwesomeClassname: "fas fa-network-wired"
    },
    {
      skillName: "SQL",
      fontAwesomeClassname: "fas fa-database"
    },

    // AI / Data
    {
      skillName: "AI/ML",
      fontAwesomeClassname: "fas fa-brain"
    },

    // Cloud & DevOps
    {
      skillName: "Docker",
      fontAwesomeClassname: "fab fa-docker"
    },
    {
      skillName: "AWS",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "Azure",
      fontAwesomeClassname: "fab fa-microsoft"
    },
    {
      skillName: "Google Cloud Platform",
      fontAwesomeClassname: "fab fa-google"
    },
    {
      skillName: "CI/CD",
      fontAwesomeClassname: "fas fa-sync-alt"
    },

    // Tooling & Workflow
    {
      skillName: "Git",
      fontAwesomeClassname: "fab fa-git"
    },
    {
      skillName: "Linux",
      fontAwesomeClassname: "fab fa-linux"
    },
    {
      skillName: "Agile/Scrum",
      fontAwesomeClassname: "fas fa-project-diagram"
    }
  ],
  display: true // Set false to hide this section
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Simon Fraser University",
      logo: require("./assets/images/sfuLogo.png"),
      subHeader: "Master of Science in Big Data",
      duration: "September 2024 - April 2026"
    },
    {
      schoolName: "Simon Fraser University",
      logo: require("./assets/images/sfuLogo.png"),
      subHeader: "Bachelor of Science in Computer Science",
      duration: "September 2018 - April 2023",
      descBullets: ["Dean’s Honour Roll (2022)"]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, // Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend / UI Engineering",
      progressPercentage: "65%"
      // React, Next.js, Angular, Tailwind, Redux, UI/UX, HTML, CSS, SCSS
    },
    {
      Stack: "Backend / Systems",
      progressPercentage: "85%"
      // Node.js, Express, Spring Boot, ASP.NET, FastAPI, REST, PostgreSQL, MySQL, MongoDB, Redis
    },
    {
      Stack: "Programming & CS Foundations",
      progressPercentage: "70%"
      // Python, Java, C#, JavaScript, TypeScript, C/C++, Go, Ruby, SQL
    },
    {
      Stack: "AI / Machine Learning",
      progressPercentage: "80%"
      // PyTorch, Scikit-Learn, RAG, LangChain, ETL, OpenAI, HuggingFace, R
    },
    {
      Stack: "Cloud / DevOps",
      progressPercentage: "75%"
      // AWS, Azure, GCP, Docker, CI/CD, GitHub Actions, Linux
    }
  ],
  displayCodersrank: false
};

// Work experience section

const workExperiences = {
  display: true, // Set it to true to show workExperiences Section
  experience: [
    {
      role: "Software Developer",
      company: "Cyberium Group",
      companylogo: require("./assets/images/cyberiumLogo.png"),
      date: "April 2025 – Present",
      desc: "Product-focused software developer and technical lead contributing across multiple production systems, spanning full-stack development, AI/ML research, and cloud infrastructure.",
      descBullets: [
        "Served as product team tech lead across three concurrent product streams, collaborating closely with engineers, designers, and stakeholders",
        "Scaled a blockchain-based Chrome extension from ~1,000 to over 90,000 daily active users through performance optimization and feature development",
        "Led development of an employee training platform integrating Unity and retrieval-augmented generative AI (RAG), establishing it as the company’s next flagship product",
        "Oversaw operations and reliability of the company’s flagship software product supporting 50–90 corporate clients",
        "Headed AI/ML research initiatives for SR&ED claims, authoring and presenting technical research reports to leadership"
      ]
    },
    {
      role: "Software Developer (Volunteer)",
      company: "Sikh Research Institute",
      companylogo: require("./assets/images/sikhriLogo.png"),
      date: "September 2024 – April 2025",
      desc: "Volunteer software developer contributing to data accessibility and archival infrastructure for large-scale cultural research initiatives.",
      descBullets: [
        "Configured and deployed an Omeka CMS to host and provide public access to over 10,000 archival records",
        "Designed and implemented an ETL-style data pipeline capable of processing up to 500 records per batch",
        "Reduced manual data entry time by approximately 75% through automation and workflow optimization",
        "Worked with JavaScript, TypeScript, Python, Next.js, Redux, and Git in a remote, collaborative environment"
      ]
    },
    {
      role: "Software Tester",
      company: "Gatekeeper Systems",
      companylogo: require("./assets/images/gatekeeperLogo.png"),
      date: "May 2021 – December 2021",
      desc: "Quality assurance and firmware testing specialist contributing to the reliability of embedded and networked systems.",
      descBullets: [
        "Executed over 100 firmware test cases, identifying more than 60 defects prior to production release",
        "Performed network performance testing on web services, uncovering multiple critical operational issues",
        "Served as Scrum Master, improving team communication, morale, and sprint execution",
        "Worked with Python, Jira, Git, and embedded systems testing workflows"
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/saayaHealthLogo.webp"),
      projectName: "Saayahealth",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://saayahealth.com/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/nextuLogo.webp"),
      projectName: "Nextu",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://nextu.se/"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Google Code-In Finalist",
      subtitle:
        "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
      image: require("./assets/images/codeInLogo.webp"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
        },
        {
          name: "Award Letter",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        },
        {
          name: "Google Code-in Blog",
          url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        }
      ]
    },
    {
      title: "Google Assistant Action",
      subtitle:
        "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
      image: require("./assets/images/googleAssistantLogo.webp"),
      imageAlt: "Google Assistant Action Logo",
      footerLink: [
        {
          name: "View Google Assistant Action",
          url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
        }
      ]
    },

    {
      title: "PWA Web App Developer",
      subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
      image: require("./assets/images/pwaLogo.webp"),
      imageAlt: "PWA Logo",
      footerLink: [
        {name: "Certification", url: ""},
        {
          name: "Final Project",
          url: "https://pakistan-olx-1.firebaseapp.com/"
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "(+1) 778-688-2280",
  email_address: "kevintang1118@outlook.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
