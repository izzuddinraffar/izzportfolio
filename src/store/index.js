import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
      app:{
          title: '',
          logo: '<span class="font-weight-light">izzuddin</span>Raffar'
      },
      drawer:{
          status: true,
          items: [
            { icon: 'home', title: 'Welcome', link:'/'},
            { icon: 'info', title: 'About', link:'/about' },
            { icon: 'view_module', title: 'Projects' , link:'/projects'},
            { icon: 'dashboard', title: 'Collections', link:'collections/' },
            { divider: true },
            { icon: 'person', title: 'My Resume', link:'/my-resume' },
            { icon: 'share', title: 'Repository', link:'/repository' },
            { icon: 'email', title: 'Contact', link:'/contact' },
          ],
      },
    user:{
        name: 'Mohamad Izzuddin',
        email: 'izzuddinraffar@gmail.com'
    }
  },
  mutations: {
    drawerHandler: state => {
      state.drawer.status = state.drawer.status?false:true
    }
  },
  actions: {
  },
  modules: {
  }
})
