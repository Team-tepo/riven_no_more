<script setup>
import { useCounterStore } from '../stores/counter'; 
const counterStore = useCounterStore();
const increment = counterStore.increment;
const decrement = counterStore.decrement;
const reset = counterStore.reset;


</script>

<template>
      <div>
    <p>Counter: {{ counterStore.count }}</p>
    <button @click="increment">Increment</button>
    <button @click="decrement">Decrement</button>
    <button @click="reset">Reset</button>
  </div>
</template>
