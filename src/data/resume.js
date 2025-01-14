const resume = {
  basic_info: {
    description_header: "Hi",
    description:
      "👋 I'm Jonathan Alvares. I believe technology has the power to make the world a better place. I love reading books, helping people and learning new things. I'm interested in solving problems in the fintech industry and making finance available to everyone. Still figuring out more :)",
    section_name: {
      about: "About me",
      projects: "Projects",
      skills: "Skills",
      experience: "Experience",
    },
  },
  projects: [
    {
      title: "Quiz App",
      startDate: "2022",
      description:
        "A fun quiz app that tests your knowledge of the world. It's a quiz with multiple choice questions. I made it with React JS and CSS.",
      images: [
        "images/portfolio/quiz-app/p1.png",
        "images/portfolio/quiz-app/p2.png",
        "images/portfolio/quiz-app/p3.png",
        "images/portfolio/quiz-app/p4.png",
      ],
      url: "https://jonathanalvares9009.github.io/quiz/",
      technologies: [
        {
          class: "devicon-react-plain",
          name: "React JS",
        },
        {
          class: "devicon-javascript-plain",
          name: "JavaScript",
        },
        {
          class: "devicon-css3-plain",
          name: "CSS",
        },
        {
          class: "devicon-git-plain",
          name: "Git",
        },
        {
          class: "devicon-github-plain",
          name: "GitHub",
        },
        {
          class: "devicon-tailwindcss-plain",
          name: "Tailwind CSS",
        },
      ],
    },
    {
      title: "Payload to JSON",
      startDate: "2022",
      description:
        "I work as a backend engineer, I had to put the browser payload a lot of times in Postman but it took a lot of my time to format it to JSON. I started finding for converters but couldn't find one that worked for me. I decided to make my own and I'm proud of it. It's a simple tool that converts a payload to JSON.",
      images: [
        "images/portfolio/payload-json/p1.png",
        "images/portfolio/payload-json/p2.png",
      ],
      url: "https://jonathanalvares9009.github.io/payload-json/",
      technologies: [
        {
          class: "devicon-react-plain",
          name: "React JS",
        },
        {
          class: "devicon-javascript-plain",
          name: "JavaScript",
        },
        {
          class: "devicon-css3-plain",
          name: "CSS",
        },
        {
          class: "devicon-git-plain",
          name: "Git",
        },
        {
          class: "devicon-github-plain",
          name: "GitHub",
        },
      ],
    },
  ],
  experience: [
    {
      company: "P360",
      title: "Software Engineer Intern",
      years: "04.2021 - Present",
      technologies: [
        "HTML",
        "CSS",
        "JavaScript",
        "Bootstrap",
        "Vue.js",
        "Node.js",
        "Express.js",
        "SQL",
        "Git",
        "GitHub",
        "Swift",
        "Xcode",
      ],
      description: [
        "Contributing to the Zing platform, which makes communication in the pharma industry as frictionless as possible",
        "Worked on the web frontend, iOS project and the backend",
        "Developed UI components for the web and iOS applications",
        "Helped the team by debugging, modularising and writing test cases for the product",
        "Helped the team reach the desired state of the product",
        "Documented the API and the codebase",
        "Created prototypes and then integrated into the product",
      ],
    },
    {
      company: "Oppia Foundation",
      title: "Open Source Contributor",
      years: "03.2021 - 08.2021",
      technologies: [
        "Kotlin",
        "XML",
        "Bazel",
        "Git",
        "GitHub",
        "Android Studio",
      ],
      description: [
        "Created new UI and also corrected some UI regressions",
        "Helped move the project use Bazel build system instead of Gradle",
      ],
    },
    {
      company: "GirlScript Summer of Code",
      title: "Open Source Contributor",
      years: "03.2021 - 06.2021",
      technologies: [
        "HTML",
        "CSS",
        "JavaScript",
        "Java",
        "Kotlin",
        "Git",
        "GitHub",
        "Android Studio",
        "VS Code",
      ],
      description: [
        "Contributed to android projects",
        "Helped onboard new contributors",
      ],
    },
  ],
};

export default resume;
