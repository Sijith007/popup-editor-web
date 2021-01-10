<template>
  <div class="popup container ms-p-0">
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
          <base-button type="primary" block class="mb-3" @click="save()"
            >{{ isSaving ? 'Please wait...' : 'Save' }}</base-button
          >
          <!-- <base-button type="primary" block class="mb-3" @click="showModal = true"
            >Preview</base-button
          > -->
        </div>
      </div>
      <div class="col-md-8 ms-p-0">
        <modal :show="showModal" size="sm" body-classes="p-0" :modal-content-styles="{backgroundColor: settings.bgColor}">
          <custom-popup-content :settings="settings"></custom-popup-content>
        </modal>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue';
import axios from 'axios'
import CustomPopupContent from "../components/CustomPopupContent.vue";
import ENV from "./../dev.env";

export default {
  name: "custom-popup-editor",
  data() {
    return {
      isSaving: false,
      showModal: true,
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
    },
    save: function() {
      if (this.isSaving) {
        const savingInstance = Vue.$toast.open({
          message: 'Update in progress. Please wait!',
          type: 'warning',
          position: 'top-right',
        });
        setTimeout(() => {
          savingInstance.dismiss();
        }, 2000);
      } else if (
        this.settings.bgColor &&
        this.settings.title &&
        this.settings.infoText &&
        this.settings.fieldName &&
        this.settings.buttonText) {
          this.isSaving = true;
        const params = { ...this.settings, name: 'popup' };
        params.items = JSON.stringify(params.popupItems);
        axios.put(`${ENV.VUE_APP_BASE_URL}popups/1`, params)
        .then((result) => {
          this.isSaving = false;
          if (result) {
            const successInstance = Vue.$toast.open({
              message: 'Popup template saved successfully',
              type: 'success',
              position: 'top-right',
            });
            setTimeout(() => {
              successInstance.dismiss();
            }, 2000);
          }
        })
      } else {
        const errorInstance = Vue.$toast.open({
          message: 'Please fill all the required fields',
          type: 'error',
          position: 'top-right',
        });
        setTimeout(() => {
          errorInstance.dismiss();
        }, 2000);
      }
      
    }
  }
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
@media (max-width: 762px) {
  .ms-p-0 {
    padding: 0 !important;
  }
}
</style>
