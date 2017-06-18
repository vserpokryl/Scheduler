<template>
    <div>
        <h3>Составление расписания</h3>
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
        <div class="row" v-show="showschedule">
            <h4>Учебный план</h4>

            <v-table :data="teaching_load" :columns="teaching_load_columns" :control_panel="false"></v-table>
        </div>

        <div class="row" v-if="showschedule">
            <table class="schedule">
                <colgroup>
                    <col width="70">
                    <col width="110">
                </colgroup>
                <thead>
                <tr>
                    <td></td>
                    <td></td>
                    <td colspan="2"><span class="group-name">ИТ-41а</span></td>
                    <td colspan="2"><span class="group-name">ИТ-41б</span></td>
                </tr>
                </thead>
                <tbody>
                <tr class="first_week">
                    <td rowspan="12" class="weekday"><span>Понедельник</span></td>
                    <td rowspan="2" class="time">8:30 - 10.05</td>
                    <td colspan="4" class="subject">Управление данными (л) 122 Лаб
                        <div class="control_update">
                            <button class="btn btn-success btn-xs" data-schedule_id="$subject->id" data-subgroup_id="$subject->subgroup_id" data-teacher_id="$subject->teacher_id" data-subject_id="$subject->subject_id" data-classroom_id="$subject->classroom_id" id="control_update" data-type_subject_id="$subject->type_subject_id">Изменить</button>
                            <button class="btn btn-danger btn-xs" data-schedule_id="$subject->id">Удалить</button>
                        </div>
                    </td>
                </tr>
                <tr class="second_week">
                    <td class="subject" colspan="2">
                        <div class="control_add">
                            <button class="btn btn-primary btn-xs" data-subgroup_id="$subgroup_id" data-num_week="$num_week" data-week_day="$week_day" data-num_subject="$num_subject" data-toggle="tooltip" data-placement="top" title="$tooltip_text">Добавить</button>
                        </div>
                    </td>
                    <td class="subject" colspan="2">Управление данными (лаб) 204 Лаб
                        <div class="control_update">
                            <button class="btn btn-success btn-xs" data-schedule_id="$subject->id" data-subgroup_id="$subject->subgroup_id" data-teacher_id="$subject->teacher_id" data-subject_id="$subject->subject_id" data-classroom_id="$subject->classroom_id" id="control_update" data-type_subject_id="$subject->type_subject_id">Изменить</button>
                            <button class="btn btn-danger btn-xs" data-schedule_id="$subject->id">Удалить</button>
                        </div>
                    </td>
                </tr>
                <tr class="first_week">
                    <td rowspan="2" class="time">10:15 - 11.50</td>
                    <td colspan="4" rowspan="2" class="subject">Информационные технологии (л) 122 Лаб
                        <div class="control_update">
                            <button class="btn btn-success btn-xs" data-schedule_id="$subject->id" data-subgroup_id="$subject->subgroup_id" data-teacher_id="$subject->teacher_id" data-subject_id="$subject->subject_id" data-classroom_id="$subject->classroom_id" id="control_update" data-type_subject_id="$subject->type_subject_id">Изменить</button>
                            <button class="btn btn-danger btn-xs" data-schedule_id="$subject->id">Удалить</button>
                        </div>
                    </td>
                </tr>
                <tr class="second_week">
                </tr>
                <tr class="first_week">
                    <td rowspan="2" class="time">12:30 - 14:05</td>
                    <td class="subject" colspan="2">Управление данными (лаб) 204 Лаб
                        <div class="control_update">
                            <button class="btn btn-success btn-xs" data-schedule_id="$subject->id" data-subgroup_id="$subject->subgroup_id" data-teacher_id="$subject->teacher_id" data-subject_id="$subject->subject_id" data-classroom_id="$subject->classroom_id" id="control_update" data-type_subject_id="$subject->type_subject_id">Изменить</button>
                            <button class="btn btn-danger btn-xs" data-schedule_id="$subject->id">Удалить</button>
                        </div>
                    </td>
                    <td class="subject"></td>
                    <td class="subject" rowspan="2"></td>
                </tr>
                <tr class="second_week">
                    <td class="subject" colspan="2"></td>
                    <td class="subject"></td>
                </tr>
                <tr class="first_week">
                    <td rowspan="2" class="time">14:15 - 16:50</td>
                    <td class="subject"></td>
                    <td class="subject" rowspan="2"></td>
                    <td class="subject"></td>
                    <td class="subject" rowspan="2"></td>
                </tr>
                <tr class="second_week">
                    <td class="subject"></td><td class="subject"></td>
                </tr>
                <tr class="first_week">
                    <td rowspan="2" class="time">16:00 - 17:35</td>
                    <td class="subject"></td>
                    <td class="subject" rowspan="2"></td>
                    <td class="subject"></td>
                    <td class="subject" rowspan="2"></td>
                </tr>
                <tr class="second_week">
                </tr>
                <tr class="first_week">
                    <td rowspan="2" class="time">17:45 - 19:20</td>
                    <td class="subject"></td>
                    <td class="subject" rowspan="2"></td>
                    <td class="subject"></td>
                    <td class="subject" rowspan="2"></td>
                </tr>
                <tr class="second_week">
                    <td class="subject"></td><td class="subject" colspan="2"></td>
                </tr>
                <tr class="delimiter">
                    <td colspan="6"></td>
                </tr>
                <tr class="first_week">
                    <td rowspan="12" class="weekday"><span>Вторник</span></td>
                    <td rowspan="2" class="time">8:30 - 10.05</td>
                    <td class="subject"></td>
                    <td class="subject" rowspan="2"></td>
                    <td class="subject"></td>
                    <td class="subject" rowspan="2"></td>
                </tr>
                <tr class="second_week">
                    <td class="subject"></td><td class="subject"></td>
                </tr>
                <tr class="first_week">
                    <td rowspan="2" class="time">10:15 - 11.50</td>
                    <td class="subject"></td>
                    <td class="subject" rowspan="2"></td>
                    <td class="subject"></td>
                    <td class="subject" rowspan="2"></td>
                </tr>
                <tr class="second_week">
                    <td class="subject"></td><td class="subject"></td>
                </tr>

                <tr class="first_week">
                    <td rowspan="2" class="time">12:30 - 14:05</td>
                    <td class="subject"></td>
                    <td class="subject" rowspan="2"></td>
                    <td class="subject"></td>
                    <td class="subject" rowspan="2"></td>
                </tr>
                <tr class="second_week">
                    <td class="subject" colspan="2"></td><td class="subject"></td>
                </tr>
                <tr class="first_week">
                    <td rowspan="2" class="time">14:15 - 16:50</td>
                    <td class="subject"></td>
                    <td class="subject" rowspan="2"></td>
                    <td class="subject"></td>
                    <td class="subject" rowspan="2"></td>
                </tr>
                <tr class="second_week">
                    <td class="subject"></td><td class="subject"></td>
                </tr>
                <tr class="first_week">
                    <td rowspan="2" class="time">16:00 - 17:35</td>
                    <td class="subject"></td>
                    <td class="subject" rowspan="2"></td>
                    <td class="subject"></td>
                    <td class="subject" rowspan="2"></td>
                </tr>
                <tr class="second_week">
                    <td class="subject"></td><td class="subject"></td>
                </tr>
                <tr class="first_week">
                    <td rowspan="2" class="time">17:45 - 19:20</td>
                    <td class="subject"></td>
                    <td class="subject" rowspan="2"></td>
                    <td class="subject"></td>
                    <td class="subject" rowspan="2"></td>
                </tr>
                <tr class="second_week">
                    <td class="subject"></td><td class="subject"></td>
                </tr>
                <tr class="delimiter">
                    <td colspan="6"></td>
                </tr>
                <tr class="first_week">

                    <td rowspan="12" class="weekday"><span>Среда</span></td>

                    <td rowspan="2" class="time">8:30 - 10.05</td>



                    <td class="subject"></td>
                    <td class="subject" rowspan="2"></td>


                    <td class="subject"></td>
                    <td class="subject" rowspan="2"></td>


                </tr>

                <tr class="second_week">
                    <td class="subject"></td><td class="subject"></td>
                </tr>







                <tr class="first_week">


                    <td rowspan="2" class="time">10:15 - 11.50</td>



                    <td class="subject"></td>
                    <td class="subject" rowspan="2"></td>


                    <td class="subject"></td>
                    <td class="subject" rowspan="2"></td>


                </tr>

                <tr class="second_week">
                    <td class="subject"></td><td class="subject"></td>
                </tr>







                <tr class="first_week">


                    <td rowspan="2" class="time">12:30 - 14:05</td>



                    <td class="subject"></td>
                    <td class="subject" rowspan="2"></td>

                    <td class="subject" colspan="2" rowspan="2">WEB-программирование (Лекция) 204 Г
                        <div class="control_update">
                            <button class="btn btn-success btn-xs" data-schedule_id="$subject->id" data-subgroup_id="$subject->subgroup_id" data-teacher_id="$subject->teacher_id" data-subject_id="$subject->subject_id" data-classroom_id="$subject->classroom_id" id="control_update" data-type_subject_id="$subject->type_subject_id">Изменить</button>
                            <button class="btn btn-danger btn-xs" data-schedule_id="$subject->id">Удалить</button>
                        </div>
                    </td>

                </tr>

                <tr class="second_week">
                    <td class="subject"></td>
                </tr>







                <tr class="first_week">


                    <td rowspan="2" class="time">14:15 - 16:50</td>



                    <td class="subject"></td>
                    <td class="subject" rowspan="2"></td>


                    <td class="subject"></td>
                    <td class="subject" rowspan="2"></td>


                </tr>

                <tr class="second_week">
                    <td class="subject"></td><td class="subject"></td>
                </tr>







                <tr class="first_week">


                    <td rowspan="2" class="time">16:00 - 17:35</td>



                    <td class="subject"></td>
                    <td class="subject" rowspan="2"></td>


                    <td class="subject"></td>
                    <td class="subject" rowspan="2"></td>


                </tr>

                <tr class="second_week">
                    <td class="subject"></td><td class="subject"></td>
                </tr>







                <tr class="first_week">


                    <td rowspan="2" class="time">17:45 - 19:20</td>



                    <td class="subject"></td>
                    <td class="subject" rowspan="2"></td>


                    <td class="subject"></td>
                    <td class="subject" rowspan="2"></td>


                </tr>

                <tr class="second_week">
                    <td class="subject"></td><td class="subject"></td>
                </tr>



                <tr class="delimiter">
                    <td colspan="6"></td>
                </tr>




                <tr class="first_week">

                    <td rowspan="12" class="weekday"><span>Четверг</span></td>

                    <td rowspan="2" class="time">8:30 - 10.05</td>



                    <td class="subject"></td>
                    <td class="subject" rowspan="2"></td>


                    <td class="subject"></td>
                    <td class="subject" rowspan="2"></td>
                </tr>
                <tr class="second_week">
                    <td class="subject"></td><td class="subject"></td>
                </tr>
                <tr class="first_week">
                    <td rowspan="2" class="time">10:15 - 11.50</td>
                    <td class="subject"></td>
                    <td class="subject" rowspan="2"></td>
                    <td class="subject"></td>
                    <td class="subject" rowspan="2"></td>
                </tr>
                <tr class="second_week">
                    <td class="subject"></td><td class="subject"></td>
                </tr>
                <tr class="first_week">
                    <td rowspan="2" class="time">12:30 - 14:05</td>
                    <td class="subject"></td>
                    <td class="subject" rowspan="2"></td>
                    <td class="subject"></td>
                    <td class="subject" rowspan="2"></td>
                </tr>
                <tr class="second_week">
                    <td class="subject"></td><td class="subject"></td>
                </tr>
                <tr class="first_week">
                    <td rowspan="2" class="time">14:15 - 16:50</td>
                    <td class="subject"></td>
                    <td class="subject" rowspan="2"></td>
                    <td class="subject"></td>
                    <td class="subject" rowspan="2"></td>
                </tr>
                <tr class="second_week">
                    <td class="subject"></td><td class="subject"></td>
                </tr>
                <tr class="first_week">
                    <td rowspan="2" class="time">16:00 - 17:35</td>
                    <td class="subject"></td>
                    <td class="subject" rowspan="2"></td>
                    <td class="subject"></td>
                    <td class="subject" rowspan="2"></td>
                </tr>
                <tr class="second_week">
                    <td class="subject"></td><td class="subject"></td>
                </tr>
                <tr class="first_week">
                    <td rowspan="2" class="time">17:45 - 19:20</td>
                    <td class="subject"></td>
                    <td class="subject" rowspan="2"></td>
                    <td class="subject"></td>
                    <td class="subject" rowspan="2"></td>
                </tr>
                <tr class="second_week">
                    <td class="subject"></td><td class="subject"></td>
                </tr>
                <tr class="delimiter">
                    <td colspan="6"></td>
                </tr>
                <tr class="first_week">
                    <td rowspan="12" class="weekday"><span>Пятница</span></td>
                    <td rowspan="2" class="time">8:30 - 10.05</td>
                    <td class="subject"></td>
                    <td class="subject" rowspan="2"></td>
                    <td class="subject"></td>
                    <td class="subject" rowspan="2"></td>
                </tr>
                <tr class="second_week">
                    <td class="subject"></td><td class="subject"></td>
                </tr>
                <tr class="first_week">
                    <td rowspan="2" class="time">10:15 - 11.50</td>
                    <td class="subject"></td>
                    <td class="subject" rowspan="2"></td>
                    <td class="subject"></td>
                    <td class="subject" rowspan="2"></td>
                </tr>
                <tr class="second_week">
                    <td class="subject"></td><td class="subject"></td>
                </tr>
                <tr class="first_week">
                    <td rowspan="2" class="time">12:30 - 14:05</td>
                    <td class="subject"></td>
                    <td class="subject" rowspan="2"></td>
                    <td class="subject"></td>
                    <td class="subject" rowspan="2"></td>
                </tr>
                <tr class="second_week">
                    <td class="subject"></td><td class="subject"></td>
                </tr>
                <tr class="first_week">
                    <td rowspan="2" class="time">14:15 - 16:50</td>
                    <td class="subject"></td>
                    <td class="subject" rowspan="2"></td>
                    <td class="subject"></td>
                    <td class="subject" rowspan="2"></td>
                </tr>
                <tr class="second_week">
                    <td class="subject"></td><td class="subject"></td>
                </tr>
                <tr class="first_week">
                    <td rowspan="2" class="time">16:00 - 17:35</td>
                    <td class="subject"></td>
                    <td class="subject" rowspan="2"></td>
                    <td class="subject"></td>
                    <td class="subject" rowspan="2"></td>
                </tr>
                <tr class="second_week">
                    <td class="subject"></td><td class="subject"></td>
                </tr>
                <tr class="first_week">
                    <td rowspan="2" class="time">17:45 - 19:20</td>
                    <td class="subject"></td>
                    <td class="subject" rowspan="2"></td>
                    <td class="subject"></td>
                    <td class="subject" rowspan="2"></td>
                </tr>
                <tr class="second_week">
                    <td class="subject"></td><td class="subject"></td>
                </tr>
                <tr class="delimiter">
                    <td colspan="6"></td>
                </tr>
                <tr class="first_week">
                    <td rowspan="12" class="weekday"><span>Суббота</span></td>
                    <td rowspan="2" class="time">8:30 - 10.05</td>
                    <td class="subject"></td>
                    <td class="subject" rowspan="2"></td>
                    <td class="subject"></td>
                    <td class="subject" rowspan="2"></td>
                </tr>
                <tr class="second_week">
                    <td class="subject"></td><td class="subject"></td>
                </tr>
                <tr class="first_week">
                    <td rowspan="2" class="time">10:15 - 11.50</td>
                    <td class="subject"></td>
                    <td class="subject" rowspan="2"></td>
                    <td class="subject"></td>
                    <td class="subject" rowspan="2"></td>
                </tr>
                <tr class="second_week">
                    <td class="subject"></td><td class="subject"></td>
                </tr>
                <tr class="first_week">
                    <td rowspan="2" class="time">12:30 - 14:05</td>
                    <td class="subject"></td>
                    <td class="subject" rowspan="2"></td>
                    <td class="subject"></td>
                    <td class="subject" rowspan="2"></td>
                </tr>
                <tr class="second_week">
                    <td class="subject"></td><td class="subject"></td>
                </tr>
                <tr class="first_week">
                    <td rowspan="2" class="time">14:15 - 16:50</td>
                    <td class="subject"></td>
                    <td class="subject" rowspan="2"></td>
                    <td class="subject"></td>
                    <td class="subject" rowspan="2"></td>
                </tr>
                <tr class="second_week">
                    <td class="subject"></td><td class="subject"></td>
                </tr>
                <tr class="first_week">
                    <td rowspan="2" class="time">16:00 - 17:35</td>
                    <td class="subject"></td>
                    <td class="subject" rowspan="2"></td>
                    <td class="subject"></td>
                    <td class="subject" rowspan="2"></td>
                </tr>
                <tr class="second_week">
                    <td class="subject"></td><td class="subject"></td>
                </tr>
                <tr class="first_week">
                    <td rowspan="2" class="time">17:45 - 19:20</td>
                    <td class="subject"></td>
                    <td class="subject" rowspan="2"></td>
                    <td class="subject"></td>
                    <td class="subject" rowspan="2"></td>
                </tr>
                <tr class="second_week">
                    <td class="subject"></td><td class="subject"></td>
                </tr>
                </tbody>
            </table>
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

                showschedule: false,

                teaching_load: [{
                    discipline: 'Информационные технологии',
                    type_discipline: 'Лекционный курс',
                    fio: 'Жилин А.А.',
                    audit: '122 Лаб',
                    hours: '1',
                    subgroups: ''
                }, {
                    discipline: 'Управление данными',
                    type_discipline: 'Лекционный курс',
                    fio: 'Моторин С.В.',
                    audit: '122 Лаб',
                    hours: '1',
                    subgroups: ''
                }, {
                    discipline: 'Управление данными',
                    type_discipline: 'Лабораторное занятие',
                    fio: 'Моторин С.В.',
                    audit: '204 Лаб',
                    hours: '1',
                    subgroups: 'а'
                }, {
                    discipline: 'Управление данными',
                    type_discipline: 'Лабораторное занятие',
                    fio: 'Моторин С.В.',
                    audit: '204 Лаб',
                    hours: '1',
                    subgroups: 'б'
                }],
                teaching_load_columns: [{
                    label: 'Дисциплина',
                    value: 'discipline'
                }, {
                    label: 'Тип занятия',
                    value: 'type_discipline'
                }, {
                    label: 'Преподаватель',
                    value: 'fio'
                }, {
                    label: 'Аудитория',
                    value: 'audit'
                }, {
                    label: 'Часов в неделю',
                    value: 'hours'
                }, {
                    label: 'Подгруппа',
                    value: 'subgroups'
                }],
            }
        },
        watch: {
            faculty () {
                NProgress.start();

                setTimeout(() => {
                    NProgress.done();
                }, 500)
            },
            group () {
                NProgress.start();

                setTimeout(() => {
                    this.showschedule = true;
                    NProgress.done();
                }, 500)
            },
        },
        created () {
            loadedAssets();

            NProgress.done();
        }
    }
</script>