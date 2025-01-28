<script setup>
import EndScreen1 from './EndScreen1.vue'

import { computed } from 'vue';
import {UseCompositeFunc} from '../stores/composite'
const compositeStore = UseCompositeFunc();
const node = computed(() => compositeStore.position);
const narr = computed(()=>compositeStore.narr)
const travel_to = compositeStore.step;



</script>

<template>
  <!-- update this for prod to actual node id -->
  <div v-if="node==0"> 
    <EndScreen1/>
  </div>
  <!-- <div v-if="node==12">
    <p>end 2</p>   
  </div> -->
  <div v-if="node>0&&node<=10">   
    <div>
      <h1  >{{ narr[node].narr }}</h1>
      <transition>
        <div>
          <div class="btn-group" :key="node" role="group" aria-label="game choice field" v-for="item in narr[node].answers"> 
            <button type="button" class="btn"
              @click="travel_to(item.dir)"
              >{{ item.ans }}</button>
            </div>
          </div>
        </transition>
      </div>
  </div>
</template>
<style scoped>
.typewriter {
  overflow: hidden; /* Hide overflow */
  border-right: 0.15em solid gray; /* Cursor */
  white-space: nowrap; /* Keep text on one line */
  margin: 0 auto;
  letter-spacing: 0.15em;
  animation: typing 3.5s steps(40, end), blink-caret 0.75s step-end infinite;
}

@keyframes typing {
  from {
    width: 0;
  }
  to {
    width: 100%;
  }
}

@keyframes blink-caret {
  from,
  to {
    border-color: transparent;
  }
  50% {
    border-color: gray;
  }
}
</style>
