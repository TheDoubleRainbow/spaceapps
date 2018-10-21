import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueFire from 'vuefire'
import firebase from 'firebase/app'
import 'firebase/firestore'

Vue.config.productionTip = false
Vue.use(VueFire)

firebase.initializeApp({
  projectId: 'spaceapps-717b2',
  apiKey: 'AIzaSyAKILBPMs6LXBN19BpQcC9NVaZkZLtYuiE', 
  databaseURL: 'https://spaceapps-717b2.firebaseio.com/',
  authDomain: "spaceapps-717b2.firebaseapp.com",
 })
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
export const db = firebase.firestore();
//export firebase.firestore()
