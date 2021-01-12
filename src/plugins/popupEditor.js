import "@/assets/vendor/nucleo/css/nucleo.css";
import "@/assets/scss/popupeditor.scss";
import globalComponents from "./globalComponents";
import globalDirectives from "./globalDirectives";
import InputColorPicker from "vue-native-color-picker";

export default {
  install(Vue) {
    Vue.use(globalComponents);
    Vue.use(globalDirectives);
    Vue.use(InputColorPicker)
  }
};
