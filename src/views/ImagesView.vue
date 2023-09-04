<template>
  <div>
    <h1>Images</h1>
    <Card url="https://cdn.svgporn.com/logos/vuetifyjs.svg" title="Vuetify"/>
    <Card url="https://cdn.svgporn.com/logos/vue.svg" title="VueJS"/>
    <Card url="https://cdn.svgporn.com/logos/react.svg" title="React"/>
    <Card url="https://cdn.svgporn.com/logos/reactivex.svg" title="ReactiveX"/>
  </div>
</template>

<script>
import Card from "@/components/testcomponent/Card.vue";

export default {
  name: "ImagesView",
  components: {
    Card,
  },
};
</script>
