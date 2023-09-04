<template>
    <div class="row pb-2">
        <div class="col-12 col-md-2">
            <h1>Form</h1>
        </div>
        <div class="col-12 col-md-10">
            <img :src="url" width="100">
        </div>
    </div>
    <hr/>
</template>

<script>
export default {
    data: () => ({
        url: 'https://cdn.svgporn.com/logos/vue.svg'
    })
}
</script>