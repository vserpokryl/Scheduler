<template>
    <div>
        <h3>Факультеты</h3>
        <div class="row">
            <h4>Добавить факультет</h4>
            <div class="col-md-6">
                <form-input
                        type="text"
                        name="name"
                        label="Название подгруппы"
                        v-model="name"
                        :error="name_error"
                        @error="name_error = arguments[0]">
                </form-input>
            </div>
            <div class="col-md-6">
                <form-input
                        type="text"
                        name="short_name"
                        label="Название подгруппы"
                        v-model="short_name"
                        :error="short_name_error"
                        @error="short_name_error = arguments[0]">
                </form-input>
            </div>
            <div class="col-md-12">
                <input type="submit" class="btn pull-right btn-success" value="Добавить">
            </div>
        </div>

        <div class="row" v-show="faculties.length > 0">
            <h4>Управление факультетами</h4>
            <v-table :data="faculties" :columns="faculties_columns"></v-table>
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
    }
</script>