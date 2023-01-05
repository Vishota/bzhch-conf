<script lang="ts" setup>
    defineProps(['butontext', 'content', 'filename']);
    function download(text:string, name:string, type:string = 'text/plain') {
        var a = document.createElement("a");
        var file = new Blob([text], {type: type});
        a.href = URL.createObjectURL(file);
        a.download = name;
        a.click();
    }
</script>
<template>
    <div>
        <button @click="download(content, filename)">{{ butontext }}</button>
    </div>
</template>
<style scoped>
    button {
        width: 100%;
        height: 100%;
    }
</style>