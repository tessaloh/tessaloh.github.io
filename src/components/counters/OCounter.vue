<template>
  <div>
    <h1>Options API + Vuex</h1>
    <h2>{{ counter }} x 2 = {{ times2 }}</h2>
    <button @click="inc">Increment</button>
  </div>
</template>

<script>
import { mapGetters, mapMutations, mapState } from 'vuex';
export default {
  name: "OCounter",
  computed: {
    ...mapState(['counter']),
    ...mapGetters(['times2'])
  },
  methods: {
    ...mapMutations(['setCounter']),
    inc() {
      this.setCounter(this.counter + 1)
    }
  }
}
</script>