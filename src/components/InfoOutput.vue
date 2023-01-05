<script lang="ts" setup>
    import TooltipComponent from './TooltipComponent.vue';
    
    var props = defineProps(['label', 'value', 'tooltip']);
</script>
<template>
    <div>
        <div class="container">
            <div class="label">
                <p>{{ label }}:</p>
                <TooltipComponent :text="tooltip" />
            </div>
            <input disabled :value="value">
        </div>
    </div>
</template>
<style scoped>
    .container {
        display: grid;
        grid-template-columns: 1fr 3fr;
        height: 100%;
    }
    input, p {
        width: 100%;
    }
    
    input {
        box-sizing: border-box;
        padding: 10px;
        border-radius: 0;
        border: 1px solid var(--accent);
    }
    .label {
        display: flex;
        align-items: center;
    }
</style>