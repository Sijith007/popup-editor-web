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
      v-on:dragging="updateRect($event, index)"
      v-on:resizing="updateRect($event, index)">
      
      <div class="icons" v-if="index === 0" :style="{ width: iWidth + 'px', height: iHeight + 'px' }">
        <font-awesome-icon :style="{ width: s1Size + 'px', height: s1Size + 'px' }" icon="star" />
        <font-awesome-icon :style="{ width: s2Size + 'px', height: s2Size + 'px' }" icon="star" />
        <font-awesome-icon :style="{ width: s1Size + 'px', height: s1Size + 'px' }" icon="star" />
      </div>

      <h1 v-if="index === 1" :style="{ fontSize: h1Size + 'px' }">{{ settings.title }}</h1>

      <base-input
        alternative
        class="form-field"
        :placeholder="settings.fieldName"
        v-if="index === 2"
        @click="focusInput()"
        v-model="inputData"
        :style="{ fontSize: iSize + 'px' }"
      >
      </base-input>

      <base-button v-if="index === 3 && settings.buttonText" type="primary" :style="{ fontSize: bSize + 'px' }">{{
        settings.buttonText
      }}</base-button>

      <p v-if="index === 4" :style="{ fontSize: pSize + 'px' }">{{ settings.infoText }}</p>
    </VueDragResize>
  </div>
</template>

<script>
import Vue from 'vue';
import VueDragResize from 'vue-drag-resize'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faStar)
Vue.component('font-awesome-icon', FontAwesomeIcon)

export default {
  name: "custom-popup-content",
  components: {
    VueDragResize,
  },
  props: {
    settings: {
      type: Object,
      default: function () {
        return {
          bgColor: 'transparent',
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
    settings() {
      this.initPopupSettings();
    }
  },

  mounted() {
    this.initPopupSettings();
    window.addEventListener('resize', ()=>{
      this.handleResize();
    })
  },

  destroyed () {
    window.removeEventListener('resize', this.handleResize);
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

      inputData: '',
    };
  },

  methods: {
    /**
     * @description On screen resize, re initialize popup settings.
     */
    handleResize() {
      clearTimeout(window.resizedFinished);
      window.resizedFinished = setTimeout(() => {
        this.initPopupSettings();
      }, 250);
    },

    /**
     * @description To  get html element.
     */
    getElement(selector) {
      let element = document.querySelector(selector);
      if (!element) {
        element = document.querySelector('popup-component').shadowRoot.querySelector(selector);
      }
      return element;
    },

    /**
     * @description To  set modal content width and height based o screen size.
     */
    setModalContent() {
      const dialog = this.getElement('.modal-dialog');
      if (dialog) {
        const size = Math.min(dialog.clientWidth, 576);
        const content = dialog.querySelector('.modal-content');
        content.style.width = `${size}px`;
        content.style.height = `${size}px`;
      }
    },

    /**
     * Initialize popup properties.
     */
    initPopupSettings() {
      this.setModalContent();
      let container = this.getElement('#popupContainer');
      if (container) {
        const width = container.clientWidth;
        const height = container.clientHeight;

        const wRatio = width / this.settings.containerWidth;
        const hRatio = height / this.settings.containerHeight;

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

        const sizeRatio = width/576;
        this.s1Size = 22 * sizeRatio;
        this.s2Size = 36 * sizeRatio;
        this.h1Size = 26 * sizeRatio;
        this.iSize = 16 * sizeRatio;
        this.bSize = 16 * sizeRatio;
        this.pSize = 14 * sizeRatio;
        this.iWidth = 120 * sizeRatio;
        this.iHeight = 42 * sizeRatio;

        this.settings.containerWidth = width;
        this.settings.containerHeight = height;
      }
    },

    activateEv(index) {
      this.settings.elements[index].active = true;
    },

    focusInput() {
      console.log('clicked input')
      setTimeout(() => {this.getElement('.modal-content input').focus()}, 100);
    },

    deactivateEv(index) {
      this.settings.elements[index].active = false;
    },

    /**
     * @description Update settings when resizing.
     */
    updateRect(newRect, index) {
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
    font-family: sans-serif;
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
</style>
