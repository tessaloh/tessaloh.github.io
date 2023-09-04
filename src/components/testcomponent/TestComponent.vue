<template>
  <div>
    <small>
      <h1>Testing VUE APP</h1>
    </small>
    <hr />

    <h2>Counter: {{ counter }}</h2>
    <button @click="increase()">+</button>
    <button @click="decrease()" :disabled="counter < 1">-</button>
    <button @click="reset()">Reset</button>
  </div>
</template>

<script>
export default {
  name: "TestComponent",
  data: () => ({
    counter: 0,
  }),
  methods: {
    increase() {
      this.$data.counter++;
    },
    decrease() {
      this.$data.counter--;
    },
    reset() {
      this.$data.counter = 0;
    }
  }
};
</script>

<style scoped>
.container {
  background-color: #ccc;
  text-align: center;
}
button {
  cursor: pointer;
  font-size: 1.5rem;
  margin: 0px 6px;
  border-radius: 10px;
}
h1 {
  font-weight: bolder;
}
small {
  columns: rgb(90, 89, 89);
}
</style>