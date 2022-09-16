<script setup>
import { storeToRefs } from 'pinia';
import { onUnmounted } from 'vue';
import { RouterView } from 'vue-router';
import useFetchData from './stores/fetchdata';
import useWindow from './stores/window';
import Loading from './components/LoadingPage.vue';
import useLoading from './stores/loading';

const { setDetector, removeDetector } = useWindow();
const { getAllRooms } = useFetchData();
const { isLoading } = storeToRefs(useLoading());
getAllRooms();
setDetector();

onUnmounted(() => {
  removeDetector();
});
</script>

<template>
  <RouterView />
  <Loading v-if="isLoading" />
</template>

<style lang='scss'>
  #app{

    max-width: 1200px;
    margin: auto;
    position: relative;
    -webkit-font-smoothing:antialiased;
    -moz-osx-font-smoothing:antialiased;
  }

</style>
