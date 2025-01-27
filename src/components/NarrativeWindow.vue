<script setup>
import  narr from '../stores/dummy.json' // update to composite.json in production
import { computed } from 'vue';
import {UseCompositeFunc} from '../stores/composite'
const compositeStore = UseCompositeFunc();
const node = computed(() => compositeStore.position);
const travel_to = compositeStore.step;



</script>

<template>
      <div>
        <transition>
          <div :key="node">

            <h1  >{{ narr[node].narr }}</h1>
            <div class="btn-group" role="group" aria-label="game choice field" v-for="item in narr[node].answers"> 
              <button type="button" class="btn"
              @click="travel_to(item.dir)"
              >{{ item.ans }}</button>
            </div>
          </div>
        </transition>
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
