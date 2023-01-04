<script lang="ts" setup>import type { OptionDescription } from '@/assets/script/OptionDescriptoponType';

    const emits = defineEmits(['update:modelValue']);
    //console.log(emits.call(null, 'update:modelValue', 1));
    
    var props = defineProps(['modelValue', 'label', 'default', 'options']);

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
            </div>
            <select placeholder="test" :value="modelValue" @input="onInput($event as InputEvent)">
                <option v-for="option in (options as OptionDescription[])" :value="option.value">{{ option.name }}</option>
            </select>
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
        padding: 15px;
    }
    .label {
        display: flex;
        align-items: center;
    }
</style>