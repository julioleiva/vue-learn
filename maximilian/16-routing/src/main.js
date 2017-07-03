import Vue from 'vue'
import VueRouter from 'vue-router';
import App from './App.vue'
import { routes }from './routes'

Vue.use(VueRouter);

const router = new VueRouter({
    routes,
    //para habilitar el modo de navegación sin #, hay que configurar el servidor
    mode:'history'
})

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
