<script lang="ts" setup>
    import type { InitialData } from '@/assets/script/InitialDataType';
    import { reactive } from 'vue';
    import ValueInput from './ValueInput.vue';
    import type { InputDescription } from '../assets/script/InputDescriptionType';
    import SelectorInput from './SelectorInput.vue';

    var data = reactive({Pa:1} as InitialData);
    
    const inputs : InputDescription[] = [
        { modelKey:'Pa'    , default: 1, label:'Pa '},
        { modelKey:'ra'    , default: .01, label:'ra '},
        { modelKey:'Lt'    , default: .01, label:'Lt '},
        { modelKey:'Pb'    , default: .2, label:'Pb '},
        { modelKey:'rp'    , default: .5, label:'rp '},
        { modelKey:'hz'    , default: 5, label:'hz '},
        { modelKey:'rf'    , default: .001, label:'rf '},
        { modelKey:'Lf'    , default: .1, label:'Lf '},
        { modelKey:'Pc'    , default: 1, label:'Pc '},
        { modelKey:'Lm'    , default: .001, label:'Lm '},
        { modelKey:'Ce'    , default: .1, label:'Ce '},
        { modelKey:'Ks1'   , default: 1, label:'Ks1'},
        { modelKey:'Uw'    , default: 2.5, label:'Uw '},
        { modelKey:'Pu'    , default: 1, label:'Pu '},
        { modelKey:'Pv'    , default: 1, label:'Pv '},
        { modelKey:'Pw'    , default: 1, label:'Pw '},
        { modelKey:'Pz'    , default: 1, label:'Pz '},
        { modelKey:'Cdb'   , default: .5, label:'Cdb'},
        { modelKey:'Ct'    , default: .2, label:'Ct '},
        { modelKey:'Cda'   , default: .25, label:'Cda'},
        { modelKey:'Lc'    , default: 150, label:'Lc '},
        { modelKey:'Ks2'   , default: 1, label:'Ks2'},
        { modelKey:'p'     , default: 500, label:'p  '},
        { modelKey:'H'     , default: 32, label:'H  '},
        { modelKey:'L'     , default: 53.1, label:'L  '},
        { modelKey:'W'     , default: 46.1, label:'W  '},
        { modelKey:'Lfv'   , default: .1, label:'Lfv'},
        { modelKey:'Lw'    , default: .001, label:'Lw '},
        { modelKey:'Ha'    , default: 4, label:'Ha '},
        { modelKey:'Hc'    , default: 0, label:'Hc '},
        { modelKey:'La'    , default: 7, label:'La '},
        { modelKey:'Wa'    , default: 6, label:'Wa '},
        { modelKey:'Td'    , default: 24, label:'Td '},
        { modelKey:'Ks3'   , default: 1, label:'Ks3'}
    ]
</script>
<template>
    <div class="wrapper">
        <ValueInput v-for="input in inputs" v-model="(data as any)[input.modelKey]" :default="input.default" type="number" :label="input.label" />
        <SelectorInput v-model="data.area" label="Тип участка сбора данных" default="air" :options="[{value:'underground',name:'Подземный'},{value:'air',name:'Воздушный'}]" />
    </div>
    {{ data }}
</template>
<style scoped>
    .wrapper {
        display: grid;
        grid-template-columns: repeat(5, 1fr);
        column-gap: 20px
    }
</style>