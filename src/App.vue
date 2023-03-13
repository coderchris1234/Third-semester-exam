<template>
  <div>
   <p>Count: {{ count }}</p>
   <button @click="increment">Increment</button>
   <button @click="decrement">Decrement</button>
   <button @click="reset">Reset</button>
   <button @click="setValue(10)">Set to 10</button>
 </div>
</template>

<script>
import useCounter from './useCounter.js';

export default {
 setup() {
   const { count, increment, decrement, reset, setValue } = useCounter();

   return {
     count,
     increment,
     decrement,
     reset,
     setValue,
   };
 },
};
</script>

<style>
#app {
 font-family: Avenir, Helvetica, Arial, sans-serif;
 -webkit-font-smoothing: antialiased;
 -moz-osx-font-smoothing: grayscale;
 text-align: center;
 color: #2c3e50;
 margin-top: 60px;
}
</style>


<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
