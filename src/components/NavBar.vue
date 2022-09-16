<script setup>
import { storeToRefs } from 'pinia';
import useFetchData from '../stores/fetchdata';
import useHomeBackground from '../stores/homebackground';

const fetchDataStore = useFetchData();
const { rooms } = storeToRefs(fetchDataStore);
const { changeImgURL } = useHomeBackground();
</script>
<template>
  <div class="navbar">
    <ul>
      <li
        v-for="(room) in rooms"
        :key="room.id"
        @mouseover="changeImgURL(room.imageUrl)"
        @focus="changeImgURL(room.imageUrl)"
      >
        <router-link
          :to="
            {
              name: 'room',
              params:
                {
                  id:
                    room.id,
                },
            }"
        >
          {{ room.name }}
        </router-link>
      </li>
    </ul>
  </div>
</template>
<style lang="scss" scoped>
  .navbar {
    position: relative;
    right: 0;
    top: 50px;
    width: 305px;
    background-color: #fff;
    padding: 34px 37px;
    text-align: left;
    transform: translateX(100%);
    transition: 1s;
    &:after {
      content: "";
      position: absolute;
      bottom: -20px;
      right: 0;
      width: 280px;
      height: 20px;
      background: repeating-linear-gradient(
        45deg,
      rgba(255, 255, 255, 0.3),
      rgba(255, 255, 255, 0.3) 7px,
      #fff 7px,
      #fff 8px
      );
    }
    a{
      @include font(16,$spacing:1.5);
      padding: 18.5px 0px;
      line-height: 20px;
      display: block;
      width: 100%;
      height: 100%;
      position: relative;
      &:hover {
        &:before {
          position: absolute;
          content: '';
          width: 23px;
          height: 2px;
          background: #000;
          top: 50%;
          left: -35px;
          transform: translateY(-50%);
        }
      }
    }
  }
</style>
