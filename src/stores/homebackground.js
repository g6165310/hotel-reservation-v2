import { defineStore } from 'pinia';
import { computed, ref } from 'vue';

const useHomeBackground = defineStore('home-background', () => {
  const imgURL = ref('https://images.unsplash.com/photo-1532344214108-1b6d425db572?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2069&q=80');

  const changeImgURL = (url) => {
    imgURL.value = url;
  };
  const setHomeBackground = computed(() => {
    console.log(`linear-gradient(180deg, rgba(0,0,0,0.00) 35%, rgba(0,0,0,0.35) 100%),url(${imgURL.value});`);
    return `linear-gradient(180deg, rgba(0,0,0,0.00) 35%, rgba(0,0,0,0.35) 100%),url(${imgURL.value})`;
  });
  return { imgURL, changeImgURL, setHomeBackground };
});

export default useHomeBackground;
