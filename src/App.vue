<script setup>
// import { storeToRefs } from 'pinia';
import { onUnmounted } from 'vue';
import { RouterView } from 'vue-router';
import useFetchData from './stores/fetchdata';
import useWindow from './stores/window';

const { setDetector, removeDetector } = useWindow();
const { getAllRooms } = useFetchData();
getAllRooms();
setDetector();

onUnmounted(() => {
  removeDetector();
});
</script>

<template>
  <RouterView />
</template>

<style lang='scss'>
  #app{
    max-width: 1920px;
    margin: auto;
    -webkit-font-smoothing:antialiased;
    -moz-osx-font-smoothing:antialiased;
  }

</style>
