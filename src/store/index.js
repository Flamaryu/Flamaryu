import { createStore } from 'vuex';
import Agile from  '@/assets/agile.png';
import Diagram from '@/assets/erd.png';
import IntelliJ from '@/assets/intellij-idea.svg';
import JUnit from '@/assets/JUnit.png';
import Testing from '@/assets/integration.png';
import Table from '@/assets/relational.png';
import jdbc from '@/assets/jdbc.png';

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
          require('@/assets/balogin.png'),
          require('@/assets/bahome.png'),
          require('@/assets/bahome1.png'),
          require('@/assets/bahome3.png'),
          require('@/assets/bahome4.png'),
          require('@/assets/baed.png'),
          require('@/assets/baAlert.png'),
          require('@/assets/ba1.png'),
          require('@/assets/bame.png'),
          require('@/assets/basetting.png')
          
        ],
        description: "BeAround is a dynamic iOS app designed to bring people together through events. Users can easily add new events, attend events, and let hosts see how many people are coming. Each event features its own chatroom for real-time communication. Events can be searched by location or type, and once a user selects an event to attend, they can add it to their phone's calendar. Powered by Firebase for the backend, BeAround ensures a seamless and interactive event experience",
        githubLink: 'https://github.com/Flamaryu/BeAround'
      },
      {
        photos: [
          require('@/assets/homepage.png'),
          require('@/assets/quiz4.png'),
          require('@/assets/quiz1.png'),
          require('@/assets/quiz2.png'),
          require('@/assets/quiz3.png')
        ],
        description: "So You Know Somethings is an engaging trivia app built with Flutter, designed to provide users with an interactive and fun quiz experience. The app leverages a RESTful API to load trivia questions tailored to the user's chosen categories and preferences. With So You Know Somethings, users can test their knowledge across various topics, enjoy a seamless user experience, and continually challenge themselves with fresh and interesting questions.",
        githubLink: 'https://github.com/Flamaryu/QuizApp_Flutter'
      },
      // Add more projects here
    ],
    skills: [
      {
        name: "Programming Languages",
        skills: [
          { name: "Java", icon: "java" },
          { name: "C#", icon: "cs" },
          { name: "Kotlin", icon: "kotlin" },
          { name: "Swift/SwiftUI", icon: "swift" },
          { name: "Flutter", icon: "flutter" },
          { name: "HTML", icon: "html" },
          { name: "CSS", icon: "css" },
          { name: "JavaScript", icon: "js" },
        ],
      },
      {
        name: "Frameworks & Libraries",
        skills: [
          { name: "Spring Boot", icon: "spring" },
          { name: "Vue.js", icon: "vue" },
        ],
      },
      {
        name: "Tools & Technologies",
        skills: [
          { name: "JDBC", icon: "JDBC" },
          { name: "Table Design", icon: "Table Design" },
          { name: "NPM", icon: "npm" },
          { name: "PostgreSQL", icon: "postgres" },
          { name: "E/R Diagrams", icon: "E/R Diagrams" },
          { name: "Git", icon: "git" },
          { name: "IntelliJ", icon: 'IntelliJ' },
        ],
      },
      {
        name: "Development Practices",
        skills: [
          { name: "Agile", icon: "Agile" },
          { name: "Unit Testing (JUnit)", icon: "Unit Testing (JUnit)" },
          { name: "Integration Testing", icon: "Integration Testing" },
        ],
      },
    ],
    skillIcons: {},
    localSkillIcons: {
      'Agile': Agile,
      'E/R Diagrams': Diagram,
      'IntelliJ': IntelliJ,
      'Unit Testing (JUnit)': JUnit,
      'Integration Testing': Testing,
      "Table Design": Table,
      "JDBC": jdbc
    }
  },
  mutations: {
    SET_SKILL_ICON(state, { id, url }) {
      state.skillIcons[id] = url;
    }
  },
  actions: {
    fetchSkillIcon({ state, commit }, id) {
      const localIcon = state.localSkillIcons[id];
      if (localIcon) {
        commit('SET_SKILL_ICON', { id, url: localIcon });
      } else {
        const url = `https://skillicons.dev/icons?i=${id}`;
        commit('SET_SKILL_ICON', { id, url });
      }
    }
  },
  getters: {
    getWorkExperience: state => state.workExperience,
    getProjects: state => state.projects,
    getSkills: state => state.skills,
    getSkillIcon: (state) => (id) => state.skillIcons[id]
  }
});
