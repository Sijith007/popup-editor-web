<template>
  <div class="wrapper">
    <app-header></app-header>
    <div class="main-content">
      <fade-transition :duration="200" origin="center top" mode="out-in">
        <!-- your content here -->
        <router-view></router-view>
      </fade-transition>
      <app-footer></app-footer>
    </div>
  </div>
</template>
<script>
import AppHeader from "./AppHeader.vue";
import AppFooter from "./AppFooter.vue";
import { FadeTransition } from "vue2-transitions";

export default {
  components: {
    AppHeader,
    AppFooter,
    FadeTransition,
  },
};
</script>
<style lang="scss">
</style>
