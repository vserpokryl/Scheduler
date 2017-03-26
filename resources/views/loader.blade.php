<style>
    #nprogress{pointer-events:none;z-index:2}#nprogress .bar{background:#29d;position:fixed;z-index:3;top:0;left:0;width:100%;height:2px}#nprogress .peg{display:block;position:absolute;right:0;width:100px;height:100%;box-shadow:0 0 10px #29d,0 0 5px #29d;opacity:1;-webkit-transform:rotate(3deg) translateY(-4px);transform:rotate(3deg) translateY(-4px)}#nprogress .spinner{display:block;position:fixed;z-index:3;top:15px;right:15px}#nprogress .spinner-icon{width:18px;height:18px;box-sizing:border-box;border:2px solid transparent;border-top-color:#29d;border-left-color:#29d;border-radius:50%;-webkit-animation:a .4s linear infinite;animation:a .4s linear infinite}.nprogress-custom-parent{overflow:hidden;position:relative}.nprogress-custom-parent #nprogress .bar,.nprogress-custom-parent #nprogress .spinner{position:absolute}@-webkit-keyframes a{0%{-webkit-transform:rotate(0deg)}to{-webkit-transform:rotate(1turn)}}@keyframes a{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}#app{display:none}*{box-sizing:border-box}#loader,body{margin:0}#loader{width:100%;height:100%;overflow:visible;position:absolute;background:#fff;display:block;z-index:1;opacity:1;visibility:visible;-webkit-transition:opacity 1s,visibility 1s;transition:opacity 1s,visibility 1s;padding:0}#loader p{top:50%;left:50%;font-size:20px;width:250px;height:50px;position:relative;margin:-25px 0 0 -125px;padding:0;text-align:center;line-height:1.5em;font-weight:300;font-family:Helvetica Neue,Helvetica,Arial,sans-serif}
</style>

<div id="loader">
    <p>Идет загрузка...</p>
</div>

