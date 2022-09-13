<template>
  <header>
    <h1 class="logo-w">
      <router-link to="/">
        White Space
      </router-link>
    </h1>
  </header>
  <main>
    <router-view />
  </main>
  <footer>
    <p>&copy; Copyright 2022 g6165310@gmail.com</p>
  </footer>
</template>

<style lang="scss" scoped>
  header{
    position: absolute;
    top: 30%;
    left: 50%;
    transform: translate(-50%,-10%);
    z-index: 999;
    @include responsive(md){
      top: 47px;
      left: 54px;
      transform: none;
    }
    @media screen and (orientation: landscape){
      top: 10%;
    }
  }
  main{
    width: 100%;
    height: 100%;
    position: relative;
  }
  .logo{

  }
  .logo-w {
    width: 162px;
    height: 162px;
    @include logo(100%,100%);
    background:url("../assets/logo_white.svg") no-repeat;
  }
  .logo-b{
    width: 164px;
    height: 53px;
  }
</style>
