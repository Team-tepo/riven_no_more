import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import * as narr from  './dummy.json'

export const UseCompositeFunc = defineStore('narrative', () => {
    // todo replace with comp function
    const position = ref(0)
    const stim = computed(()=>narr[position])
    function increment(val) {
    console.log(val)
  }

  return { position, doubleCount, consLog }
})
