<template>
  <div>
    <TestComponent msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
// @ is an alias to /src
import TestComponent from "@/components/testcomponent/TestComponent.vue";

export default {
  name: "TestView",
  components: {
    TestComponent,
  },
};
</script>
