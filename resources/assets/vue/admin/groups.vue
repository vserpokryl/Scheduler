<template>
    <div>
        <h3>Группы</h3>
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

        <hr>
        <div class="row">
            <h4>Добавить подгруппу</h4>

            <div class="col-md-6">
                <form-input
                    type="text"
                    name="name_subgroup"
                    label="Название подгруппы"
                    v-model="name_subgroup"
                    :error="name_subgroup_error"
                    @error="name_subgroup_error = arguments[0]">
                </form-input>
            </div>

            <div class="col-md-12">
                <input type="submit" class="btn pull-right btn-success" value="Добавить">
            </div>
        </div>

        <div class="row">
            <h4>Управление подгруппами{{ group ? ' у группы ' : '' }}{{ group }}</h4>

            <v-table :data="subgroups" :columns="subgroups_columns"></v-table>
        </div>

        <div class="row">
            <h4>Добавить период учебы{{ group ? ' для группы ' : '' }}{{ group }}</h4>

            <div class="col-md-6">
                <datepicker
                        label="Дата начала учебы"
                        name="start_of_study"
                        :config="configStartDate"
                        v-model="start_of_study"
                        :error="start_of_study_error"
                        @error="start_of_study_error = arguments[0]"
                >
                </datepicker>
            </div>
            <div class="col-md-6">
                <datepicker
                        label="Дата конца учебы"
                        name="end_of_study"
                        :config="configEndDate"
                        v-model="end_of_study"
                        :error="end_of_study_error"
                        @error="end_of_study_error = arguments[0]"
                >
                </datepicker>
            </div>

            <div class="col-md-12">
                <input type="submit" class="btn pull-right btn-success" value="Добавить">
            </div>

        </div>

        <div class="row">
            <h4>Управление периодами учебы{{ group ? ' для группы ' : '' }}{{ group }}</h4>

            <v-table :data="periods_of_study" :columns="periods_of_study_columns"></v-table>
        </div>

        <div class="row">
            <h4>Добавить группу{{ faculty ? ' на ' + faculty : '' }}</h4>

            <div class="col-md-12">
                <v-select
                        :options="form_trainings"
                        v-model="form_training"
                        placeholder="Выберите форму обучения">
                    <div slot="no-options">Ничего не найдено</div>
                </v-select>
            </div>
            <div class="col-md-6">
                <form-input
                    type="text"
                    name="name_group"
                    label="Название группы"
                    v-model="name_group"
                    :error="name_group_error"
                    @error="name_group_error = arguments[0]">
                </form-input>
            </div>
            <div class="col-md-6">
                <form-input
                    type="number"
                    name="course_group"
                    label="Курс"
                    v-model="course_group"
                    :error="course_group_error"
                    @error="course_group_error = arguments[0]">
                </form-input>
            </div>
            <div class="col-md-6">
                <form-input
                    type="number"
                    name="number_people"
                    label="Количество человек в группе"
                    v-model="number_people"
                    :error="number_people_error"
                    @error="number_people_error = arguments[0]">
                </form-input>
            </div>

            <div class="col-md-12">
                <input type="submit" class="btn pull-right btn-success" value="Добавить">
            </div>
        </div>

        <div class="row">
            <h4>Управление группами{{ faculty ? ' на факультете ' : '' }}{{ faculty }}</h4>

            <v-table :data="groups_table" :columns="groups_table_columns"></v-table>
        </div>
    </div>
</template>

<script>
    export default {
        data () {
            return {
                short_name: '',
                short_name_error: false,

                faculty: null,
                faculties: ['Электромеханический факультет (ЭМФ)', 'Гидротехнический факультет (ГТФ)'],

                group: null,
                groups: ['ИТ-41', 'ИТ-31', 'ИТ-21', 'ИТ-11', 'ИТ-12'],

                groups_table: [{
                    name: 'ИТ-41',
                    course: '4',
                    form_training: 'Очная',
                    number_people: '32'
                }, {
                    name: 'ИТ-31',
                    course: '3',
                    form_training: 'Очная',
                    number_people: '28'
                }, {
                    name: 'ИТ-21',
                    course: '2',
                    form_training: 'Очная',
                    number_people: '24'
                }, {
                    name: 'ИТ-11',
                    course: '1',
                    form_training: 'Очная',
                    number_people: '35'
                }, {
                    name: 'ИТ-12',
                    course: '1',
                    form_training: 'Очная',
                    number_people: '29'
                }],
                groups_table_columns: [{
                    label: 'Название группы',
                    sortable: true,
                    value: 'name'
                }, {
                    label: 'Курс',
                    value: 'course'
                }, {
                    label: 'Количество людей',
                    value: 'number_people'
                }, {
                    label: 'Форма обучения',
                    value: 'form_training'
                }],

                name_subgroup: '',
                name_subgroup_error: '',

                name_group: '',
                name_group_error: '',

                course_group: '',
                course_group_error: '',

                number_people: '',
                number_people_error: '',

                form_trainings: [{
                    label: 'Очная',
                    value: 1
                }, {
                    label: 'Заочная',
                    value: 0
                }],
                form_training: null,

                subgroups_columns: [{
                    label: 'Подгруппа',
                    sortable: true,
                    value: 'subgroup'
                }],
                subgroups: [{
                    subgroup: 'а'
                }, {
                    subgroup: 'б'
                }],

                start_of_study: '',
                end_of_study: '',

                start_of_study_error: null,
                end_of_study_error: null,

                configStartDate: {
                    dateFormat: 'd.m.Y'
                },

                configEndDate: {
                    dateFormat: 'd.m.Y'
                },

                periods_of_study_columns: [{
                    label: 'Начало учебы',
                    sortable: true,
                    value: 'start_of_study'
                }, {
                    label: 'Конец учебы',
                    value: 'end_of_study'
                }],
                periods_of_study: [{
                    start_of_study: '01.09.2016',
                    end_of_study: '28.12.2016',
                }, {
                    start_of_study: '09.01.2017',
                    end_of_study: '24.05.2017',
                }],

                period_of_study: null
            }
        },
        created () {
            document.title = appTitle + " - Управление группами";

            loadedAssets();

            NProgress.done();
        },
        computed: {
            periods_of_study_format: function() {
                let result = [];

                for (let period_of_study of this.periods_of_study) {
                    result.push({
                        label: period_of_study.start_of_study + ' - ' + period_of_study.end_of_study
                    });
                }
                return result
            }
        },
        watch: {
            start_of_study (newDate) {
                let temp = Object.assign({}, this.configEndDate);

                temp.minDate = newDate;

                this.configEndDate = temp;
            }
        },
    }
</script>