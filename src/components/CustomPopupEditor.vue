<template>
  <div class="popup container">
    <div class="row">
      <div class="col-md-4">
        <div class="field-item">
          <label>Title</label>
          <base-input
            alternative
            v-model="settings.title"
            class="mb-3 form-field"
            placeholder="Title"
            prepend-icon="ni ni-email-83"
          >
          </base-input>
        </div>

        <div class="field-item">
          <label>Info Text</label>
          <base-input
            alternative
            v-model="settings.infoText"
            class="mb-3 form-field"
            placeholder="Info Text"
            prepend-icon="ni ni-email-83"
          >
          </base-input>
        </div>

        <div class="field-item">
          <label>Field Name</label>
          <base-input
            alternative
            v-model="settings.fieldName"
            class="mb-3 form-field"
            placeholder="Field Name"
            prepend-icon="ni ni-email-83"
          >
          </base-input>
        </div>

        <div class="field-item">
          <label>Button Text</label>
          <base-input
            alternative
            v-model="settings.buttonText"
            class="mb-3 form-field"
            placeholder="Button Text"
            prepend-icon="ni ni-email-83"
          >
          </base-input>
        </div>

        <div class="field-item">
          <label>Change background color</label>
          <v-input-colorpicker  v-model="settings.bgColor" />
        </div>

        <div class="btn-container">
          <base-button type="primary" block class="mb-3"
            >Save</base-button
          >
          <!-- <base-button type="primary" block class="mb-3" @click="showModal = true"
            >Preview</base-button
          > -->
        </div>
      </div>
      <div class="col-md-8">
        <modal :show="showModal" size="sm" body-classes="p-0" :modal-content-styles="{backgroundColor: settings.bgColor}">
          <custom-popup-content :settings="settings"></custom-popup-content>
        </modal>
      </div>
    </div>
  </div>
</template>

<script>
import CustomPopupContent from "../components/CustomPopupContent.vue";

export default {
  name: "custom-popup-editor",
  data() {
    return {
      showModal: true,
      settings: {
        bgColor: '#e85e5b',
        title: 'A sample title for your popup',
        infoText: 'Information text here',
        fieldName: 'Input field',
        buttonText: 'Button Text',
      },
    };
  },
  components: {
    CustomPopupContent,
  },
};
</script>

<style>
h1 {
  margin: 40px 0 0;
}
.field-item {
  display: flex;
  flex-direction: column;
  margin-bottom: 15px;
}
.field-item input {
  width: 100%;
}
.btn-container {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: 40px;
}
.btn-container button:nth-child(1) {
  margin: 0 8px 0 0; 
}
.btn-container button:nth-child(2) {
  margin: 0 0 0 8px; 
}
.modal {
  position: relative;
  z-index: 1;
}
</style>
