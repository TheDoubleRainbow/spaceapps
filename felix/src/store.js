import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    apiData: undefined,
    nearest: undefined,
  },
  mutations: {
    getData(state){
      fetch('https://launchlibrary.net/1.4/launch/next/1').then(res => {
        return res.json();
      }).then(res => {
        state.nearest = res;
        console.log(res);
        fetch('https://launchlibrary.net/1.4/launch/next/200').then(res => {
          return res.json();
        }).then(res => {
          state.apiData = res;
          console.log(res);
        })
      })
    }
  },
  actions: {
    getData(context){
      context.commit('getData');
    }
  }
})
