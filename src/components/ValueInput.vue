<script lang="ts" setup>
    import TooltipComponent from './TooltipComponent.vue';

    const emits = defineEmits(['update:modelValue']);
    
    var props = defineProps(['modelValue', 'type', 'label', 'default', 'min', 'max', 'tooltip']);

    if(props.default !== undefined) {
        emits.call(null, 'update:modelValue', props.default);
    }

    function onInput(e : InputEvent) {
        emits.call(null, 'update:modelValue', (e as any).target.value);
    }
</script>
<template>
    <div>
        <div class="container">
            <div class="label">
                <p>{{ label }}:</p>
                <TooltipComponent :text="tooltip" />
            </div>
            <input :type="type == undefined ? 'text' : type" :placeholder="label" :value="modelValue" @input="onInput($event as InputEvent)" :min="min" :max="max">
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
    }
    .label {
        display: flex;
        align-items: center;
    }
</style>