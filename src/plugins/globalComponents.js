import BaseHeader from "../components/BaseHeader";
import Modal from "../components/Modal";
import BaseButton from "../components/BaseButton";
import BaseInput from "../components/BaseInput";

export default {
  install(Vue) {
    Vue.component(BaseHeader.name, BaseHeader);
    Vue.component(Modal.name, Modal);
    Vue.component(BaseButton.name, BaseButton);
    Vue.component(BaseInput.name, BaseInput);
  }
};
