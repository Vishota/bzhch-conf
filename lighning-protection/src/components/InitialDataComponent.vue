<script lang="ts" setup>
    import type { InitialData } from '@/assets/script/InitialDataType';
    import { reactive } from 'vue';
    import ValueInput from './ValueInput.vue';
    import type { InputDescription } from '../assets/script/InputDescriptionType';

    var data = reactive({Pa:1} as InitialData);
    
    const a : InputDescription[] = [
        { modelKey:'Pa'    , label:'Pa '},
        { modelKey:'ra'    , label:'ra '},
        { modelKey:'Lt'    , label:'Lt '},
        { modelKey:'Pb'    , label:'Pb '},
        { modelKey:'rp'    , label:'rp '},
        { modelKey:'hz'    , label:'hz '},
        { modelKey:'rf'    , label:'rf '},
        { modelKey:'Lf'    , label:'Lf '},
        { modelKey:'Pc'    , label:'Pc '},
        { modelKey:'Lm'    , label:'Lm '},
        { modelKey:'Ce'    , label:'Ce '},
        { modelKey:'Ks1'   , label:'Ks1'},
        { modelKey:'Uw'    , label:'Uw '},
        { modelKey:'Pu'    , label:'Pu '},
        { modelKey:'Pv'    , label:'Pv '},
        { modelKey:'Pw'    , label:'Pw '},
        { modelKey:'Pz'    , label:'Pz '},
        { modelKey:'Cdb'   , label:'Cdb'},
        { modelKey:'Ct'    , label:'Ct '},
        { modelKey:'Cda'   , label:'Cda'},
        { modelKey:'Lc'    , label:'Lc '},
        { modelKey:'Ks2'   , label:'Ks2'},
        { modelKey:'p'     , label:'p  '},
        { modelKey:'H'     , label:'H  '},
        { modelKey:'L'     , label:'L  '},
        { modelKey:'W'     , label:'W  '},
        { modelKey:'Lfv'   , label:'Lfv'},
        { modelKey:'Lw'    , label:'Lw '},
        { modelKey:'Ha'    , label:'Ha '},
        { modelKey:'Hc'    , label:'Hc '},
        { modelKey:'La'    , label:'La '},
        { modelKey:'Wa'    , label:'Wa '},
        { modelKey:'Td'    , label:'Td '},
        { modelKey:'Ks3'   , label:'Ks3'}
    ]
</script>
<template>
  <div class="wrapper">
    <ValueInput v-for="b in a" v-model="(data as any)[b.modelKey]" type="number" :label="b.label" />
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