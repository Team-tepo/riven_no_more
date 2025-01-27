import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useCounterStore = defineStore('location', () => {
  const pos = ref('journey')
  function travel(next) {
    pos.value= next
    // todo use pos to take user to next place 
  }

  return { pos, travel }
})
