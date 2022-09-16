<script setup>
import { computed } from 'vue';

const props = defineProps({
  amenities: {
    type: Array,
    default: () => [],
  },
});
const amenities = computed(() => [
  { name: 'Wi-fi', url: 'wifi.svg', has: props.amenities['Wi-Fi'] },
  {
    name: '電視',
    url: 'television.svg',
    has: props.amenities.Television,
  },
  {
    name: '漂亮的視野',
    url: 'mountain-range.svg',
    has: props.amenities['Great-View'],
  },
  { name: '早餐', url: 'breakfast.svg', has: props.amenities.Breakfast },
  {
    name: '空調',
    url: 'breeze.svg',
    has: props.amenities['Air-Conditioner'],
  },
  {
    name: '禁止吸菸',
    url: 'no-smoke-symbol.svg',
    has: props.amenities['Smoke-Free'],
  },
  { name: 'Mini Bar', url: 'bar.svg', has: props.amenities['Mini-Bar'] },
  { name: '冰箱', url: 'fridge.svg', has: props.amenities.Refrigerator },
  {
    name: '適合兒童',
    url: 'crawling-baby-silhouette.svg',
    has: props.amenities['Child-Friendly'],
  },
  {
    name: 'Room Service',
    url: 'room_service.svg',
    has: props.amenities['Room-Service'],
  },
  { name: '沙發', url: 'sofa.svg', has: props.amenities.Sofa },
  { name: '寵物攜帶', url: 'dog.svg', has: props.amenities['Pet-Friendly'] },
]);
const imgSetter = (url) => new URL(`../assets/${url}`, import.meta.url).href;
</script>
<template>
  <div class="amenities">
    <div v-for="item in amenities" :key="item.name" class="amenities-item" :class="{ notProvide: !item.has }">
      <img :src="imgSetter(item.url)" alt="" />
      <span>{{ item.name }}</span>
    </div>
  </div>
</template>
<style lang="scss" scoped>
  .amenities {
  background-color: #f0f0f0;
  width: 100%;
  //max-width: 482px;
  padding: $b-space;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: $b-space;
  justify-content: center;
  align-items: center;
  margin-bottom: $b-space-m;
  @include responsive(md){
    margin-bottom:0;
  }
  // @include clearfix;
  &-item {
    img {
      display: block;
      margin: auto;
      width: 30px;
      height: 30px;
      vertical-align: middle;
      @include responsive(sm){
        display: inline;
      }
    }
    span {
      display: block;
      text-align: center;
      @include font(12,#000,1.3, 18);
      @include responsive(sm){
        display: inline;
        margin-left: 18px;
      }
    }
  }
  .notProvide {
    opacity: 0.3;
  }
}
</style>
