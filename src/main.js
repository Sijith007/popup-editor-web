import Vue from 'vue';
import App from './App.vue';
import PopupEditor from './plugins/popupEditor';
import wrap from '@vue/web-component-wrapper';
import CustomPopup from './components/CustomPopup';
import router from './router';
import VueToast from 'vue-toast-notification';
import 'vue-toast-notification/dist/theme-sugar.css';

Vue.use(PopupEditor);
Vue.use(VueToast);

Vue.config.productionTip = false;

const CustomElement = wrap(Vue, CustomPopup);
window.customElements.define('custom-popup', CustomElement);

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');
