<script setup>
import { storeToRefs } from 'pinia';
import HomeBackground from '../components/HomeBackground.vue';
import useWindow from '../stores/window';
import useLoading from '../stores/loading';
import Loading from '../components/LoadingPage.vue';

const { isLoading } = storeToRefs(useLoading());
const { isMobile } = storeToRefs(useWindow());
</script>

<template>
  <div class="wrapper">
    <HomeBackground />
    <header>
      <h1 class="logo" :class="isMobile ? 'logo-black' : 'logo-white'">
        <router-link to="/">
          White Space
        </router-link>
      </h1>
    </header>
    <main>
      <router-view />
    </main>
    <Transition>
      <Loading v-if="isLoading" />
    </Transition>
  </div>
</template>

<style lang="scss" scoped>
  .wrapper{
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    @include responsive(md){
      display: block;
    }
  }
  header{
    margin-bottom: $b-space-m;
    @include responsive(md){
      padding-left: 54px;
      padding-top: 47px;
    }
  }
  main{
  }
  .logo{

  }
  .logo-white {
    width: 162px;
    height: 162px;
    @include logo(100%,100%);
    background:url("../assets/logo_white.svg") no-repeat;
  }
  .logo-black{
    width: 164px;
    height: 53px;
    @include logo(100%,100%);
    background:url("../assets/logo_block.svg") no-repeat;
  }
</style>
