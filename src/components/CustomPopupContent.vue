<template>
  <!-- <div class="popup"> -->
  <card
    body-classes="px-lg-5 py-lg-5"
    class="popup-card editable mb-0"
    v-bind:class="isEditing ? 'editable' : ''"
  >
    <template>
      <form role="form">
        <draggable
          class="draggable-items"
          v-model="popupItems"
          group="people"
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

            <base-button v-if="element.id === 4" type="primary" class="my-4">{{
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
// import Vue from 'vue';
// import InputColorPicker from "vue-native-color-picker";
import draggable from "vuedraggable";
// import PopupEditor from './../plugins/popupEditor';
// import Card from "./Card.vue";
// import BaseButton from "./BaseButton.vue";
// import BaseInput from "./BaseInput.vue";

// Vue.use(PopupEditor);
// Vue.use(InputColorPicker);

export default {
  name: "custom-popup-content",
  components: {
    draggable,
    // Card,
    // BaseButton,
    // BaseInput,
  },
  options: {
    props: {}
  },
  // props: {},
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
  },
  data() {
    return {
      // settings: {
      //   bgColor: "#e85e5b",
      //   title: "A sample title for your popup",
      //   infoText: "Information text here",
      //   fieldName: "Input field",
      //   buttonText: "Button Text",
      // },
      popupItems: [
        { id: 1, name: "star icons" },
        { id: 2, name: "title text" },
        { id: 3, name: "input field" },
        { id: 4, name: "button" },
        { id: 5, name: "info text" },
      ],
      showModal: false,
      inputField: "",
      isEditing: true,
    };
  },
};
</script>

<style>
.popup-card {
  border: none;
  height: 80%;
  width: 65%;
  background-color: transparent;
}
form {
  color: #fff;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
}
.draggable-items {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  width: 100%;
  height: 100%;
}
.draggable-items > div {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.icons {
  display: flex;
  width: 120px;
  justify-content: space-between;
  font-size: 22px;
  height: 42px;
  align-items: flex-end;
  color: #cb3735;
}
.icons svg:nth-child(2) {
  align-self: flex-start;
  font-size: 36px;
}
h1 {
  color: #fff;
  text-align: center;
  text-transform: uppercase;
}
.form-field {
  width: 100%;
  margin: 0 !important;
}
button {
  width: 100%;
  margin: 0 !important;
}
P {
  text-align: center;
}

@media (max-width: 762px) {
  .popup-card {
    width: 80%;
    height: 90%;
  }
  .icons {
    width: 50px;
    font-size: 10px;
    height: 20px;
  }
  .icons svg:nth-child(2) {
    font-size: 15px;
  }
  h1 {
    font-size: 12px;
  }
  p {
    font-size: 10px;
  }
}
</style>
