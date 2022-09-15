<script setup>
import { storeToRefs } from 'pinia';
import { watch } from 'vue';
import { useRoute } from 'vue-router';
import useFetchData from '../stores/fetchdata';
import LightBox from '../components/LightBox.vue';

const route = useRoute();
const { getRoom } = useFetchData();
const { selectedRoom } = storeToRefs(useFetchData());
getRoom(route.params.id);
watch(selectedRoom, () => {
  console.log(selectedRoom.value.room);
}, { deep: true });
</script>

<template>
  <LightBox />
  <pre>{{ selectedRoom.room }}</pre>
</template>
