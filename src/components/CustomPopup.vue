<template>
  <div>
    <base-button type="primary" block class="mb-3" @click="showModal = true"
      >Preview</base-button
    >
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
      showModal: false,
      settings: {
        bgColor: 'transparent', // '#e85e5b',
        title: '',
        infoText: '',
        fieldName: '',
        buttonText: '',
        popupItems: [
          { id: 1, name: "star icons" },
          { id: 2, name: "title text" },
          { id: 3, name: "input field" },
          { id: 4, name: "button" },
          { id: 5, name: "info text" },
        ]
      },
    };
  },
  components: {
    CustomPopupContent,
  },
  props: [],
  
  mounted() {
    if (!this.isEditing) {
      this.getPopup()
    }
  },
  methods: {
    getPopup: function() {
      axios.get(`${ENV.VUE_APP_BASE_URL}popups/1`)
      .then((result) => {
        const data = result.data[0];
        if (data) {
          data.popupItems = JSON.parse(data.items);
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