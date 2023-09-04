<template>
    <h3 class="text-center">Progress: {{ percentage.toFixed(1) }}%</h3>
    <div class="progress">
        <div 
            class="progress-bar progress-bar-striped progress-bar-animated bg-success"
            role="progressbar"
            :aria-valuenow="percentage"
            aria-valuemin="0"
            aria-valuemax="100"
            :style="`width: ${percentage}%`"
        >
        </div>
    </div>
</template>

<script>
export default {
    props: {
        percentage: Number
    }
}
</script>

