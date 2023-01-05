<script lang="ts" setup>
    import type { OutputDescription } from '../assets/script/OutputDescriptionType';
    import type { InitialData } from '../assets/script/InitialDataType';
    import CommonValuesCalculator from '../assets/script/CommonValuesCalculator';
    import InfoOutput from './InfoOutput.vue';
    var props = defineProps(['data']);

    const calculator = new CommonValuesCalculator();

    const outputs : OutputDescription[] = [
        { label: 'AM',      valueFunc: (data:InitialData)=>{return calculator.AM(data)  }, tooltip: 'Участок воздействия ударов молнии вблизи системы энергоснабжения' },
        { label: 'Ada',     valueFunc: (data:InitialData)=>{return calculator.Ada(data) }, tooltip: 'Участок сбора данных относительно ударов молнии в отдельное здание' },
        { label: 'Ad/b',    valueFunc: (data:InitialData)=>{return calculator.Adb(data) }, tooltip: 'Участок сбора данных относительно ударов молнии в отдельное здание' },
        { label: 'Ai',      valueFunc: (data:InitialData)=>{return calculator.Ai(data)  }, tooltip: 'Участок сбора данных относительно ударов молнии вблизи системы энергоснабжения' },
        { label: 'Al',      valueFunc: (data:InitialData)=>{return calculator.Al(data)  }, tooltip: 'Участок сбора данных относительно ударов молнии в систему энергоснабжения' },
        { label: 'KS4',     valueFunc: (data:InitialData)=>{return calculator.KS4(data) }, tooltip: 'Фактор, относящийся к импульсному выдерживаемому напряжению' },
        { label: 'Kms',     valueFunc: (data:InitialData)=>{return calculator.Kms(data) }, tooltip: 'Фактор, определяющий технические характеристики принятых мер молниезащиты' },
        { label: 'LB',      valueFunc: (data:InitialData)=>{return calculator.LB(data)  }, tooltip: 'Ущерб, связанный с поражением людей' },
        { label: 'La',      valueFunc: (data:InitialData)=>{return calculator.La(data)  }, tooltip: 'Ущерб, связанный с поражением людей' },
        { label: 'Lu',      valueFunc: (data:InitialData)=>{return calculator.Lu(data)  }, tooltip: 'Ущерб, связанный с поражением людей (удары молнии в систему энергоснабжения)' },
        { label: 'Lv',      valueFunc: (data:InitialData)=>{return calculator.Lv(data)  }, tooltip: 'Ущерб , связанный с поражением людей' },
        { label: 'ND',      valueFunc: (data:InitialData)=>{return calculator.ND(data)  }, tooltip: 'Количество опасных случаев, возникающих в результате ударов молнии в здание' },
        { label: 'NL',      valueFunc: (data:InitialData)=>{return calculator.NL(data)  }, tooltip: 'Количество опасных случаев, возникающих в результате ударов молнии в систему энергоснабжения' },
        { label: 'NM',      valueFunc: (data:InitialData)=>{return calculator.NM(data)  }, tooltip: 'Количество опасных случаев, возникающих в результате ударов молнии вблизи здания ' },
        { label: 'Nda',     valueFunc: (data:InitialData)=>{return calculator.Nda(data) }, tooltip: 'Количество опасных случаев, возникающих в результате ударов молнии в здание на конце «а» линии' },
        { label: 'Ng',      valueFunc: (data:InitialData)=>{return calculator.Ng(data)  }, tooltip: 'Плотность ударов молнии в землю' },
        { label: 'Nl',      valueFunc: (data:InitialData)=>{return calculator.Nl(data)  }, tooltip: 'Количество опасных случаев, возникающих в результате ударов молнии вблизи системы энергоснабжения' },
        { label: 'Pm',      valueFunc: (data:InitialData)=>{return calculator.Pm(data)  }, tooltip: 'Вероятность повреждения внутренних систем (удары молнии вблизи здания)' },
    ]
    </script>
<template>
    <InfoOutput v-for="output in outputs" :label="output.label" :tooltip="output.tooltip" :value="output.valueFunc(data)" />
</template>