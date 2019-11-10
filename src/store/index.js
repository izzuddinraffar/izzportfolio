import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
      drawer:{
          status: false,
          items: [
            { icon: 'inbox', title: 'Inbox' },
            { icon: 'star', title: 'Starred' },
            { icon: 'send', title: 'Sent mail' },
            { icon: 'drafts', title: 'Drafts' },
            { divider: true },
            { icon: 'mail', title: 'All mail' },
            { icon: 'delete', title: 'Trash' },
            { icon: 'error', title: 'Spam' },
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
