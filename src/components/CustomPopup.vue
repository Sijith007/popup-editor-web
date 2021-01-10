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

Vue.use(PopupEditor);

export default {
  name: "CustomPopup",
  data() {
    return {
      isEditing: false,
      showModal: true,
      settings: {
        bgColor: "#e85e5b",
        title: "A sample title for your popup",
        infoText: "Information text here",
        fieldName: "Input field",
        buttonText: "Button Text",
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
      axios.get('http://localhost:8000/api/popups/1')
      .then((result) => {
        this.settings = result.data[0];
      })
    }
  }
};
</script>
<style lang="scss">
  @import "@/assets/scss/popupeditor.scss";
</style>