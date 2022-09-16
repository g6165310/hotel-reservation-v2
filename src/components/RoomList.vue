<script setup>
import { storeToRefs } from 'pinia';
import useFetchData from '../stores/fetchdata';

const { rooms } = storeToRefs(useFetchData());
</script>

<template>
  <div class="roomList-container">
    <ul class="room-list">
      <li v-for="(room) in rooms" :key="room.id" class="room-card">
        <router-link :to="{ name: 'room', params: { id: room.id } }">
          <img :src="room.imageUrl" alt="">
          <div class="room-desc">
            <div class="room-name">
              {{ room.name }}
            </div>
            <div class="room-price">
              NT.{{ room.normalDayPrice }}
              <span>平日</span>
              <small class="room-holidayPrice"> NT.{{ room.holidayPrice }} 假日</small>
            </div>
          </div>
        </router-link>
      </li>
    </ul>
  </div>
</template>
<style lang="scss" scoped>
  .roomList-container{
    margin-bottom:  $b-space-m;
    @include responsive(md){
      transform: translateY(-120px);
    }
  }
  .room{
    &-list{
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      gap: $b-space-m $b-space-m;
    }
    &-card{
      position: relative;
      width: 300px;
      height: 350px;

      box-shadow: 2px 2px 9px 0 rgba(0,0,0,0.18);
      overflow: hidden;
      img{
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: bottom;
        transition: transform  0.2s ease-in-out;
      }
      &:hover{
        img{

          transform: scale(1.2);
        }
        .room-desc{
          height: 90px;
        }
      }
    }
    &-desc{
      position: absolute;
      padding:$b-space;
      background-color: #F7F7F7;
      height: 50px;
      width: 100%;
      bottom: 0px;
      transition: height 0.2s ease-in-out;
    }
    &-name{
      @include font(14,#000,1.46);
      margin-bottom: $b-space-m;
    }
  }
</style>
