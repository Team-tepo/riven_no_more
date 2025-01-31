import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import  narr from '../stores/output.json' 


export const UseCompositeFunc = defineStore('narrative', () => {
    const position = ref(narr.findIndex(item=>item.node_id==29))
    function step(idnum){
      position.value= narr.findIndex(item=>item.node_id==idnum)
      console.log( 'should go to ', idnum, 'index: ', position.value)

    }
  return { position, step, narr }
})
