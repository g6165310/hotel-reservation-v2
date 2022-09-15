<script setup>
import { storeToRefs } from 'pinia';
import useLoading from '../stores/loading';

</script>
<template>
  <Teleport to="body">
    <div class="loading">
      <div class="loading-icon" />
    </div>
  </Teleport>
</template>
<style lang="scss" scoped>
  .loading {
    width: 100vw;
    height: 100vh;
    position: absolute;
    background: rgba(225,225,225);
    inset: 0;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .loading-icon {
    overflow: hidden;
    width: 162px;
    height: 162px;
    position: relative;
    &::before{
      content: "WHITE SPACE";
      @include font(32,white);
      background-color: #000;
      text-align: center;
      height: 100%;
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;

    }
    &::after{
      content: '';
      position: absolute;
      background-color: rgba(225,225,225);
      height: 150%;
      width: 150%;
      bottom: -25%;
      left: -25%;
      border-radius: 45%;
      animation: fill 2s ease-in-out infinite;
    }
  }
  @keyframes fill {
      0%{
        transform: translateY(0%) rotate(0deg);
      }
      100%{
        transform: translateY(-120%) rotate(500deg);
      }
  }
</style>
