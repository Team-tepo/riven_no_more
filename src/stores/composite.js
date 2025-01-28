import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import  narr from '../stores/narrative.json' 


export const UseCompositeFunc = defineStore('narrative', () => {
    const position = ref(1)
    function step(idnum){
      position.value= narr.findIndex(item=>item.node_id==idnum)
      console.log( 'should go to ', idnum, 'is at', position.value)

    }
  return { position, step, narr }
})
