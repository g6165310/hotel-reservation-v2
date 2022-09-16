<script setup>
import { storeToRefs } from 'pinia';
import { useRoute } from 'vue-router';
import useFetchData from '../stores/fetchdata';
import LightBox from '../components/LightBox.vue';
import AmenityList from '../components/AmenityList.vue';

const route = useRoute();
const { getRoom } = useFetchData();
const { selectedRoom } = storeToRefs(useFetchData());
getRoom(route.params.id);
</script>

<template>
  <div v-if="selectedRoom.room.name" class="room-container">
    <h1 class="logo-block ">
      <router-link to="/">
        WHITE SPACE
      </router-link>
    </h1>
    <section class="room-lightbox">
      <LightBox />
    </section>
    <section class="roomInfo">
      <div class="roomInfo-content">
        <div class="roomInfo-name">
          {{ selectedRoom.room.name }}
        </div>
        <div class="roomInfo-shortDesc">
          <p>
            房客人數限制:
            {{
              selectedRoom.room.descriptionShort.GuestMin
                + "~"
                + selectedRoom.room.descriptionShort.GuestMax
            }}人
          </p>
          <p>床型: </p>
          <p>衛浴數量: {{ selectedRoom.room.descriptionShort["Private-Bath"] }}間</p>
          <p>房間大小:{{ selectedRoom.room.descriptionShort.Footage }} 平方公尺</p>
        </div>
        <div class="roomInfo-fullDesc">
          <p>{{ selectedRoom.room.description }}</p>
        </div>
        <div class="decorative-line">
          <span />
          <span />
          <span />
        </div>
        <div class="roomInfo-checkTime">
          <div class="check-in">
            <span>Check In</span>
            {{ selectedRoom.room.checkInAndOut.checkInEarly }} —
            {{ selectedRoom.room.checkInAndOut.checkInLate }}
          </div>
          <div class="check-out">
            <span>Check Out</span>
            {{ selectedRoom.room.checkInAndOut.checkOut }}
          </div>
        </div>
        <pre>{{ selectedRoom.amenities }}</pre>
        <AmenityList :amenities="selectedRoom.room.amenities" />
      </div>
      <div class="roomInfo-price">
        <div class="normalDayPrice">
          NT.{{ selectedRoom.room.normalDayPrice }}
          <br />
          <span>平日(一~四)</span>
        </div>
        <div class="holidayPrice">
          NT.{{ selectedRoom.room.holidayPrice }}
          <br />
          <span>假日<br />(五~日、國定假日)</span>
        </div>
      </div>
      <div class="roomInfo-booking">
        <div class="calendar" />
        <div class="booking-btn" />
      </div>
    </section>
  </div>
</template>
<style lang="scss" scoped>
  .logo-block {
    position: absolute;
    width: 164px;
    height: 53px;
    @include logo(100%,100%);
    background:url("../assets/logo_block.svg") no-repeat;
    margin-bottom: 50px;
    top: $b-space;
    left: $b-space-m;
  }
  .roomInfo{
    padding: 50px 30px;
    @include responsive(md){
      display: flex;
    }
    &-content{
      @include responsive(md){
        width: 50%;
      }
    }
    &-name{
      @include font(24, #000,1.9, 27, 500);
      margin-bottom:$b-space;
    }
    &-shortDesc{
      @include font(14,#000, 1.5, 31);
      margin-bottom:$b-space;
    }
    &-fullDesc{
      @include font(12,#000, 1.3, 20);
      margin-bottom: $b-space;
    }
    &-checkTime{
      width: 100%;
      margin-bottom: $b-space;
      @include font(21,#000, 2.2, 31);
      @include responsive(sm){
        display: flex;

      }
      >.check-in,.check-out{
        span{
          display: block;
          @include font(14,#000, 1.5, 20);
        }
        @include responsive(sm){
          flex:  1;
        }
      }
      .check-in{
        margin-bottom: $b-space;
      }
    }
    &-price{
      display: flex;
      justify-content: space-between;
      @include responsive(md){
        display: block;
        width: 20%;
      }
      span{
        @include font(12,#6d7278, 1.5);
      }
    }
  }
  .normalDayPrice {
    flex: 1;
    @include font(20,#000, 3.1, 27);
  }
  .holidayPrice {
    flex: 1;
    @include font(14,#000, 1.7, 27);
  }
  .decorative-line {
    margin-bottom: $b-space-m;
    span {
      border-bottom: 1px solid #000000;
      width: 15px;
      transform: rotate(45deg);
      display: inline-block;
    }
}
</style>
