webpackJsonp([ 3 ], {
    117: function(module, exports, __webpack_require__) {
        var Component = __webpack_require__(8)(__webpack_require__(121), __webpack_require__(128), null, null);
        module.exports = Component.exports;
    },
    121: function(module, exports, __webpack_require__) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        exports.default = {
            data: function data() {
                return {};
            },
            created: function created() {
                loadedAssets();
                NProgress.done();
            }
        };
    },
    128: function(module, exports) {
        module.exports = {
            render: function() {
                var _vm = this;
                var _h = _vm.$createElement;
                var _c = _vm._self._c || _h;
                return _vm._m(0);
            },
            staticRenderFns: [ function() {
                var _vm = this;
                var _h = _vm.$createElement;
                var _c = _vm._self._c || _h;
                return _c("div", [ _c("h3", [ _vm._v(" - Добавление высшего учебного заведения.") ]), _vm._v(" "), _c("div", {
                    staticClass: "row"
                }, [ _c("form", {
                    attrs: {
                        id: "add_college"
                    }
                }, [ _c("div", {
                    staticClass: "col-md-6"
                }, [ _c("div", {
                    staticClass: "form-group label-floating is-empty"
                }, [ _c("label", {
                    staticClass: "control-label"
                }, [ _vm._v("Сокращенное название ВУЗа") ]), _vm._v(" "), _c("input", {
                    staticClass: "form-control",
                    attrs: {
                        type: "text",
                        name: "short_name"
                    }
                }), _vm._v(" "), _c("span", {
                    staticClass: "material-input"
                }) ]) ]), _vm._v(" "), _c("div", {
                    staticClass: "col-md-6"
                }, [ _c("div", {
                    staticClass: "form-group label-floating is-empty"
                }, [ _c("label", {
                    staticClass: "control-label"
                }, [ _vm._v("Полное название ВУЗа") ]), _vm._v(" "), _c("input", {
                    staticClass: "form-control",
                    attrs: {
                        type: "text",
                        name: "name"
                    }
                }), _vm._v(" "), _c("span", {
                    staticClass: "material-input"
                }) ]) ]), _vm._v(" "), _c("div", {
                    staticClass: "col-md-12"
                }, [ _c("input", {
                    staticClass: "btn pull-right btn-success",
                    attrs: {
                        type: "submit",
                        value: "Добавить"
                    }
                }) ]) ]) ]), _vm._v(" "), _c("h3", [ _vm._v(" - Редактирование высших учебных заведений.") ]), _vm._v(" "), _c("div", {
                    staticClass: "row"
                }, [ _c("div", {
                    staticClass: "col-md-12"
                }, [ _c("table", {
                    staticClass: "table table-striped table-bordered table-edit",
                    attrs: {
                        id: "table_edit"
                    }
                }, [ _c("thead", [ _c("tr", [ _c("th", [ _vm._v("Сокращенное название") ]), _vm._v(" "), _c("th", [ _vm._v("Полное название") ]), _vm._v(" "), _c("th", [ _vm._v("Управление") ]) ]) ]), _vm._v(" "), _c("tbody", [ _c("tr", [ _c("td", {
                    attrs: {
                        contenteditable: "true"
                    }
                }, [ _vm._v("$college->short_name") ]), _vm._v(" "), _c("td", {
                    attrs: {
                        contenteditable: "true"
                    }
                }, [ _vm._v("$college->name") ]), _vm._v(" "), _c("td", {
                    staticClass: "text-center"
                }, [ _c("button", {
                    staticClass: "btn btn-disable",
                    attrs: {
                        id: "changes",
                        "data-id": "$college->id"
                    }
                }, [ _vm._v("Нет изменений") ]), _vm._v(" "), _c("button", {
                    staticClass: "btn btn-danger",
                    attrs: {
                        "data-id": "$college->id"
                    }
                }, [ _vm._v("Удалить") ]) ]) ]) ]) ]) ]) ]) ]);
            } ]
        };
    }
});