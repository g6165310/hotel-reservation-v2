import { defineStore } from 'pinia';
// import { computed, ref } from 'vue';
import { useRoute } from 'vue-router';

const useLogoStore = defineStore('counter', () => {
  const route = useRoute();
  return { route };
});

export default useLogoStore;
