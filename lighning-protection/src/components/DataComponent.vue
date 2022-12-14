<script lang="ts" setup>
    import type { InitialData } from '@/assets/script/InitialDataType';
    import type { InputDescription } from '../assets/script/InputDescriptionType';
    import type { SelectorDescription } from '../assets/script/SelectorDescriptionType';
    import { reactive } from 'vue';
    import ValueInput from './ValueInput.vue';
    import SelectorInput from './SelectorInput.vue';
    import SaveDataComponent from './SaveDataComponent.vue';
    import LoadDataComponent from './LoadDataComponent.vue';
    import CommonCalculationResults from './CommonCalculationResults.vue';
    import RisksCalculationResults from './RisksCalculationResults.vue';
    import VerdictComponent from './VerdictComponent.vue'

    var data = reactive({Pa:1} as InitialData);
    
    const inputs : InputDescription[] = [
        { modelKey:'Pu', default: 1, label:'Pu', tooltip: 'Вероятность угрозы жизни людей (удар молнии в  систему энергоснабжения)' },
        { modelKey:'Pv', default: 1, label:'Pv', tooltip: 'Вероятность физического повреждения (удары молнии в  систему энергоснабжения)' },
        { modelKey:'Pw', default: 1, label:'Pw', tooltip: 'Вероятность повреждения внутренних систем (удары молнии в систему энергоснабжения)' },
        { modelKey:'Pz', default: 1, label:'Pz', tooltip: 'Вероятность повреждения внутренних систем (удары молнии вблизи системы энергоснабжения)' },
        { modelKey:'Lc', default: 150, label:'Lc', tooltip: 'Длина участка системы энергоснабжения от здания до первого соединительного узла, м\n\nЕсли значение LC  неизвестно, то принимают LC = 1000 м' },
        { modelKey:'p', default: 500, label:'p', tooltip: 'Удельное сопротивление земли, в которой проложена система энергоснабжения, Ом∙м\n\nЕсли значение LC удельного сопротивления земли неизвестно, то принимают p = 500 Ом∙м' },
        { modelKey:'H', default: 32, label:'H', tooltip: 'Высота защищаемого здания, м' },
        { modelKey:'L', default: 53.1, label:'L', tooltip: 'Длина защищаемого здания, м' },
        { modelKey:'W', default: 46.1, label:'W', tooltip: 'Ширина защищаемого здания, м' },
        { modelKey:'Ha', default: 4, label:'Ha', tooltip: 'Высота здания, соединенного с концом «а» системы энергоснабжения, м' },
        { modelKey:'Hc', default: 0, label:'Hc', tooltip: 'Высота проводников системы энергоснабжения над землей , м' },
        { modelKey:'La', default: 7, label:'La', tooltip: 'Длина здания, соединенного с концом «а» системы энергоснабжения, м' },
        { modelKey:'Wa', default: 6, label:'Wa', tooltip: 'Ширина здания, соединенного с концом «а» системы энергоснабжения, м' },
        { modelKey:'Td', default: 24, label:'Td', tooltip: 'Количество грозовых дней в году' },
        //{ modelKey:'', default: -1, label:'', tooltip: '' },
    ];
    const selectors : SelectorDescription[] = [
        { modelKey:'area', default: 'air', label:'Тип участка сбора данных', options: [
            {value:'underground',name:'Подземный'},
            {value:'air',name:'Воздушный'}
        ] },
        { modelKey:'Pa', default: .01, label:'Pa', tooltip: 'Вероятность поражения людей электрическим током (удары молнии в здание).\n\nОтсутствие мер молниезащиты - 1; электрическая установка токоотводов, подвергаемых действию молнии (например, из сетчатого полиэтилена не менее 3 мм) - 0,01\nЭффективное уравнивание грозовых потенциалов земли - 0,01\nПредупредительные надписи - 0,1', options: [
            {value: 1, name: '1'},
            {value: .1, name: '0.1'},
            {value: .01, name: '0.01'}
        ] },
        { modelKey:'ra', default: .00001, label:'ra=ru', tooltip: 'Фактор уменьшения, зависящий от типа поверхности земли или пола\n\nЗемля, бетон - 0,01\nМрамор, керамика - 0,001\nГравий, обивочная ткань, ковры - 0,0001\nАсфальт, линолеум, дерево - 0,00001', options: [
            {value: 0.01, name: '0.01'},
            {value: 0.001, name: '0.001'},
            {value: 0.0001, name: '0.0001'},
            {value: 0.00001, name: '0.00001'},
        ] },
        { modelKey:'Lt', default: .01, label:'Lt', tooltip: 'Поражение людей из-за контактного и шагового напряжения\n\nЛюди внутри здания - 0,0001\nЛюди за пределом здания - 0,01', options: [
            {value: 0.01, name: '0.01'},
            {value: 0.0001, name: '0.0001'}
        ] },
        { modelKey:'Pb', default: .2, label:'Pb', tooltip: 'Вероятность физического повреждения здания (удары молнии в здание)\n\nОтсутствие молниезащиты - 1\nЗдание оснащено системой молниезащиты IV класса - 0,2\nЗдание оснащено системой молниезащиты III класса - 0,1\nЗдание оснащено системой молниезащиты II класса - 0,05\nЗдание оснащено системой молниезащиты  I класса - 0,02\nЗдание с воздушной системой молниезащиты, соотвествующей системе молниезащиты I, и сплошной металлической или железобетонной конструкцией, выступающей в качестве обычного токоотвода - 0,01\nЗдание с металлической крышей или системой молниезащиты, включающее обычные элементы с полной защитой каких-либо установок на крыше от прямых ударов молнии и сплошной металлической или железобетонной конструкцией, выступающей в качестве обычного токоотвода - 0,001', options: [
            {value: 1, name: '1'},
            {value: 0.2, name: '0.2'},
            {value: 0.1, name: '0.1'},
            {value: 0.05, name: '0.05'},
            {value: 0.02, name: '0.02'},
            {value: 0.01, name: '0.01'},
            {value: 0.001, name: '0.001'}
        ] },
        { modelKey:'rp', default: .5, label:'rp', tooltip: 'Фактор уменьшения rp в зависимости от оснащения, применяемого для уменьшения последствий возгорания \n\nОснащение отсутствует - 1\nОдно из следующих оснащений: огнетушители, закрепленные управляемые вручную устройства для тушения огня; ручные пожарные извещатели, гидранты; помещения, защищенные от возгорания; защищенные пожарные выходы - 0,5\nОдно из следующих оснащений: закрепленные автоматические устройства для тушения огня; автоматические пожарные извещатели - 0,2\n\nПри применении разного оснащения используют наименьшее значение rp.\nrp = 0,2 принимается только тогда, когда имеется защита от перенапряжений  и других повреждений, и если пожарные подразделения могут прибыть в течение не более 10 мин.\nrp = 1 в зданиях с наличием риска взрыва.', options: [
            {value: 1, name: '1'},
            {value: 0.5, name: '0.5'},
            {value: 0.2, name: '0.2'},
        ] },
        { modelKey:'hz', default: 5, label:'hz', tooltip: 'Фактор увеличения hz относительно объема ущерба при наличии  особой опасности\n\nВыберите из списка:\nКакая-либо опасность отсутствует - 1\nНизкий уровень паники (например, двухэтажное здание и не более 100 чел., находящихся в нем) - 2\nСредний уровень паники (например, здания, предназначенные для проведения культурных или спортивных мероприятий с количеством участников от 100 до 1000 чел.) - 5\nЗатрудненная эвакуация (например, здания, в которых находятся люди с ограниченными физическими возможностями, больницы) - 5\nСредний уровень паники (например, здания, предназначенные для проведения культурных или спортивных мероприятий с количеством участников свыше 1000 чел.) - 10\nОпасность для близлежащей местности и окружающей среды - 20\nЗагрязнение близлежащей местности и окружающей среды - 50', options: [
            {value: 1, name: '1'},
            {value: 2, name: '2'},
            {value: 5, name: '5'},
            {value: 10, name: '10'},
            {value: 20, name: '20'},
            {value: 50, name: '50'},
        ] },
        { modelKey:'rf', default: .001, label:'rf', tooltip: 'Фактор уменьшения rf в зависимости от риска возгорания здания\n\nОпасность взрыва - 1\nВысокая опасность возгорания - 0,1\nОбычная опасность возгорания - 0,01\nНизкая опасность возгорания - 0,001\nОпасность возгорания и взрыва отсутствует - 0', options: [
            {value: 1, name: '1'},
            {value: 0.1, name: '0.1'},
            {value: 0.01, name: '0.01'},
            {value: 0.001, name: '0.001'},
            {value: 0, name: '0'},
        ] },
        { modelKey:'Lf', default: .1, label:'Lf', tooltip: 'Ущерб, относящийся к физическому повреждению\n\nБольницы, гостиницы, жилые здания - 0,1\nПромышленные, коммерческие здания, школы - 0,05\nЗдания для массового отдыха, церкви, музеи - 0,02\nДругие - 0,01', options: [
            {value: 0.1, name: '0.1'},
            {value: 0.05, name: '0.05'},
            {value: 0.02, name: '0.02'},
            {value: 0.01, name: '0.01'}
        ] },
        { modelKey:'Pc', default: .01, label:'PC=PSPD', tooltip: 'Вероятность физического повреждения внутренних систем\n\nIII-IV уровни защиты - 0,03\nII уровень - 0,02\nI уровень - 0,01\nПрименяются устройства для молниезащиты от перенапряжений с лучшими характеристиками молниезащиты (большей способности выдерживания тока, более низким уровнем молниезащиты и т.д.) по сравнению с требованиями, установленными для уровня молниезащиты в местоположениях соответствующей установки - 0,005-0,001', options: [
            {value: 0.01, name: '0.01'},
            {value: 0.02, name: '0.02'},
            {value: 0.03, name: '0.03'},
            {value: 0.001, name: '0.001'},
            {value: 0.005, name: '0.005'}
        ] },
        { modelKey:'LcLmLo', default: 0.001, label:'LC=LM=Lo', tooltip: 'Ущерб, относящийся к повреждению внутренних систем\n\nЗдание с риском взрыва - 0,1\nБольницы, здания без риска взрыва - 0,001', options: [
            {value: 0.001, name: '0.001'},
            {value: 0.1, name: '0.1'}
        ] },
        { modelKey:'Ce', default: .1, label:'Ce', tooltip: 'Фактор влияния окружающей среды\n\nГородская среда свысотой зданий более 20 м - 0\nГородская среда с высотой зданий от 10 до 20 м - 0,1\nОкружающая среда в пригородных районах, высота зданий ниже 10 м - 0,5\nСельская среда - 1', options: [
            {value: 0, name: '0'},
            {value: 0.1, name: '0.1'},
            {value: 0.5, name: '0.5'},
            {value: 1, name: '1'}
        ] },
        { modelKey:'Uw', default: 2.5, label:'Uw', tooltip: 'Импульсное выдерживаемое напряжение в зависимости от типа аппаратуры, кВ\n\nЭлектронная аппаратура - 1,5\nЭлектрическая аппаратура для потребителя электроэнергии Un < 1 кВ - 2,5\nЭлектрическая аппаратура для сети Un < 1 кВ - 6', options: [
            {value: 1.5, name: '1.5'},
            {value: 2.5, name: '2.5'},
            {value: 6, name: '6'}
        ] },
        { modelKey:'Cd', default: .5, label:'Cd=Cd/b', tooltip: 'Фактор влияния местоположения\n\nОбъект, окруженный более высокими объектами или деревьями - 0,25\nОбъект, окруженный объектами или дероевьями одинаковой высоты или более низкими - 0,5\nИзолированный объект (другие объекты в непосредственной близости от него отсутствуют) - 1\nИзолированный объект, находящийся на вершине холма или возвышенности - 2', options: [
            {value: 0.25, name: '0.25'},
            {value: 0.5, name: '0.5'},
            {value: 1, name: '1'},
            {value: 2, name: '2'}
        ] },
        { modelKey:'Ct', default: .2, label:'Ct', tooltip: 'Поправочный коэффициент учитывающий влияние высоковольтного / низковольтного трансформатора в системе энергоснабжения\n\nСистема энергоснабжения, имеющая два трансформатора с обмоткой - 0,2\nТолько система энергоснабжения - 1', options: [
            {value: .2, name: '0.2'},
            {value: 1, name: '1'}
        ] },
        { modelKey:'Cda', default: .25, label:'Cd/а', tooltip: 'Фактор влияния местоположения\n\nОбъект, окруженный более высокими объектами или деревьями - 0,25\nОбъект, окруженный объектами или дероевьями одинаковой высоты или более низкими - 0,5\nИзолированный объект (другие объекты в непосредственной близости от него отсутствуют) - 1\nИзолированный объект, находящийся на вершине холма или возвышенности - 2', options: [
            {value: 0.25, name: '0.25'},
            {value: 0.5, name: '0.5'},
            {value: 1, name: '1'},
            {value: 2, name: '2'}
        ] },
        { modelKey:'KS1', default: 1, label:'KS1', tooltip: 'Фактор, относящийся к эффективности экранирования здания  на границе 0/1\n\nКирпич, железобетон - 1\nМеталлический экран толщиной менее 0,3 мм - 0,00001\nМеталлический экран толщиной 0,3 мм и более - 0,000001', options: [
            {value: 1, name: '1'},
            {value: 0.00001, name: '0.00001'},
            {value: 0.000001, name: '0.000001'}
        ] },
        { modelKey:'KS2', default: 1, label:'KS2', tooltip: 'Фактор, относящийся к эффективности экранирования здания  на границе 0/1\n\nКирпич, железобетон - 1\nМеталлический экран толщиной менее 0,3 мм - 0,00001\nМеталлический экран толщиной 0,3 мм и более - 0,000001', options: [
            {value: 1, name: '1'},
            {value: 0.00001, name: '0.00001'},
            {value: 0.000001, name: '0.000001'}
        ] },
        { modelKey:'KS3', default: 1, label:'KS3', tooltip: 'Фактор, относящийся к характеристикам внутренней проводки\n\nНеэкранированный кабель без мер предосторожности в отношении разводки, чтобы избежать петель - 1\nНеэкранированный кабель с мерами предосторожности в отношении разводки, чтобы избежать больших петель - 0,2\nНеэкранированный кабель с мерами предосторожности в отношении разводки, чтобы избежать петель - 0,02\nЭкранированный кабель с экраном, сопротивление которого 5 <  Rs  ≤ 20 Ом/км  - 0,001\nЭкранированный кабель с экраном, сопротивление которого 1 <  Rs  ≤ 5 Ом/км  - 0,0002\nЭкранированный кабель с экраном, сопротивление которого Rs  ≤ 1 Ом/км  - 0,0001', options: [
            {value: 1, name: '1'},
            {value: 0.2, name: '0.2'},
            {value: 0.02, name: '0.02'},
            {value: 0.001, name: '0.001'},
            {value: 0.0002, name: '0.0002'},
            {value: 0.0001, name: '0.0001'}
        ] },
        { modelKey:'Lfv', default: 0.1, label:'Lfv', tooltip: 'Ущерб относящийся к физическому повреждению\n\nБольницы, гостиницы, жилые здания - 0,1\nПромышленные, коммерческие здания, школы - 0,05\nЗдания для массового отдыха, церкви, музеи - 0,02\nДругие - 0,01', options: [
            {value: 0.1, name: '0.1'},
            {value: 0.01, name: '0.01'},
            {value: 0.02, name: '0.02'},
            {value: 0.05, name: '0.05'},
        ] },
        { modelKey:'Lw', default: 0.001, label:'Lw', tooltip: 'Ущерб, относящийся к повреждению внутренних систем\n\nЗдание с риском взрыва - 0,1\nБольницы, здания без риска взрыва - 0,001', options: [
            {value: 0.1, name: '0.1'},
            {value: 0.001, name: '0.001'}
        ] }
        /*
        { modelKey:'', default: -1, label:'', tooltip: '', options: [
            {value: -1, name: 'replace'},
        ] }
        */
    ];
    function loadData(loaded : object) {
        for (const property in loaded) {
            (data as any)[property] = (loaded as any)[property];
        }
    }
