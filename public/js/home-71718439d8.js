(function(modules) {
    var parentJsonpFunction = window["webpackJsonp"];
    window["webpackJsonp"] = function webpackJsonpCallback(chunkIds, moreModules, executeModules) {
        var moduleId, chunkId, i = 0, resolves = [], result;
        for (;i < chunkIds.length; i++) {
            chunkId = chunkIds[i];
            if (installedChunks[chunkId]) resolves.push(installedChunks[chunkId][0]);
            installedChunks[chunkId] = 0;
        }
        for (moduleId in moreModules) {
            if (Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
                modules[moduleId] = moreModules[moduleId];
            }
        }
        if (parentJsonpFunction) parentJsonpFunction(chunkIds, moreModules, executeModules);
        while (resolves.length) resolves.shift()();
    };
    var installedModules = {};
    var installedChunks = {
        6: 0
    };
    function __webpack_require__(moduleId) {
        if (installedModules[moduleId]) return installedModules[moduleId].exports;
        var module = installedModules[moduleId] = {
            i: moduleId,
            l: false,
            exports: {}
        };
        modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
        module.l = true;
        return module.exports;
    }
    __webpack_require__.e = function requireEnsure(chunkId) {
        if (installedChunks[chunkId] === 0) return Promise.resolve();
        if (installedChunks[chunkId]) {
            return installedChunks[chunkId][2];
        }
        var promise = new Promise(function(resolve, reject) {
            installedChunks[chunkId] = [ resolve, reject ];
        });
        installedChunks[chunkId][2] = promise;
        var head = document.getElementsByTagName("head")[0];
        var script = document.createElement("script");
        script.type = "text/javascript";
        script.charset = "utf-8";
        script.async = true;
        script.timeout = 12e4;
        if (__webpack_require__.nc) {
            script.setAttribute("nonce", __webpack_require__.nc);
        }
        script.src = __webpack_require__.p + "" + chunkId + "." + ({}[chunkId] || chunkId) + "-" + {
            "0": "1ad7aa005a",
            "1": "81f99ec62f",
            "2": "8589bfe989"
        }[chunkId] + ".js";
        var timeout = setTimeout(onScriptComplete, 12e4);
        script.onerror = script.onload = onScriptComplete;
        function onScriptComplete() {
            script.onerror = script.onload = null;
            clearTimeout(timeout);
            var chunk = installedChunks[chunkId];
            if (chunk !== 0) {
                if (chunk) chunk[1](new Error("Loading chunk " + chunkId + " failed."));
                installedChunks[chunkId] = undefined;
            }
        }
        head.appendChild(script);
        return promise;
    };
    __webpack_require__.m = modules;
    __webpack_require__.c = installedModules;
    __webpack_require__.i = function(value) {
        return value;
    };
    __webpack_require__.d = function(exports, name, getter) {
        if (!__webpack_require__.o(exports, name)) {
            Object.defineProperty(exports, name, {
                configurable: false,
                enumerable: true,
                get: getter
            });
        }
    };
    __webpack_require__.n = function(module) {
        var getter = module && module.__esModule ? function getDefault() {
            return module["default"];
        } : function getModuleExports() {
            return module;
        };
        __webpack_require__.d(getter, "a", getter);
        return getter;
    };
    __webpack_require__.o = function(object, property) {
        return Object.prototype.hasOwnProperty.call(object, property);
    };
    __webpack_require__.p = "/js/";
    __webpack_require__.oe = function(err) {
        console.error(err);
        throw err;
    };
    return __webpack_require__(__webpack_require__.s = 81);
})({
    10: function(module, exports, __webpack_require__) {
        var Component = __webpack_require__(8)(__webpack_require__(19), __webpack_require__(34), null, null);
        module.exports = Component.exports;
    },
    18: function(module, exports, __webpack_require__) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        exports.default = {
            props: {
                label: String,
                value: Boolean
            }
        };
    },
    19: function(module, exports, __webpack_require__) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        exports.default = {
            props: [ "icon", "label", "error", "value", "type", "name" ],
            data: function data() {
                return {
                    focus: false
                };
            },
            methods: {
                onFocus: function onFocus() {
                    this.focus = true;
                    this.$emit("error", false);
                }
            }
        };
    },
    33: function(module, exports) {
        module.exports = {
            render: function() {
                var _vm = this;
                var _h = _vm.$createElement;
                var _c = _vm._self._c || _h;
                return _c("div", {
                    staticClass: "checkbox"
                }, [ _c("label", [ _c("input", {
                    attrs: {
                        type: "checkbox"
                    },
                    domProps: {
                        checked: _vm.value
                    },
                    on: {
                        change: function($event) {
                            _vm.$emit("input", !_vm.value);
                        }
                    }
                }), _vm._v(" "), _vm._m(0), _vm._v("\n        " + _vm._s(_vm.label) + "\n    ") ]) ]);
            },
            staticRenderFns: [ function() {
                var _vm = this;
                var _h = _vm.$createElement;
                var _c = _vm._self._c || _h;
                return _c("span", {
                    staticClass: "checkbox-material"
                }, [ _c("span", {
                    staticClass: "check"
                }) ]);
            } ]
        };
    },
    34: function(module, exports) {
        module.exports = {
            render: function() {
                var _vm = this;
                var _h = _vm.$createElement;
                var _c = _vm._self._c || _h;
                return _c("div", {
                    staticClass: "input-group"
                }, [ _c("span", {
                    staticClass: "input-group-addon"
                }, [ _c("i", {
                    staticClass: "material-icons"
                }, [ _vm._v(_vm._s(_vm.icon)) ]) ]), _vm._v(" "), _c("div", {
                    staticClass: "form-group label-floating",
                    class: {
                        "has-error": _vm.error,
                        "is-empty": _vm.value.length === 0,
                        "is-focused": _vm.focus
                    }
                }, [ _c("label", {
                    staticClass: "control-label",
                    attrs: {
                        for: _vm.name
                    }
                }, [ _vm._v(_vm._s(_vm.label)) ]), _vm._v(" "), _c("input", {
                    staticClass: "form-control",
                    attrs: {
                        type: _vm.type,
                        name: _vm.name,
                        id: _vm.name
                    },
                    domProps: {
                        value: _vm.value
                    },
                    on: {
                        input: function($event) {
                            _vm.$emit("input", $event.target.value);
                        },
                        focus: _vm.onFocus,
                        blur: function($event) {
                            _vm.focus = false;
                        }
                    }
                }), _vm._v(" "), _vm.error ? _c("span", {
                    staticClass: "material-icons form-control-feedback"
                }, [ _vm._v("clear") ]) : _vm._e() ]) ]);
            },
            staticRenderFns: []
        };
    },
    8: function(module, exports) {
        module.exports = function normalizeComponent(rawScriptExports, compiledTemplate, scopeId, cssModules) {
            var esModule;
            var scriptExports = rawScriptExports = rawScriptExports || {};
            var type = typeof rawScriptExports.default;
            if (type === "object" || type === "function") {
                esModule = rawScriptExports;
                scriptExports = rawScriptExports.default;
            }
            var options = typeof scriptExports === "function" ? scriptExports.options : scriptExports;
            if (compiledTemplate) {
                options.render = compiledTemplate.render;
                options.staticRenderFns = compiledTemplate.staticRenderFns;
            }
            if (scopeId) {
                options._scopeId = scopeId;
            }
            if (cssModules) {
                var computed = Object.create(options.computed || null);
                Object.keys(cssModules).forEach(function(key) {
                    var module = cssModules[key];
                    computed[key] = function() {
                        return module;
                    };
                });
                options.computed = computed;
            }
            return {
                esModule: esModule,
                exports: scriptExports,
                options: options
            };
        };
    },
    81: function(module, exports, __webpack_require__) {
        "use strict";
        var router = new VueRouter({
            mode: "history",
            routes: [ {
                path: "/",
                component: function component() {
                    return __webpack_require__.e(2).then(__webpack_require__.bind(null, 118));
                }
            }, {
                path: "/login",
                component: function component() {
                    return __webpack_require__.e(1).then(__webpack_require__.bind(null, 119));
                }
            }, {
                path: "/register",
                component: function component() {
                    return __webpack_require__.e(0).then(__webpack_require__.bind(null, 120));
                }
            } ]
        });
        router.beforeEach(function(to, from, next) {
            NProgress.start();
            next();
        });
        Vue.component("form-input", __webpack_require__(10));
        Vue.component("form-checkbox", __webpack_require__(9));
        new Vue({
            router: router
        }).$mount("#app");
    },
    9: function(module, exports, __webpack_require__) {
        var Component = __webpack_require__(8)(__webpack_require__(18), __webpack_require__(33), null, null);
        module.exports = Component.exports;
    }
});