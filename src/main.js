import Vue from 'vue';
import App from './App.vue';
import PopupEditor from './plugins/popupEditor';
import wrap from '@vue/web-component-wrapper';
import CustomPopup from './components/CustomPopup';
import router from './router';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faStar)

Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.use(PopupEditor);

Vue.config.productionTip = false;

const CustomElement = wrap(Vue, CustomPopup);
window.customElements.define('custom-popup', CustomElement);

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');
