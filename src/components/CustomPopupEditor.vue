<template>
  <div class="popup container ms-p-0">
    <div class="row">
      <div class="col-md-4">
        <form>
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
          </div>
        </form>
      </div>
      <div class="col-md-8 ms-p-0">
        <modal :show="showModal" size="sm" body-classes="p-0" :modal-content-styles="{backgroundColor: settings.bgColor}">
          <custom-popup-content :settings="settings"></custom-popup-content>
        </modal>
        <div v-if="!showModal" class="coming-soon">Please wait... Popup will load soon</div>
      </div>
    </div>
    <div class="row">
        <div class="col-md-12">
          <div class="usage">
            <h2>How to use ?</h2>
            <p>To include this popup in your web application, just add below script in your webpage header. Have a happy web development !!!</p>
            <code>&lt;script type="text/javascript" src="http://custom-popup-demo.herokuapp.com/popup.js"&gt;&lt;/script&gt;</code>
          </div>
        </div>
      </div>
  </div>
</template>

<script>
import Vue from 'vue';
import PopupService from './../services/popup'
import CustomPopupContent from "../components/CustomPopupContent.vue";

export default {
  name: "custom-popup-editor",
  data() {
    return {
      isSaving: false,
      showModal: false,
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

  components: {
    CustomPopupContent,
  },

  mounted() {
    if (!this.isEditing) {
      this.getPopup()
    }
  },

  methods: {

    /**
     * @description To get popup properties.
     */
    getPopup: function() {
      PopupService.getPopup().then((data) => {
        this.settings = data;
        this.showModal = true;
      });
    },

    /**
     * @description To check whether form is valida or not.
     */
    isValidForm: function() {
      return (
        this.settings.bgColor &&
        this.settings.title &&
        this.settings.infoText &&
        this.settings.fieldName &&
        this.settings.buttonText
      );
    },

    showToast: function(message, type) {
      const savingInstance = Vue.$toast.open({ message, type, position: 'top-right' });
      setTimeout(() => { savingInstance.dismiss(); }, 2000);
    },

    /**
     * @description To show a toast saying update is in progress.
     */
    showInprogressToast: function() {
      this.showToast('Update in progress. Please wait!', 'warning');
    },

    /**
     * @description To show a toast saying success message.
     */
    showSuccessToast: function() {
      this.showToast('Popup template saved successfully', 'success');
    },

    /**
     * @description To show a toast saying failure message.
     */
    showErrorToast: function() {
      this.showToast('Please fill all the required fields', 'error');
    },

    getFormData: function() {
      const params = { ...this.settings, name: 'popup' };
      params.items = JSON.stringify(params.elements);
      return params;
    },

    /**
     * @description To get save popup properties.
     */
    save: function() {
      if (this.isSaving) {
        this.showInprogressToast();
      } else if (this.isValidForm()) {
        this.isSaving = true;
        const params = this.getFormData();
        PopupService.savePopup(params).then((result) => {
          this.isSaving = false;
          if (result) {
            this.showSuccessToast();
          }
        })
      } else {
        this.showErrorToast()
      }
    }
  }
};
</script>

<style>
h1 {
  margin: 40px 0 0;
}
label {
  color: #000000;
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
.coming-soon {
  width: 100%;
  background-color: rgba(0, 0, 0, 0.3);
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #cdcdcd;
}
.modal {
  position: relative;
  z-index: 1;
}
.usage {
  padding: 20px;
  margin-top: 20px;
  background: #ffffff;
  border-radius: 4px;
}
.usage code {
    width: 100%;
    padding: 20px;
    background: #f6f6f6;
    border-radius: 4px;
    display: flex;
	color: #b75501;
}
@media (max-width: 762px) {
  .ms-p-0 {
    padding: 0 !important;
  }
}
</style>
