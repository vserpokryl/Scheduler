<template>
    <div>
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

        <hr>
        <div class="row">
            <h4>Добавить период учебы{{ group ? ' для группы ' : '' }}{{ group }}</h4>

            <p>Учеба начинается с [] по []</p>
            </div>

            <div class="col-md-12">
                <input type="submit" class="btn pull-right btn-success" value="Добавить">
            </div>
        </div>
        <div class="row">
            <h4>Управление подгруппами{{ group ? ' у группы ' : '' }}{{ group }}</h4>

            <v-table :data="data" :columns="columns"></v-table>
        </div>
        <div class="row">
            <h4>Добавить группу</h4>

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

            <div class="col-md-12">
                <input type="submit" class="btn pull-right btn-success" value="Добавить">
            </div>
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

                name_subgroup: '',
                name_subgroup_error: '',

                name_group: '',
                name_group_error: '',

                course_group: '',
                course_group_error: '',

                form_trainings: [{
                    label: 'Очная',
                    value: 1
                }, {
                    label: 'Заочная',
                    value: 0
                }],
                form_training: null,

                columns: [{
                    label: 'Подгруппа',
                    sortable: true,
                    value: 'subgroup'
                }],
                data: [{
                    subgroup: 'а'
                }, {
                    subgroup: 'б'
                }]
            }
        },
        created () {
            document.title = appTitle + " - Управление группами";

            loadedAssets();

            NProgress.done();
        },
        methods: {
        }
    }
</script>