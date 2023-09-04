<template>
  <div>
    <h1>Rick and Morty</h1>
    <div class="btn-container">
      <button v-on:click="prevPage" :disabled="!prev">PREV</button>
      <button v-on:click="nextPage" :disabled="!next">NEXT</button>
    </div>
    <div class="container">
      <rm-card
        v-for="character in characters"
        :key="character.id"
        :character="character"
      />
    </div>
  </div>
</template>

<script>
import axios from "axios";
import RMCard from "./RMCard.vue";

const getData = async (url) => {
  const res = await axios.get(url);
  return res.data;
};

export default {
  data: () => ({
    characters: [],
    total: 0,
    prev: null,
    next: null,
    color: "#42b983",
    prevP: null,
    nextP: null,
  }),
  async mounted() {
    const url = "https://rickandmortyapi.com/api/character";
    const data = await getData(url);
    this.total = data?.info?.count;
    this.next = data?.info?.next;
    this.prev = data?.info?.prev;
    this.characters = data?.results;
    this.nextP = this.next ? String(this.next).at(-1) : null;
  },
  components: {
    "rm-card": RMCard,
  },
  methods: {
    async setData(url) {
      const data = await getData(url);
      this.total = data?.info?.count;
      this.next = data?.info?.next;
      this.prev = data?.info?.prev;
      this.characters = data?.results;
      this.prevP = this.prev ? String(this.prev).at(-1) : null;
      this.nextP = this.next ? String(this.next).at(-1) : null;
    },
    async nextPage() {
      if (this.next) {
        await this.setData(this.next);
      }
    },
    async prevPage() {
      if (this.prev) {
        await this.setData(this.prev);
      }
    },
  },
};
</script>

<style scoped>
.container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.btn-container {
  width: 90%;
  display: inline-block;
  justify-content: center;
  align-items: center;
  height: 20;
  margin-bottom: 12px;
}

button {
  background: v-bind(color);
  border: 1px solid v-bind(color);
  border-radius: 6px;
  box-shadow: rgba(0, 0, 0, 0.1) 1px 2px 4px;
  box-sizing: border-box;
  color: #ffffff;
  cursor: pointer;
  display: inline-block;
  font-family: nunito, roboto, proxima-nova, "proxima nova", sans-serif;
  font-size: 16px;
  font-weight: 800;
  line-height: 16px;
  min-height: 40px;
  margin-right: 5px;
  outline: 0;
  padding: 12px 14px;
  text-align: center;
  text-rendering: geometricprecision;
  text-transform: none;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  vertical-align: middle;
}

button:hover,
button:active {
  background-color: initial;
  background-position: 0 0;
  color: v-bind(color);
}

button:active {
  opacity: 0.5;
}
</style>