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
  username: "Khushi Sidana",
  title: "Hello, I'm Khushi!",
  subTitle: emoji(
    "An aspiring  Software Enginee with a strong foundation in data structures and algorithms, primarily in Python. Proficient in crafting applications with React, JavaScript, and TypeScript, I am passionate about the seamless integration of software engineering with data science principles. Skilled in cloud technologies, including AWS, Docker, and Kubernetes, I aim to deliver robust and scalable solutions."
  ),
  resumeLink:
    "https://github.com/Khushisidanaa/Resume/blob/main/Khushi%20Sidana%20-%20Resume.pdf", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/Khushisidanaa",
  linkedin: "https://www.linkedin.com/in/khushisidana/",
  gmail: "khushisidanaa@gmail.com",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "ASPIRING SOFTWARE ENGINEER ",
  skills: [
    emoji(
      "Expertise in Python, C++, and JavaScript, with a strong foundation in full-stack development and machine learning algorithms."
    ),
    emoji(
      "Proficient in cloud technologies and services such as AWS, enhancing project scalability and performance."
    ),
    emoji(
      "Skilled in integrating third-party services and APIs to enrich web and mobile applications, ensuring dynamic and user-friendly interfaces."
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "sass",
      fontAwesomeClassname: "fab fa-sass"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "swift",
      fontAwesomeClassname: "fab fa-swift"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "University of Illinois Urbana-Champaign",
      logo: require("./assets/images/uiuc-logo.jpg"),
      subHeader: "Master in Computer Science",
      duration: "August 2023 - December 2024",
      grade: "GPA: 4.0 / 4.0",
      desc: "Performed as a Graduate Teaching Assistant for courses in Data Science and a Project Mentor for Women in Computer Science (WCS).",
      descBullets: [
        "Relevant Coursework:  Database Systems (SQL), Cloud Computing, Artificial Intelligence (Python) , Machine Learning, End to End Data Science "
      ]
    },
    {
      schoolName: "Narsee Monjee Institute of Management Studies",
      logo: require("./assets/images/nmims-logo.jpeg"),
      subHeader:
        "Bachelor of Science in Computer Science and Business Systems ",
      duration: "Auguest 2019 - May 2023",
      grade: "GPA: 3.94 / 4.0",
      desc: "Ranked 2nd in entire batch of 180 students.  Recognized on the Dean's List for academic excellence. ",
      descBullets: [
        "Relevant Coursework:  Data Structures, Algorithms (C++), Object-oriented Programming, Full Stack Development (ReactJS). Probability and Statistics, Software Engineering, Data Analysis and Visualisation "
      ]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend Development ", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Data Structures and Algorithms",
      progressPercentage: "85%"
    },
    {
      Stack: "Data Science",
      progressPercentage: "85%"
    },
    {
      Stack: "Backend Development ", //Insert stack or technology you have experience in
      progressPercentage: "80%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Machine Learning",
      progressPercentage: "80%"
    },
    {
      Stack: "Cloud Computing ",
      progressPercentage: "70%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Graduate Teaching Assistant ",
      company: "University of Illinois Urbana-Champaign",
      companylogo: require("./assets/images/uiuc-logo.jpg"),
      date: "Jan 2024 – Present",
      desc: "Teaching Assistant for Data Science for Geosciences and Risk Analysis(Statistics) for Geosciences.",
      skills: "Skills - React Native, Node JS, Express JS, MongoDB, ML, SVM"
    },
    {
      role: "Software Engineering Intern",
      company: "Smartech Electronic Systems",
      skills: "Skills - React Native, Node JS, Express JS, MongoDB, ML, SVM",

      companylogo: require("./assets/images/smartech-logo.png"),
      date: "May 2022 – Oct 2018",
      desc: "Directed the development and implementation of a mobile employee attendance application using MERN stack, integrating REST APIs for location tracking and added face identification"
    },
    {
      role: "Software Engineer Intern",
      company: "Aikairos Pvt Ltd",
      companylogo: require("./assets/images/aikairos-logo.jpeg"),
      skills: "Skills - AWS, Cloud Computing, Agile, Docker, Kubernetes, DBMS",
      date: "May 2021 – Aug 2021",
      desc: " Orchestrated real estate maintenance and services digitalization, engineering a cloud-based ecosystem with AWS, IoT monitoring, and AI-driven analytics within Industry 4.0"
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

const githubProjects = {
  title: "Projects",
  subtitle: "SOME FULL STACK AND DATA SCIENCE PROJECTS",
  projects: [
    {
      image: require("./assets/images/ideoorbit.png"),
      projectName: "Idea Orbit",
      projectDesc: "A website to note your ideas with OpenAI integration",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://ideaorbit.vercel.app/"
        },
        {name: "Github", url: "https://github.com/Khushisidanaa/Idea-Orbit-"}
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/beatmetrics-logo.jpeg"),
      projectName: "Beat Metrics ",
      projectDesc:
        "A web application that redefines the music listening experience",
      footerLink: [
        {
          name: "Github ",
          url: "https://github.com/Khushisidanaa/fa23-cs411-team021-bytemysql"
        },
        {
          name: "Documentation ",
          url: " https://github.com/Khushisidanaa/fa23-cs411-team021-bytemysql/tree/main/doc"
        }
      ]
    },
    {
      image: require("./assets/images/aws-logo.png"),
      projectName: "AWS chatbot  ",
      projectDesc:
        "A chatbot to find distance between two cities using AWS Lambda, Lex, DynamoDB",
      footerLink: [
        {
          name: "Demo ",
          url: "https://drive.google.com/file/d/1_f4lcoEj5PxYRu7K0h9xDYU6H4Q-pss1/view?usp=sharing"
        }
      ]
    },
    {
      image: require("./assets/images/yoga-logo.png"),
      projectName: "Yoga Pose Detection and Assesment  ",
      projectDesc:
        "Model to predict the pose being performed and assess it and provide feedback",
      footerLink: [
        {
          name: "Github ",
          url: "https://github.com/Khushisidanaa/Yoga-Pose-Detection-and-Accuracy-Estimation"
        },
        {
          name: "Documentation  ",
          url: "https://drive.google.com/file/d/1imIAYZnTuuG1GBYzwGYvGWrwyYIv01vh/view?usp=sharing"
        }
      ]
    },
    {
      image: require("./assets/images/team-logo.png"),
      projectName: "Team Management Application   ",
      projectDesc:
        "A team management application built using React, Tailwind CSS, Node.js, Express.js, GraphQL, and MongoDB.",
      footerLink: [
        {
          name: "Github ",
          url: "https://github.com/Khushisidanaa/team-management-webapp"
        },
        {
          name: "Demo ",
          url: "https://drive.google.com/file/d/1MXPbdlk3A-O1i7catwRouj3Ant7SBqY3/view?usp=sharing"
        }
      ]
    },
    {
      image: require("./assets/images/mtrack-logo.png"),
      projectName: "m-track  ",
      projectDesc:
        " A one stop application created using MERN stack with added location tracking to reduce fraudulent clock-ins",
      footerLink: [
        {
          name: "Github ",
          url: "https://github.com/Khushisidanaa/Employee-attendance-application"
        },
        {
          name: "Demo ",
          url: "https://github.com/Khushisidanaa/Employee-attendance-application?tab=readme-ov-file#demo"
        }
      ]
    },
    {
      image: require("./assets/images/nmims-app.png"),
      projectName: "Application for NMIMS college   ",
      projectDesc: "An all purpose one stop application for NMIMS college",
      footerLink: [
        {
          name: "Github ",
          url: "https://github.com/Khushisidanaa/Nmims-app"
        },
        {
          name: "Demo ",
          url: "https://www.youtube.com/watch?v=-zD3TYQ4NMQ"
        }
      ]
    },
    {
      image: require("./assets/images/health-fitness.png"),
      projectName: "Health and Fitness Website  ",
      projectDesc:
        "This is a one stop health and fitness application, with the aim of calculating an individual's calorie goal and helping them fulfill it",
      footerLink: [
        {
          name: "Github ",
          url: "https://github.com/Khushisidanaa/Health-and-Fitnessg"
        }
      ]
    },
    {
      image: require("./assets/images/linkedin-logo.png"),
      projectName: "Linkedin Clone  ",
      projectDesc: "Clone of LinkedIn web app",
      footerLink: [
        {
          name: "Github ",
          url: "https://github.com/Khushisidanaa/linkedin-clone"
        }
      ]
    },
    {
      image: require("./assets/images/snake.png"),
      projectName: "Snake Game ",
      projectDesc: "Javascript Snake Game ",
      footerLink: [
        {
          name: "Github ",
          url: "https://github.com/Khushisidanaa/SnakeGame"
        },
        {
          name: "Demo ",
          url: "https://drive.google.com/file/d/1ZsI09ivIVWuQd9694CEFNiWxUaQYhYrG/view"
        }
      ]
    },
    {
      image: require("./assets/images/yoga-logo.png"),
      projectName: "Yoga App ",
      projectDesc: "Self Learning Yoga App ",
      footerLink: [
        {
          name: "Github ",
          url: "https://github.com/Khushisidanaa/YogiCoach"
        }
      ]
    },
    {
      image: require("./assets/images/tours.png"),
      projectName: "Bon Voyage  ",
      projectDesc: "An application for people to view tour plans and book it  ",
      footerLink: [
        {
          name: "Github ",
          url: "https://github.com/Khushisidanaa/Bon-Voyage"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Publications "),
  subtitle: "Link to Publications! ",

  achievementsCards: [
    {
      title: "Prediction of Diabetes using Machine Learning ALgorithms ",
      subtitle:
        "2023 11th International Conference on Internet of Everything, Microwave Engineering, Communication and Networks (IEMECON).",
      image: require("./assets/images/ieee-logo.jpeg"),
      imageAlt: "IEEE",
      footerLink: [
        {
          name: "Link",
          url: "https://ieeexplore.ieee.org/document/10092335"
        },
        {
          name: "Research Gate ",
          url: "https://www.researchgate.net/publication/362705860_Diabetes_Prediction_Using_Machine_Learning_Analytics5"
        }
      ]
    },
    {
      title: "Real Time Yoga Pose Detection using Deep Learning",
      subtitle:
        "Research paper for project that predicts real time yoga pose detection .",
      image: require("./assets/images/researchgate.png"),
      imageAlt: "ResearchGate",
      footerLink: [
        {
          name: "Link",
          url: "https://www.ijeast.com/papers/61-65,%20Tesma0707,IJEAST.pdf"
        },
        {
          name: "Research Gate",
          url: "https://www.researchgate.net/publication/369903426_REAL_TIME_YOGA_POSE_DETECTION_USING_DEEPLEARNING_A_REVIEW"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Extracurriculars",
  subtitle: "Leadership and Extracurricular roles I have held .",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      title: "Project Mentor, UIUC ",
      description:
        "Project Mentor for a group of students for Women In Computer Science (WCS)"
    },
    {
      title: "Charge D'Affaires, Student Council ",
      description:
        "Led general secretaries and coordinated with clubs and committees to ensure smooth functioning.Participated in major decision making as a core member of the Student Council"
    },
    {
      title: "Editorial Club, Co-head ",
      description:
        "Co-Headed the Editorial Club by managing the publication of undergraduate literary journals and composing technology- based pieces. Created new opportunities for the members and helped them achieve the same"
    },
    {
      title: "TechCider Club, Core Member ",
      description:
        "Gave multiple presentations to the STEM unit on concepts such as how to perform image classification using CNN, how to approach a problem and so on"
    },
    {
      title: "Co-ordinator, Rotaract Club ",
      description:
        "Attended and organized various beach cleanups, blood drives along with organizing many events for students of the local orphanage"
    }
  ],
  display: true // Set false to hide this section, defaults to true
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
  display: true // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle: "",

  email_address: "khushisidanaa@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: true // Set true to display this section, defaults to false
};

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  githubProjects,
  techStack,
  workExperiences,
  openSource,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable
};
