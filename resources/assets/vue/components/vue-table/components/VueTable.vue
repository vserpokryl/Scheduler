<template>
    <div class="VueTable1">
        <div>
            <div class="col-xs-6">
                <form-input
                    type="text"
                    name="search"
                    label="Поиск..."
                    v-model="search"
                    :error="search_error"
                    @error="search_error = arguments[0]">
                </form-input>
            </div>
            <div class="col-xs-6">
                <div class="form-group form-inline pull-right">
                    <label for="limit">Записей:</label>
                    <select id="limit" class="form-control">
                        <option value="10">10</option>
                        <option value="25">25</option>
                        <option value="50" selected="selected">50</option>
                    </select>
                </div>
            </div>
        </div>
        <div>
            <table class="VueTables__table table table-striped table-bordered table-hover">
                <thead v-if="!theadslot">
                    <tr>
                        <th class="VueTables__sortable" v-for="column in withoutlast">
                            <span class="VueTables__heading">{{ column.label }}</span>
                            <i class="fa fa-chevron-up pull-right" aria-hidden="true" v-if="column.sortable"></i>
                        </th>
                        <th class="VueTables__sortable" v-for="column in last">
                            <span class="VueTables__heading">{{ column.label }}</span>
                            <i class="fa fa-chevron-up pull-right" aria-hidden="true" v-if="column.sortable"></i>
                        </th>
                    </tr>
                </thead>
                <slot name="theadslot"></slot>
                <tbody>
                    <tr v-for="line in data">
                        <td v-for="column in withoutlast">{{ line[column.value] }}</td>
                        <td v-for="column in last" class="control_panel">
                            {{ line[column.value] }}

                            <div v-if="control_panel">
                                <div class="control_update">
                                    <button class="btn btn-success btn-xs">Изменить</button>
                                    <button class="btn btn-danger btn-xs">Удалить</button>
                                </div>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
        <div class="VuePagination">
            <div class="col-xs-6">
                <p class="VuePagination__count">Показаны с 1 по {{ data.length }}; Всего {{ data.length }} {{ line }};</p>
            </div>
            <div class="col-xs-6">
                <div class="pull-right">
                    <ul class="pagination">
                        <li class="VuePagination__pagination-item page-item VuePagination__pagination-item-prev-chunk disabled">
                            <a class="page-link">&lt;&lt;</a>
                        </li>
                        <li class="VuePagination__pagination-item page-item VuePagination__pagination-item-prev-page disabled">
                            <a class="page-link">&lt;</a>
                        </li>
                        <li class="VuePagination__pagination-item page-item active">
                            <a class="page-link">1</a>
                        </li>
                        <li class="VuePagination__pagination-item page-item VuePagination__pagination-item-next-page">
                            <a class="page-link">&gt;</a>
                        </li>
                        <li class="VuePagination__pagination-item page-item VuePagination__pagination-item-next-chunk disabled">
                            <a class="page-link">&gt;&gt;</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            'data': Array,
            'columns': Array,
            'theadslot': {
                default: false
            },
            'control_panel': {
                default: true
            }
        },
        data () {
            return {
                search: '',
                search_error: false
            }
        },
        computed: {
            line: function() {
                let numberof = this.data.length, value = 'запи', suffix = ['сь', 'си', 'сей'];

                let keys = [2, 0, 1, 1, 1, 2];
                let mod = numberof % 100;
                let suffix_key = mod > 4 && mod < 20 ? 2 : keys[Math.min(mod % 10, 5)];

                return value + suffix[suffix_key];
            },
            withoutlast: function() {
                return this.columns.slice(0, -1);
            },
            last: function() {
                return this.columns.slice(-1);
            }
        }
    }
</script>