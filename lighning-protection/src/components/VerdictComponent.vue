<script setup lang="ts">
    import VerdictCalculator from '../assets/script/VerdictCalculator';
    defineProps(['data'])

    const verdict = new VerdictCalculator();
</script>
<template>
    <div class="verdict-wrapper">
        <div :class="'protection info ' + (data && verdict.isProtectionNeeded(data) ? 'alert' : 'normal')">
            <h3>Молниезащита {{ data && verdict.isProtectionNeeded(data) ? '' : 'не ' }}требуется</h3>
        </div>
        <div :class="(data && verdict.isStepVoltageProtectionNeeded(data) ? 'alert' : 'normal') + ' info'">
            <h3>Защита от шагового напряжения {{ data && verdict.isStepVoltageProtectionNeeded(data) ? '' : 'не ' }}требуется</h3>
        </div>
        <div :class="(data && verdict.isLightningRodNeeded(data) ? 'alert' : 'normal') + ' info'">
            <h3>Молниеотвод {{ data && verdict.isLightningRodNeeded(data) ? '' : 'не ' }}требуется</h3>
        </div>
        <div :class="(data && verdict.isSPDNeeded(data) ? 'alert' : 'normal') + ' info'">
            <h3>УЗП {{ data && verdict.isSPDNeeded(data) ? '' : 'не ' }}требуется</h3>
        </div>
        <div :class="(data && verdict.isShieldingNeeded(data) ? 'alert' : 'normal') + ' info'">
            <h3>Экранирование {{ data && verdict.isShieldingNeeded(data) ? '' : 'не ' }}требуется</h3>
        </div>
        <div class="info rod">
            <h3>Уровень молниезащиты для молниеотвода</h3>
            <h2>{{ data && verdict.lightningProtectionLevel(data) }}</h2>
        </div>
        <div class="info spd">
            <h3>Уровень УЗП</h3>
            <h2>{{ data && verdict.SPDLevel(data) }}</h2>
        </div>
    </div>
</template>
<style scoped>
    .verdict-wrapper {
        --cols: 4;
        display: grid;
        grid-template-columns: repeat(var(--cols), 1fr);
    }
    @media (max-width: 1000px) {
        .verdict-wrapper  {
            --cols: 2;
        }
    }
    .protection {
        grid-column-start: 1;
        grid-column-end: calc(var(--cols) + 1);
    }
    .normal {
        background-color: #af7;
        color: rgb(5, 148, 5);
    }
    .alert {
        background-color: #fba;
        color: #f00;
    }
    .info h3 {
        width: 100%;
        text-align: center;
        font-size: 30px;
        margin: 20px 0;
    }
    .info h2 {
        width: 100%;
        text-align: center;
        font-size: 40px;
        margin: 0 0 30px 0;
        color: var(--accent);
    }
    .info {
        display: flex;
        align-items: center;
        flex-direction: column;
        box-sizing: border-box;
        padding: 10px;
        justify-content: center;
    }
    .rod {
        grid-column-start: 1;
        grid-column-end: calc(var(--cols) / 2 + 1);
    }
    .spd {
        grid-column-start: calc(var(--cols) / 2 + 1);
        grid-column-end: calc(var(--cols) + 1);
    }
    .rod, .spd {
        background-color: var(--back);
    }
</style>