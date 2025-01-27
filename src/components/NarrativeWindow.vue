<script setup>
import  narr from '../stores/dummy.json'
import {UseCompositeFunc} from '../stores/composite'
const compositeStore = UseCompositeFunc();
const node = compositeStore.position;
const travel_to = compositeStore.step;
console.log('this is from narr', narr[node].answers[0].ans)



</script>

<template>
      <div>
    <!-- <p>Counter: {{ counterStore.count }}</p>
    <button @click="increment">Increment</button>
    <button @click="decrement">Decrement</button>
    <button @click="reset">Reset</button> -->

    <h1 >{{ narr[node].narr }}</h1>
    <div class="btn-group" role="group" aria-label="game choice field" v-for="node in narr[node].answers"> 
    <button type="button" class="btn">{{ node.ans }}</button>
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
