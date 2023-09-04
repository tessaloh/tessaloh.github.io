<template>
    <grid>
        <img :src="url" alt="Vue" />
        <h2>{{title}}</h2>
        <a 
            :href="url"
            target="_blank"
        >
            Download
        </a>
    </grid>
</template>

<script>
import Grid from './Grid.vue';
export default {
    props: {
        url: String,
        title: String,
    },
    components: {
        Grid
    }
}
</script>

<style scoped>
    img {
        width: 8rem;
        height: 8rem;
        padding: 0.5rem;
        background: #c5ab93;
        border-radius: 5px;
        border: 1px solid #f2f2f2;
    }
    a {
        text-decoration: none;
        color: #f2f2f2;
        background: #301675;
        padding: 0.3rem;
        border-radius: 5px;
        border: 1px solid #f2f2f2;
    }
</style>