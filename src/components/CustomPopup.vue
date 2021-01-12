<template>
  <div>
    <modal
      :show.sync="showModal"
      size="sm"
      body-classes="p-0"
      :modal-content-styles="{ backgroundColor: settings.bgColor }"
    >
      <custom-popup-content :settings="settings" :isEditing="isEditing"></custom-popup-content>
    </modal>
  </div>
</template>

<script>
import Vue from 'vue';
import PopupEditor from './../plugins/popupEditor';
import CustomPopupContent from "../components/CustomPopupContent";
import PopupService from './../services/popup'

Vue.use(PopupEditor);

export default {
  name: "CustomPopup",

  components: {
    CustomPopupContent,
  },

  props: [],

  data() {
    return {
      isEditing: false,
      showModal: true,
      settings: {
        bgColor: 'transparent',
        title: '',
        infoText: '',
        fieldName: '',
        buttonText: '',
        containerWidth: 576,
        containerHeight: 576,
        elements: []
      },
    };
  },
  
  mounted() {
    this.getPopup()
  },

  methods: {
    /**
     * @description To get the saved popup properties.
     */
    getPopup: function() {
      PopupService.getPopup().then((data) => this.settings = data)
    }
  }
};
</script>
<style lang="scss">
  @import "@/assets/scss/popupeditor.scss";
</style>