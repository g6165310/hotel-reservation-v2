<script setup>
import HomeBackground from '../components/HomeBackground.vue';
import ContactInfo from '../components/ContactInfo.vue';
import RoomList from '../components/RoomList.vue';
</script>
<template>
  <HomeBackground />
  <header>
    <h1 class="logo-white">
      <router-link to="/">
        WHITE SPACE
      </router-link>
    </h1>
    <ContactInfo />
  </header>
  <RoomList />
</template>

<style lang="scss" scoped>
  header{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
    margin-bottom: $b-space-m;
    @include responsive(md){
      height: 660px;
    }
  }
  .logo-white {
    width: 162px;
    height: 162px;
    @include logo(100%,100%);
    background:url("../assets/logo_white.svg") no-repeat;
    margin-bottom: 50px;
  }
</style>
