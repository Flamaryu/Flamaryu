// store/index.js
import { createStore } from 'vuex';

export default createStore({
  state: {
    workExperience: [
      {
        company: "Capital One",
        position: "Customer Service Specialist",
        location: "Wilmington, DE",
        duration: "Dec 2018 - Apr 2024",
        responsibilities: [
          "Consistently exceeded departmental standards and objectives to boost customer satisfaction ratings, showcasing advanced time management abilities, deep industry knowledge of regulations, & effective prioritization skills.",
          "Achieved high satisfaction rating of 95% through proactive one-call resolutions of customer issues.",
          "Marketed Customer-Focused and digital financial products to new and existing customers, based on their individual needs."
        ]
      },
      {
        company: "Navient",
        position: "Tier 2 Customer Service Representative",
        location: "Newark, DE",
        duration: "Nov 2016 - Aug 2018",
        responsibilities: [
          "Maintained records of over 500 support interactions using Excel for future reference.",
          "Enhanced team collaboration & output by cross-training existing employees through role-playing scenarios & simulation exercises to maximize team agility & performance.",
          "Delivered comprehensive training in onboarding, compliance, soft skills, & technical aspects to 30-40 new hires, while ensuring accuracy.",
          "Secured the Top 5% Performer award in 2017 & in quarters 1 & 2 of 2018, positively influencing KPI & NPI scores, while expanding visibility within the company & unlocking opportunities for career advancement."
        ]
      },
      {
        company: "Bank Of America, National Bank",
        position: "Small Business Deposit Specialist",
        location: "Newark, DE",
        duration: "Dec 2014 - Mar 2016",
        responsibilities: [
          "Supported customers in processing 100+ force pays utilizing the Fast system to ensure successful check clearance.",
          "Meticulously followed process steps & obtained approvals to ensure the accurate setup of payroll & personnel access on accounts, leveraging QuickBooks software's quick setup features & process automation capabilities to reduce processing time by 30%.",
          "Maintained detailed records of customer interactions & transactions, logging inquiries & complaints to swiftly resolve issues within 24 hours, ultimately boosting customer satisfaction scores.",
          "Advanced from a virtual teller role within the initial 6 months, demonstrating increased responsibilities fueled by exceptional customer service & strong problem-solving abilities."
        ]
      }
    ],
    projects: [
      {
        photos: [
          require('@/assets/logo.png'),
          require('@/assets/rack-of-ram.png'),
          require('@/assets/star.png')
        ],
        description: 'Project 1 Description',
        githubLink: 'https://github.com/user/project1'
      },
      {
        photos: [
          require('@/assets/logo.png'),
          require('@/assets/rack-of-ram.png'),
          require('@/assets/star.png')
        ],
        description: 'Project 2 Description',
        githubLink: 'https://github.com/user/project2'
      },
      // Add more projects here
    ],
    skills: [
      {
        name: "Programming Languages",
        skills: [
          { name: "Java", icon: "mdi-language-java" },
          { name: "C#", icon: "mdi-language-csharp" },
          { name: "Kotlin", icon: "mdi-language-kotlin" },
          { name: "Swift/SwiftUI", icon: "mdi-apple" },
          { name: "Flutter", icon: "mdi-language-dart" },
          { name: "HTML", icon: "mdi-language-html5" },
          { name: "CSS", icon: "mdi-language-css3" },
          { name: "JavaScript", icon: "mdi-language-javascript" },
        ],
      },
      {
        name: "Frameworks & Libraries",
        skills: [
          { name: "Spring Boot", icon: "mdi-spring" },
          { name: "Vue.js", icon: "mdi-vuejs" },
        ],
      },
      {
        name: "Tools & Technologies",
        skills: [
          { name: "JDBC", icon: "mdi-database" },
          { name: "Table Design", icon: "mdi-table" },
          { name: "SQL", icon: "mdi-database" },
          { name: "PostgreSQL", icon: "mdi-database" },
          { name: "E/R Diagrams", icon: "mdi-chart-areaspline" },
          { name: "Git", icon: "mdi-git" },
          { name: "IntelliJ", icon: "mdi-jetbrains" },
        ],
      },
      {
        name: "Development Practices",
        skills: [
          { name: "Agile", icon: "mdi-agile" },
          { name: "Unit Testing (JUnit)", icon: "mdi-test-tube" },
          { name: "Integration Testing", icon: "mdi-test-tube" },
        ],
      },
    ]
  },
  mutations: {},
  actions: {},
  getters: {
    getWorkExperience: state => state.workExperience,
    getProjects: state => state.projects,
    getSkills: state => state.skills
  }
});