<script>
    (function(modules) {
    var installedModules = {};
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
    return __webpack_require__(__webpack_require__.s = 82);
})({
    57: function(module, exports, __webpack_require__) {
        var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;
        (function(root, factory) {
            if (true) {
                !(__WEBPACK_AMD_DEFINE_FACTORY__ = factory, __WEBPACK_AMD_DEFINE_RESULT__ = typeof __WEBPACK_AMD_DEFINE_FACTORY__ === "function" ? __WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module) : __WEBPACK_AMD_DEFINE_FACTORY__, 
                __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
            } else if (typeof exports === "object") {
                module.exports = factory();
            } else {
                root.NProgress = factory();
            }
        })(this, function() {
            var NProgress = {};
            NProgress.version = "0.2.0";
            var Settings = NProgress.settings = {
                minimum: .08,
                easing: "ease",
                positionUsing: "",
                speed: 200,
                trickle: true,
                trickleRate: .02,
                trickleSpeed: 800,
                showSpinner: true,
                barSelector: '[role="bar"]',
                spinnerSelector: '[role="spinner"]',
                parent: "body",
                template: '<div class="bar" role="bar"><div class="peg"></div></div><div class="spinner" role="spinner"><div class="spinner-icon"></div></div>'
            };
            NProgress.configure = function(options) {
                var key, value;
                for (key in options) {
                    value = options[key];
                    if (value !== undefined && options.hasOwnProperty(key)) Settings[key] = value;
                }
                return this;
            };
            NProgress.status = null;
            NProgress.set = function(n) {
                var started = NProgress.isStarted();
                n = clamp(n, Settings.minimum, 1);
                NProgress.status = n === 1 ? null : n;
                var progress = NProgress.render(!started), bar = progress.querySelector(Settings.barSelector), speed = Settings.speed, ease = Settings.easing;
                progress.offsetWidth;
                queue(function(next) {
                    if (Settings.positionUsing === "") Settings.positionUsing = NProgress.getPositioningCSS();
                    css(bar, barPositionCSS(n, speed, ease));
                    if (n === 1) {
                        css(progress, {
                            transition: "none",
                            opacity: 1
                        });
                        progress.offsetWidth;
                        setTimeout(function() {
                            css(progress, {
                                transition: "all " + speed + "ms linear",
                                opacity: 0
                            });
                            setTimeout(function() {
                                NProgress.remove();
                                next();
                            }, speed);
                        }, speed);
                    } else {
                        setTimeout(next, speed);
                    }
                });
                return this;
            };
            NProgress.isStarted = function() {
                return typeof NProgress.status === "number";
            };
            NProgress.start = function() {
                if (!NProgress.status) NProgress.set(0);
                var work = function() {
                    setTimeout(function() {
                        if (!NProgress.status) return;
                        NProgress.trickle();
                        work();
                    }, Settings.trickleSpeed);
                };
                if (Settings.trickle) work();
                return this;
            };
            NProgress.done = function(force) {
                if (!force && !NProgress.status) return this;
                return NProgress.inc(.3 + .5 * Math.random()).set(1);
            };
            NProgress.inc = function(amount) {
                var n = NProgress.status;
                if (!n) {
                    return NProgress.start();
                } else {
                    if (typeof amount !== "number") {
                        amount = (1 - n) * clamp(Math.random() * n, .1, .95);
                    }
                    n = clamp(n + amount, 0, .994);
                    return NProgress.set(n);
                }
            };
            NProgress.trickle = function() {
                return NProgress.inc(Math.random() * Settings.trickleRate);
            };
            (function() {
                var initial = 0, current = 0;
                NProgress.promise = function($promise) {
                    if (!$promise || $promise.state() === "resolved") {
                        return this;
                    }
                    if (current === 0) {
                        NProgress.start();
                    }
                    initial++;
                    current++;
                    $promise.always(function() {
                        current--;
                        if (current === 0) {
                            initial = 0;
                            NProgress.done();
                        } else {
                            NProgress.set((initial - current) / initial);
                        }
                    });
                    return this;
                };
            })();
            NProgress.render = function(fromStart) {
                if (NProgress.isRendered()) return document.getElementById("nprogress");
                addClass(document.documentElement, "nprogress-busy");
                var progress = document.createElement("div");
                progress.id = "nprogress";
                progress.innerHTML = Settings.template;
                var bar = progress.querySelector(Settings.barSelector), perc = fromStart ? "-100" : toBarPerc(NProgress.status || 0), parent = document.querySelector(Settings.parent), spinner;
                css(bar, {
                    transition: "all 0 linear",
                    transform: "translate3d(" + perc + "%,0,0)"
                });
                if (!Settings.showSpinner) {
                    spinner = progress.querySelector(Settings.spinnerSelector);
                    spinner && removeElement(spinner);
                }
                if (parent != document.body) {
                    addClass(parent, "nprogress-custom-parent");
                }
                parent.appendChild(progress);
                return progress;
            };
            NProgress.remove = function() {
                removeClass(document.documentElement, "nprogress-busy");
                removeClass(document.querySelector(Settings.parent), "nprogress-custom-parent");
                var progress = document.getElementById("nprogress");
                progress && removeElement(progress);
            };
            NProgress.isRendered = function() {
                return !!document.getElementById("nprogress");
            };
            NProgress.getPositioningCSS = function() {
                var bodyStyle = document.body.style;
                var vendorPrefix = "WebkitTransform" in bodyStyle ? "Webkit" : "MozTransform" in bodyStyle ? "Moz" : "msTransform" in bodyStyle ? "ms" : "OTransform" in bodyStyle ? "O" : "";
                if (vendorPrefix + "Perspective" in bodyStyle) {
                    return "translate3d";
                } else if (vendorPrefix + "Transform" in bodyStyle) {
                    return "translate";
                } else {
                    return "margin";
                }
            };
            function clamp(n, min, max) {
                if (n < min) return min;
                if (n > max) return max;
                return n;
            }
            function toBarPerc(n) {
                return (-1 + n) * 100;
            }
            function barPositionCSS(n, speed, ease) {
                var barCSS;
                if (Settings.positionUsing === "translate3d") {
                    barCSS = {
                        transform: "translate3d(" + toBarPerc(n) + "%,0,0)"
                    };
                } else if (Settings.positionUsing === "translate") {
                    barCSS = {
                        transform: "translate(" + toBarPerc(n) + "%,0)"
                    };
                } else {
                    barCSS = {
                        "margin-left": toBarPerc(n) + "%"
                    };
                }
                barCSS.transition = "all " + speed + "ms " + ease;
                return barCSS;
            }
            var queue = function() {
                var pending = [];
                function next() {
                    var fn = pending.shift();
                    if (fn) {
                        fn(next);
                    }
                }
                return function(fn) {
                    pending.push(fn);
                    if (pending.length == 1) next();
                };
            }();
            var css = function() {
                var cssPrefixes = [ "Webkit", "O", "Moz", "ms" ], cssProps = {};
                function camelCase(string) {
                    return string.replace(/^-ms-/, "ms-").replace(/-([\da-z])/gi, function(match, letter) {
                        return letter.toUpperCase();
                    });
                }
                function getVendorProp(name) {
                    var style = document.body.style;
                    if (name in style) return name;
                    var i = cssPrefixes.length, capName = name.charAt(0).toUpperCase() + name.slice(1), vendorName;
                    while (i--) {
                        vendorName = cssPrefixes[i] + capName;
                        if (vendorName in style) return vendorName;
                    }
                    return name;
                }
                function getStyleProp(name) {
                    name = camelCase(name);
                    return cssProps[name] || (cssProps[name] = getVendorProp(name));
                }
                function applyCss(element, prop, value) {
                    prop = getStyleProp(prop);
                    element.style[prop] = value;
                }
                return function(element, properties) {
                    var args = arguments, prop, value;
                    if (args.length == 2) {
                        for (prop in properties) {
                            value = properties[prop];
                            if (value !== undefined && properties.hasOwnProperty(prop)) applyCss(element, prop, value);
                        }
                    } else {
                        applyCss(element, args[1], args[2]);
                    }
                };
            }();
            function hasClass(element, name) {
                var list = typeof element == "string" ? element : classList(element);
                return list.indexOf(" " + name + " ") >= 0;
            }
            function addClass(element, name) {
                var oldList = classList(element), newList = oldList + name;
                if (hasClass(oldList, name)) return;
                element.className = newList.substring(1);
            }
            function removeClass(element, name) {
                var oldList = classList(element), newList;
                if (!hasClass(element, name)) return;
                newList = oldList.replace(" " + name + " ", " ");
                element.className = newList.substring(1, newList.length - 1);
            }
            function classList(element) {
                return (" " + (element.className || "") + " ").replace(/\s+/gi, " ");
            }
            function removeElement(element) {
                element && element.parentNode && element.parentNode.removeChild(element);
            }
            return NProgress;
        });
    },
    82: function(module, exports, __webpack_require__) {
        "use strict";
        var _nprogress = __webpack_require__(57);
        var _nprogress2 = _interopRequireDefault(_nprogress);
        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : {
                default: obj
            };
        }
        window.NProgress = _nprogress2.default;
        _nprogress2.default.start();
        window.countAssets = 2;
        window.loadedAssets = function() {
            countAssets--;
            if (countAssets === 0) {
                _nprogress2.default.done();
                var loader = document.getElementById("loader");
                var app = document.getElementById("app");
                app.style.display = "block";
                loader.style.opacity = 0;
                loader.style.visibility = "hidden";
            }
        };
        var link = document.createElement("link");
        link.href = document.querySelector('meta[name="app-css-path"]').getAttribute("content");
        link.rel = "stylesheet";
        link.onload = function() {
            loadedAssets();
        };
        document.head.appendChild(link);
    }
});
</script>