<template>
    <div>
        <div class="wrapper">
            <div class="header header-filter"></div>
            <div class="main main-raised">
                <div class="container">
                    <h3> - Добавление высшего учебного заведения.</h3>
                    <div class="row">
                        <form id="add_college">
                            <div class="col-md-6">
                                <div class="form-group label-floating is-empty">
                                    <label class="control-label">Сокращенное название ВУЗа</label>
                                    <input type="text" class="form-control" name="short_name">
                                    <span class="material-input"></span>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="form-group label-floating is-empty">
                                    <label class="control-label">Полное название ВУЗа</label>
                                    <input type="text" class="form-control" name="name">
                                    <span class="material-input"></span>
                                </div>
                            </div>
                            <div class="col-md-12">
                                <input type="submit" class="btn pull-right btn-success" value="Добавить">
                            </div>
                        </form>
                    </div>
                    <h3> - Редактирование высших учебных заведений.</h3>
                    <div class="row">
                        <div class="col-md-12">
                            <table class="table table-striped table-bordered table-edit" id="table_edit">
                                <thead>
                                <tr>
                                    <th>Сокращенное название</th>
                                    <th>Полное название</th>
                                    <th>Управление</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <td contenteditable="true">$college->short_name</td>
                                    <td contenteditable="true">$college->name</td>
                                    <td class="text-center">
                                        <button class="btn btn-disable" id="changes" data-id="$college->id">Нет изменений</button>
                                        <button class="btn btn-danger" data-id="$college->id">Удалить</button>
                                    </td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
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
            }
        },
        created () {
            loadedAssets();

            NProgress.done();
        }
    }
</script>