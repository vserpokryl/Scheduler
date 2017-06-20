<template>
    <div>
        <div class="wrapper">
            <div class="header header-filter"></div>
            <div class="main main-raised">
                <div class="container">
                    <h3>Учебная нагрузка</h3>
                    <div class="row">
                        <h4>Выберите факультет</h4>
                        <v-select
                            :options="faculties"
                            v-model="faculty"
                            placeholder="Выберите факультет">
                            <div slot="no-options">Ничего не найдено</div>
                        </v-select>
                    </div>
                    <div class="row">
                        <h4>Выберите группу</h4>
                        <v-select
                            :options="groups"
                            v-model="group"
                            placeholder="Выберите группу">
                            <div slot="no-options">Ничего не найдено</div>
                        </v-select>
                    </div>
                    <div class="row">
                        <h4>Выберите период учебы для которого нужно заполнить учебную нагрузку</h4>
                        <v-select
                            :options="periods_of_study_format"
                            v-model="period_of_study"
                            placeholder="Выберите период учебы">
                            <div slot="no-options">Ничего не найдено</div>
                        </v-select>
                    </div>

                    <hr>
                    <div class="row">
                        <h4>Добавить период действия дисциплин в семестре{{ group ? ' для группы ' : '' }}{{ group }}</h4>

                        <div class="col-md-6">
                            <datepicker
                                label="Дата начала действия дисциплин"
                                name="start_of_study"
                                :config="configStartDateDisciplines"
                                v-model="start_date_disciplines"
                                :error="start_date_disciplines_error"
                                @error="start_date_disciplines_error = arguments[0]"
                            >
                            </datepicker>
                        </div>
                        <div class="col-md-6">
                            <datepicker
                                label="Дата конца действия дисциплин"
                                name="end_of_study"
                                :config="configEndDateDisciplines"
                                v-model="end_date_disciplines"
                                :error="end_date_disciplines_error"
                                @error="end_date_disciplines_error = arguments[0]"
                            >
                            </datepicker>
                        </div>

                        <div class="col-md-12">
                            <input type="submit" class="btn pull-right btn-success" value="Добавить">
                        </div>

                    </div>

                    <div class="row">
                        <h4>Управление периодами действия дисциплин в семестре{{ group ? ' для группы ' : '' }}{{ group }}</h4>

                        <v-table :data="periods_of_disciplines" :columns="periods_of_disciplines_columns"></v-table>
                    </div>

                    <div class="row">
                        <h4>Распределение учебной нагрузки</h4>

                        <div class="col-md-6 form-group">
                            <v-select
                                :options="periods_of_disciplines_format"
                                v-model="period_of_disciplines"
                                placeholder="Выберите период действия дисциплины">
                                <div slot="no-options">Ничего не найдено</div>
                            </v-select>
                        </div>

                        <div class="col-md-6 form-group">
                            <v-select
                                :options="disciplines"
                                v-model="discipline"
                                placeholder="Выберите дисциплину">
                                <div slot="no-options">Ничего не найдено</div>
                            </v-select>
                        </div>

                        <div class="col-md-6 form-group">
                            <v-select
                                :options="teachers"
                                v-model="teacher"
                                placeholder="Выберите преподавателя">
                                <div slot="no-options">Ничего не найдено</div>
                            </v-select>
                        </div>

                        <div class="col-md-6 form-group">
                            <v-select
                                :options="classrooms"
                                v-model="classroom"
                                placeholder="Выберите аудиторию">
                                <div slot="no-options">Ничего не найдено</div>
                            </v-select>
                        </div>

                        <div class="col-md-6 form-group">
                            <v-select
                                :options="types_discipline"
                                v-model="type_discipline"
                                placeholder="Выберите тип занятия">
                                <div slot="no-options">Ничего не найдено</div>
                            </v-select>
                        </div>

                        <div class="col-md-6">
                            <form-input
                                type="number"
                                name="count_hours"
                                label="Количество часов в неделю"
                                v-model="count_hours"
                                :error="count_hours_error"
                                @error="count_hours_error = arguments[0]">
                            </form-input>
                        </div>

                        <div class="col-md-12">
                            <div class="radio">
                                <label>
                                    <input type="radio" v-model="forgroup" value="1">
                                    <span class="circle"></span>
                                    <span class="check"></span>
                                    Для группы
                                </label>
                            </div>
                            <div class="radio">
                                <label>
                                    <input type="radio" v-model="forgroup" value="2">
                                    <span class="circle"></span>
                                    <span class="check"></span>
                                    Для подгруппы
                                </label>
                            </div>
                            <div v-if="forgroup === '2'">
                                <div class="checkbox" v-for="subgroup in subgroups_format" style="margin-left: 20px">
                                    <label>
                                        <input
                                            type="checkbox"
                                            :value="subgroup"
                                            checked="checked"
                                            v-model="subgroups_checked"
                                        >
                                        <span class="checkbox-material"><span class="check"></span></span>
                                        {{ subgroup.label }}
                                    </label>
                                </div>
                            </div>
                        </div>

                        <div class="col-md-12">
                            <input type="submit" class="btn pull-right btn-success" value="Добавить">
                        </div>
                    </div>

                    <div class="row">
                        <h4>Управление учебными нагрузками в семестре{{ group ? ' для группы ' : '' }}{{ group }}</h4>

                        <v-table :data="teaching_load" :columns="teaching_load_columns" theadslot="true">
                            <thead slot="theadslot">
                                <tr>
                                    <th class="VueTables__sortable" rowspan="2">
                                        <span class="VueTables__heading">Дисциплина</span>
                                    </th>
                                    <th colspan="3">
                                        <span class="VueTables__heading">Лекционный курс</span>
                                    </th>
                                    <th colspan="3">
                                        <span class="VueTables__heading">Практические занятия</span>
                                    </th>
                                    <th colspan="4">
                                        <span class="VueTables__heading">Лабораторные занятия</span>
                                    </th>
                                </tr>
                                <tr>
                                    <th>
                                        <span class="VueTables__heading">Фамилия И.О. преподавателя</span>
                                    </th>
                                    <th>
                                        <span class="VueTables__heading vertical-text">Аудитория</span>
                                    </th>
                                    <th>
                                        <span class="VueTables__heading vertical-text">Часы</span>
                                    </th>
                                    <th>
                                        <span class="VueTables__heading">Фамилия И.О. преподавателя</span>
                                    </th>
                                    <th>
                                        <span class="VueTables__heading vertical-text">Аудитория</span>
                                    </th>
                                    <th>
                                        <span class="VueTables__heading vertical-text">Часы</span>
                                    </th>
                                    <th>
                                        <span class="VueTables__heading">Фамилия И.О. преподавателя</span>
                                    </th>
                                    <th>
                                        <span class="VueTables__heading vertical-text">Подгруппы</span>
                                    </th>
                                    <th>
                                        <span class="VueTables__heading vertical-text">Аудитория</span>
                                    </th>
                                    <th>
                                        <span class="VueTables__heading vertical-text">Часы</span>
                                    </th>
                                </tr>
                            </thead>
                        </v-table>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data () {
            return {
                faculty: null,
                faculties: ['Электромеханический факультет (ЭМФ)', 'Гидротехнический факультет (ГТФ)'],

                group: null,
                groups: ['ИТ-41', 'ИТ-31', 'ИТ-21', 'ИТ-11', 'ИТ-12'],

                subgroups: [{
                    name: 'a'
                }, {
                    name: 'б'
                }],
                subgroups_checked: [],

                forgroup: null,

                start_date_disciplines: '',
                end_date_disciplines: '',

                start_date_disciplines_error: null,
                end_date_disciplines_error: null,

                configStartDateDisciplines: {
                    dateFormat: 'd.m.Y'
                },

                configEndDateDisciplines: {
                    dateFormat: 'd.m.Y'
                },

                periods_of_disciplines_columns: [{
                    label: 'Начало действия дисциплин',
                    sortable: true,
                    value: 'start_date_disciplines'
                }, {
                    label: 'Конец действия дисциплин',
                    value: 'end_date_disciplines'
                }],
                periods_of_disciplines: [{
                    start_date_disciplines: '01.09.2016',
                    end_date_disciplines: '28.12.2016',
                }, {
                    start_date_disciplines: '01.09.2016',
                    end_date_disciplines: '15.10.2016',
                }],

                periods_of_study: [{
                    start_of_study: '01.09.2016',
                    end_of_study: '28.12.2016',
                }, {
                    start_of_study: '09.01.2017',
                    end_of_study: '24.05.2017',
                }],

                period_of_study: null,

                period_of_disciplines: null,

                disciplines: [{
                    label: 'Информационные технологии'
                }, {
                    label: 'Управление данными'
                }],
                discipline: null,

                teachers: [{
                    label: 'Моторин С.В.'
                }, {
                    label: 'Жилин А.А.'
                }, {
                    label: 'Жаров А.В.'
                }, {
                    label: 'Катковская К.В.'
                }],
                teacher: null,
                classrooms: [{
                    label: '305 Гл'
                }, {
                    label: '307 Гл'
                }, {
                    label: '201 Лаб'
                }, {
                    label: '211 Лаб'
                }],
                classroom: null,

                types_discipline: [{
                    label: 'Лекционный курс'
                }, {
                    label: 'Практические занятия'
                }, {
                    label: 'Лабораторные занятия'
                }],
                type_discipline: null,

                count_hours: '',
                count_hours_error: false,

                teaching_load: [{
                    discipline: 'Информационные технологии',
                    lekfio: 'Жилин А.А.',
                    lekaudit: '122 Лаб',
                    lekhours: '3',
                    prakfio: '',
                    prakaudit: '',
                    prakhours: '',
                    labfio: '',
                    labsubgroups: '',
                    labaudit: '',
                    labhours: '',
                }, {
                    discipline: 'Управление данными',
                    lekfio: 'Моторин С.В.',
                    lekaudit: '122 Лаб',
                    lekhours: '2',
                    prakfio: '',
                    prakaudit: '',
                    prakhours: '',
                    labfio: 'Моторин С.В.',
                    labsubgroups: 'а, б',
                    labaudit: '211 Лаб',
                    labhours: '2',
                }],
                teaching_load_columns: [{
                    label: 'Дисциплина',
                    value: 'discipline'
                }, {
                    label: 'ФИО',
                    value: 'lekfio'
                }, {
                    label: 'Аудитория',
                    value: 'lekaudit'
                }, {
                    label: 'Часы',
                    value: 'lekhours'
                }, {
                    label: 'ФИО',
                    value: 'prakfio'
                }, {
                    label: 'Аудитория',
                    value: 'prakaudit'
                }, {
                    label: 'Часы',
                    value: 'prakhours'
                }, {
                    label: 'ФИО',
                    value: 'labfio'
                }, {
                    label: 'Подгруппы',
                    value: 'labsubgroups'
                }, {
                    label: 'Аудитория',
                    value: 'labaudit'
                }, {
                    label: 'Часы',
                    value: 'labhours'
                }],
            }
        },
        watch: {
            start_date_disciplines (newDate) {
                let temp = Object.assign({}, this.configEndDateDisciplines);

                temp.minDate = newDate;

                this.configEndDateDisciplines = temp;
            }
        },
        created () {
            document.title = appTitle + " - Управление группами";

            loadedAssets();

            NProgress.done();
        },
        methods: {

        },
        computed: {
            subgroups_format () {
                let result = [];

                for (let subgroup of this.subgroups) {
                    result.push(Object.assign({
                        label: this.group + ' ' + subgroup.name
                    }, subgroup));
                }
                return result
            },
            periods_of_study_format () {
                let result = [];

                for (let period_of_study of this.periods_of_study) {
                    result.push(Object.assign({
                        label: period_of_study.start_of_study + ' - ' + period_of_study.end_of_study
                    }, period_of_study));
                }
                return result
            },
            periods_of_disciplines_format () {
                let result = [];

                for (let period_of_disciplines of this.periods_of_disciplines) {
                    result.push(Object.assign({
                        label: period_of_disciplines.start_date_disciplines + ' - ' + period_of_disciplines.end_date_disciplines
                    }, period_of_disciplines));
                }
                return result
            }
        }
    }
</script>