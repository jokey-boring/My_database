// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';
import fastClick from 'Fastclick';
import VueAwesomeSwiper from 'Vue-awesome-swiper';
import 'babel-polyfill'
import store from './store'
import 'styles/reset.css';
import 'styles/border.css';
import 'styles/iconfont.css';
import 'styles/iconfont-1.css';
import 'Swiper/dist/css/swiper.css';

Vue.config.productionTip = false;
fastClick.attach(document.body);
Vue.use(VueAwesomeSwiper);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>',
});
