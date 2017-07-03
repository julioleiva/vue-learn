import Vue from 'vue'
import VueResource from 'vue-resource'
import App from './App.vue'

Vue.use(VueResource);

// Podemos centralizar las opciones que se repiten en las request en main.js
Vue.http.options.root = 'https://vuejs-http-e36f8.firebaseio.com/data.json'
// Vue.http.headers.common['Authorization'] = 'Basic YXBpOnBhc3N3b3Jk';

// Podemos interceptar todas las request y, como en este caso, cambiarles el verbo, por ejemplo
Vue.http.interceptors.push((request, next) => {
  console.log(request);
  if(request.method == 'POST'){
      request.method = 'PUT'
  }
  // ... y podemos interceptar las responses dentro del método next()
  next((response) => {
    response.json = () => {return {messages: response.body}}
  });
});

new Vue({
  el: '#app',
  render: h => h(App)
})
