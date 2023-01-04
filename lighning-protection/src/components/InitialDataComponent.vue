<script lang="ts" setup>
    import type { InitialData } from '@/assets/script/InitialDataType';
    import ValueInput from './ValueInput.vue';

    var data : InitialData = {} as InitialData;

    const a = [
        { model:data.Pa    , label:'Pa '},
        { model:data.ra    , label:'ra '},
        { model:data.Lt    , label:'Lt '},
        { model:data.Pb    , label:'Pb '},
        { model:data.rp    , label:'rp '},
        { model:data.hz    , label:'hz '},
        { model:data.rf    , label:'rf '},
        { model:data.Lf    , label:'Lf '},
        { model:data.Pc    , label:'Pc '},
        { model:data.Lm    , label:'Lm '},
        { model:data.Ce    , label:'Ce '},
        { model:data.Ks1   , label:'Ks1'},
        { model:data.Uw    , label:'Uw '},
        { model:data.Pu    , label:'Pu '},
        { model:data.Pv    , label:'Pv '},
        { model:data.Pw    , label:'Pw '},
        { model:data.Pz    , label:'Pz '},
        { model:data.Cdb   , label:'Cdb'},
        { model:data.Ct    , label:'Ct '},
        { model:data.Cda   , label:'Cda'},
        { model:data.Lc    , label:'Lc '},
        { model:data.Ks2   , label:'Ks2'},
        { model:data.p     , label:'p  '},
        { model:data.H     , label:'H  '},
        { model:data.L     , label:'L  '},
        { model:data.W     , label:'W  '},
        { model:data.Lfv   , label:'Lfv'},
        { model:data.Lw    , label:'Lw '},
        { model:data.Ha    , label:'Ha '},
        { model:data.Hc    , label:'Hc '},
        { model:data.La    , label:'La '},
        { model:data.Wa    , label:'Wa '},
        { model:data.Td    , label:'Td '},
        { model:data.Ks3   , label:'Ks3'}
    ]
</script>
<template>
  <div class="wrapper">
    <ValueInput v-for="b in a" v-model="b.model" type="number" :label="b.label" />
  </div>
</template>
<style scoped>
    .wrapper {
        display: grid;
        grid-template-columns: repeat(5, 1fr);
        column-gap: 20px
    }
</style>