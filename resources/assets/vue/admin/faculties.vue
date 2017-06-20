<template>
    <div>
        <div class="wrapper">
            <div class="header header-filter"></div>
            <div class="main main-raised">
                <div class="container">
                    <h3>Факультеты</h3>
                    <div class="row">
                        <h4>Добавить факультет</h4>
                        <div class="col-md-6">
                            <form-input
                                    type="text"
                                    name="name"
                                    label="Название факультета"
                                    v-model="name"
                                    :error="name_error"
                                    @error="name_error = arguments[0]">
                            </form-input>
                        </div>
                        <div class="col-md-6">
                            <form-input
                                    type="text"
                                    name="short_name"
                                    label="Сокращенное название факультета"
                                    v-model="short_name"
                                    :error="short_name_error"
                                    @error="short_name_error = arguments[0]">
                            </form-input>
                        </div>
                        <div class="col-md-12">
                            <input type="submit" class="btn pull-right btn-success" value="Добавить" v-on:click="faculty_add">
                        </div>
                    </div>

                    <div class="row" v-show="faculties.length > 0">
                        <h4>Управление факультетами</h4>
                        <v-table :data="faculties" :columns="faculties_columns" v-on:delete="faculty_delete" v-on:update="update_show_modal_faculty"></v-table>
                    </div>
                </div>
            </div>
        </div>
        <div class="modal fade" id="updateFacultyModal" tabindex="-1" role="dialog" aria-labelledby="modalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                        <h4 class="modal-title" id="modalLabel">{{ update_label_faculty }}</h4>
                    </div>
                    <div class="modal-body">
                        <div class="col-md-12">
                            <form-input
                                    type="text"
                                    name="name"
                                    label="Название факультета"
                                    v-model="update_name"
                                    :error="update_name_error"
                                    @error="update_name_error = arguments[0]">
                            </form-input>
                        </div>
                        <div class="col-md-12">
                            <form-input
                                    type="text"
                                    name="short_name"
                                    label="Сокращенное название факультета"
                                    v-model="update_short_name"
                                    :error="update_short_name_error"
                                    @error="update_short_name_error = arguments[0]">
                            </form-input>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-default btn-simple" data-dismiss="modal">Закрыть</button>
                        <button type="button" class="btn btn-info btn-simple" v-on:click="faculty_update">Изменить</button>
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
                name: '',
                name_error: false,
                short_name: '',
                short_name_error: false,

                update_name: '',
                update_name_error: false,
                update_short_name: '',
                update_short_name_error: false,
                update_label_faculty: 'Изменить факультет',
                update_faculty: null,

                faculties: [],

                faculties_columns: [{
                    label: 'Название факультета',
                    value: 'name'
                }, {
                    label: 'Сокращенное название',
                    value: 'short_name'
                }],
            }
        },
        created () {
            document.title = appTitle + " - Управление факультетами";

            axios.get('/get/faculties')
                .then((response) => {
                    this.faculties = response.data;

                    NProgress.done();
                })
                .catch((error) => {
                    console.log(error);
                });

            loadedAssets(false);
        },
        methods: {
            faculty_add () {
                NProgress.start();
                let newFaculty = {
                    name: this.name,
                    short_name: this.short_name
                };

                setTimeout(() => {
                    NProgress.done();
                    this.faculties.push(newFaculty);
                    showSuccessMessage('Факультет ' + this.short_name + ' успешно добавлен');

                    this.name = '';
                    this.short_name = '';
                }, 1000);
            },
            faculty_delete (faculty) {
                NProgress.start();
                setTimeout(() => {
                    NProgress.done();
                    let short_name = faculty.short_name;
                    this.faculties = this.faculties.filter(faculty => faculty.short_name !== short_name);
                    showSuccessMessage('Факультет ' + short_name + ' успешно удален');
                }, 1000);
            },
            faculty_update () {
                NProgress.start();
                setTimeout(() => {
                    NProgress.done();

                    this.update_faculty.name = this.update_name;
                    this.update_faculty.short_name = this.update_short_name;

                    $('#updateFacultyModal').modal('hide');

                    showSuccessMessage('Факультет ' + this.update_faculty.short_name + ' успешно изменен');
                }, 1000);
            },
            update_show_modal_faculty (faculty) {
                this.update_name = faculty.name;
                this.update_short_name = faculty.short_name;
                this.update_faculty = faculty;

                $('#updateFacultyModal').modal('show');
            }
        }
    }
</script>