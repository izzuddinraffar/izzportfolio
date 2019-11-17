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
        { icon: "home", title: "Welcome", link: "/" },
        { icon: "person", title: "About", link: "/profile" },
        { icon: "bar_chart", title: "Skills", link: "/skills" },
        { icon: "view_module", title: "Portfolio", link: "/portfolio" },
        { icon: "email", title: "Contact", link: "/contact" }
        // { divider: true },
        // { icon: "assignment_ind", title: "My Resume", link: "/my-resume" },
        // { icon: "share", title: "Repository", link: "/repository" },
        // { icon: "info", title: "About", link: "/about" },
        // { icon: "email", title: "Contact", link: "/contact" }
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
          skills: 80,
          class: "front-end"
        },
        {
          title: "CSS3",
          skills: 90,
          class: "front-end"
        },
        {
          title: "JavaScript",
          skills: 90,
          class: "front-end"
        },
        {
          title: "React.JS",
          skills: 90,
          class: "front-end"
        },
        {
          title: "Redux.JS",
          skills: 90,
          class: "front-end"
        },
        {
          title: "Next.JS",
          skills: 90,
          class: "front-end"
        },
        {
          title: "Node.JS",
          skills: 90,
          class: "back-end devops"
        },
        {
          title: "PHP",
          skills: 90,
          class: "back-end devops"
        },
        {
          title: "Pyhton",
          skills: 90,
          class: "back-end devops"
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
          title: "Linux",
          skills: 90,
          class: "devops"
        },
        {
          title: "Adobe Photoshop",
          skills: 90,
          class: "others"
        },
        {
          title: "Adobe Ilustrator",
          skills: 90,
          class: "others"
        }
      ]
    },
    projects: [
      { icon: "home", title: "HomeTutor", link: "/" },
      { icon: "person", title: "Xcelearn ", link: "/profile" },
      { icon: "dashboard", title: "Simpana ", link: "/dashboard" },
      { icon: "view_module", title: "Insight", link: "/projects" },
      { icon: "assignment_ind", title: "Centrack", link: "/my-resume" },
      { icon: "share", title: "My Repository", link: "/repository" },
      { icon: "info", title: "My Portfolio", link: "/about" },
      { icon: "email", title: "Content Management System", link: "/contact" }
    ]
  },
  mutations: {
    drawerHandler: state => {
      state.drawer.status = state.drawer.status ? false : true;
    }
  },
  actions: {},
  modules: {}
});
