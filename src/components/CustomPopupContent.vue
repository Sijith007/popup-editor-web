<template>
  <!-- <div class="popup"> -->
  <card
    body-classes="px-lg-5 py-lg-5"
    class="popup-card mb-0"
    v-bind:class="isEditing ? 'editable' : ''"
  >
    <template>
      <form role="form">
        <draggable
          class="draggable-items"
          v-model="popupItems"
          :options="{disabled: !isEditing}"
          group="items"
          @start="drag = true"
          @end="drag = false"
        >
          <!-- <div :key="element.id">{{element.name}}</div> -->
          <!-- icons -->
          <div v-for="element in popupItems" :key="element.id">
            <div class="icons" v-if="element.id === 1">
              <font-awesome-icon icon="star" />
              <font-awesome-icon icon="star" />
              <font-awesome-icon icon="star" />
            </div>

            <h1 v-if="element.id === 2">{{ settings.title }}</h1>

            <base-input
              alternative
              v-model="inputField"
              class="mb-3 form-field"
              :placeholder="settings.fieldName"
              prepend-icon="ni ni-email-83"
              v-if="element.id === 3"
            >
            </base-input>

            <base-button v-if="element.id === 4 && settings.buttonText" type="primary" class="my-4">{{
              settings.buttonText
            }}</base-button>

            <p v-if="element.id === 5">{{ settings.infoText }}</p>
          </div>
        </draggable>
      </form>
      <!-- </b-form> -->
    </template>
  </card>
  <!-- </div> -->
</template>

<script>
import Vue from 'vue';
// import InputColorPicker from "vue-native-color-picker";
import draggable from "vuedraggable";
// import PopupEditor from './../plugins/popupEditor';
// import Card from "./Card.vue";
// import BaseButton from "./BaseButton.vue";
// import BaseInput from "./BaseInput.vue";

// Vue.use(PopupEditor);
// Vue.use(InputColorPicker);
import { library } from '@fortawesome/fontawesome-svg-core'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faStar)
Vue.component('font-awesome-icon', FontAwesomeIcon)

export default {
  name: "custom-popup-content",
  components: {
    draggable,
  },
  options: {
    props: {}
  },
  props: {
    settings: {
      type: Object,
      default: function () {
        return {
          bgColor: "#e85e5b",
          title: "A sample title for your popup",
          infoText: "Information text here",
          fieldName: "Input field",
          buttonText: "Button Text",
        };
      },
    },

    isEditing: {
      type: Boolean,
      default: true,
    },
  },
  data() {
    return {
      popupItems: [
        { id: 1, name: "star icons" },
        { id: 2, name: "title text" },
        { id: 3, name: "input field" },
        { id: 4, name: "button" },
        { id: 5, name: "info text" },
      ],
      showModal: false,
      inputField: "",
    };
  },
};
</script>

<style>
.card.popup-card {
  border: none;
  height: 80%;
  width: 65%;
  background-color: transparent;
}
.card.popup-card form {
  color: #fff;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
}
.card.popup-card .draggable-items {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  width: 100%;
  height: 100%;
}
.card.popup-card .draggable-items > div {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.card.popup-card .icons {
  display: flex;
  width: 120px;
  justify-content: space-between;
  font-size: 22px;
  height: 42px;
  align-items: flex-end;
  color: #cb3735;
}
.card.popup-card .icons svg {
  width: 22px;
}
.card.popup-card .icons svg:nth-child(2) {
  align-self: flex-start;
  font-size: 36px;
  width: 36px;
}
.card.popup-card h1 {
  color: #fff;
  text-align: center;
  text-transform: uppercase;
  margin: 0;
}
.card.popup-card .form-field {
  width: 100%;
  margin: 0 !important;
}
.card.popup-card button {
  width: 100%;
  margin: 0 !important;
}
.card.popup-card P {
  text-align: center;
  margin: 0;
}

@media (max-width: 762px) {
  .card.popup-card {
    width: 80%;
    height: 90%;
  }
  .card.popup-card .icons {
    width: 50px;
    font-size: 10px;
    height: 20px;
  }
  .card.popup-card .icons svg {
    width: 10px;
  }
  .card.popup-card .icons svg:nth-child(2) {
    width: 15px;
    font-size: 15px;
  }
  .card.popup-card h1 {
    font-size: 12px;
  }
  .card.popup-card p {
    font-size: 10px;
  }
}
</style>
