<template>
  <div class="contactInfo">
    <div class="contactInfo-social">
      <a href="#">
        <img src="../assets/facebook-square-brands.svg" alt="facebook icon" />
      </a>
      <a href="#">
        <img src="../assets/instagram-brands.svg" alt="instagram icon" />
      </a>
    </div>
    <div class="contactInfo-list">
      <ul>
        <li>
          <img src="../assets/phone-alt-solid.svg" alt="phone icon" />02-17264937
        </li>
        <li>
          <img src="../assets/envelope-solid.svg" alt="email icon" />whitespace@whitespace.com.tw
        </li>
        <li>
          <img src="../assets/home-solid.svg" alt="address icon" />台北羅斯福路十段30號
        </li>
      </ul>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.contactInfo{
  @include font(14,#fff);
  @include responsive(sm){
    display: flex;
  }
  &-social{
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    padding-bottom: $b-space;
    margin-bottom: $b-space;
    &::after{
      content: '';
      position: absolute;
      bottom: 0;
      width: 50%;
      border-bottom: 2px solid #fff;
      @include responsive(sm){
        display: none;
      }
    }
    @include responsive(sm){
      margin-bottom: 0;
      padding-bottom: 0;
      padding-right: $b-space-m;
      margin-right: $b-space-m;
      border-right: 2px solid #fff;
    }
    a{
      width: 25px;
      height: 25px;
      display: block;
      >img{
        width: 100%;
        height: 100%;
      }
      &:first-child{
        margin-right: $b-space;
      }
    }
  }
  &-list{

    li{
      text-align: left;
      margin-bottom: $b-space;
      &:last-child{
        margin-bottom: 0;
      }
    }
    img{
      width: 20px;
      height: 20px;
      margin-right: $b-space;
      vertical-align: text-bottom;
    }
  }
}
</style>
