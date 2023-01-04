<script lang="ts" setup>
    import type { InitialData } from '@/assets/script/InitialDataType';
    import { reactive } from 'vue';
    import ValueInput from './ValueInput.vue';
    import type { InputDescription } from '../assets/script/InputDescriptionType';
    import type { SelectorDescription } from '../assets/script/SelectorDescriptionType';
    import SelectorInput from './SelectorInput.vue';
    import SaveDataComponent from './SaveDataComponent.vue';
    import LoadDataComponent from './LoadDataComponent.vue';

    var data = reactive({Pa:1} as InitialData);
    
    const inputs : InputDescription[] = [
        { modelKey:'ra'     , default: .01,     label:'ra ', tooltip: 'Фактор уменьшения, зависящий от типа поверхности земли или пола' },
        { modelKey:'Lt'     , default: .01,     label:'Lt ', tooltip: 'replace it' },
        { modelKey:'Pb'     , default: .2,      label:'Pb ', tooltip: 'replace it' },
        { modelKey:'rp'     , default: .5,      label:'rp ', tooltip: 'replace it' },
        { modelKey:'hz'     , default: 5,       label:'hz ', tooltip: 'replace it' },
        { modelKey:'rf'     , default: .001,    label:'rf ', tooltip: 'replace it' },
        { modelKey:'Lf'     , default: .1,      label:'Lf ', tooltip: 'replace it' },
        { modelKey:'Pc'     , default: 1,       label:'Pc ', tooltip: 'replace it' },
        { modelKey:'Lm'     , default: .001,    label:'Lm ', tooltip: 'replace it' },
        { modelKey:'Ce'     , default: .1,      label:'Ce ', tooltip: 'replace it' },
        { modelKey:'Ks1'    , default: 1,       label:'Ks1', tooltip: 'replace it' },
        { modelKey:'Uw'     , default: 2.5,     label:'Uw ', tooltip: 'replace it' },
        { modelKey:'Pu'     , default: 1,       label:'Pu ', tooltip: 'replace it' },
        { modelKey:'Pv'     , default: 1,       label:'Pv ', tooltip: 'replace it' },
        { modelKey:'Pw'     , default: 1,       label:'Pw ', tooltip: 'replace it' },
        { modelKey:'Pz'     , default: 1,       label:'Pz ', tooltip: 'replace it' },
        { modelKey:'Cdb'    , default: .5,      label:'Cdb', tooltip: 'replace it' },
        { modelKey:'Ct'     , default: .2,      label:'Ct ', tooltip: 'replace it' },
        { modelKey:'Cda'    , default: .25,     label:'Cda', tooltip: 'replace it' },
        { modelKey:'Lc'     , default: 150,     label:'Lc ', tooltip: 'replace it' },
        { modelKey:'Ks2'    , default: 1,       label:'Ks2', tooltip: 'replace it' },
        { modelKey:'p'      , default: 500,     label:'p  ', tooltip: 'replace it' },
        { modelKey:'H'      , default: 32,      label:'H  ', tooltip: 'replace it' },
        { modelKey:'L'      , default: 53.1,    label:'L  ', tooltip: 'replace it' },
        { modelKey:'W'      , default: 46.1,    label:'W  ', tooltip: 'replace it' },
        { modelKey:'Lfv'    , default: .1,      label:'Lfv', tooltip: 'replace it' },
        { modelKey:'Lw'     , default: .001,    label:'Lw ', tooltip: 'replace it' },
        { modelKey:'Ha'     , default: 4,       label:'Ha ', tooltip: 'replace it' },
        { modelKey:'Hc'     , default: 0,       label:'Hc ', tooltip: 'replace it' },
        { modelKey:'La'     , default: 7,       label:'La ', tooltip: 'replace it' },
        { modelKey:'Wa'     , default: 6,       label:'Wa ', tooltip: 'replace it' },
        { modelKey:'Td'     , default: 24,      label:'Td ', tooltip: 'replace it' },
        { modelKey:'Ks3'    , default: 1,       label:'Ks3', tooltip: 'replace it' }
    ];
    const selectors : SelectorDescription[] = [
        { modelKey:'Pa'     , default: 'air',       label:'Pa ', tooltip: 'Вероятность поражения людей электрическим током  (удары молнии в здание)', options: [
            {value:'underground',name:'Подземный'},
            {value:'air',name:'Воздушный'}
        ] },
        { modelKey:'Pa'     , default: '1',       label:'Pa ', tooltip: 'Вероятность поражения людей электрическим током  (удары молнии в здание)', options: [
            {value:'1', name: '1'},
            {value:'0.1', name: '0.1'},
            {value:'0.01', name: '0.01'}
        ] }
    ];

    function loadData(loaded : object) {
        for (const property in loaded) {
            (data as any)[property] = (loaded as any)[property];
        }
    }
</script>
<template>
    <div class="wrapper">
        <SelectorInput v-for="selector in selectors" v-model="(data as any)[selector.modelKey]" :label="selector.label" :tooltip="selector.tooltip" :default="selector.default" :options="selector.options" />
        <ValueInput v-for="input in inputs" v-model="(data as any)[input.modelKey]" :default="input.default" type="number" :label="input.label" :tooltip="input.tooltip" />
        <SaveDataComponent butontext="Сохранить введенные данные" filename="data.json" :content="JSON.stringify(data)" />
        <LoadDataComponent butontext="Загрузить данные" :onLoaded="loadData" :content="JSON.stringify(data)" />
    </div>
    {{ data }}
</template>
<style scoped>
    .wrapper {
        display: grid;
        grid-template-columns: repeat(5, 1fr);
        column-gap: 20px;
        grid-auto-rows: 50px;
    }
</style>