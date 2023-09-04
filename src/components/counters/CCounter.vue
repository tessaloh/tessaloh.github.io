<template>
  <div class="card card-body m-4">
    <h1>Composition API + Vuex</h1>
    <h2 class="text-center">{{ counter }} x 2 = {{ times2 }}</h2>
    <button class="btn btn-primary" @click="inc">Increment</button>
  </div>
</template>

<script>
import { useState, useGetters, useMutations } from "@/store/helpers";
export default {
  name: "CCounter",
  setup() {
    const { counter } = useState(["counter"]);
    const { times2 } = useGetters(["times2"]);
    const { setCounter } = useMutations(["setCounter"]);
    const inc = () => setCounter(counter.value + 1);
    return { inc, counter, times2 };
  },
};
</script>
