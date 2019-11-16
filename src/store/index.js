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
        { icon: "email", title: "Contact", link: "/contact" },
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
        { icon: "home", title: "Front-end", link: "/" },
        { icon: "person", title: "Back-end ", link: "/profile" },
        { icon: "dashboard", title: "DevOps ", link: "/dashboard" },
        { icon: "dashboard", title: "Others ", link: "/dashboard" }
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
