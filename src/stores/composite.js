import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const UseCompositeFunc = defineStore('narrative', () => {
    const position = ref(0)
    function step(node_id){
      position.value= node_id
    }
  return { position, step }
})
