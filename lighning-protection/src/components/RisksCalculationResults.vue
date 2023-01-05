<script lang="ts" setup>
    import type { OutputDescription } from '../assets/script/OutputDescriptionType';
    import type { InitialData } from '../assets/script/InitialDataType';
    import InfoOutput from './InfoOutput.vue';
    import RiskCalculator from '../assets/script/RiskCalculator';
    
    var props = defineProps(['data']);

    const calculator = new RiskCalculator();

    const outputs : OutputDescription[] = [
        { label: 'RA',  valueFunc: (data:InitialData)=>{return calculator.RA(data)  },  tooltip: '' },
        { label: 'RB',  valueFunc: (data:InitialData)=>{return calculator.RB(data) },   tooltip: '' },
        { label: 'RC',  valueFunc: (data:InitialData)=>{return calculator.RC(data) },   tooltip: '' },
        { label: 'RМ',  valueFunc: (data:InitialData)=>{return calculator.RМ(data)  },  tooltip: '' },
        { label: 'RU',  valueFunc: (data:InitialData)=>{return calculator.RU(data)  },  tooltip: '' },
        { label: 'RV',  valueFunc: (data:InitialData)=>{return calculator.RV(data) },   tooltip: '' },
        { label: 'RW',  valueFunc: (data:InitialData)=>{return calculator.RW(data) },   tooltip: '' },
        { label: 'RZ',  valueFunc: (data:InitialData)=>{return calculator.RZ(data)  },  tooltip: '' },
        { label: 'R1',  valueFunc: (data:InitialData)=>{return calculator.R1(data)  },  tooltip: '' }
    ]
    </script>
<template>
    <InfoOutput v-for="output in outputs" :label="output.label" :tooltip="output.tooltip" :value="output.valueFunc(data)" />
</template>