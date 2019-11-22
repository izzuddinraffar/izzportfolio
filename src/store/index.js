import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    app: {
      title: "",
      logo: '<span class="font-weight-light">izzuddin</span>Raffar'
    },
    drawer: {
      status: true,
      items: [
        {id:'home', icon: "home", title: "Welcome", link: "/" },
        {id:'profile', icon: "person", title: "About", link: "/profile" },
        {id:'skills', icon: "bar_chart", title: "Skills", link: "/skills" },
        {id:'portfolio', icon: "view_module", title: "Portfolio", link: "/portfolio" },
        {id:'contact', icon: "email", title: "Contact", link: "/contact" }
      ]
    },
    user: {
      name: "Mohamad Izzuddin",
      email: "izzuddinraffar@gmail.com"
    },
    skills: {
      tabs: [
        { id: "all", title: "All", link: "/skills" },
        { id: "front-end", title: "Front-end", link: "/skills/front-end" },
        { id: "back-end", title: "Back-end ", link: "/skills/back-end" },
        { id: "devops", title: "DevOps ", link: "/skills/devops" },
        { id: "others", title: "Others ", link: "/skills/others" }
      ],
      bar_chart: [
        {
          title: "HTML5",
          skills: 95,
          class: "front-end"
        },
        {
          title: "CSS3",
          skills: 90,
          class: "front-end"
        },
        {
          title: "JavaScript",
          skills: 100,
          class: "front-end"
        },
        {
          title: "React.JS",
          skills: 90,
          class: "front-end"
        },
        {
          title: "Redux.JS",
          skills: 98,
          class: "front-end"
        },
        {
          title: "Next.JS",
          skills: 95,
          class: "front-end"
        },
        {
          title: "Node.JS",
          skills: 90,
          class: "back-end"
        },
        {
          title: "Socket.IO",
          skills: 65,
          class: "back-end"
        },
        {
          title: "PHP",
          skills: 75,
          class: "back-end"
        },
        {
          title: "Python",
          skills: 80,
          class: "back-end"
        },
        {
          title: "Flask (Python)",
          skills: 80,
          class: "back-end"
        },
        {
          title: "Vue.JS",
          skills: 90,
          class: "front-end"
        },
        {
          title: "Vuex.JS",
          skills: 90,
          class: "front-end"
        },
        {
          title: "Vuetify.JS",
          skills: 90,
          class: "front-end"
        },
        {
          title: "GIT",
          skills: 98,
          class: "devops"
        },
        {
          title: "Netlify",
          skills: 90,
          class: "devops"
        },
        {
          title: "Heroku",
          skills: 90,
          class: "devops"
        },
        {
          title: "Linux",
          skills: 55,
          class: "devops"
        },
        {
          title: "Adobe Photoshop",
          skills: 75,
          class: "others"
        },
        {
          title: "Adobe Ilustrator",
          skills: 65,
          class: "others"
        }
      ]
    },
    projects: [
      {
        icon: "layouts/portfolio/projects/hometutor.png",
        title: "HomeTutor",
        desc:"HomeTutor is an online learning application focuses on exercise from primary to middle school.",
        link: "https://hometutor.com.my",
        tech: [
          "HTML5",
          "CSS3",
          "JavaScript",
          "React.JS",
          "Redux.JS",
          "jQuery",
          "PHP",
          "MySQL",
          "Responsive Design",
          "Web Development"
        ]
      },
      {
        icon: "layouts/portfolio/projects/xcelearn.png",
        title: "Xcelearn ",
        desc:"Xcelearn is a learning management system which is using the MOOCS concept in the education.",
        link: "http://xcelearn.com.my",
        tech: [
          "HTML5",
          "CSS3",
          "JavaScript",
          "React.JS",
          "Redux.JS",
          "Next.JS",
          "Node.JS",
          "PostgreSQL",
          "Web Development"
        ]
      },
      {
        icon: "layouts/portfolio/projects/simpana.png",
        title: "Simpana ",
        desc:"Simpana is online asset management to manage, analysis and control learning content platforms.",
        link: "http://cloudhub.my",
        tech: [
          "HTML5",
          "CSS3",
          "JavaScript",
          "React.JS",
          "Redux.JS",
          "MySQL",
          "Web Development"
        ]
      },
      {
        icon: "layouts/portfolio/projects/insight.png",
        title: "Insight",
        desc:"Insight is a student monitoring system for analyzing student performance, progress, demographics and so on.",
        link: "http://cloudhub.my",
        tech: [
          "HTML5",
          "CSS3",
          "JavaScript",
          "React.JS",
          "Redux.JS",
          "MySQL",
          "Web Development"
        ]
      },
      {
        icon: "layouts/portfolio/projects/centrack.png",
        title: "Centrack",
        desc:"Centrack is a user and commission management system that provide reports and tracking sales in real-time. ",
        link: "http://cloudhub.my",
        tech: [
          "HTML5",
          "CSS3",
          "JavaScript",
          "React.JS",
          "Redux.JS",
          "MySQL",
          "Web Development"
        ]
      }
    ],
    portfolio: {
      filtering: []
    }
  },
  mutations: {
    setDrawer(state, payload) {
      state.drawer.status = payload;
    }
  },
  getters: {
    drawerHandler: state => state.drawer.status
  },
  actions: {},
  modules: {}
});
