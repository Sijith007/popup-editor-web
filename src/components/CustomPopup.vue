<template>
  <div>
    <base-button type="primary" block class="mb-3" @click="showModal = true"
      >Preview</base-button
    >
    <!-- <modal
      :show.sync="showModal"
      size="sm"
      body-classes="p-0"
      :modal-content-styles="{ backgroundColor: settings.bgColor }"
    > -->
      <!-- <custom-popup-content :settings="settings"></custom-popup-content> -->
    <!-- </modal> -->
  </div>
</template>

<script>
// import CustomPopupContent from "../components/CustomPopupContent";

export default {
  name: "customPopup",
  data() {
    return {
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
    // CustomPopupContent,
  },
  options: {
    props: {}
  },
  props: {},
};
</script>
