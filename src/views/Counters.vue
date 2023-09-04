<template>
    <div class="container">
      <OCounter />
      <hr/>
      <CCounter /> 
      <hr/>
      <h1>{{count}}</h1>
      <button @click="inc">Increment</button>
      <button @click="dec">Decrement</button>
    </div>
</template>

<script>
import CCounter from '@/components/counters/CCounter.vue';
import OCounter from '@/components/counters/OCounter.vue';
import { useState, useMutations } from '@/store/helpers';

export default {
    name: "Counters",
    components: {
        CCounter,
        OCounter
    },
    setup(){
        const { count } = useState(["count"]);
        const { increment } = useMutations(["increment"]);
        const { decrement } = useMutations(["decrement"]);
        const inc = () => {
            increment();
        }
        const dec = () => {
            decrement();
        }
        return {
            inc, dec, count
        }
    }
}
</script>


<style scoped>
button {
  padding: 10px;
  margin: 5px;
  border-radius: 30px;
}
</style>