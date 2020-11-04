import Vue from 'vue';
import firebase from "firebase"; // <- Debe ir antes de App.vue
import App from './App.vue';
import router from './router';
import store from './store';

Vue.config.productionTip = false;

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyArHNu83OhTaSJ6brHwGCwHQkSjCN-zqDo",
  authDomain: "platzi-rooms-f1fa2.firebaseapp.com",
  databaseURL: "https://platzi-rooms-f1fa2.firebaseio.com",
  projectId: "platzi-rooms-f1fa2",
  storageBucket: "platzi-rooms-f1fa2.appspot.com",
  messagingSenderId: "381627814940",
  appId: "1:381627814940:web:2638b781f8b3e3dd687bd9"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

firebase.auth().onAuthStateChanged(user => {
  if(user) 
    store.dispatch("FETCH_AUTH_USER");
});


new Vue({
  router,
  store,
  render: h => h(App),
  beforeCreate() {
    if(store.state.authId)
      this.$store.dispatch("FETCH_USER", {
        id: store.state.authId
      });
  },
}).$mount('#app');
