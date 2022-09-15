import { defineStore } from 'pinia';
import { ref } from 'vue';

const useWindow = defineStore('window', () => {
  const isMobile = ref(false);
  const matcher = window.matchMedia('(min-width: 768px)');
  const setIsMobile = (e) => {
    if (e.matches) {
      isMobile.value = false;
    } else {
      isMobile.value = true;
    }
  };

  const setDetector = () => {
    matcher.addEventListener('change', setIsMobile);
  };
  const removeDetector = () => {
    matcher.removeEventListener('change', setIsMobile);
  };
  return { isMobile, setDetector, removeDetector };
});

export default useWindow;
