webpackJsonp([ 3 ], {
    117: function(t, a, s) {
        var e = s(8)(s(121), s(128), null, null);
        t.exports = e.exports;
    },
    121: function(t, a, s) {
        "use strict";
        Object.defineProperty(a, "__esModule", {
            value: !0
        }), a.default = {
            data: function() {
                return {};
            },
            created: function() {
                loadedAssets(), NProgress.done();
            }
        };
    },
    128: function(t, a) {
        t.exports = {
            render: function() {
                var t = this, a = t.$createElement;
                t._self._c;
                return t._m(0);
            },
            staticRenderFns: [ function() {
                var t = this, a = t.$createElement, s = t._self._c || a;
                return s("div", [ s("h3", [ t._v(" - Добавление высшего учебного заведения.") ]), t._v(" "), s("div", {
                    staticClass: "row"
                }, [ s("form", {
                    attrs: {
                        id: "add_college"
                    }
                }, [ s("div", {
                    staticClass: "col-md-6"
                }, [ s("div", {
                    staticClass: "form-group label-floating is-empty"
                }, [ s("label", {
                    staticClass: "control-label"
                }, [ t._v("Сокращенное название ВУЗа") ]), t._v(" "), s("input", {
                    staticClass: "form-control",
                    attrs: {
                        type: "text",
                        name: "short_name"
                    }
                }), t._v(" "), s("span", {
                    staticClass: "material-input"
                }) ]) ]), t._v(" "), s("div", {
                    staticClass: "col-md-6"
                }, [ s("div", {
                    staticClass: "form-group label-floating is-empty"
                }, [ s("label", {
                    staticClass: "control-label"
                }, [ t._v("Полное название ВУЗа") ]), t._v(" "), s("input", {
                    staticClass: "form-control",
                    attrs: {
                        type: "text",
                        name: "name"
                    }
                }), t._v(" "), s("span", {
                    staticClass: "material-input"
                }) ]) ]), t._v(" "), s("div", {
                    staticClass: "col-md-12"
                }, [ s("input", {
                    staticClass: "btn pull-right btn-success",
                    attrs: {
                        type: "submit",
                        value: "Добавить"
                    }
                }) ]) ]) ]), t._v(" "), s("h3", [ t._v(" - Редактирование высших учебных заведений.") ]), t._v(" "), s("div", {
                    staticClass: "row"
                }, [ s("div", {
                    staticClass: "col-md-12"
                }, [ s("table", {
                    staticClass: "table table-striped table-bordered table-edit",
                    attrs: {
                        id: "table_edit"
                    }
                }, [ s("thead", [ s("tr", [ s("th", [ t._v("Сокращенное название") ]), t._v(" "), s("th", [ t._v("Полное название") ]), t._v(" "), s("th", [ t._v("Управление") ]) ]) ]), t._v(" "), s("tbody", [ s("tr", [ s("td", {
                    attrs: {
                        contenteditable: "true"
                    }
                }, [ t._v("$college->short_name") ]), t._v(" "), s("td", {
                    attrs: {
                        contenteditable: "true"
                    }
                }, [ t._v("$college->name") ]), t._v(" "), s("td", {
                    staticClass: "text-center"
                }, [ s("button", {
                    staticClass: "btn btn-disable",
                    attrs: {
                        id: "changes",
                        "data-id": "$college->id"
                    }
                }, [ t._v("Нет изменений") ]), t._v(" "), s("button", {
                    staticClass: "btn btn-danger",
                    attrs: {
                        "data-id": "$college->id"
                    }
                }, [ t._v("Удалить") ]) ]) ]) ]) ]) ]) ]) ]);
            } ]
        };
    }
});