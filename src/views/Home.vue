<template>
    <div>
        <base-header type="gradient-success" class="pb-6 pb-8 pt-5 pt-md-8">
            <custom-popup-editor></custom-popup-editor>
        </base-header>
    </div>
</template>
<script>
  import CustomPopupEditor from '../components/CustomPopupEditor.vue';

  export default {
    components: {
        CustomPopupEditor,
    },
    data() {
      return {
      }
    },
    methods: {
    }
  };
</script>
<style></style>
