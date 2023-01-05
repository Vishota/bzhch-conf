<script lang="ts" setup>
    import type { OutputDescription } from '../assets/script/OutputDescriptionType';
    import type { InitialData } from '../assets/script/InitialDataType';
    import InfoOutput from './InfoOutput.vue';
    import RiskCalculator from '../assets/script/RiskCalculator';

    var props = defineProps(['data']);

    const calculator = new RiskCalculator();

    const outputs : OutputDescription[] = [
        { label: 'RA',  valueFunc: (data:InitialData)=>{return calculator.RA(data)  },  tooltip: 'Элемент риска (поражение людей – удары молнии в здание)' },
        { label: 'RB',  valueFunc: (data:InitialData)=>{return calculator.RB(data) },   tooltip: 'Элемент риска (физическое повреждение системы энергоснабжения – удары молнии в здание)' },
        { label: 'RC',  valueFunc: (data:InitialData)=>{return calculator.RC(data) },   tooltip: 'Элемент риска (физическое повреждение внутренних систем – удары молнии в здание)' },
        { label: 'RМ',  valueFunc: (data:InitialData)=>{return calculator.RМ(data)  },  tooltip: 'Элемент риска (повреждение внутренних систем – удары молнии вблизи здания)' },
        { label: 'RU',  valueFunc: (data:InitialData)=>{return calculator.RU(data)  },  tooltip: 'Элемент риска (поражение людей – удары молнии в подсоединенную систему энергоснабжения)' },
        { label: 'RV',  valueFunc: (data:InitialData)=>{return calculator.RV(data) },   tooltip: 'Элемент риска (физическое повреждение  здания – удары молнии в подсоединенную систему энергоснабжения)' },
        { label: 'RW',  valueFunc: (data:InitialData)=>{return calculator.RW(data) },   tooltip: 'Элемент риска (повреждение внутренних систем – удары молнии в подсоединенную систему энергоснабжения)' },
        { label: 'RZ',  valueFunc: (data:InitialData)=>{return calculator.RZ(data)  },  tooltip: 'Элемент риска (повреждение внутренних систем – удары молнии вблизи системы энергоснабжения)' },
        { label: 'R1',  valueFunc: (data:InitialData)=>{return calculator.R1(data)  },  tooltip: 'Риск поражения людей в здании' }
    ]
    </script>
<template>
    <InfoOutput v-for="output in outputs" :label="output.label" :tooltip="output.tooltip" :value="output.valueFunc(data)" />
</template>