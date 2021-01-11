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
import axios from 'axios'
import Vue from 'vue';
import PopupEditor from './../plugins/popupEditor';
import CustomPopupContent from "../components/CustomPopupContent";
import ENV from "./../dev.env";

Vue.use(PopupEditor);

export default {
  name: "CustomPopup",
  data() {
    return {
      isEditing: false,
      showModal: true,
      settings: {
        bgColor: 'transparent', // '#e85e5b',
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
  components: {
    CustomPopupContent,
  },
  props: [],
  
  mounted() {
    this.getPopup()
  },
  methods: {
    getPopup: function() {
      axios.get(`${ENV.VUE_APP_BASE_URL}popups/1`)
      .then((result) => {
        const data = result.data[0];
        if (data) {
          data.containerWidth = parseInt(data.containerWidth, 10)
          data.containerHeight = parseInt(data.containerHeight, 10)
          data.elements = JSON.parse(data.items);
          this.settings = data;
        }
      })
    }
  }
};
</script>
<style lang="scss">
  @import "@/assets/scss/popupeditor.scss";
</style>