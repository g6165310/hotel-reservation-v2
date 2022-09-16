import { defineStore } from 'pinia';
import { ref } from 'vue';

const useLoading = defineStore('loading', () => {
  const isLoading = ref(false);
  const setLoading = (state) => {
    isLoading.value = state;
  };
  return { isLoading, setLoading };
});

export default useLoading;
