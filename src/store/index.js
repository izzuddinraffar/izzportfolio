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
            { icon: 'person', title: 'Profile', link:'/profile'},
            { icon: 'dashboard', title: 'Dashboard', link:'/dashboard'},
            { icon: 'view_module', title: 'Projects' , link:'/projects'},
            { divider: true },
            { icon: 'assignment_ind', title: 'My Resume', link:'/my-resume' },
            { icon: 'share', title: 'Repository', link:'/repository' },
            { icon: 'info', title: 'About', link:'/about' },
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
