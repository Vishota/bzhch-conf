<script lang="ts" setup>
    defineProps(['onLoaded', 'butontext']);

    async function fileContent(e : InputEvent) : Promise<object> {
        return JSON.parse( await ((e as any).target.files[0] as File).text() );
    }
</script>
<template>
    <button>
    <label>
        <input type="file" @input="fileContent($event as InputEvent).then(c=>{ onLoaded(c) })">
        <span>{{ butontext }}</span>
    </label>
</button>
</template>
<style scoped>
    label {
        width: 100%;
        height: 100%;
    }
    label span {
        width: 100%;
        height: 100%;
        display: flex;
        cursor: pointer;
        align-items: center;
        justify-content: center;
    }
    input {
        position: absolute;
        z-index: -1;
        opacity: 0;
        display: block;
        width: 0;
        height: 0;
    }
</style>