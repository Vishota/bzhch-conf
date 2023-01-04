<script lang="ts" setup>
    import { ref } from 'vue';
    defineProps(['text']);
    
    var show = ref(false);
</script>
<template>
    <div class="box" v-if="text != undefined">
        <div class="info-ico" @mouseenter="show = true" @mouseleave="show = false">
            <p>i</p>
        </div>
        <div class="tooltip" v-show="show">
            {{ text }}
        </div>
    </div>
</template>
<style scoped>
    .box {
        margin: 2px;
    }
    .info-ico {
        background-color: var(--accent);
        color: var(--dark);

        width: 20px;
        height: 20px;
        border-radius: 15px;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
    }
    .tooltip {
        background-color: var(--back);
        border: 1px solid var(--accent);
        position: absolute;
        z-index: 2;
        max-width: 300px;
        box-sizing: border-box;
        padding: 10px;
        border-radius: 10px;
    }
</style>