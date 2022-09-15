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
  @include responsive(md){
    position: absolute;
    bottom: 75px;
    right: 30px;
  }
  &-social{
    display: flex;
    justify-content: center;
    position: relative;
    margin-bottom: $b-space;
    a{
      width: 25px;
      height: 25px;
      display: block;
      margin-right: $b-space;
      >img{
        width: 100%;
        height: 100%;
      }
    }
    &::after{
      content: '';
      position: absolute;
      width: 50%;
      bottom: -12px;
      border-bottom: 1px solid #fff;
      @include responsive(md){
        display: none;
      }
    }
    @include responsive(md){
      justify-content: start;
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
