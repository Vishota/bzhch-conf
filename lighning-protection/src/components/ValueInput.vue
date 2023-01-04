<script lang="ts" setup>
    var props = defineProps(['modelValue', 'type', 'label'])
</script>
<template>
    <div>
        <div class="container">
            <p>{{ label }}:</p>
            <input :type="type == undefined ? 'text' : type" placeholder="test" :value="modelValue" @input="$emit('update:modelValue', ($event as any).target.value)">
        </div>
    </div>
</template>
<style scoped>
    .container {
        display: grid;
        grid-template-columns: 1fr 3fr;
    }
    input, p {
        width: 100%;
    }
</style>