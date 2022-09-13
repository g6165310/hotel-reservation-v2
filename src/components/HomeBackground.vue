<script setup>
// import { computed } from 'vue';

// const defaultImg = 'https://images.unsplash.com/photo-1519449556851-5720b33024e7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1351&q=80';
// // const setbackgroundImg = computed(() => {

// // });
</script>
<template>
  <div class="home-background" />
</template>

<style lang="scss" scoped>
  .home-background{
    background: rgba(192,192,192,0.20);
    background-image: linear-gradient(180deg, rgba(0,0,0,0.00) 35%, rgba(0,0,0,0.35) 100%),url('https://images.unsplash.com/photo-1532344214108-1b6d425db572?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2069&q=80');
    height: 100%;
    z-index: -1;
    background-position: center;
    background-size: cover;

  }
</style>
