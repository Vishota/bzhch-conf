<script setup lang="ts">
  import { ref } from 'vue';
  import DataComponent from './components/DataComponent.vue';
import TooltipComponent from './components/TooltipComponent.vue';
</script>

<template>
  <div class="pagewrapper">
    <main>
      <h1>Определение необходимости устройства молниезащиты зданий и сооружений по ТКП 336</h1>
      <p>Данное программное средство позволяет произвести расчеты и выявить необходимость в устройстве молниезащиты в соответствии с <a href="/docs/TKP336.pdf">ТКП 336–2011 (02230)</a>. Для получения справки о какой-либо переменной наведите курсор мыши на знак <TooltipComponent text="Пример подсказки" />. После ввода исходных данных с помощью соответствующих кнопок вы можете сохранить введенную информацию файл или загрузить ранее сохраненную.</p>
      <DataComponent />
    </main>
  </div>
</template>
<style scoped>
  main {
    width: 1000px;
    padding: 0 30px;
    background-color: var(--main);
    padding-bottom: 50px;
  }
  .pagewrapper {
    display: flex;
    justify-content: center;
  }
</style>
