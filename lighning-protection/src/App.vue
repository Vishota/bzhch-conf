<script setup lang="ts">
  import { ref } from 'vue';
import InitialDataComponent from './components/InitialDataComponent.vue';
  import ValueInput from './components/ValueInput.vue';
  
  var a = ref('123d');
</script>

<template>
  <InitialDataComponent />
</template>
<style scoped>
</style>
