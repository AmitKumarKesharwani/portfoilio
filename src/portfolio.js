/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: true, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Amit Kumar Portfolio",
  description:
    "Experienced Web Developer with a demonstrated history of working in the information technology and services industry.",
  og: {
    title: "Amit Kumar Portfolio",
    type: "website",
    url: "#",
  },
};

//Home Page
const greeting = {
  title: "Amit Kumar",
  logo_name: "Amit Kumar",
  subTitle:
    "Experienced Web Developer with a demonstrated history of working in the information technology and services industry.",
  resumeLink:
    "https://drive.google.com/file/d/1bXRknv_h-XI_3CQ3SGPteGODtvEb7YvI/view?usp=sharing",
  githubProfile: "https://github.com/amit-webkul/amit-webkul",
};

const socialMediaLinks = [
  /* Your Social Media Link */
  // github: "https://github.com/amit-webkul/amit-webkul",
  // linkedin: "https://www.linkedin.com/in/maiamitkumar/",
  // gmail: "amitkumarofficial@outlook.in",
  // instagram: "https://www.instagram.com/maiamitkumar/"

  {
    name: "Github",
    link: "https://github.com/amit-webkul/amit-webkul",
    fontAwesomeIcon: "fa-github",
    backgroundColor: "#181717",
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/maiamitkumar/",
    fontAwesomeIcon: "fa-linkedin-in",
    backgroundColor: "#0077B5",
  },
  {
    name: "Gmail",
    link: "mailto:amitkumarofficial@outlook.in",
    fontAwesomeIcon: "fa-google",
    backgroundColor: "#D14836",
  },
  {
    name: "Instagram",
    link: "https://www.instagram.com/maiamitkumar/",
    fontAwesomeIcon: "fa-instagram",
    backgroundColor: "#E4405F",
  },
];

const skills = {
  data: [
    {
      title: "Full Stack Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Building responsive website front end using PHP with Laravel",
        "⚡ Developing web applications using PHP",
        "⚡ Creating application backend in PHP",
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "Sass",
          fontAwesomeClassname: "simple-icons:sass",
          style: {
            color: "#CC6699",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "NPM",
          fontAwesomeClassname: "simple-icons:npm",
          style: {
            color: "#CB3837",
          },
        },
      ],
    },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [
  ],
};

const degrees = {
  degrees: [
    {
      title: "S. P. M. I. T. Kaushambi, Prayagraj",
      subtitle: "B.Tech. in Computer Engineering",
      logo_path: "spmit.png",
      alt_name: "SPMIT Kaushambi",
      duration: "2022 - Present",
      descriptions: [
        "⚡ Studied core software engineering subjects, including Data Structures, Algorithms, Database Management Systems (DBMS), Operating Systems (OS), Computer Architecture (CA), and Artificial Intelligence (AI).",
        "⚡ Completed specialized courses in Deep Learning, Data Science, Cloud Computing, and Full Stack Development, gaining hands-on experience in modern technologies.",
        "⚡ Achieved the Merit cum Means Scholarship, awarded to the top 10% of students for academic excellence.",
        "⚡ Recognized for consistent outstanding performance in academics and received an award from the respected Director of the institution.",
      ],
      website_link: "https://www.shiksha.com/college/sp-memorial-institute-of-technology-allahabad-32780",
    },
    {
      title: "Government Polytechnic Aurai",
      subtitle: "Diploma",
      logo_path: "diploma.png",
      alt_name: "Indiana University Bloomington",
      duration: "2017 - 2020",
      descriptions: [
        "⚡ Gained a strong foundation in core engineering subjects, including Data Structures, Algorithms, Database Management Systems (DBMS), Operating Systems (OS), and Computer Architecture (CA).",
        "⚡ Completed additional coursework in Deep Learning, Data Science, Cloud Computing, and Full Stack Development to enhance technical skills.",
        "⚡ Awarded the Merit cum Means Scholarship, recognizing academic excellence among the top 10% of students.",
        "⚡ Honored by the institution’s Director for consistent outstanding academic performance.",
      ],
      website_link: "https://www.gpaurai.ac.in/",
    },
  ],
};

const certifications = {
  certifications: [],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work and Internship",
  description:
    "I am a passionate PHP Developer with hands-on experience in Laravel and web development. I started my journey as a PHP Developer Intern at Digicoders, where I gained practical knowledge in backend development, database management, and API integration. During my internship, I worked on real-world projects, improving my skills in writing clean code, debugging, and collaborating with senior developers.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work",
      work: true,
      experiences: [
        {
          title: "Software Engineer",
          company: "Webkul Pvt. Ltd.",
          company_url: "https://www.webkul.com/",
          logo_path: "webkul.webp",
          duration: "Dec 2022 - Present",
          location: "H-28, ARV Park, Noida, UP, IN",
          description:
            "As a Software Engineer (PHP - Laravel) at Webkul, I specialize in developing high-quality web applications using PHP and the Laravel framework. My role involves designing, building, and maintaining scalable web solutions while ensuring optimal performance and security. I collaborate with cross-functional teams to implement robust features and enhance user experiences.",
          color: "#000000",
        },
        {
          title: "Junior PHP Developer",
          company: "Nirvaat Internet Private Limited",
          company_url: "https://nirvaat.com/",
          logo_path: "nirvaat.jpg",
          duration: "June 2022 - Dec 2022",
          location: "Noida, Uttar Pradesh, India",
          description:
            "As a Junior PHP Developer at Nirvaat Internet Private Limited, I am responsible for developing and maintaining web applications using PHP and the Laravel framework. My role includes writing clean and efficient code, debugging issues, and collaborating with senior developers to build scalable and high-performing applications. I work closely with the team to implement new features, optimize performance, and ensure a smooth user experience.",
          color: "#0879bf",
        },
      ],
    },
    {
      title: "Internships",
      experiences: [
        {
          title: "PHP Developer Intern",
          company: "Digicoders",
          company_url: "https://digicoders.in/",
          logo_path: "digicoders.png",
          duration: "May 2021 - Aug 2021",
          location: "Lucknow, IN",
          description:
            "As a PHP Developer Intern at Digicoders, I am responsible for assisting in the development of web applications using PHP and Laravel. My role involves learning and implementing backend development practices, writing clean code, debugging issues, and collaborating with senior developers to enhance web applications. This internship provides hands-on experience in web development and an opportunity to improve my technical skills in a professional environment.",
          color: "#000000",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects leverage a wide range of modern technologies, focusing on building efficient, scalable, and user-friendly web applications. I specialize in developing and customizing solutions that enhance business operations and user experiences.",
  avatar_image_path: "projects_image.svg",
};

const publicationsHeader = {
  title: "Publications",
  description: "Some of my published Articles, Blogs and Research.",
  avatar_image_path: "projects_image.svg",
};

const publications = {
  data: [],
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "animated_ashutosh.png",
    description:
      "Get in touch! Whether you have a project idea, a collaboration opportunity, or just want to say hello, feel free to reach out. I’m always open to discussing new ideas and possibilities. Let’s connect!",
  },
  addressSection: {
    title: "Address",
    subtitle: "Gautam Budh Nagar, Noida, Uttar Pradesh, India",
    locality: "Gautam Budh Nagar",
    country: "IN",
    region: "Uttar Pradesh",
    postalCode: "201301",
    streetAddress: "Saratoga Avenue",
    avatar_image_path: "address_image.svg",
    location_map_link: "#",
  },
  phoneSection: {
    title: "",
    subtitle: "",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  publicationsHeader,
  publications,
  contactPageData,
};
