<script setup>
import { storeToRefs } from 'pinia';
import useHomeBackground from '../stores/homebackground';

const { setHomeBackground } = storeToRefs(useHomeBackground());
// // });
</script>
<template>
  <div class="home-background" :style="{ backgroundImage: setHomeBackground }" />
</template>

<style lang="scss" scoped>
  .home-background{
    position: fixed;
    width: 100%;
    height: 100%;
    background: rgba(192,192,192,0.20);
    z-index: -1;
    background-position: bottom;
    background-size:cover;
    background-attachment: fixed;

  }
</style>
