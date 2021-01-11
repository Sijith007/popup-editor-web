<template>
  <div class="popup-container" id="popupContainer">
    <VueDragResize v-for="(rect, index) in settings.elements" :key="index"
      :w="rect.width"
      :h="rect.height"
      :x="rect.left"
      :y="rect.top"
      :parentW="settings.containerWidth"
      :parentH="settings.containerHeight"
      :axis="rect.axis"
      :isActive="rect.active"
      :minw="rect.minw"
      :minh="rect.minh"
      :isDraggable="rect.draggable"
      :isResizable="rect.resizable"
      :parentLimitation="rect.parentLim"
      :snapToGrid="rect.snapToGrid"
      :aspectRatio="rect.aspectRatio"
      :z="rect.zIndex"
      :contentClass="rect.class"
      v-on:activated="activateEv(index)"
      v-on:deactivated="deactivateEv(index)"
      v-on:dragging="changePosition($event, index)"
      v-on:resizing="changeSize($event, index)">
      
      <div class="icons" v-if="index === 0" :style="{ width: iWidth + 'px', height: iHeight + 'px' }">
        <font-awesome-icon :style="{ width: s1Size + 'px', height: s1Size + 'px' }" icon="star" />
        <font-awesome-icon :style="{ width: s2Size + 'px', height: s2Size + 'px' }" icon="star" />
        <font-awesome-icon :style="{ width: s1Size + 'px', height: s1Size + 'px' }" icon="star" />
      </div>

      <h1 v-if="index === 1" :style="{ fontSize: h1Size + 'px' }">{{ settings.title }}</h1>

      <base-input
        alternative
        class="mb-3 form-field"
        :placeholder="settings.fieldName"
        prepend-icon="ni ni-email-83"
        v-if="index === 2"
         :style="{ fontSize: iSize + 'px' }"
      >
      </base-input>

      <base-button v-if="index === 3 && settings.buttonText" type="primary" :style="{ fontSize: bSize + 'px' }">{{
        settings.buttonText
      }}</base-button>

      <p v-if="index === 4" :style="{ fontSize: pSize + 'px' }">{{ settings.infoText }}</p>
    </VueDragResize>
  </div>
  <!-- <card
    body-classes="px-lg-5 py-lg-5"
    class="popup-card mb-0"
    v-bind:class="isEditing ? 'editable' : ''"
  >
    <template>
      <form role="form">
        <draggable
          class="draggable-items"
          v-model="settings.popupItems"
          :options="{disabled: !isEditing}"
          group="items"
          @start="drag = true"
          @end="drag = false"
        >
          <div v-for="element in settings.popupItems" :key="element.id">
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

            

            <p v-if="element.id === 5">{{ settings.infoText }}</p>
          </div>
        </draggable>
      </form>
    </template>
  </card> -->
</template>

<script>
// import 'https://fonts.googleapis.com/css?family=Bowlby+One+SC';
import Vue from 'vue';
// import InputColorPicker from "vue-native-color-picker";
// import draggable from "vuedraggable";
import VueDragResize from 'vue-drag-resize'
import VueResizeText from 'vue-resize-text';
// import PopupEditor from './../plugins/popupEditor';
// import Card from "./Card.vue";
// import BaseButton from "./BaseButton.vue";
// import BaseInput from "./BaseInput.vue";

// Vue.use(PopupEditor);
// Vue.use(InputColorPicker);
Vue.use(VueResizeText)

import { library } from '@fortawesome/fontawesome-svg-core'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faStar)
Vue.component('font-awesome-icon', FontAwesomeIcon)

