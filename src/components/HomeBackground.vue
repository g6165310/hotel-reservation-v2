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
    position: absolute;
    width: 100%;
    height: 100vh;
    background: rgba(192,192,192,0.20);
    z-index: -1;
    background-position: bottom;
    background-size:cover;
    box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.3);
    @include responsive(md){
      height: 660px;
    }
  }
</style>
