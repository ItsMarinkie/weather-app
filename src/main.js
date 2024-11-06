import Vue from 'vue';
import App from './App.vue';
import axios from 'axios';

Vue.config.productionTip = false

axios.defaults.baseURL = 'https://api.openweathermap.org/data/2.5/';

Vue.prototype.$axios = axios;

new Vue({
  render: h => h(App),
}).$mount('#app')