export default {
  name: "custom-popup-content",
  components: {
    // draggable,
    VueDragResize,
  },
  options: {
    props: {}
  },
  props: {
    settings: {
      type: Object,
      default: function () {
        return {
          bgColor: 'transparent', // '#e85e5b',
          title: 'Test heading',
          infoText: 'This is an info text',
          fieldName: 'Username',
          buttonText: 'Submit',
          containerWidth: 576,
          containerHeight: 576,
          elements: [
            {
              width: 120,
              height: 42,
              top: 82,
              left: 225,
              draggable: true,
              resizable: true,
              minw: 10,
              minh: 10,
              axis: 'both',
              parentLim: true,
              snapToGrid: false,
              aspectRatio: false,
              zIndex: 1,
              active: false
            },
            {
              width: 200,
              height: 37,
              top: 190,
              left: 190,
              draggable: true,
              resizable: true,
              minw: 10,
              minh: 10,
              axis: 'both',
              parentLim: true,
              snapToGrid: false,
              aspectRatio: false,
              zIndex: 2,
              active: false
            },
            {
              width: 360,
              height: 43,
              top: 275,
              left: 120,
              draggable: true,
              resizable: true,
              minw: 10,
              minh: 25,
              axis: 'both',
              parentLim: true,
              snapToGrid: false,
              aspectRatio: false,
              zIndex: 2,
              active: false
            },
            {
              width: 360,
              height: 43,
              top: 350,
              left: 120,
              draggable: true,
              resizable: true,
              minw: 10,
              minh: 25,
              axis: 'both',
              parentLim: true,
              snapToGrid: false,
              aspectRatio: false,
              zIndex: 2,
              active: false
            },
            {
              width: 360,
              height: 30,
              top: 415,
              left: 120,
              draggable: true,
              resizable: true,
              minw: 10,
              minh: 10,
              axis: 'both',
              parentLim: true,
              snapToGrid: false,
              aspectRatio: false,
              zIndex: 2,
              active: false
            },
          ]
        };
      },
    },

    isEditing: {
      type: Boolean,
      default: true,
    },
  },

  watch: { 
    settings() { // watch it
      this.initPopupSettings();
    }
  },

  mounted() {
    this.initPopupSettings();
    // window.addEventListener('resize', ()=>{
    //   this.initPopupSettings(listEl.clientWidth, listEl.clientHeight);
    // })
  },

  data() {
    return {
      iWidth: 120,
      iHeight: 42,
      s1Size: 22,
      s2Size: 36,
      h1Size: 26,
      iSize: 16,
      bSize: 16,
      pSize: 14,
    };
  },

  methods: {
    getPopupContainer() {
      let element = document.querySelector('#popupContainer');
      if (!element) {
        element = document.querySelector('popup-component').shadowRoot.querySelector('#popupContainer');
      }
      return element;
    },
    getModalContainer() {
      let element = document.querySelector('.modal-content');
      if (!element) {
        element = document.querySelector('popup-component').shadowRoot.querySelector('.modal-content');
      }
      return element;
    },
    setModalContent() {
      const container = this.getModalContainer();
      const size = Math.min(container.clientWidth, container.clientHeight, 576);
      container.style.width = `${size}px`;
      container.style.height = `${size}px`;
    },
    initPopupSettings() {
      this.setModalContent();
      let container = this.getPopupContainer();
      if (container) {
        const width = container.clientWidth;
        const height = container.clientHeight;

        const wRatio = width / this.settings.containerWidth;
        const hRatio = height / this.settings.containerHeight;

        console.log('wRatio', wRatio);

        this.settings.elements.forEach((element,index) => {
          this.settings.elements[index].top = hRatio * this.settings.elements[index].top;
          this.settings.elements[index].left = wRatio * this.settings.elements[index].left;
          this.settings.elements[index].width = wRatio * this.settings.elements[index].width;
          this.settings.elements[index].height = hRatio * this.settings.elements[index].height;
          if (!this.isEditing) {
            this.settings.elements[index].active = false;
            this.settings.elements[index].draggable = false;
            this.settings.elements[index].resizable = false;
          }
        });

        this.s1Size = 22 * wRatio;
        this.s2Size = 36 * wRatio;
        this.h1Size = 26 * wRatio;
        this.iSize = 16 * wRatio;
        this.bSize = 16 * wRatio;
        this.pSize = 14 * wRatio;
        this.iWidth = 120 * wRatio;
        this.iHeight = 42 * hRatio;

        this.settings.containerWidth = width;
        this.settings.containerHeight = height;
      }
    },
    activateEv(index) {
      this.settings.elements[index  ].active = true;
    },
    deactivateEv(index) {
      this.settings.elements[index].active = false;
    },
    changePosition(newRect, index) {
      console.log('changeSize', newRect, index)
      this.settings.elements[index].top = newRect.top;
      this.settings.elements[index].left = newRect.left;
      this.settings.elements[index].width = newRect.width;
      this.settings.elements[index].height = newRect.height;
    },
    changeSize(newRect, index) {
      console.log('changeSize', newRect, index)
      this.settings.elements[index].top = newRect.top;
      this.settings.elements[index].left = newRect.left;
      this.settings.elements[index].width = newRect.width;
      this.settings.elements[index].height = newRect.height;
    }
  }
};
</script>

<style>
  .popup-container {
    position: relative;
    width: 100%;
    height: 100%;
    border-radius: 50%;
  }
  .popup-container button {
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
  }
  .popup-container .icons {
    display: flex;
    width: 120px;
    justify-content: space-between;
    /* font-size: 22px; */
    height: 42px;
    align-items: flex-end;
    color: #cb3735;
  }
  .popup-container .icons svg {
    width: 22px;
    align-self: flex-end;
  }
  .popup-container .icons svg:nth-child(2) {
    align-self: center;
    /* font-size: 36px; */
    width: 36px;
  }
  .popup-container h1 {
    color: #fff;
    text-align: center;
    text-transform: uppercase;
    margin: 0;
  }
  .popup-container P {
    margin: 0;
    color: #fff;
    text-align: center;
  }
  .popup-container .form-group,
  .popup-container .form-group input {
    width: 100%;
    height: 100%;
    margin: 0;
  }








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