</script>
<template>
    <h2>Ввод данных</h2>
    <div class="gridwrapper">
        <SelectorInput v-for="selector in selectors" v-model="(data as any)[selector.modelKey]" :label="selector.label" :tooltip="selector.tooltip" :default="selector.default" :options="selector.options" />
        <ValueInput v-for="input in inputs" v-model="(data as any)[input.modelKey]" :default="input.default" type="number" :label="input.label" :tooltip="input.tooltip" />
        <SaveDataComponent class="save" butontext="Сохранить введенные данные" filename="data.json" :content="JSON.stringify(data)" />
        <LoadDataComponent class="load" butontext="Загрузить данные" :onLoaded="loadData" :content="JSON.stringify(data)" />
    </div>
    <h2>Дополнительные вычисления</h2>
    <div class="gridwrapper">
        <CommonCalculationResults :data="data" />
    </div>
    <h2>Элементы риска R1 поражения людей в здании</h2>
    <div class="gridwrapper">
        <RisksCalculationResults :data="data" />
    </div>
    <h2>Вердикт</h2>
    <VerdictComponent :data="data" />
</template>
<style scoped>
    .save {
        grid-column-end: 2;
    }
    .gridwrapper {
        --cols: 1;
    }
    @media (min-width: 1000px) {
        .gridwrapper  {
            --cols: 2;
        }
    }
    .gridwrapper {
        display: grid;
        grid-template-columns: repeat(var(--cols), 1fr);
        column-gap: 20px;
        row-gap: 5px;
        grid-auto-rows: 50px;
    }
</style>