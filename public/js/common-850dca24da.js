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
    return __webpack_require__(__webpack_require__.s = 80);
})([ function(module, exports, __webpack_require__) {
    "use strict";
    var bind = __webpack_require__(40);
    var toString = Object.prototype.toString;
    function isArray(val) {
        return toString.call(val) === "[object Array]";
    }
    function isArrayBuffer(val) {
        return toString.call(val) === "[object ArrayBuffer]";
    }
    function isFormData(val) {
        return typeof FormData !== "undefined" && val instanceof FormData;
    }
    function isArrayBufferView(val) {
        var result;
        if (typeof ArrayBuffer !== "undefined" && ArrayBuffer.isView) {
            result = ArrayBuffer.isView(val);
        } else {
            result = val && val.buffer && val.buffer instanceof ArrayBuffer;
        }
        return result;
    }
    function isString(val) {
        return typeof val === "string";
    }
    function isNumber(val) {
        return typeof val === "number";
    }
    function isUndefined(val) {
        return typeof val === "undefined";
    }
    function isObject(val) {
        return val !== null && typeof val === "object";
    }
    function isDate(val) {
        return toString.call(val) === "[object Date]";
    }
    function isFile(val) {
        return toString.call(val) === "[object File]";
    }
    function isBlob(val) {
        return toString.call(val) === "[object Blob]";
    }
    function isFunction(val) {
        return toString.call(val) === "[object Function]";
    }
    function isStream(val) {
        return isObject(val) && isFunction(val.pipe);
    }
    function isURLSearchParams(val) {
        return typeof URLSearchParams !== "undefined" && val instanceof URLSearchParams;
    }
    function trim(str) {
        return str.replace(/^\s*/, "").replace(/\s*$/, "");
    }
    function isStandardBrowserEnv() {
        return typeof window !== "undefined" && typeof document !== "undefined" && typeof document.createElement === "function";
    }
    function forEach(obj, fn) {
        if (obj === null || typeof obj === "undefined") {
            return;
        }
        if (typeof obj !== "object" && !isArray(obj)) {
            obj = [ obj ];
        }
        if (isArray(obj)) {
            for (var i = 0, l = obj.length; i < l; i++) {
                fn.call(null, obj[i], i, obj);
            }
        } else {
            for (var key in obj) {
                if (Object.prototype.hasOwnProperty.call(obj, key)) {
                    fn.call(null, obj[key], key, obj);
                }
            }
        }
    }
    function merge() {
        var result = {};
        function assignValue(val, key) {
            if (typeof result[key] === "object" && typeof val === "object") {
                result[key] = merge(result[key], val);
            } else {
                result[key] = val;
            }
        }
        for (var i = 0, l = arguments.length; i < l; i++) {
            forEach(arguments[i], assignValue);
        }
        return result;
    }
    function extend(a, b, thisArg) {
        forEach(b, function assignValue(val, key) {
            if (thisArg && typeof val === "function") {
                a[key] = bind(val, thisArg);
            } else {
                a[key] = val;
            }
        });
        return a;
    }
    module.exports = {
        isArray: isArray,
        isArrayBuffer: isArrayBuffer,
        isFormData: isFormData,
        isArrayBufferView: isArrayBufferView,
        isString: isString,
        isNumber: isNumber,
        isObject: isObject,
        isUndefined: isUndefined,
        isDate: isDate,
        isFile: isFile,
        isBlob: isBlob,
        isFunction: isFunction,
        isStream: isStream,
        isURLSearchParams: isURLSearchParams,
        isStandardBrowserEnv: isStandardBrowserEnv,
        forEach: forEach,
        merge: merge,
        extend: extend,
        trim: trim
    };
}, function(module, exports) {
    var global = module.exports = typeof window != "undefined" && window.Math == Math ? window : typeof self != "undefined" && self.Math == Math ? self : Function("return this")();
    if (typeof __g == "number") __g = global;
}, function(module, exports) {
    var hasOwnProperty = {}.hasOwnProperty;
    module.exports = function(it, key) {
        return hasOwnProperty.call(it, key);
    };
}, function(module, exports, __webpack_require__) {
    var IObject = __webpack_require__(94), defined = __webpack_require__(21);
    module.exports = function(it) {
        return IObject(defined(it));
    };
}, function(module, exports, __webpack_require__) {
    module.exports = !__webpack_require__(12)(function() {
        return Object.defineProperty({}, "a", {
            get: function() {
                return 7;
            }
        }).a != 7;
    });
}, function(module, exports, __webpack_require__) {
    var dP = __webpack_require__(6), createDesc = __webpack_require__(15);
    module.exports = __webpack_require__(4) ? function(object, key, value) {
        return dP.f(object, key, createDesc(1, value));
    } : function(object, key, value) {
        object[key] = value;
        return object;
    };
}, function(module, exports, __webpack_require__) {
    var anObject = __webpack_require__(11), IE8_DOM_DEFINE = __webpack_require__(44), toPrimitive = __webpack_require__(30), dP = Object.defineProperty;
    exports.f = __webpack_require__(4) ? Object.defineProperty : function defineProperty(O, P, Attributes) {
        anObject(O);
        P = toPrimitive(P, true);
        anObject(Attributes);
        if (IE8_DOM_DEFINE) try {
            return dP(O, P, Attributes);
        } catch (e) {}
        if ("get" in Attributes || "set" in Attributes) throw TypeError("Accessors not supported!");
        if ("value" in Attributes) O[P] = Attributes.value;
        return O;
    };
}, function(module, exports, __webpack_require__) {
    var store = __webpack_require__(28)("wks"), uid = __webpack_require__(16), Symbol = __webpack_require__(1).Symbol, USE_SYMBOL = typeof Symbol == "function";
    var $exports = module.exports = function(name) {
        return store[name] || (store[name] = USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)("Symbol." + name));
    };
    $exports.store = store;
}, , , , function(module, exports, __webpack_require__) {
    var isObject = __webpack_require__(13);
    module.exports = function(it) {
        if (!isObject(it)) throw TypeError(it + " is not an object!");
        return it;
    };
}, function(module, exports) {
    module.exports = function(exec) {
        try {
            return !!exec();
        } catch (e) {
            return true;
        }
    };
}, function(module, exports) {
    module.exports = function(it) {
        return typeof it === "object" ? it !== null : typeof it === "function";
    };
}, function(module, exports, __webpack_require__) {
    var $keys = __webpack_require__(49), enumBugKeys = __webpack_require__(22);
    module.exports = Object.keys || function keys(O) {
        return $keys(O, enumBugKeys);
    };
}, function(module, exports) {
    module.exports = function(bitmap, value) {
        return {
            enumerable: !(bitmap & 1),
            configurable: !(bitmap & 2),
            writable: !(bitmap & 4),
            value: value
        };
    };
}, function(module, exports) {
    var id = 0, px = Math.random();
    module.exports = function(key) {
        return "Symbol(".concat(key === undefined ? "" : key, ")_", (++id + px).toString(36));
    };
}, function(module, exports, __webpack_require__) {
    "use strict";
    (function(process) {
        var utils = __webpack_require__(0);
        var normalizeHeaderName = __webpack_require__(76);
        var PROTECTION_PREFIX = /^\)\]\}',?\n/;
        var DEFAULT_CONTENT_TYPE = {
            "Content-Type": "application/x-www-form-urlencoded"
        };
        function setContentTypeIfUnset(headers, value) {
            if (!utils.isUndefined(headers) && utils.isUndefined(headers["Content-Type"])) {
                headers["Content-Type"] = value;
            }
        }
        function getDefaultAdapter() {
            var adapter;
            if (typeof XMLHttpRequest !== "undefined") {
                adapter = __webpack_require__(36);
            } else if (typeof process !== "undefined") {
                adapter = __webpack_require__(36);
            }
            return adapter;
        }
        var defaults = {
            adapter: getDefaultAdapter(),
            transformRequest: [ function transformRequest(data, headers) {
                normalizeHeaderName(headers, "Content-Type");
                if (utils.isFormData(data) || utils.isArrayBuffer(data) || utils.isStream(data) || utils.isFile(data) || utils.isBlob(data)) {
                    return data;
                }
                if (utils.isArrayBufferView(data)) {
                    return data.buffer;
                }
                if (utils.isURLSearchParams(data)) {
                    setContentTypeIfUnset(headers, "application/x-www-form-urlencoded;charset=utf-8");
                    return data.toString();
                }
                if (utils.isObject(data)) {
                    setContentTypeIfUnset(headers, "application/json;charset=utf-8");
                    return JSON.stringify(data);
                }
                return data;
            } ],
            transformResponse: [ function transformResponse(data) {
                if (typeof data === "string") {
                    data = data.replace(PROTECTION_PREFIX, "");
                    try {
                        data = JSON.parse(data);
                    } catch (e) {}
                }
                return data;
            } ],
            timeout: 0,
            xsrfCookieName: "XSRF-TOKEN",
            xsrfHeaderName: "X-XSRF-TOKEN",
            maxContentLength: -1,
            validateStatus: function validateStatus(status) {
                return status >= 200 && status < 300;
            }
        };
        defaults.headers = {
            common: {
                Accept: "application/json, text/plain, */*"
            }
        };
        utils.forEach([ "delete", "get", "head" ], function forEachMehtodNoData(method) {
            defaults.headers[method] = {};
        });
        utils.forEach([ "post", "put", "patch" ], function forEachMethodWithData(method) {
            defaults.headers[method] = utils.merge(DEFAULT_CONTENT_TYPE);
        });
        module.exports = defaults;
    }).call(exports, __webpack_require__(51));
}, , , function(module, exports) {
    var core = module.exports = {
        version: "2.4.0"
    };
    if (typeof __e == "number") __e = core;
}, function(module, exports) {
    module.exports = function(it) {
        if (it == undefined) throw TypeError("Can't call method on  " + it);
        return it;
    };
}, function(module, exports) {
    module.exports = "constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",");
}, function(module, exports) {
    module.exports = {};
}, function(module, exports) {
    module.exports = true;
}, function(module, exports) {
    exports.f = {}.propertyIsEnumerable;
}, function(module, exports, __webpack_require__) {
    var def = __webpack_require__(6).f, has = __webpack_require__(2), TAG = __webpack_require__(7)("toStringTag");
    module.exports = function(it, tag, stat) {
        if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, {
            configurable: true,
            value: tag
        });
    };
}, function(module, exports, __webpack_require__) {
    var shared = __webpack_require__(28)("keys"), uid = __webpack_require__(16);
    module.exports = function(key) {
        return shared[key] || (shared[key] = uid(key));
    };
}, function(module, exports, __webpack_require__) {
    var global = __webpack_require__(1), SHARED = "__core-js_shared__", store = global[SHARED] || (global[SHARED] = {});
    module.exports = function(key) {
        return store[key] || (store[key] = {});
    };
}, function(module, exports) {
    var ceil = Math.ceil, floor = Math.floor;
    module.exports = function(it) {
        return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
    };
}, function(module, exports, __webpack_require__) {
    var isObject = __webpack_require__(13);
    module.exports = function(it, S) {
        if (!isObject(it)) return it;
        var fn, val;
        if (S && typeof (fn = it.toString) == "function" && !isObject(val = fn.call(it))) return val;
        if (typeof (fn = it.valueOf) == "function" && !isObject(val = fn.call(it))) return val;
        if (!S && typeof (fn = it.toString) == "function" && !isObject(val = fn.call(it))) return val;
        throw TypeError("Can't convert object to primitive value");
    };
}, function(module, exports, __webpack_require__) {
    var global = __webpack_require__(1), core = __webpack_require__(20), LIBRARY = __webpack_require__(24), wksExt = __webpack_require__(32), defineProperty = __webpack_require__(6).f;
    module.exports = function(name) {
        var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});
        if (name.charAt(0) != "_" && !(name in $Symbol)) defineProperty($Symbol, name, {
            value: wksExt.f(name)
        });
    };
}, function(module, exports, __webpack_require__) {
    exports.f = __webpack_require__(7);
}, , , function(module, exports, __webpack_require__) {
    var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;
    (function(global, factory) {
        "use strict";
        if (typeof module === "object" && typeof module.exports === "object") {
            module.exports = global.document ? factory(global, true) : function(w) {
                if (!w.document) {
                    throw new Error("jQuery requires a window with a document");
                }
                return factory(w);
            };
        } else {
            factory(global);
        }
    })(typeof window !== "undefined" ? window : this, function(window, noGlobal) {
        "use strict";
        var arr = [];
        var document = window.document;
        var getProto = Object.getPrototypeOf;
        var slice = arr.slice;
        var concat = arr.concat;
        var push = arr.push;
        var indexOf = arr.indexOf;
        var class2type = {};
        var toString = class2type.toString;
        var hasOwn = class2type.hasOwnProperty;
        var fnToString = hasOwn.toString;
        var ObjectFunctionString = fnToString.call(Object);
        var support = {};
        function DOMEval(code, doc) {
            doc = doc || document;
            var script = doc.createElement("script");
            script.text = code;
            doc.head.appendChild(script).parentNode.removeChild(script);
        }
        var version = "3.2.1", jQuery = function(selector, context) {
            return new jQuery.fn.init(selector, context);
        }, rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, rmsPrefix = /^-ms-/, rdashAlpha = /-([a-z])/g, fcamelCase = function(all, letter) {
            return letter.toUpperCase();
        };
        jQuery.fn = jQuery.prototype = {
            jquery: version,
            constructor: jQuery,
            length: 0,
            toArray: function() {
                return slice.call(this);
            },
            get: function(num) {
                if (num == null) {
                    return slice.call(this);
                }
                return num < 0 ? this[num + this.length] : this[num];
            },
            pushStack: function(elems) {
                var ret = jQuery.merge(this.constructor(), elems);
                ret.prevObject = this;
                return ret;
            },
            each: function(callback) {
                return jQuery.each(this, callback);
            },
            map: function(callback) {
                return this.pushStack(jQuery.map(this, function(elem, i) {
                    return callback.call(elem, i, elem);
                }));
            },
            slice: function() {
                return this.pushStack(slice.apply(this, arguments));
            },
            first: function() {
                return this.eq(0);
            },
            last: function() {
                return this.eq(-1);
            },
            eq: function(i) {
                var len = this.length, j = +i + (i < 0 ? len : 0);
                return this.pushStack(j >= 0 && j < len ? [ this[j] ] : []);
            },
            end: function() {
                return this.prevObject || this.constructor();
            },
            push: push,
            sort: arr.sort,
            splice: arr.splice
        };
        jQuery.extend = jQuery.fn.extend = function() {
            var options, name, src, copy, copyIsArray, clone, target = arguments[0] || {}, i = 1, length = arguments.length, deep = false;
            if (typeof target === "boolean") {
                deep = target;
                target = arguments[i] || {};
                i++;
            }
            if (typeof target !== "object" && !jQuery.isFunction(target)) {
                target = {};
            }
            if (i === length) {
                target = this;
                i--;
            }
            for (;i < length; i++) {
                if ((options = arguments[i]) != null) {
                    for (name in options) {
                        src = target[name];
                        copy = options[name];
                        if (target === copy) {
                            continue;
                        }
                        if (deep && copy && (jQuery.isPlainObject(copy) || (copyIsArray = Array.isArray(copy)))) {
                            if (copyIsArray) {
                                copyIsArray = false;
                                clone = src && Array.isArray(src) ? src : [];
                            } else {
                                clone = src && jQuery.isPlainObject(src) ? src : {};
                            }
                            target[name] = jQuery.extend(deep, clone, copy);
                        } else if (copy !== undefined) {
                            target[name] = copy;
                        }
                    }
                }
            }
            return target;
        };
        jQuery.extend({
            expando: "jQuery" + (version + Math.random()).replace(/\D/g, ""),
            isReady: true,
            error: function(msg) {
                throw new Error(msg);
            },
            noop: function() {},
            isFunction: function(obj) {
                return jQuery.type(obj) === "function";
            },
            isWindow: function(obj) {
                return obj != null && obj === obj.window;
            },
            isNumeric: function(obj) {
                var type = jQuery.type(obj);
                return (type === "number" || type === "string") && !isNaN(obj - parseFloat(obj));
            },
            isPlainObject: function(obj) {
                var proto, Ctor;
                if (!obj || toString.call(obj) !== "[object Object]") {
                    return false;
                }
                proto = getProto(obj);
                if (!proto) {
                    return true;
                }
                Ctor = hasOwn.call(proto, "constructor") && proto.constructor;
                return typeof Ctor === "function" && fnToString.call(Ctor) === ObjectFunctionString;
            },
            isEmptyObject: function(obj) {
                var name;
                for (name in obj) {
                    return false;
                }
                return true;
            },
            type: function(obj) {
                if (obj == null) {
                    return obj + "";
                }
                return typeof obj === "object" || typeof obj === "function" ? class2type[toString.call(obj)] || "object" : typeof obj;
            },
            globalEval: function(code) {
                DOMEval(code);
            },
            camelCase: function(string) {
                return string.replace(rmsPrefix, "ms-").replace(rdashAlpha, fcamelCase);
            },
            each: function(obj, callback) {
                var length, i = 0;
                if (isArrayLike(obj)) {
                    length = obj.length;
                    for (;i < length; i++) {
                        if (callback.call(obj[i], i, obj[i]) === false) {
                            break;
                        }
                    }
                } else {
                    for (i in obj) {
                        if (callback.call(obj[i], i, obj[i]) === false) {
                            break;
                        }
                    }
                }
                return obj;
            },
            trim: function(text) {
                return text == null ? "" : (text + "").replace(rtrim, "");
            },
            makeArray: function(arr, results) {
                var ret = results || [];
                if (arr != null) {
                    if (isArrayLike(Object(arr))) {
                        jQuery.merge(ret, typeof arr === "string" ? [ arr ] : arr);
                    } else {
                        push.call(ret, arr);
                    }
                }
                return ret;
            },
            inArray: function(elem, arr, i) {
                return arr == null ? -1 : indexOf.call(arr, elem, i);
            },
            merge: function(first, second) {
                var len = +second.length, j = 0, i = first.length;
                for (;j < len; j++) {
                    first[i++] = second[j];
                }
                first.length = i;
                return first;
            },
            grep: function(elems, callback, invert) {
                var callbackInverse, matches = [], i = 0, length = elems.length, callbackExpect = !invert;
                for (;i < length; i++) {
                    callbackInverse = !callback(elems[i], i);
                    if (callbackInverse !== callbackExpect) {
                        matches.push(elems[i]);
                    }
                }
                return matches;
            },
            map: function(elems, callback, arg) {
                var length, value, i = 0, ret = [];
                if (isArrayLike(elems)) {
                    length = elems.length;
                    for (;i < length; i++) {
                        value = callback(elems[i], i, arg);
                        if (value != null) {
                            ret.push(value);
                        }
                    }
                } else {
                    for (i in elems) {
                        value = callback(elems[i], i, arg);
                        if (value != null) {
                            ret.push(value);
                        }
                    }
                }
                return concat.apply([], ret);
            },
            guid: 1,
            proxy: function(fn, context) {
                var tmp, args, proxy;
                if (typeof context === "string") {
                    tmp = fn[context];
                    context = fn;
                    fn = tmp;
                }
                if (!jQuery.isFunction(fn)) {
                    return undefined;
                }
                args = slice.call(arguments, 2);
                proxy = function() {
                    return fn.apply(context || this, args.concat(slice.call(arguments)));
                };
                proxy.guid = fn.guid = fn.guid || jQuery.guid++;
                return proxy;
            },
            now: Date.now,
            support: support
        });
        if (typeof Symbol === "function") {
            jQuery.fn[Symbol.iterator] = arr[Symbol.iterator];
        }
        jQuery.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(i, name) {
            class2type["[object " + name + "]"] = name.toLowerCase();
        });
        function isArrayLike(obj) {
            var length = !!obj && "length" in obj && obj.length, type = jQuery.type(obj);
            if (type === "function" || jQuery.isWindow(obj)) {
                return false;
            }
            return type === "array" || length === 0 || typeof length === "number" && length > 0 && length - 1 in obj;
        }
        var Sizzle = function(window) {
            var i, support, Expr, getText, isXML, tokenize, compile, select, outermostContext, sortInput, hasDuplicate, setDocument, document, docElem, documentIsHTML, rbuggyQSA, rbuggyMatches, matches, contains, expando = "sizzle" + 1 * new Date(), preferredDoc = window.document, dirruns = 0, done = 0, classCache = createCache(), tokenCache = createCache(), compilerCache = createCache(), sortOrder = function(a, b) {
                if (a === b) {
                    hasDuplicate = true;
                }
                return 0;
            }, hasOwn = {}.hasOwnProperty, arr = [], pop = arr.pop, push_native = arr.push, push = arr.push, slice = arr.slice, indexOf = function(list, elem) {
                var i = 0, len = list.length;
                for (;i < len; i++) {
                    if (list[i] === elem) {
                        return i;
                    }
                }
                return -1;
            }, booleans = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", whitespace = "[\\x20\\t\\r\\n\\f]", identifier = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+", attributes = "\\[" + whitespace + "*(" + identifier + ")(?:" + whitespace + "*([*^$|!~]?=)" + whitespace + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + identifier + "))|)" + whitespace + "*\\]", pseudos = ":(" + identifier + ")(?:\\((" + "('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|" + "((?:\\\\.|[^\\\\()[\\]]|" + attributes + ")*)|" + ".*" + ")\\)|)", rwhitespace = new RegExp(whitespace + "+", "g"), rtrim = new RegExp("^" + whitespace + "+|((?:^|[^\\\\])(?:\\\\.)*)" + whitespace + "+$", "g"), rcomma = new RegExp("^" + whitespace + "*," + whitespace + "*"), rcombinators = new RegExp("^" + whitespace + "*([>+~]|" + whitespace + ")" + whitespace + "*"), rattributeQuotes = new RegExp("=" + whitespace + "*([^\\]'\"]*?)" + whitespace + "*\\]", "g"), rpseudo = new RegExp(pseudos), ridentifier = new RegExp("^" + identifier + "$"), matchExpr = {
                ID: new RegExp("^#(" + identifier + ")"),
                CLASS: new RegExp("^\\.(" + identifier + ")"),
                TAG: new RegExp("^(" + identifier + "|[*])"),
                ATTR: new RegExp("^" + attributes),
                PSEUDO: new RegExp("^" + pseudos),
                CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + whitespace + "*(even|odd|(([+-]|)(\\d*)n|)" + whitespace + "*(?:([+-]|)" + whitespace + "*(\\d+)|))" + whitespace + "*\\)|)", "i"),
                bool: new RegExp("^(?:" + booleans + ")$", "i"),
                needsContext: new RegExp("^" + whitespace + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + whitespace + "*((?:-\\d)?\\d*)" + whitespace + "*\\)|)(?=[^-]|$)", "i")
            }, rinputs = /^(?:input|select|textarea|button)$/i, rheader = /^h\d$/i, rnative = /^[^{]+\{\s*\[native \w/, rquickExpr = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, rsibling = /[+~]/, runescape = new RegExp("\\\\([\\da-f]{1,6}" + whitespace + "?|(" + whitespace + ")|.)", "ig"), funescape = function(_, escaped, escapedWhitespace) {
                var high = "0x" + escaped - 65536;
                return high !== high || escapedWhitespace ? escaped : high < 0 ? String.fromCharCode(high + 65536) : String.fromCharCode(high >> 10 | 55296, high & 1023 | 56320);
            }, rcssescape = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g, fcssescape = function(ch, asCodePoint) {
                if (asCodePoint) {
                    if (ch === "\0") {
                        return "�";
                    }
                    return ch.slice(0, -1) + "\\" + ch.charCodeAt(ch.length - 1).toString(16) + " ";
                }
                return "\\" + ch;
            }, unloadHandler = function() {
                setDocument();
            }, disabledAncestor = addCombinator(function(elem) {
                return elem.disabled === true && ("form" in elem || "label" in elem);
            }, {
                dir: "parentNode",
                next: "legend"
            });
            try {
                push.apply(arr = slice.call(preferredDoc.childNodes), preferredDoc.childNodes);
                arr[preferredDoc.childNodes.length].nodeType;
            } catch (e) {
                push = {
                    apply: arr.length ? function(target, els) {
                        push_native.apply(target, slice.call(els));
                    } : function(target, els) {
                        var j = target.length, i = 0;
                        while (target[j++] = els[i++]) {}
                        target.length = j - 1;
                    }
                };
            }
            function Sizzle(selector, context, results, seed) {
                var m, i, elem, nid, match, groups, newSelector, newContext = context && context.ownerDocument, nodeType = context ? context.nodeType : 9;
                results = results || [];
                if (typeof selector !== "string" || !selector || nodeType !== 1 && nodeType !== 9 && nodeType !== 11) {
                    return results;
                }
                if (!seed) {
                    if ((context ? context.ownerDocument || context : preferredDoc) !== document) {
                        setDocument(context);
                    }
                    context = context || document;
                    if (documentIsHTML) {
                        if (nodeType !== 11 && (match = rquickExpr.exec(selector))) {
                            if (m = match[1]) {
                                if (nodeType === 9) {
                                    if (elem = context.getElementById(m)) {
                                        if (elem.id === m) {
                                            results.push(elem);
                                            return results;
                                        }
                                    } else {
                                        return results;
                                    }
                                } else {
                                    if (newContext && (elem = newContext.getElementById(m)) && contains(context, elem) && elem.id === m) {
                                        results.push(elem);
                                        return results;
                                    }
                                }
                            } else if (match[2]) {
                                push.apply(results, context.getElementsByTagName(selector));
                                return results;
                            } else if ((m = match[3]) && support.getElementsByClassName && context.getElementsByClassName) {
                                push.apply(results, context.getElementsByClassName(m));
                                return results;
                            }
                        }
                        if (support.qsa && !compilerCache[selector + " "] && (!rbuggyQSA || !rbuggyQSA.test(selector))) {
                            if (nodeType !== 1) {
                                newContext = context;
                                newSelector = selector;
                            } else if (context.nodeName.toLowerCase() !== "object") {
                                if (nid = context.getAttribute("id")) {
                                    nid = nid.replace(rcssescape, fcssescape);
                                } else {
                                    context.setAttribute("id", nid = expando);
                                }
                                groups = tokenize(selector);
                                i = groups.length;
                                while (i--) {
                                    groups[i] = "#" + nid + " " + toSelector(groups[i]);
                                }
                                newSelector = groups.join(",");
                                newContext = rsibling.test(selector) && testContext(context.parentNode) || context;
                            }
                            if (newSelector) {
                                try {
                                    push.apply(results, newContext.querySelectorAll(newSelector));
                                    return results;
                                } catch (qsaError) {} finally {
                                    if (nid === expando) {
                                        context.removeAttribute("id");
                                    }
                                }
                            }
                        }
                    }
                }
                return select(selector.replace(rtrim, "$1"), context, results, seed);
            }
            function createCache() {
                var keys = [];
                function cache(key, value) {
                    if (keys.push(key + " ") > Expr.cacheLength) {
                        delete cache[keys.shift()];
                    }
                    return cache[key + " "] = value;
                }
                return cache;
            }
            function markFunction(fn) {
                fn[expando] = true;
                return fn;
            }
            function assert(fn) {
                var el = document.createElement("fieldset");
                try {
                    return !!fn(el);
                } catch (e) {
                    return false;
                } finally {
                    if (el.parentNode) {
                        el.parentNode.removeChild(el);
                    }
                    el = null;
                }
            }
            function addHandle(attrs, handler) {
                var arr = attrs.split("|"), i = arr.length;
                while (i--) {
                    Expr.attrHandle[arr[i]] = handler;
                }
            }
            function siblingCheck(a, b) {
                var cur = b && a, diff = cur && a.nodeType === 1 && b.nodeType === 1 && a.sourceIndex - b.sourceIndex;
                if (diff) {
                    return diff;
                }
                if (cur) {
                    while (cur = cur.nextSibling) {
                        if (cur === b) {
                            return -1;
                        }
                    }
                }
                return a ? 1 : -1;
            }
            function createInputPseudo(type) {
                return function(elem) {
                    var name = elem.nodeName.toLowerCase();
                    return name === "input" && elem.type === type;
                };
            }
            function createButtonPseudo(type) {
                return function(elem) {
                    var name = elem.nodeName.toLowerCase();
                    return (name === "input" || name === "button") && elem.type === type;
                };
            }
            function createDisabledPseudo(disabled) {
                return function(elem) {
                    if ("form" in elem) {
                        if (elem.parentNode && elem.disabled === false) {
                            if ("label" in elem) {
                                if ("label" in elem.parentNode) {
                                    return elem.parentNode.disabled === disabled;
                                } else {
                                    return elem.disabled === disabled;
                                }
                            }
                            return elem.isDisabled === disabled || elem.isDisabled !== !disabled && disabledAncestor(elem) === disabled;
                        }
                        return elem.disabled === disabled;
                    } else if ("label" in elem) {
                        return elem.disabled === disabled;
                    }
                    return false;
                };
            }
            function createPositionalPseudo(fn) {
                return markFunction(function(argument) {
                    argument = +argument;
                    return markFunction(function(seed, matches) {
                        var j, matchIndexes = fn([], seed.length, argument), i = matchIndexes.length;
                        while (i--) {
                            if (seed[j = matchIndexes[i]]) {
                                seed[j] = !(matches[j] = seed[j]);
                            }
                        }
                    });
                });
            }
            function testContext(context) {
                return context && typeof context.getElementsByTagName !== "undefined" && context;
            }
            support = Sizzle.support = {};
            isXML = Sizzle.isXML = function(elem) {
                var documentElement = elem && (elem.ownerDocument || elem).documentElement;
                return documentElement ? documentElement.nodeName !== "HTML" : false;
            };
            setDocument = Sizzle.setDocument = function(node) {
                var hasCompare, subWindow, doc = node ? node.ownerDocument || node : preferredDoc;
                if (doc === document || doc.nodeType !== 9 || !doc.documentElement) {
                    return document;
                }
                document = doc;
                docElem = document.documentElement;
                documentIsHTML = !isXML(document);
                if (preferredDoc !== document && (subWindow = document.defaultView) && subWindow.top !== subWindow) {
                    if (subWindow.addEventListener) {
                        subWindow.addEventListener("unload", unloadHandler, false);
                    } else if (subWindow.attachEvent) {
                        subWindow.attachEvent("onunload", unloadHandler);
                    }
                }
                support.attributes = assert(function(el) {
                    el.className = "i";
                    return !el.getAttribute("className");
                });
                support.getElementsByTagName = assert(function(el) {
                    el.appendChild(document.createComment(""));
                    return !el.getElementsByTagName("*").length;
                });
                support.getElementsByClassName = rnative.test(document.getElementsByClassName);
                support.getById = assert(function(el) {
                    docElem.appendChild(el).id = expando;
                    return !document.getElementsByName || !document.getElementsByName(expando).length;
                });
                if (support.getById) {
                    Expr.filter["ID"] = function(id) {
                        var attrId = id.replace(runescape, funescape);
                        return function(elem) {
                            return elem.getAttribute("id") === attrId;
                        };
                    };
                    Expr.find["ID"] = function(id, context) {
                        if (typeof context.getElementById !== "undefined" && documentIsHTML) {
                            var elem = context.getElementById(id);
                            return elem ? [ elem ] : [];
                        }
                    };
                } else {
                    Expr.filter["ID"] = function(id) {
                        var attrId = id.replace(runescape, funescape);
                        return function(elem) {
                            var node = typeof elem.getAttributeNode !== "undefined" && elem.getAttributeNode("id");
                            return node && node.value === attrId;
                        };
                    };
                    Expr.find["ID"] = function(id, context) {
                        if (typeof context.getElementById !== "undefined" && documentIsHTML) {
                            var node, i, elems, elem = context.getElementById(id);
                            if (elem) {
                                node = elem.getAttributeNode("id");
                                if (node && node.value === id) {
                                    return [ elem ];
                                }
                                elems = context.getElementsByName(id);
                                i = 0;
                                while (elem = elems[i++]) {
                                    node = elem.getAttributeNode("id");
                                    if (node && node.value === id) {
                                        return [ elem ];
                                    }
                                }
                            }
                            return [];
                        }
                    };
                }
                Expr.find["TAG"] = support.getElementsByTagName ? function(tag, context) {
                    if (typeof context.getElementsByTagName !== "undefined") {
                        return context.getElementsByTagName(tag);
                    } else if (support.qsa) {
                        return context.querySelectorAll(tag);
                    }
                } : function(tag, context) {
                    var elem, tmp = [], i = 0, results = context.getElementsByTagName(tag);
                    if (tag === "*") {
                        while (elem = results[i++]) {
                            if (elem.nodeType === 1) {
                                tmp.push(elem);
                            }
                        }
                        return tmp;
                    }
                    return results;
                };
                Expr.find["CLASS"] = support.getElementsByClassName && function(className, context) {
                    if (typeof context.getElementsByClassName !== "undefined" && documentIsHTML) {
                        return context.getElementsByClassName(className);
                    }
                };
                rbuggyMatches = [];
                rbuggyQSA = [];
                if (support.qsa = rnative.test(document.querySelectorAll)) {
                    assert(function(el) {
                        docElem.appendChild(el).innerHTML = "<a id='" + expando + "'></a>" + "<select id='" + expando + "-\r\\' msallowcapture=''>" + "<option selected=''></option></select>";
                        if (el.querySelectorAll("[msallowcapture^='']").length) {
                            rbuggyQSA.push("[*^$]=" + whitespace + "*(?:''|\"\")");
                        }
                        if (!el.querySelectorAll("[selected]").length) {
                            rbuggyQSA.push("\\[" + whitespace + "*(?:value|" + booleans + ")");
                        }
                        if (!el.querySelectorAll("[id~=" + expando + "-]").length) {
                            rbuggyQSA.push("~=");
                        }
                        if (!el.querySelectorAll(":checked").length) {
                            rbuggyQSA.push(":checked");
                        }
                        if (!el.querySelectorAll("a#" + expando + "+*").length) {
                            rbuggyQSA.push(".#.+[+~]");
                        }
                    });
                    assert(function(el) {
                        el.innerHTML = "<a href='' disabled='disabled'></a>" + "<select disabled='disabled'><option/></select>";
                        var input = document.createElement("input");
                        input.setAttribute("type", "hidden");
                        el.appendChild(input).setAttribute("name", "D");
                        if (el.querySelectorAll("[name=d]").length) {
                            rbuggyQSA.push("name" + whitespace + "*[*^$|!~]?=");
                        }
                        if (el.querySelectorAll(":enabled").length !== 2) {
                            rbuggyQSA.push(":enabled", ":disabled");
                        }
                        docElem.appendChild(el).disabled = true;
                        if (el.querySelectorAll(":disabled").length !== 2) {
                            rbuggyQSA.push(":enabled", ":disabled");
                        }
                        el.querySelectorAll("*,:x");
                        rbuggyQSA.push(",.*:");
                    });
                }
                if (support.matchesSelector = rnative.test(matches = docElem.matches || docElem.webkitMatchesSelector || docElem.mozMatchesSelector || docElem.oMatchesSelector || docElem.msMatchesSelector)) {
                    assert(function(el) {
                        support.disconnectedMatch = matches.call(el, "*");
                        matches.call(el, "[s!='']:x");
                        rbuggyMatches.push("!=", pseudos);
                    });
                }
                rbuggyQSA = rbuggyQSA.length && new RegExp(rbuggyQSA.join("|"));
                rbuggyMatches = rbuggyMatches.length && new RegExp(rbuggyMatches.join("|"));
                hasCompare = rnative.test(docElem.compareDocumentPosition);
                contains = hasCompare || rnative.test(docElem.contains) ? function(a, b) {
                    var adown = a.nodeType === 9 ? a.documentElement : a, bup = b && b.parentNode;
                    return a === bup || !!(bup && bup.nodeType === 1 && (adown.contains ? adown.contains(bup) : a.compareDocumentPosition && a.compareDocumentPosition(bup) & 16));
                } : function(a, b) {
                    if (b) {
                        while (b = b.parentNode) {
                            if (b === a) {
                                return true;
                            }
                        }
                    }
                    return false;
                };
                sortOrder = hasCompare ? function(a, b) {
                    if (a === b) {
                        hasDuplicate = true;
                        return 0;
                    }
                    var compare = !a.compareDocumentPosition - !b.compareDocumentPosition;
                    if (compare) {
                        return compare;
                    }
                    compare = (a.ownerDocument || a) === (b.ownerDocument || b) ? a.compareDocumentPosition(b) : 1;
                    if (compare & 1 || !support.sortDetached && b.compareDocumentPosition(a) === compare) {
                        if (a === document || a.ownerDocument === preferredDoc && contains(preferredDoc, a)) {
                            return -1;
                        }
                        if (b === document || b.ownerDocument === preferredDoc && contains(preferredDoc, b)) {
                            return 1;
                        }
                        return sortInput ? indexOf(sortInput, a) - indexOf(sortInput, b) : 0;
                    }
                    return compare & 4 ? -1 : 1;
                } : function(a, b) {
                    if (a === b) {
                        hasDuplicate = true;
                        return 0;
                    }
                    var cur, i = 0, aup = a.parentNode, bup = b.parentNode, ap = [ a ], bp = [ b ];
                    if (!aup || !bup) {
                        return a === document ? -1 : b === document ? 1 : aup ? -1 : bup ? 1 : sortInput ? indexOf(sortInput, a) - indexOf(sortInput, b) : 0;
                    } else if (aup === bup) {
                        return siblingCheck(a, b);
                    }
                    cur = a;
                    while (cur = cur.parentNode) {
                        ap.unshift(cur);
                    }
                    cur = b;
                    while (cur = cur.parentNode) {
                        bp.unshift(cur);
                    }
                    while (ap[i] === bp[i]) {
                        i++;
                    }
                    return i ? siblingCheck(ap[i], bp[i]) : ap[i] === preferredDoc ? -1 : bp[i] === preferredDoc ? 1 : 0;
                };
                return document;
            };
            Sizzle.matches = function(expr, elements) {
                return Sizzle(expr, null, null, elements);
            };
            Sizzle.matchesSelector = function(elem, expr) {
                if ((elem.ownerDocument || elem) !== document) {
                    setDocument(elem);
                }
                expr = expr.replace(rattributeQuotes, "='$1']");
                if (support.matchesSelector && documentIsHTML && !compilerCache[expr + " "] && (!rbuggyMatches || !rbuggyMatches.test(expr)) && (!rbuggyQSA || !rbuggyQSA.test(expr))) {
                    try {
                        var ret = matches.call(elem, expr);
                        if (ret || support.disconnectedMatch || elem.document && elem.document.nodeType !== 11) {
                            return ret;
                        }
                    } catch (e) {}
                }
                return Sizzle(expr, document, null, [ elem ]).length > 0;
            };
            Sizzle.contains = function(context, elem) {
                if ((context.ownerDocument || context) !== document) {
                    setDocument(context);
                }
                return contains(context, elem);
            };
            Sizzle.attr = function(elem, name) {
                if ((elem.ownerDocument || elem) !== document) {
                    setDocument(elem);
                }
                var fn = Expr.attrHandle[name.toLowerCase()], val = fn && hasOwn.call(Expr.attrHandle, name.toLowerCase()) ? fn(elem, name, !documentIsHTML) : undefined;
                return val !== undefined ? val : support.attributes || !documentIsHTML ? elem.getAttribute(name) : (val = elem.getAttributeNode(name)) && val.specified ? val.value : null;
            };
            Sizzle.escape = function(sel) {
                return (sel + "").replace(rcssescape, fcssescape);
            };
            Sizzle.error = function(msg) {
                throw new Error("Syntax error, unrecognized expression: " + msg);
            };
            Sizzle.uniqueSort = function(results) {
                var elem, duplicates = [], j = 0, i = 0;
                hasDuplicate = !support.detectDuplicates;
                sortInput = !support.sortStable && results.slice(0);
                results.sort(sortOrder);
                if (hasDuplicate) {
                    while (elem = results[i++]) {
                        if (elem === results[i]) {
                            j = duplicates.push(i);
                        }
                    }
                    while (j--) {
                        results.splice(duplicates[j], 1);
                    }
                }
                sortInput = null;
                return results;
            };
            getText = Sizzle.getText = function(elem) {
                var node, ret = "", i = 0, nodeType = elem.nodeType;
                if (!nodeType) {
                    while (node = elem[i++]) {
                        ret += getText(node);
                    }
                } else if (nodeType === 1 || nodeType === 9 || nodeType === 11) {
                    if (typeof elem.textContent === "string") {
                        return elem.textContent;
                    } else {
                        for (elem = elem.firstChild; elem; elem = elem.nextSibling) {
                            ret += getText(elem);
                        }
                    }
                } else if (nodeType === 3 || nodeType === 4) {
                    return elem.nodeValue;
                }
                return ret;
            };
            Expr = Sizzle.selectors = {
                cacheLength: 50,
                createPseudo: markFunction,
                match: matchExpr,
                attrHandle: {},
                find: {},
                relative: {
                    ">": {
                        dir: "parentNode",
                        first: true
                    },
                    " ": {
                        dir: "parentNode"
                    },
                    "+": {
                        dir: "previousSibling",
                        first: true
                    },
                    "~": {
                        dir: "previousSibling"
                    }
                },
                preFilter: {
                    ATTR: function(match) {
                        match[1] = match[1].replace(runescape, funescape);
                        match[3] = (match[3] || match[4] || match[5] || "").replace(runescape, funescape);
                        if (match[2] === "~=") {
                            match[3] = " " + match[3] + " ";
                        }
                        return match.slice(0, 4);
                    },
                    CHILD: function(match) {
                        match[1] = match[1].toLowerCase();
                        if (match[1].slice(0, 3) === "nth") {
                            if (!match[3]) {
                                Sizzle.error(match[0]);
                            }
                            match[4] = +(match[4] ? match[5] + (match[6] || 1) : 2 * (match[3] === "even" || match[3] === "odd"));
                            match[5] = +(match[7] + match[8] || match[3] === "odd");
                        } else if (match[3]) {
                            Sizzle.error(match[0]);
                        }
                        return match;
                    },
                    PSEUDO: function(match) {
                        var excess, unquoted = !match[6] && match[2];
                        if (matchExpr["CHILD"].test(match[0])) {
                            return null;
                        }
                        if (match[3]) {
                            match[2] = match[4] || match[5] || "";
                        } else if (unquoted && rpseudo.test(unquoted) && (excess = tokenize(unquoted, true)) && (excess = unquoted.indexOf(")", unquoted.length - excess) - unquoted.length)) {
                            match[0] = match[0].slice(0, excess);
                            match[2] = unquoted.slice(0, excess);
                        }
                        return match.slice(0, 3);
                    }
                },
                filter: {
                    TAG: function(nodeNameSelector) {
                        var nodeName = nodeNameSelector.replace(runescape, funescape).toLowerCase();
                        return nodeNameSelector === "*" ? function() {
                            return true;
                        } : function(elem) {
                            return elem.nodeName && elem.nodeName.toLowerCase() === nodeName;
                        };
                    },
                    CLASS: function(className) {
                        var pattern = classCache[className + " "];
                        return pattern || (pattern = new RegExp("(^|" + whitespace + ")" + className + "(" + whitespace + "|$)")) && classCache(className, function(elem) {
                            return pattern.test(typeof elem.className === "string" && elem.className || typeof elem.getAttribute !== "undefined" && elem.getAttribute("class") || "");
                        });
                    },
                    ATTR: function(name, operator, check) {
                        return function(elem) {
                            var result = Sizzle.attr(elem, name);
                            if (result == null) {
                                return operator === "!=";
                            }
                            if (!operator) {
                                return true;
                            }
                            result += "";
                            return operator === "=" ? result === check : operator === "!=" ? result !== check : operator === "^=" ? check && result.indexOf(check) === 0 : operator === "*=" ? check && result.indexOf(check) > -1 : operator === "$=" ? check && result.slice(-check.length) === check : operator === "~=" ? (" " + result.replace(rwhitespace, " ") + " ").indexOf(check) > -1 : operator === "|=" ? result === check || result.slice(0, check.length + 1) === check + "-" : false;
                        };
                    },
                    CHILD: function(type, what, argument, first, last) {
                        var simple = type.slice(0, 3) !== "nth", forward = type.slice(-4) !== "last", ofType = what === "of-type";
                        return first === 1 && last === 0 ? function(elem) {
                            return !!elem.parentNode;
                        } : function(elem, context, xml) {
                            var cache, uniqueCache, outerCache, node, nodeIndex, start, dir = simple !== forward ? "nextSibling" : "previousSibling", parent = elem.parentNode, name = ofType && elem.nodeName.toLowerCase(), useCache = !xml && !ofType, diff = false;
                            if (parent) {
                                if (simple) {
                                    while (dir) {
                                        node = elem;
                                        while (node = node[dir]) {
                                            if (ofType ? node.nodeName.toLowerCase() === name : node.nodeType === 1) {
                                                return false;
                                            }
                                        }
                                        start = dir = type === "only" && !start && "nextSibling";
                                    }
                                    return true;
                                }
                                start = [ forward ? parent.firstChild : parent.lastChild ];
                                if (forward && useCache) {
                                    node = parent;
                                    outerCache = node[expando] || (node[expando] = {});
                                    uniqueCache = outerCache[node.uniqueID] || (outerCache[node.uniqueID] = {});
                                    cache = uniqueCache[type] || [];
                                    nodeIndex = cache[0] === dirruns && cache[1];
                                    diff = nodeIndex && cache[2];
                                    node = nodeIndex && parent.childNodes[nodeIndex];
                                    while (node = ++nodeIndex && node && node[dir] || (diff = nodeIndex = 0) || start.pop()) {
                                        if (node.nodeType === 1 && ++diff && node === elem) {
                                            uniqueCache[type] = [ dirruns, nodeIndex, diff ];
                                            break;
                                        }
                                    }
                                } else {
                                    if (useCache) {
                                        node = elem;
                                        outerCache = node[expando] || (node[expando] = {});
                                        uniqueCache = outerCache[node.uniqueID] || (outerCache[node.uniqueID] = {});
                                        cache = uniqueCache[type] || [];
                                        nodeIndex = cache[0] === dirruns && cache[1];
                                        diff = nodeIndex;
                                    }
                                    if (diff === false) {
                                        while (node = ++nodeIndex && node && node[dir] || (diff = nodeIndex = 0) || start.pop()) {
                                            if ((ofType ? node.nodeName.toLowerCase() === name : node.nodeType === 1) && ++diff) {
                                                if (useCache) {
                                                    outerCache = node[expando] || (node[expando] = {});
                                                    uniqueCache = outerCache[node.uniqueID] || (outerCache[node.uniqueID] = {});
                                                    uniqueCache[type] = [ dirruns, diff ];
                                                }
                                                if (node === elem) {
                                                    break;
                                                }
                                            }
                                        }
                                    }
                                }
                                diff -= last;
                                return diff === first || diff % first === 0 && diff / first >= 0;
                            }
                        };
                    },
                    PSEUDO: function(pseudo, argument) {
                        var args, fn = Expr.pseudos[pseudo] || Expr.setFilters[pseudo.toLowerCase()] || Sizzle.error("unsupported pseudo: " + pseudo);
                        if (fn[expando]) {
                            return fn(argument);
                        }
                        if (fn.length > 1) {
                            args = [ pseudo, pseudo, "", argument ];
                            return Expr.setFilters.hasOwnProperty(pseudo.toLowerCase()) ? markFunction(function(seed, matches) {
                                var idx, matched = fn(seed, argument), i = matched.length;
                                while (i--) {
                                    idx = indexOf(seed, matched[i]);
                                    seed[idx] = !(matches[idx] = matched[i]);
                                }
                            }) : function(elem) {
                                return fn(elem, 0, args);
                            };
                        }
                        return fn;
                    }
                },
                pseudos: {
                    not: markFunction(function(selector) {
                        var input = [], results = [], matcher = compile(selector.replace(rtrim, "$1"));
                        return matcher[expando] ? markFunction(function(seed, matches, context, xml) {
                            var elem, unmatched = matcher(seed, null, xml, []), i = seed.length;
                            while (i--) {
                                if (elem = unmatched[i]) {
                                    seed[i] = !(matches[i] = elem);
                                }
                            }
                        }) : function(elem, context, xml) {
                            input[0] = elem;
                            matcher(input, null, xml, results);
                            input[0] = null;
                            return !results.pop();
                        };
                    }),
                    has: markFunction(function(selector) {
                        return function(elem) {
                            return Sizzle(selector, elem).length > 0;
                        };
                    }),
                    contains: markFunction(function(text) {
                        text = text.replace(runescape, funescape);
                        return function(elem) {
                            return (elem.textContent || elem.innerText || getText(elem)).indexOf(text) > -1;
                        };
                    }),
                    lang: markFunction(function(lang) {
                        if (!ridentifier.test(lang || "")) {
                            Sizzle.error("unsupported lang: " + lang);
                        }
                        lang = lang.replace(runescape, funescape).toLowerCase();
                        return function(elem) {
                            var elemLang;
                            do {
                                if (elemLang = documentIsHTML ? elem.lang : elem.getAttribute("xml:lang") || elem.getAttribute("lang")) {
                                    elemLang = elemLang.toLowerCase();
                                    return elemLang === lang || elemLang.indexOf(lang + "-") === 0;
                                }
                            } while ((elem = elem.parentNode) && elem.nodeType === 1);
                            return false;
                        };
                    }),
                    target: function(elem) {
                        var hash = window.location && window.location.hash;
                        return hash && hash.slice(1) === elem.id;
                    },
                    root: function(elem) {
                        return elem === docElem;
                    },
                    focus: function(elem) {
                        return elem === document.activeElement && (!document.hasFocus || document.hasFocus()) && !!(elem.type || elem.href || ~elem.tabIndex);
                    },
                    enabled: createDisabledPseudo(false),
                    disabled: createDisabledPseudo(true),
                    checked: function(elem) {
                        var nodeName = elem.nodeName.toLowerCase();
                        return nodeName === "input" && !!elem.checked || nodeName === "option" && !!elem.selected;
                    },
                    selected: function(elem) {
                        if (elem.parentNode) {
                            elem.parentNode.selectedIndex;
                        }
                        return elem.selected === true;
                    },
                    empty: function(elem) {
                        for (elem = elem.firstChild; elem; elem = elem.nextSibling) {
                            if (elem.nodeType < 6) {
                                return false;
                            }
                        }
                        return true;
                    },
                    parent: function(elem) {
                        return !Expr.pseudos["empty"](elem);
                    },
                    header: function(elem) {
                        return rheader.test(elem.nodeName);
                    },
                    input: function(elem) {
                        return rinputs.test(elem.nodeName);
                    },
                    button: function(elem) {
                        var name = elem.nodeName.toLowerCase();
                        return name === "input" && elem.type === "button" || name === "button";
                    },
                    text: function(elem) {
                        var attr;
                        return elem.nodeName.toLowerCase() === "input" && elem.type === "text" && ((attr = elem.getAttribute("type")) == null || attr.toLowerCase() === "text");
                    },
                    first: createPositionalPseudo(function() {
                        return [ 0 ];
                    }),
                    last: createPositionalPseudo(function(matchIndexes, length) {
                        return [ length - 1 ];
                    }),
                    eq: createPositionalPseudo(function(matchIndexes, length, argument) {
                        return [ argument < 0 ? argument + length : argument ];
                    }),
                    even: createPositionalPseudo(function(matchIndexes, length) {
                        var i = 0;
                        for (;i < length; i += 2) {
                            matchIndexes.push(i);
                        }
                        return matchIndexes;
                    }),
                    odd: createPositionalPseudo(function(matchIndexes, length) {
                        var i = 1;
                        for (;i < length; i += 2) {
                            matchIndexes.push(i);
                        }
                        return matchIndexes;
                    }),
                    lt: createPositionalPseudo(function(matchIndexes, length, argument) {
                        var i = argument < 0 ? argument + length : argument;
                        for (;--i >= 0; ) {
                            matchIndexes.push(i);
                        }
                        return matchIndexes;
                    }),
                    gt: createPositionalPseudo(function(matchIndexes, length, argument) {
                        var i = argument < 0 ? argument + length : argument;
                        for (;++i < length; ) {
                            matchIndexes.push(i);
                        }
                        return matchIndexes;
                    })
                }
            };
            Expr.pseudos["nth"] = Expr.pseudos["eq"];
            for (i in {
                radio: true,
                checkbox: true,
                file: true,
                password: true,
                image: true
            }) {
                Expr.pseudos[i] = createInputPseudo(i);
            }
            for (i in {
                submit: true,
                reset: true
            }) {
                Expr.pseudos[i] = createButtonPseudo(i);
            }
            function setFilters() {}
            setFilters.prototype = Expr.filters = Expr.pseudos;
            Expr.setFilters = new setFilters();
            tokenize = Sizzle.tokenize = function(selector, parseOnly) {
                var matched, match, tokens, type, soFar, groups, preFilters, cached = tokenCache[selector + " "];
                if (cached) {
                    return parseOnly ? 0 : cached.slice(0);
                }
                soFar = selector;
                groups = [];
                preFilters = Expr.preFilter;
                while (soFar) {
                    if (!matched || (match = rcomma.exec(soFar))) {
                        if (match) {
                            soFar = soFar.slice(match[0].length) || soFar;
                        }
                        groups.push(tokens = []);
                    }
                    matched = false;
                    if (match = rcombinators.exec(soFar)) {
                        matched = match.shift();
                        tokens.push({
                            value: matched,
                            type: match[0].replace(rtrim, " ")
                        });
                        soFar = soFar.slice(matched.length);
                    }
                    for (type in Expr.filter) {
                        if ((match = matchExpr[type].exec(soFar)) && (!preFilters[type] || (match = preFilters[type](match)))) {
                            matched = match.shift();
                            tokens.push({
                                value: matched,
                                type: type,
                                matches: match
                            });
                            soFar = soFar.slice(matched.length);
                        }
                    }
                    if (!matched) {
                        break;
                    }
                }
                return parseOnly ? soFar.length : soFar ? Sizzle.error(selector) : tokenCache(selector, groups).slice(0);
            };
            function toSelector(tokens) {
                var i = 0, len = tokens.length, selector = "";
                for (;i < len; i++) {
                    selector += tokens[i].value;
                }
                return selector;
            }
            function addCombinator(matcher, combinator, base) {
                var dir = combinator.dir, skip = combinator.next, key = skip || dir, checkNonElements = base && key === "parentNode", doneName = done++;
                return combinator.first ? function(elem, context, xml) {
                    while (elem = elem[dir]) {
                        if (elem.nodeType === 1 || checkNonElements) {
                            return matcher(elem, context, xml);
                        }
                    }
                    return false;
                } : function(elem, context, xml) {
                    var oldCache, uniqueCache, outerCache, newCache = [ dirruns, doneName ];
                    if (xml) {
                        while (elem = elem[dir]) {
                            if (elem.nodeType === 1 || checkNonElements) {
                                if (matcher(elem, context, xml)) {
                                    return true;
                                }
                            }
                        }
                    } else {
                        while (elem = elem[dir]) {
                            if (elem.nodeType === 1 || checkNonElements) {
                                outerCache = elem[expando] || (elem[expando] = {});
                                uniqueCache = outerCache[elem.uniqueID] || (outerCache[elem.uniqueID] = {});
                                if (skip && skip === elem.nodeName.toLowerCase()) {
                                    elem = elem[dir] || elem;
                                } else if ((oldCache = uniqueCache[key]) && oldCache[0] === dirruns && oldCache[1] === doneName) {
                                    return newCache[2] = oldCache[2];
                                } else {
                                    uniqueCache[key] = newCache;
                                    if (newCache[2] = matcher(elem, context, xml)) {
                                        return true;
                                    }
                                }
                            }
                        }
                    }
                    return false;
                };
            }
            function elementMatcher(matchers) {
                return matchers.length > 1 ? function(elem, context, xml) {
                    var i = matchers.length;
                    while (i--) {
                        if (!matchers[i](elem, context, xml)) {
                            return false;
                        }
                    }
                    return true;
                } : matchers[0];
            }
            function multipleContexts(selector, contexts, results) {
                var i = 0, len = contexts.length;
                for (;i < len; i++) {
                    Sizzle(selector, contexts[i], results);
                }
                return results;
            }
            function condense(unmatched, map, filter, context, xml) {
                var elem, newUnmatched = [], i = 0, len = unmatched.length, mapped = map != null;
                for (;i < len; i++) {
                    if (elem = unmatched[i]) {
                        if (!filter || filter(elem, context, xml)) {
                            newUnmatched.push(elem);
                            if (mapped) {
                                map.push(i);
                            }
                        }
                    }
                }
                return newUnmatched;
            }
            function setMatcher(preFilter, selector, matcher, postFilter, postFinder, postSelector) {
                if (postFilter && !postFilter[expando]) {
                    postFilter = setMatcher(postFilter);
                }
                if (postFinder && !postFinder[expando]) {
                    postFinder = setMatcher(postFinder, postSelector);
                }
                return markFunction(function(seed, results, context, xml) {
                    var temp, i, elem, preMap = [], postMap = [], preexisting = results.length, elems = seed || multipleContexts(selector || "*", context.nodeType ? [ context ] : context, []), matcherIn = preFilter && (seed || !selector) ? condense(elems, preMap, preFilter, context, xml) : elems, matcherOut = matcher ? postFinder || (seed ? preFilter : preexisting || postFilter) ? [] : results : matcherIn;
                    if (matcher) {
                        matcher(matcherIn, matcherOut, context, xml);
                    }
                    if (postFilter) {
                        temp = condense(matcherOut, postMap);
                        postFilter(temp, [], context, xml);
                        i = temp.length;
                        while (i--) {
                            if (elem = temp[i]) {
                                matcherOut[postMap[i]] = !(matcherIn[postMap[i]] = elem);
                            }
                        }
                    }
                    if (seed) {
                        if (postFinder || preFilter) {
                            if (postFinder) {
                                temp = [];
                                i = matcherOut.length;
                                while (i--) {
                                    if (elem = matcherOut[i]) {
                                        temp.push(matcherIn[i] = elem);
                                    }
                                }
                                postFinder(null, matcherOut = [], temp, xml);
                            }
                            i = matcherOut.length;
                            while (i--) {
                                if ((elem = matcherOut[i]) && (temp = postFinder ? indexOf(seed, elem) : preMap[i]) > -1) {
                                    seed[temp] = !(results[temp] = elem);
                                }
                            }
                        }
                    } else {
                        matcherOut = condense(matcherOut === results ? matcherOut.splice(preexisting, matcherOut.length) : matcherOut);
                        if (postFinder) {
                            postFinder(null, results, matcherOut, xml);
                        } else {
                            push.apply(results, matcherOut);
                        }
                    }
                });
            }
            function matcherFromTokens(tokens) {
                var checkContext, matcher, j, len = tokens.length, leadingRelative = Expr.relative[tokens[0].type], implicitRelative = leadingRelative || Expr.relative[" "], i = leadingRelative ? 1 : 0, matchContext = addCombinator(function(elem) {
                    return elem === checkContext;
                }, implicitRelative, true), matchAnyContext = addCombinator(function(elem) {
                    return indexOf(checkContext, elem) > -1;
                }, implicitRelative, true), matchers = [ function(elem, context, xml) {
                    var ret = !leadingRelative && (xml || context !== outermostContext) || ((checkContext = context).nodeType ? matchContext(elem, context, xml) : matchAnyContext(elem, context, xml));
                    checkContext = null;
                    return ret;
                } ];
                for (;i < len; i++) {
                    if (matcher = Expr.relative[tokens[i].type]) {
                        matchers = [ addCombinator(elementMatcher(matchers), matcher) ];
                    } else {
                        matcher = Expr.filter[tokens[i].type].apply(null, tokens[i].matches);
                        if (matcher[expando]) {
                            j = ++i;
                            for (;j < len; j++) {
                                if (Expr.relative[tokens[j].type]) {
                                    break;
                                }
                            }
                            return setMatcher(i > 1 && elementMatcher(matchers), i > 1 && toSelector(tokens.slice(0, i - 1).concat({
                                value: tokens[i - 2].type === " " ? "*" : ""
                            })).replace(rtrim, "$1"), matcher, i < j && matcherFromTokens(tokens.slice(i, j)), j < len && matcherFromTokens(tokens = tokens.slice(j)), j < len && toSelector(tokens));
                        }
                        matchers.push(matcher);
                    }
                }
                return elementMatcher(matchers);
            }
            function matcherFromGroupMatchers(elementMatchers, setMatchers) {
                var bySet = setMatchers.length > 0, byElement = elementMatchers.length > 0, superMatcher = function(seed, context, xml, results, outermost) {
                    var elem, j, matcher, matchedCount = 0, i = "0", unmatched = seed && [], setMatched = [], contextBackup = outermostContext, elems = seed || byElement && Expr.find["TAG"]("*", outermost), dirrunsUnique = dirruns += contextBackup == null ? 1 : Math.random() || .1, len = elems.length;
                    if (outermost) {
                        outermostContext = context === document || context || outermost;
                    }
                    for (;i !== len && (elem = elems[i]) != null; i++) {
                        if (byElement && elem) {
                            j = 0;
                            if (!context && elem.ownerDocument !== document) {
                                setDocument(elem);
                                xml = !documentIsHTML;
                            }
                            while (matcher = elementMatchers[j++]) {
                                if (matcher(elem, context || document, xml)) {
                                    results.push(elem);
                                    break;
                                }
                            }
                            if (outermost) {
                                dirruns = dirrunsUnique;
                            }
                        }
                        if (bySet) {
                            if (elem = !matcher && elem) {
                                matchedCount--;
                            }
                            if (seed) {
                                unmatched.push(elem);
                            }
                        }
                    }
                    matchedCount += i;
                    if (bySet && i !== matchedCount) {
                        j = 0;
                        while (matcher = setMatchers[j++]) {
                            matcher(unmatched, setMatched, context, xml);
                        }
                        if (seed) {
                            if (matchedCount > 0) {
                                while (i--) {
                                    if (!(unmatched[i] || setMatched[i])) {
                                        setMatched[i] = pop.call(results);
                                    }
                                }
                            }
                            setMatched = condense(setMatched);
                        }
                        push.apply(results, setMatched);
                        if (outermost && !seed && setMatched.length > 0 && matchedCount + setMatchers.length > 1) {
                            Sizzle.uniqueSort(results);
                        }
                    }
                    if (outermost) {
                        dirruns = dirrunsUnique;
                        outermostContext = contextBackup;
                    }
                    return unmatched;
                };
                return bySet ? markFunction(superMatcher) : superMatcher;
            }
            compile = Sizzle.compile = function(selector, match) {
                var i, setMatchers = [], elementMatchers = [], cached = compilerCache[selector + " "];
                if (!cached) {
                    if (!match) {
                        match = tokenize(selector);
                    }
                    i = match.length;
                    while (i--) {
                        cached = matcherFromTokens(match[i]);
                        if (cached[expando]) {
                            setMatchers.push(cached);
                        } else {
                            elementMatchers.push(cached);
                        }
                    }
                    cached = compilerCache(selector, matcherFromGroupMatchers(elementMatchers, setMatchers));
                    cached.selector = selector;
                }
                return cached;
            };
            select = Sizzle.select = function(selector, context, results, seed) {
                var i, tokens, token, type, find, compiled = typeof selector === "function" && selector, match = !seed && tokenize(selector = compiled.selector || selector);
                results = results || [];
                if (match.length === 1) {
                    tokens = match[0] = match[0].slice(0);
                    if (tokens.length > 2 && (token = tokens[0]).type === "ID" && context.nodeType === 9 && documentIsHTML && Expr.relative[tokens[1].type]) {
                        context = (Expr.find["ID"](token.matches[0].replace(runescape, funescape), context) || [])[0];
                        if (!context) {
                            return results;
                        } else if (compiled) {
                            context = context.parentNode;
                        }
                        selector = selector.slice(tokens.shift().value.length);
                    }
                    i = matchExpr["needsContext"].test(selector) ? 0 : tokens.length;
                    while (i--) {
                        token = tokens[i];
                        if (Expr.relative[type = token.type]) {
                            break;
                        }
                        if (find = Expr.find[type]) {
                            if (seed = find(token.matches[0].replace(runescape, funescape), rsibling.test(tokens[0].type) && testContext(context.parentNode) || context)) {
                                tokens.splice(i, 1);
                                selector = seed.length && toSelector(tokens);
                                if (!selector) {
                                    push.apply(results, seed);
                                    return results;
                                }
                                break;
                            }
                        }
                    }
                }
                (compiled || compile(selector, match))(seed, context, !documentIsHTML, results, !context || rsibling.test(selector) && testContext(context.parentNode) || context);
                return results;
            };
            support.sortStable = expando.split("").sort(sortOrder).join("") === expando;
            support.detectDuplicates = !!hasDuplicate;
            setDocument();
            support.sortDetached = assert(function(el) {
                return el.compareDocumentPosition(document.createElement("fieldset")) & 1;
            });
            if (!assert(function(el) {
                el.innerHTML = "<a href='#'></a>";
                return el.firstChild.getAttribute("href") === "#";
            })) {
                addHandle("type|href|height|width", function(elem, name, isXML) {
                    if (!isXML) {
                        return elem.getAttribute(name, name.toLowerCase() === "type" ? 1 : 2);
                    }
                });
            }
            if (!support.attributes || !assert(function(el) {
                el.innerHTML = "<input/>";
                el.firstChild.setAttribute("value", "");
                return el.firstChild.getAttribute("value") === "";
            })) {
                addHandle("value", function(elem, name, isXML) {
                    if (!isXML && elem.nodeName.toLowerCase() === "input") {
                        return elem.defaultValue;
                    }
                });
            }
            if (!assert(function(el) {
                return el.getAttribute("disabled") == null;
            })) {
                addHandle(booleans, function(elem, name, isXML) {
                    var val;
                    if (!isXML) {
                        return elem[name] === true ? name.toLowerCase() : (val = elem.getAttributeNode(name)) && val.specified ? val.value : null;
                    }
                });
            }
            return Sizzle;
        }(window);
        jQuery.find = Sizzle;
        jQuery.expr = Sizzle.selectors;
        jQuery.expr[":"] = jQuery.expr.pseudos;
        jQuery.uniqueSort = jQuery.unique = Sizzle.uniqueSort;
        jQuery.text = Sizzle.getText;
        jQuery.isXMLDoc = Sizzle.isXML;
        jQuery.contains = Sizzle.contains;
        jQuery.escapeSelector = Sizzle.escape;
        var dir = function(elem, dir, until) {
            var matched = [], truncate = until !== undefined;
            while ((elem = elem[dir]) && elem.nodeType !== 9) {
                if (elem.nodeType === 1) {
                    if (truncate && jQuery(elem).is(until)) {
                        break;
                    }
                    matched.push(elem);
                }
            }
            return matched;
        };
        var siblings = function(n, elem) {
            var matched = [];
            for (;n; n = n.nextSibling) {
                if (n.nodeType === 1 && n !== elem) {
                    matched.push(n);
                }
            }
            return matched;
        };
        var rneedsContext = jQuery.expr.match.needsContext;
        function nodeName(elem, name) {
            return elem.nodeName && elem.nodeName.toLowerCase() === name.toLowerCase();
        }
        var rsingleTag = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
        var risSimple = /^.[^:#\[\.,]*$/;
        function winnow(elements, qualifier, not) {
            if (jQuery.isFunction(qualifier)) {
                return jQuery.grep(elements, function(elem, i) {
                    return !!qualifier.call(elem, i, elem) !== not;
                });
            }
            if (qualifier.nodeType) {
                return jQuery.grep(elements, function(elem) {
                    return elem === qualifier !== not;
                });
            }
            if (typeof qualifier !== "string") {
                return jQuery.grep(elements, function(elem) {
                    return indexOf.call(qualifier, elem) > -1 !== not;
                });
            }
            if (risSimple.test(qualifier)) {
                return jQuery.filter(qualifier, elements, not);
            }
            qualifier = jQuery.filter(qualifier, elements);
            return jQuery.grep(elements, function(elem) {
                return indexOf.call(qualifier, elem) > -1 !== not && elem.nodeType === 1;
            });
        }
        jQuery.filter = function(expr, elems, not) {
            var elem = elems[0];
            if (not) {
                expr = ":not(" + expr + ")";
            }
            if (elems.length === 1 && elem.nodeType === 1) {
                return jQuery.find.matchesSelector(elem, expr) ? [ elem ] : [];
            }
            return jQuery.find.matches(expr, jQuery.grep(elems, function(elem) {
                return elem.nodeType === 1;
            }));
        };
        jQuery.fn.extend({
            find: function(selector) {
                var i, ret, len = this.length, self = this;
                if (typeof selector !== "string") {
                    return this.pushStack(jQuery(selector).filter(function() {
                        for (i = 0; i < len; i++) {
                            if (jQuery.contains(self[i], this)) {
                                return true;
                            }
                        }
                    }));
                }
                ret = this.pushStack([]);
                for (i = 0; i < len; i++) {
                    jQuery.find(selector, self[i], ret);
                }
                return len > 1 ? jQuery.uniqueSort(ret) : ret;
            },
            filter: function(selector) {
                return this.pushStack(winnow(this, selector || [], false));
            },
            not: function(selector) {
                return this.pushStack(winnow(this, selector || [], true));
            },
            is: function(selector) {
                return !!winnow(this, typeof selector === "string" && rneedsContext.test(selector) ? jQuery(selector) : selector || [], false).length;
            }
        });
        var rootjQuery, rquickExpr = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/, init = jQuery.fn.init = function(selector, context, root) {
            var match, elem;
            if (!selector) {
                return this;
            }
            root = root || rootjQuery;
            if (typeof selector === "string") {
                if (selector[0] === "<" && selector[selector.length - 1] === ">" && selector.length >= 3) {
                    match = [ null, selector, null ];
                } else {
                    match = rquickExpr.exec(selector);
                }
                if (match && (match[1] || !context)) {
                    if (match[1]) {
                        context = context instanceof jQuery ? context[0] : context;
                        jQuery.merge(this, jQuery.parseHTML(match[1], context && context.nodeType ? context.ownerDocument || context : document, true));
                        if (rsingleTag.test(match[1]) && jQuery.isPlainObject(context)) {
                            for (match in context) {
                                if (jQuery.isFunction(this[match])) {
                                    this[match](context[match]);
                                } else {
                                    this.attr(match, context[match]);
                                }
                            }
                        }
                        return this;
                    } else {
                        elem = document.getElementById(match[2]);
                        if (elem) {
                            this[0] = elem;
                            this.length = 1;
                        }
                        return this;
                    }
                } else if (!context || context.jquery) {
                    return (context || root).find(selector);
                } else {
                    return this.constructor(context).find(selector);
                }
            } else if (selector.nodeType) {
                this[0] = selector;
                this.length = 1;
                return this;
            } else if (jQuery.isFunction(selector)) {
                return root.ready !== undefined ? root.ready(selector) : selector(jQuery);
            }
            return jQuery.makeArray(selector, this);
        };
        init.prototype = jQuery.fn;
        rootjQuery = jQuery(document);
        var rparentsprev = /^(?:parents|prev(?:Until|All))/, guaranteedUnique = {
            children: true,
            contents: true,
            next: true,
            prev: true
        };
        jQuery.fn.extend({
            has: function(target) {
                var targets = jQuery(target, this), l = targets.length;
                return this.filter(function() {
                    var i = 0;
                    for (;i < l; i++) {
                        if (jQuery.contains(this, targets[i])) {
                            return true;
                        }
                    }
                });
            },
            closest: function(selectors, context) {
                var cur, i = 0, l = this.length, matched = [], targets = typeof selectors !== "string" && jQuery(selectors);
                if (!rneedsContext.test(selectors)) {
                    for (;i < l; i++) {
                        for (cur = this[i]; cur && cur !== context; cur = cur.parentNode) {
                            if (cur.nodeType < 11 && (targets ? targets.index(cur) > -1 : cur.nodeType === 1 && jQuery.find.matchesSelector(cur, selectors))) {
                                matched.push(cur);
                                break;
                            }
                        }
                    }
                }
                return this.pushStack(matched.length > 1 ? jQuery.uniqueSort(matched) : matched);
            },
            index: function(elem) {
                if (!elem) {
                    return this[0] && this[0].parentNode ? this.first().prevAll().length : -1;
                }
                if (typeof elem === "string") {
                    return indexOf.call(jQuery(elem), this[0]);
                }
                return indexOf.call(this, elem.jquery ? elem[0] : elem);
            },
            add: function(selector, context) {
                return this.pushStack(jQuery.uniqueSort(jQuery.merge(this.get(), jQuery(selector, context))));
            },
            addBack: function(selector) {
                return this.add(selector == null ? this.prevObject : this.prevObject.filter(selector));
            }
        });
        function sibling(cur, dir) {
            while ((cur = cur[dir]) && cur.nodeType !== 1) {}
            return cur;
        }
        jQuery.each({
            parent: function(elem) {
                var parent = elem.parentNode;
                return parent && parent.nodeType !== 11 ? parent : null;
            },
            parents: function(elem) {
                return dir(elem, "parentNode");
            },
            parentsUntil: function(elem, i, until) {
                return dir(elem, "parentNode", until);
            },
            next: function(elem) {
                return sibling(elem, "nextSibling");
            },
            prev: function(elem) {
                return sibling(elem, "previousSibling");
            },
            nextAll: function(elem) {
                return dir(elem, "nextSibling");
            },
            prevAll: function(elem) {
                return dir(elem, "previousSibling");
            },
            nextUntil: function(elem, i, until) {
                return dir(elem, "nextSibling", until);
            },
            prevUntil: function(elem, i, until) {
                return dir(elem, "previousSibling", until);
            },
            siblings: function(elem) {
                return siblings((elem.parentNode || {}).firstChild, elem);
            },
            children: function(elem) {
                return siblings(elem.firstChild);
            },
            contents: function(elem) {
                if (nodeName(elem, "iframe")) {
                    return elem.contentDocument;
                }
                if (nodeName(elem, "template")) {
                    elem = elem.content || elem;
                }
                return jQuery.merge([], elem.childNodes);
            }
        }, function(name, fn) {
            jQuery.fn[name] = function(until, selector) {
                var matched = jQuery.map(this, fn, until);
                if (name.slice(-5) !== "Until") {
                    selector = until;
                }
                if (selector && typeof selector === "string") {
                    matched = jQuery.filter(selector, matched);
                }
                if (this.length > 1) {
                    if (!guaranteedUnique[name]) {
                        jQuery.uniqueSort(matched);
                    }
                    if (rparentsprev.test(name)) {
                        matched.reverse();
                    }
                }
                return this.pushStack(matched);
            };
        });
        var rnothtmlwhite = /[^\x20\t\r\n\f]+/g;
        function createOptions(options) {
            var object = {};
            jQuery.each(options.match(rnothtmlwhite) || [], function(_, flag) {
                object[flag] = true;
            });
            return object;
        }
        jQuery.Callbacks = function(options) {
            options = typeof options === "string" ? createOptions(options) : jQuery.extend({}, options);
            var firing, memory, fired, locked, list = [], queue = [], firingIndex = -1, fire = function() {
                locked = locked || options.once;
                fired = firing = true;
                for (;queue.length; firingIndex = -1) {
                    memory = queue.shift();
                    while (++firingIndex < list.length) {
                        if (list[firingIndex].apply(memory[0], memory[1]) === false && options.stopOnFalse) {
                            firingIndex = list.length;
                            memory = false;
                        }
                    }
                }
                if (!options.memory) {
                    memory = false;
                }
                firing = false;
                if (locked) {
                    if (memory) {
                        list = [];
                    } else {
                        list = "";
                    }
                }
            }, self = {
                add: function() {
                    if (list) {
                        if (memory && !firing) {
                            firingIndex = list.length - 1;
                            queue.push(memory);
                        }
                        (function add(args) {
                            jQuery.each(args, function(_, arg) {
                                if (jQuery.isFunction(arg)) {
                                    if (!options.unique || !self.has(arg)) {
                                        list.push(arg);
                                    }
                                } else if (arg && arg.length && jQuery.type(arg) !== "string") {
                                    add(arg);
                                }
                            });
                        })(arguments);
                        if (memory && !firing) {
                            fire();
                        }
                    }
                    return this;
                },
                remove: function() {
                    jQuery.each(arguments, function(_, arg) {
                        var index;
                        while ((index = jQuery.inArray(arg, list, index)) > -1) {
                            list.splice(index, 1);
                            if (index <= firingIndex) {
                                firingIndex--;
                            }
                        }
                    });
                    return this;
                },
                has: function(fn) {
                    return fn ? jQuery.inArray(fn, list) > -1 : list.length > 0;
                },
                empty: function() {
                    if (list) {
                        list = [];
                    }
                    return this;
                },
                disable: function() {
                    locked = queue = [];
                    list = memory = "";
                    return this;
                },
                disabled: function() {
                    return !list;
                },
                lock: function() {
                    locked = queue = [];
                    if (!memory && !firing) {
                        list = memory = "";
                    }
                    return this;
                },
                locked: function() {
                    return !!locked;
                },
                fireWith: function(context, args) {
                    if (!locked) {
                        args = args || [];
                        args = [ context, args.slice ? args.slice() : args ];
                        queue.push(args);
                        if (!firing) {
                            fire();
                        }
                    }
                    return this;
                },
                fire: function() {
                    self.fireWith(this, arguments);
                    return this;
                },
                fired: function() {
                    return !!fired;
                }
            };
            return self;
        };
        function Identity(v) {
            return v;
        }
        function Thrower(ex) {
            throw ex;
        }
        function adoptValue(value, resolve, reject, noValue) {
            var method;
            try {
                if (value && jQuery.isFunction(method = value.promise)) {
                    method.call(value).done(resolve).fail(reject);
                } else if (value && jQuery.isFunction(method = value.then)) {
                    method.call(value, resolve, reject);
                } else {
                    resolve.apply(undefined, [ value ].slice(noValue));
                }
            } catch (value) {
                reject.apply(undefined, [ value ]);
            }
        }
        jQuery.extend({
            Deferred: function(func) {
                var tuples = [ [ "notify", "progress", jQuery.Callbacks("memory"), jQuery.Callbacks("memory"), 2 ], [ "resolve", "done", jQuery.Callbacks("once memory"), jQuery.Callbacks("once memory"), 0, "resolved" ], [ "reject", "fail", jQuery.Callbacks("once memory"), jQuery.Callbacks("once memory"), 1, "rejected" ] ], state = "pending", promise = {
                    state: function() {
                        return state;
                    },
                    always: function() {
                        deferred.done(arguments).fail(arguments);
                        return this;
                    },
                    catch: function(fn) {
                        return promise.then(null, fn);
                    },
                    pipe: function() {
                        var fns = arguments;
                        return jQuery.Deferred(function(newDefer) {
                            jQuery.each(tuples, function(i, tuple) {
                                var fn = jQuery.isFunction(fns[tuple[4]]) && fns[tuple[4]];
                                deferred[tuple[1]](function() {
                                    var returned = fn && fn.apply(this, arguments);
                                    if (returned && jQuery.isFunction(returned.promise)) {
                                        returned.promise().progress(newDefer.notify).done(newDefer.resolve).fail(newDefer.reject);
                                    } else {
                                        newDefer[tuple[0] + "With"](this, fn ? [ returned ] : arguments);
                                    }
                                });
                            });
                            fns = null;
                        }).promise();
                    },
                    then: function(onFulfilled, onRejected, onProgress) {
                        var maxDepth = 0;
                        function resolve(depth, deferred, handler, special) {
                            return function() {
                                var that = this, args = arguments, mightThrow = function() {
                                    var returned, then;
                                    if (depth < maxDepth) {
                                        return;
                                    }
                                    returned = handler.apply(that, args);
                                    if (returned === deferred.promise()) {
                                        throw new TypeError("Thenable self-resolution");
                                    }
                                    then = returned && (typeof returned === "object" || typeof returned === "function") && returned.then;
                                    if (jQuery.isFunction(then)) {
                                        if (special) {
                                            then.call(returned, resolve(maxDepth, deferred, Identity, special), resolve(maxDepth, deferred, Thrower, special));
                                        } else {
                                            maxDepth++;
                                            then.call(returned, resolve(maxDepth, deferred, Identity, special), resolve(maxDepth, deferred, Thrower, special), resolve(maxDepth, deferred, Identity, deferred.notifyWith));
                                        }
                                    } else {
                                        if (handler !== Identity) {
                                            that = undefined;
                                            args = [ returned ];
                                        }
                                        (special || deferred.resolveWith)(that, args);
                                    }
                                }, process = special ? mightThrow : function() {
                                    try {
                                        mightThrow();
                                    } catch (e) {
                                        if (jQuery.Deferred.exceptionHook) {
                                            jQuery.Deferred.exceptionHook(e, process.stackTrace);
                                        }
                                        if (depth + 1 >= maxDepth) {
                                            if (handler !== Thrower) {
                                                that = undefined;
                                                args = [ e ];
                                            }
                                            deferred.rejectWith(that, args);
                                        }
                                    }
                                };
                                if (depth) {
                                    process();
                                } else {
                                    if (jQuery.Deferred.getStackHook) {
                                        process.stackTrace = jQuery.Deferred.getStackHook();
                                    }
                                    window.setTimeout(process);
                                }
                            };
                        }
                        return jQuery.Deferred(function(newDefer) {
                            tuples[0][3].add(resolve(0, newDefer, jQuery.isFunction(onProgress) ? onProgress : Identity, newDefer.notifyWith));
                            tuples[1][3].add(resolve(0, newDefer, jQuery.isFunction(onFulfilled) ? onFulfilled : Identity));
                            tuples[2][3].add(resolve(0, newDefer, jQuery.isFunction(onRejected) ? onRejected : Thrower));
                        }).promise();
                    },
                    promise: function(obj) {
                        return obj != null ? jQuery.extend(obj, promise) : promise;
                    }
                }, deferred = {};
                jQuery.each(tuples, function(i, tuple) {
                    var list = tuple[2], stateString = tuple[5];
                    promise[tuple[1]] = list.add;
                    if (stateString) {
                        list.add(function() {
                            state = stateString;
                        }, tuples[3 - i][2].disable, tuples[0][2].lock);
                    }
                    list.add(tuple[3].fire);
                    deferred[tuple[0]] = function() {
                        deferred[tuple[0] + "With"](this === deferred ? undefined : this, arguments);
                        return this;
                    };
                    deferred[tuple[0] + "With"] = list.fireWith;
                });
                promise.promise(deferred);
                if (func) {
                    func.call(deferred, deferred);
                }
                return deferred;
            },
            when: function(singleValue) {
                var remaining = arguments.length, i = remaining, resolveContexts = Array(i), resolveValues = slice.call(arguments), master = jQuery.Deferred(), updateFunc = function(i) {
                    return function(value) {
                        resolveContexts[i] = this;
                        resolveValues[i] = arguments.length > 1 ? slice.call(arguments) : value;
                        if (!--remaining) {
                            master.resolveWith(resolveContexts, resolveValues);
                        }
                    };
                };
                if (remaining <= 1) {
                    adoptValue(singleValue, master.done(updateFunc(i)).resolve, master.reject, !remaining);
                    if (master.state() === "pending" || jQuery.isFunction(resolveValues[i] && resolveValues[i].then)) {
                        return master.then();
                    }
                }
                while (i--) {
                    adoptValue(resolveValues[i], updateFunc(i), master.reject);
                }
                return master.promise();
            }
        });
        var rerrorNames = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
        jQuery.Deferred.exceptionHook = function(error, stack) {
            if (window.console && window.console.warn && error && rerrorNames.test(error.name)) {
                window.console.warn("jQuery.Deferred exception: " + error.message, error.stack, stack);
            }
        };
        jQuery.readyException = function(error) {
            window.setTimeout(function() {
                throw error;
            });
        };
        var readyList = jQuery.Deferred();
        jQuery.fn.ready = function(fn) {
            readyList.then(fn).catch(function(error) {
                jQuery.readyException(error);
            });
            return this;
        };
        jQuery.extend({
            isReady: false,
            readyWait: 1,
            ready: function(wait) {
                if (wait === true ? --jQuery.readyWait : jQuery.isReady) {
                    return;
                }
                jQuery.isReady = true;
                if (wait !== true && --jQuery.readyWait > 0) {
                    return;
                }
                readyList.resolveWith(document, [ jQuery ]);
            }
        });
        jQuery.ready.then = readyList.then;
        function completed() {
            document.removeEventListener("DOMContentLoaded", completed);
            window.removeEventListener("load", completed);
            jQuery.ready();
        }
        if (document.readyState === "complete" || document.readyState !== "loading" && !document.documentElement.doScroll) {
            window.setTimeout(jQuery.ready);
        } else {
            document.addEventListener("DOMContentLoaded", completed);
            window.addEventListener("load", completed);
        }
        var access = function(elems, fn, key, value, chainable, emptyGet, raw) {
            var i = 0, len = elems.length, bulk = key == null;
            if (jQuery.type(key) === "object") {
                chainable = true;
                for (i in key) {
                    access(elems, fn, i, key[i], true, emptyGet, raw);
                }
            } else if (value !== undefined) {
                chainable = true;
                if (!jQuery.isFunction(value)) {
                    raw = true;
                }
                if (bulk) {
                    if (raw) {
                        fn.call(elems, value);
                        fn = null;
                    } else {
                        bulk = fn;
                        fn = function(elem, key, value) {
                            return bulk.call(jQuery(elem), value);
                        };
                    }
                }
                if (fn) {
                    for (;i < len; i++) {
                        fn(elems[i], key, raw ? value : value.call(elems[i], i, fn(elems[i], key)));
                    }
                }
            }
            if (chainable) {
                return elems;
            }
            if (bulk) {
                return fn.call(elems);
            }
            return len ? fn(elems[0], key) : emptyGet;
        };
        var acceptData = function(owner) {
            return owner.nodeType === 1 || owner.nodeType === 9 || !+owner.nodeType;
        };
        function Data() {
            this.expando = jQuery.expando + Data.uid++;
        }
        Data.uid = 1;
        Data.prototype = {
            cache: function(owner) {
                var value = owner[this.expando];
                if (!value) {
                    value = {};
                    if (acceptData(owner)) {
                        if (owner.nodeType) {
                            owner[this.expando] = value;
                        } else {
                            Object.defineProperty(owner, this.expando, {
                                value: value,
                                configurable: true
                            });
                        }
                    }
                }
                return value;
            },
            set: function(owner, data, value) {
                var prop, cache = this.cache(owner);
                if (typeof data === "string") {
                    cache[jQuery.camelCase(data)] = value;
                } else {
                    for (prop in data) {
                        cache[jQuery.camelCase(prop)] = data[prop];
                    }
                }
                return cache;
            },
            get: function(owner, key) {
                return key === undefined ? this.cache(owner) : owner[this.expando] && owner[this.expando][jQuery.camelCase(key)];
            },
            access: function(owner, key, value) {
                if (key === undefined || key && typeof key === "string" && value === undefined) {
                    return this.get(owner, key);
                }
                this.set(owner, key, value);
                return value !== undefined ? value : key;
            },
            remove: function(owner, key) {
                var i, cache = owner[this.expando];
                if (cache === undefined) {
                    return;
                }
                if (key !== undefined) {
                    if (Array.isArray(key)) {
                        key = key.map(jQuery.camelCase);
                    } else {
                        key = jQuery.camelCase(key);
                        key = key in cache ? [ key ] : key.match(rnothtmlwhite) || [];
                    }
                    i = key.length;
                    while (i--) {
                        delete cache[key[i]];
                    }
                }
                if (key === undefined || jQuery.isEmptyObject(cache)) {
                    if (owner.nodeType) {
                        owner[this.expando] = undefined;
                    } else {
                        delete owner[this.expando];
                    }
                }
            },
            hasData: function(owner) {
                var cache = owner[this.expando];
                return cache !== undefined && !jQuery.isEmptyObject(cache);
            }
        };
        var dataPriv = new Data();
        var dataUser = new Data();
        var rbrace = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/, rmultiDash = /[A-Z]/g;
        function getData(data) {
            if (data === "true") {
                return true;
            }
            if (data === "false") {
                return false;
            }
            if (data === "null") {
                return null;
            }
            if (data === +data + "") {
                return +data;
            }
            if (rbrace.test(data)) {
                return JSON.parse(data);
            }
            return data;
        }
        function dataAttr(elem, key, data) {
            var name;
            if (data === undefined && elem.nodeType === 1) {
                name = "data-" + key.replace(rmultiDash, "-$&").toLowerCase();
                data = elem.getAttribute(name);
                if (typeof data === "string") {
                    try {
                        data = getData(data);
                    } catch (e) {}
                    dataUser.set(elem, key, data);
                } else {
                    data = undefined;
                }
            }
            return data;
        }
        jQuery.extend({
            hasData: function(elem) {
                return dataUser.hasData(elem) || dataPriv.hasData(elem);
            },
            data: function(elem, name, data) {
                return dataUser.access(elem, name, data);
            },
            removeData: function(elem, name) {
                dataUser.remove(elem, name);
            },
            _data: function(elem, name, data) {
                return dataPriv.access(elem, name, data);
            },
            _removeData: function(elem, name) {
                dataPriv.remove(elem, name);
            }
        });
        jQuery.fn.extend({
            data: function(key, value) {
                var i, name, data, elem = this[0], attrs = elem && elem.attributes;
                if (key === undefined) {
                    if (this.length) {
                        data = dataUser.get(elem);
                        if (elem.nodeType === 1 && !dataPriv.get(elem, "hasDataAttrs")) {
                            i = attrs.length;
                            while (i--) {
                                if (attrs[i]) {
                                    name = attrs[i].name;
                                    if (name.indexOf("data-") === 0) {
                                        name = jQuery.camelCase(name.slice(5));
                                        dataAttr(elem, name, data[name]);
                                    }
                                }
                            }
                            dataPriv.set(elem, "hasDataAttrs", true);
                        }
                    }
                    return data;
                }
                if (typeof key === "object") {
                    return this.each(function() {
                        dataUser.set(this, key);
                    });
                }
                return access(this, function(value) {
                    var data;
                    if (elem && value === undefined) {
                        data = dataUser.get(elem, key);
                        if (data !== undefined) {
                            return data;
                        }
                        data = dataAttr(elem, key);
                        if (data !== undefined) {
                            return data;
                        }
                        return;
                    }
                    this.each(function() {
                        dataUser.set(this, key, value);
                    });
                }, null, value, arguments.length > 1, null, true);
            },
            removeData: function(key) {
                return this.each(function() {
                    dataUser.remove(this, key);
                });
            }
        });
        jQuery.extend({
            queue: function(elem, type, data) {
                var queue;
                if (elem) {
                    type = (type || "fx") + "queue";
                    queue = dataPriv.get(elem, type);
                    if (data) {
                        if (!queue || Array.isArray(data)) {
                            queue = dataPriv.access(elem, type, jQuery.makeArray(data));
                        } else {
                            queue.push(data);
                        }
                    }
                    return queue || [];
                }
            },
            dequeue: function(elem, type) {
                type = type || "fx";
                var queue = jQuery.queue(elem, type), startLength = queue.length, fn = queue.shift(), hooks = jQuery._queueHooks(elem, type), next = function() {
                    jQuery.dequeue(elem, type);
                };
                if (fn === "inprogress") {
                    fn = queue.shift();
                    startLength--;
                }
                if (fn) {
                    if (type === "fx") {
                        queue.unshift("inprogress");
                    }
                    delete hooks.stop;
                    fn.call(elem, next, hooks);
                }
                if (!startLength && hooks) {
                    hooks.empty.fire();
                }
            },
            _queueHooks: function(elem, type) {
                var key = type + "queueHooks";
                return dataPriv.get(elem, key) || dataPriv.access(elem, key, {
                    empty: jQuery.Callbacks("once memory").add(function() {
                        dataPriv.remove(elem, [ type + "queue", key ]);
                    })
                });
            }
        });
        jQuery.fn.extend({
            queue: function(type, data) {
                var setter = 2;
                if (typeof type !== "string") {
                    data = type;
                    type = "fx";
                    setter--;
                }
                if (arguments.length < setter) {
                    return jQuery.queue(this[0], type);
                }
                return data === undefined ? this : this.each(function() {
                    var queue = jQuery.queue(this, type, data);
                    jQuery._queueHooks(this, type);
                    if (type === "fx" && queue[0] !== "inprogress") {
                        jQuery.dequeue(this, type);
                    }
                });
            },
            dequeue: function(type) {
                return this.each(function() {
                    jQuery.dequeue(this, type);
                });
            },
            clearQueue: function(type) {
                return this.queue(type || "fx", []);
            },
            promise: function(type, obj) {
                var tmp, count = 1, defer = jQuery.Deferred(), elements = this, i = this.length, resolve = function() {
                    if (!--count) {
                        defer.resolveWith(elements, [ elements ]);
                    }
                };
                if (typeof type !== "string") {
                    obj = type;
                    type = undefined;
                }
                type = type || "fx";
                while (i--) {
                    tmp = dataPriv.get(elements[i], type + "queueHooks");
                    if (tmp && tmp.empty) {
                        count++;
                        tmp.empty.add(resolve);
                    }
                }
                resolve();
                return defer.promise(obj);
            }
        });
        var pnum = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source;
        var rcssNum = new RegExp("^(?:([+-])=|)(" + pnum + ")([a-z%]*)$", "i");
        var cssExpand = [ "Top", "Right", "Bottom", "Left" ];
        var isHiddenWithinTree = function(elem, el) {
            elem = el || elem;
            return elem.style.display === "none" || elem.style.display === "" && jQuery.contains(elem.ownerDocument, elem) && jQuery.css(elem, "display") === "none";
        };
        var swap = function(elem, options, callback, args) {
            var ret, name, old = {};
            for (name in options) {
                old[name] = elem.style[name];
                elem.style[name] = options[name];
            }
            ret = callback.apply(elem, args || []);
            for (name in options) {
                elem.style[name] = old[name];
            }
            return ret;
        };
        function adjustCSS(elem, prop, valueParts, tween) {
            var adjusted, scale = 1, maxIterations = 20, currentValue = tween ? function() {
                return tween.cur();
            } : function() {
                return jQuery.css(elem, prop, "");
            }, initial = currentValue(), unit = valueParts && valueParts[3] || (jQuery.cssNumber[prop] ? "" : "px"), initialInUnit = (jQuery.cssNumber[prop] || unit !== "px" && +initial) && rcssNum.exec(jQuery.css(elem, prop));
            if (initialInUnit && initialInUnit[3] !== unit) {
                unit = unit || initialInUnit[3];
                valueParts = valueParts || [];
                initialInUnit = +initial || 1;
                do {
                    scale = scale || ".5";
                    initialInUnit = initialInUnit / scale;
                    jQuery.style(elem, prop, initialInUnit + unit);
                } while (scale !== (scale = currentValue() / initial) && scale !== 1 && --maxIterations);
            }
            if (valueParts) {
                initialInUnit = +initialInUnit || +initial || 0;
                adjusted = valueParts[1] ? initialInUnit + (valueParts[1] + 1) * valueParts[2] : +valueParts[2];
                if (tween) {
                    tween.unit = unit;
                    tween.start = initialInUnit;
                    tween.end = adjusted;
                }
            }
            return adjusted;
        }
        var defaultDisplayMap = {};
        function getDefaultDisplay(elem) {
            var temp, doc = elem.ownerDocument, nodeName = elem.nodeName, display = defaultDisplayMap[nodeName];
            if (display) {
                return display;
            }
            temp = doc.body.appendChild(doc.createElement(nodeName));
            display = jQuery.css(temp, "display");
            temp.parentNode.removeChild(temp);
            if (display === "none") {
                display = "block";
            }
            defaultDisplayMap[nodeName] = display;
            return display;
        }
        function showHide(elements, show) {
            var display, elem, values = [], index = 0, length = elements.length;
            for (;index < length; index++) {
                elem = elements[index];
                if (!elem.style) {
                    continue;
                }
                display = elem.style.display;
                if (show) {
                    if (display === "none") {
                        values[index] = dataPriv.get(elem, "display") || null;
                        if (!values[index]) {
                            elem.style.display = "";
                        }
                    }
                    if (elem.style.display === "" && isHiddenWithinTree(elem)) {
                        values[index] = getDefaultDisplay(elem);
                    }
                } else {
                    if (display !== "none") {
                        values[index] = "none";
                        dataPriv.set(elem, "display", display);
                    }
                }
            }
            for (index = 0; index < length; index++) {
                if (values[index] != null) {
                    elements[index].style.display = values[index];
                }
            }
            return elements;
        }
        jQuery.fn.extend({
            show: function() {
                return showHide(this, true);
            },
            hide: function() {
                return showHide(this);
            },
            toggle: function(state) {
                if (typeof state === "boolean") {
                    return state ? this.show() : this.hide();
                }
                return this.each(function() {
                    if (isHiddenWithinTree(this)) {
                        jQuery(this).show();
                    } else {
                        jQuery(this).hide();
                    }
                });
            }
        });
        var rcheckableType = /^(?:checkbox|radio)$/i;
        var rtagName = /<([a-z][^\/\0>\x20\t\r\n\f]+)/i;
        var rscriptType = /^$|\/(?:java|ecma)script/i;
        var wrapMap = {
            option: [ 1, "<select multiple='multiple'>", "</select>" ],
            thead: [ 1, "<table>", "</table>" ],
            col: [ 2, "<table><colgroup>", "</colgroup></table>" ],
            tr: [ 2, "<table><tbody>", "</tbody></table>" ],
            td: [ 3, "<table><tbody><tr>", "</tr></tbody></table>" ],
            _default: [ 0, "", "" ]
        };
        wrapMap.optgroup = wrapMap.option;
        wrapMap.tbody = wrapMap.tfoot = wrapMap.colgroup = wrapMap.caption = wrapMap.thead;
        wrapMap.th = wrapMap.td;
        function getAll(context, tag) {
            var ret;
            if (typeof context.getElementsByTagName !== "undefined") {
                ret = context.getElementsByTagName(tag || "*");
            } else if (typeof context.querySelectorAll !== "undefined") {
                ret = context.querySelectorAll(tag || "*");
            } else {
                ret = [];
            }
            if (tag === undefined || tag && nodeName(context, tag)) {
                return jQuery.merge([ context ], ret);
            }
            return ret;
        }
        function setGlobalEval(elems, refElements) {
            var i = 0, l = elems.length;
            for (;i < l; i++) {
                dataPriv.set(elems[i], "globalEval", !refElements || dataPriv.get(refElements[i], "globalEval"));
            }
        }
        var rhtml = /<|&#?\w+;/;
        function buildFragment(elems, context, scripts, selection, ignored) {
            var elem, tmp, tag, wrap, contains, j, fragment = context.createDocumentFragment(), nodes = [], i = 0, l = elems.length;
            for (;i < l; i++) {
                elem = elems[i];
                if (elem || elem === 0) {
                    if (jQuery.type(elem) === "object") {
                        jQuery.merge(nodes, elem.nodeType ? [ elem ] : elem);
                    } else if (!rhtml.test(elem)) {
                        nodes.push(context.createTextNode(elem));
                    } else {
                        tmp = tmp || fragment.appendChild(context.createElement("div"));
                        tag = (rtagName.exec(elem) || [ "", "" ])[1].toLowerCase();
                        wrap = wrapMap[tag] || wrapMap._default;
                        tmp.innerHTML = wrap[1] + jQuery.htmlPrefilter(elem) + wrap[2];
                        j = wrap[0];
                        while (j--) {
                            tmp = tmp.lastChild;
                        }
                        jQuery.merge(nodes, tmp.childNodes);
                        tmp = fragment.firstChild;
                        tmp.textContent = "";
                    }
                }
            }
            fragment.textContent = "";
            i = 0;
            while (elem = nodes[i++]) {
                if (selection && jQuery.inArray(elem, selection) > -1) {
                    if (ignored) {
                        ignored.push(elem);
                    }
                    continue;
                }
                contains = jQuery.contains(elem.ownerDocument, elem);
                tmp = getAll(fragment.appendChild(elem), "script");
                if (contains) {
                    setGlobalEval(tmp);
                }
                if (scripts) {
                    j = 0;
                    while (elem = tmp[j++]) {
                        if (rscriptType.test(elem.type || "")) {
                            scripts.push(elem);
                        }
                    }
                }
            }
            return fragment;
        }
        (function() {
            var fragment = document.createDocumentFragment(), div = fragment.appendChild(document.createElement("div")), input = document.createElement("input");
            input.setAttribute("type", "radio");
            input.setAttribute("checked", "checked");
            input.setAttribute("name", "t");
            div.appendChild(input);
            support.checkClone = div.cloneNode(true).cloneNode(true).lastChild.checked;
            div.innerHTML = "<textarea>x</textarea>";
            support.noCloneChecked = !!div.cloneNode(true).lastChild.defaultValue;
        })();
        var documentElement = document.documentElement;
        var rkeyEvent = /^key/, rmouseEvent = /^(?:mouse|pointer|contextmenu|drag|drop)|click/, rtypenamespace = /^([^.]*)(?:\.(.+)|)/;
        function returnTrue() {
            return true;
        }
        function returnFalse() {
            return false;
        }
        function safeActiveElement() {
            try {
                return document.activeElement;
            } catch (err) {}
        }
        function on(elem, types, selector, data, fn, one) {
            var origFn, type;
            if (typeof types === "object") {
                if (typeof selector !== "string") {
                    data = data || selector;
                    selector = undefined;
                }
                for (type in types) {
                    on(elem, type, selector, data, types[type], one);
                }
                return elem;
            }
            if (data == null && fn == null) {
                fn = selector;
                data = selector = undefined;
            } else if (fn == null) {
                if (typeof selector === "string") {
                    fn = data;
                    data = undefined;
                } else {
                    fn = data;
                    data = selector;
                    selector = undefined;
                }
            }
            if (fn === false) {
                fn = returnFalse;
            } else if (!fn) {
                return elem;
            }
            if (one === 1) {
                origFn = fn;
                fn = function(event) {
                    jQuery().off(event);
                    return origFn.apply(this, arguments);
                };
                fn.guid = origFn.guid || (origFn.guid = jQuery.guid++);
            }
            return elem.each(function() {
                jQuery.event.add(this, types, fn, data, selector);
            });
        }
        jQuery.event = {
            global: {},
            add: function(elem, types, handler, data, selector) {
                var handleObjIn, eventHandle, tmp, events, t, handleObj, special, handlers, type, namespaces, origType, elemData = dataPriv.get(elem);
                if (!elemData) {
                    return;
                }
                if (handler.handler) {
                    handleObjIn = handler;
                    handler = handleObjIn.handler;
                    selector = handleObjIn.selector;
                }
                if (selector) {
                    jQuery.find.matchesSelector(documentElement, selector);
                }
                if (!handler.guid) {
                    handler.guid = jQuery.guid++;
                }
                if (!(events = elemData.events)) {
                    events = elemData.events = {};
                }
                if (!(eventHandle = elemData.handle)) {
                    eventHandle = elemData.handle = function(e) {
                        return typeof jQuery !== "undefined" && jQuery.event.triggered !== e.type ? jQuery.event.dispatch.apply(elem, arguments) : undefined;
                    };
                }
                types = (types || "").match(rnothtmlwhite) || [ "" ];
                t = types.length;
                while (t--) {
                    tmp = rtypenamespace.exec(types[t]) || [];
                    type = origType = tmp[1];
                    namespaces = (tmp[2] || "").split(".").sort();
                    if (!type) {
                        continue;
                    }
                    special = jQuery.event.special[type] || {};
                    type = (selector ? special.delegateType : special.bindType) || type;
                    special = jQuery.event.special[type] || {};
                    handleObj = jQuery.extend({
                        type: type,
                        origType: origType,
                        data: data,
                        handler: handler,
                        guid: handler.guid,
                        selector: selector,
                        needsContext: selector && jQuery.expr.match.needsContext.test(selector),
                        namespace: namespaces.join(".")
                    }, handleObjIn);
                    if (!(handlers = events[type])) {
                        handlers = events[type] = [];
                        handlers.delegateCount = 0;
                        if (!special.setup || special.setup.call(elem, data, namespaces, eventHandle) === false) {
                            if (elem.addEventListener) {
                                elem.addEventListener(type, eventHandle);
                            }
                        }
                    }
                    if (special.add) {
                        special.add.call(elem, handleObj);
                        if (!handleObj.handler.guid) {
                            handleObj.handler.guid = handler.guid;
                        }
                    }
                    if (selector) {
                        handlers.splice(handlers.delegateCount++, 0, handleObj);
                    } else {
                        handlers.push(handleObj);
                    }
                    jQuery.event.global[type] = true;
                }
            },
            remove: function(elem, types, handler, selector, mappedTypes) {
                var j, origCount, tmp, events, t, handleObj, special, handlers, type, namespaces, origType, elemData = dataPriv.hasData(elem) && dataPriv.get(elem);
                if (!elemData || !(events = elemData.events)) {
                    return;
                }
                types = (types || "").match(rnothtmlwhite) || [ "" ];
                t = types.length;
                while (t--) {
                    tmp = rtypenamespace.exec(types[t]) || [];
                    type = origType = tmp[1];
                    namespaces = (tmp[2] || "").split(".").sort();
                    if (!type) {
                        for (type in events) {
                            jQuery.event.remove(elem, type + types[t], handler, selector, true);
                        }
                        continue;
                    }
                    special = jQuery.event.special[type] || {};
                    type = (selector ? special.delegateType : special.bindType) || type;
                    handlers = events[type] || [];
                    tmp = tmp[2] && new RegExp("(^|\\.)" + namespaces.join("\\.(?:.*\\.|)") + "(\\.|$)");
                    origCount = j = handlers.length;
                    while (j--) {
                        handleObj = handlers[j];
                        if ((mappedTypes || origType === handleObj.origType) && (!handler || handler.guid === handleObj.guid) && (!tmp || tmp.test(handleObj.namespace)) && (!selector || selector === handleObj.selector || selector === "**" && handleObj.selector)) {
                            handlers.splice(j, 1);
                            if (handleObj.selector) {
                                handlers.delegateCount--;
                            }
                            if (special.remove) {
                                special.remove.call(elem, handleObj);
                            }
                        }
                    }
                    if (origCount && !handlers.length) {
                        if (!special.teardown || special.teardown.call(elem, namespaces, elemData.handle) === false) {
                            jQuery.removeEvent(elem, type, elemData.handle);
                        }
                        delete events[type];
                    }
                }
                if (jQuery.isEmptyObject(events)) {
                    dataPriv.remove(elem, "handle events");
                }
            },
            dispatch: function(nativeEvent) {
                var event = jQuery.event.fix(nativeEvent);
                var i, j, ret, matched, handleObj, handlerQueue, args = new Array(arguments.length), handlers = (dataPriv.get(this, "events") || {})[event.type] || [], special = jQuery.event.special[event.type] || {};
                args[0] = event;
                for (i = 1; i < arguments.length; i++) {
                    args[i] = arguments[i];
                }
                event.delegateTarget = this;
                if (special.preDispatch && special.preDispatch.call(this, event) === false) {
                    return;
                }
                handlerQueue = jQuery.event.handlers.call(this, event, handlers);
                i = 0;
                while ((matched = handlerQueue[i++]) && !event.isPropagationStopped()) {
                    event.currentTarget = matched.elem;
                    j = 0;
                    while ((handleObj = matched.handlers[j++]) && !event.isImmediatePropagationStopped()) {
                        if (!event.rnamespace || event.rnamespace.test(handleObj.namespace)) {
                            event.handleObj = handleObj;
                            event.data = handleObj.data;
                            ret = ((jQuery.event.special[handleObj.origType] || {}).handle || handleObj.handler).apply(matched.elem, args);
                            if (ret !== undefined) {
                                if ((event.result = ret) === false) {
                                    event.preventDefault();
                                    event.stopPropagation();
                                }
                            }
                        }
                    }
                }
                if (special.postDispatch) {
                    special.postDispatch.call(this, event);
                }
                return event.result;
            },
            handlers: function(event, handlers) {
                var i, handleObj, sel, matchedHandlers, matchedSelectors, handlerQueue = [], delegateCount = handlers.delegateCount, cur = event.target;
                if (delegateCount && cur.nodeType && !(event.type === "click" && event.button >= 1)) {
                    for (;cur !== this; cur = cur.parentNode || this) {
                        if (cur.nodeType === 1 && !(event.type === "click" && cur.disabled === true)) {
                            matchedHandlers = [];
                            matchedSelectors = {};
                            for (i = 0; i < delegateCount; i++) {
                                handleObj = handlers[i];
                                sel = handleObj.selector + " ";
                                if (matchedSelectors[sel] === undefined) {
                                    matchedSelectors[sel] = handleObj.needsContext ? jQuery(sel, this).index(cur) > -1 : jQuery.find(sel, this, null, [ cur ]).length;
                                }
                                if (matchedSelectors[sel]) {
                                    matchedHandlers.push(handleObj);
                                }
                            }
                            if (matchedHandlers.length) {
                                handlerQueue.push({
                                    elem: cur,
                                    handlers: matchedHandlers
                                });
                            }
                        }
                    }
                }
                cur = this;
                if (delegateCount < handlers.length) {
                    handlerQueue.push({
                        elem: cur,
                        handlers: handlers.slice(delegateCount)
                    });
                }
                return handlerQueue;
            },
            addProp: function(name, hook) {
                Object.defineProperty(jQuery.Event.prototype, name, {
                    enumerable: true,
                    configurable: true,
                    get: jQuery.isFunction(hook) ? function() {
                        if (this.originalEvent) {
                            return hook(this.originalEvent);
                        }
                    } : function() {
                        if (this.originalEvent) {
                            return this.originalEvent[name];
                        }
                    },
                    set: function(value) {
                        Object.defineProperty(this, name, {
                            enumerable: true,
                            configurable: true,
                            writable: true,
                            value: value
                        });
                    }
                });
            },
            fix: function(originalEvent) {
                return originalEvent[jQuery.expando] ? originalEvent : new jQuery.Event(originalEvent);
            },
            special: {
                load: {
                    noBubble: true
                },
                focus: {
                    trigger: function() {
                        if (this !== safeActiveElement() && this.focus) {
                            this.focus();
                            return false;
                        }
                    },
                    delegateType: "focusin"
                },
                blur: {
                    trigger: function() {
                        if (this === safeActiveElement() && this.blur) {
                            this.blur();
                            return false;
                        }
                    },
                    delegateType: "focusout"
                },
                click: {
                    trigger: function() {
                        if (this.type === "checkbox" && this.click && nodeName(this, "input")) {
                            this.click();
                            return false;
                        }
                    },
                    _default: function(event) {
                        return nodeName(event.target, "a");
                    }
                },
                beforeunload: {
                    postDispatch: function(event) {
                        if (event.result !== undefined && event.originalEvent) {
                            event.originalEvent.returnValue = event.result;
                        }
                    }
                }
            }
        };
        jQuery.removeEvent = function(elem, type, handle) {
            if (elem.removeEventListener) {
                elem.removeEventListener(type, handle);
            }
        };
        jQuery.Event = function(src, props) {
            if (!(this instanceof jQuery.Event)) {
                return new jQuery.Event(src, props);
            }
            if (src && src.type) {
                this.originalEvent = src;
                this.type = src.type;
                this.isDefaultPrevented = src.defaultPrevented || src.defaultPrevented === undefined && src.returnValue === false ? returnTrue : returnFalse;
                this.target = src.target && src.target.nodeType === 3 ? src.target.parentNode : src.target;
                this.currentTarget = src.currentTarget;
                this.relatedTarget = src.relatedTarget;
            } else {
                this.type = src;
            }
            if (props) {
                jQuery.extend(this, props);
            }
            this.timeStamp = src && src.timeStamp || jQuery.now();
            this[jQuery.expando] = true;
        };
        jQuery.Event.prototype = {
            constructor: jQuery.Event,
            isDefaultPrevented: returnFalse,
            isPropagationStopped: returnFalse,
            isImmediatePropagationStopped: returnFalse,
            isSimulated: false,
            preventDefault: function() {
                var e = this.originalEvent;
                this.isDefaultPrevented = returnTrue;
                if (e && !this.isSimulated) {
                    e.preventDefault();
                }
            },
            stopPropagation: function() {
                var e = this.originalEvent;
                this.isPropagationStopped = returnTrue;
                if (e && !this.isSimulated) {
                    e.stopPropagation();
                }
            },
            stopImmediatePropagation: function() {
                var e = this.originalEvent;
                this.isImmediatePropagationStopped = returnTrue;
                if (e && !this.isSimulated) {
                    e.stopImmediatePropagation();
                }
                this.stopPropagation();
            }
        };
        jQuery.each({
            altKey: true,
            bubbles: true,
            cancelable: true,
            changedTouches: true,
            ctrlKey: true,
            detail: true,
            eventPhase: true,
            metaKey: true,
            pageX: true,
            pageY: true,
            shiftKey: true,
            view: true,
            char: true,
            charCode: true,
            key: true,
            keyCode: true,
            button: true,
            buttons: true,
            clientX: true,
            clientY: true,
            offsetX: true,
            offsetY: true,
            pointerId: true,
            pointerType: true,
            screenX: true,
            screenY: true,
            targetTouches: true,
            toElement: true,
            touches: true,
            which: function(event) {
                var button = event.button;
                if (event.which == null && rkeyEvent.test(event.type)) {
                    return event.charCode != null ? event.charCode : event.keyCode;
                }
                if (!event.which && button !== undefined && rmouseEvent.test(event.type)) {
                    if (button & 1) {
                        return 1;
                    }
                    if (button & 2) {
                        return 3;
                    }
                    if (button & 4) {
                        return 2;
                    }
                    return 0;
                }
                return event.which;
            }
        }, jQuery.event.addProp);
        jQuery.each({
            mouseenter: "mouseover",
            mouseleave: "mouseout",
            pointerenter: "pointerover",
            pointerleave: "pointerout"
        }, function(orig, fix) {
            jQuery.event.special[orig] = {
                delegateType: fix,
                bindType: fix,
                handle: function(event) {
                    var ret, target = this, related = event.relatedTarget, handleObj = event.handleObj;
                    if (!related || related !== target && !jQuery.contains(target, related)) {
                        event.type = handleObj.origType;
                        ret = handleObj.handler.apply(this, arguments);
                        event.type = fix;
                    }
                    return ret;
                }
            };
        });
        jQuery.fn.extend({
            on: function(types, selector, data, fn) {
                return on(this, types, selector, data, fn);
            },
            one: function(types, selector, data, fn) {
                return on(this, types, selector, data, fn, 1);
            },
            off: function(types, selector, fn) {
                var handleObj, type;
                if (types && types.preventDefault && types.handleObj) {
                    handleObj = types.handleObj;
                    jQuery(types.delegateTarget).off(handleObj.namespace ? handleObj.origType + "." + handleObj.namespace : handleObj.origType, handleObj.selector, handleObj.handler);
                    return this;
                }
                if (typeof types === "object") {
                    for (type in types) {
                        this.off(type, selector, types[type]);
                    }
                    return this;
                }
                if (selector === false || typeof selector === "function") {
                    fn = selector;
                    selector = undefined;
                }
                if (fn === false) {
                    fn = returnFalse;
                }
                return this.each(function() {
                    jQuery.event.remove(this, types, fn, selector);
                });
            }
        });
        var rxhtmlTag = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi, rnoInnerhtml = /<script|<style|<link/i, rchecked = /checked\s*(?:[^=]|=\s*.checked.)/i, rscriptTypeMasked = /^true\/(.*)/, rcleanScript = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
        function manipulationTarget(elem, content) {
            if (nodeName(elem, "table") && nodeName(content.nodeType !== 11 ? content : content.firstChild, "tr")) {
                return jQuery(">tbody", elem)[0] || elem;
            }
            return elem;
        }
        function disableScript(elem) {
            elem.type = (elem.getAttribute("type") !== null) + "/" + elem.type;
            return elem;
        }
        function restoreScript(elem) {
            var match = rscriptTypeMasked.exec(elem.type);
            if (match) {
                elem.type = match[1];
            } else {
                elem.removeAttribute("type");
            }
            return elem;
        }
        function cloneCopyEvent(src, dest) {
            var i, l, type, pdataOld, pdataCur, udataOld, udataCur, events;
            if (dest.nodeType !== 1) {
                return;
            }
            if (dataPriv.hasData(src)) {
                pdataOld = dataPriv.access(src);
                pdataCur = dataPriv.set(dest, pdataOld);
                events = pdataOld.events;
                if (events) {
                    delete pdataCur.handle;
                    pdataCur.events = {};
                    for (type in events) {
                        for (i = 0, l = events[type].length; i < l; i++) {
                            jQuery.event.add(dest, type, events[type][i]);
                        }
                    }
                }
            }
            if (dataUser.hasData(src)) {
                udataOld = dataUser.access(src);
                udataCur = jQuery.extend({}, udataOld);
                dataUser.set(dest, udataCur);
            }
        }
        function fixInput(src, dest) {
            var nodeName = dest.nodeName.toLowerCase();
            if (nodeName === "input" && rcheckableType.test(src.type)) {
                dest.checked = src.checked;
            } else if (nodeName === "input" || nodeName === "textarea") {
                dest.defaultValue = src.defaultValue;
            }
        }
        function domManip(collection, args, callback, ignored) {
            args = concat.apply([], args);
            var fragment, first, scripts, hasScripts, node, doc, i = 0, l = collection.length, iNoClone = l - 1, value = args[0], isFunction = jQuery.isFunction(value);
            if (isFunction || l > 1 && typeof value === "string" && !support.checkClone && rchecked.test(value)) {
                return collection.each(function(index) {
                    var self = collection.eq(index);
                    if (isFunction) {
                        args[0] = value.call(this, index, self.html());
                    }
                    domManip(self, args, callback, ignored);
                });
            }
            if (l) {
                fragment = buildFragment(args, collection[0].ownerDocument, false, collection, ignored);
                first = fragment.firstChild;
                if (fragment.childNodes.length === 1) {
                    fragment = first;
                }
                if (first || ignored) {
                    scripts = jQuery.map(getAll(fragment, "script"), disableScript);
                    hasScripts = scripts.length;
                    for (;i < l; i++) {
                        node = fragment;
                        if (i !== iNoClone) {
                            node = jQuery.clone(node, true, true);
                            if (hasScripts) {
                                jQuery.merge(scripts, getAll(node, "script"));
                            }
                        }
                        callback.call(collection[i], node, i);
                    }
                    if (hasScripts) {
                        doc = scripts[scripts.length - 1].ownerDocument;
                        jQuery.map(scripts, restoreScript);
                        for (i = 0; i < hasScripts; i++) {
                            node = scripts[i];
                            if (rscriptType.test(node.type || "") && !dataPriv.access(node, "globalEval") && jQuery.contains(doc, node)) {
                                if (node.src) {
                                    if (jQuery._evalUrl) {
                                        jQuery._evalUrl(node.src);
                                    }
                                } else {
                                    DOMEval(node.textContent.replace(rcleanScript, ""), doc);
                                }
                            }
                        }
                    }
                }
            }
            return collection;
        }
        function remove(elem, selector, keepData) {
            var node, nodes = selector ? jQuery.filter(selector, elem) : elem, i = 0;
            for (;(node = nodes[i]) != null; i++) {
                if (!keepData && node.nodeType === 1) {
                    jQuery.cleanData(getAll(node));
                }
                if (node.parentNode) {
                    if (keepData && jQuery.contains(node.ownerDocument, node)) {
                        setGlobalEval(getAll(node, "script"));
                    }
                    node.parentNode.removeChild(node);
                }
            }
            return elem;
        }
        jQuery.extend({
            htmlPrefilter: function(html) {
                return html.replace(rxhtmlTag, "<$1></$2>");
            },
            clone: function(elem, dataAndEvents, deepDataAndEvents) {
                var i, l, srcElements, destElements, clone = elem.cloneNode(true), inPage = jQuery.contains(elem.ownerDocument, elem);
                if (!support.noCloneChecked && (elem.nodeType === 1 || elem.nodeType === 11) && !jQuery.isXMLDoc(elem)) {
                    destElements = getAll(clone);
                    srcElements = getAll(elem);
                    for (i = 0, l = srcElements.length; i < l; i++) {
                        fixInput(srcElements[i], destElements[i]);
                    }
                }
                if (dataAndEvents) {
                    if (deepDataAndEvents) {
                        srcElements = srcElements || getAll(elem);
                        destElements = destElements || getAll(clone);
                        for (i = 0, l = srcElements.length; i < l; i++) {
                            cloneCopyEvent(srcElements[i], destElements[i]);
                        }
                    } else {
                        cloneCopyEvent(elem, clone);
                    }
                }
                destElements = getAll(clone, "script");
                if (destElements.length > 0) {
                    setGlobalEval(destElements, !inPage && getAll(elem, "script"));
                }
                return clone;
            },
            cleanData: function(elems) {
                var data, elem, type, special = jQuery.event.special, i = 0;
                for (;(elem = elems[i]) !== undefined; i++) {
                    if (acceptData(elem)) {
                        if (data = elem[dataPriv.expando]) {
                            if (data.events) {
                                for (type in data.events) {
                                    if (special[type]) {
                                        jQuery.event.remove(elem, type);
                                    } else {
                                        jQuery.removeEvent(elem, type, data.handle);
                                    }
                                }
                            }
                            elem[dataPriv.expando] = undefined;
                        }
                        if (elem[dataUser.expando]) {
                            elem[dataUser.expando] = undefined;
                        }
                    }
                }
            }
        });
        jQuery.fn.extend({
            detach: function(selector) {
                return remove(this, selector, true);
            },
            remove: function(selector) {
                return remove(this, selector);
            },
            text: function(value) {
                return access(this, function(value) {
                    return value === undefined ? jQuery.text(this) : this.empty().each(function() {
                        if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
                            this.textContent = value;
                        }
                    });
                }, null, value, arguments.length);
            },
            append: function() {
                return domManip(this, arguments, function(elem) {
                    if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
                        var target = manipulationTarget(this, elem);
                        target.appendChild(elem);
                    }
                });
            },
            prepend: function() {
                return domManip(this, arguments, function(elem) {
                    if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
                        var target = manipulationTarget(this, elem);
                        target.insertBefore(elem, target.firstChild);
                    }
                });
            },
            before: function() {
                return domManip(this, arguments, function(elem) {
                    if (this.parentNode) {
                        this.parentNode.insertBefore(elem, this);
                    }
                });
            },
            after: function() {
                return domManip(this, arguments, function(elem) {
                    if (this.parentNode) {
                        this.parentNode.insertBefore(elem, this.nextSibling);
                    }
                });
            },
            empty: function() {
                var elem, i = 0;
                for (;(elem = this[i]) != null; i++) {
                    if (elem.nodeType === 1) {
                        jQuery.cleanData(getAll(elem, false));
                        elem.textContent = "";
                    }
                }
                return this;
            },
            clone: function(dataAndEvents, deepDataAndEvents) {
                dataAndEvents = dataAndEvents == null ? false : dataAndEvents;
                deepDataAndEvents = deepDataAndEvents == null ? dataAndEvents : deepDataAndEvents;
                return this.map(function() {
                    return jQuery.clone(this, dataAndEvents, deepDataAndEvents);
                });
            },
            html: function(value) {
                return access(this, function(value) {
                    var elem = this[0] || {}, i = 0, l = this.length;
                    if (value === undefined && elem.nodeType === 1) {
                        return elem.innerHTML;
                    }
                    if (typeof value === "string" && !rnoInnerhtml.test(value) && !wrapMap[(rtagName.exec(value) || [ "", "" ])[1].toLowerCase()]) {
                        value = jQuery.htmlPrefilter(value);
                        try {
                            for (;i < l; i++) {
                                elem = this[i] || {};
                                if (elem.nodeType === 1) {
                                    jQuery.cleanData(getAll(elem, false));
                                    elem.innerHTML = value;
                                }
                            }
                            elem = 0;
                        } catch (e) {}
                    }
                    if (elem) {
                        this.empty().append(value);
                    }
                }, null, value, arguments.length);
            },
            replaceWith: function() {
                var ignored = [];
                return domManip(this, arguments, function(elem) {
                    var parent = this.parentNode;
                    if (jQuery.inArray(this, ignored) < 0) {
                        jQuery.cleanData(getAll(this));
                        if (parent) {
                            parent.replaceChild(elem, this);
                        }
                    }
                }, ignored);
            }
        });
        jQuery.each({
            appendTo: "append",
            prependTo: "prepend",
            insertBefore: "before",
            insertAfter: "after",
            replaceAll: "replaceWith"
        }, function(name, original) {
            jQuery.fn[name] = function(selector) {
                var elems, ret = [], insert = jQuery(selector), last = insert.length - 1, i = 0;
                for (;i <= last; i++) {
                    elems = i === last ? this : this.clone(true);
                    jQuery(insert[i])[original](elems);
                    push.apply(ret, elems.get());
                }
                return this.pushStack(ret);
            };
        });
        var rmargin = /^margin/;
        var rnumnonpx = new RegExp("^(" + pnum + ")(?!px)[a-z%]+$", "i");
        var getStyles = function(elem) {
            var view = elem.ownerDocument.defaultView;
            if (!view || !view.opener) {
                view = window;
            }
            return view.getComputedStyle(elem);
        };
        (function() {
            function computeStyleTests() {
                if (!div) {
                    return;
                }
                div.style.cssText = "box-sizing:border-box;" + "position:relative;display:block;" + "margin:auto;border:1px;padding:1px;" + "top:1%;width:50%";
                div.innerHTML = "";
                documentElement.appendChild(container);
                var divStyle = window.getComputedStyle(div);
                pixelPositionVal = divStyle.top !== "1%";
                reliableMarginLeftVal = divStyle.marginLeft === "2px";
                boxSizingReliableVal = divStyle.width === "4px";
                div.style.marginRight = "50%";
                pixelMarginRightVal = divStyle.marginRight === "4px";
                documentElement.removeChild(container);
                div = null;
            }
            var pixelPositionVal, boxSizingReliableVal, pixelMarginRightVal, reliableMarginLeftVal, container = document.createElement("div"), div = document.createElement("div");
            if (!div.style) {
                return;
            }
            div.style.backgroundClip = "content-box";
            div.cloneNode(true).style.backgroundClip = "";
            support.clearCloneStyle = div.style.backgroundClip === "content-box";
            container.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;" + "padding:0;margin-top:1px;position:absolute";
            container.appendChild(div);
            jQuery.extend(support, {
                pixelPosition: function() {
                    computeStyleTests();
                    return pixelPositionVal;
                },
                boxSizingReliable: function() {
                    computeStyleTests();
                    return boxSizingReliableVal;
                },
                pixelMarginRight: function() {
                    computeStyleTests();
                    return pixelMarginRightVal;
                },
                reliableMarginLeft: function() {
                    computeStyleTests();
                    return reliableMarginLeftVal;
                }
            });
        })();
        function curCSS(elem, name, computed) {
            var width, minWidth, maxWidth, ret, style = elem.style;
            computed = computed || getStyles(elem);
            if (computed) {
                ret = computed.getPropertyValue(name) || computed[name];
                if (ret === "" && !jQuery.contains(elem.ownerDocument, elem)) {
                    ret = jQuery.style(elem, name);
                }
                if (!support.pixelMarginRight() && rnumnonpx.test(ret) && rmargin.test(name)) {
                    width = style.width;
                    minWidth = style.minWidth;
                    maxWidth = style.maxWidth;
                    style.minWidth = style.maxWidth = style.width = ret;
                    ret = computed.width;
                    style.width = width;
                    style.minWidth = minWidth;
                    style.maxWidth = maxWidth;
                }
            }
            return ret !== undefined ? ret + "" : ret;
        }
        function addGetHookIf(conditionFn, hookFn) {
            return {
                get: function() {
                    if (conditionFn()) {
                        delete this.get;
                        return;
                    }
                    return (this.get = hookFn).apply(this, arguments);
                }
            };
        }
        var rdisplayswap = /^(none|table(?!-c[ea]).+)/, rcustomProp = /^--/, cssShow = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        }, cssNormalTransform = {
            letterSpacing: "0",
            fontWeight: "400"
        }, cssPrefixes = [ "Webkit", "Moz", "ms" ], emptyStyle = document.createElement("div").style;
        function vendorPropName(name) {
            if (name in emptyStyle) {
                return name;
            }
            var capName = name[0].toUpperCase() + name.slice(1), i = cssPrefixes.length;
            while (i--) {
                name = cssPrefixes[i] + capName;
                if (name in emptyStyle) {
                    return name;
                }
            }
        }
        function finalPropName(name) {
            var ret = jQuery.cssProps[name];
            if (!ret) {
                ret = jQuery.cssProps[name] = vendorPropName(name) || name;
            }
            return ret;
        }
        function setPositiveNumber(elem, value, subtract) {
            var matches = rcssNum.exec(value);
            return matches ? Math.max(0, matches[2] - (subtract || 0)) + (matches[3] || "px") : value;
        }
        function augmentWidthOrHeight(elem, name, extra, isBorderBox, styles) {
            var i, val = 0;
            if (extra === (isBorderBox ? "border" : "content")) {
                i = 4;
            } else {
                i = name === "width" ? 1 : 0;
            }
            for (;i < 4; i += 2) {
                if (extra === "margin") {
                    val += jQuery.css(elem, extra + cssExpand[i], true, styles);
                }
                if (isBorderBox) {
                    if (extra === "content") {
                        val -= jQuery.css(elem, "padding" + cssExpand[i], true, styles);
                    }
                    if (extra !== "margin") {
                        val -= jQuery.css(elem, "border" + cssExpand[i] + "Width", true, styles);
                    }
                } else {
                    val += jQuery.css(elem, "padding" + cssExpand[i], true, styles);
                    if (extra !== "padding") {
                        val += jQuery.css(elem, "border" + cssExpand[i] + "Width", true, styles);
                    }
                }
            }
            return val;
        }
        function getWidthOrHeight(elem, name, extra) {
            var valueIsBorderBox, styles = getStyles(elem), val = curCSS(elem, name, styles), isBorderBox = jQuery.css(elem, "boxSizing", false, styles) === "border-box";
            if (rnumnonpx.test(val)) {
                return val;
            }
            valueIsBorderBox = isBorderBox && (support.boxSizingReliable() || val === elem.style[name]);
            if (val === "auto") {
                val = elem["offset" + name[0].toUpperCase() + name.slice(1)];
            }
            val = parseFloat(val) || 0;
            return val + augmentWidthOrHeight(elem, name, extra || (isBorderBox ? "border" : "content"), valueIsBorderBox, styles) + "px";
        }
        jQuery.extend({
            cssHooks: {
                opacity: {
                    get: function(elem, computed) {
                        if (computed) {
                            var ret = curCSS(elem, "opacity");
                            return ret === "" ? "1" : ret;
                        }
                    }
                }
            },
            cssNumber: {
                animationIterationCount: true,
                columnCount: true,
                fillOpacity: true,
                flexGrow: true,
                flexShrink: true,
                fontWeight: true,
                lineHeight: true,
                opacity: true,
                order: true,
                orphans: true,
                widows: true,
                zIndex: true,
                zoom: true
            },
            cssProps: {
                float: "cssFloat"
            },
            style: function(elem, name, value, extra) {
                if (!elem || elem.nodeType === 3 || elem.nodeType === 8 || !elem.style) {
                    return;
                }
                var ret, type, hooks, origName = jQuery.camelCase(name), isCustomProp = rcustomProp.test(name), style = elem.style;
                if (!isCustomProp) {
                    name = finalPropName(origName);
                }
                hooks = jQuery.cssHooks[name] || jQuery.cssHooks[origName];
                if (value !== undefined) {
                    type = typeof value;
                    if (type === "string" && (ret = rcssNum.exec(value)) && ret[1]) {
                        value = adjustCSS(elem, name, ret);
                        type = "number";
                    }
                    if (value == null || value !== value) {
                        return;
                    }
                    if (type === "number") {
                        value += ret && ret[3] || (jQuery.cssNumber[origName] ? "" : "px");
                    }
                    if (!support.clearCloneStyle && value === "" && name.indexOf("background") === 0) {
                        style[name] = "inherit";
                    }
                    if (!hooks || !("set" in hooks) || (value = hooks.set(elem, value, extra)) !== undefined) {
                        if (isCustomProp) {
                            style.setProperty(name, value);
                        } else {
                            style[name] = value;
                        }
                    }
                } else {
                    if (hooks && "get" in hooks && (ret = hooks.get(elem, false, extra)) !== undefined) {
                        return ret;
                    }
                    return style[name];
                }
            },
            css: function(elem, name, extra, styles) {
                var val, num, hooks, origName = jQuery.camelCase(name), isCustomProp = rcustomProp.test(name);
                if (!isCustomProp) {
                    name = finalPropName(origName);
                }
                hooks = jQuery.cssHooks[name] || jQuery.cssHooks[origName];
                if (hooks && "get" in hooks) {
                    val = hooks.get(elem, true, extra);
                }
                if (val === undefined) {
                    val = curCSS(elem, name, styles);
                }
                if (val === "normal" && name in cssNormalTransform) {
                    val = cssNormalTransform[name];
                }
                if (extra === "" || extra) {
                    num = parseFloat(val);
                    return extra === true || isFinite(num) ? num || 0 : val;
                }
                return val;
            }
        });
        jQuery.each([ "height", "width" ], function(i, name) {
            jQuery.cssHooks[name] = {
                get: function(elem, computed, extra) {
                    if (computed) {
                        return rdisplayswap.test(jQuery.css(elem, "display")) && (!elem.getClientRects().length || !elem.getBoundingClientRect().width) ? swap(elem, cssShow, function() {
                            return getWidthOrHeight(elem, name, extra);
                        }) : getWidthOrHeight(elem, name, extra);
                    }
                },
                set: function(elem, value, extra) {
                    var matches, styles = extra && getStyles(elem), subtract = extra && augmentWidthOrHeight(elem, name, extra, jQuery.css(elem, "boxSizing", false, styles) === "border-box", styles);
                    if (subtract && (matches = rcssNum.exec(value)) && (matches[3] || "px") !== "px") {
                        elem.style[name] = value;
                        value = jQuery.css(elem, name);
                    }
                    return setPositiveNumber(elem, value, subtract);
                }
            };
        });
        jQuery.cssHooks.marginLeft = addGetHookIf(support.reliableMarginLeft, function(elem, computed) {
            if (computed) {
                return (parseFloat(curCSS(elem, "marginLeft")) || elem.getBoundingClientRect().left - swap(elem, {
                    marginLeft: 0
                }, function() {
                    return elem.getBoundingClientRect().left;
                })) + "px";
            }
        });
        jQuery.each({
            margin: "",
            padding: "",
            border: "Width"
        }, function(prefix, suffix) {
            jQuery.cssHooks[prefix + suffix] = {
                expand: function(value) {
                    var i = 0, expanded = {}, parts = typeof value === "string" ? value.split(" ") : [ value ];
                    for (;i < 4; i++) {
                        expanded[prefix + cssExpand[i] + suffix] = parts[i] || parts[i - 2] || parts[0];
                    }
                    return expanded;
                }
            };
            if (!rmargin.test(prefix)) {
                jQuery.cssHooks[prefix + suffix].set = setPositiveNumber;
            }
        });
        jQuery.fn.extend({
            css: function(name, value) {
                return access(this, function(elem, name, value) {
                    var styles, len, map = {}, i = 0;
                    if (Array.isArray(name)) {
                        styles = getStyles(elem);
                        len = name.length;
                        for (;i < len; i++) {
                            map[name[i]] = jQuery.css(elem, name[i], false, styles);
                        }
                        return map;
                    }
                    return value !== undefined ? jQuery.style(elem, name, value) : jQuery.css(elem, name);
                }, name, value, arguments.length > 1);
            }
        });
        function Tween(elem, options, prop, end, easing) {
            return new Tween.prototype.init(elem, options, prop, end, easing);
        }
        jQuery.Tween = Tween;
        Tween.prototype = {
            constructor: Tween,
            init: function(elem, options, prop, end, easing, unit) {
                this.elem = elem;
                this.prop = prop;
                this.easing = easing || jQuery.easing._default;
                this.options = options;
                this.start = this.now = this.cur();
                this.end = end;
                this.unit = unit || (jQuery.cssNumber[prop] ? "" : "px");
            },
            cur: function() {
                var hooks = Tween.propHooks[this.prop];
                return hooks && hooks.get ? hooks.get(this) : Tween.propHooks._default.get(this);
            },
            run: function(percent) {
                var eased, hooks = Tween.propHooks[this.prop];
                if (this.options.duration) {
                    this.pos = eased = jQuery.easing[this.easing](percent, this.options.duration * percent, 0, 1, this.options.duration);
                } else {
                    this.pos = eased = percent;
                }
                this.now = (this.end - this.start) * eased + this.start;
                if (this.options.step) {
                    this.options.step.call(this.elem, this.now, this);
                }
                if (hooks && hooks.set) {
                    hooks.set(this);
                } else {
                    Tween.propHooks._default.set(this);
                }
                return this;
            }
        };
        Tween.prototype.init.prototype = Tween.prototype;
        Tween.propHooks = {
            _default: {
                get: function(tween) {
                    var result;
                    if (tween.elem.nodeType !== 1 || tween.elem[tween.prop] != null && tween.elem.style[tween.prop] == null) {
                        return tween.elem[tween.prop];
                    }
                    result = jQuery.css(tween.elem, tween.prop, "");
                    return !result || result === "auto" ? 0 : result;
                },
                set: function(tween) {
                    if (jQuery.fx.step[tween.prop]) {
                        jQuery.fx.step[tween.prop](tween);
                    } else if (tween.elem.nodeType === 1 && (tween.elem.style[jQuery.cssProps[tween.prop]] != null || jQuery.cssHooks[tween.prop])) {
                        jQuery.style(tween.elem, tween.prop, tween.now + tween.unit);
                    } else {
                        tween.elem[tween.prop] = tween.now;
                    }
                }
            }
        };
        Tween.propHooks.scrollTop = Tween.propHooks.scrollLeft = {
            set: function(tween) {
                if (tween.elem.nodeType && tween.elem.parentNode) {
                    tween.elem[tween.prop] = tween.now;
                }
            }
        };
        jQuery.easing = {
            linear: function(p) {
                return p;
            },
            swing: function(p) {
                return .5 - Math.cos(p * Math.PI) / 2;
            },
            _default: "swing"
        };
        jQuery.fx = Tween.prototype.init;
        jQuery.fx.step = {};
        var fxNow, inProgress, rfxtypes = /^(?:toggle|show|hide)$/, rrun = /queueHooks$/;
        function schedule() {
            if (inProgress) {
                if (document.hidden === false && window.requestAnimationFrame) {
                    window.requestAnimationFrame(schedule);
                } else {
                    window.setTimeout(schedule, jQuery.fx.interval);
                }
                jQuery.fx.tick();
            }
        }
        function createFxNow() {
            window.setTimeout(function() {
                fxNow = undefined;
            });
            return fxNow = jQuery.now();
        }
        function genFx(type, includeWidth) {
            var which, i = 0, attrs = {
                height: type
            };
            includeWidth = includeWidth ? 1 : 0;
            for (;i < 4; i += 2 - includeWidth) {
                which = cssExpand[i];
                attrs["margin" + which] = attrs["padding" + which] = type;
            }
            if (includeWidth) {
                attrs.opacity = attrs.width = type;
            }
            return attrs;
        }
        function createTween(value, prop, animation) {
            var tween, collection = (Animation.tweeners[prop] || []).concat(Animation.tweeners["*"]), index = 0, length = collection.length;
            for (;index < length; index++) {
                if (tween = collection[index].call(animation, prop, value)) {
                    return tween;
                }
            }
        }
        function defaultPrefilter(elem, props, opts) {
            var prop, value, toggle, hooks, oldfire, propTween, restoreDisplay, display, isBox = "width" in props || "height" in props, anim = this, orig = {}, style = elem.style, hidden = elem.nodeType && isHiddenWithinTree(elem), dataShow = dataPriv.get(elem, "fxshow");
            if (!opts.queue) {
                hooks = jQuery._queueHooks(elem, "fx");
                if (hooks.unqueued == null) {
                    hooks.unqueued = 0;
                    oldfire = hooks.empty.fire;
                    hooks.empty.fire = function() {
                        if (!hooks.unqueued) {
                            oldfire();
                        }
                    };
                }
                hooks.unqueued++;
                anim.always(function() {
                    anim.always(function() {
                        hooks.unqueued--;
                        if (!jQuery.queue(elem, "fx").length) {
                            hooks.empty.fire();
                        }
                    });
                });
            }
            for (prop in props) {
                value = props[prop];
                if (rfxtypes.test(value)) {
                    delete props[prop];
                    toggle = toggle || value === "toggle";
                    if (value === (hidden ? "hide" : "show")) {
                        if (value === "show" && dataShow && dataShow[prop] !== undefined) {
                            hidden = true;
                        } else {
                            continue;
                        }
                    }
                    orig[prop] = dataShow && dataShow[prop] || jQuery.style(elem, prop);
                }
            }
            propTween = !jQuery.isEmptyObject(props);
            if (!propTween && jQuery.isEmptyObject(orig)) {
                return;
            }
            if (isBox && elem.nodeType === 1) {
                opts.overflow = [ style.overflow, style.overflowX, style.overflowY ];
                restoreDisplay = dataShow && dataShow.display;
                if (restoreDisplay == null) {
                    restoreDisplay = dataPriv.get(elem, "display");
                }
                display = jQuery.css(elem, "display");
                if (display === "none") {
                    if (restoreDisplay) {
                        display = restoreDisplay;
                    } else {
                        showHide([ elem ], true);
                        restoreDisplay = elem.style.display || restoreDisplay;
                        display = jQuery.css(elem, "display");
                        showHide([ elem ]);
                    }
                }
                if (display === "inline" || display === "inline-block" && restoreDisplay != null) {
                    if (jQuery.css(elem, "float") === "none") {
                        if (!propTween) {
                            anim.done(function() {
                                style.display = restoreDisplay;
                            });
                            if (restoreDisplay == null) {
                                display = style.display;
                                restoreDisplay = display === "none" ? "" : display;
                            }
                        }
                        style.display = "inline-block";
                    }
                }
            }
            if (opts.overflow) {
                style.overflow = "hidden";
                anim.always(function() {
                    style.overflow = opts.overflow[0];
                    style.overflowX = opts.overflow[1];
                    style.overflowY = opts.overflow[2];
                });
            }
            propTween = false;
            for (prop in orig) {
                if (!propTween) {
                    if (dataShow) {
                        if ("hidden" in dataShow) {
                            hidden = dataShow.hidden;
                        }
                    } else {
                        dataShow = dataPriv.access(elem, "fxshow", {
                            display: restoreDisplay
                        });
                    }
                    if (toggle) {
                        dataShow.hidden = !hidden;
                    }
                    if (hidden) {
                        showHide([ elem ], true);
                    }
                    anim.done(function() {
                        if (!hidden) {
                            showHide([ elem ]);
                        }
                        dataPriv.remove(elem, "fxshow");
                        for (prop in orig) {
                            jQuery.style(elem, prop, orig[prop]);
                        }
                    });
                }
                propTween = createTween(hidden ? dataShow[prop] : 0, prop, anim);
                if (!(prop in dataShow)) {
                    dataShow[prop] = propTween.start;
                    if (hidden) {
                        propTween.end = propTween.start;
                        propTween.start = 0;
                    }
                }
            }
        }
        function propFilter(props, specialEasing) {
            var index, name, easing, value, hooks;
            for (index in props) {
                name = jQuery.camelCase(index);
                easing = specialEasing[name];
                value = props[index];
                if (Array.isArray(value)) {
                    easing = value[1];
                    value = props[index] = value[0];
                }
                if (index !== name) {
                    props[name] = value;
                    delete props[index];
                }
                hooks = jQuery.cssHooks[name];
                if (hooks && "expand" in hooks) {
                    value = hooks.expand(value);
                    delete props[name];
                    for (index in value) {
                        if (!(index in props)) {
                            props[index] = value[index];
                            specialEasing[index] = easing;
                        }
                    }
                } else {
                    specialEasing[name] = easing;
                }
            }
        }
        function Animation(elem, properties, options) {
            var result, stopped, index = 0, length = Animation.prefilters.length, deferred = jQuery.Deferred().always(function() {
                delete tick.elem;
            }), tick = function() {
                if (stopped) {
                    return false;
                }
                var currentTime = fxNow || createFxNow(), remaining = Math.max(0, animation.startTime + animation.duration - currentTime), temp = remaining / animation.duration || 0, percent = 1 - temp, index = 0, length = animation.tweens.length;
                for (;index < length; index++) {
                    animation.tweens[index].run(percent);
                }
                deferred.notifyWith(elem, [ animation, percent, remaining ]);
                if (percent < 1 && length) {
                    return remaining;
                }
                if (!length) {
                    deferred.notifyWith(elem, [ animation, 1, 0 ]);
                }
                deferred.resolveWith(elem, [ animation ]);
                return false;
            }, animation = deferred.promise({
                elem: elem,
                props: jQuery.extend({}, properties),
                opts: jQuery.extend(true, {
                    specialEasing: {},
                    easing: jQuery.easing._default
                }, options),
                originalProperties: properties,
                originalOptions: options,
                startTime: fxNow || createFxNow(),
                duration: options.duration,
                tweens: [],
                createTween: function(prop, end) {
                    var tween = jQuery.Tween(elem, animation.opts, prop, end, animation.opts.specialEasing[prop] || animation.opts.easing);
                    animation.tweens.push(tween);
                    return tween;
                },
                stop: function(gotoEnd) {
                    var index = 0, length = gotoEnd ? animation.tweens.length : 0;
                    if (stopped) {
                        return this;
                    }
                    stopped = true;
                    for (;index < length; index++) {
                        animation.tweens[index].run(1);
                    }
                    if (gotoEnd) {
                        deferred.notifyWith(elem, [ animation, 1, 0 ]);
                        deferred.resolveWith(elem, [ animation, gotoEnd ]);
                    } else {
                        deferred.rejectWith(elem, [ animation, gotoEnd ]);
                    }
                    return this;
                }
            }), props = animation.props;
            propFilter(props, animation.opts.specialEasing);
            for (;index < length; index++) {
                result = Animation.prefilters[index].call(animation, elem, props, animation.opts);
                if (result) {
                    if (jQuery.isFunction(result.stop)) {
                        jQuery._queueHooks(animation.elem, animation.opts.queue).stop = jQuery.proxy(result.stop, result);
                    }
                    return result;
                }
            }
            jQuery.map(props, createTween, animation);
            if (jQuery.isFunction(animation.opts.start)) {
                animation.opts.start.call(elem, animation);
            }
            animation.progress(animation.opts.progress).done(animation.opts.done, animation.opts.complete).fail(animation.opts.fail).always(animation.opts.always);
            jQuery.fx.timer(jQuery.extend(tick, {
                elem: elem,
                anim: animation,
                queue: animation.opts.queue
            }));
            return animation;
        }
        jQuery.Animation = jQuery.extend(Animation, {
            tweeners: {
                "*": [ function(prop, value) {
                    var tween = this.createTween(prop, value);
                    adjustCSS(tween.elem, prop, rcssNum.exec(value), tween);
                    return tween;
                } ]
            },
            tweener: function(props, callback) {
                if (jQuery.isFunction(props)) {
                    callback = props;
                    props = [ "*" ];
                } else {
                    props = props.match(rnothtmlwhite);
                }
                var prop, index = 0, length = props.length;
                for (;index < length; index++) {
                    prop = props[index];
                    Animation.tweeners[prop] = Animation.tweeners[prop] || [];
                    Animation.tweeners[prop].unshift(callback);
                }
            },
            prefilters: [ defaultPrefilter ],
            prefilter: function(callback, prepend) {
                if (prepend) {
                    Animation.prefilters.unshift(callback);
                } else {
                    Animation.prefilters.push(callback);
                }
            }
        });
        jQuery.speed = function(speed, easing, fn) {
            var opt = speed && typeof speed === "object" ? jQuery.extend({}, speed) : {
                complete: fn || !fn && easing || jQuery.isFunction(speed) && speed,
                duration: speed,
                easing: fn && easing || easing && !jQuery.isFunction(easing) && easing
            };
            if (jQuery.fx.off) {
                opt.duration = 0;
            } else {
                if (typeof opt.duration !== "number") {
                    if (opt.duration in jQuery.fx.speeds) {
                        opt.duration = jQuery.fx.speeds[opt.duration];
                    } else {
                        opt.duration = jQuery.fx.speeds._default;
                    }
                }
            }
            if (opt.queue == null || opt.queue === true) {
                opt.queue = "fx";
            }
            opt.old = opt.complete;
            opt.complete = function() {
                if (jQuery.isFunction(opt.old)) {
                    opt.old.call(this);
                }
                if (opt.queue) {
                    jQuery.dequeue(this, opt.queue);
                }
            };
            return opt;
        };
        jQuery.fn.extend({
            fadeTo: function(speed, to, easing, callback) {
                return this.filter(isHiddenWithinTree).css("opacity", 0).show().end().animate({
                    opacity: to
                }, speed, easing, callback);
            },
            animate: function(prop, speed, easing, callback) {
                var empty = jQuery.isEmptyObject(prop), optall = jQuery.speed(speed, easing, callback), doAnimation = function() {
                    var anim = Animation(this, jQuery.extend({}, prop), optall);
                    if (empty || dataPriv.get(this, "finish")) {
                        anim.stop(true);
                    }
                };
                doAnimation.finish = doAnimation;
                return empty || optall.queue === false ? this.each(doAnimation) : this.queue(optall.queue, doAnimation);
            },
            stop: function(type, clearQueue, gotoEnd) {
                var stopQueue = function(hooks) {
                    var stop = hooks.stop;
                    delete hooks.stop;
                    stop(gotoEnd);
                };
                if (typeof type !== "string") {
                    gotoEnd = clearQueue;
                    clearQueue = type;
                    type = undefined;
                }
                if (clearQueue && type !== false) {
                    this.queue(type || "fx", []);
                }
                return this.each(function() {
                    var dequeue = true, index = type != null && type + "queueHooks", timers = jQuery.timers, data = dataPriv.get(this);
                    if (index) {
                        if (data[index] && data[index].stop) {
                            stopQueue(data[index]);
                        }
                    } else {
                        for (index in data) {
                            if (data[index] && data[index].stop && rrun.test(index)) {
                                stopQueue(data[index]);
                            }
                        }
                    }
                    for (index = timers.length; index--; ) {
                        if (timers[index].elem === this && (type == null || timers[index].queue === type)) {
                            timers[index].anim.stop(gotoEnd);
                            dequeue = false;
                            timers.splice(index, 1);
                        }
                    }
                    if (dequeue || !gotoEnd) {
                        jQuery.dequeue(this, type);
                    }
                });
            },
            finish: function(type) {
                if (type !== false) {
                    type = type || "fx";
                }
                return this.each(function() {
                    var index, data = dataPriv.get(this), queue = data[type + "queue"], hooks = data[type + "queueHooks"], timers = jQuery.timers, length = queue ? queue.length : 0;
                    data.finish = true;
                    jQuery.queue(this, type, []);
                    if (hooks && hooks.stop) {
                        hooks.stop.call(this, true);
                    }
                    for (index = timers.length; index--; ) {
                        if (timers[index].elem === this && timers[index].queue === type) {
                            timers[index].anim.stop(true);
                            timers.splice(index, 1);
                        }
                    }
                    for (index = 0; index < length; index++) {
                        if (queue[index] && queue[index].finish) {
                            queue[index].finish.call(this);
                        }
                    }
                    delete data.finish;
                });
            }
        });
        jQuery.each([ "toggle", "show", "hide" ], function(i, name) {
            var cssFn = jQuery.fn[name];
            jQuery.fn[name] = function(speed, easing, callback) {
                return speed == null || typeof speed === "boolean" ? cssFn.apply(this, arguments) : this.animate(genFx(name, true), speed, easing, callback);
            };
        });
        jQuery.each({
            slideDown: genFx("show"),
            slideUp: genFx("hide"),
            slideToggle: genFx("toggle"),
            fadeIn: {
                opacity: "show"
            },
            fadeOut: {
                opacity: "hide"
            },
            fadeToggle: {
                opacity: "toggle"
            }
        }, function(name, props) {
            jQuery.fn[name] = function(speed, easing, callback) {
                return this.animate(props, speed, easing, callback);
            };
        });
        jQuery.timers = [];
        jQuery.fx.tick = function() {
            var timer, i = 0, timers = jQuery.timers;
            fxNow = jQuery.now();
            for (;i < timers.length; i++) {
                timer = timers[i];
                if (!timer() && timers[i] === timer) {
                    timers.splice(i--, 1);
                }
            }
            if (!timers.length) {
                jQuery.fx.stop();
            }
            fxNow = undefined;
        };
        jQuery.fx.timer = function(timer) {
            jQuery.timers.push(timer);
            jQuery.fx.start();
        };
        jQuery.fx.interval = 13;
        jQuery.fx.start = function() {
            if (inProgress) {
                return;
            }
            inProgress = true;
            schedule();
        };
        jQuery.fx.stop = function() {
            inProgress = null;
        };
        jQuery.fx.speeds = {
            slow: 600,
            fast: 200,
            _default: 400
        };
        jQuery.fn.delay = function(time, type) {
            time = jQuery.fx ? jQuery.fx.speeds[time] || time : time;
            type = type || "fx";
            return this.queue(type, function(next, hooks) {
                var timeout = window.setTimeout(next, time);
                hooks.stop = function() {
                    window.clearTimeout(timeout);
                };
            });
        };
        (function() {
            var input = document.createElement("input"), select = document.createElement("select"), opt = select.appendChild(document.createElement("option"));
            input.type = "checkbox";
            support.checkOn = input.value !== "";
            support.optSelected = opt.selected;
            input = document.createElement("input");
            input.value = "t";
            input.type = "radio";
            support.radioValue = input.value === "t";
        })();
        var boolHook, attrHandle = jQuery.expr.attrHandle;
        jQuery.fn.extend({
            attr: function(name, value) {
                return access(this, jQuery.attr, name, value, arguments.length > 1);
            },
            removeAttr: function(name) {
                return this.each(function() {
                    jQuery.removeAttr(this, name);
                });
            }
        });
        jQuery.extend({
            attr: function(elem, name, value) {
                var ret, hooks, nType = elem.nodeType;
                if (nType === 3 || nType === 8 || nType === 2) {
                    return;
                }
                if (typeof elem.getAttribute === "undefined") {
                    return jQuery.prop(elem, name, value);
                }
                if (nType !== 1 || !jQuery.isXMLDoc(elem)) {
                    hooks = jQuery.attrHooks[name.toLowerCase()] || (jQuery.expr.match.bool.test(name) ? boolHook : undefined);
                }
                if (value !== undefined) {
                    if (value === null) {
                        jQuery.removeAttr(elem, name);
                        return;
                    }
                    if (hooks && "set" in hooks && (ret = hooks.set(elem, value, name)) !== undefined) {
                        return ret;
                    }
                    elem.setAttribute(name, value + "");
                    return value;
                }
                if (hooks && "get" in hooks && (ret = hooks.get(elem, name)) !== null) {
                    return ret;
                }
                ret = jQuery.find.attr(elem, name);
                return ret == null ? undefined : ret;
            },
            attrHooks: {
                type: {
                    set: function(elem, value) {
                        if (!support.radioValue && value === "radio" && nodeName(elem, "input")) {
                            var val = elem.value;
                            elem.setAttribute("type", value);
                            if (val) {
                                elem.value = val;
                            }
                            return value;
                        }
                    }
                }
            },
            removeAttr: function(elem, value) {
                var name, i = 0, attrNames = value && value.match(rnothtmlwhite);
                if (attrNames && elem.nodeType === 1) {
                    while (name = attrNames[i++]) {
                        elem.removeAttribute(name);
                    }
                }
            }
        });
        boolHook = {
            set: function(elem, value, name) {
                if (value === false) {
                    jQuery.removeAttr(elem, name);
                } else {
                    elem.setAttribute(name, name);
                }
                return name;
            }
        };
        jQuery.each(jQuery.expr.match.bool.source.match(/\w+/g), function(i, name) {
            var getter = attrHandle[name] || jQuery.find.attr;
            attrHandle[name] = function(elem, name, isXML) {
                var ret, handle, lowercaseName = name.toLowerCase();
                if (!isXML) {
                    handle = attrHandle[lowercaseName];
                    attrHandle[lowercaseName] = ret;
                    ret = getter(elem, name, isXML) != null ? lowercaseName : null;
                    attrHandle[lowercaseName] = handle;
                }
                return ret;
            };
        });
        var rfocusable = /^(?:input|select|textarea|button)$/i, rclickable = /^(?:a|area)$/i;
        jQuery.fn.extend({
            prop: function(name, value) {
                return access(this, jQuery.prop, name, value, arguments.length > 1);
            },
            removeProp: function(name) {
                return this.each(function() {
                    delete this[jQuery.propFix[name] || name];
                });
            }
        });
        jQuery.extend({
            prop: function(elem, name, value) {
                var ret, hooks, nType = elem.nodeType;
                if (nType === 3 || nType === 8 || nType === 2) {
                    return;
                }
                if (nType !== 1 || !jQuery.isXMLDoc(elem)) {
                    name = jQuery.propFix[name] || name;
                    hooks = jQuery.propHooks[name];
                }
                if (value !== undefined) {
                    if (hooks && "set" in hooks && (ret = hooks.set(elem, value, name)) !== undefined) {
                        return ret;
                    }
                    return elem[name] = value;
                }
                if (hooks && "get" in hooks && (ret = hooks.get(elem, name)) !== null) {
                    return ret;
                }
                return elem[name];
            },
            propHooks: {
                tabIndex: {
                    get: function(elem) {
                        var tabindex = jQuery.find.attr(elem, "tabindex");
                        if (tabindex) {
                            return parseInt(tabindex, 10);
                        }
                        if (rfocusable.test(elem.nodeName) || rclickable.test(elem.nodeName) && elem.href) {
                            return 0;
                        }
                        return -1;
                    }
                }
            },
            propFix: {
                for: "htmlFor",
                class: "className"
            }
        });
        if (!support.optSelected) {
            jQuery.propHooks.selected = {
                get: function(elem) {
                    var parent = elem.parentNode;
                    if (parent && parent.parentNode) {
                        parent.parentNode.selectedIndex;
                    }
                    return null;
                },
                set: function(elem) {
                    var parent = elem.parentNode;
                    if (parent) {
                        parent.selectedIndex;
                        if (parent.parentNode) {
                            parent.parentNode.selectedIndex;
                        }
                    }
                }
            };
        }
        jQuery.each([ "tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable" ], function() {
            jQuery.propFix[this.toLowerCase()] = this;
        });
        function stripAndCollapse(value) {
            var tokens = value.match(rnothtmlwhite) || [];
            return tokens.join(" ");
        }
        function getClass(elem) {
            return elem.getAttribute && elem.getAttribute("class") || "";
        }
        jQuery.fn.extend({
            addClass: function(value) {
                var classes, elem, cur, curValue, clazz, j, finalValue, i = 0;
                if (jQuery.isFunction(value)) {
                    return this.each(function(j) {
                        jQuery(this).addClass(value.call(this, j, getClass(this)));
                    });
                }
                if (typeof value === "string" && value) {
                    classes = value.match(rnothtmlwhite) || [];
                    while (elem = this[i++]) {
                        curValue = getClass(elem);
                        cur = elem.nodeType === 1 && " " + stripAndCollapse(curValue) + " ";
                        if (cur) {
                            j = 0;
                            while (clazz = classes[j++]) {
                                if (cur.indexOf(" " + clazz + " ") < 0) {
                                    cur += clazz + " ";
                                }
                            }
                            finalValue = stripAndCollapse(cur);
                            if (curValue !== finalValue) {
                                elem.setAttribute("class", finalValue);
                            }
                        }
                    }
                }
                return this;
            },
            removeClass: function(value) {
                var classes, elem, cur, curValue, clazz, j, finalValue, i = 0;
                if (jQuery.isFunction(value)) {
                    return this.each(function(j) {
                        jQuery(this).removeClass(value.call(this, j, getClass(this)));
                    });
                }
                if (!arguments.length) {
                    return this.attr("class", "");
                }
                if (typeof value === "string" && value) {
                    classes = value.match(rnothtmlwhite) || [];
                    while (elem = this[i++]) {
                        curValue = getClass(elem);
                        cur = elem.nodeType === 1 && " " + stripAndCollapse(curValue) + " ";
                        if (cur) {
                            j = 0;
                            while (clazz = classes[j++]) {
                                while (cur.indexOf(" " + clazz + " ") > -1) {
                                    cur = cur.replace(" " + clazz + " ", " ");
                                }
                            }
                            finalValue = stripAndCollapse(cur);
                            if (curValue !== finalValue) {
                                elem.setAttribute("class", finalValue);
                            }
                        }
                    }
                }
                return this;
            },
            toggleClass: function(value, stateVal) {
                var type = typeof value;
                if (typeof stateVal === "boolean" && type === "string") {
                    return stateVal ? this.addClass(value) : this.removeClass(value);
                }
                if (jQuery.isFunction(value)) {
                    return this.each(function(i) {
                        jQuery(this).toggleClass(value.call(this, i, getClass(this), stateVal), stateVal);
                    });
                }
                return this.each(function() {
                    var className, i, self, classNames;
                    if (type === "string") {
                        i = 0;
                        self = jQuery(this);
                        classNames = value.match(rnothtmlwhite) || [];
                        while (className = classNames[i++]) {
                            if (self.hasClass(className)) {
                                self.removeClass(className);
                            } else {
                                self.addClass(className);
                            }
                        }
                    } else if (value === undefined || type === "boolean") {
                        className = getClass(this);
                        if (className) {
                            dataPriv.set(this, "__className__", className);
                        }
                        if (this.setAttribute) {
                            this.setAttribute("class", className || value === false ? "" : dataPriv.get(this, "__className__") || "");
                        }
                    }
                });
            },
            hasClass: function(selector) {
                var className, elem, i = 0;
                className = " " + selector + " ";
                while (elem = this[i++]) {
                    if (elem.nodeType === 1 && (" " + stripAndCollapse(getClass(elem)) + " ").indexOf(className) > -1) {
                        return true;
                    }
                }
                return false;
            }
        });
        var rreturn = /\r/g;
        jQuery.fn.extend({
            val: function(value) {
                var hooks, ret, isFunction, elem = this[0];
                if (!arguments.length) {
                    if (elem) {
                        hooks = jQuery.valHooks[elem.type] || jQuery.valHooks[elem.nodeName.toLowerCase()];
                        if (hooks && "get" in hooks && (ret = hooks.get(elem, "value")) !== undefined) {
                            return ret;
                        }
                        ret = elem.value;
                        if (typeof ret === "string") {
                            return ret.replace(rreturn, "");
                        }
                        return ret == null ? "" : ret;
                    }
                    return;
                }
                isFunction = jQuery.isFunction(value);
                return this.each(function(i) {
                    var val;
                    if (this.nodeType !== 1) {
                        return;
                    }
                    if (isFunction) {
                        val = value.call(this, i, jQuery(this).val());
                    } else {
                        val = value;
                    }
                    if (val == null) {
                        val = "";
                    } else if (typeof val === "number") {
                        val += "";
                    } else if (Array.isArray(val)) {
                        val = jQuery.map(val, function(value) {
                            return value == null ? "" : value + "";
                        });
                    }
                    hooks = jQuery.valHooks[this.type] || jQuery.valHooks[this.nodeName.toLowerCase()];
                    if (!hooks || !("set" in hooks) || hooks.set(this, val, "value") === undefined) {
                        this.value = val;
                    }
                });
            }
        });
        jQuery.extend({
            valHooks: {
                option: {
                    get: function(elem) {
                        var val = jQuery.find.attr(elem, "value");
                        return val != null ? val : stripAndCollapse(jQuery.text(elem));
                    }
                },
                select: {
                    get: function(elem) {
                        var value, option, i, options = elem.options, index = elem.selectedIndex, one = elem.type === "select-one", values = one ? null : [], max = one ? index + 1 : options.length;
                        if (index < 0) {
                            i = max;
                        } else {
                            i = one ? index : 0;
                        }
                        for (;i < max; i++) {
                            option = options[i];
                            if ((option.selected || i === index) && !option.disabled && (!option.parentNode.disabled || !nodeName(option.parentNode, "optgroup"))) {
                                value = jQuery(option).val();
                                if (one) {
                                    return value;
                                }
                                values.push(value);
                            }
                        }
                        return values;
                    },
                    set: function(elem, value) {
                        var optionSet, option, options = elem.options, values = jQuery.makeArray(value), i = options.length;
                        while (i--) {
                            option = options[i];
                            if (option.selected = jQuery.inArray(jQuery.valHooks.option.get(option), values) > -1) {
                                optionSet = true;
                            }
                        }
                        if (!optionSet) {
                            elem.selectedIndex = -1;
                        }
                        return values;
                    }
                }
            }
        });
        jQuery.each([ "radio", "checkbox" ], function() {
            jQuery.valHooks[this] = {
                set: function(elem, value) {
                    if (Array.isArray(value)) {
                        return elem.checked = jQuery.inArray(jQuery(elem).val(), value) > -1;
                    }
                }
            };
            if (!support.checkOn) {
                jQuery.valHooks[this].get = function(elem) {
                    return elem.getAttribute("value") === null ? "on" : elem.value;
                };
            }
        });
        var rfocusMorph = /^(?:focusinfocus|focusoutblur)$/;
        jQuery.extend(jQuery.event, {
            trigger: function(event, data, elem, onlyHandlers) {
                var i, cur, tmp, bubbleType, ontype, handle, special, eventPath = [ elem || document ], type = hasOwn.call(event, "type") ? event.type : event, namespaces = hasOwn.call(event, "namespace") ? event.namespace.split(".") : [];
                cur = tmp = elem = elem || document;
                if (elem.nodeType === 3 || elem.nodeType === 8) {
                    return;
                }
                if (rfocusMorph.test(type + jQuery.event.triggered)) {
                    return;
                }
                if (type.indexOf(".") > -1) {
                    namespaces = type.split(".");
                    type = namespaces.shift();
                    namespaces.sort();
                }
                ontype = type.indexOf(":") < 0 && "on" + type;
                event = event[jQuery.expando] ? event : new jQuery.Event(type, typeof event === "object" && event);
                event.isTrigger = onlyHandlers ? 2 : 3;
                event.namespace = namespaces.join(".");
                event.rnamespace = event.namespace ? new RegExp("(^|\\.)" + namespaces.join("\\.(?:.*\\.|)") + "(\\.|$)") : null;
                event.result = undefined;
                if (!event.target) {
                    event.target = elem;
                }
                data = data == null ? [ event ] : jQuery.makeArray(data, [ event ]);
                special = jQuery.event.special[type] || {};
                if (!onlyHandlers && special.trigger && special.trigger.apply(elem, data) === false) {
                    return;
                }
                if (!onlyHandlers && !special.noBubble && !jQuery.isWindow(elem)) {
                    bubbleType = special.delegateType || type;
                    if (!rfocusMorph.test(bubbleType + type)) {
                        cur = cur.parentNode;
                    }
                    for (;cur; cur = cur.parentNode) {
                        eventPath.push(cur);
                        tmp = cur;
                    }
                    if (tmp === (elem.ownerDocument || document)) {
                        eventPath.push(tmp.defaultView || tmp.parentWindow || window);
                    }
                }
                i = 0;
                while ((cur = eventPath[i++]) && !event.isPropagationStopped()) {
                    event.type = i > 1 ? bubbleType : special.bindType || type;
                    handle = (dataPriv.get(cur, "events") || {})[event.type] && dataPriv.get(cur, "handle");
                    if (handle) {
                        handle.apply(cur, data);
                    }
                    handle = ontype && cur[ontype];
                    if (handle && handle.apply && acceptData(cur)) {
                        event.result = handle.apply(cur, data);
                        if (event.result === false) {
                            event.preventDefault();
                        }
                    }
                }
                event.type = type;
                if (!onlyHandlers && !event.isDefaultPrevented()) {
                    if ((!special._default || special._default.apply(eventPath.pop(), data) === false) && acceptData(elem)) {
                        if (ontype && jQuery.isFunction(elem[type]) && !jQuery.isWindow(elem)) {
                            tmp = elem[ontype];
                            if (tmp) {
                                elem[ontype] = null;
                            }
                            jQuery.event.triggered = type;
                            elem[type]();
                            jQuery.event.triggered = undefined;
                            if (tmp) {
                                elem[ontype] = tmp;
                            }
                        }
                    }
                }
                return event.result;
            },
            simulate: function(type, elem, event) {
                var e = jQuery.extend(new jQuery.Event(), event, {
                    type: type,
                    isSimulated: true
                });
                jQuery.event.trigger(e, null, elem);
            }
        });
        jQuery.fn.extend({
            trigger: function(type, data) {
                return this.each(function() {
                    jQuery.event.trigger(type, data, this);
                });
            },
            triggerHandler: function(type, data) {
                var elem = this[0];
                if (elem) {
                    return jQuery.event.trigger(type, data, elem, true);
                }
            }
        });
        jQuery.each(("blur focus focusin focusout resize scroll click dblclick " + "mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave " + "change select submit keydown keypress keyup contextmenu").split(" "), function(i, name) {
            jQuery.fn[name] = function(data, fn) {
                return arguments.length > 0 ? this.on(name, null, data, fn) : this.trigger(name);
            };
        });
        jQuery.fn.extend({
            hover: function(fnOver, fnOut) {
                return this.mouseenter(fnOver).mouseleave(fnOut || fnOver);
            }
        });
        support.focusin = "onfocusin" in window;
        if (!support.focusin) {
            jQuery.each({
                focus: "focusin",
                blur: "focusout"
            }, function(orig, fix) {
                var handler = function(event) {
                    jQuery.event.simulate(fix, event.target, jQuery.event.fix(event));
                };
                jQuery.event.special[fix] = {
                    setup: function() {
                        var doc = this.ownerDocument || this, attaches = dataPriv.access(doc, fix);
                        if (!attaches) {
                            doc.addEventListener(orig, handler, true);
                        }
                        dataPriv.access(doc, fix, (attaches || 0) + 1);
                    },
                    teardown: function() {
                        var doc = this.ownerDocument || this, attaches = dataPriv.access(doc, fix) - 1;
                        if (!attaches) {
                            doc.removeEventListener(orig, handler, true);
                            dataPriv.remove(doc, fix);
                        } else {
                            dataPriv.access(doc, fix, attaches);
                        }
                    }
                };
            });
        }
        var location = window.location;
        var nonce = jQuery.now();
        var rquery = /\?/;
        jQuery.parseXML = function(data) {
            var xml;
            if (!data || typeof data !== "string") {
                return null;
            }
            try {
                xml = new window.DOMParser().parseFromString(data, "text/xml");
            } catch (e) {
                xml = undefined;
            }
            if (!xml || xml.getElementsByTagName("parsererror").length) {
                jQuery.error("Invalid XML: " + data);
            }
            return xml;
        };
        var rbracket = /\[\]$/, rCRLF = /\r?\n/g, rsubmitterTypes = /^(?:submit|button|image|reset|file)$/i, rsubmittable = /^(?:input|select|textarea|keygen)/i;
        function buildParams(prefix, obj, traditional, add) {
            var name;
            if (Array.isArray(obj)) {
                jQuery.each(obj, function(i, v) {
                    if (traditional || rbracket.test(prefix)) {
                        add(prefix, v);
                    } else {
                        buildParams(prefix + "[" + (typeof v === "object" && v != null ? i : "") + "]", v, traditional, add);
                    }
                });
            } else if (!traditional && jQuery.type(obj) === "object") {
                for (name in obj) {
                    buildParams(prefix + "[" + name + "]", obj[name], traditional, add);
                }
            } else {
                add(prefix, obj);
            }
        }
        jQuery.param = function(a, traditional) {
            var prefix, s = [], add = function(key, valueOrFunction) {
                var value = jQuery.isFunction(valueOrFunction) ? valueOrFunction() : valueOrFunction;
                s[s.length] = encodeURIComponent(key) + "=" + encodeURIComponent(value == null ? "" : value);
            };
            if (Array.isArray(a) || a.jquery && !jQuery.isPlainObject(a)) {
                jQuery.each(a, function() {
                    add(this.name, this.value);
                });
            } else {
                for (prefix in a) {
                    buildParams(prefix, a[prefix], traditional, add);
                }
            }
            return s.join("&");
        };
        jQuery.fn.extend({
            serialize: function() {
                return jQuery.param(this.serializeArray());
            },
            serializeArray: function() {
                return this.map(function() {
                    var elements = jQuery.prop(this, "elements");
                    return elements ? jQuery.makeArray(elements) : this;
                }).filter(function() {
                    var type = this.type;
                    return this.name && !jQuery(this).is(":disabled") && rsubmittable.test(this.nodeName) && !rsubmitterTypes.test(type) && (this.checked || !rcheckableType.test(type));
                }).map(function(i, elem) {
                    var val = jQuery(this).val();
                    if (val == null) {
                        return null;
                    }
                    if (Array.isArray(val)) {
                        return jQuery.map(val, function(val) {
                            return {
                                name: elem.name,
                                value: val.replace(rCRLF, "\r\n")
                            };
                        });
                    }
                    return {
                        name: elem.name,
                        value: val.replace(rCRLF, "\r\n")
                    };
                }).get();
            }
        });
        var r20 = /%20/g, rhash = /#.*$/, rantiCache = /([?&])_=[^&]*/, rheaders = /^(.*?):[ \t]*([^\r\n]*)$/gm, rlocalProtocol = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/, rnoContent = /^(?:GET|HEAD)$/, rprotocol = /^\/\//, prefilters = {}, transports = {}, allTypes = "*/".concat("*"), originAnchor = document.createElement("a");
        originAnchor.href = location.href;
        function addToPrefiltersOrTransports(structure) {
            return function(dataTypeExpression, func) {
                if (typeof dataTypeExpression !== "string") {
                    func = dataTypeExpression;
                    dataTypeExpression = "*";
                }
                var dataType, i = 0, dataTypes = dataTypeExpression.toLowerCase().match(rnothtmlwhite) || [];
                if (jQuery.isFunction(func)) {
                    while (dataType = dataTypes[i++]) {
                        if (dataType[0] === "+") {
                            dataType = dataType.slice(1) || "*";
                            (structure[dataType] = structure[dataType] || []).unshift(func);
                        } else {
                            (structure[dataType] = structure[dataType] || []).push(func);
                        }
                    }
                }
            };
        }
        function inspectPrefiltersOrTransports(structure, options, originalOptions, jqXHR) {
            var inspected = {}, seekingTransport = structure === transports;
            function inspect(dataType) {
                var selected;
                inspected[dataType] = true;
                jQuery.each(structure[dataType] || [], function(_, prefilterOrFactory) {
                    var dataTypeOrTransport = prefilterOrFactory(options, originalOptions, jqXHR);
                    if (typeof dataTypeOrTransport === "string" && !seekingTransport && !inspected[dataTypeOrTransport]) {
                        options.dataTypes.unshift(dataTypeOrTransport);
                        inspect(dataTypeOrTransport);
                        return false;
                    } else if (seekingTransport) {
                        return !(selected = dataTypeOrTransport);
                    }
                });
                return selected;
            }
            return inspect(options.dataTypes[0]) || !inspected["*"] && inspect("*");
        }
        function ajaxExtend(target, src) {
            var key, deep, flatOptions = jQuery.ajaxSettings.flatOptions || {};
            for (key in src) {
                if (src[key] !== undefined) {
                    (flatOptions[key] ? target : deep || (deep = {}))[key] = src[key];
                }
            }
            if (deep) {
                jQuery.extend(true, target, deep);
            }
            return target;
        }
        function ajaxHandleResponses(s, jqXHR, responses) {
            var ct, type, finalDataType, firstDataType, contents = s.contents, dataTypes = s.dataTypes;
            while (dataTypes[0] === "*") {
                dataTypes.shift();
                if (ct === undefined) {
                    ct = s.mimeType || jqXHR.getResponseHeader("Content-Type");
                }
            }
            if (ct) {
                for (type in contents) {
                    if (contents[type] && contents[type].test(ct)) {
                        dataTypes.unshift(type);
                        break;
                    }
                }
            }
            if (dataTypes[0] in responses) {
                finalDataType = dataTypes[0];
            } else {
                for (type in responses) {
                    if (!dataTypes[0] || s.converters[type + " " + dataTypes[0]]) {
                        finalDataType = type;
                        break;
                    }
                    if (!firstDataType) {
                        firstDataType = type;
                    }
                }
                finalDataType = finalDataType || firstDataType;
            }
            if (finalDataType) {
                if (finalDataType !== dataTypes[0]) {
                    dataTypes.unshift(finalDataType);
                }
                return responses[finalDataType];
            }
        }
        function ajaxConvert(s, response, jqXHR, isSuccess) {
            var conv2, current, conv, tmp, prev, converters = {}, dataTypes = s.dataTypes.slice();
            if (dataTypes[1]) {
                for (conv in s.converters) {
                    converters[conv.toLowerCase()] = s.converters[conv];
                }
            }
            current = dataTypes.shift();
            while (current) {
                if (s.responseFields[current]) {
                    jqXHR[s.responseFields[current]] = response;
                }
                if (!prev && isSuccess && s.dataFilter) {
                    response = s.dataFilter(response, s.dataType);
                }
                prev = current;
                current = dataTypes.shift();
                if (current) {
                    if (current === "*") {
                        current = prev;
                    } else if (prev !== "*" && prev !== current) {
                        conv = converters[prev + " " + current] || converters["* " + current];
                        if (!conv) {
                            for (conv2 in converters) {
                                tmp = conv2.split(" ");
                                if (tmp[1] === current) {
                                    conv = converters[prev + " " + tmp[0]] || converters["* " + tmp[0]];
                                    if (conv) {
                                        if (conv === true) {
                                            conv = converters[conv2];
                                        } else if (converters[conv2] !== true) {
                                            current = tmp[0];
                                            dataTypes.unshift(tmp[1]);
                                        }
                                        break;
                                    }
                                }
                            }
                        }
                        if (conv !== true) {
                            if (conv && s.throws) {
                                response = conv(response);
                            } else {
                                try {
                                    response = conv(response);
                                } catch (e) {
                                    return {
                                        state: "parsererror",
                                        error: conv ? e : "No conversion from " + prev + " to " + current
                                    };
                                }
                            }
                        }
                    }
                }
            }
            return {
                state: "success",
                data: response
            };
        }
        jQuery.extend({
            active: 0,
            lastModified: {},
            etag: {},
            ajaxSettings: {
                url: location.href,
                type: "GET",
                isLocal: rlocalProtocol.test(location.protocol),
                global: true,
                processData: true,
                async: true,
                contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                accepts: {
                    "*": allTypes,
                    text: "text/plain",
                    html: "text/html",
                    xml: "application/xml, text/xml",
                    json: "application/json, text/javascript"
                },
                contents: {
                    xml: /\bxml\b/,
                    html: /\bhtml/,
                    json: /\bjson\b/
                },
                responseFields: {
                    xml: "responseXML",
                    text: "responseText",
                    json: "responseJSON"
                },
                converters: {
                    "* text": String,
                    "text html": true,
                    "text json": JSON.parse,
                    "text xml": jQuery.parseXML
                },
                flatOptions: {
                    url: true,
                    context: true
                }
            },
            ajaxSetup: function(target, settings) {
                return settings ? ajaxExtend(ajaxExtend(target, jQuery.ajaxSettings), settings) : ajaxExtend(jQuery.ajaxSettings, target);
            },
            ajaxPrefilter: addToPrefiltersOrTransports(prefilters),
            ajaxTransport: addToPrefiltersOrTransports(transports),
            ajax: function(url, options) {
                if (typeof url === "object") {
                    options = url;
                    url = undefined;
                }
                options = options || {};
                var transport, cacheURL, responseHeadersString, responseHeaders, timeoutTimer, urlAnchor, completed, fireGlobals, i, uncached, s = jQuery.ajaxSetup({}, options), callbackContext = s.context || s, globalEventContext = s.context && (callbackContext.nodeType || callbackContext.jquery) ? jQuery(callbackContext) : jQuery.event, deferred = jQuery.Deferred(), completeDeferred = jQuery.Callbacks("once memory"), statusCode = s.statusCode || {}, requestHeaders = {}, requestHeadersNames = {}, strAbort = "canceled", jqXHR = {
                    readyState: 0,
                    getResponseHeader: function(key) {
                        var match;
                        if (completed) {
                            if (!responseHeaders) {
                                responseHeaders = {};
                                while (match = rheaders.exec(responseHeadersString)) {
                                    responseHeaders[match[1].toLowerCase()] = match[2];
                                }
                            }
                            match = responseHeaders[key.toLowerCase()];
                        }
                        return match == null ? null : match;
                    },
                    getAllResponseHeaders: function() {
                        return completed ? responseHeadersString : null;
                    },
                    setRequestHeader: function(name, value) {
                        if (completed == null) {
                            name = requestHeadersNames[name.toLowerCase()] = requestHeadersNames[name.toLowerCase()] || name;
                            requestHeaders[name] = value;
                        }
                        return this;
                    },
                    overrideMimeType: function(type) {
                        if (completed == null) {
                            s.mimeType = type;
                        }
                        return this;
                    },
                    statusCode: function(map) {
                        var code;
                        if (map) {
                            if (completed) {
                                jqXHR.always(map[jqXHR.status]);
                            } else {
                                for (code in map) {
                                    statusCode[code] = [ statusCode[code], map[code] ];
                                }
                            }
                        }
                        return this;
                    },
                    abort: function(statusText) {
                        var finalText = statusText || strAbort;
                        if (transport) {
                            transport.abort(finalText);
                        }
                        done(0, finalText);
                        return this;
                    }
                };
                deferred.promise(jqXHR);
                s.url = ((url || s.url || location.href) + "").replace(rprotocol, location.protocol + "//");
                s.type = options.method || options.type || s.method || s.type;
                s.dataTypes = (s.dataType || "*").toLowerCase().match(rnothtmlwhite) || [ "" ];
                if (s.crossDomain == null) {
                    urlAnchor = document.createElement("a");
                    try {
                        urlAnchor.href = s.url;
                        urlAnchor.href = urlAnchor.href;
                        s.crossDomain = originAnchor.protocol + "//" + originAnchor.host !== urlAnchor.protocol + "//" + urlAnchor.host;
                    } catch (e) {
                        s.crossDomain = true;
                    }
                }
                if (s.data && s.processData && typeof s.data !== "string") {
                    s.data = jQuery.param(s.data, s.traditional);
                }
                inspectPrefiltersOrTransports(prefilters, s, options, jqXHR);
                if (completed) {
                    return jqXHR;
                }
                fireGlobals = jQuery.event && s.global;
                if (fireGlobals && jQuery.active++ === 0) {
                    jQuery.event.trigger("ajaxStart");
                }
                s.type = s.type.toUpperCase();
                s.hasContent = !rnoContent.test(s.type);
                cacheURL = s.url.replace(rhash, "");
                if (!s.hasContent) {
                    uncached = s.url.slice(cacheURL.length);
                    if (s.data) {
                        cacheURL += (rquery.test(cacheURL) ? "&" : "?") + s.data;
                        delete s.data;
                    }
                    if (s.cache === false) {
                        cacheURL = cacheURL.replace(rantiCache, "$1");
                        uncached = (rquery.test(cacheURL) ? "&" : "?") + "_=" + nonce++ + uncached;
                    }
                    s.url = cacheURL + uncached;
                } else if (s.data && s.processData && (s.contentType || "").indexOf("application/x-www-form-urlencoded") === 0) {
                    s.data = s.data.replace(r20, "+");
                }
                if (s.ifModified) {
                    if (jQuery.lastModified[cacheURL]) {
                        jqXHR.setRequestHeader("If-Modified-Since", jQuery.lastModified[cacheURL]);
                    }
                    if (jQuery.etag[cacheURL]) {
                        jqXHR.setRequestHeader("If-None-Match", jQuery.etag[cacheURL]);
                    }
                }
                if (s.data && s.hasContent && s.contentType !== false || options.contentType) {
                    jqXHR.setRequestHeader("Content-Type", s.contentType);
                }
                jqXHR.setRequestHeader("Accept", s.dataTypes[0] && s.accepts[s.dataTypes[0]] ? s.accepts[s.dataTypes[0]] + (s.dataTypes[0] !== "*" ? ", " + allTypes + "; q=0.01" : "") : s.accepts["*"]);
                for (i in s.headers) {
                    jqXHR.setRequestHeader(i, s.headers[i]);
                }
                if (s.beforeSend && (s.beforeSend.call(callbackContext, jqXHR, s) === false || completed)) {
                    return jqXHR.abort();
                }
                strAbort = "abort";
                completeDeferred.add(s.complete);
                jqXHR.done(s.success);
                jqXHR.fail(s.error);
                transport = inspectPrefiltersOrTransports(transports, s, options, jqXHR);
                if (!transport) {
                    done(-1, "No Transport");
                } else {
                    jqXHR.readyState = 1;
                    if (fireGlobals) {
                        globalEventContext.trigger("ajaxSend", [ jqXHR, s ]);
                    }
                    if (completed) {
                        return jqXHR;
                    }
                    if (s.async && s.timeout > 0) {
                        timeoutTimer = window.setTimeout(function() {
                            jqXHR.abort("timeout");
                        }, s.timeout);
                    }
                    try {
                        completed = false;
                        transport.send(requestHeaders, done);
                    } catch (e) {
                        if (completed) {
                            throw e;
                        }
                        done(-1, e);
                    }
                }
                function done(status, nativeStatusText, responses, headers) {
                    var isSuccess, success, error, response, modified, statusText = nativeStatusText;
                    if (completed) {
                        return;
                    }
                    completed = true;
                    if (timeoutTimer) {
                        window.clearTimeout(timeoutTimer);
                    }
                    transport = undefined;
                    responseHeadersString = headers || "";
                    jqXHR.readyState = status > 0 ? 4 : 0;
                    isSuccess = status >= 200 && status < 300 || status === 304;
                    if (responses) {
                        response = ajaxHandleResponses(s, jqXHR, responses);
                    }
                    response = ajaxConvert(s, response, jqXHR, isSuccess);
                    if (isSuccess) {
                        if (s.ifModified) {
                            modified = jqXHR.getResponseHeader("Last-Modified");
                            if (modified) {
                                jQuery.lastModified[cacheURL] = modified;
                            }
                            modified = jqXHR.getResponseHeader("etag");
                            if (modified) {
                                jQuery.etag[cacheURL] = modified;
                            }
                        }
                        if (status === 204 || s.type === "HEAD") {
                            statusText = "nocontent";
                        } else if (status === 304) {
                            statusText = "notmodified";
                        } else {
                            statusText = response.state;
                            success = response.data;
                            error = response.error;
                            isSuccess = !error;
                        }
                    } else {
                        error = statusText;
                        if (status || !statusText) {
                            statusText = "error";
                            if (status < 0) {
                                status = 0;
                            }
                        }
                    }
                    jqXHR.status = status;
                    jqXHR.statusText = (nativeStatusText || statusText) + "";
                    if (isSuccess) {
                        deferred.resolveWith(callbackContext, [ success, statusText, jqXHR ]);
                    } else {
                        deferred.rejectWith(callbackContext, [ jqXHR, statusText, error ]);
                    }
                    jqXHR.statusCode(statusCode);
                    statusCode = undefined;
                    if (fireGlobals) {
                        globalEventContext.trigger(isSuccess ? "ajaxSuccess" : "ajaxError", [ jqXHR, s, isSuccess ? success : error ]);
                    }
                    completeDeferred.fireWith(callbackContext, [ jqXHR, statusText ]);
                    if (fireGlobals) {
                        globalEventContext.trigger("ajaxComplete", [ jqXHR, s ]);
                        if (!--jQuery.active) {
                            jQuery.event.trigger("ajaxStop");
                        }
                    }
                }
                return jqXHR;
            },
            getJSON: function(url, data, callback) {
                return jQuery.get(url, data, callback, "json");
            },
            getScript: function(url, callback) {
                return jQuery.get(url, undefined, callback, "script");
            }
        });
        jQuery.each([ "get", "post" ], function(i, method) {
            jQuery[method] = function(url, data, callback, type) {
                if (jQuery.isFunction(data)) {
                    type = type || callback;
                    callback = data;
                    data = undefined;
                }
                return jQuery.ajax(jQuery.extend({
                    url: url,
                    type: method,
                    dataType: type,
                    data: data,
                    success: callback
                }, jQuery.isPlainObject(url) && url));
            };
        });
        jQuery._evalUrl = function(url) {
            return jQuery.ajax({
                url: url,
                type: "GET",
                dataType: "script",
                cache: true,
                async: false,
                global: false,
                throws: true
            });
        };
        jQuery.fn.extend({
            wrapAll: function(html) {
                var wrap;
                if (this[0]) {
                    if (jQuery.isFunction(html)) {
                        html = html.call(this[0]);
                    }
                    wrap = jQuery(html, this[0].ownerDocument).eq(0).clone(true);
                    if (this[0].parentNode) {
                        wrap.insertBefore(this[0]);
                    }
                    wrap.map(function() {
                        var elem = this;
                        while (elem.firstElementChild) {
                            elem = elem.firstElementChild;
                        }
                        return elem;
                    }).append(this);
                }
                return this;
            },
            wrapInner: function(html) {
                if (jQuery.isFunction(html)) {
                    return this.each(function(i) {
                        jQuery(this).wrapInner(html.call(this, i));
                    });
                }
                return this.each(function() {
                    var self = jQuery(this), contents = self.contents();
                    if (contents.length) {
                        contents.wrapAll(html);
                    } else {
                        self.append(html);
                    }
                });
            },
            wrap: function(html) {
                var isFunction = jQuery.isFunction(html);
                return this.each(function(i) {
                    jQuery(this).wrapAll(isFunction ? html.call(this, i) : html);
                });
            },
            unwrap: function(selector) {
                this.parent(selector).not("body").each(function() {
                    jQuery(this).replaceWith(this.childNodes);
                });
                return this;
            }
        });
        jQuery.expr.pseudos.hidden = function(elem) {
            return !jQuery.expr.pseudos.visible(elem);
        };
        jQuery.expr.pseudos.visible = function(elem) {
            return !!(elem.offsetWidth || elem.offsetHeight || elem.getClientRects().length);
        };
        jQuery.ajaxSettings.xhr = function() {
            try {
                return new window.XMLHttpRequest();
            } catch (e) {}
        };
        var xhrSuccessStatus = {
            0: 200,
            1223: 204
        }, xhrSupported = jQuery.ajaxSettings.xhr();
        support.cors = !!xhrSupported && "withCredentials" in xhrSupported;
        support.ajax = xhrSupported = !!xhrSupported;
        jQuery.ajaxTransport(function(options) {
            var callback, errorCallback;
            if (support.cors || xhrSupported && !options.crossDomain) {
                return {
                    send: function(headers, complete) {
                        var i, xhr = options.xhr();
                        xhr.open(options.type, options.url, options.async, options.username, options.password);
                        if (options.xhrFields) {
                            for (i in options.xhrFields) {
                                xhr[i] = options.xhrFields[i];
                            }
                        }
                        if (options.mimeType && xhr.overrideMimeType) {
                            xhr.overrideMimeType(options.mimeType);
                        }
                        if (!options.crossDomain && !headers["X-Requested-With"]) {
                            headers["X-Requested-With"] = "XMLHttpRequest";
                        }
                        for (i in headers) {
                            xhr.setRequestHeader(i, headers[i]);
                        }
                        callback = function(type) {
                            return function() {
                                if (callback) {
                                    callback = errorCallback = xhr.onload = xhr.onerror = xhr.onabort = xhr.onreadystatechange = null;
                                    if (type === "abort") {
                                        xhr.abort();
                                    } else if (type === "error") {
                                        if (typeof xhr.status !== "number") {
                                            complete(0, "error");
                                        } else {
                                            complete(xhr.status, xhr.statusText);
                                        }
                                    } else {
                                        complete(xhrSuccessStatus[xhr.status] || xhr.status, xhr.statusText, (xhr.responseType || "text") !== "text" || typeof xhr.responseText !== "string" ? {
                                            binary: xhr.response
                                        } : {
                                            text: xhr.responseText
                                        }, xhr.getAllResponseHeaders());
                                    }
                                }
                            };
                        };
                        xhr.onload = callback();
                        errorCallback = xhr.onerror = callback("error");
                        if (xhr.onabort !== undefined) {
                            xhr.onabort = errorCallback;
                        } else {
                            xhr.onreadystatechange = function() {
                                if (xhr.readyState === 4) {
                                    window.setTimeout(function() {
                                        if (callback) {
                                            errorCallback();
                                        }
                                    });
                                }
                            };
                        }
                        callback = callback("abort");
                        try {
                            xhr.send(options.hasContent && options.data || null);
                        } catch (e) {
                            if (callback) {
                                throw e;
                            }
                        }
                    },
                    abort: function() {
                        if (callback) {
                            callback();
                        }
                    }
                };
            }
        });
        jQuery.ajaxPrefilter(function(s) {
            if (s.crossDomain) {
                s.contents.script = false;
            }
        });
        jQuery.ajaxSetup({
            accepts: {
                script: "text/javascript, application/javascript, " + "application/ecmascript, application/x-ecmascript"
            },
            contents: {
                script: /\b(?:java|ecma)script\b/
            },
            converters: {
                "text script": function(text) {
                    jQuery.globalEval(text);
                    return text;
                }
            }
        });
        jQuery.ajaxPrefilter("script", function(s) {
            if (s.cache === undefined) {
                s.cache = false;
            }
            if (s.crossDomain) {
                s.type = "GET";
            }
        });
        jQuery.ajaxTransport("script", function(s) {
            if (s.crossDomain) {
                var script, callback;
                return {
                    send: function(_, complete) {
                        script = jQuery("<script>").prop({
                            charset: s.scriptCharset,
                            src: s.url
                        }).on("load error", callback = function(evt) {
                            script.remove();
                            callback = null;
                            if (evt) {
                                complete(evt.type === "error" ? 404 : 200, evt.type);
                            }
                        });
                        document.head.appendChild(script[0]);
                    },
                    abort: function() {
                        if (callback) {
                            callback();
                        }
                    }
                };
            }
        });
        var oldCallbacks = [], rjsonp = /(=)\?(?=&|$)|\?\?/;
        jQuery.ajaxSetup({
            jsonp: "callback",
            jsonpCallback: function() {
                var callback = oldCallbacks.pop() || jQuery.expando + "_" + nonce++;
                this[callback] = true;
                return callback;
            }
        });
        jQuery.ajaxPrefilter("json jsonp", function(s, originalSettings, jqXHR) {
            var callbackName, overwritten, responseContainer, jsonProp = s.jsonp !== false && (rjsonp.test(s.url) ? "url" : typeof s.data === "string" && (s.contentType || "").indexOf("application/x-www-form-urlencoded") === 0 && rjsonp.test(s.data) && "data");
            if (jsonProp || s.dataTypes[0] === "jsonp") {
                callbackName = s.jsonpCallback = jQuery.isFunction(s.jsonpCallback) ? s.jsonpCallback() : s.jsonpCallback;
                if (jsonProp) {
                    s[jsonProp] = s[jsonProp].replace(rjsonp, "$1" + callbackName);
                } else if (s.jsonp !== false) {
                    s.url += (rquery.test(s.url) ? "&" : "?") + s.jsonp + "=" + callbackName;
                }
                s.converters["script json"] = function() {
                    if (!responseContainer) {
                        jQuery.error(callbackName + " was not called");
                    }
                    return responseContainer[0];
                };
                s.dataTypes[0] = "json";
                overwritten = window[callbackName];
                window[callbackName] = function() {
                    responseContainer = arguments;
                };
                jqXHR.always(function() {
                    if (overwritten === undefined) {
                        jQuery(window).removeProp(callbackName);
                    } else {
                        window[callbackName] = overwritten;
                    }
                    if (s[callbackName]) {
                        s.jsonpCallback = originalSettings.jsonpCallback;
                        oldCallbacks.push(callbackName);
                    }
                    if (responseContainer && jQuery.isFunction(overwritten)) {
                        overwritten(responseContainer[0]);
                    }
                    responseContainer = overwritten = undefined;
                });
                return "script";
            }
        });
        support.createHTMLDocument = function() {
            var body = document.implementation.createHTMLDocument("").body;
            body.innerHTML = "<form></form><form></form>";
            return body.childNodes.length === 2;
        }();
        jQuery.parseHTML = function(data, context, keepScripts) {
            if (typeof data !== "string") {
                return [];
            }
            if (typeof context === "boolean") {
                keepScripts = context;
                context = false;
            }
            var base, parsed, scripts;
            if (!context) {
                if (support.createHTMLDocument) {
                    context = document.implementation.createHTMLDocument("");
                    base = context.createElement("base");
                    base.href = document.location.href;
                    context.head.appendChild(base);
                } else {
                    context = document;
                }
            }
            parsed = rsingleTag.exec(data);
            scripts = !keepScripts && [];
            if (parsed) {
                return [ context.createElement(parsed[1]) ];
            }
            parsed = buildFragment([ data ], context, scripts);
            if (scripts && scripts.length) {
                jQuery(scripts).remove();
            }
            return jQuery.merge([], parsed.childNodes);
        };
        jQuery.fn.load = function(url, params, callback) {
            var selector, type, response, self = this, off = url.indexOf(" ");
            if (off > -1) {
                selector = stripAndCollapse(url.slice(off));
                url = url.slice(0, off);
            }
            if (jQuery.isFunction(params)) {
                callback = params;
                params = undefined;
            } else if (params && typeof params === "object") {
                type = "POST";
            }
            if (self.length > 0) {
                jQuery.ajax({
                    url: url,
                    type: type || "GET",
                    dataType: "html",
                    data: params
                }).done(function(responseText) {
                    response = arguments;
                    self.html(selector ? jQuery("<div>").append(jQuery.parseHTML(responseText)).find(selector) : responseText);
                }).always(callback && function(jqXHR, status) {
                    self.each(function() {
                        callback.apply(this, response || [ jqXHR.responseText, status, jqXHR ]);
                    });
                });
            }
            return this;
        };
        jQuery.each([ "ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend" ], function(i, type) {
            jQuery.fn[type] = function(fn) {
                return this.on(type, fn);
            };
        });
        jQuery.expr.pseudos.animated = function(elem) {
            return jQuery.grep(jQuery.timers, function(fn) {
                return elem === fn.elem;
            }).length;
        };
        jQuery.offset = {
            setOffset: function(elem, options, i) {
                var curPosition, curLeft, curCSSTop, curTop, curOffset, curCSSLeft, calculatePosition, position = jQuery.css(elem, "position"), curElem = jQuery(elem), props = {};
                if (position === "static") {
                    elem.style.position = "relative";
                }
                curOffset = curElem.offset();
                curCSSTop = jQuery.css(elem, "top");
                curCSSLeft = jQuery.css(elem, "left");
                calculatePosition = (position === "absolute" || position === "fixed") && (curCSSTop + curCSSLeft).indexOf("auto") > -1;
                if (calculatePosition) {
                    curPosition = curElem.position();
                    curTop = curPosition.top;
                    curLeft = curPosition.left;
                } else {
                    curTop = parseFloat(curCSSTop) || 0;
                    curLeft = parseFloat(curCSSLeft) || 0;
                }
                if (jQuery.isFunction(options)) {
                    options = options.call(elem, i, jQuery.extend({}, curOffset));
                }
                if (options.top != null) {
                    props.top = options.top - curOffset.top + curTop;
                }
                if (options.left != null) {
                    props.left = options.left - curOffset.left + curLeft;
                }
                if ("using" in options) {
                    options.using.call(elem, props);
                } else {
                    curElem.css(props);
                }
            }
        };
        jQuery.fn.extend({
            offset: function(options) {
                if (arguments.length) {
                    return options === undefined ? this : this.each(function(i) {
                        jQuery.offset.setOffset(this, options, i);
                    });
                }
                var doc, docElem, rect, win, elem = this[0];
                if (!elem) {
                    return;
                }
                if (!elem.getClientRects().length) {
                    return {
                        top: 0,
                        left: 0
                    };
                }
                rect = elem.getBoundingClientRect();
                doc = elem.ownerDocument;
                docElem = doc.documentElement;
                win = doc.defaultView;
                return {
                    top: rect.top + win.pageYOffset - docElem.clientTop,
                    left: rect.left + win.pageXOffset - docElem.clientLeft
                };
            },
            position: function() {
                if (!this[0]) {
                    return;
                }
                var offsetParent, offset, elem = this[0], parentOffset = {
                    top: 0,
                    left: 0
                };
                if (jQuery.css(elem, "position") === "fixed") {
                    offset = elem.getBoundingClientRect();
                } else {
                    offsetParent = this.offsetParent();
                    offset = this.offset();
                    if (!nodeName(offsetParent[0], "html")) {
                        parentOffset = offsetParent.offset();
                    }
                    parentOffset = {
                        top: parentOffset.top + jQuery.css(offsetParent[0], "borderTopWidth", true),
                        left: parentOffset.left + jQuery.css(offsetParent[0], "borderLeftWidth", true)
                    };
                }
                return {
                    top: offset.top - parentOffset.top - jQuery.css(elem, "marginTop", true),
                    left: offset.left - parentOffset.left - jQuery.css(elem, "marginLeft", true)
                };
            },
            offsetParent: function() {
                return this.map(function() {
                    var offsetParent = this.offsetParent;
                    while (offsetParent && jQuery.css(offsetParent, "position") === "static") {
                        offsetParent = offsetParent.offsetParent;
                    }
                    return offsetParent || documentElement;
                });
            }
        });
        jQuery.each({
            scrollLeft: "pageXOffset",
            scrollTop: "pageYOffset"
        }, function(method, prop) {
            var top = "pageYOffset" === prop;
            jQuery.fn[method] = function(val) {
                return access(this, function(elem, method, val) {
                    var win;
                    if (jQuery.isWindow(elem)) {
                        win = elem;
                    } else if (elem.nodeType === 9) {
                        win = elem.defaultView;
                    }
                    if (val === undefined) {
                        return win ? win[prop] : elem[method];
                    }
                    if (win) {
                        win.scrollTo(!top ? val : win.pageXOffset, top ? val : win.pageYOffset);
                    } else {
                        elem[method] = val;
                    }
                }, method, val, arguments.length);
            };
        });
        jQuery.each([ "top", "left" ], function(i, prop) {
            jQuery.cssHooks[prop] = addGetHookIf(support.pixelPosition, function(elem, computed) {
                if (computed) {
                    computed = curCSS(elem, prop);
                    return rnumnonpx.test(computed) ? jQuery(elem).position()[prop] + "px" : computed;
                }
            });
        });
        jQuery.each({
            Height: "height",
            Width: "width"
        }, function(name, type) {
            jQuery.each({
                padding: "inner" + name,
                content: type,
                "": "outer" + name
            }, function(defaultExtra, funcName) {
                jQuery.fn[funcName] = function(margin, value) {
                    var chainable = arguments.length && (defaultExtra || typeof margin !== "boolean"), extra = defaultExtra || (margin === true || value === true ? "margin" : "border");
                    return access(this, function(elem, type, value) {
                        var doc;
                        if (jQuery.isWindow(elem)) {
                            return funcName.indexOf("outer") === 0 ? elem["inner" + name] : elem.document.documentElement["client" + name];
                        }
                        if (elem.nodeType === 9) {
                            doc = elem.documentElement;
                            return Math.max(elem.body["scroll" + name], doc["scroll" + name], elem.body["offset" + name], doc["offset" + name], doc["client" + name]);
                        }
                        return value === undefined ? jQuery.css(elem, type, extra) : jQuery.style(elem, type, value, extra);
                    }, type, chainable ? margin : undefined, chainable);
                };
            });
        });
        jQuery.fn.extend({
            bind: function(types, data, fn) {
                return this.on(types, null, data, fn);
            },
            unbind: function(types, fn) {
                return this.off(types, null, fn);
            },
            delegate: function(selector, types, data, fn) {
                return this.on(types, selector, data, fn);
            },
            undelegate: function(selector, types, fn) {
                return arguments.length === 1 ? this.off(selector, "**") : this.off(types, selector || "**", fn);
            }
        });
        jQuery.holdReady = function(hold) {
            if (hold) {
                jQuery.readyWait++;
            } else {
                jQuery.ready(true);
            }
        };
        jQuery.isArray = Array.isArray;
        jQuery.parseJSON = JSON.parse;
        jQuery.nodeName = nodeName;
        if (true) {
            !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function() {
                return jQuery;
            }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
        }
        var _jQuery = window.jQuery, _$ = window.$;
        jQuery.noConflict = function(deep) {
            if (window.$ === jQuery) {
                window.$ = _$;
            }
            if (deep && window.jQuery === jQuery) {
                window.jQuery = _jQuery;
            }
            return jQuery;
        };
        if (!noGlobal) {
            window.jQuery = window.$ = jQuery;
        }
        return jQuery;
    });
}, function(module, exports, __webpack_require__) {
    "use strict";
    var utils = __webpack_require__(0);
    var settle = __webpack_require__(68);
    var buildURL = __webpack_require__(71);
    var parseHeaders = __webpack_require__(77);
    var isURLSameOrigin = __webpack_require__(75);
    var createError = __webpack_require__(39);
    var btoa = typeof window !== "undefined" && window.btoa && window.btoa.bind(window) || __webpack_require__(70);
    module.exports = function xhrAdapter(config) {
        return new Promise(function dispatchXhrRequest(resolve, reject) {
            var requestData = config.data;
            var requestHeaders = config.headers;
            if (utils.isFormData(requestData)) {
                delete requestHeaders["Content-Type"];
            }
            var request = new XMLHttpRequest();
            var loadEvent = "onreadystatechange";
            var xDomain = false;
            if ("production" !== "test" && typeof window !== "undefined" && window.XDomainRequest && !("withCredentials" in request) && !isURLSameOrigin(config.url)) {
                request = new window.XDomainRequest();
                loadEvent = "onload";
                xDomain = true;
                request.onprogress = function handleProgress() {};
                request.ontimeout = function handleTimeout() {};
            }
            if (config.auth) {
                var username = config.auth.username || "";
                var password = config.auth.password || "";
                requestHeaders.Authorization = "Basic " + btoa(username + ":" + password);
            }
            request.open(config.method.toUpperCase(), buildURL(config.url, config.params, config.paramsSerializer), true);
            request.timeout = config.timeout;
            request[loadEvent] = function handleLoad() {
                if (!request || request.readyState !== 4 && !xDomain) {
                    return;
                }
                if (request.status === 0 && !(request.responseURL && request.responseURL.indexOf("file:") === 0)) {
                    return;
                }
                var responseHeaders = "getAllResponseHeaders" in request ? parseHeaders(request.getAllResponseHeaders()) : null;
                var responseData = !config.responseType || config.responseType === "text" ? request.responseText : request.response;
                var response = {
                    data: responseData,
                    status: request.status === 1223 ? 204 : request.status,
                    statusText: request.status === 1223 ? "No Content" : request.statusText,
                    headers: responseHeaders,
                    config: config,
                    request: request
                };
                settle(resolve, reject, response);
                request = null;
            };
            request.onerror = function handleError() {
                reject(createError("Network Error", config));
                request = null;
            };
            request.ontimeout = function handleTimeout() {
                reject(createError("timeout of " + config.timeout + "ms exceeded", config, "ECONNABORTED"));
                request = null;
            };
            if (utils.isStandardBrowserEnv()) {
                var cookies = __webpack_require__(73);
                var xsrfValue = (config.withCredentials || isURLSameOrigin(config.url)) && config.xsrfCookieName ? cookies.read(config.xsrfCookieName) : undefined;
                if (xsrfValue) {
                    requestHeaders[config.xsrfHeaderName] = xsrfValue;
                }
            }
            if ("setRequestHeader" in request) {
                utils.forEach(requestHeaders, function setRequestHeader(val, key) {
                    if (typeof requestData === "undefined" && key.toLowerCase() === "content-type") {
                        delete requestHeaders[key];
                    } else {
                        request.setRequestHeader(key, val);
                    }
                });
            }
            if (config.withCredentials) {
                request.withCredentials = true;
            }
            if (config.responseType) {
                try {
                    request.responseType = config.responseType;
                } catch (e) {
                    if (request.responseType !== "json") {
                        throw e;
                    }
                }
            }
            if (typeof config.onDownloadProgress === "function") {
                request.addEventListener("progress", config.onDownloadProgress);
            }
            if (typeof config.onUploadProgress === "function" && request.upload) {
                request.upload.addEventListener("progress", config.onUploadProgress);
            }
            if (config.cancelToken) {
                config.cancelToken.promise.then(function onCanceled(cancel) {
                    if (!request) {
                        return;
                    }
                    request.abort();
                    reject(cancel);
                    request = null;
                });
            }
            if (requestData === undefined) {
                requestData = null;
            }
            request.send(requestData);
        });
    };
}, function(module, exports, __webpack_require__) {
    "use strict";
    function Cancel(message) {
        this.message = message;
    }
    Cancel.prototype.toString = function toString() {
        return "Cancel" + (this.message ? ": " + this.message : "");
    };
    Cancel.prototype.__CANCEL__ = true;
    module.exports = Cancel;
}, function(module, exports, __webpack_require__) {
    "use strict";
    module.exports = function isCancel(value) {
        return !!(value && value.__CANCEL__);
    };
}, function(module, exports, __webpack_require__) {
    "use strict";
    var enhanceError = __webpack_require__(67);
    module.exports = function createError(message, config, code, response) {
        var error = new Error(message);
        return enhanceError(error, config, code, response);
    };
}, function(module, exports, __webpack_require__) {
    "use strict";
    module.exports = function bind(fn, thisArg) {
        return function wrap() {
            var args = new Array(arguments.length);
            for (var i = 0; i < args.length; i++) {
                args[i] = arguments[i];
            }
            return fn.apply(thisArg, args);
        };
    };
}, function(module, exports) {
    var toString = {}.toString;
    module.exports = function(it) {
        return toString.call(it).slice(8, -1);
    };
}, function(module, exports, __webpack_require__) {
    var isObject = __webpack_require__(13), document = __webpack_require__(1).document, is = isObject(document) && isObject(document.createElement);
    module.exports = function(it) {
        return is ? document.createElement(it) : {};
    };
}, function(module, exports, __webpack_require__) {
    var global = __webpack_require__(1), core = __webpack_require__(20), ctx = __webpack_require__(91), hide = __webpack_require__(5), PROTOTYPE = "prototype";
    var $export = function(type, name, source) {
        var IS_FORCED = type & $export.F, IS_GLOBAL = type & $export.G, IS_STATIC = type & $export.S, IS_PROTO = type & $export.P, IS_BIND = type & $export.B, IS_WRAP = type & $export.W, exports = IS_GLOBAL ? core : core[name] || (core[name] = {}), expProto = exports[PROTOTYPE], target = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE], key, own, out;
        if (IS_GLOBAL) source = name;
        for (key in source) {
            own = !IS_FORCED && target && target[key] !== undefined;
            if (own && key in exports) continue;
            out = own ? target[key] : source[key];
            exports[key] = IS_GLOBAL && typeof target[key] != "function" ? source[key] : IS_BIND && own ? ctx(out, global) : IS_WRAP && target[key] == out ? function(C) {
                var F = function(a, b, c) {
                    if (this instanceof C) {
                        switch (arguments.length) {
                          case 0:
                            return new C();

                          case 1:
                            return new C(a);

                          case 2:
                            return new C(a, b);
                        }
                        return new C(a, b, c);
                    }
                    return C.apply(this, arguments);
                };
                F[PROTOTYPE] = C[PROTOTYPE];
                return F;
            }(out) : IS_PROTO && typeof out == "function" ? ctx(Function.call, out) : out;
            if (IS_PROTO) {
                (exports.virtual || (exports.virtual = {}))[key] = out;
                if (type & $export.R && expProto && !expProto[key]) hide(expProto, key, out);
            }
        }
    };
    $export.F = 1;
    $export.G = 2;
    $export.S = 4;
    $export.P = 8;
    $export.B = 16;
    $export.W = 32;
    $export.U = 64;
    $export.R = 128;
    module.exports = $export;
}, function(module, exports, __webpack_require__) {
    module.exports = !__webpack_require__(4) && !__webpack_require__(12)(function() {
        return Object.defineProperty(__webpack_require__(42)("div"), "a", {
            get: function() {
                return 7;
            }
        }).a != 7;
    });
}, function(module, exports, __webpack_require__) {
    "use strict";
    var LIBRARY = __webpack_require__(24), $export = __webpack_require__(43), redefine = __webpack_require__(50), hide = __webpack_require__(5), has = __webpack_require__(2), Iterators = __webpack_require__(23), $iterCreate = __webpack_require__(96), setToStringTag = __webpack_require__(26), getPrototypeOf = __webpack_require__(103), ITERATOR = __webpack_require__(7)("iterator"), BUGGY = !([].keys && "next" in [].keys()), FF_ITERATOR = "@@iterator", KEYS = "keys", VALUES = "values";
    var returnThis = function() {
        return this;
    };
    module.exports = function(Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
        $iterCreate(Constructor, NAME, next);
        var getMethod = function(kind) {
            if (!BUGGY && kind in proto) return proto[kind];
            switch (kind) {
              case KEYS:
                return function keys() {
                    return new Constructor(this, kind);
                };

              case VALUES:
                return function values() {
                    return new Constructor(this, kind);
                };
            }
            return function entries() {
                return new Constructor(this, kind);
            };
        };
        var TAG = NAME + " Iterator", DEF_VALUES = DEFAULT == VALUES, VALUES_BUG = false, proto = Base.prototype, $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT], $default = $native || getMethod(DEFAULT), $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod("entries") : undefined, $anyNative = NAME == "Array" ? proto.entries || $native : $native, methods, key, IteratorPrototype;
        if ($anyNative) {
            IteratorPrototype = getPrototypeOf($anyNative.call(new Base()));
            if (IteratorPrototype !== Object.prototype) {
                setToStringTag(IteratorPrototype, TAG, true);
                if (!LIBRARY && !has(IteratorPrototype, ITERATOR)) hide(IteratorPrototype, ITERATOR, returnThis);
            }
        }
        if (DEF_VALUES && $native && $native.name !== VALUES) {
            VALUES_BUG = true;
            $default = function values() {
                return $native.call(this);
            };
        }
        if ((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {
            hide(proto, ITERATOR, $default);
        }
        Iterators[NAME] = $default;
        Iterators[TAG] = returnThis;
        if (DEFAULT) {
            methods = {
                values: DEF_VALUES ? $default : getMethod(VALUES),
                keys: IS_SET ? $default : getMethod(KEYS),
                entries: $entries
            };
            if (FORCED) for (key in methods) {
                if (!(key in proto)) redefine(proto, key, methods[key]);
            } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
        }
        return methods;
    };
}, function(module, exports, __webpack_require__) {
    var anObject = __webpack_require__(11), dPs = __webpack_require__(100), enumBugKeys = __webpack_require__(22), IE_PROTO = __webpack_require__(27)("IE_PROTO"), Empty = function() {}, PROTOTYPE = "prototype";
    var createDict = function() {
        var iframe = __webpack_require__(42)("iframe"), i = enumBugKeys.length, lt = "<", gt = ">", iframeDocument;
        iframe.style.display = "none";
        __webpack_require__(93).appendChild(iframe);
        iframe.src = "javascript:";
        iframeDocument = iframe.contentWindow.document;
        iframeDocument.open();
        iframeDocument.write(lt + "script" + gt + "document.F=Object" + lt + "/script" + gt);
        iframeDocument.close();
        createDict = iframeDocument.F;
        while (i--) delete createDict[PROTOTYPE][enumBugKeys[i]];
        return createDict();
    };
    module.exports = Object.create || function create(O, Properties) {
        var result;
        if (O !== null) {
            Empty[PROTOTYPE] = anObject(O);
            result = new Empty();
            Empty[PROTOTYPE] = null;
            result[IE_PROTO] = O;
        } else result = createDict();
        return Properties === undefined ? result : dPs(result, Properties);
    };
}, function(module, exports, __webpack_require__) {
    var $keys = __webpack_require__(49), hiddenKeys = __webpack_require__(22).concat("length", "prototype");
    exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
        return $keys(O, hiddenKeys);
    };
}, function(module, exports) {
    exports.f = Object.getOwnPropertySymbols;
}, function(module, exports, __webpack_require__) {
    var has = __webpack_require__(2), toIObject = __webpack_require__(3), arrayIndexOf = __webpack_require__(90)(false), IE_PROTO = __webpack_require__(27)("IE_PROTO");
    module.exports = function(object, names) {
        var O = toIObject(object), i = 0, result = [], key;
        for (key in O) if (key != IE_PROTO) has(O, key) && result.push(key);
        while (names.length > i) if (has(O, key = names[i++])) {
            ~arrayIndexOf(result, key) || result.push(key);
        }
        return result;
    };
}, function(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(5);
}, function(module, exports) {
    var process = module.exports = {};
    var cachedSetTimeout;
    var cachedClearTimeout;
    function defaultSetTimout() {
        throw new Error("setTimeout has not been defined");
    }
    function defaultClearTimeout() {
        throw new Error("clearTimeout has not been defined");
    }
    (function() {
        try {
            if (typeof setTimeout === "function") {
                cachedSetTimeout = setTimeout;
            } else {
                cachedSetTimeout = defaultSetTimout;
            }
        } catch (e) {
            cachedSetTimeout = defaultSetTimout;
        }
        try {
            if (typeof clearTimeout === "function") {
                cachedClearTimeout = clearTimeout;
            } else {
                cachedClearTimeout = defaultClearTimeout;
            }
        } catch (e) {
            cachedClearTimeout = defaultClearTimeout;
        }
    })();
    function runTimeout(fun) {
        if (cachedSetTimeout === setTimeout) {
            return setTimeout(fun, 0);
        }
        if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
            cachedSetTimeout = setTimeout;
            return setTimeout(fun, 0);
        }
        try {
            return cachedSetTimeout(fun, 0);
        } catch (e) {
            try {
                return cachedSetTimeout.call(null, fun, 0);
            } catch (e) {
                return cachedSetTimeout.call(this, fun, 0);
            }
        }
    }
    function runClearTimeout(marker) {
        if (cachedClearTimeout === clearTimeout) {
            return clearTimeout(marker);
        }
        if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
            cachedClearTimeout = clearTimeout;
            return clearTimeout(marker);
        }
        try {
            return cachedClearTimeout(marker);
        } catch (e) {
            try {
                return cachedClearTimeout.call(null, marker);
            } catch (e) {
                return cachedClearTimeout.call(this, marker);
            }
        }
    }
    var queue = [];
    var draining = false;
    var currentQueue;
    var queueIndex = -1;
    function cleanUpNextTick() {
        if (!draining || !currentQueue) {
            return;
        }
        draining = false;
        if (currentQueue.length) {
            queue = currentQueue.concat(queue);
        } else {
            queueIndex = -1;
        }
        if (queue.length) {
            drainQueue();
        }
    }
    function drainQueue() {
        if (draining) {
            return;
        }
        var timeout = runTimeout(cleanUpNextTick);
        draining = true;
        var len = queue.length;
        while (len) {
            currentQueue = queue;
            queue = [];
            while (++queueIndex < len) {
                if (currentQueue) {
                    currentQueue[queueIndex].run();
                }
            }
            queueIndex = -1;
            len = queue.length;
        }
        currentQueue = null;
        draining = false;
        runClearTimeout(timeout);
    }
    process.nextTick = function(fun) {
        var args = new Array(arguments.length - 1);
        if (arguments.length > 1) {
            for (var i = 1; i < arguments.length; i++) {
                args[i - 1] = arguments[i];
            }
        }
        queue.push(new Item(fun, args));
        if (queue.length === 1 && !draining) {
            runTimeout(drainQueue);
        }
    };
    function Item(fun, array) {
        this.fun = fun;
        this.array = array;
    }
    Item.prototype.run = function() {
        this.fun.apply(null, this.array);
    };
    process.title = "browser";
    process.browser = true;
    process.env = {};
    process.argv = [];
    process.version = "";
    process.versions = {};
    function noop() {}
    process.on = noop;
    process.addListener = noop;
    process.once = noop;
    process.off = noop;
    process.removeListener = noop;
    process.removeAllListeners = noop;
    process.emit = noop;
    process.binding = function(name) {
        throw new Error("process.binding is not supported");
    };
    process.cwd = function() {
        return "/";
    };
    process.chdir = function(dir) {
        throw new Error("process.chdir is not supported");
    };
    process.umask = function() {
        return 0;
    };
}, function(module, exports) {
    var g;
    g = function() {
        return this;
    }();
    try {
        g = g || Function("return this")() || (1, eval)("this");
    } catch (e) {
        if (typeof window === "object") g = window;
    }
    module.exports = g;
}, function(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(62);
}, function(module, exports, __webpack_require__) {
    "use strict";
    var _typeof2 = __webpack_require__(85);
    var _typeof3 = _interopRequireDefault(_typeof2);
    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            default: obj
        };
    }
    if ("undefined" == typeof jQuery) throw new Error("Bootstrap's JavaScript requires jQuery");
    +function(a) {
        "use strict";
        var b = a.fn.jquery.split(" ")[0].split(".");
        if (b[0] < 2 && b[1] < 9 || 1 == b[0] && 9 == b[1] && b[2] < 1) throw new Error("Bootstrap's JavaScript requires jQuery version 1.9.1 or higher");
    }(jQuery), +function(a) {
        "use strict";
        function b() {
            var a = document.createElement("bootstrap"), b = {
                WebkitTransition: "webkitTransitionEnd",
                MozTransition: "transitionend",
                OTransition: "oTransitionEnd otransitionend",
                transition: "transitionend"
            };
            for (var c in b) {
                if (void 0 !== a.style[c]) return {
                    end: b[c]
                };
            }
            return !1;
        }
        a.fn.emulateTransitionEnd = function(b) {
            var c = !1, d = this;
            a(this).one("bsTransitionEnd", function() {
                c = !0;
            });
            var e = function e() {
                c || a(d).trigger(a.support.transition.end);
            };
            return setTimeout(e, b), this;
        }, a(function() {
            a.support.transition = b(), a.support.transition && (a.event.special.bsTransitionEnd = {
                bindType: a.support.transition.end,
                delegateType: a.support.transition.end,
                handle: function handle(b) {
                    return a(b.target).is(this) ? b.handleObj.handler.apply(this, arguments) : void 0;
                }
            });
        });
    }(jQuery), +function(a) {
        "use strict";
        function b(b) {
            return this.each(function() {
                var c = a(this), e = c.data("bs.alert");
                e || c.data("bs.alert", e = new d(this)), "string" == typeof b && e[b].call(c);
            });
        }
        var c = '[data-dismiss="alert"]', d = function d(b) {
            a(b).on("click", c, this.close);
        };
        d.VERSION = "3.3.5", d.TRANSITION_DURATION = 150, d.prototype.close = function(b) {
            function c() {
                g.detach().trigger("closed.bs.alert").remove();
            }
            var e = a(this), f = e.attr("data-target");
            f || (f = e.attr("href"), f = f && f.replace(/.*(?=#[^\s]*$)/, ""));
            var g = a(f);
            b && b.preventDefault(), g.length || (g = e.closest(".alert")), g.trigger(b = a.Event("close.bs.alert")), 
            b.isDefaultPrevented() || (g.removeClass("in"), a.support.transition && g.hasClass("fade") ? g.one("bsTransitionEnd", c).emulateTransitionEnd(d.TRANSITION_DURATION) : c());
        };
        var e = a.fn.alert;
        a.fn.alert = b, a.fn.alert.Constructor = d, a.fn.alert.noConflict = function() {
            return a.fn.alert = e, this;
        }, a(document).on("click.bs.alert.data-api", c, d.prototype.close);
    }(jQuery), +function(a) {
        "use strict";
        function b(b) {
            return this.each(function() {
                var d = a(this), e = d.data("bs.button"), f = "object" == (typeof b === "undefined" ? "undefined" : (0, 
                _typeof3.default)(b)) && b;
                e || d.data("bs.button", e = new c(this, f)), "toggle" == b ? e.toggle() : b && e.setState(b);
            });
        }
        var c = function c(b, d) {
            this.$element = a(b), this.options = a.extend({}, c.DEFAULTS, d), this.isLoading = !1;
        };
        c.VERSION = "3.3.5", c.DEFAULTS = {
            loadingText: "loading..."
        }, c.prototype.setState = function(b) {
            var c = "disabled", d = this.$element, e = d.is("input") ? "val" : "html", f = d.data();
            b += "Text", null == f.resetText && d.data("resetText", d[e]()), setTimeout(a.proxy(function() {
                d[e](null == f[b] ? this.options[b] : f[b]), "loadingText" == b ? (this.isLoading = !0, 
                d.addClass(c).attr(c, c)) : this.isLoading && (this.isLoading = !1, d.removeClass(c).removeAttr(c));
            }, this), 0);
        }, c.prototype.toggle = function() {
            var a = !0, b = this.$element.closest('[data-toggle="buttons"]');
            if (b.length) {
                var c = this.$element.find("input");
                "radio" == c.prop("type") ? (c.prop("checked") && (a = !1), b.find(".active").removeClass("active"), 
                this.$element.addClass("active")) : "checkbox" == c.prop("type") && (c.prop("checked") !== this.$element.hasClass("active") && (a = !1), 
                this.$element.toggleClass("active")), c.prop("checked", this.$element.hasClass("active")), 
                a && c.trigger("change");
            } else this.$element.attr("aria-pressed", !this.$element.hasClass("active")), this.$element.toggleClass("active");
        };
        var d = a.fn.button;
        a.fn.button = b, a.fn.button.Constructor = c, a.fn.button.noConflict = function() {
            return a.fn.button = d, this;
        }, a(document).on("click.bs.button.data-api", '[data-toggle^="button"]', function(c) {
            var d = a(c.target);
            d.hasClass("btn") || (d = d.closest(".btn")), b.call(d, "toggle"), a(c.target).is('input[type="radio"]') || a(c.target).is('input[type="checkbox"]') || c.preventDefault();
        }).on("focus.bs.button.data-api blur.bs.button.data-api", '[data-toggle^="button"]', function(b) {
            a(b.target).closest(".btn").toggleClass("focus", /^focus(in)?$/.test(b.type));
        });
    }(jQuery), +function(a) {
        "use strict";
        function b(b) {
            return this.each(function() {
                var d = a(this), e = d.data("bs.carousel"), f = a.extend({}, c.DEFAULTS, d.data(), "object" == (typeof b === "undefined" ? "undefined" : (0, 
                _typeof3.default)(b)) && b), g = "string" == typeof b ? b : f.slide;
                e || d.data("bs.carousel", e = new c(this, f)), "number" == typeof b ? e.to(b) : g ? e[g]() : f.interval && e.pause().cycle();
            });
        }
        var c = function c(b, _c) {
            this.$element = a(b), this.$indicators = this.$element.find(".carousel-indicators"), 
            this.options = _c, this.paused = null, this.sliding = null, this.interval = null, 
            this.$active = null, this.$items = null, this.options.keyboard && this.$element.on("keydown.bs.carousel", a.proxy(this.keydown, this)), 
            "hover" == this.options.pause && !("ontouchstart" in document.documentElement) && this.$element.on("mouseenter.bs.carousel", a.proxy(this.pause, this)).on("mouseleave.bs.carousel", a.proxy(this.cycle, this));
        };
        c.VERSION = "3.3.5", c.TRANSITION_DURATION = 600, c.DEFAULTS = {
            interval: 5e3,
            pause: "hover",
            wrap: !0,
            keyboard: !0
        }, c.prototype.keydown = function(a) {
            if (!/input|textarea/i.test(a.target.tagName)) {
                switch (a.which) {
                  case 37:
                    this.prev();
                    break;

                  case 39:
                    this.next();
                    break;

                  default:
                    return;
                }
                a.preventDefault();
            }
        }, c.prototype.cycle = function(b) {
            return b || (this.paused = !1), this.interval && clearInterval(this.interval), this.options.interval && !this.paused && (this.interval = setInterval(a.proxy(this.next, this), this.options.interval)), 
            this;
        }, c.prototype.getItemIndex = function(a) {
            return this.$items = a.parent().children(".item"), this.$items.index(a || this.$active);
        }, c.prototype.getItemForDirection = function(a, b) {
            var c = this.getItemIndex(b), d = "prev" == a && 0 === c || "next" == a && c == this.$items.length - 1;
            if (d && !this.options.wrap) return b;
            var e = "prev" == a ? -1 : 1, f = (c + e) % this.$items.length;
            return this.$items.eq(f);
        }, c.prototype.to = function(a) {
            var b = this, c = this.getItemIndex(this.$active = this.$element.find(".item.active"));
            return a > this.$items.length - 1 || 0 > a ? void 0 : this.sliding ? this.$element.one("slid.bs.carousel", function() {
                b.to(a);
            }) : c == a ? this.pause().cycle() : this.slide(a > c ? "next" : "prev", this.$items.eq(a));
        }, c.prototype.pause = function(b) {
            return b || (this.paused = !0), this.$element.find(".next, .prev").length && a.support.transition && (this.$element.trigger(a.support.transition.end), 
            this.cycle(!0)), this.interval = clearInterval(this.interval), this;
        }, c.prototype.next = function() {
            return this.sliding ? void 0 : this.slide("next");
        }, c.prototype.prev = function() {
            return this.sliding ? void 0 : this.slide("prev");
        }, c.prototype.slide = function(b, d) {
            var e = this.$element.find(".item.active"), f = d || this.getItemForDirection(b, e), g = this.interval, h = "next" == b ? "left" : "right", i = this;
            if (f.hasClass("active")) return this.sliding = !1;
            var j = f[0], k = a.Event("slide.bs.carousel", {
                relatedTarget: j,
                direction: h
            });
            if (this.$element.trigger(k), !k.isDefaultPrevented()) {
                if (this.sliding = !0, g && this.pause(), this.$indicators.length) {
                    this.$indicators.find(".active").removeClass("active");
                    var l = a(this.$indicators.children()[this.getItemIndex(f)]);
                    l && l.addClass("active");
                }
                var m = a.Event("slid.bs.carousel", {
                    relatedTarget: j,
                    direction: h
                });
                return a.support.transition && this.$element.hasClass("slide") ? (f.addClass(b), 
                f[0].offsetWidth, e.addClass(h), f.addClass(h), e.one("bsTransitionEnd", function() {
                    f.removeClass([ b, h ].join(" ")).addClass("active"), e.removeClass([ "active", h ].join(" ")), 
                    i.sliding = !1, setTimeout(function() {
                        i.$element.trigger(m);
                    }, 0);
                }).emulateTransitionEnd(c.TRANSITION_DURATION)) : (e.removeClass("active"), f.addClass("active"), 
                this.sliding = !1, this.$element.trigger(m)), g && this.cycle(), this;
            }
        };
        var d = a.fn.carousel;
        a.fn.carousel = b, a.fn.carousel.Constructor = c, a.fn.carousel.noConflict = function() {
            return a.fn.carousel = d, this;
        };
        var e = function e(c) {
            var d, e = a(this), f = a(e.attr("data-target") || (d = e.attr("href")) && d.replace(/.*(?=#[^\s]+$)/, ""));
            if (f.hasClass("carousel")) {
                var g = a.extend({}, f.data(), e.data()), h = e.attr("data-slide-to");
                h && (g.interval = !1), b.call(f, g), h && f.data("bs.carousel").to(h), c.preventDefault();
            }
        };
        a(document).on("click.bs.carousel.data-api", "[data-slide]", e).on("click.bs.carousel.data-api", "[data-slide-to]", e), 
        a(window).on("load", function() {
            a('[data-ride="carousel"]').each(function() {
                var c = a(this);
                b.call(c, c.data());
            });
        });
    }(jQuery), +function(a) {
        "use strict";
        function b(b) {
            var c, d = b.attr("data-target") || (c = b.attr("href")) && c.replace(/.*(?=#[^\s]+$)/, "");
            return a(d);
        }
        function c(b) {
            return this.each(function() {
                var c = a(this), e = c.data("bs.collapse"), f = a.extend({}, d.DEFAULTS, c.data(), "object" == (typeof b === "undefined" ? "undefined" : (0, 
                _typeof3.default)(b)) && b);
                !e && f.toggle && /show|hide/.test(b) && (f.toggle = !1), e || c.data("bs.collapse", e = new d(this, f)), 
                "string" == typeof b && e[b]();
            });
        }
        var d = function d(b, c) {
            this.$element = a(b), this.options = a.extend({}, d.DEFAULTS, c), this.$trigger = a('[data-toggle="collapse"][href="#' + b.id + '"],[data-toggle="collapse"][data-target="#' + b.id + '"]'), 
            this.transitioning = null, this.options.parent ? this.$parent = this.getParent() : this.addAriaAndCollapsedClass(this.$element, this.$trigger), 
            this.options.toggle && this.toggle();
        };
        d.VERSION = "3.3.5", d.TRANSITION_DURATION = 350, d.DEFAULTS = {
            toggle: !0
        }, d.prototype.dimension = function() {
            var a = this.$element.hasClass("width");
            return a ? "width" : "height";
        }, d.prototype.show = function() {
            if (!this.transitioning && !this.$element.hasClass("in")) {
                var b, e = this.$parent && this.$parent.children(".panel").children(".in, .collapsing");
                if (!(e && e.length && (b = e.data("bs.collapse"), b && b.transitioning))) {
                    var f = a.Event("show.bs.collapse");
                    if (this.$element.trigger(f), !f.isDefaultPrevented()) {
                        e && e.length && (c.call(e, "hide"), b || e.data("bs.collapse", null));
                        var g = this.dimension();
                        this.$element.removeClass("collapse").addClass("collapsing")[g](0).attr("aria-expanded", !0), 
                        this.$trigger.removeClass("collapsed").attr("aria-expanded", !0), this.transitioning = 1;
                        var h = function h() {
                            this.$element.removeClass("collapsing").addClass("collapse in")[g](""), this.transitioning = 0, 
                            this.$element.trigger("shown.bs.collapse");
                        };
                        if (!a.support.transition) return h.call(this);
                        var i = a.camelCase([ "scroll", g ].join("-"));
                        this.$element.one("bsTransitionEnd", a.proxy(h, this)).emulateTransitionEnd(d.TRANSITION_DURATION)[g](this.$element[0][i]);
                    }
                }
            }
        }, d.prototype.hide = function() {
            if (!this.transitioning && this.$element.hasClass("in")) {
                var b = a.Event("hide.bs.collapse");
                if (this.$element.trigger(b), !b.isDefaultPrevented()) {
                    var c = this.dimension();
                    this.$element[c](this.$element[c]())[0].offsetHeight, this.$element.addClass("collapsing").removeClass("collapse in").attr("aria-expanded", !1), 
                    this.$trigger.addClass("collapsed").attr("aria-expanded", !1), this.transitioning = 1;
                    var e = function e() {
                        this.transitioning = 0, this.$element.removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse");
                    };
                    return a.support.transition ? void this.$element[c](0).one("bsTransitionEnd", a.proxy(e, this)).emulateTransitionEnd(d.TRANSITION_DURATION) : e.call(this);
                }
            }
        }, d.prototype.toggle = function() {
            this[this.$element.hasClass("in") ? "hide" : "show"]();
        }, d.prototype.getParent = function() {
            return a(this.options.parent).find('[data-toggle="collapse"][data-parent="' + this.options.parent + '"]').each(a.proxy(function(c, d) {
                var e = a(d);
                this.addAriaAndCollapsedClass(b(e), e);
            }, this)).end();
        }, d.prototype.addAriaAndCollapsedClass = function(a, b) {
            var c = a.hasClass("in");
            a.attr("aria-expanded", c), b.toggleClass("collapsed", !c).attr("aria-expanded", c);
        };
        var e = a.fn.collapse;
        a.fn.collapse = c, a.fn.collapse.Constructor = d, a.fn.collapse.noConflict = function() {
            return a.fn.collapse = e, this;
        }, a(document).on("click.bs.collapse.data-api", '[data-toggle="collapse"]', function(d) {
            var e = a(this);
            e.attr("data-target") || d.preventDefault();
            var f = b(e), g = f.data("bs.collapse"), h = g ? "toggle" : e.data();
            c.call(f, h);
        });
    }(jQuery), +function(a) {
        "use strict";
        function b(b) {
            var c = b.attr("data-target");
            c || (c = b.attr("href"), c = c && /#[A-Za-z]/.test(c) && c.replace(/.*(?=#[^\s]*$)/, ""));
            var d = c && a(c);
            return d && d.length ? d : b.parent();
        }
        function c(c) {
            c && 3 === c.which || (a(e).remove(), a(f).each(function() {
                var d = a(this), e = b(d), f = {
                    relatedTarget: this
                };
                e.hasClass("open") && (c && "click" == c.type && /input|textarea/i.test(c.target.tagName) && a.contains(e[0], c.target) || (e.trigger(c = a.Event("hide.bs.dropdown", f)), 
                c.isDefaultPrevented() || (d.attr("aria-expanded", "false"), e.removeClass("open").trigger("hidden.bs.dropdown", f))));
            }));
        }
        function d(b) {
            return this.each(function() {
                var c = a(this), d = c.data("bs.dropdown");
                d || c.data("bs.dropdown", d = new g(this)), "string" == typeof b && d[b].call(c);
            });
        }
        var e = ".dropdown-backdrop", f = '[data-toggle="dropdown"]', g = function g(b) {
            a(b).on("click.bs.dropdown", this.toggle);
        };
        g.VERSION = "3.3.5", g.prototype.toggle = function(d) {
            var e = a(this);
            if (!e.is(".disabled, :disabled")) {
                var f = b(e), g = f.hasClass("open");
                if (c(), !g) {
                    "ontouchstart" in document.documentElement && !f.closest(".navbar-nav").length && a(document.createElement("div")).addClass("dropdown-backdrop").insertAfter(a(this)).on("click", c);
                    var h = {
                        relatedTarget: this
                    };
                    if (f.trigger(d = a.Event("show.bs.dropdown", h)), d.isDefaultPrevented()) return;
                    e.trigger("focus").attr("aria-expanded", "true"), f.toggleClass("open").trigger("shown.bs.dropdown", h);
                }
                return !1;
            }
        }, g.prototype.keydown = function(c) {
            if (/(38|40|27|32)/.test(c.which) && !/input|textarea/i.test(c.target.tagName)) {
                var d = a(this);
                if (c.preventDefault(), c.stopPropagation(), !d.is(".disabled, :disabled")) {
                    var e = b(d), g = e.hasClass("open");
                    if (!g && 27 != c.which || g && 27 == c.which) return 27 == c.which && e.find(f).trigger("focus"), 
                    d.trigger("click");
                    var h = " li:not(.disabled):visible a", i = e.find(".dropdown-menu" + h);
                    if (i.length) {
                        var j = i.index(c.target);
                        38 == c.which && j > 0 && j--, 40 == c.which && j < i.length - 1 && j++, ~j || (j = 0), 
                        i.eq(j).trigger("focus");
                    }
                }
            }
        };
        var h = a.fn.dropdown;
        a.fn.dropdown = d, a.fn.dropdown.Constructor = g, a.fn.dropdown.noConflict = function() {
            return a.fn.dropdown = h, this;
        }, a(document).on("click.bs.dropdown.data-api", c).on("click.bs.dropdown.data-api", ".dropdown form", function(a) {
            a.stopPropagation();
        }).on("click.bs.dropdown.data-api", f, g.prototype.toggle).on("keydown.bs.dropdown.data-api", f, g.prototype.keydown).on("keydown.bs.dropdown.data-api", ".dropdown-menu", g.prototype.keydown);
    }(jQuery), +function(a) {
        "use strict";
        function b(b, d) {
            return this.each(function() {
                var e = a(this), f = e.data("bs.modal"), g = a.extend({}, c.DEFAULTS, e.data(), "object" == (typeof b === "undefined" ? "undefined" : (0, 
                _typeof3.default)(b)) && b);
                f || e.data("bs.modal", f = new c(this, g)), "string" == typeof b ? f[b](d) : g.show && f.show(d);
            });
        }
        var c = function c(b, _c2) {
            this.options = _c2, this.$body = a(document.body), this.$element = a(b), this.$dialog = this.$element.find(".modal-dialog"), 
            this.$backdrop = null, this.isShown = null, this.originalBodyPad = null, this.scrollbarWidth = 0, 
            this.ignoreBackdropClick = !1, this.options.remote && this.$element.find(".modal-content").load(this.options.remote, a.proxy(function() {
                this.$element.trigger("loaded.bs.modal");
            }, this));
        };
        c.VERSION = "3.3.5", c.TRANSITION_DURATION = 300, c.BACKDROP_TRANSITION_DURATION = 150, 
        c.DEFAULTS = {
            backdrop: !0,
            keyboard: !0,
            show: !0
        }, c.prototype.toggle = function(a) {
            return this.isShown ? this.hide() : this.show(a);
        }, c.prototype.show = function(b) {
            var d = this, e = a.Event("show.bs.modal", {
                relatedTarget: b
            });
            this.$element.trigger(e), this.isShown || e.isDefaultPrevented() || (this.isShown = !0, 
            this.checkScrollbar(), this.setScrollbar(), this.$body.addClass("modal-open"), this.escape(), 
            this.resize(), this.$element.on("click.dismiss.bs.modal", '[data-dismiss="modal"]', a.proxy(this.hide, this)), 
            this.$dialog.on("mousedown.dismiss.bs.modal", function() {
                d.$element.one("mouseup.dismiss.bs.modal", function(b) {
                    a(b.target).is(d.$element) && (d.ignoreBackdropClick = !0);
                });
            }), this.backdrop(function() {
                var e = a.support.transition && d.$element.hasClass("fade");
                d.$element.parent().length || d.$element.appendTo(d.$body), d.$element.show().scrollTop(0), 
                d.adjustDialog(), e && d.$element[0].offsetWidth, d.$element.addClass("in"), d.enforceFocus();
                var f = a.Event("shown.bs.modal", {
                    relatedTarget: b
                });
                e ? d.$dialog.one("bsTransitionEnd", function() {
                    d.$element.trigger("focus").trigger(f);
                }).emulateTransitionEnd(c.TRANSITION_DURATION) : d.$element.trigger("focus").trigger(f);
            }));
        }, c.prototype.hide = function(b) {
            b && b.preventDefault(), b = a.Event("hide.bs.modal"), this.$element.trigger(b), 
            this.isShown && !b.isDefaultPrevented() && (this.isShown = !1, this.escape(), this.resize(), 
            a(document).off("focusin.bs.modal"), this.$element.removeClass("in").off("click.dismiss.bs.modal").off("mouseup.dismiss.bs.modal"), 
            this.$dialog.off("mousedown.dismiss.bs.modal"), a.support.transition && this.$element.hasClass("fade") ? this.$element.one("bsTransitionEnd", a.proxy(this.hideModal, this)).emulateTransitionEnd(c.TRANSITION_DURATION) : this.hideModal());
        }, c.prototype.enforceFocus = function() {
            a(document).off("focusin.bs.modal").on("focusin.bs.modal", a.proxy(function(a) {
                this.$element[0] === a.target || this.$element.has(a.target).length || this.$element.trigger("focus");
            }, this));
        }, c.prototype.escape = function() {
            this.isShown && this.options.keyboard ? this.$element.on("keydown.dismiss.bs.modal", a.proxy(function(a) {
                27 == a.which && this.hide();
            }, this)) : this.isShown || this.$element.off("keydown.dismiss.bs.modal");
        }, c.prototype.resize = function() {
            this.isShown ? a(window).on("resize.bs.modal", a.proxy(this.handleUpdate, this)) : a(window).off("resize.bs.modal");
        }, c.prototype.hideModal = function() {
            var a = this;
            this.$element.hide(), this.backdrop(function() {
                a.$body.removeClass("modal-open"), a.resetAdjustments(), a.resetScrollbar(), a.$element.trigger("hidden.bs.modal");
            });
        }, c.prototype.removeBackdrop = function() {
            this.$backdrop && this.$backdrop.remove(), this.$backdrop = null;
        }, c.prototype.backdrop = function(b) {
            var d = this, e = this.$element.hasClass("fade") ? "fade" : "";
            if (this.isShown && this.options.backdrop) {
                var f = a.support.transition && e;
                if (this.$backdrop = a(document.createElement("div")).addClass("modal-backdrop " + e).appendTo(this.$body), 
                this.$element.on("click.dismiss.bs.modal", a.proxy(function(a) {
                    return this.ignoreBackdropClick ? void (this.ignoreBackdropClick = !1) : void (a.target === a.currentTarget && ("static" == this.options.backdrop ? this.$element[0].focus() : this.hide()));
                }, this)), f && this.$backdrop[0].offsetWidth, this.$backdrop.addClass("in"), !b) return;
                f ? this.$backdrop.one("bsTransitionEnd", b).emulateTransitionEnd(c.BACKDROP_TRANSITION_DURATION) : b();
            } else if (!this.isShown && this.$backdrop) {
                this.$backdrop.removeClass("in");
                var g = function g() {
                    d.removeBackdrop(), b && b();
                };
                a.support.transition && this.$element.hasClass("fade") ? this.$backdrop.one("bsTransitionEnd", g).emulateTransitionEnd(c.BACKDROP_TRANSITION_DURATION) : g();
            } else b && b();
        }, c.prototype.handleUpdate = function() {
            this.adjustDialog();
        }, c.prototype.adjustDialog = function() {
            var a = this.$element[0].scrollHeight > document.documentElement.clientHeight;
            this.$element.css({
                paddingLeft: !this.bodyIsOverflowing && a ? this.scrollbarWidth : "",
                paddingRight: this.bodyIsOverflowing && !a ? this.scrollbarWidth : ""
            });
        }, c.prototype.resetAdjustments = function() {
            this.$element.css({
                paddingLeft: "",
                paddingRight: ""
            });
        }, c.prototype.checkScrollbar = function() {
            var a = window.innerWidth;
            if (!a) {
                var b = document.documentElement.getBoundingClientRect();
                a = b.right - Math.abs(b.left);
            }
            this.bodyIsOverflowing = document.body.clientWidth < a, this.scrollbarWidth = this.measureScrollbar();
        }, c.prototype.setScrollbar = function() {
            var a = parseInt(this.$body.css("padding-right") || 0, 10);
            this.originalBodyPad = document.body.style.paddingRight || "", this.bodyIsOverflowing && this.$body.css("padding-right", a + this.scrollbarWidth);
        }, c.prototype.resetScrollbar = function() {
            this.$body.css("padding-right", this.originalBodyPad);
        }, c.prototype.measureScrollbar = function() {
            var a = document.createElement("div");
            a.className = "modal-scrollbar-measure", this.$body.append(a);
            var b = a.offsetWidth - a.clientWidth;
            return this.$body[0].removeChild(a), b;
        };
        var d = a.fn.modal;
        a.fn.modal = b, a.fn.modal.Constructor = c, a.fn.modal.noConflict = function() {
            return a.fn.modal = d, this;
        }, a(document).on("click.bs.modal.data-api", '[data-toggle="modal"]', function(c) {
            var d = a(this), e = d.attr("href"), f = a(d.attr("data-target") || e && e.replace(/.*(?=#[^\s]+$)/, "")), g = f.data("bs.modal") ? "toggle" : a.extend({
                remote: !/#/.test(e) && e
            }, f.data(), d.data());
            d.is("a") && c.preventDefault(), f.one("show.bs.modal", function(a) {
                a.isDefaultPrevented() || f.one("hidden.bs.modal", function() {
                    d.is(":visible") && d.trigger("focus");
                });
            }), b.call(f, g, this);
        });
    }(jQuery), +function(a) {
        "use strict";
        function b(b) {
            return this.each(function() {
                var d = a(this), e = d.data("bs.tooltip"), f = "object" == (typeof b === "undefined" ? "undefined" : (0, 
                _typeof3.default)(b)) && b;
                (e || !/destroy|hide/.test(b)) && (e || d.data("bs.tooltip", e = new c(this, f)), 
                "string" == typeof b && e[b]());
            });
        }
        var c = function c(a, b) {
            this.type = null, this.options = null, this.enabled = null, this.timeout = null, 
            this.hoverState = null, this.$element = null, this.inState = null, this.init("tooltip", a, b);
        };
        c.VERSION = "3.3.5", c.TRANSITION_DURATION = 150, c.DEFAULTS = {
            animation: !0,
            placement: "top",
            selector: !1,
            template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
            trigger: "hover focus",
            title: "",
            delay: 0,
            html: !1,
            container: !1,
            viewport: {
                selector: "body",
                padding: 0
            }
        }, c.prototype.init = function(b, c, d) {
            if (this.enabled = !0, this.type = b, this.$element = a(c), this.options = this.getOptions(d), 
            this.$viewport = this.options.viewport && a(a.isFunction(this.options.viewport) ? this.options.viewport.call(this, this.$element) : this.options.viewport.selector || this.options.viewport), 
            this.inState = {
                click: !1,
                hover: !1,
                focus: !1
            }, this.$element[0] instanceof document.constructor && !this.options.selector) throw new Error("`selector` option must be specified when initializing " + this.type + " on the window.document object!");
            for (var e = this.options.trigger.split(" "), f = e.length; f--; ) {
                var g = e[f];
                if ("click" == g) this.$element.on("click." + this.type, this.options.selector, a.proxy(this.toggle, this)); else if ("manual" != g) {
                    var h = "hover" == g ? "mouseenter" : "focusin", i = "hover" == g ? "mouseleave" : "focusout";
                    this.$element.on(h + "." + this.type, this.options.selector, a.proxy(this.enter, this)), 
                    this.$element.on(i + "." + this.type, this.options.selector, a.proxy(this.leave, this));
                }
            }
            this.options.selector ? this._options = a.extend({}, this.options, {
                trigger: "manual",
                selector: ""
            }) : this.fixTitle();
        }, c.prototype.getDefaults = function() {
            return c.DEFAULTS;
        }, c.prototype.getOptions = function(b) {
            return b = a.extend({}, this.getDefaults(), this.$element.data(), b), b.delay && "number" == typeof b.delay && (b.delay = {
                show: b.delay,
                hide: b.delay
            }), b;
        }, c.prototype.getDelegateOptions = function() {
            var b = {}, c = this.getDefaults();
            return this._options && a.each(this._options, function(a, d) {
                c[a] != d && (b[a] = d);
            }), b;
        }, c.prototype.enter = function(b) {
            var c = b instanceof this.constructor ? b : a(b.currentTarget).data("bs." + this.type);
            return c || (c = new this.constructor(b.currentTarget, this.getDelegateOptions()), 
            a(b.currentTarget).data("bs." + this.type, c)), b instanceof a.Event && (c.inState["focusin" == b.type ? "focus" : "hover"] = !0), 
            c.tip().hasClass("in") || "in" == c.hoverState ? void (c.hoverState = "in") : (clearTimeout(c.timeout), 
            c.hoverState = "in", c.options.delay && c.options.delay.show ? void (c.timeout = setTimeout(function() {
                "in" == c.hoverState && c.show();
            }, c.options.delay.show)) : c.show());
        }, c.prototype.isInStateTrue = function() {
            for (var a in this.inState) {
                if (this.inState[a]) return !0;
            }
            return !1;
        }, c.prototype.leave = function(b) {
            var c = b instanceof this.constructor ? b : a(b.currentTarget).data("bs." + this.type);
            return c || (c = new this.constructor(b.currentTarget, this.getDelegateOptions()), 
            a(b.currentTarget).data("bs." + this.type, c)), b instanceof a.Event && (c.inState["focusout" == b.type ? "focus" : "hover"] = !1), 
            c.isInStateTrue() ? void 0 : (clearTimeout(c.timeout), c.hoverState = "out", c.options.delay && c.options.delay.hide ? void (c.timeout = setTimeout(function() {
                "out" == c.hoverState && c.hide();
            }, c.options.delay.hide)) : c.hide());
        }, c.prototype.show = function() {
            var b = a.Event("show.bs." + this.type);
            if (this.hasContent() && this.enabled) {
                this.$element.trigger(b);
                var d = a.contains(this.$element[0].ownerDocument.documentElement, this.$element[0]);
                if (b.isDefaultPrevented() || !d) return;
                var e = this, f = this.tip(), g = this.getUID(this.type);
                this.setContent(), f.attr("id", g), this.$element.attr("aria-describedby", g), this.options.animation && f.addClass("fade");
                var h = "function" == typeof this.options.placement ? this.options.placement.call(this, f[0], this.$element[0]) : this.options.placement, i = /\s?auto?\s?/i, j = i.test(h);
                j && (h = h.replace(i, "") || "top"), f.detach().css({
                    top: 0,
                    left: 0,
                    display: "block"
                }).addClass(h).data("bs." + this.type, this), this.options.container ? f.appendTo(this.options.container) : f.insertAfter(this.$element), 
                this.$element.trigger("inserted.bs." + this.type);
                var k = this.getPosition(), l = f[0].offsetWidth, m = f[0].offsetHeight;
                if (j) {
                    var n = h, o = this.getPosition(this.$viewport);
                    h = "bottom" == h && k.bottom + m > o.bottom ? "top" : "top" == h && k.top - m < o.top ? "bottom" : "right" == h && k.right + l > o.width ? "left" : "left" == h && k.left - l < o.left ? "right" : h, 
                    f.removeClass(n).addClass(h);
                }
                var p = this.getCalculatedOffset(h, k, l, m);
                this.applyPlacement(p, h);
                var q = function q() {
                    var a = e.hoverState;
                    e.$element.trigger("shown.bs." + e.type), e.hoverState = null, "out" == a && e.leave(e);
                };
                a.support.transition && this.$tip.hasClass("fade") ? f.one("bsTransitionEnd", q).emulateTransitionEnd(c.TRANSITION_DURATION) : q();
            }
        }, c.prototype.applyPlacement = function(b, c) {
            var d = this.tip(), e = d[0].offsetWidth, f = d[0].offsetHeight, g = parseInt(d.css("margin-top"), 10), h = parseInt(d.css("margin-left"), 10);
            isNaN(g) && (g = 0), isNaN(h) && (h = 0), b.top += g, b.left += h, a.offset.setOffset(d[0], a.extend({
                using: function using(a) {
                    d.css({
                        top: Math.round(a.top),
                        left: Math.round(a.left)
                    });
                }
            }, b), 0), d.addClass("in");
            var i = d[0].offsetWidth, j = d[0].offsetHeight;
            "top" == c && j != f && (b.top = b.top + f - j);
            var k = this.getViewportAdjustedDelta(c, b, i, j);
            k.left ? b.left += k.left : b.top += k.top;
            var l = /top|bottom/.test(c), m = l ? 2 * k.left - e + i : 2 * k.top - f + j, n = l ? "offsetWidth" : "offsetHeight";
            d.offset(b), this.replaceArrow(m, d[0][n], l);
        }, c.prototype.replaceArrow = function(a, b, c) {
            this.arrow().css(c ? "left" : "top", 50 * (1 - a / b) + "%").css(c ? "top" : "left", "");
        }, c.prototype.setContent = function() {
            var a = this.tip(), b = this.getTitle();
            a.find(".tooltip-inner")[this.options.html ? "html" : "text"](b), a.removeClass("fade in top bottom left right");
        }, c.prototype.hide = function(b) {
            function d() {
                "in" != e.hoverState && f.detach(), e.$element.removeAttr("aria-describedby").trigger("hidden.bs." + e.type), 
                b && b();
            }
            var e = this, f = a(this.$tip), g = a.Event("hide.bs." + this.type);
            return this.$element.trigger(g), g.isDefaultPrevented() ? void 0 : (f.removeClass("in"), 
            a.support.transition && f.hasClass("fade") ? f.one("bsTransitionEnd", d).emulateTransitionEnd(c.TRANSITION_DURATION) : d(), 
            this.hoverState = null, this);
        }, c.prototype.fixTitle = function() {
            var a = this.$element;
            (a.attr("title") || "string" != typeof a.attr("data-original-title")) && a.attr("data-original-title", a.attr("title") || "").attr("title", "");
        }, c.prototype.hasContent = function() {
            return this.getTitle();
        }, c.prototype.getPosition = function(b) {
            b = b || this.$element;
            var c = b[0], d = "BODY" == c.tagName, e = c.getBoundingClientRect();
            null == e.width && (e = a.extend({}, e, {
                width: e.right - e.left,
                height: e.bottom - e.top
            }));
            var f = d ? {
                top: 0,
                left: 0
            } : b.offset(), g = {
                scroll: d ? document.documentElement.scrollTop || document.body.scrollTop : b.scrollTop()
            }, h = d ? {
                width: a(window).width(),
                height: a(window).height()
            } : null;
            return a.extend({}, e, g, h, f);
        }, c.prototype.getCalculatedOffset = function(a, b, c, d) {
            return "bottom" == a ? {
                top: b.top + b.height,
                left: b.left + b.width / 2 - c / 2
            } : "top" == a ? {
                top: b.top - d,
                left: b.left + b.width / 2 - c / 2
            } : "left" == a ? {
                top: b.top + b.height / 2 - d / 2,
                left: b.left - c
            } : {
                top: b.top + b.height / 2 - d / 2,
                left: b.left + b.width
            };
        }, c.prototype.getViewportAdjustedDelta = function(a, b, c, d) {
            var e = {
                top: 0,
                left: 0
            };
            if (!this.$viewport) return e;
            var f = this.options.viewport && this.options.viewport.padding || 0, g = this.getPosition(this.$viewport);
            if (/right|left/.test(a)) {
                var h = b.top - f - g.scroll, i = b.top + f - g.scroll + d;
                h < g.top ? e.top = g.top - h : i > g.top + g.height && (e.top = g.top + g.height - i);
            } else {
                var j = b.left - f, k = b.left + f + c;
                j < g.left ? e.left = g.left - j : k > g.right && (e.left = g.left + g.width - k);
            }
            return e;
        }, c.prototype.getTitle = function() {
            var a, b = this.$element, c = this.options;
            return a = b.attr("data-original-title") || ("function" == typeof c.title ? c.title.call(b[0]) : c.title);
        }, c.prototype.getUID = function(a) {
            do {
                a += ~~(1e6 * Math.random());
            } while (document.getElementById(a));
            return a;
        }, c.prototype.tip = function() {
            if (!this.$tip && (this.$tip = a(this.options.template), 1 != this.$tip.length)) throw new Error(this.type + " `template` option must consist of exactly 1 top-level element!");
            return this.$tip;
        }, c.prototype.arrow = function() {
            return this.$arrow = this.$arrow || this.tip().find(".tooltip-arrow");
        }, c.prototype.enable = function() {
            this.enabled = !0;
        }, c.prototype.disable = function() {
            this.enabled = !1;
        }, c.prototype.toggleEnabled = function() {
            this.enabled = !this.enabled;
        }, c.prototype.toggle = function(b) {
            var c = this;
            b && (c = a(b.currentTarget).data("bs." + this.type), c || (c = new this.constructor(b.currentTarget, this.getDelegateOptions()), 
            a(b.currentTarget).data("bs." + this.type, c))), b ? (c.inState.click = !c.inState.click, 
            c.isInStateTrue() ? c.enter(c) : c.leave(c)) : c.tip().hasClass("in") ? c.leave(c) : c.enter(c);
        }, c.prototype.destroy = function() {
            var a = this;
            clearTimeout(this.timeout), this.hide(function() {
                a.$element.off("." + a.type).removeData("bs." + a.type), a.$tip && a.$tip.detach(), 
                a.$tip = null, a.$arrow = null, a.$viewport = null;
            });
        };
        var d = a.fn.tooltip;
        a.fn.tooltip = b, a.fn.tooltip.Constructor = c, a.fn.tooltip.noConflict = function() {
            return a.fn.tooltip = d, this;
        };
    }(jQuery), +function(a) {
        "use strict";
        function b(b) {
            return this.each(function() {
                var d = a(this), e = d.data("bs.popover"), f = "object" == (typeof b === "undefined" ? "undefined" : (0, 
                _typeof3.default)(b)) && b;
                (e || !/destroy|hide/.test(b)) && (e || d.data("bs.popover", e = new c(this, f)), 
                "string" == typeof b && e[b]());
            });
        }
        var c = function c(a, b) {
            this.init("popover", a, b);
        };
        if (!a.fn.tooltip) throw new Error("Popover requires tooltip.js");
        c.VERSION = "3.3.5", c.DEFAULTS = a.extend({}, a.fn.tooltip.Constructor.DEFAULTS, {
            placement: "right",
            trigger: "click",
            content: "",
            template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'
        }), c.prototype = a.extend({}, a.fn.tooltip.Constructor.prototype), c.prototype.constructor = c, 
        c.prototype.getDefaults = function() {
            return c.DEFAULTS;
        }, c.prototype.setContent = function() {
            var a = this.tip(), b = this.getTitle(), c = this.getContent();
            a.find(".popover-title")[this.options.html ? "html" : "text"](b), a.find(".popover-content").children().detach().end()[this.options.html ? "string" == typeof c ? "html" : "append" : "text"](c), 
            a.removeClass("fade top bottom left right in"), a.find(".popover-title").html() || a.find(".popover-title").hide();
        }, c.prototype.hasContent = function() {
            return this.getTitle() || this.getContent();
        }, c.prototype.getContent = function() {
            var a = this.$element, b = this.options;
            return a.attr("data-content") || ("function" == typeof b.content ? b.content.call(a[0]) : b.content);
        }, c.prototype.arrow = function() {
            return this.$arrow = this.$arrow || this.tip().find(".arrow");
        };
        var d = a.fn.popover;
        a.fn.popover = b, a.fn.popover.Constructor = c, a.fn.popover.noConflict = function() {
            return a.fn.popover = d, this;
        };
    }(jQuery), +function(a) {
        "use strict";
        function b(c, d) {
            this.$body = a(document.body), this.$scrollElement = a(a(c).is(document.body) ? window : c), 
            this.options = a.extend({}, b.DEFAULTS, d), this.selector = (this.options.target || "") + " .nav li > a", 
            this.offsets = [], this.targets = [], this.activeTarget = null, this.scrollHeight = 0, 
            this.$scrollElement.on("scroll.bs.scrollspy", a.proxy(this.process, this)), this.refresh(), 
            this.process();
        }
        function c(c) {
            return this.each(function() {
                var d = a(this), e = d.data("bs.scrollspy"), f = "object" == (typeof c === "undefined" ? "undefined" : (0, 
                _typeof3.default)(c)) && c;
                e || d.data("bs.scrollspy", e = new b(this, f)), "string" == typeof c && e[c]();
            });
        }
        b.VERSION = "3.3.5", b.DEFAULTS = {
            offset: 10
        }, b.prototype.getScrollHeight = function() {
            return this.$scrollElement[0].scrollHeight || Math.max(this.$body[0].scrollHeight, document.documentElement.scrollHeight);
        }, b.prototype.refresh = function() {
            var b = this, c = "offset", d = 0;
            this.offsets = [], this.targets = [], this.scrollHeight = this.getScrollHeight(), 
            a.isWindow(this.$scrollElement[0]) || (c = "position", d = this.$scrollElement.scrollTop()), 
            this.$body.find(this.selector).map(function() {
                var b = a(this), e = b.data("target") || b.attr("href"), f = /^#./.test(e) && a(e);
                return f && f.length && f.is(":visible") && [ [ f[c]().top + d, e ] ] || null;
            }).sort(function(a, b) {
                return a[0] - b[0];
            }).each(function() {
                b.offsets.push(this[0]), b.targets.push(this[1]);
            });
        }, b.prototype.process = function() {
            var a, b = this.$scrollElement.scrollTop() + this.options.offset, c = this.getScrollHeight(), d = this.options.offset + c - this.$scrollElement.height(), e = this.offsets, f = this.targets, g = this.activeTarget;
            if (this.scrollHeight != c && this.refresh(), b >= d) return g != (a = f[f.length - 1]) && this.activate(a);
            if (g && b < e[0]) return this.activeTarget = null, this.clear();
            for (a = e.length; a--; ) {
                g != f[a] && b >= e[a] && (void 0 === e[a + 1] || b < e[a + 1]) && this.activate(f[a]);
            }
        }, b.prototype.activate = function(b) {
            this.activeTarget = b, this.clear();
            var c = this.selector + '[data-target="' + b + '"],' + this.selector + '[href="' + b + '"]', d = a(c).parents("li").addClass("active");
            d.parent(".dropdown-menu").length && (d = d.closest("li.dropdown").addClass("active")), 
            d.trigger("activate.bs.scrollspy");
        }, b.prototype.clear = function() {
            a(this.selector).parentsUntil(this.options.target, ".active").removeClass("active");
        };
        var d = a.fn.scrollspy;
        a.fn.scrollspy = c, a.fn.scrollspy.Constructor = b, a.fn.scrollspy.noConflict = function() {
            return a.fn.scrollspy = d, this;
        }, a(window).on("load.bs.scrollspy.data-api", function() {
            a('[data-spy="scroll"]').each(function() {
                var b = a(this);
                c.call(b, b.data());
            });
        });
    }(jQuery), +function(a) {
        "use strict";
        function b(b) {
            return this.each(function() {
                var d = a(this), e = d.data("bs.tab");
                e || d.data("bs.tab", e = new c(this)), "string" == typeof b && e[b]();
            });
        }
        var c = function c(b) {
            this.element = a(b);
        };
        c.VERSION = "3.3.5", c.TRANSITION_DURATION = 150, c.prototype.show = function() {
            var b = this.element, c = b.closest("ul:not(.dropdown-menu)"), d = b.data("target");
            if (d || (d = b.attr("href"), d = d && d.replace(/.*(?=#[^\s]*$)/, "")), !b.parent("li").hasClass("active")) {
                var e = c.find(".active:last a"), f = a.Event("hide.bs.tab", {
                    relatedTarget: b[0]
                }), g = a.Event("show.bs.tab", {
                    relatedTarget: e[0]
                });
                if (e.trigger(f), b.trigger(g), !g.isDefaultPrevented() && !f.isDefaultPrevented()) {
                    var h = a(d);
                    this.activate(b.closest("li"), c), this.activate(h, h.parent(), function() {
                        e.trigger({
                            type: "hidden.bs.tab",
                            relatedTarget: b[0]
                        }), b.trigger({
                            type: "shown.bs.tab",
                            relatedTarget: e[0]
                        });
                    });
                }
            }
        }, c.prototype.activate = function(b, d, e) {
            function f() {
                g.removeClass("active").find("> .dropdown-menu > .active").removeClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !1), 
                b.addClass("active").find('[data-toggle="tab"]').attr("aria-expanded", !0), h ? (b[0].offsetWidth, 
                b.addClass("in")) : b.removeClass("fade"), b.parent(".dropdown-menu").length && b.closest("li.dropdown").addClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !0), 
                e && e();
            }
            var g = d.find("> .active"), h = e && a.support.transition && (g.length && g.hasClass("fade") || !!d.find("> .fade").length);
            g.length && h ? g.one("bsTransitionEnd", f).emulateTransitionEnd(c.TRANSITION_DURATION) : f(), 
            g.removeClass("in");
        };
        var d = a.fn.tab;
        a.fn.tab = b, a.fn.tab.Constructor = c, a.fn.tab.noConflict = function() {
            return a.fn.tab = d, this;
        };
        var e = function e(c) {
            c.preventDefault(), b.call(a(this), "show");
        };
        a(document).on("click.bs.tab.data-api", '[data-toggle="tab"]', e).on("click.bs.tab.data-api", '[data-toggle="pill"]', e);
    }(jQuery), +function(a) {
        "use strict";
        function b(b) {
            return this.each(function() {
                var d = a(this), e = d.data("bs.affix"), f = "object" == (typeof b === "undefined" ? "undefined" : (0, 
                _typeof3.default)(b)) && b;
                e || d.data("bs.affix", e = new c(this, f)), "string" == typeof b && e[b]();
            });
        }
        var c = function c(b, d) {
            this.options = a.extend({}, c.DEFAULTS, d), this.$target = a(this.options.target).on("scroll.bs.affix.data-api", a.proxy(this.checkPosition, this)).on("click.bs.affix.data-api", a.proxy(this.checkPositionWithEventLoop, this)), 
            this.$element = a(b), this.affixed = null, this.unpin = null, this.pinnedOffset = null, 
            this.checkPosition();
        };
        c.VERSION = "3.3.5", c.RESET = "affix affix-top affix-bottom", c.DEFAULTS = {
            offset: 0,
            target: window
        }, c.prototype.getState = function(a, b, c, d) {
            var e = this.$target.scrollTop(), f = this.$element.offset(), g = this.$target.height();
            if (null != c && "top" == this.affixed) return c > e ? "top" : !1;
            if ("bottom" == this.affixed) return null != c ? e + this.unpin <= f.top ? !1 : "bottom" : a - d >= e + g ? !1 : "bottom";
            var h = null == this.affixed, i = h ? e : f.top, j = h ? g : b;
            return null != c && c >= e ? "top" : null != d && i + j >= a - d ? "bottom" : !1;
        }, c.prototype.getPinnedOffset = function() {
            if (this.pinnedOffset) return this.pinnedOffset;
            this.$element.removeClass(c.RESET).addClass("affix");
            var a = this.$target.scrollTop(), b = this.$element.offset();
            return this.pinnedOffset = b.top - a;
        }, c.prototype.checkPositionWithEventLoop = function() {
            setTimeout(a.proxy(this.checkPosition, this), 1);
        }, c.prototype.checkPosition = function() {
            if (this.$element.is(":visible")) {
                var b = this.$element.height(), d = this.options.offset, e = d.top, f = d.bottom, g = Math.max(a(document).height(), a(document.body).height());
                "object" != (typeof d === "undefined" ? "undefined" : (0, _typeof3.default)(d)) && (f = e = d), 
                "function" == typeof e && (e = d.top(this.$element)), "function" == typeof f && (f = d.bottom(this.$element));
                var h = this.getState(g, b, e, f);
                if (this.affixed != h) {
                    null != this.unpin && this.$element.css("top", "");
                    var i = "affix" + (h ? "-" + h : ""), j = a.Event(i + ".bs.affix");
                    if (this.$element.trigger(j), j.isDefaultPrevented()) return;
                    this.affixed = h, this.unpin = "bottom" == h ? this.getPinnedOffset() : null, this.$element.removeClass(c.RESET).addClass(i).trigger(i.replace("affix", "affixed") + ".bs.affix");
                }
                "bottom" == h && this.$element.offset({
                    top: g - b - f
                });
            }
        };
        var d = a.fn.affix;
        a.fn.affix = b, a.fn.affix.Constructor = c, a.fn.affix.noConflict = function() {
            return a.fn.affix = d, this;
        }, a(window).on("load", function() {
            a('[data-spy="affix"]').each(function() {
                var c = a(this), d = c.data();
                d.offset = d.offset || {}, null != d.offsetBottom && (d.offset.bottom = d.offsetBottom), 
                null != d.offsetTop && (d.offset.top = d.offsetTop), b.call(c, d);
            });
        });
    }(jQuery);
}, function(module, exports, __webpack_require__) {
    "use strict";
    !function(t) {
        function o(t) {
            return "undefined" == typeof t.which ? !0 : "number" == typeof t.which && t.which > 0 ? !t.ctrlKey && !t.metaKey && !t.altKey && 8 != t.which && 9 != t.which && 13 != t.which && 16 != t.which && 17 != t.which && 20 != t.which && 27 != t.which : !1;
        }
        function i(o) {
            var i = t(o);
            i.prop("disabled") || i.closest(".form-group").addClass("is-focused");
        }
        function n(o) {
            o.closest("label").hover(function() {
                var o = t(this).find("input");
                o.prop("disabled") || i(o);
            }, function() {
                e(t(this).find("input"));
            });
        }
        function e(o) {
            t(o).closest(".form-group").removeClass("is-focused");
        }
        t.expr[":"].notmdproc = function(o) {
            return t(o).data("mdproc") ? !1 : !0;
        }, t.material = {
            options: {
                validate: !0,
                input: !0,
                ripples: !0,
                checkbox: !0,
                togglebutton: !0,
                radio: !0,
                arrive: !0,
                autofill: !1,
                withRipples: [ ".btn:not(.btn-link)", ".card-image", ".navbar a:not(.withoutripple)", ".footer a:not(.withoutripple)", ".dropdown-menu a", ".nav-tabs a:not(.withoutripple)", ".withripple", ".pagination li:not(.active):not(.disabled) a:not(.withoutripple)" ].join(","),
                inputElements: "input.form-control, textarea.form-control, select.form-control",
                checkboxElements: ".checkbox > label > input[type=checkbox]",
                togglebuttonElements: ".togglebutton > label > input[type=checkbox]",
                radioElements: ".radio > label > input[type=radio]"
            },
            checkbox: function checkbox(o) {
                var i = t(o ? o : this.options.checkboxElements).filter(":notmdproc").data("mdproc", !0).after("<span class='checkbox-material'><span class='check'></span></span>");
                n(i);
            },
            togglebutton: function togglebutton(o) {
                var i = t(o ? o : this.options.togglebuttonElements).filter(":notmdproc").data("mdproc", !0).after("<span class='toggle'></span>");
                n(i);
            },
            radio: function radio(o) {
                var i = t(o ? o : this.options.radioElements).filter(":notmdproc").data("mdproc", !0).after("<span class='circle'></span><span class='check'></span>");
                n(i);
            },
            input: function input(o) {
                t(o ? o : this.options.inputElements).filter(":notmdproc").data("mdproc", !0).each(function() {
                    var o = t(this), i = o.closest(".form-group");
                    0 === i.length && (o.wrap("<div class='form-group'></div>"), i = o.closest(".form-group")), 
                    o.attr("data-hint") && (o.after("<p class='help-block'>" + o.attr("data-hint") + "</p>"), 
                    o.removeAttr("data-hint"));
                    var n = {
                        "input-lg": "form-group-lg",
                        "input-sm": "form-group-sm"
                    };
                    if (t.each(n, function(t, n) {
                        o.hasClass(t) && (o.removeClass(t), i.addClass(n));
                    }), o.hasClass("floating-label")) {
                        var e = o.attr("placeholder");
                        o.attr("placeholder", null).removeClass("floating-label");
                        var a = o.attr("id"), r = "";
                        a && (r = "for='" + a + "'"), i.addClass("label-floating"), o.after("<label " + r + "class='control-label'>" + e + "</label>");
                    }
                    (null === o.val() || "undefined" == o.val() || "" === o.val()) && i.addClass("is-empty"), 
                    i.append("<span class='material-input'></span>"), i.find("input[type=file]").length > 0 && i.addClass("is-fileinput");
                });
            },
            attachInputEventHandlers: function attachInputEventHandlers() {
                var n = this.options.validate;
                t(document).on("change", ".checkbox input[type=checkbox]", function() {
                    t(this).blur();
                }).on("keydown paste", ".form-control", function(i) {
                    o(i) && t(this).closest(".form-group").removeClass("is-empty");
                }).on("keyup change", ".form-control", function() {
                    var o = t(this), i = o.closest(".form-group"), e = "undefined" == typeof o[0].checkValidity || o[0].checkValidity();
                    "" === o.val() ? i.addClass("is-empty") : i.removeClass("is-empty"), n && (e ? i.removeClass("has-error") : i.addClass("has-error"));
                }).on("focus", ".form-control, .form-group.is-fileinput", function() {
                    i(this);
                }).on("blur", ".form-control, .form-group.is-fileinput", function() {
                    e(this);
                }).on("change", ".form-group input", function() {
                    var o = t(this);
                    if ("file" != o.attr("type")) {
                        var i = o.closest(".form-group"), n = o.val();
                        n ? i.removeClass("is-empty") : i.addClass("is-empty");
                    }
                }).on("change", ".form-group.is-fileinput input[type='file']", function() {
                    var o = t(this), i = o.closest(".form-group"), n = "";
                    t.each(this.files, function(t, o) {
                        n += o.name + ", ";
                    }), n = n.substring(0, n.length - 2), n ? i.removeClass("is-empty") : i.addClass("is-empty"), 
                    i.find("input.form-control[readonly]").val(n);
                });
            },
            ripples: function ripples(o) {
                t(o ? o : this.options.withRipples).ripples();
            },
            autofill: function autofill() {
                var o = setInterval(function() {
                    t("input[type!=checkbox]").each(function() {
                        var o = t(this);
                        o.val() && o.val() !== o.attr("value") && o.trigger("change");
                    });
                }, 100);
                setTimeout(function() {
                    clearInterval(o);
                }, 1e4);
            },
            attachAutofillEventHandlers: function attachAutofillEventHandlers() {
                var o;
                t(document).on("focus", "input", function() {
                    var i = t(this).parents("form").find("input").not("[type=file]");
                    o = setInterval(function() {
                        i.each(function() {
                            var o = t(this);
                            o.val() !== o.attr("value") && o.trigger("change");
                        });
                    }, 100);
                }).on("blur", ".form-group input", function() {
                    clearInterval(o);
                });
            },
            init: function init(o) {
                this.options = t.extend({}, this.options, o);
                var i = t(document);
                t.fn.ripples && this.options.ripples && this.ripples(), this.options.input && (this.input(), 
                this.attachInputEventHandlers()), this.options.checkbox && this.checkbox(), this.options.togglebutton && this.togglebutton(), 
                this.options.radio && this.radio(), this.options.autofill && (this.autofill(), this.attachAutofillEventHandlers()), 
                document.arrive && this.options.arrive && (t.fn.ripples && this.options.ripples && i.arrive(this.options.withRipples, function() {
                    t.material.ripples(t(this));
                }), this.options.input && i.arrive(this.options.inputElements, function() {
                    t.material.input(t(this));
                }), this.options.checkbox && i.arrive(this.options.checkboxElements, function() {
                    t.material.checkbox(t(this));
                }), this.options.radio && i.arrive(this.options.radioElements, function() {
                    t.material.radio(t(this));
                }), this.options.togglebutton && i.arrive(this.options.togglebuttonElements, function() {
                    t.material.togglebutton(t(this));
                }));
            }
        };
    }(jQuery), function(t, o, i, n) {
        "use strict";
        function e(o, i) {
            r = this, this.element = t(o), this.options = t.extend({}, s, i), this._defaults = s, 
            this._name = a, this.init();
        }
        var a = "ripples", r = null, s = {};
        e.prototype.init = function() {
            var i = this.element;
            i.on("mousedown touchstart", function(n) {
                if (!r.isTouch() || "mousedown" !== n.type) {
                    i.find(".ripple-container").length || i.append('<div class="ripple-container"></div>');
                    var e = i.children(".ripple-container"), a = r.getRelY(e, n), s = r.getRelX(e, n);
                    if (a || s) {
                        var l = r.getRipplesColor(i), p = t("<div></div>");
                        p.addClass("ripple").css({
                            left: s,
                            top: a,
                            "background-color": l
                        }), e.append(p), function() {
                            return o.getComputedStyle(p[0]).opacity;
                        }(), r.rippleOn(i, p), setTimeout(function() {
                            r.rippleEnd(p);
                        }, 500), i.on("mouseup mouseleave touchend", function() {
                            p.data("mousedown", "off"), "off" === p.data("animating") && r.rippleOut(p);
                        });
                    }
                }
            });
        }, e.prototype.getNewSize = function(t, o) {
            return Math.max(t.outerWidth(), t.outerHeight()) / o.outerWidth() * 2.5;
        }, e.prototype.getRelX = function(t, o) {
            var i = t.offset();
            return r.isTouch() ? (o = o.originalEvent, 1 === o.touches.length ? o.touches[0].pageX - i.left : !1) : o.pageX - i.left;
        }, e.prototype.getRelY = function(t, o) {
            var i = t.offset();
            return r.isTouch() ? (o = o.originalEvent, 1 === o.touches.length ? o.touches[0].pageY - i.top : !1) : o.pageY - i.top;
        }, e.prototype.getRipplesColor = function(t) {
            var i = t.data("ripple-color") ? t.data("ripple-color") : o.getComputedStyle(t[0]).color;
            return i;
        }, e.prototype.hasTransitionSupport = function() {
            var t = i.body || i.documentElement, o = t.style, e = o.transition !== n || o.WebkitTransition !== n || o.MozTransition !== n || o.MsTransition !== n || o.OTransition !== n;
            return e;
        }, e.prototype.isTouch = function() {
            return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
        }, e.prototype.rippleEnd = function(t) {
            t.data("animating", "off"), "off" === t.data("mousedown") && r.rippleOut(t);
        }, e.prototype.rippleOut = function(t) {
            t.off(), r.hasTransitionSupport() ? t.addClass("ripple-out") : t.animate({
                opacity: 0
            }, 100, function() {
                t.trigger("transitionend");
            }), t.on("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd", function() {
                t.remove();
            });
        }, e.prototype.rippleOn = function(t, o) {
            var i = r.getNewSize(t, o);
            r.hasTransitionSupport() ? o.css({
                "-ms-transform": "scale(" + i + ")",
                "-moz-transform": "scale(" + i + ")",
                "-webkit-transform": "scale(" + i + ")",
                transform: "scale(" + i + ")"
            }).addClass("ripple-on").data("animating", "on").data("mousedown", "on") : o.animate({
                width: 2 * Math.max(t.outerWidth(), t.outerHeight()),
                height: 2 * Math.max(t.outerWidth(), t.outerHeight()),
                "margin-left": -1 * Math.max(t.outerWidth(), t.outerHeight()),
                "margin-top": -1 * Math.max(t.outerWidth(), t.outerHeight()),
                opacity: .2
            }, 500, function() {
                o.trigger("transitionend");
            });
        }, t.fn.ripples = function(o) {
            return this.each(function() {
                t.data(this, "plugin_" + a) || t.data(this, "plugin_" + a, new e(this, o));
            });
        };
    }(jQuery, window, document);
}, function(module, exports, __webpack_require__) {
    var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;
    !function(root, factory) {
        if (true) {
            !(__WEBPACK_AMD_DEFINE_ARRAY__ = [ __webpack_require__(35) ], __WEBPACK_AMD_DEFINE_FACTORY__ = factory, 
            __WEBPACK_AMD_DEFINE_RESULT__ = typeof __WEBPACK_AMD_DEFINE_FACTORY__ === "function" ? __WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__) : __WEBPACK_AMD_DEFINE_FACTORY__, 
            __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
        } else if (typeof exports === "object") {
            module.exports = factory(require("jquery"));
        } else {
            factory(root.jQuery);
        }
    }(this, function($) {
        if (typeof Object.create !== "function") {
            Object.create = function(o) {
                function F() {}
                F.prototype = o;
                return new F();
            };
        }
        var NotyObject = {
            init: function(options) {
                this.options = $.extend({}, $.noty.defaults, options);
                this.options.layout = this.options.custom ? $.noty.layouts["inline"] : $.noty.layouts[this.options.layout];
                if ($.noty.themes[this.options.theme]) {
                    this.options.theme = $.noty.themes[this.options.theme];
                    if (this.options.theme.template) this.options.template = this.options.theme.template;
                    if (this.options.theme.animation) this.options.animation = this.options.theme.animation;
                } else {
                    this.options.themeClassName = this.options.theme;
                }
                this.options = $.extend({}, this.options, this.options.layout.options);
                if (this.options.id) {
                    if ($.noty.store[this.options.id]) {
                        return $.noty.store[this.options.id];
                    }
                } else {
                    this.options.id = "noty_" + new Date().getTime() * Math.floor(Math.random() * 1e6);
                }
                this._build();
                return this;
            },
            _build: function() {
                var $bar = $('<div class="noty_bar noty_type_' + this.options.type + '"></div>').attr("id", this.options.id);
                $bar.append(this.options.template).find(".noty_text").html(this.options.text);
                this.$bar = this.options.layout.parent.object !== null ? $(this.options.layout.parent.object).css(this.options.layout.parent.css).append($bar) : $bar;
                if (this.options.themeClassName) this.$bar.addClass(this.options.themeClassName).addClass("noty_container_type_" + this.options.type);
                if (this.options.buttons) {
                    var $buttons;
                    if (this.$bar.find(".noty_buttons").length > 0) {
                        $buttons = this.$bar.find(".noty_buttons");
                    } else {
                        $buttons = $("<div/>").addClass("noty_buttons");
                        this.options.layout.parent.object !== null ? this.$bar.find(".noty_bar").append($buttons) : this.$bar.append($buttons);
                    }
                    var self = this;
                    $.each(this.options.buttons, function(i, button) {
                        var $button = $("<button/>").addClass(button.addClass ? button.addClass : "gray").html(button.text).attr("id", button.id ? button.id : "button-" + i).attr("title", button.title).appendTo($buttons).on("click", function(event) {
                            if ($.isFunction(button.onClick)) {
                                button.onClick.call($button, self, event);
                            }
                        });
                    });
                } else {
                    this.$bar.find(".noty_buttons").remove();
                }
                if (this.options.progressBar && this.options.timeout) {
                    var $progressBar = $("<div/>").addClass("noty_progress_bar");
                    this.options.layout.parent.object !== null ? this.$bar.find(".noty_bar").append($progressBar) : this.$bar.append($progressBar);
                }
                this.$message = this.$bar.find(".noty_message");
                this.$closeButton = this.$bar.find(".noty_close");
                this.$buttons = this.$bar.find(".noty_buttons");
                this.$progressBar = this.$bar.find(".noty_progress_bar");
                $.noty.store[this.options.id] = this;
            },
            show: function() {
                var self = this;
                self.options.custom ? self.options.custom.find(self.options.layout.container.selector).append(self.$bar) : $(self.options.layout.container.selector).append(self.$bar);
                if (self.options.theme && self.options.theme.style) self.options.theme.style.apply(self);
                $.type(self.options.layout.css) === "function" ? this.options.layout.css.apply(self.$bar) : self.$bar.css(this.options.layout.css || {});
                self.$bar.addClass(self.options.layout.addClass);
                self.options.layout.container.style.apply($(self.options.layout.container.selector), [ self.options.within ]);
                self.showing = true;
                if (self.options.theme && self.options.theme.style) self.options.theme.callback.onShow.apply(this);
                if ($.inArray("click", self.options.closeWith) > -1) self.$bar.css("cursor", "pointer").on("click", function(evt) {
                    self.stopPropagation(evt);
                    if (self.options.callback.onCloseClick) {
                        self.options.callback.onCloseClick.apply(self);
                    }
                    self.close();
                });
                if ($.inArray("hover", self.options.closeWith) > -1) self.$bar.one("mouseenter", function() {
                    self.close();
                });
                if ($.inArray("button", self.options.closeWith) > -1) self.$closeButton.one("click", function(evt) {
                    self.stopPropagation(evt);
                    self.close();
                });
                if ($.inArray("button", self.options.closeWith) == -1) self.$closeButton.remove();
                if (self.options.callback.beforeShow) self.options.callback.beforeShow.apply(self);
                if (typeof self.options.animation.open == "string") {
                    self.animationTypeOpen = "css";
                    self.$bar.css("min-height", self.$bar.innerHeight());
                    self.$bar.on("click", function(e) {
                        self.wasClicked = true;
                    });
                    self.$bar.show();
                    if (self.options.callback.onShow) self.options.callback.onShow.apply(self);
                    self.$bar.addClass(self.options.animation.open).one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend", function() {
                        if (self.options.callback.afterShow) self.options.callback.afterShow.apply(self);
                        self.showing = false;
                        self.shown = true;
                        self.bindTimeout();
                        if (self.hasOwnProperty("wasClicked")) {
                            self.$bar.off("click", function(e) {
                                self.wasClicked = true;
                            });
                            self.close();
                        }
                    });
                } else if (typeof self.options.animation.open == "object" && self.options.animation.open == null) {
                    self.animationTypeOpen = "none";
                    self.showing = false;
                    self.shown = true;
                    self.$bar.show();
                    self.bindTimeout();
                    if (self.options.callback.onShow) self.options.callback.onShow.apply(self);
                    self.$bar.queue(function() {
                        if (self.options.callback.afterShow) self.options.callback.afterShow.apply(self);
                    });
                } else {
                    self.animationTypeOpen = "anim";
                    if (self.options.callback.onShow) self.options.callback.onShow.apply(self);
                    self.$bar.animate(self.options.animation.open, self.options.animation.speed, self.options.animation.easing, function() {
                        if (self.options.callback.afterShow) self.options.callback.afterShow.apply(self);
                        self.showing = false;
                        self.shown = true;
                        self.bindTimeout();
                    });
                }
                return this;
            },
            bindTimeout: function() {
                var self = this;
                if (self.options.timeout) {
                    if (self.options.progressBar && self.$progressBar) {
                        self.$progressBar.css({
                            transition: "all " + self.options.timeout + "ms linear",
                            width: "0%"
                        });
                    }
                    self.queueClose(self.options.timeout);
                    self.$bar.on("mouseenter", self.dequeueClose.bind(self));
                    self.$bar.on("mouseleave", self.queueClose.bind(self, self.options.timeout));
                }
            },
            dequeueClose: function() {
                var self = this;
                if (self.options.progressBar) {
                    this.$progressBar.css({
                        transition: "none",
                        width: "100%"
                    });
                }
                if (!this.closeTimer) return;
                clearTimeout(this.closeTimer);
                this.closeTimer = null;
            },
            queueClose: function(timeout) {
                var self = this;
                if (self.options.progressBar) {
                    self.$progressBar.css({
                        transition: "all " + self.options.timeout + "ms linear",
                        width: "0%"
                    });
                }
                if (this.closeTimer) return;
                self.closeTimer = window.setTimeout(function() {
                    self.close();
                }, timeout);
                return self.closeTimer;
            },
            close: function() {
                if (this.$progressBar) {
                    this.$progressBar.remove();
                }
                if (this.closeTimer) this.dequeueClose();
                if (this.closed) return;
                if (this.$bar && this.$bar.hasClass("i-am-closing-now")) return;
                var self = this;
                if (this.showing && (this.animationTypeOpen == "anim" || this.animationTypeOpen == "none")) {
                    self.$bar.queue(function() {
                        self.close.apply(self);
                    });
                    return;
                } else if (this.showing && this.animationTypeOpen == "css") {
                    self.$bar.on("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend", function() {
                        self.close();
                    });
                }
                if (!this.shown && !this.showing) {
                    var queue = [];
                    $.each($.noty.queue, function(i, n) {
                        if (n.options.id != self.options.id) {
                            queue.push(n);
                        }
                    });
                    $.noty.queue = queue;
                    return;
                }
                self.$bar.addClass("i-am-closing-now");
                if (self.options.callback.onClose) {
                    self.options.callback.onClose.apply(self);
                }
                if (typeof self.options.animation.close == "string") {
                    self.$bar.removeClass(self.options.animation.open).addClass(self.options.animation.close).one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend", function() {
                        if (self.options.callback.afterClose) self.options.callback.afterClose.apply(self);
                        self.closeCleanUp();
                    });
                } else if (typeof self.options.animation.close == "object" && self.options.animation.close == null) {
                    self.$bar.dequeue().hide(0, function() {
                        if (self.options.callback.afterClose) self.options.callback.afterClose.apply(self);
                        self.closeCleanUp();
                    });
                } else {
                    self.$bar.clearQueue().stop().animate(self.options.animation.close, self.options.animation.speed, self.options.animation.easing, function() {
                        if (self.options.callback.afterClose) self.options.callback.afterClose.apply(self);
                    }).promise().done(function() {
                        self.closeCleanUp();
                    });
                }
            },
            closeCleanUp: function() {
                var self = this;
                if (self.options.modal) {
                    $.notyRenderer.setModalCount(-1);
                    if ($.notyRenderer.getModalCount() == 0 && !$.noty.queue.length) $(".noty_modal").fadeOut(self.options.animation.fadeSpeed, function() {
                        $(this).remove();
                    });
                }
                $.notyRenderer.setLayoutCountFor(self, -1);
                if ($.notyRenderer.getLayoutCountFor(self) == 0) $(self.options.layout.container.selector).remove();
                if (typeof self.$bar !== "undefined" && self.$bar !== null) {
                    if (typeof self.options.animation.close == "string") {
                        self.$bar.css("transition", "all 10ms ease").css("border", 0).css("margin", 0).height(0);
                        self.$bar.one("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd", function() {
                            self.$bar.remove();
                            self.$bar = null;
                            self.closed = true;
                            if (self.options.theme.callback && self.options.theme.callback.onClose) {
                                self.options.theme.callback.onClose.apply(self);
                            }
                            self.handleNext();
                        });
                    } else {
                        self.$bar.remove();
                        self.$bar = null;
                        self.closed = true;
                        self.handleNext();
                    }
                } else {
                    self.handleNext();
                }
            },
            handleNext: function() {
                var self = this;
                delete $.noty.store[self.options.id];
                if (self.options.theme.callback && self.options.theme.callback.onClose) {
                    self.options.theme.callback.onClose.apply(self);
                }
                if (!self.options.dismissQueue) {
                    $.noty.ontap = true;
                    $.notyRenderer.render();
                }
                if (self.options.maxVisible > 0 && self.options.dismissQueue) {
                    $.notyRenderer.render();
                }
            },
            setText: function(text) {
                if (!this.closed) {
                    this.options.text = text;
                    this.$bar.find(".noty_text").html(text);
                }
                return this;
            },
            setType: function(type) {
                if (!this.closed) {
                    this.options.type = type;
                    this.options.theme.style.apply(this);
                    this.options.theme.callback.onShow.apply(this);
                }
                return this;
            },
            setTimeout: function(time) {
                if (!this.closed) {
                    var self = this;
                    this.options.timeout = time;
                    self.$bar.delay(self.options.timeout).promise().done(function() {
                        self.close();
                    });
                }
                return this;
            },
            stopPropagation: function(evt) {
                evt = evt || window.event;
                if (typeof evt.stopPropagation !== "undefined") {
                    evt.stopPropagation();
                } else {
                    evt.cancelBubble = true;
                }
            },
            closed: false,
            showing: false,
            shown: false
        };
        $.notyRenderer = {};
        $.notyRenderer.init = function(options) {
            var notification = Object.create(NotyObject).init(options);
            if (notification.options.killer) $.noty.closeAll();
            notification.options.force ? $.noty.queue.unshift(notification) : $.noty.queue.push(notification);
            $.notyRenderer.render();
            return $.noty.returns == "object" ? notification : notification.options.id;
        };
        $.notyRenderer.render = function() {
            var instance = $.noty.queue[0];
            if ($.type(instance) === "object") {
                if (instance.options.dismissQueue) {
                    if (instance.options.maxVisible > 0) {
                        if ($(instance.options.layout.container.selector + " > li").length < instance.options.maxVisible) {
                            $.notyRenderer.show($.noty.queue.shift());
                        } else {}
                    } else {
                        $.notyRenderer.show($.noty.queue.shift());
                    }
                } else {
                    if ($.noty.ontap) {
                        $.notyRenderer.show($.noty.queue.shift());
                        $.noty.ontap = false;
                    }
                }
            } else {
                $.noty.ontap = true;
            }
        };
        $.notyRenderer.show = function(notification) {
            if (notification.options.modal) {
                $.notyRenderer.createModalFor(notification);
                $.notyRenderer.setModalCount(+1);
            }
            if (notification.options.custom) {
                if (notification.options.custom.find(notification.options.layout.container.selector).length == 0) {
                    notification.options.custom.append($(notification.options.layout.container.object).addClass("i-am-new"));
                } else {
                    notification.options.custom.find(notification.options.layout.container.selector).removeClass("i-am-new");
                }
            } else {
                if ($(notification.options.layout.container.selector).length == 0) {
                    $("body").append($(notification.options.layout.container.object).addClass("i-am-new"));
                } else {
                    $(notification.options.layout.container.selector).removeClass("i-am-new");
                }
            }
            $.notyRenderer.setLayoutCountFor(notification, +1);
            notification.show();
        };
        $.notyRenderer.createModalFor = function(notification) {
            if ($(".noty_modal").length == 0) {
                var modal = $("<div/>").addClass("noty_modal").addClass(notification.options.theme).data("noty_modal_count", 0);
                if (notification.options.theme.modal && notification.options.theme.modal.css) modal.css(notification.options.theme.modal.css);
                modal.prependTo($("body")).fadeIn(notification.options.animation.fadeSpeed);
                if ($.inArray("backdrop", notification.options.closeWith) > -1) modal.on("click", function() {
                    $.noty.closeAll();
                });
            }
        };
        $.notyRenderer.getLayoutCountFor = function(notification) {
            return $(notification.options.layout.container.selector).data("noty_layout_count") || 0;
        };
        $.notyRenderer.setLayoutCountFor = function(notification, arg) {
            return $(notification.options.layout.container.selector).data("noty_layout_count", $.notyRenderer.getLayoutCountFor(notification) + arg);
        };
        $.notyRenderer.getModalCount = function() {
            return $(".noty_modal").data("noty_modal_count") || 0;
        };
        $.notyRenderer.setModalCount = function(arg) {
            return $(".noty_modal").data("noty_modal_count", $.notyRenderer.getModalCount() + arg);
        };
        $.fn.noty = function(options) {
            options.custom = $(this);
            return $.notyRenderer.init(options);
        };
        $.noty = {};
        $.noty.queue = [];
        $.noty.ontap = true;
        $.noty.layouts = {};
        $.noty.themes = {};
        $.noty.returns = "object";
        $.noty.store = {};
        $.noty.get = function(id) {
            return $.noty.store.hasOwnProperty(id) ? $.noty.store[id] : false;
        };
        $.noty.close = function(id) {
            return $.noty.get(id) ? $.noty.get(id).close() : false;
        };
        $.noty.setText = function(id, text) {
            return $.noty.get(id) ? $.noty.get(id).setText(text) : false;
        };
        $.noty.setType = function(id, type) {
            return $.noty.get(id) ? $.noty.get(id).setType(type) : false;
        };
        $.noty.clearQueue = function() {
            $.noty.queue = [];
        };
        $.noty.closeAll = function() {
            $.noty.clearQueue();
            $.each($.noty.store, function(id, noty) {
                noty.close();
            });
        };
        var windowAlert = window.alert;
        $.noty.consumeAlert = function(options) {
            window.alert = function(text) {
                if (options) options.text = text; else options = {
                    text: text
                };
                $.notyRenderer.init(options);
            };
        };
        $.noty.stopConsumeAlert = function() {
            window.alert = windowAlert;
        };
        $.noty.defaults = {
            layout: "topRight",
            theme: "relax",
            type: "alert",
            text: "",
            progressBar: false,
            dismissQueue: true,
            template: '<div class="noty_message"><span class="noty_text"></span><div class="noty_close"></div></div>',
            animation: {
                open: {
                    height: "toggle"
                },
                close: {
                    height: "toggle"
                },
                easing: "swing",
                speed: 500,
                fadeSpeed: "fast"
            },
            timeout: false,
            force: false,
            modal: false,
            maxVisible: 5,
            killer: false,
            closeWith: [ "click" ],
            callback: {
                beforeShow: function() {},
                onShow: function() {},
                afterShow: function() {},
                onClose: function() {},
                afterClose: function() {},
                onCloseClick: function() {}
            },
            buttons: false
        };
        $(window).on("resize", function() {
            $.each($.noty.layouts, function(index, layout) {
                layout.container.style.apply($(layout.container.selector));
            });
        });
        window.noty = function noty(options) {
            return $.notyRenderer.init(options);
        };
        $.noty.layouts.bottom = {
            name: "bottom",
            options: {},
            container: {
                object: '<ul id="noty_bottom_layout_container" />',
                selector: "ul#noty_bottom_layout_container",
                style: function() {
                    $(this).css({
                        bottom: 0,
                        left: "5%",
                        position: "fixed",
                        width: "90%",
                        height: "auto",
                        margin: 0,
                        padding: 0,
                        listStyleType: "none",
                        zIndex: 9999999
                    });
                }
            },
            parent: {
                object: "<li />",
                selector: "li",
                css: {}
            },
            css: {
                display: "none"
            },
            addClass: ""
        };
        $.noty.layouts.bottomCenter = {
            name: "bottomCenter",
            options: {},
            container: {
                object: '<ul id="noty_bottomCenter_layout_container" />',
                selector: "ul#noty_bottomCenter_layout_container",
                style: function() {
                    $(this).css({
                        bottom: 20,
                        left: 0,
                        position: "fixed",
                        width: "310px",
                        height: "auto",
                        margin: 0,
                        padding: 0,
                        listStyleType: "none",
                        zIndex: 1e7
                    });
                    $(this).css({
                        left: ($(window).width() - $(this).outerWidth(false)) / 2 + "px"
                    });
                }
            },
            parent: {
                object: "<li />",
                selector: "li",
                css: {}
            },
            css: {
                display: "none",
                width: "310px"
            },
            addClass: ""
        };
        $.noty.layouts.bottomLeft = {
            name: "bottomLeft",
            options: {},
            container: {
                object: '<ul id="noty_bottomLeft_layout_container" />',
                selector: "ul#noty_bottomLeft_layout_container",
                style: function() {
                    $(this).css({
                        bottom: 20,
                        left: 20,
                        position: "fixed",
                        width: "310px",
                        height: "auto",
                        margin: 0,
                        padding: 0,
                        listStyleType: "none",
                        zIndex: 1e7
                    });
                    if (window.innerWidth < 600) {
                        $(this).css({
                            left: 5
                        });
                    }
                }
            },
            parent: {
                object: "<li />",
                selector: "li",
                css: {}
            },
            css: {
                display: "none",
                width: "310px"
            },
            addClass: ""
        };
        $.noty.layouts.bottomRight = {
            name: "bottomRight",
            options: {},
            container: {
                object: '<ul id="noty_bottomRight_layout_container" />',
                selector: "ul#noty_bottomRight_layout_container",
                style: function() {
                    $(this).css({
                        bottom: 20,
                        right: 20,
                        position: "fixed",
                        width: "310px",
                        height: "auto",
                        margin: 0,
                        padding: 0,
                        listStyleType: "none",
                        zIndex: 1e7
                    });
                    if (window.innerWidth < 600) {
                        $(this).css({
                            right: 5
                        });
                    }
                }
            },
            parent: {
                object: "<li />",
                selector: "li",
                css: {}
            },
            css: {
                display: "none",
                width: "310px"
            },
            addClass: ""
        };
        $.noty.layouts.center = {
            name: "center",
            options: {},
            container: {
                object: '<ul id="noty_center_layout_container" />',
                selector: "ul#noty_center_layout_container",
                style: function() {
                    $(this).css({
                        position: "fixed",
                        width: "310px",
                        height: "auto",
                        margin: 0,
                        padding: 0,
                        listStyleType: "none",
                        zIndex: 1e7
                    });
                    var dupe = $(this).clone().css({
                        visibility: "hidden",
                        display: "block",
                        position: "absolute",
                        top: 0,
                        left: 0
                    }).attr("id", "dupe");
                    $("body").append(dupe);
                    dupe.find(".i-am-closing-now").remove();
                    dupe.find("li").css("display", "block");
                    var actual_height = dupe.height();
                    dupe.remove();
                    if ($(this).hasClass("i-am-new")) {
                        $(this).css({
                            left: ($(window).width() - $(this).outerWidth(false)) / 2 + "px",
                            top: ($(window).height() - actual_height) / 2 + "px"
                        });
                    } else {
                        $(this).animate({
                            left: ($(window).width() - $(this).outerWidth(false)) / 2 + "px",
                            top: ($(window).height() - actual_height) / 2 + "px"
                        }, 500);
                    }
                }
            },
            parent: {
                object: "<li />",
                selector: "li",
                css: {}
            },
            css: {
                display: "none",
                width: "310px"
            },
            addClass: ""
        };
        $.noty.layouts.centerLeft = {
            name: "centerLeft",
            options: {},
            container: {
                object: '<ul id="noty_centerLeft_layout_container" />',
                selector: "ul#noty_centerLeft_layout_container",
                style: function() {
                    $(this).css({
                        left: 20,
                        position: "fixed",
                        width: "310px",
                        height: "auto",
                        margin: 0,
                        padding: 0,
                        listStyleType: "none",
                        zIndex: 1e7
                    });
                    var dupe = $(this).clone().css({
                        visibility: "hidden",
                        display: "block",
                        position: "absolute",
                        top: 0,
                        left: 0
                    }).attr("id", "dupe");
                    $("body").append(dupe);
                    dupe.find(".i-am-closing-now").remove();
                    dupe.find("li").css("display", "block");
                    var actual_height = dupe.height();
                    dupe.remove();
                    if ($(this).hasClass("i-am-new")) {
                        $(this).css({
                            top: ($(window).height() - actual_height) / 2 + "px"
                        });
                    } else {
                        $(this).animate({
                            top: ($(window).height() - actual_height) / 2 + "px"
                        }, 500);
                    }
                    if (window.innerWidth < 600) {
                        $(this).css({
                            left: 5
                        });
                    }
                }
            },
            parent: {
                object: "<li />",
                selector: "li",
                css: {}
            },
            css: {
                display: "none",
                width: "310px"
            },
            addClass: ""
        };
        $.noty.layouts.centerRight = {
            name: "centerRight",
            options: {},
            container: {
                object: '<ul id="noty_centerRight_layout_container" />',
                selector: "ul#noty_centerRight_layout_container",
                style: function() {
                    $(this).css({
                        right: 20,
                        position: "fixed",
                        width: "310px",
                        height: "auto",
                        margin: 0,
                        padding: 0,
                        listStyleType: "none",
                        zIndex: 1e7
                    });
                    var dupe = $(this).clone().css({
                        visibility: "hidden",
                        display: "block",
                        position: "absolute",
                        top: 0,
                        left: 0
                    }).attr("id", "dupe");
                    $("body").append(dupe);
                    dupe.find(".i-am-closing-now").remove();
                    dupe.find("li").css("display", "block");
                    var actual_height = dupe.height();
                    dupe.remove();
                    if ($(this).hasClass("i-am-new")) {
                        $(this).css({
                            top: ($(window).height() - actual_height) / 2 + "px"
                        });
                    } else {
                        $(this).animate({
                            top: ($(window).height() - actual_height) / 2 + "px"
                        }, 500);
                    }
                    if (window.innerWidth < 600) {
                        $(this).css({
                            right: 5
                        });
                    }
                }
            },
            parent: {
                object: "<li />",
                selector: "li",
                css: {}
            },
            css: {
                display: "none",
                width: "310px"
            },
            addClass: ""
        };
        $.noty.layouts.inline = {
            name: "inline",
            options: {},
            container: {
                object: '<ul class="noty_inline_layout_container" />',
                selector: "ul.noty_inline_layout_container",
                style: function() {
                    $(this).css({
                        width: "100%",
                        height: "auto",
                        margin: 0,
                        padding: 0,
                        listStyleType: "none",
                        zIndex: 9999999
                    });
                }
            },
            parent: {
                object: "<li />",
                selector: "li",
                css: {}
            },
            css: {
                display: "none"
            },
            addClass: ""
        };
        $.noty.layouts.top = {
            name: "top",
            options: {},
            container: {
                object: '<ul id="noty_top_layout_container" />',
                selector: "ul#noty_top_layout_container",
                style: function() {
                    $(this).css({
                        top: 0,
                        left: "5%",
                        position: "fixed",
                        width: "90%",
                        height: "auto",
                        margin: 0,
                        padding: 0,
                        listStyleType: "none",
                        zIndex: 9999999
                    });
                }
            },
            parent: {
                object: "<li />",
                selector: "li",
                css: {}
            },
            css: {
                display: "none"
            },
            addClass: ""
        };
        $.noty.layouts.topCenter = {
            name: "topCenter",
            options: {},
            container: {
                object: '<ul id="noty_topCenter_layout_container" />',
                selector: "ul#noty_topCenter_layout_container",
                style: function() {
                    $(this).css({
                        top: 20,
                        left: 0,
                        position: "fixed",
                        width: "310px",
                        height: "auto",
                        margin: 0,
                        padding: 0,
                        listStyleType: "none",
                        zIndex: 1e7
                    });
                    $(this).css({
                        left: ($(window).width() - $(this).outerWidth(false)) / 2 + "px"
                    });
                }
            },
            parent: {
                object: "<li />",
                selector: "li",
                css: {}
            },
            css: {
                display: "none",
                width: "310px"
            },
            addClass: ""
        };
        $.noty.layouts.topLeft = {
            name: "topLeft",
            options: {},
            container: {
                object: '<ul id="noty_topLeft_layout_container" />',
                selector: "ul#noty_topLeft_layout_container",
                style: function() {
                    $(this).css({
                        top: 20,
                        left: 20,
                        position: "fixed",
                        width: "310px",
                        height: "auto",
                        margin: 0,
                        padding: 0,
                        listStyleType: "none",
                        zIndex: 1e7
                    });
                    if (window.innerWidth < 600) {
                        $(this).css({
                            left: 5
                        });
                    }
                }
            },
            parent: {
                object: "<li />",
                selector: "li",
                css: {}
            },
            css: {
                display: "none",
                width: "310px"
            },
            addClass: ""
        };
        $.noty.layouts.topRight = {
            name: "topRight",
            options: {},
            container: {
                object: '<ul id="noty_topRight_layout_container" />',
                selector: "ul#noty_topRight_layout_container",
                style: function() {
                    $(this).css({
                        top: 20,
                        right: 20,
                        position: "fixed",
                        width: "310px",
                        height: "auto",
                        margin: 0,
                        padding: 0,
                        listStyleType: "none",
                        zIndex: 1e7
                    });
                    if (window.innerWidth < 600) {
                        $(this).css({
                            right: 5
                        });
                    }
                }
            },
            parent: {
                object: "<li />",
                selector: "li",
                css: {}
            },
            css: {
                display: "none",
                width: "310px"
            },
            addClass: ""
        };
        $.noty.themes.bootstrapTheme = {
            name: "bootstrapTheme",
            modal: {
                css: {
                    position: "fixed",
                    width: "100%",
                    height: "100%",
                    backgroundColor: "#000",
                    zIndex: 1e4,
                    opacity: .6,
                    display: "none",
                    left: 0,
                    top: 0,
                    wordBreak: "break-all"
                }
            },
            style: function() {
                var containerSelector = this.options.layout.container.selector;
                $(containerSelector).addClass("list-group");
                this.$closeButton.append('<span aria-hidden="true">&times;</span><span class="sr-only">Close</span>');
                this.$closeButton.addClass("close");
                this.$bar.addClass("list-group-item").css("padding", "0px").css("position", "relative");
                this.$progressBar.css({
                    position: "absolute",
                    left: 0,
                    bottom: 0,
                    height: 4,
                    width: "100%",
                    backgroundColor: "#000000",
                    opacity: .2,
                    "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=20)",
                    filter: "alpha(opacity=20)"
                });
                switch (this.options.type) {
                  case "alert":
                  case "notification":
                    this.$bar.addClass("list-group-item-info");
                    break;

                  case "warning":
                    this.$bar.addClass("list-group-item-warning");
                    break;

                  case "error":
                    this.$bar.addClass("list-group-item-danger");
                    break;

                  case "information":
                    this.$bar.addClass("list-group-item-info");
                    break;

                  case "success":
                    this.$bar.addClass("list-group-item-success");
                    break;
                }
                this.$message.css({
                    textAlign: "center",
                    padding: "8px 10px 9px",
                    width: "auto",
                    position: "relative"
                });
            },
            callback: {
                onShow: function() {},
                onClose: function() {}
            }
        };
        $.noty.themes.defaultTheme = {
            name: "defaultTheme",
            helpers: {
                borderFix: function() {
                    if (this.options.dismissQueue) {
                        var selector = this.options.layout.container.selector + " " + this.options.layout.parent.selector;
                        switch (this.options.layout.name) {
                          case "top":
                            $(selector).css({
                                borderRadius: "0px 0px 0px 0px"
                            });
                            $(selector).last().css({
                                borderRadius: "0px 0px 5px 5px"
                            });
                            break;

                          case "topCenter":
                          case "topLeft":
                          case "topRight":
                          case "bottomCenter":
                          case "bottomLeft":
                          case "bottomRight":
                          case "center":
                          case "centerLeft":
                          case "centerRight":
                          case "inline":
                            $(selector).css({
                                borderRadius: "0px 0px 0px 0px"
                            });
                            $(selector).first().css({
                                "border-top-left-radius": "5px",
                                "border-top-right-radius": "5px"
                            });
                            $(selector).last().css({
                                "border-bottom-left-radius": "5px",
                                "border-bottom-right-radius": "5px"
                            });
                            break;

                          case "bottom":
                            $(selector).css({
                                borderRadius: "0px 0px 0px 0px"
                            });
                            $(selector).first().css({
                                borderRadius: "5px 5px 0px 0px"
                            });
                            break;

                          default:
                            break;
                        }
                    }
                }
            },
            modal: {
                css: {
                    position: "fixed",
                    width: "100%",
                    height: "100%",
                    backgroundColor: "#000",
                    zIndex: 1e4,
                    opacity: .6,
                    display: "none",
                    left: 0,
                    top: 0
                }
            },
            style: function() {
                this.$bar.css({
                    overflow: "hidden",
                    background: "url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABsAAAAoCAQAAAClM0ndAAAAhklEQVR4AdXO0QrCMBBE0bttkk38/w8WRERpdyjzVOc+HxhIHqJGMQcFFkpYRQotLLSw0IJ5aBdovruMYDA/kT8plF9ZKLFQcgF18hDj1SbQOMlCA4kao0iiXmah7qBWPdxpohsgVZyj7e5I9KcID+EhiDI5gxBYKLBQYKHAQoGFAoEks/YEGHYKB7hFxf0AAAAASUVORK5CYII=') repeat-x scroll left top #fff",
                    position: "relative"
                });
                this.$progressBar.css({
                    position: "absolute",
                    left: 0,
                    bottom: 0,
                    height: 4,
                    width: "100%",
                    backgroundColor: "#000000",
                    opacity: .2,
                    "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=20)",
                    filter: "alpha(opacity=20)"
                });
                this.$message.css({
                    textAlign: "center",
                    padding: "8px 10px 9px",
                    width: "auto",
                    position: "relative"
                });
                this.$closeButton.css({
                    position: "absolute",
                    top: 4,
                    right: 4,
                    width: 10,
                    height: 10,
                    background: "url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAQAAAAnOwc2AAAAxUlEQVR4AR3MPUoDURSA0e++uSkkOxC3IAOWNtaCIDaChfgXBMEZbQRByxCwk+BasgQRZLSYoLgDQbARxry8nyumPcVRKDfd0Aa8AsgDv1zp6pYd5jWOwhvebRTbzNNEw5BSsIpsj/kurQBnmk7sIFcCF5yyZPDRG6trQhujXYosaFoc+2f1MJ89uc76IND6F9BvlXUdpb6xwD2+4q3me3bysiHvtLYrUJto7PD/ve7LNHxSg/woN2kSz4txasBdhyiz3ugPGetTjm3XRokAAAAASUVORK5CYII=)",
                    display: "none",
                    cursor: "pointer"
                });
                this.$buttons.css({
                    padding: 5,
                    textAlign: "right",
                    borderTop: "1px solid #ccc",
                    backgroundColor: "#fff"
                });
                this.$buttons.find("button").css({
                    marginLeft: 5
                });
                this.$buttons.find("button:first").css({
                    marginLeft: 0
                });
                this.$bar.on({
                    mouseenter: function() {
                        $(this).find(".noty_close").stop().fadeTo("normal", 1);
                    },
                    mouseleave: function() {
                        $(this).find(".noty_close").stop().fadeTo("normal", 0);
                    }
                });
                switch (this.options.layout.name) {
                  case "top":
                    this.$bar.css({
                        borderRadius: "0px 0px 5px 5px",
                        borderBottom: "2px solid #eee",
                        borderLeft: "2px solid #eee",
                        borderRight: "2px solid #eee",
                        boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)"
                    });
                    break;

                  case "topCenter":
                  case "center":
                  case "bottomCenter":
                  case "inline":
                    this.$bar.css({
                        borderRadius: "5px",
                        border: "1px solid #eee",
                        boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)"
                    });
                    this.$message.css({
                        textAlign: "center"
                    });
                    break;

                  case "topLeft":
                  case "topRight":
                  case "bottomLeft":
                  case "bottomRight":
                  case "centerLeft":
                  case "centerRight":
                    this.$bar.css({
                        borderRadius: "5px",
                        border: "1px solid #eee",
                        boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)"
                    });
                    this.$message.css({
                        textAlign: "left"
                    });
                    break;

                  case "bottom":
                    this.$bar.css({
                        borderRadius: "5px 5px 0px 0px",
                        borderTop: "2px solid #eee",
                        borderLeft: "2px solid #eee",
                        borderRight: "2px solid #eee",
                        boxShadow: "0 -2px 4px rgba(0, 0, 0, 0.1)"
                    });
                    break;

                  default:
                    this.$bar.css({
                        border: "2px solid #eee",
                        boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)"
                    });
                    break;
                }
                switch (this.options.type) {
                  case "alert":
                  case "notification":
                    this.$bar.css({
                        backgroundColor: "#FFF",
                        borderColor: "#CCC",
                        color: "#444"
                    });
                    break;

                  case "warning":
                    this.$bar.css({
                        backgroundColor: "#FFEAA8",
                        borderColor: "#FFC237",
                        color: "#826200"
                    });
                    this.$buttons.css({
                        borderTop: "1px solid #FFC237"
                    });
                    break;

                  case "error":
                    this.$bar.css({
                        backgroundColor: "red",
                        borderColor: "darkred",
                        color: "#FFF"
                    });
                    this.$message.css({
                        fontWeight: "bold"
                    });
                    this.$buttons.css({
                        borderTop: "1px solid darkred"
                    });
                    break;

                  case "information":
                    this.$bar.css({
                        backgroundColor: "#57B7E2",
                        borderColor: "#0B90C4",
                        color: "#FFF"
                    });
                    this.$buttons.css({
                        borderTop: "1px solid #0B90C4"
                    });
                    break;

                  case "success":
                    this.$bar.css({
                        backgroundColor: "lightgreen",
                        borderColor: "#50C24E",
                        color: "darkgreen"
                    });
                    this.$buttons.css({
                        borderTop: "1px solid #50C24E"
                    });
                    break;

                  default:
                    this.$bar.css({
                        backgroundColor: "#FFF",
                        borderColor: "#CCC",
                        color: "#444"
                    });
                    break;
                }
            },
            callback: {
                onShow: function() {
                    $.noty.themes.defaultTheme.helpers.borderFix.apply(this);
                },
                onClose: function() {
                    $.noty.themes.defaultTheme.helpers.borderFix.apply(this);
                }
            }
        };
        $.noty.themes.metroui = {
            name: "metroui",
            helpers: {},
            modal: {
                css: {
                    position: "fixed",
                    width: "100%",
                    height: "100%",
                    backgroundColor: "#000",
                    zIndex: 1e4,
                    opacity: .6,
                    display: "none",
                    left: 0,
                    top: 0
                }
            },
            style: function() {
                this.$bar.css({
                    overflow: "hidden",
                    margin: "4px 0",
                    borderRadius: "0",
                    position: "relative"
                });
                this.$progressBar.css({
                    position: "absolute",
                    left: 0,
                    bottom: 0,
                    height: 4,
                    width: "100%",
                    backgroundColor: "#000000",
                    opacity: .2,
                    "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=20)",
                    filter: "alpha(opacity=20)"
                });
                this.$message.css({
                    textAlign: "center",
                    padding: "1.25rem",
                    width: "auto",
                    position: "relative"
                });
                this.$closeButton.css({
                    position: "absolute",
                    top: ".25rem",
                    right: ".25rem",
                    width: 10,
                    height: 10,
                    background: "url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAQAAAAnOwc2AAAAxUlEQVR4AR3MPUoDURSA0e++uSkkOxC3IAOWNtaCIDaChfgXBMEZbQRByxCwk+BasgQRZLSYoLgDQbARxry8nyumPcVRKDfd0Aa8AsgDv1zp6pYd5jWOwhvebRTbzNNEw5BSsIpsj/kurQBnmk7sIFcCF5yyZPDRG6trQhujXYosaFoc+2f1MJ89uc76IND6F9BvlXUdpb6xwD2+4q3me3bysiHvtLYrUJto7PD/ve7LNHxSg/woN2kSz4txasBdhyiz3ugPGetTjm3XRokAAAAASUVORK5CYII=)",
                    display: "none",
                    cursor: "pointer"
                });
                this.$buttons.css({
                    padding: 5,
                    textAlign: "right",
                    borderTop: "1px solid #ccc",
                    backgroundColor: "#fff"
                });
                this.$buttons.find("button").css({
                    marginLeft: 5
                });
                this.$buttons.find("button:first").css({
                    marginLeft: 0
                });
                this.$bar.on({
                    mouseenter: function() {
                        $(this).find(".noty_close").stop().fadeTo("normal", 1);
                    },
                    mouseleave: function() {
                        $(this).find(".noty_close").stop().fadeTo("normal", 0);
                    }
                });
                switch (this.options.layout.name) {
                  case "top":
                    this.$bar.css({
                        border: "none",
                        boxShadow: "0 0 5px 0 rgba(0, 0, 0, 0.3)"
                    });
                    break;

                  case "topCenter":
                  case "center":
                  case "bottomCenter":
                  case "inline":
                    this.$bar.css({
                        border: "none",
                        boxShadow: "0 0 5px 0 rgba(0, 0, 0, 0.3)"
                    });
                    this.$message.css({
                        textAlign: "center"
                    });
                    break;

                  case "topLeft":
                  case "topRight":
                  case "bottomLeft":
                  case "bottomRight":
                  case "centerLeft":
                  case "centerRight":
                    this.$bar.css({
                        border: "none",
                        boxShadow: "0 0 5px 0 rgba(0, 0, 0, 0.3)"
                    });
                    this.$message.css({
                        textAlign: "left"
                    });
                    break;

                  case "bottom":
                    this.$bar.css({
                        border: "none",
                        boxShadow: "0 0 5px 0 rgba(0, 0, 0, 0.3)"
                    });
                    break;

                  default:
                    this.$bar.css({
                        border: "none",
                        boxShadow: "0 0 5px 0 rgba(0, 0, 0, 0.3)"
                    });
                    break;
                }
                switch (this.options.type) {
                  case "alert":
                  case "notification":
                    this.$bar.css({
                        backgroundColor: "#fff",
                        border: "none",
                        color: "#1d1d1d"
                    });
                    break;

                  case "warning":
                    this.$bar.css({
                        backgroundColor: "#FA6800",
                        border: "none",
                        color: "#fff"
                    });
                    this.$buttons.css({
                        borderTop: "1px solid #FA6800"
                    });
                    break;

                  case "error":
                    this.$bar.css({
                        backgroundColor: "#CE352C",
                        border: "none",
                        color: "#fff"
                    });
                    this.$message.css({
                        fontWeight: "bold"
                    });
                    this.$buttons.css({
                        borderTop: "1px solid #CE352C"
                    });
                    break;

                  case "information":
                    this.$bar.css({
                        backgroundColor: "#1BA1E2",
                        border: "none",
                        color: "#fff"
                    });
                    this.$buttons.css({
                        borderTop: "1px solid #1BA1E2"
                    });
                    break;

                  case "success":
                    this.$bar.css({
                        backgroundColor: "#60A917",
                        border: "none",
                        color: "#fff"
                    });
                    this.$buttons.css({
                        borderTop: "1px solid #50C24E"
                    });
                    break;

                  default:
                    this.$bar.css({
                        backgroundColor: "#fff",
                        border: "none",
                        color: "#1d1d1d"
                    });
                    break;
                }
            },
            callback: {
                onShow: function() {},
                onClose: function() {}
            }
        };
        $.noty.themes.relax = {
            name: "relax",
            helpers: {},
            modal: {
                css: {
                    position: "fixed",
                    width: "100%",
                    height: "100%",
                    backgroundColor: "#000",
                    zIndex: 1e4,
                    opacity: .6,
                    display: "none",
                    left: 0,
                    top: 0
                }
            },
            style: function() {
                this.$bar.css({
                    overflow: "hidden",
                    margin: "4px 0",
                    borderRadius: "2px",
                    position: "relative"
                });
                this.$progressBar.css({
                    position: "absolute",
                    left: 0,
                    bottom: 0,
                    height: 4,
                    width: "100%",
                    backgroundColor: "#000000",
                    opacity: .2,
                    "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=20)",
                    filter: "alpha(opacity=20)"
                });
                this.$message.css({
                    textAlign: "center",
                    padding: "10px",
                    width: "auto",
                    position: "relative"
                });
                this.$closeButton.css({
                    position: "absolute",
                    top: 4,
                    right: 4,
                    width: 10,
                    height: 10,
                    background: "url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAQAAAAnOwc2AAAAxUlEQVR4AR3MPUoDURSA0e++uSkkOxC3IAOWNtaCIDaChfgXBMEZbQRByxCwk+BasgQRZLSYoLgDQbARxry8nyumPcVRKDfd0Aa8AsgDv1zp6pYd5jWOwhvebRTbzNNEw5BSsIpsj/kurQBnmk7sIFcCF5yyZPDRG6trQhujXYosaFoc+2f1MJ89uc76IND6F9BvlXUdpb6xwD2+4q3me3bysiHvtLYrUJto7PD/ve7LNHxSg/woN2kSz4txasBdhyiz3ugPGetTjm3XRokAAAAASUVORK5CYII=)",
                    display: "none",
                    cursor: "pointer"
                });
                this.$buttons.css({
                    padding: 5,
                    textAlign: "right",
                    borderTop: "1px solid #ccc",
                    backgroundColor: "#fff"
                });
                this.$buttons.find("button").css({
                    marginLeft: 5
                });
                this.$buttons.find("button:first").css({
                    marginLeft: 0
                });
                this.$bar.on({
                    mouseenter: function() {
                        $(this).find(".noty_close").stop().fadeTo("normal", 1);
                    },
                    mouseleave: function() {
                        $(this).find(".noty_close").stop().fadeTo("normal", 0);
                    }
                });
                switch (this.options.layout.name) {
                  case "top":
                    this.$bar.css({
                        borderBottom: "2px solid #eee",
                        borderLeft: "2px solid #eee",
                        borderRight: "2px solid #eee",
                        borderTop: "2px solid #eee",
                        boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)"
                    });
                    break;

                  case "topCenter":
                  case "center":
                  case "bottomCenter":
                  case "inline":
                    this.$bar.css({
                        border: "1px solid #eee",
                        boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)"
                    });
                    this.$message.css({
                        textAlign: "center"
                    });
                    break;

                  case "topLeft":
                  case "topRight":
                  case "bottomLeft":
                  case "bottomRight":
                  case "centerLeft":
                  case "centerRight":
                    this.$bar.css({
                        border: "1px solid #eee",
                        boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)"
                    });
                    this.$message.css({
                        textAlign: "left"
                    });
                    break;

                  case "bottom":
                    this.$bar.css({
                        borderTop: "2px solid #eee",
                        borderLeft: "2px solid #eee",
                        borderRight: "2px solid #eee",
                        borderBottom: "2px solid #eee",
                        boxShadow: "0 -2px 4px rgba(0, 0, 0, 0.1)"
                    });
                    break;

                  default:
                    this.$bar.css({
                        border: "2px solid #eee",
                        boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)"
                    });
                    break;
                }
                switch (this.options.type) {
                  case "alert":
                  case "notification":
                    this.$bar.css({
                        backgroundColor: "#FFF",
                        borderColor: "#dedede",
                        color: "#444"
                    });
                    break;

                  case "warning":
                    this.$bar.css({
                        backgroundColor: "#FFEAA8",
                        borderColor: "#FFC237",
                        color: "#826200"
                    });
                    this.$buttons.css({
                        borderTop: "1px solid #FFC237"
                    });
                    break;

                  case "error":
                    this.$bar.css({
                        backgroundColor: "#FF8181",
                        borderColor: "#e25353",
                        color: "#FFF"
                    });
                    this.$message.css({
                        fontWeight: "bold"
                    });
                    this.$buttons.css({
                        borderTop: "1px solid darkred"
                    });
                    break;

                  case "information":
                    this.$bar.css({
                        backgroundColor: "#78C5E7",
                        borderColor: "#3badd6",
                        color: "#FFF"
                    });
                    this.$buttons.css({
                        borderTop: "1px solid #0B90C4"
                    });
                    break;

                  case "success":
                    this.$bar.css({
                        backgroundColor: "#BCF5BC",
                        borderColor: "#7cdd77",
                        color: "darkgreen"
                    });
                    this.$buttons.css({
                        borderTop: "1px solid #50C24E"
                    });
                    break;

                  default:
                    this.$bar.css({
                        backgroundColor: "#FFF",
                        borderColor: "#CCC",
                        color: "#444"
                    });
                    break;
                }
            },
            callback: {
                onShow: function() {},
                onClose: function() {}
            }
        };
        $.noty.themes.semanticUI = {
            name: "semanticUI",
            template: '<div class="ui message"><div class="content"><div class="header"></div></div></div>',
            animation: {
                open: {
                    animation: "fade",
                    duration: "800ms"
                },
                close: {
                    animation: "fade left",
                    duration: "800ms"
                }
            },
            modal: {
                css: {
                    position: "fixed",
                    width: "100%",
                    height: "100%",
                    backgroundColor: "#000",
                    zIndex: 1e4,
                    opacity: .6,
                    display: "none",
                    left: 0,
                    top: 0
                }
            },
            style: function() {
                this.$message = this.$bar.find(".ui.message");
                this.$message.find(".header").html(this.options.header);
                this.$message.find(".content").append(this.options.text);
                this.$bar.css({
                    margin: "0.5em",
                    position: "relative"
                });
                if (this.options.icon) {
                    this.$message.addClass("icon").prepend($("<i/>").addClass(this.options.icon));
                }
                this.$progressBar.css({
                    position: "absolute",
                    left: 0,
                    bottom: 0,
                    height: 4,
                    width: "100%",
                    backgroundColor: "#000000",
                    opacity: .2,
                    "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=20)",
                    filter: "alpha(opacity=20)"
                });
                switch (this.options.size) {
                  case "mini":
                    this.$message.addClass("mini");
                    break;

                  case "tiny":
                    this.$message.addClass("tiny");
                    break;

                  case "small":
                    this.$message.addClass("small");
                    break;

                  case "large":
                    this.$message.addClass("large");
                    break;

                  case "big":
                    this.$message.addClass("big");
                    break;

                  case "huge":
                    this.$message.addClass("huge");
                    break;

                  case "massive":
                    this.$message.addClass("massive");
                    break;
                }
                switch (this.options.type) {
                  case "info":
                    this.$message.addClass("info");
                    break;

                  case "warning":
                    this.$message.addClass("warning");
                    break;

                  case "error":
                    this.$message.addClass("error");
                    break;

                  case "negative":
                    this.$message.addClass("negative");
                    break;

                  case "success":
                    this.$message.addClass("success");
                    break;

                  case "positive":
                    this.$message.addClass("positive");
                    break;

                  case "floating":
                    this.$message.addClass("floating");
                    break;
                }
            },
            callback: {
                onShow: function() {
                    this.$bar.addClass("transition");
                    this.$bar.transition(this.options.animation.open);
                },
                onClose: function() {
                    this.$bar.transition(this.options.animation.close);
                }
            }
        };
        return window.noty;
    });
}, , function(module, exports, __webpack_require__) {
    (function(setImmediate) {
        (function(root) {
            var setTimeoutFunc = setTimeout;
            function noop() {}
            function bind(fn, thisArg) {
                return function() {
                    fn.apply(thisArg, arguments);
                };
            }
            function Promise(fn) {
                if (typeof this !== "object") throw new TypeError("Promises must be constructed via new");
                if (typeof fn !== "function") throw new TypeError("not a function");
                this._state = 0;
                this._handled = false;
                this._value = undefined;
                this._deferreds = [];
                doResolve(fn, this);
            }
            function handle(self, deferred) {
                while (self._state === 3) {
                    self = self._value;
                }
                if (self._state === 0) {
                    self._deferreds.push(deferred);
                    return;
                }
                self._handled = true;
                Promise._immediateFn(function() {
                    var cb = self._state === 1 ? deferred.onFulfilled : deferred.onRejected;
                    if (cb === null) {
                        (self._state === 1 ? resolve : reject)(deferred.promise, self._value);
                        return;
                    }
                    var ret;
                    try {
                        ret = cb(self._value);
                    } catch (e) {
                        reject(deferred.promise, e);
                        return;
                    }
                    resolve(deferred.promise, ret);
                });
            }
            function resolve(self, newValue) {
                try {
                    if (newValue === self) throw new TypeError("A promise cannot be resolved with itself.");
                    if (newValue && (typeof newValue === "object" || typeof newValue === "function")) {
                        var then = newValue.then;
                        if (newValue instanceof Promise) {
                            self._state = 3;
                            self._value = newValue;
                            finale(self);
                            return;
                        } else if (typeof then === "function") {
                            doResolve(bind(then, newValue), self);
                            return;
                        }
                    }
                    self._state = 1;
                    self._value = newValue;
                    finale(self);
                } catch (e) {
                    reject(self, e);
                }
            }
            function reject(self, newValue) {
                self._state = 2;
                self._value = newValue;
                finale(self);
            }
            function finale(self) {
                if (self._state === 2 && self._deferreds.length === 0) {
                    Promise._immediateFn(function() {
                        if (!self._handled) {
                            Promise._unhandledRejectionFn(self._value);
                        }
                    });
                }
                for (var i = 0, len = self._deferreds.length; i < len; i++) {
                    handle(self, self._deferreds[i]);
                }
                self._deferreds = null;
            }
            function Handler(onFulfilled, onRejected, promise) {
                this.onFulfilled = typeof onFulfilled === "function" ? onFulfilled : null;
                this.onRejected = typeof onRejected === "function" ? onRejected : null;
                this.promise = promise;
            }
            function doResolve(fn, self) {
                var done = false;
                try {
                    fn(function(value) {
                        if (done) return;
                        done = true;
                        resolve(self, value);
                    }, function(reason) {
                        if (done) return;
                        done = true;
                        reject(self, reason);
                    });
                } catch (ex) {
                    if (done) return;
                    done = true;
                    reject(self, ex);
                }
            }
            Promise.prototype["catch"] = function(onRejected) {
                return this.then(null, onRejected);
            };
            Promise.prototype.then = function(onFulfilled, onRejected) {
                var prom = new this.constructor(noop);
                handle(this, new Handler(onFulfilled, onRejected, prom));
                return prom;
            };
            Promise.all = function(arr) {
                var args = Array.prototype.slice.call(arr);
                return new Promise(function(resolve, reject) {
                    if (args.length === 0) return resolve([]);
                    var remaining = args.length;
                    function res(i, val) {
                        try {
                            if (val && (typeof val === "object" || typeof val === "function")) {
                                var then = val.then;
                                if (typeof then === "function") {
                                    then.call(val, function(val) {
                                        res(i, val);
                                    }, reject);
                                    return;
                                }
                            }
                            args[i] = val;
                            if (--remaining === 0) {
                                resolve(args);
                            }
                        } catch (ex) {
                            reject(ex);
                        }
                    }
                    for (var i = 0; i < args.length; i++) {
                        res(i, args[i]);
                    }
                });
            };
            Promise.resolve = function(value) {
                if (value && typeof value === "object" && value.constructor === Promise) {
                    return value;
                }
                return new Promise(function(resolve) {
                    resolve(value);
                });
            };
            Promise.reject = function(value) {
                return new Promise(function(resolve, reject) {
                    reject(value);
                });
            };
            Promise.race = function(values) {
                return new Promise(function(resolve, reject) {
                    for (var i = 0, len = values.length; i < len; i++) {
                        values[i].then(resolve, reject);
                    }
                });
            };
            Promise._immediateFn = typeof setImmediate === "function" && function(fn) {
                setImmediate(fn);
            } || function(fn) {
                setTimeoutFunc(fn, 0);
            };
            Promise._unhandledRejectionFn = function _unhandledRejectionFn(err) {
                if (typeof console !== "undefined" && console) {
                    console.warn("Possible Unhandled Promise Rejection:", err);
                }
            };
            Promise._setImmediateFn = function _setImmediateFn(fn) {
                Promise._immediateFn = fn;
            };
            Promise._setUnhandledRejectionFn = function _setUnhandledRejectionFn(fn) {
                Promise._unhandledRejectionFn = fn;
            };
            if (typeof module !== "undefined" && module.exports) {
                module.exports = Promise;
            } else if (!root.Promise) {
                root.Promise = Promise;
            }
        })(this);
    }).call(exports, __webpack_require__(116).setImmediate);
}, function(module, __webpack_exports__, __webpack_require__) {
    "use strict";
    Object.defineProperty(__webpack_exports__, "__esModule", {
        value: true
    });
    function assert(condition, message) {
        if (!condition) {
            throw new Error("[vue-router] " + message);
        }
    }
    function warn(condition, message) {
        if (!condition) {
            typeof console !== "undefined" && console.warn("[vue-router] " + message);
        }
    }
    var View = {
        name: "router-view",
        functional: true,
        props: {
            name: {
                type: String,
                default: "default"
            }
        },
        render: function render(h, ref) {
            var props = ref.props;
            var children = ref.children;
            var parent = ref.parent;
            var data = ref.data;
            data.routerView = true;
            var name = props.name;
            var route = parent.$route;
            var cache = parent._routerViewCache || (parent._routerViewCache = {});
            var depth = 0;
            var inactive = false;
            while (parent) {
                if (parent.$vnode && parent.$vnode.data.routerView) {
                    depth++;
                }
                if (parent._inactive) {
                    inactive = true;
                }
                parent = parent.$parent;
            }
            data.routerViewDepth = depth;
            if (inactive) {
                return h(cache[name], data, children);
            }
            var matched = route.matched[depth];
            if (!matched) {
                cache[name] = null;
                return h();
            }
            var component = cache[name] = matched.components[name];
            var hooks = data.hook || (data.hook = {});
            hooks.init = function(vnode) {
                matched.instances[name] = vnode.child;
            };
            hooks.prepatch = function(oldVnode, vnode) {
                matched.instances[name] = vnode.child;
            };
            hooks.destroy = function(vnode) {
                if (matched.instances[name] === vnode.child) {
                    matched.instances[name] = undefined;
                }
            };
            data.props = resolveProps(route, matched.props && matched.props[name]);
            return h(component, data, children);
        }
    };
    function resolveProps(route, config) {
        switch (typeof config) {
          case "undefined":
            return;

          case "object":
            return config;

          case "function":
            return config(route);

          case "boolean":
            return config ? route.params : undefined;

          default:
            warn(false, 'props in "' + route.path + '" is a ' + typeof config + ", expecting an object, function or boolean.");
        }
    }
    var encodeReserveRE = /[!'()*]/g;
    var encodeReserveReplacer = function(c) {
        return "%" + c.charCodeAt(0).toString(16);
    };
    var commaRE = /%2C/g;
    var encode = function(str) {
        return encodeURIComponent(str).replace(encodeReserveRE, encodeReserveReplacer).replace(commaRE, ",");
    };
    var decode = decodeURIComponent;
    function resolveQuery(query, extraQuery) {
        if (extraQuery === void 0) extraQuery = {};
        if (query) {
            var parsedQuery;
            try {
                parsedQuery = parseQuery(query);
            } catch (e) {
                "production" !== "production" && warn(false, e.message);
                parsedQuery = {};
            }
            for (var key in extraQuery) {
                parsedQuery[key] = extraQuery[key];
            }
            return parsedQuery;
        } else {
            return extraQuery;
        }
    }
    function parseQuery(query) {
        var res = {};
        query = query.trim().replace(/^(\?|#|&)/, "");
        if (!query) {
            return res;
        }
        query.split("&").forEach(function(param) {
            var parts = param.replace(/\+/g, " ").split("=");
            var key = decode(parts.shift());
            var val = parts.length > 0 ? decode(parts.join("=")) : null;
            if (res[key] === undefined) {
                res[key] = val;
            } else if (Array.isArray(res[key])) {
                res[key].push(val);
            } else {
                res[key] = [ res[key], val ];
            }
        });
        return res;
    }
    function stringifyQuery(obj) {
        var res = obj ? Object.keys(obj).map(function(key) {
            var val = obj[key];
            if (val === undefined) {
                return "";
            }
            if (val === null) {
                return encode(key);
            }
            if (Array.isArray(val)) {
                var result = [];
                val.slice().forEach(function(val2) {
                    if (val2 === undefined) {
                        return;
                    }
                    if (val2 === null) {
                        result.push(encode(key));
                    } else {
                        result.push(encode(key) + "=" + encode(val2));
                    }
                });
                return result.join("&");
            }
            return encode(key) + "=" + encode(val);
        }).filter(function(x) {
            return x.length > 0;
        }).join("&") : null;
        return res ? "?" + res : "";
    }
    var trailingSlashRE = /\/?$/;
    function createRoute(record, location, redirectedFrom) {
        var route = {
            name: location.name || record && record.name,
            meta: record && record.meta || {},
            path: location.path || "/",
            hash: location.hash || "",
            query: location.query || {},
            params: location.params || {},
            fullPath: getFullPath(location),
            matched: record ? formatMatch(record) : []
        };
        if (redirectedFrom) {
            route.redirectedFrom = getFullPath(redirectedFrom);
        }
        return Object.freeze(route);
    }
    var START = createRoute(null, {
        path: "/"
    });
    function formatMatch(record) {
        var res = [];
        while (record) {
            res.unshift(record);
            record = record.parent;
        }
        return res;
    }
    function getFullPath(ref) {
        var path = ref.path;
        var query = ref.query;
        if (query === void 0) query = {};
        var hash = ref.hash;
        if (hash === void 0) hash = "";
        return (path || "/") + stringifyQuery(query) + hash;
    }
    function isSameRoute(a, b) {
        if (b === START) {
            return a === b;
        } else if (!b) {
            return false;
        } else if (a.path && b.path) {
            return a.path.replace(trailingSlashRE, "") === b.path.replace(trailingSlashRE, "") && a.hash === b.hash && isObjectEqual(a.query, b.query);
        } else if (a.name && b.name) {
            return a.name === b.name && a.hash === b.hash && isObjectEqual(a.query, b.query) && isObjectEqual(a.params, b.params);
        } else {
            return false;
        }
    }
    function isObjectEqual(a, b) {
        if (a === void 0) a = {};
        if (b === void 0) b = {};
        var aKeys = Object.keys(a);
        var bKeys = Object.keys(b);
        if (aKeys.length !== bKeys.length) {
            return false;
        }
        return aKeys.every(function(key) {
            return String(a[key]) === String(b[key]);
        });
    }
    function isIncludedRoute(current, target) {
        return current.path.replace(trailingSlashRE, "/").indexOf(target.path.replace(trailingSlashRE, "/")) === 0 && (!target.hash || current.hash === target.hash) && queryIncludes(current.query, target.query);
    }
    function queryIncludes(current, target) {
        for (var key in target) {
            if (!(key in current)) {
                return false;
            }
        }
        return true;
    }
    var toTypes = [ String, Object ];
    var eventTypes = [ String, Array ];
    var Link = {
        name: "router-link",
        props: {
            to: {
                type: toTypes,
                required: true
            },
            tag: {
                type: String,
                default: "a"
            },
            exact: Boolean,
            append: Boolean,
            replace: Boolean,
            activeClass: String,
            event: {
                type: eventTypes,
                default: "click"
            }
        },
        render: function render(h) {
            var this$1 = this;
            var router = this.$router;
            var current = this.$route;
            var ref = router.resolve(this.to, current, this.append);
            var location = ref.location;
            var route = ref.route;
            var href = ref.href;
            var classes = {};
            var activeClass = this.activeClass || router.options.linkActiveClass || "router-link-active";
            var compareTarget = location.path ? createRoute(null, location) : route;
            classes[activeClass] = this.exact ? isSameRoute(current, compareTarget) : isIncludedRoute(current, compareTarget);
            var handler = function(e) {
                if (guardEvent(e)) {
                    if (this$1.replace) {
                        router.replace(location);
                    } else {
                        router.push(location);
                    }
                }
            };
            var on = {
                click: guardEvent
            };
            if (Array.isArray(this.event)) {
                this.event.forEach(function(e) {
                    on[e] = handler;
                });
            } else {
                on[this.event] = handler;
            }
            var data = {
                class: classes
            };
            if (this.tag === "a") {
                data.on = on;
                data.attrs = {
                    href: href
                };
            } else {
                var a = findAnchor(this.$slots.default);
                if (a) {
                    a.isStatic = false;
                    var extend = _Vue.util.extend;
                    var aData = a.data = extend({}, a.data);
                    aData.on = on;
                    var aAttrs = a.data.attrs = extend({}, a.data.attrs);
                    aAttrs.href = href;
                } else {
                    data.on = on;
                }
            }
            return h(this.tag, data, this.$slots.default);
        }
    };
    function guardEvent(e) {
        if (e.metaKey || e.ctrlKey || e.shiftKey) {
            return;
        }
        if (e.defaultPrevented) {
            return;
        }
        if (e.button !== undefined && e.button !== 0) {
            return;
        }
        if (e.target && e.target.getAttribute) {
            var target = e.target.getAttribute("target");
            if (/\b_blank\b/i.test(target)) {
                return;
            }
        }
        if (e.preventDefault) {
            e.preventDefault();
        }
        return true;
    }
    function findAnchor(children) {
        if (children) {
            var child;
            for (var i = 0; i < children.length; i++) {
                child = children[i];
                if (child.tag === "a") {
                    return child;
                }
                if (child.children && (child = findAnchor(child.children))) {
                    return child;
                }
            }
        }
    }
    var _Vue;
    function install(Vue) {
        if (install.installed) {
            return;
        }
        install.installed = true;
        _Vue = Vue;
        Object.defineProperty(Vue.prototype, "$router", {
            get: function get() {
                return this.$root._router;
            }
        });
        Object.defineProperty(Vue.prototype, "$route", {
            get: function get() {
                return this.$root._route;
            }
        });
        Vue.mixin({
            beforeCreate: function beforeCreate() {
                if (this.$options.router) {
                    this._router = this.$options.router;
                    this._router.init(this);
                    Vue.util.defineReactive(this, "_route", this._router.history.current);
                }
            }
        });
        Vue.component("router-view", View);
        Vue.component("router-link", Link);
        var strats = Vue.config.optionMergeStrategies;
        strats.beforeRouteEnter = strats.beforeRouteLeave = strats.created;
    }
    var inBrowser = typeof window !== "undefined";
    function resolvePath(relative, base, append) {
        if (relative.charAt(0) === "/") {
            return relative;
        }
        if (relative.charAt(0) === "?" || relative.charAt(0) === "#") {
            return base + relative;
        }
        var stack = base.split("/");
        if (!append || !stack[stack.length - 1]) {
            stack.pop();
        }
        var segments = relative.replace(/^\//, "").split("/");
        for (var i = 0; i < segments.length; i++) {
            var segment = segments[i];
            if (segment === ".") {
                continue;
            } else if (segment === "..") {
                stack.pop();
            } else {
                stack.push(segment);
            }
        }
        if (stack[0] !== "") {
            stack.unshift("");
        }
        return stack.join("/");
    }
    function parsePath(path) {
        var hash = "";
        var query = "";
        var hashIndex = path.indexOf("#");
        if (hashIndex >= 0) {
            hash = path.slice(hashIndex);
            path = path.slice(0, hashIndex);
        }
        var queryIndex = path.indexOf("?");
        if (queryIndex >= 0) {
            query = path.slice(queryIndex + 1);
            path = path.slice(0, queryIndex);
        }
        return {
            path: path,
            query: query,
            hash: hash
        };
    }
    function cleanPath(path) {
        return path.replace(/\/\//g, "/");
    }
    function createRouteMap(routes, oldPathMap, oldNameMap) {
        var pathMap = oldPathMap || Object.create(null);
        var nameMap = oldNameMap || Object.create(null);
        routes.forEach(function(route) {
            addRouteRecord(pathMap, nameMap, route);
        });
        return {
            pathMap: pathMap,
            nameMap: nameMap
        };
    }
    function addRouteRecord(pathMap, nameMap, route, parent, matchAs) {
        var path = route.path;
        var name = route.name;
        if (false) {
            assert(path != null, '"path" is required in a route configuration.');
            assert(typeof route.component !== "string", 'route config "component" for path: ' + String(path || name) + " cannot be a " + "string id. Use an actual component instead.");
        }
        var record = {
            path: normalizePath(path, parent),
            components: route.components || {
                default: route.component
            },
            instances: {},
            name: name,
            parent: parent,
            matchAs: matchAs,
            redirect: route.redirect,
            beforeEnter: route.beforeEnter,
            meta: route.meta || {},
            props: route.props == null ? {} : route.components ? route.props : {
                default: route.props
            }
        };
        if (route.children) {
            if (false) {
                if (route.name && route.children.some(function(child) {
                    return /^\/?$/.test(child.path);
                })) {
                    warn(false, "Named Route '" + route.name + "' has a default child route. " + "When navigating to this named route (:to=\"{name: '" + route.name + "'\"), " + "the default child route will not be rendered. Remove the name from " + "this route and use the name of the default child route for named " + "links instead.");
                }
            }
            route.children.forEach(function(child) {
                var childMatchAs = matchAs ? cleanPath(matchAs + "/" + child.path) : undefined;
                addRouteRecord(pathMap, nameMap, child, record, childMatchAs);
            });
        }
        if (route.alias !== undefined) {
            if (Array.isArray(route.alias)) {
                route.alias.forEach(function(alias) {
                    var aliasRoute = {
                        path: alias,
                        children: route.children
                    };
                    addRouteRecord(pathMap, nameMap, aliasRoute, parent, record.path);
                });
            } else {
                var aliasRoute = {
                    path: route.alias,
                    children: route.children
                };
                addRouteRecord(pathMap, nameMap, aliasRoute, parent, record.path);
            }
        }
        if (!pathMap[record.path]) {
            pathMap[record.path] = record;
        }
        if (name) {
            if (!nameMap[name]) {
                nameMap[name] = record;
            } else if (false) {
                warn(false, "Duplicate named routes definition: " + '{ name: "' + name + '", path: "' + record.path + '" }');
            }
        }
    }
    function normalizePath(path, parent) {
        path = path.replace(/\/$/, "");
        if (path[0] === "/") {
            return path;
        }
        if (parent == null) {
            return path;
        }
        return cleanPath(parent.path + "/" + path);
    }
    var index$1 = Array.isArray || function(arr) {
        return Object.prototype.toString.call(arr) == "[object Array]";
    };
    var isarray = index$1;
    var index = pathToRegexp;
    var parse_1 = parse;
    var compile_1 = compile;
    var tokensToFunction_1 = tokensToFunction;
    var tokensToRegExp_1 = tokensToRegExp;
    var PATH_REGEXP = new RegExp([ "(\\\\.)", "([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))" ].join("|"), "g");
    function parse(str, options) {
        var tokens = [];
        var key = 0;
        var index = 0;
        var path = "";
        var defaultDelimiter = options && options.delimiter || "/";
        var res;
        while ((res = PATH_REGEXP.exec(str)) != null) {
            var m = res[0];
            var escaped = res[1];
            var offset = res.index;
            path += str.slice(index, offset);
            index = offset + m.length;
            if (escaped) {
                path += escaped[1];
                continue;
            }
            var next = str[index];
            var prefix = res[2];
            var name = res[3];
            var capture = res[4];
            var group = res[5];
            var modifier = res[6];
            var asterisk = res[7];
            if (path) {
                tokens.push(path);
                path = "";
            }
            var partial = prefix != null && next != null && next !== prefix;
            var repeat = modifier === "+" || modifier === "*";
            var optional = modifier === "?" || modifier === "*";
            var delimiter = res[2] || defaultDelimiter;
            var pattern = capture || group;
            tokens.push({
                name: name || key++,
                prefix: prefix || "",
                delimiter: delimiter,
                optional: optional,
                repeat: repeat,
                partial: partial,
                asterisk: !!asterisk,
                pattern: pattern ? escapeGroup(pattern) : asterisk ? ".*" : "[^" + escapeString(delimiter) + "]+?"
            });
        }
        if (index < str.length) {
            path += str.substr(index);
        }
        if (path) {
            tokens.push(path);
        }
        return tokens;
    }
    function compile(str, options) {
        return tokensToFunction(parse(str, options));
    }
    function encodeURIComponentPretty(str) {
        return encodeURI(str).replace(/[\/?#]/g, function(c) {
            return "%" + c.charCodeAt(0).toString(16).toUpperCase();
        });
    }
    function encodeAsterisk(str) {
        return encodeURI(str).replace(/[?#]/g, function(c) {
            return "%" + c.charCodeAt(0).toString(16).toUpperCase();
        });
    }
    function tokensToFunction(tokens) {
        var matches = new Array(tokens.length);
        for (var i = 0; i < tokens.length; i++) {
            if (typeof tokens[i] === "object") {
                matches[i] = new RegExp("^(?:" + tokens[i].pattern + ")$");
            }
        }
        return function(obj, opts) {
            var path = "";
            var data = obj || {};
            var options = opts || {};
            var encode = options.pretty ? encodeURIComponentPretty : encodeURIComponent;
            for (var i = 0; i < tokens.length; i++) {
                var token = tokens[i];
                if (typeof token === "string") {
                    path += token;
                    continue;
                }
                var value = data[token.name];
                var segment;
                if (value == null) {
                    if (token.optional) {
                        if (token.partial) {
                            path += token.prefix;
                        }
                        continue;
                    } else {
                        throw new TypeError('Expected "' + token.name + '" to be defined');
                    }
                }
                if (isarray(value)) {
                    if (!token.repeat) {
                        throw new TypeError('Expected "' + token.name + '" to not repeat, but received `' + JSON.stringify(value) + "`");
                    }
                    if (value.length === 0) {
                        if (token.optional) {
                            continue;
                        } else {
                            throw new TypeError('Expected "' + token.name + '" to not be empty');
                        }
                    }
                    for (var j = 0; j < value.length; j++) {
                        segment = encode(value[j]);
                        if (!matches[i].test(segment)) {
                            throw new TypeError('Expected all "' + token.name + '" to match "' + token.pattern + '", but received `' + JSON.stringify(segment) + "`");
                        }
                        path += (j === 0 ? token.prefix : token.delimiter) + segment;
                    }
                    continue;
                }
                segment = token.asterisk ? encodeAsterisk(value) : encode(value);
                if (!matches[i].test(segment)) {
                    throw new TypeError('Expected "' + token.name + '" to match "' + token.pattern + '", but received "' + segment + '"');
                }
                path += token.prefix + segment;
            }
            return path;
        };
    }
    function escapeString(str) {
        return str.replace(/([.+*?=^!:${}()[\]|\/\\])/g, "\\$1");
    }
    function escapeGroup(group) {
        return group.replace(/([=!:$\/()])/g, "\\$1");
    }
    function attachKeys(re, keys) {
        re.keys = keys;
        return re;
    }
    function flags(options) {
        return options.sensitive ? "" : "i";
    }
    function regexpToRegexp(path, keys) {
        var groups = path.source.match(/\((?!\?)/g);
        if (groups) {
            for (var i = 0; i < groups.length; i++) {
                keys.push({
                    name: i,
                    prefix: null,
                    delimiter: null,
                    optional: false,
                    repeat: false,
                    partial: false,
                    asterisk: false,
                    pattern: null
                });
            }
        }
        return attachKeys(path, keys);
    }
    function arrayToRegexp(path, keys, options) {
        var parts = [];
        for (var i = 0; i < path.length; i++) {
            parts.push(pathToRegexp(path[i], keys, options).source);
        }
        var regexp = new RegExp("(?:" + parts.join("|") + ")", flags(options));
        return attachKeys(regexp, keys);
    }
    function stringToRegexp(path, keys, options) {
        return tokensToRegExp(parse(path, options), keys, options);
    }
    function tokensToRegExp(tokens, keys, options) {
        if (!isarray(keys)) {
            options = keys || options;
            keys = [];
        }
        options = options || {};
        var strict = options.strict;
        var end = options.end !== false;
        var route = "";
        for (var i = 0; i < tokens.length; i++) {
            var token = tokens[i];
            if (typeof token === "string") {
                route += escapeString(token);
            } else {
                var prefix = escapeString(token.prefix);
                var capture = "(?:" + token.pattern + ")";
                keys.push(token);
                if (token.repeat) {
                    capture += "(?:" + prefix + capture + ")*";
                }
                if (token.optional) {
                    if (!token.partial) {
                        capture = "(?:" + prefix + "(" + capture + "))?";
                    } else {
                        capture = prefix + "(" + capture + ")?";
                    }
                } else {
                    capture = prefix + "(" + capture + ")";
                }
                route += capture;
            }
        }
        var delimiter = escapeString(options.delimiter || "/");
        var endsWithDelimiter = route.slice(-delimiter.length) === delimiter;
        if (!strict) {
            route = (endsWithDelimiter ? route.slice(0, -delimiter.length) : route) + "(?:" + delimiter + "(?=$))?";
        }
        if (end) {
            route += "$";
        } else {
            route += strict && endsWithDelimiter ? "" : "(?=" + delimiter + "|$)";
        }
        return attachKeys(new RegExp("^" + route, flags(options)), keys);
    }
    function pathToRegexp(path, keys, options) {
        if (!isarray(keys)) {
            options = keys || options;
            keys = [];
        }
        options = options || {};
        if (path instanceof RegExp) {
            return regexpToRegexp(path, keys);
        }
        if (isarray(path)) {
            return arrayToRegexp(path, keys, options);
        }
        return stringToRegexp(path, keys, options);
    }
    index.parse = parse_1;
    index.compile = compile_1;
    index.tokensToFunction = tokensToFunction_1;
    index.tokensToRegExp = tokensToRegExp_1;
    var regexpCache = Object.create(null);
    function getRouteRegex(path) {
        var hit = regexpCache[path];
        var keys, regexp;
        if (hit) {
            keys = hit.keys;
            regexp = hit.regexp;
        } else {
            keys = [];
            regexp = index(path, keys);
            regexpCache[path] = {
                keys: keys,
                regexp: regexp
            };
        }
        return {
            keys: keys,
            regexp: regexp
        };
    }
    var regexpCompileCache = Object.create(null);
    function fillParams(path, params, routeMsg) {
        try {
            var filler = regexpCompileCache[path] || (regexpCompileCache[path] = index.compile(path));
            return filler(params || {}, {
                pretty: true
            });
        } catch (e) {
            if (false) {
                warn(false, "missing param for " + routeMsg + ": " + e.message);
            }
            return "";
        }
    }
    function normalizeLocation(raw, current, append) {
        var next = typeof raw === "string" ? {
            path: raw
        } : raw;
        if (next.name || next._normalized) {
            return next;
        }
        if (!next.path && next.params && current) {
            next = assign({}, next);
            next._normalized = true;
            var params = assign(assign({}, current.params), next.params);
            if (current.name) {
                next.name = current.name;
                next.params = params;
            } else if (current.matched) {
                var rawPath = current.matched[current.matched.length - 1].path;
                next.path = fillParams(rawPath, params, "path " + current.path);
            } else if (false) {
                warn(false, "relative params navigation requires a current route.");
            }
            return next;
        }
        var parsedPath = parsePath(next.path || "");
        var basePath = current && current.path || "/";
        var path = parsedPath.path ? resolvePath(parsedPath.path, basePath, append || next.append) : current && current.path || "/";
        var query = resolveQuery(parsedPath.query, next.query);
        var hash = next.hash || parsedPath.hash;
        if (hash && hash.charAt(0) !== "#") {
            hash = "#" + hash;
        }
        return {
            _normalized: true,
            path: path,
            query: query,
            hash: hash
        };
    }
    function assign(a, b) {
        for (var key in b) {
            a[key] = b[key];
        }
        return a;
    }
    function createMatcher(routes) {
        var ref = createRouteMap(routes);
        var pathMap = ref.pathMap;
        var nameMap = ref.nameMap;
        function addRoutes(routes) {
            createRouteMap(routes, pathMap, nameMap);
        }
        function match(raw, currentRoute, redirectedFrom) {
            var location = normalizeLocation(raw, currentRoute);
            var name = location.name;
            if (name) {
                var record = nameMap[name];
                if (false) {
                    warn(record, "Route with name '" + name + "' does not exist");
                }
                var paramNames = getRouteRegex(record.path).keys.filter(function(key) {
                    return !key.optional;
                }).map(function(key) {
                    return key.name;
                });
                if (typeof location.params !== "object") {
                    location.params = {};
                }
                if (currentRoute && typeof currentRoute.params === "object") {
                    for (var key in currentRoute.params) {
                        if (!(key in location.params) && paramNames.indexOf(key) > -1) {
                            location.params[key] = currentRoute.params[key];
                        }
                    }
                }
                if (record) {
                    location.path = fillParams(record.path, location.params, 'named route "' + name + '"');
                    return _createRoute(record, location, redirectedFrom);
                }
            } else if (location.path) {
                location.params = {};
                for (var path in pathMap) {
                    if (matchRoute(path, location.params, location.path)) {
                        return _createRoute(pathMap[path], location, redirectedFrom);
                    }
                }
            }
            return _createRoute(null, location);
        }
        function redirect(record, location) {
            var originalRedirect = record.redirect;
            var redirect = typeof originalRedirect === "function" ? originalRedirect(createRoute(record, location)) : originalRedirect;
            if (typeof redirect === "string") {
                redirect = {
                    path: redirect
                };
            }
            if (!redirect || typeof redirect !== "object") {
                "production" !== "production" && warn(false, "invalid redirect option: " + JSON.stringify(redirect));
                return _createRoute(null, location);
            }
            var re = redirect;
            var name = re.name;
            var path = re.path;
            var query = location.query;
            var hash = location.hash;
            var params = location.params;
            query = re.hasOwnProperty("query") ? re.query : query;
            hash = re.hasOwnProperty("hash") ? re.hash : hash;
            params = re.hasOwnProperty("params") ? re.params : params;
            if (name) {
                var targetRecord = nameMap[name];
                if (false) {
                    assert(targetRecord, 'redirect failed: named route "' + name + '" not found.');
                }
                return match({
                    _normalized: true,
                    name: name,
                    query: query,
                    hash: hash,
                    params: params
                }, undefined, location);
            } else if (path) {
                var rawPath = resolveRecordPath(path, record);
                var resolvedPath = fillParams(rawPath, params, 'redirect route with path "' + rawPath + '"');
                return match({
                    _normalized: true,
                    path: resolvedPath,
                    query: query,
                    hash: hash
                }, undefined, location);
            } else {
                warn(false, "invalid redirect option: " + JSON.stringify(redirect));
                return _createRoute(null, location);
            }
        }
        function alias(record, location, matchAs) {
            var aliasedPath = fillParams(matchAs, location.params, 'aliased route with path "' + matchAs + '"');
            var aliasedMatch = match({
                _normalized: true,
                path: aliasedPath
            });
            if (aliasedMatch) {
                var matched = aliasedMatch.matched;
                var aliasedRecord = matched[matched.length - 1];
                location.params = aliasedMatch.params;
                return _createRoute(aliasedRecord, location);
            }
            return _createRoute(null, location);
        }
        function _createRoute(record, location, redirectedFrom) {
            if (record && record.redirect) {
                return redirect(record, redirectedFrom || location);
            }
            if (record && record.matchAs) {
                return alias(record, location, record.matchAs);
            }
            return createRoute(record, location, redirectedFrom);
        }
        return {
            match: match,
            addRoutes: addRoutes
        };
    }
    function matchRoute(path, params, pathname) {
        var ref = getRouteRegex(path);
        var regexp = ref.regexp;
        var keys = ref.keys;
        var m = pathname.match(regexp);
        if (!m) {
            return false;
        } else if (!params) {
            return true;
        }
        for (var i = 1, len = m.length; i < len; ++i) {
            var key = keys[i - 1];
            var val = typeof m[i] === "string" ? decodeURIComponent(m[i]) : m[i];
            if (key) {
                params[key.name] = val;
            }
        }
        return true;
    }
    function resolveRecordPath(path, record) {
        return resolvePath(path, record.parent ? record.parent.path : "/", true);
    }
    var positionStore = Object.create(null);
    function setupScroll() {
        window.addEventListener("popstate", function(e) {
            saveScrollPosition();
            if (e.state && e.state.key) {
                setStateKey(e.state.key);
            }
        });
    }
    function handleScroll(router, to, from, isPop) {
        if (!router.app) {
            return;
        }
        var behavior = router.options.scrollBehavior;
        if (!behavior) {
            return;
        }
        if (false) {
            assert(typeof behavior === "function", "scrollBehavior must be a function");
        }
        router.app.$nextTick(function() {
            var position = getScrollPosition();
            var shouldScroll = behavior(to, from, isPop ? position : null);
            if (!shouldScroll) {
                return;
            }
            var isObject = typeof shouldScroll === "object";
            if (isObject && typeof shouldScroll.selector === "string") {
                var el = document.querySelector(shouldScroll.selector);
                if (el) {
                    position = getElementPosition(el);
                } else if (isValidPosition(shouldScroll)) {
                    position = normalizePosition(shouldScroll);
                }
            } else if (isObject && isValidPosition(shouldScroll)) {
                position = normalizePosition(shouldScroll);
            }
            if (position) {
                window.scrollTo(position.x, position.y);
            }
        });
    }
    function saveScrollPosition() {
        var key = getStateKey();
        if (key) {
            positionStore[key] = {
                x: window.pageXOffset,
                y: window.pageYOffset
            };
        }
    }
    function getScrollPosition() {
        var key = getStateKey();
        if (key) {
            return positionStore[key];
        }
    }
    function getElementPosition(el) {
        var docEl = document.documentElement;
        var docRect = docEl.getBoundingClientRect();
        var elRect = el.getBoundingClientRect();
        return {
            x: elRect.left - docRect.left,
            y: elRect.top - docRect.top
        };
    }
    function isValidPosition(obj) {
        return isNumber(obj.x) || isNumber(obj.y);
    }
    function normalizePosition(obj) {
        return {
            x: isNumber(obj.x) ? obj.x : window.pageXOffset,
            y: isNumber(obj.y) ? obj.y : window.pageYOffset
        };
    }
    function isNumber(v) {
        return typeof v === "number";
    }
    var supportsPushState = inBrowser && function() {
        var ua = window.navigator.userAgent;
        if ((ua.indexOf("Android 2.") !== -1 || ua.indexOf("Android 4.0") !== -1) && ua.indexOf("Mobile Safari") !== -1 && ua.indexOf("Chrome") === -1 && ua.indexOf("Windows Phone") === -1) {
            return false;
        }
        return window.history && "pushState" in window.history;
    }();
    var Time = inBrowser && window.performance && window.performance.now ? window.performance : Date;
    var _key = genKey();
    function genKey() {
        return Time.now().toFixed(3);
    }
    function getStateKey() {
        return _key;
    }
    function setStateKey(key) {
        _key = key;
    }
    function pushState(url, replace) {
        saveScrollPosition();
        var history = window.history;
        try {
            if (replace) {
                history.replaceState({
                    key: _key
                }, "", url);
            } else {
                _key = genKey();
                history.pushState({
                    key: _key
                }, "", url);
            }
        } catch (e) {
            window.location[replace ? "replace" : "assign"](url);
        }
    }
    function replaceState(url) {
        pushState(url, true);
    }
    function runQueue(queue, fn, cb) {
        var step = function(index) {
            if (index >= queue.length) {
                cb();
            } else {
                if (queue[index]) {
                    fn(queue[index], function() {
                        step(index + 1);
                    });
                } else {
                    step(index + 1);
                }
            }
        };
        step(0);
    }
    var History = function History(router, base) {
        this.router = router;
        this.base = normalizeBase(base);
        this.current = START;
        this.pending = null;
        this.ready = false;
        this.readyCbs = [];
    };
    History.prototype.listen = function listen(cb) {
        this.cb = cb;
    };
    History.prototype.onReady = function onReady(cb) {
        if (this.ready) {
            cb();
        } else {
            this.readyCbs.push(cb);
        }
    };
    History.prototype.transitionTo = function transitionTo(location, onComplete, onAbort) {
        var this$1 = this;
        var route = this.router.match(location, this.current);
        this.confirmTransition(route, function() {
            this$1.updateRoute(route);
            onComplete && onComplete(route);
            this$1.ensureURL();
            if (!this$1.ready) {
                this$1.ready = true;
                this$1.readyCbs.forEach(function(cb) {
                    cb(route);
                });
            }
        }, onAbort);
    };
    History.prototype.confirmTransition = function confirmTransition(route, onComplete, onAbort) {
        var this$1 = this;
        var current = this.current;
        var abort = function() {
            onAbort && onAbort();
        };
        if (isSameRoute(route, current) && route.matched.length === current.matched.length) {
            this.ensureURL();
            return abort();
        }
        var ref = resolveQueue(this.current.matched, route.matched);
        var updated = ref.updated;
        var deactivated = ref.deactivated;
        var activated = ref.activated;
        var queue = [].concat(extractLeaveGuards(deactivated), this.router.beforeHooks, extractUpdateHooks(updated), activated.map(function(m) {
            return m.beforeEnter;
        }), resolveAsyncComponents(activated));
        this.pending = route;
        var iterator = function(hook, next) {
            if (this$1.pending !== route) {
                return abort();
            }
            hook(route, current, function(to) {
                if (to === false) {
                    this$1.ensureURL(true);
                    abort();
                } else if (typeof to === "string" || typeof to === "object") {
                    typeof to === "object" && to.replace ? this$1.replace(to) : this$1.push(to);
                    abort();
                } else {
                    next(to);
                }
            });
        };
        runQueue(queue, iterator, function() {
            var postEnterCbs = [];
            var isValid = function() {
                return this$1.current === route;
            };
            var enterGuards = extractEnterGuards(activated, postEnterCbs, isValid);
            runQueue(enterGuards, iterator, function() {
                if (this$1.pending !== route) {
                    return abort();
                }
                this$1.pending = null;
                onComplete(route);
                if (this$1.router.app) {
                    this$1.router.app.$nextTick(function() {
                        postEnterCbs.forEach(function(cb) {
                            return cb();
                        });
                    });
                }
            });
        });
    };
    History.prototype.updateRoute = function updateRoute(route) {
        var prev = this.current;
        this.current = route;
        this.cb && this.cb(route);
        this.router.afterHooks.forEach(function(hook) {
            hook && hook(route, prev);
        });
    };
    function normalizeBase(base) {
        if (!base) {
            if (inBrowser) {
                var baseEl = document.querySelector("base");
                base = baseEl && baseEl.getAttribute("href") || "/";
            } else {
                base = "/";
            }
        }
        if (base.charAt(0) !== "/") {
            base = "/" + base;
        }
        return base.replace(/\/$/, "");
    }
    function resolveQueue(current, next) {
        var i;
        var max = Math.max(current.length, next.length);
        for (i = 0; i < max; i++) {
            if (current[i] !== next[i]) {
                break;
            }
        }
        return {
            updated: next.slice(0, i),
            activated: next.slice(i),
            deactivated: current.slice(i)
        };
    }
    function extractGuards(records, name, bind, reverse) {
        var guards = flatMapComponents(records, function(def, instance, match, key) {
            var guard = extractGuard(def, name);
            if (guard) {
                return Array.isArray(guard) ? guard.map(function(guard) {
                    return bind(guard, instance, match, key);
                }) : bind(guard, instance, match, key);
            }
        });
        return flatten(reverse ? guards.reverse() : guards);
    }
    function extractGuard(def, key) {
        if (typeof def !== "function") {
            def = _Vue.extend(def);
        }
        return def.options[key];
    }
    function extractLeaveGuards(deactivated) {
        return extractGuards(deactivated, "beforeRouteLeave", bindGuard, true);
    }
    function extractUpdateHooks(updated) {
        return extractGuards(updated, "beforeRouteUpdate", bindGuard);
    }
    function bindGuard(guard, instance) {
        return function boundRouteGuard() {
            return guard.apply(instance, arguments);
        };
    }
    function extractEnterGuards(activated, cbs, isValid) {
        return extractGuards(activated, "beforeRouteEnter", function(guard, _, match, key) {
            return bindEnterGuard(guard, match, key, cbs, isValid);
        });
    }
    function bindEnterGuard(guard, match, key, cbs, isValid) {
        return function routeEnterGuard(to, from, next) {
            return guard(to, from, function(cb) {
                next(cb);
                if (typeof cb === "function") {
                    cbs.push(function() {
                        poll(cb, match.instances, key, isValid);
                    });
                }
            });
        };
    }
    function poll(cb, instances, key, isValid) {
        if (instances[key]) {
            cb(instances[key]);
        } else if (isValid()) {
            setTimeout(function() {
                poll(cb, instances, key, isValid);
            }, 16);
        }
    }
    function resolveAsyncComponents(matched) {
        return flatMapComponents(matched, function(def, _, match, key) {
            if (typeof def === "function" && !def.options) {
                return function(to, from, next) {
                    var resolve = once(function(resolvedDef) {
                        match.components[key] = resolvedDef;
                        next();
                    });
                    var reject = once(function(reason) {
                        warn(false, "Failed to resolve async component " + key + ": " + reason);
                        next(false);
                    });
                    var res = def(resolve, reject);
                    if (res && typeof res.then === "function") {
                        res.then(resolve, reject);
                    }
                };
            }
        });
    }
    function flatMapComponents(matched, fn) {
        return flatten(matched.map(function(m) {
            return Object.keys(m.components).map(function(key) {
                return fn(m.components[key], m.instances[key], m, key);
            });
        }));
    }
    function flatten(arr) {
        return Array.prototype.concat.apply([], arr);
    }
    function once(fn) {
        var called = false;
        return function() {
            if (called) {
                return;
            }
            called = true;
            return fn.apply(this, arguments);
        };
    }
    var HTML5History = function(History$$1) {
        function HTML5History(router, base) {
            var this$1 = this;
            History$$1.call(this, router, base);
            var expectScroll = router.options.scrollBehavior;
            if (expectScroll) {
                setupScroll();
            }
            window.addEventListener("popstate", function(e) {
                this$1.transitionTo(getLocation(this$1.base), function(route) {
                    if (expectScroll) {
                        handleScroll(router, route, this$1.current, true);
                    }
                });
            });
        }
        if (History$$1) HTML5History.__proto__ = History$$1;
        HTML5History.prototype = Object.create(History$$1 && History$$1.prototype);
        HTML5History.prototype.constructor = HTML5History;
        HTML5History.prototype.go = function go(n) {
            window.history.go(n);
        };
        HTML5History.prototype.push = function push(location, onComplete, onAbort) {
            var this$1 = this;
            this.transitionTo(location, function(route) {
                pushState(cleanPath(this$1.base + route.fullPath));
                handleScroll(this$1.router, route, this$1.current, false);
                onComplete && onComplete(route);
            }, onAbort);
        };
        HTML5History.prototype.replace = function replace(location, onComplete, onAbort) {
            var this$1 = this;
            this.transitionTo(location, function(route) {
                replaceState(cleanPath(this$1.base + route.fullPath));
                handleScroll(this$1.router, route, this$1.current, false);
                onComplete && onComplete(route);
            }, onAbort);
        };
        HTML5History.prototype.ensureURL = function ensureURL(push) {
            if (getLocation(this.base) !== this.current.fullPath) {
                var current = cleanPath(this.base + this.current.fullPath);
                push ? pushState(current) : replaceState(current);
            }
        };
        HTML5History.prototype.getCurrentLocation = function getCurrentLocation() {
            return getLocation(this.base);
        };
        return HTML5History;
    }(History);
    function getLocation(base) {
        var path = window.location.pathname;
        if (base && path.indexOf(base) === 0) {
            path = path.slice(base.length);
        }
        return (path || "/") + window.location.search + window.location.hash;
    }
    var HashHistory = function(History$$1) {
        function HashHistory(router, base, fallback) {
            History$$1.call(this, router, base);
            if (fallback && checkFallback(this.base)) {
                return;
            }
            ensureSlash();
        }
        if (History$$1) HashHistory.__proto__ = History$$1;
        HashHistory.prototype = Object.create(History$$1 && History$$1.prototype);
        HashHistory.prototype.constructor = HashHistory;
        HashHistory.prototype.setupListeners = function setupListeners() {
            var this$1 = this;
            window.addEventListener("hashchange", function() {
                if (!ensureSlash()) {
                    return;
                }
                this$1.transitionTo(getHash(), function(route) {
                    replaceHash(route.fullPath);
                });
            });
        };
        HashHistory.prototype.push = function push(location, onComplete, onAbort) {
            this.transitionTo(location, function(route) {
                pushHash(route.fullPath);
                onComplete && onComplete(route);
            }, onAbort);
        };
        HashHistory.prototype.replace = function replace(location, onComplete, onAbort) {
            this.transitionTo(location, function(route) {
                replaceHash(route.fullPath);
                onComplete && onComplete(route);
            }, onAbort);
        };
        HashHistory.prototype.go = function go(n) {
            window.history.go(n);
        };
        HashHistory.prototype.ensureURL = function ensureURL(push) {
            var current = this.current.fullPath;
            if (getHash() !== current) {
                push ? pushHash(current) : replaceHash(current);
            }
        };
        HashHistory.prototype.getCurrentLocation = function getCurrentLocation() {
            return getHash();
        };
        return HashHistory;
    }(History);
    function checkFallback(base) {
        var location = getLocation(base);
        if (!/^\/#/.test(location)) {
            window.location.replace(cleanPath(base + "/#" + location));
            return true;
        }
    }
    function ensureSlash() {
        var path = getHash();
        if (path.charAt(0) === "/") {
            return true;
        }
        replaceHash("/" + path);
        return false;
    }
    function getHash() {
        var href = window.location.href;
        var index = href.indexOf("#");
        return index === -1 ? "" : href.slice(index + 1);
    }
    function pushHash(path) {
        window.location.hash = path;
    }
    function replaceHash(path) {
        var i = window.location.href.indexOf("#");
        window.location.replace(window.location.href.slice(0, i >= 0 ? i : 0) + "#" + path);
    }
    var AbstractHistory = function(History$$1) {
        function AbstractHistory(router, base) {
            History$$1.call(this, router, base);
            this.stack = [];
            this.index = -1;
        }
        if (History$$1) AbstractHistory.__proto__ = History$$1;
        AbstractHistory.prototype = Object.create(History$$1 && History$$1.prototype);
        AbstractHistory.prototype.constructor = AbstractHistory;
        AbstractHistory.prototype.push = function push(location, onComplete, onAbort) {
            var this$1 = this;
            this.transitionTo(location, function(route) {
                this$1.stack = this$1.stack.slice(0, this$1.index + 1).concat(route);
                this$1.index++;
                onComplete && onComplete(route);
            }, onAbort);
        };
        AbstractHistory.prototype.replace = function replace(location, onComplete, onAbort) {
            var this$1 = this;
            this.transitionTo(location, function(route) {
                this$1.stack = this$1.stack.slice(0, this$1.index).concat(route);
                onComplete && onComplete(route);
            }, onAbort);
        };
        AbstractHistory.prototype.go = function go(n) {
            var this$1 = this;
            var targetIndex = this.index + n;
            if (targetIndex < 0 || targetIndex >= this.stack.length) {
                return;
            }
            var route = this.stack[targetIndex];
            this.confirmTransition(route, function() {
                this$1.index = targetIndex;
                this$1.updateRoute(route);
            });
        };
        AbstractHistory.prototype.getCurrentLocation = function getCurrentLocation() {
            var current = this.stack[this.stack.length - 1];
            return current ? current.fullPath : "/";
        };
        AbstractHistory.prototype.ensureURL = function ensureURL() {};
        return AbstractHistory;
    }(History);
    var VueRouter = function VueRouter(options) {
        if (options === void 0) options = {};
        this.app = null;
        this.apps = [];
        this.options = options;
        this.beforeHooks = [];
        this.afterHooks = [];
        this.matcher = createMatcher(options.routes || []);
        var mode = options.mode || "hash";
        this.fallback = mode === "history" && !supportsPushState;
        if (this.fallback) {
            mode = "hash";
        }
        if (!inBrowser) {
            mode = "abstract";
        }
        this.mode = mode;
        switch (mode) {
          case "history":
            this.history = new HTML5History(this, options.base);
            break;

          case "hash":
            this.history = new HashHistory(this, options.base, this.fallback);
            break;

          case "abstract":
            this.history = new AbstractHistory(this, options.base);
            break;

          default:
            if (false) {
                assert(false, "invalid mode: " + mode);
            }
        }
    };
    var prototypeAccessors = {
        currentRoute: {}
    };
    VueRouter.prototype.match = function match(raw, current, redirectedFrom) {
        return this.matcher.match(raw, current, redirectedFrom);
    };
    prototypeAccessors.currentRoute.get = function() {
        return this.history && this.history.current;
    };
    VueRouter.prototype.init = function init(app) {
        var this$1 = this;
        "production" !== "production" && assert(install.installed, "not installed. Make sure to call `Vue.use(VueRouter)` " + "before creating root instance.");
        this.apps.push(app);
        if (this.app) {
            return;
        }
        this.app = app;
        var history = this.history;
        if (history instanceof HTML5History) {
            history.transitionTo(history.getCurrentLocation());
        } else if (history instanceof HashHistory) {
            var setupHashListener = function() {
                history.setupListeners();
            };
            history.transitionTo(history.getCurrentLocation(), setupHashListener, setupHashListener);
        }
        history.listen(function(route) {
            this$1.apps.forEach(function(app) {
                app._route = route;
            });
        });
    };
    VueRouter.prototype.beforeEach = function beforeEach(fn) {
        this.beforeHooks.push(fn);
    };
    VueRouter.prototype.afterEach = function afterEach(fn) {
        this.afterHooks.push(fn);
    };
    VueRouter.prototype.onReady = function onReady(cb) {
        this.history.onReady(cb);
    };
    VueRouter.prototype.push = function push(location, onComplete, onAbort) {
        this.history.push(location, onComplete, onAbort);
    };
    VueRouter.prototype.replace = function replace(location, onComplete, onAbort) {
        this.history.replace(location, onComplete, onAbort);
    };
    VueRouter.prototype.go = function go(n) {
        this.history.go(n);
    };
    VueRouter.prototype.back = function back() {
        this.go(-1);
    };
    VueRouter.prototype.forward = function forward() {
        this.go(1);
    };
    VueRouter.prototype.getMatchedComponents = function getMatchedComponents(to) {
        var route = to ? this.resolve(to).route : this.currentRoute;
        if (!route) {
            return [];
        }
        return [].concat.apply([], route.matched.map(function(m) {
            return Object.keys(m.components).map(function(key) {
                return m.components[key];
            });
        }));
    };
    VueRouter.prototype.resolve = function resolve(to, current, append) {
        var location = normalizeLocation(to, current || this.history.current, append);
        var route = this.match(location, current);
        var fullPath = route.redirectedFrom || route.fullPath;
        var base = this.history.base;
        var href = createHref(base, fullPath, this.mode);
        return {
            location: location,
            route: route,
            href: href,
            normalizedTo: location,
            resolved: route
        };
    };
    VueRouter.prototype.addRoutes = function addRoutes(routes) {
        this.matcher.addRoutes(routes);
        if (this.history.current !== START) {
            this.history.transitionTo(this.history.getCurrentLocation());
        }
    };
    Object.defineProperties(VueRouter.prototype, prototypeAccessors);
    function createHref(base, fullPath, mode) {
        var path = mode === "hash" ? "#" + fullPath : fullPath;
        return base ? cleanPath(base + "/" + path) : path;
    }
    VueRouter.install = install;
    VueRouter.version = "2.2.1";
    if (inBrowser && window.Vue) {
        window.Vue.use(VueRouter);
    }
    __webpack_exports__["default"] = VueRouter;
}, , function(module, __webpack_exports__, __webpack_require__) {
    "use strict";
    (function(global) {
        Object.defineProperty(__webpack_exports__, "__esModule", {
            value: true
        });
        function _toString(val) {
            return val == null ? "" : typeof val === "object" ? JSON.stringify(val, null, 2) : String(val);
        }
        function toNumber(val) {
            var n = parseFloat(val);
            return isNaN(n) ? val : n;
        }
        function makeMap(str, expectsLowerCase) {
            var map = Object.create(null);
            var list = str.split(",");
            for (var i = 0; i < list.length; i++) {
                map[list[i]] = true;
            }
            return expectsLowerCase ? function(val) {
                return map[val.toLowerCase()];
            } : function(val) {
                return map[val];
            };
        }
        var isBuiltInTag = makeMap("slot,component", true);
        function remove(arr, item) {
            if (arr.length) {
                var index = arr.indexOf(item);
                if (index > -1) {
                    return arr.splice(index, 1);
                }
            }
        }
        var hasOwnProperty = Object.prototype.hasOwnProperty;
        function hasOwn(obj, key) {
            return hasOwnProperty.call(obj, key);
        }
        function isPrimitive(value) {
            return typeof value === "string" || typeof value === "number";
        }
        function cached(fn) {
            var cache = Object.create(null);
            return function cachedFn(str) {
                var hit = cache[str];
                return hit || (cache[str] = fn(str));
            };
        }
        var camelizeRE = /-(\w)/g;
        var camelize = cached(function(str) {
            return str.replace(camelizeRE, function(_, c) {
                return c ? c.toUpperCase() : "";
            });
        });
        var capitalize = cached(function(str) {
            return str.charAt(0).toUpperCase() + str.slice(1);
        });
        var hyphenateRE = /([^-])([A-Z])/g;
        var hyphenate = cached(function(str) {
            return str.replace(hyphenateRE, "$1-$2").replace(hyphenateRE, "$1-$2").toLowerCase();
        });
        function bind(fn, ctx) {
            function boundFn(a) {
                var l = arguments.length;
                return l ? l > 1 ? fn.apply(ctx, arguments) : fn.call(ctx, a) : fn.call(ctx);
            }
            boundFn._length = fn.length;
            return boundFn;
        }
        function toArray(list, start) {
            start = start || 0;
            var i = list.length - start;
            var ret = new Array(i);
            while (i--) {
                ret[i] = list[i + start];
            }
            return ret;
        }
        function extend(to, _from) {
            for (var key in _from) {
                to[key] = _from[key];
            }
            return to;
        }
        function isObject(obj) {
            return obj !== null && typeof obj === "object";
        }
        var toString = Object.prototype.toString;
        var OBJECT_STRING = "[object Object]";
        function isPlainObject(obj) {
            return toString.call(obj) === OBJECT_STRING;
        }
        function toObject(arr) {
            var res = {};
            for (var i = 0; i < arr.length; i++) {
                if (arr[i]) {
                    extend(res, arr[i]);
                }
            }
            return res;
        }
        function noop() {}
        var no = function() {
            return false;
        };
        var identity = function(_) {
            return _;
        };
        function genStaticKeys(modules) {
            return modules.reduce(function(keys, m) {
                return keys.concat(m.staticKeys || []);
            }, []).join(",");
        }
        function looseEqual(a, b) {
            var isObjectA = isObject(a);
            var isObjectB = isObject(b);
            if (isObjectA && isObjectB) {
                try {
                    return JSON.stringify(a) === JSON.stringify(b);
                } catch (e) {
                    return a === b;
                }
            } else if (!isObjectA && !isObjectB) {
                return String(a) === String(b);
            } else {
                return false;
            }
        }
        function looseIndexOf(arr, val) {
            for (var i = 0; i < arr.length; i++) {
                if (looseEqual(arr[i], val)) {
                    return i;
                }
            }
            return -1;
        }
        function once(fn) {
            var called = false;
            return function() {
                if (!called) {
                    called = true;
                    fn();
                }
            };
        }
        var config = {
            optionMergeStrategies: Object.create(null),
            silent: false,
            productionTip: "production" !== "production",
            devtools: "production" !== "production",
            performance: false,
            errorHandler: null,
            ignoredElements: [],
            keyCodes: Object.create(null),
            isReservedTag: no,
            isUnknownElement: no,
            getTagNamespace: noop,
            parsePlatformTagName: identity,
            mustUseProp: no,
            _assetTypes: [ "component", "directive", "filter" ],
            _lifecycleHooks: [ "beforeCreate", "created", "beforeMount", "mounted", "beforeUpdate", "updated", "beforeDestroy", "destroyed", "activated", "deactivated" ],
            _maxUpdateCount: 100
        };
        var emptyObject = Object.freeze({});
        function isReserved(str) {
            var c = (str + "").charCodeAt(0);
            return c === 36 || c === 95;
        }
        function def(obj, key, val, enumerable) {
            Object.defineProperty(obj, key, {
                value: val,
                enumerable: !!enumerable,
                writable: true,
                configurable: true
            });
        }
        var bailRE = /[^\w.$]/;
        function parsePath(path) {
            if (bailRE.test(path)) {
                return;
            }
            var segments = path.split(".");
            return function(obj) {
                for (var i = 0; i < segments.length; i++) {
                    if (!obj) {
                        return;
                    }
                    obj = obj[segments[i]];
                }
                return obj;
            };
        }
        var hasProto = "__proto__" in {};
        var inBrowser = typeof window !== "undefined";
        var UA = inBrowser && window.navigator.userAgent.toLowerCase();
        var isIE = UA && /msie|trident/.test(UA);
        var isIE9 = UA && UA.indexOf("msie 9.0") > 0;
        var isEdge = UA && UA.indexOf("edge/") > 0;
        var isAndroid = UA && UA.indexOf("android") > 0;
        var isIOS = UA && /iphone|ipad|ipod|ios/.test(UA);
        var isChrome = UA && /chrome\/\d+/.test(UA) && !isEdge;
        var _isServer;
        var isServerRendering = function() {
            if (_isServer === undefined) {
                if (!inBrowser && typeof global !== "undefined") {
                    _isServer = global["process"].env.VUE_ENV === "server";
                } else {
                    _isServer = false;
                }
            }
            return _isServer;
        };
        var devtools = inBrowser && window.__VUE_DEVTOOLS_GLOBAL_HOOK__;
        function isNative(Ctor) {
            return /native code/.test(Ctor.toString());
        }
        var hasSymbol = typeof Symbol !== "undefined" && isNative(Symbol) && typeof Reflect !== "undefined" && isNative(Reflect.ownKeys);
        var nextTick = function() {
            var callbacks = [];
            var pending = false;
            var timerFunc;
            function nextTickHandler() {
                pending = false;
                var copies = callbacks.slice(0);
                callbacks.length = 0;
                for (var i = 0; i < copies.length; i++) {
                    copies[i]();
                }
            }
            if (typeof Promise !== "undefined" && isNative(Promise)) {
                var p = Promise.resolve();
                var logError = function(err) {
                    console.error(err);
                };
                timerFunc = function() {
                    p.then(nextTickHandler).catch(logError);
                    if (isIOS) {
                        setTimeout(noop);
                    }
                };
            } else if (typeof MutationObserver !== "undefined" && (isNative(MutationObserver) || MutationObserver.toString() === "[object MutationObserverConstructor]")) {
                var counter = 1;
                var observer = new MutationObserver(nextTickHandler);
                var textNode = document.createTextNode(String(counter));
                observer.observe(textNode, {
                    characterData: true
                });
                timerFunc = function() {
                    counter = (counter + 1) % 2;
                    textNode.data = String(counter);
                };
            } else {
                timerFunc = function() {
                    setTimeout(nextTickHandler, 0);
                };
            }
            return function queueNextTick(cb, ctx) {
                var _resolve;
                callbacks.push(function() {
                    if (cb) {
                        cb.call(ctx);
                    }
                    if (_resolve) {
                        _resolve(ctx);
                    }
                });
                if (!pending) {
                    pending = true;
                    timerFunc();
                }
                if (!cb && typeof Promise !== "undefined") {
                    return new Promise(function(resolve) {
                        _resolve = resolve;
                    });
                }
            };
        }();
        var _Set;
        if (typeof Set !== "undefined" && isNative(Set)) {
            _Set = Set;
        } else {
            _Set = function() {
                function Set() {
                    this.set = Object.create(null);
                }
                Set.prototype.has = function has(key) {
                    return this.set[key] === true;
                };
                Set.prototype.add = function add(key) {
                    this.set[key] = true;
                };
                Set.prototype.clear = function clear() {
                    this.set = Object.create(null);
                };
                return Set;
            }();
        }
        var warn = noop;
        var tip = noop;
        var formatComponentName;
        if (false) {
            var hasConsole = typeof console !== "undefined";
            var classifyRE = /(?:^|[-_])(\w)/g;
            var classify = function(str) {
                return str.replace(classifyRE, function(c) {
                    return c.toUpperCase();
                }).replace(/[-_]/g, "");
            };
            warn = function(msg, vm) {
                if (hasConsole && !config.silent) {
                    console.error("[Vue warn]: " + msg + " " + (vm ? formatLocation(formatComponentName(vm)) : ""));
                }
            };
            tip = function(msg, vm) {
                if (hasConsole && !config.silent) {
                    console.warn("[Vue tip]: " + msg + " " + (vm ? formatLocation(formatComponentName(vm)) : ""));
                }
            };
            formatComponentName = function(vm, includeFile) {
                if (vm.$root === vm) {
                    return "<Root>";
                }
                var name = typeof vm === "string" ? vm : typeof vm === "function" && vm.options ? vm.options.name : vm._isVue ? vm.$options.name || vm.$options._componentTag : vm.name;
                var file = vm._isVue && vm.$options.__file;
                if (!name && file) {
                    var match = file.match(/([^\/\\]+)\.vue$/);
                    name = match && match[1];
                }
                return (name ? "<" + classify(name) + ">" : "<Anonymous>") + (file && includeFile !== false ? " at " + file : "");
            };
            var formatLocation = function(str) {
                if (str === "<Anonymous>") {
                    str += ' - use the "name" option for better debugging messages.';
                }
                return "\n(found in " + str + ")";
            };
        }
        var uid$1 = 0;
        var Dep = function Dep() {
            this.id = uid$1++;
            this.subs = [];
        };
        Dep.prototype.addSub = function addSub(sub) {
            this.subs.push(sub);
        };
        Dep.prototype.removeSub = function removeSub(sub) {
            remove(this.subs, sub);
        };
        Dep.prototype.depend = function depend() {
            if (Dep.target) {
                Dep.target.addDep(this);
            }
        };
        Dep.prototype.notify = function notify() {
            var subs = this.subs.slice();
            for (var i = 0, l = subs.length; i < l; i++) {
                subs[i].update();
            }
        };
        Dep.target = null;
        var targetStack = [];
        function pushTarget(_target) {
            if (Dep.target) {
                targetStack.push(Dep.target);
            }
            Dep.target = _target;
        }
        function popTarget() {
            Dep.target = targetStack.pop();
        }
        var arrayProto = Array.prototype;
        var arrayMethods = Object.create(arrayProto);
        [ "push", "pop", "shift", "unshift", "splice", "sort", "reverse" ].forEach(function(method) {
            var original = arrayProto[method];
            def(arrayMethods, method, function mutator() {
                var arguments$1 = arguments;
                var i = arguments.length;
                var args = new Array(i);
                while (i--) {
                    args[i] = arguments$1[i];
                }
                var result = original.apply(this, args);
                var ob = this.__ob__;
                var inserted;
                switch (method) {
                  case "push":
                    inserted = args;
                    break;

                  case "unshift":
                    inserted = args;
                    break;

                  case "splice":
                    inserted = args.slice(2);
                    break;
                }
                if (inserted) {
                    ob.observeArray(inserted);
                }
                ob.dep.notify();
                return result;
            });
        });
        var arrayKeys = Object.getOwnPropertyNames(arrayMethods);
        var observerState = {
            shouldConvert: true,
            isSettingProps: false
        };
        var Observer = function Observer(value) {
            this.value = value;
            this.dep = new Dep();
            this.vmCount = 0;
            def(value, "__ob__", this);
            if (Array.isArray(value)) {
                var augment = hasProto ? protoAugment : copyAugment;
                augment(value, arrayMethods, arrayKeys);
                this.observeArray(value);
            } else {
                this.walk(value);
            }
        };
        Observer.prototype.walk = function walk(obj) {
            var keys = Object.keys(obj);
            for (var i = 0; i < keys.length; i++) {
                defineReactive$$1(obj, keys[i], obj[keys[i]]);
            }
        };
        Observer.prototype.observeArray = function observeArray(items) {
            for (var i = 0, l = items.length; i < l; i++) {
                observe(items[i]);
            }
        };
        function protoAugment(target, src) {
            target.__proto__ = src;
        }
        function copyAugment(target, src, keys) {
            for (var i = 0, l = keys.length; i < l; i++) {
                var key = keys[i];
                def(target, key, src[key]);
            }
        }
        function observe(value, asRootData) {
            if (!isObject(value)) {
                return;
            }
            var ob;
            if (hasOwn(value, "__ob__") && value.__ob__ instanceof Observer) {
                ob = value.__ob__;
            } else if (observerState.shouldConvert && !isServerRendering() && (Array.isArray(value) || isPlainObject(value)) && Object.isExtensible(value) && !value._isVue) {
                ob = new Observer(value);
            }
            if (asRootData && ob) {
                ob.vmCount++;
            }
            return ob;
        }
        function defineReactive$$1(obj, key, val, customSetter) {
            var dep = new Dep();
            var property = Object.getOwnPropertyDescriptor(obj, key);
            if (property && property.configurable === false) {
                return;
            }
            var getter = property && property.get;
            var setter = property && property.set;
            var childOb = observe(val);
            Object.defineProperty(obj, key, {
                enumerable: true,
                configurable: true,
                get: function reactiveGetter() {
                    var value = getter ? getter.call(obj) : val;
                    if (Dep.target) {
                        dep.depend();
                        if (childOb) {
                            childOb.dep.depend();
                        }
                        if (Array.isArray(value)) {
                            dependArray(value);
                        }
                    }
                    return value;
                },
                set: function reactiveSetter(newVal) {
                    var value = getter ? getter.call(obj) : val;
                    if (newVal === value || newVal !== newVal && value !== value) {
                        return;
                    }
                    if (false) {
                        customSetter();
                    }
                    if (setter) {
                        setter.call(obj, newVal);
                    } else {
                        val = newVal;
                    }
                    childOb = observe(newVal);
                    dep.notify();
                }
            });
        }
        function set(target, key, val) {
            if (Array.isArray(target) && typeof key === "number") {
                target.length = Math.max(target.length, key);
                target.splice(key, 1, val);
                return val;
            }
            if (hasOwn(target, key)) {
                target[key] = val;
                return val;
            }
            var ob = target.__ob__;
            if (target._isVue || ob && ob.vmCount) {
                "production" !== "production" && warn("Avoid adding reactive properties to a Vue instance or its root $data " + "at runtime - declare it upfront in the data option.");
                return val;
            }
            if (!ob) {
                target[key] = val;
                return val;
            }
            defineReactive$$1(ob.value, key, val);
            ob.dep.notify();
            return val;
        }
        function del(target, key) {
            if (Array.isArray(target) && typeof key === "number") {
                target.splice(key, 1);
                return;
            }
            var ob = target.__ob__;
            if (target._isVue || ob && ob.vmCount) {
                "production" !== "production" && warn("Avoid deleting properties on a Vue instance or its root $data " + "- just set it to null.");
                return;
            }
            if (!hasOwn(target, key)) {
                return;
            }
            delete target[key];
            if (!ob) {
                return;
            }
            ob.dep.notify();
        }
        function dependArray(value) {
            for (var e = void 0, i = 0, l = value.length; i < l; i++) {
                e = value[i];
                e && e.__ob__ && e.__ob__.dep.depend();
                if (Array.isArray(e)) {
                    dependArray(e);
                }
            }
        }
        var strats = config.optionMergeStrategies;
        if (false) {
            strats.el = strats.propsData = function(parent, child, vm, key) {
                if (!vm) {
                    warn('option "' + key + '" can only be used during instance ' + "creation with the `new` keyword.");
                }
                return defaultStrat(parent, child);
            };
        }
        function mergeData(to, from) {
            if (!from) {
                return to;
            }
            var key, toVal, fromVal;
            var keys = Object.keys(from);
            for (var i = 0; i < keys.length; i++) {
                key = keys[i];
                toVal = to[key];
                fromVal = from[key];
                if (!hasOwn(to, key)) {
                    set(to, key, fromVal);
                } else if (isPlainObject(toVal) && isPlainObject(fromVal)) {
                    mergeData(toVal, fromVal);
                }
            }
            return to;
        }
        strats.data = function(parentVal, childVal, vm) {
            if (!vm) {
                if (!childVal) {
                    return parentVal;
                }
                if (typeof childVal !== "function") {
                    "production" !== "production" && warn('The "data" option should be a function ' + "that returns a per-instance value in component " + "definitions.", vm);
                    return parentVal;
                }
                if (!parentVal) {
                    return childVal;
                }
                return function mergedDataFn() {
                    return mergeData(childVal.call(this), parentVal.call(this));
                };
            } else if (parentVal || childVal) {
                return function mergedInstanceDataFn() {
                    var instanceData = typeof childVal === "function" ? childVal.call(vm) : childVal;
                    var defaultData = typeof parentVal === "function" ? parentVal.call(vm) : undefined;
                    if (instanceData) {
                        return mergeData(instanceData, defaultData);
                    } else {
                        return defaultData;
                    }
                };
            }
        };
        function mergeHook(parentVal, childVal) {
            return childVal ? parentVal ? parentVal.concat(childVal) : Array.isArray(childVal) ? childVal : [ childVal ] : parentVal;
        }
        config._lifecycleHooks.forEach(function(hook) {
            strats[hook] = mergeHook;
        });
        function mergeAssets(parentVal, childVal) {
            var res = Object.create(parentVal || null);
            return childVal ? extend(res, childVal) : res;
        }
        config._assetTypes.forEach(function(type) {
            strats[type + "s"] = mergeAssets;
        });
        strats.watch = function(parentVal, childVal) {
            if (!childVal) {
                return Object.create(parentVal || null);
            }
            if (!parentVal) {
                return childVal;
            }
            var ret = {};
            extend(ret, parentVal);
            for (var key in childVal) {
                var parent = ret[key];
                var child = childVal[key];
                if (parent && !Array.isArray(parent)) {
                    parent = [ parent ];
                }
                ret[key] = parent ? parent.concat(child) : [ child ];
            }
            return ret;
        };
        strats.props = strats.methods = strats.computed = function(parentVal, childVal) {
            if (!childVal) {
                return Object.create(parentVal || null);
            }
            if (!parentVal) {
                return childVal;
            }
            var ret = Object.create(null);
            extend(ret, parentVal);
            extend(ret, childVal);
            return ret;
        };
        var defaultStrat = function(parentVal, childVal) {
            return childVal === undefined ? parentVal : childVal;
        };
        function checkComponents(options) {
            for (var key in options.components) {
                var lower = key.toLowerCase();
                if (isBuiltInTag(lower) || config.isReservedTag(lower)) {
                    warn("Do not use built-in or reserved HTML elements as component " + "id: " + key);
                }
            }
        }
        function normalizeProps(options) {
            var props = options.props;
            if (!props) {
                return;
            }
            var res = {};
            var i, val, name;
            if (Array.isArray(props)) {
                i = props.length;
                while (i--) {
                    val = props[i];
                    if (typeof val === "string") {
                        name = camelize(val);
                        res[name] = {
                            type: null
                        };
                    } else if (false) {
                        warn("props must be strings when using array syntax.");
                    }
                }
            } else if (isPlainObject(props)) {
                for (var key in props) {
                    val = props[key];
                    name = camelize(key);
                    res[name] = isPlainObject(val) ? val : {
                        type: val
                    };
                }
            }
            options.props = res;
        }
        function normalizeDirectives(options) {
            var dirs = options.directives;
            if (dirs) {
                for (var key in dirs) {
                    var def = dirs[key];
                    if (typeof def === "function") {
                        dirs[key] = {
                            bind: def,
                            update: def
                        };
                    }
                }
            }
        }
        function mergeOptions(parent, child, vm) {
            if (false) {
                checkComponents(child);
            }
            normalizeProps(child);
            normalizeDirectives(child);
            var extendsFrom = child.extends;
            if (extendsFrom) {
                parent = typeof extendsFrom === "function" ? mergeOptions(parent, extendsFrom.options, vm) : mergeOptions(parent, extendsFrom, vm);
            }
            if (child.mixins) {
                for (var i = 0, l = child.mixins.length; i < l; i++) {
                    var mixin = child.mixins[i];
                    if (mixin.prototype instanceof Vue$3) {
                        mixin = mixin.options;
                    }
                    parent = mergeOptions(parent, mixin, vm);
                }
            }
            var options = {};
            var key;
            for (key in parent) {
                mergeField(key);
            }
            for (key in child) {
                if (!hasOwn(parent, key)) {
                    mergeField(key);
                }
            }
            function mergeField(key) {
                var strat = strats[key] || defaultStrat;
                options[key] = strat(parent[key], child[key], vm, key);
            }
            return options;
        }
        function resolveAsset(options, type, id, warnMissing) {
            if (typeof id !== "string") {
                return;
            }
            var assets = options[type];
            if (hasOwn(assets, id)) {
                return assets[id];
            }
            var camelizedId = camelize(id);
            if (hasOwn(assets, camelizedId)) {
                return assets[camelizedId];
            }
            var PascalCaseId = capitalize(camelizedId);
            if (hasOwn(assets, PascalCaseId)) {
                return assets[PascalCaseId];
            }
            var res = assets[id] || assets[camelizedId] || assets[PascalCaseId];
            if (false) {
                warn("Failed to resolve " + type.slice(0, -1) + ": " + id, options);
            }
            return res;
        }
        function validateProp(key, propOptions, propsData, vm) {
            var prop = propOptions[key];
            var absent = !hasOwn(propsData, key);
            var value = propsData[key];
            if (isType(Boolean, prop.type)) {
                if (absent && !hasOwn(prop, "default")) {
                    value = false;
                } else if (!isType(String, prop.type) && (value === "" || value === hyphenate(key))) {
                    value = true;
                }
            }
            if (value === undefined) {
                value = getPropDefaultValue(vm, prop, key);
                var prevShouldConvert = observerState.shouldConvert;
                observerState.shouldConvert = true;
                observe(value);
                observerState.shouldConvert = prevShouldConvert;
            }
            if (false) {
                assertProp(prop, key, value, vm, absent);
            }
            return value;
        }
        function getPropDefaultValue(vm, prop, key) {
            if (!hasOwn(prop, "default")) {
                return undefined;
            }
            var def = prop.default;
            if (false) {
                warn('Invalid default value for prop "' + key + '": ' + "Props with type Object/Array must use a factory function " + "to return the default value.", vm);
            }
            if (vm && vm.$options.propsData && vm.$options.propsData[key] === undefined && vm._props[key] !== undefined) {
                return vm._props[key];
            }
            return typeof def === "function" && getType(prop.type) !== "Function" ? def.call(vm) : def;
        }
        function assertProp(prop, name, value, vm, absent) {
            if (prop.required && absent) {
                warn('Missing required prop: "' + name + '"', vm);
                return;
            }
            if (value == null && !prop.required) {
                return;
            }
            var type = prop.type;
            var valid = !type || type === true;
            var expectedTypes = [];
            if (type) {
                if (!Array.isArray(type)) {
                    type = [ type ];
                }
                for (var i = 0; i < type.length && !valid; i++) {
                    var assertedType = assertType(value, type[i]);
                    expectedTypes.push(assertedType.expectedType || "");
                    valid = assertedType.valid;
                }
            }
            if (!valid) {
                warn('Invalid prop: type check failed for prop "' + name + '".' + " Expected " + expectedTypes.map(capitalize).join(", ") + ", got " + Object.prototype.toString.call(value).slice(8, -1) + ".", vm);
                return;
            }
            var validator = prop.validator;
            if (validator) {
                if (!validator(value)) {
                    warn('Invalid prop: custom validator check failed for prop "' + name + '".', vm);
                }
            }
        }
        function assertType(value, type) {
            var valid;
            var expectedType = getType(type);
            if (expectedType === "String") {
                valid = typeof value === (expectedType = "string");
            } else if (expectedType === "Number") {
                valid = typeof value === (expectedType = "number");
            } else if (expectedType === "Boolean") {
                valid = typeof value === (expectedType = "boolean");
            } else if (expectedType === "Function") {
                valid = typeof value === (expectedType = "function");
            } else if (expectedType === "Object") {
                valid = isPlainObject(value);
            } else if (expectedType === "Array") {
                valid = Array.isArray(value);
            } else {
                valid = value instanceof type;
            }
            return {
                valid: valid,
                expectedType: expectedType
            };
        }
        function getType(fn) {
            var match = fn && fn.toString().match(/^\s*function (\w+)/);
            return match && match[1];
        }
        function isType(type, fn) {
            if (!Array.isArray(fn)) {
                return getType(fn) === getType(type);
            }
            for (var i = 0, len = fn.length; i < len; i++) {
                if (getType(fn[i]) === getType(type)) {
                    return true;
                }
            }
            return false;
        }
        function handleError(err, vm, info) {
            if (config.errorHandler) {
                config.errorHandler.call(null, err, vm, info);
            } else {
                if (false) {
                    warn("Error in " + info + ":", vm);
                }
                if (inBrowser && typeof console !== "undefined") {
                    console.error(err);
                } else {
                    throw err;
                }
            }
        }
        var initProxy;
        if (false) {
            var allowedGlobals = makeMap("Infinity,undefined,NaN,isFinite,isNaN," + "parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent," + "Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl," + "require");
            var warnNonPresent = function(target, key) {
                warn('Property or method "' + key + '" is not defined on the instance but ' + "referenced during render. Make sure to declare reactive data " + "properties in the data option.", target);
            };
            var hasProxy = typeof Proxy !== "undefined" && Proxy.toString().match(/native code/);
            if (hasProxy) {
                var isBuiltInModifier = makeMap("stop,prevent,self,ctrl,shift,alt,meta");
                config.keyCodes = new Proxy(config.keyCodes, {
                    set: function set(target, key, value) {
                        if (isBuiltInModifier(key)) {
                            warn("Avoid overwriting built-in modifier in config.keyCodes: ." + key);
                            return false;
                        } else {
                            target[key] = value;
                            return true;
                        }
                    }
                });
            }
            var hasHandler = {
                has: function has(target, key) {
                    var has = key in target;
                    var isAllowed = allowedGlobals(key) || key.charAt(0) === "_";
                    if (!has && !isAllowed) {
                        warnNonPresent(target, key);
                    }
                    return has || !isAllowed;
                }
            };
            var getHandler = {
                get: function get(target, key) {
                    if (typeof key === "string" && !(key in target)) {
                        warnNonPresent(target, key);
                    }
                    return target[key];
                }
            };
            initProxy = function initProxy(vm) {
                if (hasProxy) {
                    var options = vm.$options;
                    var handlers = options.render && options.render._withStripped ? getHandler : hasHandler;
                    vm._renderProxy = new Proxy(vm, handlers);
                } else {
                    vm._renderProxy = vm;
                }
            };
        }
        var mark;
        var measure;
        if (false) {
            var perf = inBrowser && window.performance;
            if (perf && perf.mark && perf.measure && perf.clearMarks && perf.clearMeasures) {
                mark = function(tag) {
                    return perf.mark(tag);
                };
                measure = function(name, startTag, endTag) {
                    perf.measure(name, startTag, endTag);
                    perf.clearMarks(startTag);
                    perf.clearMarks(endTag);
                    perf.clearMeasures(name);
                };
            }
        }
        var VNode = function VNode(tag, data, children, text, elm, context, componentOptions) {
            this.tag = tag;
            this.data = data;
            this.children = children;
            this.text = text;
            this.elm = elm;
            this.ns = undefined;
            this.context = context;
            this.functionalContext = undefined;
            this.key = data && data.key;
            this.componentOptions = componentOptions;
            this.componentInstance = undefined;
            this.parent = undefined;
            this.raw = false;
            this.isStatic = false;
            this.isRootInsert = true;
            this.isComment = false;
            this.isCloned = false;
            this.isOnce = false;
        };
        var prototypeAccessors = {
            child: {}
        };
        prototypeAccessors.child.get = function() {
            return this.componentInstance;
        };
        Object.defineProperties(VNode.prototype, prototypeAccessors);
        var createEmptyVNode = function() {
            var node = new VNode();
            node.text = "";
            node.isComment = true;
            return node;
        };
        function createTextVNode(val) {
            return new VNode(undefined, undefined, undefined, String(val));
        }
        function cloneVNode(vnode) {
            var cloned = new VNode(vnode.tag, vnode.data, vnode.children, vnode.text, vnode.elm, vnode.context, vnode.componentOptions);
            cloned.ns = vnode.ns;
            cloned.isStatic = vnode.isStatic;
            cloned.key = vnode.key;
            cloned.isCloned = true;
            return cloned;
        }
        function cloneVNodes(vnodes) {
            var len = vnodes.length;
            var res = new Array(len);
            for (var i = 0; i < len; i++) {
                res[i] = cloneVNode(vnodes[i]);
            }
            return res;
        }
        var normalizeEvent = cached(function(name) {
            var once$$1 = name.charAt(0) === "~";
            name = once$$1 ? name.slice(1) : name;
            var capture = name.charAt(0) === "!";
            name = capture ? name.slice(1) : name;
            return {
                name: name,
                once: once$$1,
                capture: capture
            };
        });
        function createFnInvoker(fns) {
            function invoker() {
                var arguments$1 = arguments;
                var fns = invoker.fns;
                if (Array.isArray(fns)) {
                    for (var i = 0; i < fns.length; i++) {
                        fns[i].apply(null, arguments$1);
                    }
                } else {
                    return fns.apply(null, arguments);
                }
            }
            invoker.fns = fns;
            return invoker;
        }
        function updateListeners(on, oldOn, add, remove$$1, vm) {
            var name, cur, old, event;
            for (name in on) {
                cur = on[name];
                old = oldOn[name];
                event = normalizeEvent(name);
                if (!cur) {
                    "production" !== "production" && warn('Invalid handler for event "' + event.name + '": got ' + String(cur), vm);
                } else if (!old) {
                    if (!cur.fns) {
                        cur = on[name] = createFnInvoker(cur);
                    }
                    add(event.name, cur, event.once, event.capture);
                } else if (cur !== old) {
                    old.fns = cur;
                    on[name] = old;
                }
            }
            for (name in oldOn) {
                if (!on[name]) {
                    event = normalizeEvent(name);
                    remove$$1(event.name, oldOn[name], event.capture);
                }
            }
        }
        function mergeVNodeHook(def, hookKey, hook) {
            var invoker;
            var oldHook = def[hookKey];
            function wrappedHook() {
                hook.apply(this, arguments);
                remove(invoker.fns, wrappedHook);
            }
            if (!oldHook) {
                invoker = createFnInvoker([ wrappedHook ]);
            } else {
                if (oldHook.fns && oldHook.merged) {
                    invoker = oldHook;
                    invoker.fns.push(wrappedHook);
                } else {
                    invoker = createFnInvoker([ oldHook, wrappedHook ]);
                }
            }
            invoker.merged = true;
            def[hookKey] = invoker;
        }
        function simpleNormalizeChildren(children) {
            for (var i = 0; i < children.length; i++) {
                if (Array.isArray(children[i])) {
                    return Array.prototype.concat.apply([], children);
                }
            }
            return children;
        }
        function normalizeChildren(children) {
            return isPrimitive(children) ? [ createTextVNode(children) ] : Array.isArray(children) ? normalizeArrayChildren(children) : undefined;
        }
        function normalizeArrayChildren(children, nestedIndex) {
            var res = [];
            var i, c, last;
            for (i = 0; i < children.length; i++) {
                c = children[i];
                if (c == null || typeof c === "boolean") {
                    continue;
                }
                last = res[res.length - 1];
                if (Array.isArray(c)) {
                    res.push.apply(res, normalizeArrayChildren(c, (nestedIndex || "") + "_" + i));
                } else if (isPrimitive(c)) {
                    if (last && last.text) {
                        last.text += String(c);
                    } else if (c !== "") {
                        res.push(createTextVNode(c));
                    }
                } else {
                    if (c.text && last && last.text) {
                        res[res.length - 1] = createTextVNode(last.text + c.text);
                    } else {
                        if (c.tag && c.key == null && nestedIndex != null) {
                            c.key = "__vlist" + nestedIndex + "_" + i + "__";
                        }
                        res.push(c);
                    }
                }
            }
            return res;
        }
        function getFirstComponentChild(children) {
            return children && children.filter(function(c) {
                return c && c.componentOptions;
            })[0];
        }
        function initEvents(vm) {
            vm._events = Object.create(null);
            vm._hasHookEvent = false;
            var listeners = vm.$options._parentListeners;
            if (listeners) {
                updateComponentListeners(vm, listeners);
            }
        }
        var target;
        function add(event, fn, once$$1) {
            if (once$$1) {
                target.$once(event, fn);
            } else {
                target.$on(event, fn);
            }
        }
        function remove$1(event, fn) {
            target.$off(event, fn);
        }
        function updateComponentListeners(vm, listeners, oldListeners) {
            target = vm;
            updateListeners(listeners, oldListeners || {}, add, remove$1, vm);
        }
        function eventsMixin(Vue) {
            var hookRE = /^hook:/;
            Vue.prototype.$on = function(event, fn) {
                var this$1 = this;
                var vm = this;
                if (Array.isArray(event)) {
                    for (var i = 0, l = event.length; i < l; i++) {
                        this$1.$on(event[i], fn);
                    }
                } else {
                    (vm._events[event] || (vm._events[event] = [])).push(fn);
                    if (hookRE.test(event)) {
                        vm._hasHookEvent = true;
                    }
                }
                return vm;
            };
            Vue.prototype.$once = function(event, fn) {
                var vm = this;
                function on() {
                    vm.$off(event, on);
                    fn.apply(vm, arguments);
                }
                on.fn = fn;
                vm.$on(event, on);
                return vm;
            };
            Vue.prototype.$off = function(event, fn) {
                var this$1 = this;
                var vm = this;
                if (!arguments.length) {
                    vm._events = Object.create(null);
                    return vm;
                }
                if (Array.isArray(event)) {
                    for (var i$1 = 0, l = event.length; i$1 < l; i$1++) {
                        this$1.$off(event[i$1], fn);
                    }
                    return vm;
                }
                var cbs = vm._events[event];
                if (!cbs) {
                    return vm;
                }
                if (arguments.length === 1) {
                    vm._events[event] = null;
                    return vm;
                }
                var cb;
                var i = cbs.length;
                while (i--) {
                    cb = cbs[i];
                    if (cb === fn || cb.fn === fn) {
                        cbs.splice(i, 1);
                        break;
                    }
                }
                return vm;
            };
            Vue.prototype.$emit = function(event) {
                var vm = this;
                if (false) {
                    var lowerCaseEvent = event.toLowerCase();
                    if (lowerCaseEvent !== event && vm._events[lowerCaseEvent]) {
                        tip('Event "' + lowerCaseEvent + '" is emitted in component ' + formatComponentName(vm) + ' but the handler is registered for "' + event + '". ' + "Note that HTML attributes are case-insensitive and you cannot use " + "v-on to listen to camelCase events when using in-DOM templates. " + 'You should probably use "' + hyphenate(event) + '" instead of "' + event + '".');
                    }
                }
                var cbs = vm._events[event];
                if (cbs) {
                    cbs = cbs.length > 1 ? toArray(cbs) : cbs;
                    var args = toArray(arguments, 1);
                    for (var i = 0, l = cbs.length; i < l; i++) {
                        cbs[i].apply(vm, args);
                    }
                }
                return vm;
            };
        }
        function resolveSlots(children, context) {
            var slots = {};
            if (!children) {
                return slots;
            }
            var defaultSlot = [];
            var name, child;
            for (var i = 0, l = children.length; i < l; i++) {
                child = children[i];
                if ((child.context === context || child.functionalContext === context) && child.data && (name = child.data.slot)) {
                    var slot = slots[name] || (slots[name] = []);
                    if (child.tag === "template") {
                        slot.push.apply(slot, child.children);
                    } else {
                        slot.push(child);
                    }
                } else {
                    defaultSlot.push(child);
                }
            }
            if (!defaultSlot.every(isWhitespace)) {
                slots.default = defaultSlot;
            }
            return slots;
        }
        function isWhitespace(node) {
            return node.isComment || node.text === " ";
        }
        function resolveScopedSlots(fns) {
            var res = {};
            for (var i = 0; i < fns.length; i++) {
                res[fns[i][0]] = fns[i][1];
            }
            return res;
        }
        var activeInstance = null;
        function initLifecycle(vm) {
            var options = vm.$options;
            var parent = options.parent;
            if (parent && !options.abstract) {
                while (parent.$options.abstract && parent.$parent) {
                    parent = parent.$parent;
                }
                parent.$children.push(vm);
            }
            vm.$parent = parent;
            vm.$root = parent ? parent.$root : vm;
            vm.$children = [];
            vm.$refs = {};
            vm._watcher = null;
            vm._inactive = null;
            vm._directInactive = false;
            vm._isMounted = false;
            vm._isDestroyed = false;
            vm._isBeingDestroyed = false;
        }
        function lifecycleMixin(Vue) {
            Vue.prototype._update = function(vnode, hydrating) {
                var vm = this;
                if (vm._isMounted) {
                    callHook(vm, "beforeUpdate");
                }
                var prevEl = vm.$el;
                var prevVnode = vm._vnode;
                var prevActiveInstance = activeInstance;
                activeInstance = vm;
                vm._vnode = vnode;
                if (!prevVnode) {
                    vm.$el = vm.__patch__(vm.$el, vnode, hydrating, false, vm.$options._parentElm, vm.$options._refElm);
                } else {
                    vm.$el = vm.__patch__(prevVnode, vnode);
                }
                activeInstance = prevActiveInstance;
                if (prevEl) {
                    prevEl.__vue__ = null;
                }
                if (vm.$el) {
                    vm.$el.__vue__ = vm;
                }
                if (vm.$vnode && vm.$parent && vm.$vnode === vm.$parent._vnode) {
                    vm.$parent.$el = vm.$el;
                }
            };
            Vue.prototype.$forceUpdate = function() {
                var vm = this;
                if (vm._watcher) {
                    vm._watcher.update();
                }
            };
            Vue.prototype.$destroy = function() {
                var vm = this;
                if (vm._isBeingDestroyed) {
                    return;
                }
                callHook(vm, "beforeDestroy");
                vm._isBeingDestroyed = true;
                var parent = vm.$parent;
                if (parent && !parent._isBeingDestroyed && !vm.$options.abstract) {
                    remove(parent.$children, vm);
                }
                if (vm._watcher) {
                    vm._watcher.teardown();
                }
                var i = vm._watchers.length;
                while (i--) {
                    vm._watchers[i].teardown();
                }
                if (vm._data.__ob__) {
                    vm._data.__ob__.vmCount--;
                }
                vm._isDestroyed = true;
                callHook(vm, "destroyed");
                vm.$off();
                if (vm.$el) {
                    vm.$el.__vue__ = null;
                }
                vm.__patch__(vm._vnode, null);
            };
        }
        function mountComponent(vm, el, hydrating) {
            vm.$el = el;
            if (!vm.$options.render) {
                vm.$options.render = createEmptyVNode;
                if (false) {
                    if (vm.$options.template && vm.$options.template.charAt(0) !== "#" || vm.$options.el || el) {
                        warn("You are using the runtime-only build of Vue where the template " + "compiler is not available. Either pre-compile the templates into " + "render functions, or use the compiler-included build.", vm);
                    } else {
                        warn("Failed to mount component: template or render function not defined.", vm);
                    }
                }
            }
            callHook(vm, "beforeMount");
            var updateComponent;
            if (false) {
                updateComponent = function() {
                    var name = vm._name;
                    var id = vm._uid;
                    var startTag = "vue-perf-start:" + id;
                    var endTag = "vue-perf-end:" + id;
                    mark(startTag);
                    var vnode = vm._render();
                    mark(endTag);
                    measure(name + " render", startTag, endTag);
                    mark(startTag);
                    vm._update(vnode, hydrating);
                    mark(endTag);
                    measure(name + " patch", startTag, endTag);
                };
            } else {
                updateComponent = function() {
                    vm._update(vm._render(), hydrating);
                };
            }
            vm._watcher = new Watcher(vm, updateComponent, noop);
            hydrating = false;
            if (vm.$vnode == null) {
                vm._isMounted = true;
                callHook(vm, "mounted");
            }
            return vm;
        }
        function updateChildComponent(vm, propsData, listeners, parentVnode, renderChildren) {
            var hasChildren = !!(renderChildren || vm.$options._renderChildren || parentVnode.data.scopedSlots || vm.$scopedSlots !== emptyObject);
            vm.$options._parentVnode = parentVnode;
            vm.$vnode = parentVnode;
            if (vm._vnode) {
                vm._vnode.parent = parentVnode;
            }
            vm.$options._renderChildren = renderChildren;
            if (propsData && vm.$options.props) {
                observerState.shouldConvert = false;
                if (false) {
                    observerState.isSettingProps = true;
                }
                var props = vm._props;
                var propKeys = vm.$options._propKeys || [];
                for (var i = 0; i < propKeys.length; i++) {
                    var key = propKeys[i];
                    props[key] = validateProp(key, vm.$options.props, propsData, vm);
                }
                observerState.shouldConvert = true;
                if (false) {
                    observerState.isSettingProps = false;
                }
                vm.$options.propsData = propsData;
            }
            if (listeners) {
                var oldListeners = vm.$options._parentListeners;
                vm.$options._parentListeners = listeners;
                updateComponentListeners(vm, listeners, oldListeners);
            }
            if (hasChildren) {
                vm.$slots = resolveSlots(renderChildren, parentVnode.context);
                vm.$forceUpdate();
            }
        }
        function isInInactiveTree(vm) {
            while (vm && (vm = vm.$parent)) {
                if (vm._inactive) {
                    return true;
                }
            }
            return false;
        }
        function activateChildComponent(vm, direct) {
            if (direct) {
                vm._directInactive = false;
                if (isInInactiveTree(vm)) {
                    return;
                }
            } else if (vm._directInactive) {
                return;
            }
            if (vm._inactive || vm._inactive == null) {
                vm._inactive = false;
                for (var i = 0; i < vm.$children.length; i++) {
                    activateChildComponent(vm.$children[i]);
                }
                callHook(vm, "activated");
            }
        }
        function deactivateChildComponent(vm, direct) {
            if (direct) {
                vm._directInactive = true;
                if (isInInactiveTree(vm)) {
                    return;
                }
            }
            if (!vm._inactive) {
                vm._inactive = true;
                for (var i = 0; i < vm.$children.length; i++) {
                    deactivateChildComponent(vm.$children[i]);
                }
                callHook(vm, "deactivated");
            }
        }
        function callHook(vm, hook) {
            var handlers = vm.$options[hook];
            if (handlers) {
                for (var i = 0, j = handlers.length; i < j; i++) {
                    try {
                        handlers[i].call(vm);
                    } catch (e) {
                        handleError(e, vm, hook + " hook");
                    }
                }
            }
            if (vm._hasHookEvent) {
                vm.$emit("hook:" + hook);
            }
        }
        var queue = [];
        var has = {};
        var circular = {};
        var waiting = false;
        var flushing = false;
        var index = 0;
        function resetSchedulerState() {
            queue.length = 0;
            has = {};
            if (false) {
                circular = {};
            }
            waiting = flushing = false;
        }
        function flushSchedulerQueue() {
            flushing = true;
            var watcher, id, vm;
            queue.sort(function(a, b) {
                return a.id - b.id;
            });
            for (index = 0; index < queue.length; index++) {
                watcher = queue[index];
                id = watcher.id;
                has[id] = null;
                watcher.run();
                if (false) {
                    circular[id] = (circular[id] || 0) + 1;
                    if (circular[id] > config._maxUpdateCount) {
                        warn("You may have an infinite update loop " + (watcher.user ? 'in watcher with expression "' + watcher.expression + '"' : "in a component render function."), watcher.vm);
                        break;
                    }
                }
            }
            var oldQueue = queue.slice();
            resetSchedulerState();
            index = oldQueue.length;
            while (index--) {
                watcher = oldQueue[index];
                vm = watcher.vm;
                if (vm._watcher === watcher && vm._isMounted) {
                    callHook(vm, "updated");
                }
            }
            if (devtools && config.devtools) {
                devtools.emit("flush");
            }
        }
        function queueWatcher(watcher) {
            var id = watcher.id;
            if (has[id] == null) {
                has[id] = true;
                if (!flushing) {
                    queue.push(watcher);
                } else {
                    var i = queue.length - 1;
                    while (i >= 0 && queue[i].id > watcher.id) {
                        i--;
                    }
                    queue.splice(Math.max(i, index) + 1, 0, watcher);
                }
                if (!waiting) {
                    waiting = true;
                    nextTick(flushSchedulerQueue);
                }
            }
        }
        var uid$2 = 0;
        var Watcher = function Watcher(vm, expOrFn, cb, options) {
            this.vm = vm;
            vm._watchers.push(this);
            if (options) {
                this.deep = !!options.deep;
                this.user = !!options.user;
                this.lazy = !!options.lazy;
                this.sync = !!options.sync;
            } else {
                this.deep = this.user = this.lazy = this.sync = false;
            }
            this.cb = cb;
            this.id = ++uid$2;
            this.active = true;
            this.dirty = this.lazy;
            this.deps = [];
            this.newDeps = [];
            this.depIds = new _Set();
            this.newDepIds = new _Set();
            this.expression = false ? expOrFn.toString() : "";
            if (typeof expOrFn === "function") {
                this.getter = expOrFn;
            } else {
                this.getter = parsePath(expOrFn);
                if (!this.getter) {
                    this.getter = function() {};
                    "production" !== "production" && warn('Failed watching path: "' + expOrFn + '" ' + "Watcher only accepts simple dot-delimited paths. " + "For full control, use a function instead.", vm);
                }
            }
            this.value = this.lazy ? undefined : this.get();
        };
        Watcher.prototype.get = function get() {
            pushTarget(this);
            var value;
            var vm = this.vm;
            if (this.user) {
                try {
                    value = this.getter.call(vm, vm);
                } catch (e) {
                    handleError(e, vm, 'getter for watcher "' + this.expression + '"');
                }
            } else {
                value = this.getter.call(vm, vm);
            }
            if (this.deep) {
                traverse(value);
            }
            popTarget();
            this.cleanupDeps();
            return value;
        };
        Watcher.prototype.addDep = function addDep(dep) {
            var id = dep.id;
            if (!this.newDepIds.has(id)) {
                this.newDepIds.add(id);
                this.newDeps.push(dep);
                if (!this.depIds.has(id)) {
                    dep.addSub(this);
                }
            }
        };
        Watcher.prototype.cleanupDeps = function cleanupDeps() {
            var this$1 = this;
            var i = this.deps.length;
            while (i--) {
                var dep = this$1.deps[i];
                if (!this$1.newDepIds.has(dep.id)) {
                    dep.removeSub(this$1);
                }
            }
            var tmp = this.depIds;
            this.depIds = this.newDepIds;
            this.newDepIds = tmp;
            this.newDepIds.clear();
            tmp = this.deps;
            this.deps = this.newDeps;
            this.newDeps = tmp;
            this.newDeps.length = 0;
        };
        Watcher.prototype.update = function update() {
            if (this.lazy) {
                this.dirty = true;
            } else if (this.sync) {
                this.run();
            } else {
                queueWatcher(this);
            }
        };
        Watcher.prototype.run = function run() {
            if (this.active) {
                var value = this.get();
                if (value !== this.value || isObject(value) || this.deep) {
                    var oldValue = this.value;
                    this.value = value;
                    if (this.user) {
                        try {
                            this.cb.call(this.vm, value, oldValue);
                        } catch (e) {
                            handleError(e, this.vm, 'callback for watcher "' + this.expression + '"');
                        }
                    } else {
                        this.cb.call(this.vm, value, oldValue);
                    }
                }
            }
        };
        Watcher.prototype.evaluate = function evaluate() {
            this.value = this.get();
            this.dirty = false;
        };
        Watcher.prototype.depend = function depend() {
            var this$1 = this;
            var i = this.deps.length;
            while (i--) {
                this$1.deps[i].depend();
            }
        };
        Watcher.prototype.teardown = function teardown() {
            var this$1 = this;
            if (this.active) {
                if (!this.vm._isBeingDestroyed) {
                    remove(this.vm._watchers, this);
                }
                var i = this.deps.length;
                while (i--) {
                    this$1.deps[i].removeSub(this$1);
                }
                this.active = false;
            }
        };
        var seenObjects = new _Set();
        function traverse(val) {
            seenObjects.clear();
            _traverse(val, seenObjects);
        }
        function _traverse(val, seen) {
            var i, keys;
            var isA = Array.isArray(val);
            if (!isA && !isObject(val) || !Object.isExtensible(val)) {
                return;
            }
            if (val.__ob__) {
                var depId = val.__ob__.dep.id;
                if (seen.has(depId)) {
                    return;
                }
                seen.add(depId);
            }
            if (isA) {
                i = val.length;
                while (i--) {
                    _traverse(val[i], seen);
                }
            } else {
                keys = Object.keys(val);
                i = keys.length;
                while (i--) {
                    _traverse(val[keys[i]], seen);
                }
            }
        }
        var sharedPropertyDefinition = {
            enumerable: true,
            configurable: true,
            get: noop,
            set: noop
        };
        function proxy(target, sourceKey, key) {
            sharedPropertyDefinition.get = function proxyGetter() {
                return this[sourceKey][key];
            };
            sharedPropertyDefinition.set = function proxySetter(val) {
                this[sourceKey][key] = val;
            };
            Object.defineProperty(target, key, sharedPropertyDefinition);
        }
        function initState(vm) {
            vm._watchers = [];
            var opts = vm.$options;
            if (opts.props) {
                initProps(vm, opts.props);
            }
            if (opts.methods) {
                initMethods(vm, opts.methods);
            }
            if (opts.data) {
                initData(vm);
            } else {
                observe(vm._data = {}, true);
            }
            if (opts.computed) {
                initComputed(vm, opts.computed);
            }
            if (opts.watch) {
                initWatch(vm, opts.watch);
            }
        }
        var isReservedProp = {
            key: 1,
            ref: 1,
            slot: 1
        };
        function initProps(vm, propsOptions) {
            var propsData = vm.$options.propsData || {};
            var props = vm._props = {};
            var keys = vm.$options._propKeys = [];
            var isRoot = !vm.$parent;
            observerState.shouldConvert = isRoot;
            var loop = function(key) {
                keys.push(key);
                var value = validateProp(key, propsOptions, propsData, vm);
                if (false) {
                    if (isReservedProp[key]) {
                        warn('"' + key + '" is a reserved attribute and cannot be used as component prop.', vm);
                    }
                    defineReactive$$1(props, key, value, function() {
                        if (vm.$parent && !observerState.isSettingProps) {
                            warn("Avoid mutating a prop directly since the value will be " + "overwritten whenever the parent component re-renders. " + "Instead, use a data or computed property based on the prop's " + 'value. Prop being mutated: "' + key + '"', vm);
                        }
                    });
                } else {
                    defineReactive$$1(props, key, value);
                }
                if (!(key in vm)) {
                    proxy(vm, "_props", key);
                }
            };
            for (var key in propsOptions) loop(key);
            observerState.shouldConvert = true;
        }
        function initData(vm) {
            var data = vm.$options.data;
            data = vm._data = typeof data === "function" ? getData(data, vm) : data || {};
            if (!isPlainObject(data)) {
                data = {};
                "production" !== "production" && warn("data functions should return an object:\n" + "https://vuejs.org/v2/guide/components.html#data-Must-Be-a-Function", vm);
            }
            var keys = Object.keys(data);
            var props = vm.$options.props;
            var i = keys.length;
            while (i--) {
                if (props && hasOwn(props, keys[i])) {
                    "production" !== "production" && warn('The data property "' + keys[i] + '" is already declared as a prop. ' + "Use prop default value instead.", vm);
                } else if (!isReserved(keys[i])) {
                    proxy(vm, "_data", keys[i]);
                }
            }
            observe(data, true);
        }
        function getData(data, vm) {
            try {
                return data.call(vm);
            } catch (e) {
                handleError(e, vm, "data()");
                return {};
            }
        }
        var computedWatcherOptions = {
            lazy: true
        };
        function initComputed(vm, computed) {
            var watchers = vm._computedWatchers = Object.create(null);
            for (var key in computed) {
                var userDef = computed[key];
                var getter = typeof userDef === "function" ? userDef : userDef.get;
                watchers[key] = new Watcher(vm, getter, noop, computedWatcherOptions);
                if (!(key in vm)) {
                    defineComputed(vm, key, userDef);
                }
            }
        }
        function defineComputed(target, key, userDef) {
            if (typeof userDef === "function") {
                sharedPropertyDefinition.get = createComputedGetter(key);
                sharedPropertyDefinition.set = noop;
            } else {
                sharedPropertyDefinition.get = userDef.get ? userDef.cache !== false ? createComputedGetter(key) : userDef.get : noop;
                sharedPropertyDefinition.set = userDef.set ? userDef.set : noop;
            }
            Object.defineProperty(target, key, sharedPropertyDefinition);
        }
        function createComputedGetter(key) {
            return function computedGetter() {
                var watcher = this._computedWatchers && this._computedWatchers[key];
                if (watcher) {
                    if (watcher.dirty) {
                        watcher.evaluate();
                    }
                    if (Dep.target) {
                        watcher.depend();
                    }
                    return watcher.value;
                }
            };
        }
        function initMethods(vm, methods) {
            var props = vm.$options.props;
            for (var key in methods) {
                vm[key] = methods[key] == null ? noop : bind(methods[key], vm);
                if (false) {
                    if (methods[key] == null) {
                        warn('method "' + key + '" has an undefined value in the component definition. ' + "Did you reference the function correctly?", vm);
                    }
                    if (props && hasOwn(props, key)) {
                        warn('method "' + key + '" has already been defined as a prop.', vm);
                    }
                }
            }
        }
        function initWatch(vm, watch) {
            for (var key in watch) {
                var handler = watch[key];
                if (Array.isArray(handler)) {
                    for (var i = 0; i < handler.length; i++) {
                        createWatcher(vm, key, handler[i]);
                    }
                } else {
                    createWatcher(vm, key, handler);
                }
            }
        }
        function createWatcher(vm, key, handler) {
            var options;
            if (isPlainObject(handler)) {
                options = handler;
                handler = handler.handler;
            }
            if (typeof handler === "string") {
                handler = vm[handler];
            }
            vm.$watch(key, handler, options);
        }
        function stateMixin(Vue) {
            var dataDef = {};
            dataDef.get = function() {
                return this._data;
            };
            var propsDef = {};
            propsDef.get = function() {
                return this._props;
            };
            if (false) {
                dataDef.set = function(newData) {
                    warn("Avoid replacing instance root $data. " + "Use nested data properties instead.", this);
                };
                propsDef.set = function() {
                    warn("$props is readonly.", this);
                };
            }
            Object.defineProperty(Vue.prototype, "$data", dataDef);
            Object.defineProperty(Vue.prototype, "$props", propsDef);
            Vue.prototype.$set = set;
            Vue.prototype.$delete = del;
            Vue.prototype.$watch = function(expOrFn, cb, options) {
                var vm = this;
                options = options || {};
                options.user = true;
                var watcher = new Watcher(vm, expOrFn, cb, options);
                if (options.immediate) {
                    cb.call(vm, watcher.value);
                }
                return function unwatchFn() {
                    watcher.teardown();
                };
            };
        }
        var componentVNodeHooks = {
            init: function init(vnode, hydrating, parentElm, refElm) {
                if (!vnode.componentInstance || vnode.componentInstance._isDestroyed) {
                    var child = vnode.componentInstance = createComponentInstanceForVnode(vnode, activeInstance, parentElm, refElm);
                    child.$mount(hydrating ? vnode.elm : undefined, hydrating);
                } else if (vnode.data.keepAlive) {
                    var mountedNode = vnode;
                    componentVNodeHooks.prepatch(mountedNode, mountedNode);
                }
            },
            prepatch: function prepatch(oldVnode, vnode) {
                var options = vnode.componentOptions;
                var child = vnode.componentInstance = oldVnode.componentInstance;
                updateChildComponent(child, options.propsData, options.listeners, vnode, options.children);
            },
            insert: function insert(vnode) {
                if (!vnode.componentInstance._isMounted) {
                    vnode.componentInstance._isMounted = true;
                    callHook(vnode.componentInstance, "mounted");
                }
                if (vnode.data.keepAlive) {
                    activateChildComponent(vnode.componentInstance, true);
                }
            },
            destroy: function destroy(vnode) {
                if (!vnode.componentInstance._isDestroyed) {
                    if (!vnode.data.keepAlive) {
                        vnode.componentInstance.$destroy();
                    } else {
                        deactivateChildComponent(vnode.componentInstance, true);
                    }
                }
            }
        };
        var hooksToMerge = Object.keys(componentVNodeHooks);
        function createComponent(Ctor, data, context, children, tag) {
            if (!Ctor) {
                return;
            }
            var baseCtor = context.$options._base;
            if (isObject(Ctor)) {
                Ctor = baseCtor.extend(Ctor);
            }
            if (typeof Ctor !== "function") {
                if (false) {
                    warn("Invalid Component definition: " + String(Ctor), context);
                }
                return;
            }
            if (!Ctor.cid) {
                if (Ctor.resolved) {
                    Ctor = Ctor.resolved;
                } else {
                    Ctor = resolveAsyncComponent(Ctor, baseCtor, function() {
                        context.$forceUpdate();
                    });
                    if (!Ctor) {
                        return;
                    }
                }
            }
            resolveConstructorOptions(Ctor);
            data = data || {};
            if (data.model) {
                transformModel(Ctor.options, data);
            }
            var propsData = extractProps(data, Ctor, tag);
            if (Ctor.options.functional) {
                return createFunctionalComponent(Ctor, propsData, data, context, children);
            }
            var listeners = data.on;
            data.on = data.nativeOn;
            if (Ctor.options.abstract) {
                data = {};
            }
            mergeHooks(data);
            var name = Ctor.options.name || tag;
            var vnode = new VNode("vue-component-" + Ctor.cid + (name ? "-" + name : ""), data, undefined, undefined, undefined, context, {
                Ctor: Ctor,
                propsData: propsData,
                listeners: listeners,
                tag: tag,
                children: children
            });
            return vnode;
        }
        function createFunctionalComponent(Ctor, propsData, data, context, children) {
            var props = {};
            var propOptions = Ctor.options.props;
            if (propOptions) {
                for (var key in propOptions) {
                    props[key] = validateProp(key, propOptions, propsData);
                }
            }
            var _context = Object.create(context);
            var h = function(a, b, c, d) {
                return createElement(_context, a, b, c, d, true);
            };
            var vnode = Ctor.options.render.call(null, h, {
                props: props,
                data: data,
                parent: context,
                children: children,
                slots: function() {
                    return resolveSlots(children, context);
                }
            });
            if (vnode instanceof VNode) {
                vnode.functionalContext = context;
                if (data.slot) {
                    (vnode.data || (vnode.data = {})).slot = data.slot;
                }
            }
            return vnode;
        }
        function createComponentInstanceForVnode(vnode, parent, parentElm, refElm) {
            var vnodeComponentOptions = vnode.componentOptions;
            var options = {
                _isComponent: true,
                parent: parent,
                propsData: vnodeComponentOptions.propsData,
                _componentTag: vnodeComponentOptions.tag,
                _parentVnode: vnode,
                _parentListeners: vnodeComponentOptions.listeners,
                _renderChildren: vnodeComponentOptions.children,
                _parentElm: parentElm || null,
                _refElm: refElm || null
            };
            var inlineTemplate = vnode.data.inlineTemplate;
            if (inlineTemplate) {
                options.render = inlineTemplate.render;
                options.staticRenderFns = inlineTemplate.staticRenderFns;
            }
            return new vnodeComponentOptions.Ctor(options);
        }
        function resolveAsyncComponent(factory, baseCtor, cb) {
            if (factory.requested) {
                factory.pendingCallbacks.push(cb);
            } else {
                factory.requested = true;
                var cbs = factory.pendingCallbacks = [ cb ];
                var sync = true;
                var resolve = function(res) {
                    if (isObject(res)) {
                        res = baseCtor.extend(res);
                    }
                    factory.resolved = res;
                    if (!sync) {
                        for (var i = 0, l = cbs.length; i < l; i++) {
                            cbs[i](res);
                        }
                    }
                };
                var reject = function(reason) {
                    "production" !== "production" && warn("Failed to resolve async component: " + String(factory) + (reason ? "\nReason: " + reason : ""));
                };
                var res = factory(resolve, reject);
                if (res && typeof res.then === "function" && !factory.resolved) {
                    res.then(resolve, reject);
                }
                sync = false;
                return factory.resolved;
            }
        }
        function extractProps(data, Ctor, tag) {
            var propOptions = Ctor.options.props;
            if (!propOptions) {
                return;
            }
            var res = {};
            var attrs = data.attrs;
            var props = data.props;
            var domProps = data.domProps;
            if (attrs || props || domProps) {
                for (var key in propOptions) {
                    var altKey = hyphenate(key);
                    if (false) {
                        var keyInLowerCase = key.toLowerCase();
                        if (key !== keyInLowerCase && attrs && attrs.hasOwnProperty(keyInLowerCase)) {
                            tip('Prop "' + keyInLowerCase + '" is passed to component ' + formatComponentName(tag || Ctor) + ", but the delared prop name is" + ' "' + key + '". ' + "Note that HTML attributes are case-insensitive and camelCased " + "props need to use their kebab-case equivalents when using in-DOM " + 'templates. You should probably use "' + altKey + '" instead of "' + key + '".');
                        }
                    }
                    checkProp(res, props, key, altKey, true) || checkProp(res, attrs, key, altKey) || checkProp(res, domProps, key, altKey);
                }
            }
            return res;
        }
        function checkProp(res, hash, key, altKey, preserve) {
            if (hash) {
                if (hasOwn(hash, key)) {
                    res[key] = hash[key];
                    if (!preserve) {
                        delete hash[key];
                    }
                    return true;
                } else if (hasOwn(hash, altKey)) {
                    res[key] = hash[altKey];
                    if (!preserve) {
                        delete hash[altKey];
                    }
                    return true;
                }
            }
            return false;
        }
        function mergeHooks(data) {
            if (!data.hook) {
                data.hook = {};
            }
            for (var i = 0; i < hooksToMerge.length; i++) {
                var key = hooksToMerge[i];
                var fromParent = data.hook[key];
                var ours = componentVNodeHooks[key];
                data.hook[key] = fromParent ? mergeHook$1(ours, fromParent) : ours;
            }
        }
        function mergeHook$1(one, two) {
            return function(a, b, c, d) {
                one(a, b, c, d);
                two(a, b, c, d);
            };
        }
        function transformModel(options, data) {
            var prop = options.model && options.model.prop || "value";
            var event = options.model && options.model.event || "input";
            (data.props || (data.props = {}))[prop] = data.model.value;
            var on = data.on || (data.on = {});
            if (on[event]) {
                on[event] = [ data.model.callback ].concat(on[event]);
            } else {
                on[event] = data.model.callback;
            }
        }
        var SIMPLE_NORMALIZE = 1;
        var ALWAYS_NORMALIZE = 2;
        function createElement(context, tag, data, children, normalizationType, alwaysNormalize) {
            if (Array.isArray(data) || isPrimitive(data)) {
                normalizationType = children;
                children = data;
                data = undefined;
            }
            if (alwaysNormalize) {
                normalizationType = ALWAYS_NORMALIZE;
            }
            return _createElement(context, tag, data, children, normalizationType);
        }
        function _createElement(context, tag, data, children, normalizationType) {
            if (data && data.__ob__) {
                "production" !== "production" && warn("Avoid using observed data object as vnode data: " + JSON.stringify(data) + "\n" + "Always create fresh vnode data objects in each render!", context);
                return createEmptyVNode();
            }
            if (!tag) {
                return createEmptyVNode();
            }
            if (Array.isArray(children) && typeof children[0] === "function") {
                data = data || {};
                data.scopedSlots = {
                    default: children[0]
                };
                children.length = 0;
            }
            if (normalizationType === ALWAYS_NORMALIZE) {
                children = normalizeChildren(children);
            } else if (normalizationType === SIMPLE_NORMALIZE) {
                children = simpleNormalizeChildren(children);
            }
            var vnode, ns;
            if (typeof tag === "string") {
                var Ctor;
                ns = config.getTagNamespace(tag);
                if (config.isReservedTag(tag)) {
                    vnode = new VNode(config.parsePlatformTagName(tag), data, children, undefined, undefined, context);
                } else if (Ctor = resolveAsset(context.$options, "components", tag)) {
                    vnode = createComponent(Ctor, data, context, children, tag);
                } else {
                    vnode = new VNode(tag, data, children, undefined, undefined, context);
                }
            } else {
                vnode = createComponent(tag, data, context, children);
            }
            if (vnode) {
                if (ns) {
                    applyNS(vnode, ns);
                }
                return vnode;
            } else {
                return createEmptyVNode();
            }
        }
        function applyNS(vnode, ns) {
            vnode.ns = ns;
            if (vnode.tag === "foreignObject") {
                return;
            }
            if (vnode.children) {
                for (var i = 0, l = vnode.children.length; i < l; i++) {
                    var child = vnode.children[i];
                    if (child.tag && !child.ns) {
                        applyNS(child, ns);
                    }
                }
            }
        }
        function renderList(val, render) {
            var ret, i, l, keys, key;
            if (Array.isArray(val) || typeof val === "string") {
                ret = new Array(val.length);
                for (i = 0, l = val.length; i < l; i++) {
                    ret[i] = render(val[i], i);
                }
            } else if (typeof val === "number") {
                ret = new Array(val);
                for (i = 0; i < val; i++) {
                    ret[i] = render(i + 1, i);
                }
            } else if (isObject(val)) {
                keys = Object.keys(val);
                ret = new Array(keys.length);
                for (i = 0, l = keys.length; i < l; i++) {
                    key = keys[i];
                    ret[i] = render(val[key], key, i);
                }
            }
            return ret;
        }
        function renderSlot(name, fallback, props, bindObject) {
            var scopedSlotFn = this.$scopedSlots[name];
            if (scopedSlotFn) {
                props = props || {};
                if (bindObject) {
                    extend(props, bindObject);
                }
                return scopedSlotFn(props) || fallback;
            } else {
                var slotNodes = this.$slots[name];
                if (slotNodes && "production" !== "production") {
                    slotNodes._rendered && warn('Duplicate presence of slot "' + name + '" found in the same render tree ' + "- this will likely cause render errors.", this);
                    slotNodes._rendered = true;
                }
                return slotNodes || fallback;
            }
        }
        function resolveFilter(id) {
            return resolveAsset(this.$options, "filters", id, true) || identity;
        }
        function checkKeyCodes(eventKeyCode, key, builtInAlias) {
            var keyCodes = config.keyCodes[key] || builtInAlias;
            if (Array.isArray(keyCodes)) {
                return keyCodes.indexOf(eventKeyCode) === -1;
            } else {
                return keyCodes !== eventKeyCode;
            }
        }
        function bindObjectProps(data, tag, value, asProp) {
            if (value) {
                if (!isObject(value)) {
                    "production" !== "production" && warn("v-bind without argument expects an Object or Array value", this);
                } else {
                    if (Array.isArray(value)) {
                        value = toObject(value);
                    }
                    var hash;
                    for (var key in value) {
                        if (key === "class" || key === "style") {
                            hash = data;
                        } else {
                            var type = data.attrs && data.attrs.type;
                            hash = asProp || config.mustUseProp(tag, type, key) ? data.domProps || (data.domProps = {}) : data.attrs || (data.attrs = {});
                        }
                        if (!(key in hash)) {
                            hash[key] = value[key];
                        }
                    }
                }
            }
            return data;
        }
        function renderStatic(index, isInFor) {
            var tree = this._staticTrees[index];
            if (tree && !isInFor) {
                return Array.isArray(tree) ? cloneVNodes(tree) : cloneVNode(tree);
            }
            tree = this._staticTrees[index] = this.$options.staticRenderFns[index].call(this._renderProxy);
            markStatic(tree, "__static__" + index, false);
            return tree;
        }
        function markOnce(tree, index, key) {
            markStatic(tree, "__once__" + index + (key ? "_" + key : ""), true);
            return tree;
        }
        function markStatic(tree, key, isOnce) {
            if (Array.isArray(tree)) {
                for (var i = 0; i < tree.length; i++) {
                    if (tree[i] && typeof tree[i] !== "string") {
                        markStaticNode(tree[i], key + "_" + i, isOnce);
                    }
                }
            } else {
                markStaticNode(tree, key, isOnce);
            }
        }
        function markStaticNode(node, key, isOnce) {
            node.isStatic = true;
            node.key = key;
            node.isOnce = isOnce;
        }
        function initRender(vm) {
            vm.$vnode = null;
            vm._vnode = null;
            vm._staticTrees = null;
            var parentVnode = vm.$options._parentVnode;
            var renderContext = parentVnode && parentVnode.context;
            vm.$slots = resolveSlots(vm.$options._renderChildren, renderContext);
            vm.$scopedSlots = emptyObject;
            vm._c = function(a, b, c, d) {
                return createElement(vm, a, b, c, d, false);
            };
            vm.$createElement = function(a, b, c, d) {
                return createElement(vm, a, b, c, d, true);
            };
        }
        function renderMixin(Vue) {
            Vue.prototype.$nextTick = function(fn) {
                return nextTick(fn, this);
            };
            Vue.prototype._render = function() {
                var vm = this;
                var ref = vm.$options;
                var render = ref.render;
                var staticRenderFns = ref.staticRenderFns;
                var _parentVnode = ref._parentVnode;
                if (vm._isMounted) {
                    for (var key in vm.$slots) {
                        vm.$slots[key] = cloneVNodes(vm.$slots[key]);
                    }
                }
                vm.$scopedSlots = _parentVnode && _parentVnode.data.scopedSlots || emptyObject;
                if (staticRenderFns && !vm._staticTrees) {
                    vm._staticTrees = [];
                }
                vm.$vnode = _parentVnode;
                var vnode;
                try {
                    vnode = render.call(vm._renderProxy, vm.$createElement);
                } catch (e) {
                    handleError(e, vm, "render function");
                    if (false) {
                        vnode = vm.$options.renderError ? vm.$options.renderError.call(vm._renderProxy, vm.$createElement, e) : vm._vnode;
                    } else {
                        vnode = vm._vnode;
                    }
                }
                if (!(vnode instanceof VNode)) {
                    if (false) {
                        warn("Multiple root nodes returned from render function. Render function " + "should return a single root node.", vm);
                    }
                    vnode = createEmptyVNode();
                }
                vnode.parent = _parentVnode;
                return vnode;
            };
            Vue.prototype._o = markOnce;
            Vue.prototype._n = toNumber;
            Vue.prototype._s = _toString;
            Vue.prototype._l = renderList;
            Vue.prototype._t = renderSlot;
            Vue.prototype._q = looseEqual;
            Vue.prototype._i = looseIndexOf;
            Vue.prototype._m = renderStatic;
            Vue.prototype._f = resolveFilter;
            Vue.prototype._k = checkKeyCodes;
            Vue.prototype._b = bindObjectProps;
            Vue.prototype._v = createTextVNode;
            Vue.prototype._e = createEmptyVNode;
            Vue.prototype._u = resolveScopedSlots;
        }
        function initProvide(vm) {
            var provide = vm.$options.provide;
            if (provide) {
                vm._provided = typeof provide === "function" ? provide.call(vm) : provide;
            }
        }
        function initInjections(vm) {
            var inject = vm.$options.inject;
            if (inject) {
                var isArray = Array.isArray(inject);
                var keys = isArray ? inject : hasSymbol ? Reflect.ownKeys(inject) : Object.keys(inject);
                var loop = function(i) {
                    var key = keys[i];
                    var provideKey = isArray ? key : inject[key];
                    var source = vm;
                    while (source) {
                        if (source._provided && provideKey in source._provided) {
                            if (false) {
                                defineReactive$$1(vm, key, source._provided[provideKey], function() {
                                    warn("Avoid mutating an injected value directly since the changes will be " + "overwritten whenever the provided component re-renders. " + 'injection being mutated: "' + key + '"', vm);
                                });
                            } else {
                                defineReactive$$1(vm, key, source._provided[provideKey]);
                            }
                            break;
                        }
                        source = source.$parent;
                    }
                };
                for (var i = 0; i < keys.length; i++) loop(i);
            }
        }
        var uid = 0;
        function initMixin(Vue) {
            Vue.prototype._init = function(options) {
                var vm = this;
                vm._uid = uid++;
                var startTag, endTag;
                if (false) {
                    startTag = "vue-perf-init:" + vm._uid;
                    endTag = "vue-perf-end:" + vm._uid;
                    mark(startTag);
                }
                vm._isVue = true;
                if (options && options._isComponent) {
                    initInternalComponent(vm, options);
                } else {
                    vm.$options = mergeOptions(resolveConstructorOptions(vm.constructor), options || {}, vm);
                }
                if (false) {
                    initProxy(vm);
                } else {
                    vm._renderProxy = vm;
                }
                vm._self = vm;
                initLifecycle(vm);
                initEvents(vm);
                initRender(vm);
                callHook(vm, "beforeCreate");
                initInjections(vm);
                initState(vm);
                initProvide(vm);
                callHook(vm, "created");
                if (false) {
                    vm._name = formatComponentName(vm, false);
                    mark(endTag);
                    measure(vm._name + " init", startTag, endTag);
                }
                if (vm.$options.el) {
                    vm.$mount(vm.$options.el);
                }
            };
        }
        function initInternalComponent(vm, options) {
            var opts = vm.$options = Object.create(vm.constructor.options);
            opts.parent = options.parent;
            opts.propsData = options.propsData;
            opts._parentVnode = options._parentVnode;
            opts._parentListeners = options._parentListeners;
            opts._renderChildren = options._renderChildren;
            opts._componentTag = options._componentTag;
            opts._parentElm = options._parentElm;
            opts._refElm = options._refElm;
            if (options.render) {
                opts.render = options.render;
                opts.staticRenderFns = options.staticRenderFns;
            }
        }
        function resolveConstructorOptions(Ctor) {
            var options = Ctor.options;
            if (Ctor.super) {
                var superOptions = resolveConstructorOptions(Ctor.super);
                var cachedSuperOptions = Ctor.superOptions;
                if (superOptions !== cachedSuperOptions) {
                    Ctor.superOptions = superOptions;
                    var modifiedOptions = resolveModifiedOptions(Ctor);
                    if (modifiedOptions) {
                        extend(Ctor.extendOptions, modifiedOptions);
                    }
                    options = Ctor.options = mergeOptions(superOptions, Ctor.extendOptions);
                    if (options.name) {
                        options.components[options.name] = Ctor;
                    }
                }
            }
            return options;
        }
        function resolveModifiedOptions(Ctor) {
            var modified;
            var latest = Ctor.options;
            var sealed = Ctor.sealedOptions;
            for (var key in latest) {
                if (latest[key] !== sealed[key]) {
                    if (!modified) {
                        modified = {};
                    }
                    modified[key] = dedupe(latest[key], sealed[key]);
                }
            }
            return modified;
        }
        function dedupe(latest, sealed) {
            if (Array.isArray(latest)) {
                var res = [];
                sealed = Array.isArray(sealed) ? sealed : [ sealed ];
                for (var i = 0; i < latest.length; i++) {
                    if (sealed.indexOf(latest[i]) < 0) {
                        res.push(latest[i]);
                    }
                }
                return res;
            } else {
                return latest;
            }
        }
        function Vue$3(options) {
            if (false) {
                warn("Vue is a constructor and should be called with the `new` keyword");
            }
            this._init(options);
        }
        initMixin(Vue$3);
        stateMixin(Vue$3);
        eventsMixin(Vue$3);
        lifecycleMixin(Vue$3);
        renderMixin(Vue$3);
        function initUse(Vue) {
            Vue.use = function(plugin) {
                if (plugin.installed) {
                    return;
                }
                var args = toArray(arguments, 1);
                args.unshift(this);
                if (typeof plugin.install === "function") {
                    plugin.install.apply(plugin, args);
                } else if (typeof plugin === "function") {
                    plugin.apply(null, args);
                }
                plugin.installed = true;
                return this;
            };
        }
        function initMixin$1(Vue) {
            Vue.mixin = function(mixin) {
                this.options = mergeOptions(this.options, mixin);
            };
        }
        function initExtend(Vue) {
            Vue.cid = 0;
            var cid = 1;
            Vue.extend = function(extendOptions) {
                extendOptions = extendOptions || {};
                var Super = this;
                var SuperId = Super.cid;
                var cachedCtors = extendOptions._Ctor || (extendOptions._Ctor = {});
                if (cachedCtors[SuperId]) {
                    return cachedCtors[SuperId];
                }
                var name = extendOptions.name || Super.options.name;
                if (false) {
                    if (!/^[a-zA-Z][\w-]*$/.test(name)) {
                        warn('Invalid component name: "' + name + '". Component names ' + "can only contain alphanumeric characters and the hyphen, " + "and must start with a letter.");
                    }
                }
                var Sub = function VueComponent(options) {
                    this._init(options);
                };
                Sub.prototype = Object.create(Super.prototype);
                Sub.prototype.constructor = Sub;
                Sub.cid = cid++;
                Sub.options = mergeOptions(Super.options, extendOptions);
                Sub["super"] = Super;
                if (Sub.options.props) {
                    initProps$1(Sub);
                }
                if (Sub.options.computed) {
                    initComputed$1(Sub);
                }
                Sub.extend = Super.extend;
                Sub.mixin = Super.mixin;
                Sub.use = Super.use;
                config._assetTypes.forEach(function(type) {
                    Sub[type] = Super[type];
                });
                if (name) {
                    Sub.options.components[name] = Sub;
                }
                Sub.superOptions = Super.options;
                Sub.extendOptions = extendOptions;
                Sub.sealedOptions = extend({}, Sub.options);
                cachedCtors[SuperId] = Sub;
                return Sub;
            };
        }
        function initProps$1(Comp) {
            var props = Comp.options.props;
            for (var key in props) {
                proxy(Comp.prototype, "_props", key);
            }
        }
        function initComputed$1(Comp) {
            var computed = Comp.options.computed;
            for (var key in computed) {
                defineComputed(Comp.prototype, key, computed[key]);
            }
        }
        function initAssetRegisters(Vue) {
            config._assetTypes.forEach(function(type) {
                Vue[type] = function(id, definition) {
                    if (!definition) {
                        return this.options[type + "s"][id];
                    } else {
                        if (false) {
                            if (type === "component" && config.isReservedTag(id)) {
                                warn("Do not use built-in or reserved HTML elements as component " + "id: " + id);
                            }
                        }
                        if (type === "component" && isPlainObject(definition)) {
                            definition.name = definition.name || id;
                            definition = this.options._base.extend(definition);
                        }
                        if (type === "directive" && typeof definition === "function") {
                            definition = {
                                bind: definition,
                                update: definition
                            };
                        }
                        this.options[type + "s"][id] = definition;
                        return definition;
                    }
                };
            });
        }
        var patternTypes = [ String, RegExp ];
        function getComponentName(opts) {
            return opts && (opts.Ctor.options.name || opts.tag);
        }
        function matches(pattern, name) {
            if (typeof pattern === "string") {
                return pattern.split(",").indexOf(name) > -1;
            } else if (pattern instanceof RegExp) {
                return pattern.test(name);
            }
            return false;
        }
        function pruneCache(cache, filter) {
            for (var key in cache) {
                var cachedNode = cache[key];
                if (cachedNode) {
                    var name = getComponentName(cachedNode.componentOptions);
                    if (name && !filter(name)) {
                        pruneCacheEntry(cachedNode);
                        cache[key] = null;
                    }
                }
            }
        }
        function pruneCacheEntry(vnode) {
            if (vnode) {
                if (!vnode.componentInstance._inactive) {
                    callHook(vnode.componentInstance, "deactivated");
                }
                vnode.componentInstance.$destroy();
            }
        }
        var KeepAlive = {
            name: "keep-alive",
            abstract: true,
            props: {
                include: patternTypes,
                exclude: patternTypes
            },
            created: function created() {
                this.cache = Object.create(null);
            },
            destroyed: function destroyed() {
                var this$1 = this;
                for (var key in this$1.cache) {
                    pruneCacheEntry(this$1.cache[key]);
                }
            },
            watch: {
                include: function include(val) {
                    pruneCache(this.cache, function(name) {
                        return matches(val, name);
                    });
                },
                exclude: function exclude(val) {
                    pruneCache(this.cache, function(name) {
                        return !matches(val, name);
                    });
                }
            },
            render: function render() {
                var vnode = getFirstComponentChild(this.$slots.default);
                var componentOptions = vnode && vnode.componentOptions;
                if (componentOptions) {
                    var name = getComponentName(componentOptions);
                    if (name && (this.include && !matches(this.include, name) || this.exclude && matches(this.exclude, name))) {
                        return vnode;
                    }
                    var key = vnode.key == null ? componentOptions.Ctor.cid + (componentOptions.tag ? "::" + componentOptions.tag : "") : vnode.key;
                    if (this.cache[key]) {
                        vnode.componentInstance = this.cache[key].componentInstance;
                    } else {
                        this.cache[key] = vnode;
                    }
                    vnode.data.keepAlive = true;
                }
                return vnode;
            }
        };
        var builtInComponents = {
            KeepAlive: KeepAlive
        };
        function initGlobalAPI(Vue) {
            var configDef = {};
            configDef.get = function() {
                return config;
            };
            if (false) {
                configDef.set = function() {
                    warn("Do not replace the Vue.config object, set individual fields instead.");
                };
            }
            Object.defineProperty(Vue, "config", configDef);
            Vue.util = {
                warn: warn,
                extend: extend,
                mergeOptions: mergeOptions,
                defineReactive: defineReactive$$1
            };
            Vue.set = set;
            Vue.delete = del;
            Vue.nextTick = nextTick;
            Vue.options = Object.create(null);
            config._assetTypes.forEach(function(type) {
                Vue.options[type + "s"] = Object.create(null);
            });
            Vue.options._base = Vue;
            extend(Vue.options.components, builtInComponents);
            initUse(Vue);
            initMixin$1(Vue);
            initExtend(Vue);
            initAssetRegisters(Vue);
        }
        initGlobalAPI(Vue$3);
        Object.defineProperty(Vue$3.prototype, "$isServer", {
            get: isServerRendering
        });
        Vue$3.version = "2.2.5";
        var acceptValue = makeMap("input,textarea,option,select");
        var mustUseProp = function(tag, type, attr) {
            return attr === "value" && acceptValue(tag) && type !== "button" || attr === "selected" && tag === "option" || attr === "checked" && tag === "input" || attr === "muted" && tag === "video";
        };
        var isEnumeratedAttr = makeMap("contenteditable,draggable,spellcheck");
        var isBooleanAttr = makeMap("allowfullscreen,async,autofocus,autoplay,checked,compact,controls,declare," + "default,defaultchecked,defaultmuted,defaultselected,defer,disabled," + "enabled,formnovalidate,hidden,indeterminate,inert,ismap,itemscope,loop,multiple," + "muted,nohref,noresize,noshade,novalidate,nowrap,open,pauseonexit,readonly," + "required,reversed,scoped,seamless,selected,sortable,translate," + "truespeed,typemustmatch,visible");
        var xlinkNS = "http://www.w3.org/1999/xlink";
        var isXlink = function(name) {
            return name.charAt(5) === ":" && name.slice(0, 5) === "xlink";
        };
        var getXlinkProp = function(name) {
            return isXlink(name) ? name.slice(6, name.length) : "";
        };
        var isFalsyAttrValue = function(val) {
            return val == null || val === false;
        };
        function genClassForVnode(vnode) {
            var data = vnode.data;
            var parentNode = vnode;
            var childNode = vnode;
            while (childNode.componentInstance) {
                childNode = childNode.componentInstance._vnode;
                if (childNode.data) {
                    data = mergeClassData(childNode.data, data);
                }
            }
            while (parentNode = parentNode.parent) {
                if (parentNode.data) {
                    data = mergeClassData(data, parentNode.data);
                }
            }
            return genClassFromData(data);
        }
        function mergeClassData(child, parent) {
            return {
                staticClass: concat(child.staticClass, parent.staticClass),
                class: child.class ? [ child.class, parent.class ] : parent.class
            };
        }
        function genClassFromData(data) {
            var dynamicClass = data.class;
            var staticClass = data.staticClass;
            if (staticClass || dynamicClass) {
                return concat(staticClass, stringifyClass(dynamicClass));
            }
            return "";
        }
        function concat(a, b) {
            return a ? b ? a + " " + b : a : b || "";
        }
        function stringifyClass(value) {
            var res = "";
            if (!value) {
                return res;
            }
            if (typeof value === "string") {
                return value;
            }
            if (Array.isArray(value)) {
                var stringified;
                for (var i = 0, l = value.length; i < l; i++) {
                    if (value[i]) {
                        if (stringified = stringifyClass(value[i])) {
                            res += stringified + " ";
                        }
                    }
                }
                return res.slice(0, -1);
            }
            if (isObject(value)) {
                for (var key in value) {
                    if (value[key]) {
                        res += key + " ";
                    }
                }
                return res.slice(0, -1);
            }
            return res;
        }
        var namespaceMap = {
            svg: "http://www.w3.org/2000/svg",
            math: "http://www.w3.org/1998/Math/MathML"
        };
        var isHTMLTag = makeMap("html,body,base,head,link,meta,style,title," + "address,article,aside,footer,header,h1,h2,h3,h4,h5,h6,hgroup,nav,section," + "div,dd,dl,dt,figcaption,figure,hr,img,li,main,ol,p,pre,ul," + "a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,rtc,ruby," + "s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video," + "embed,object,param,source,canvas,script,noscript,del,ins," + "caption,col,colgroup,table,thead,tbody,td,th,tr," + "button,datalist,fieldset,form,input,label,legend,meter,optgroup,option," + "output,progress,select,textarea," + "details,dialog,menu,menuitem,summary," + "content,element,shadow,template");
        var isSVG = makeMap("svg,animate,circle,clippath,cursor,defs,desc,ellipse,filter,font-face," + "foreignObject,g,glyph,image,line,marker,mask,missing-glyph,path,pattern," + "polygon,polyline,rect,switch,symbol,text,textpath,tspan,use,view", true);
        var isPreTag = function(tag) {
            return tag === "pre";
        };
        var isReservedTag = function(tag) {
            return isHTMLTag(tag) || isSVG(tag);
        };
        function getTagNamespace(tag) {
            if (isSVG(tag)) {
                return "svg";
            }
            if (tag === "math") {
                return "math";
            }
        }
        var unknownElementCache = Object.create(null);
        function isUnknownElement(tag) {
            if (!inBrowser) {
                return true;
            }
            if (isReservedTag(tag)) {
                return false;
            }
            tag = tag.toLowerCase();
            if (unknownElementCache[tag] != null) {
                return unknownElementCache[tag];
            }
            var el = document.createElement(tag);
            if (tag.indexOf("-") > -1) {
                return unknownElementCache[tag] = el.constructor === window.HTMLUnknownElement || el.constructor === window.HTMLElement;
            } else {
                return unknownElementCache[tag] = /HTMLUnknownElement/.test(el.toString());
            }
        }
        function query(el) {
            if (typeof el === "string") {
                var selected = document.querySelector(el);
                if (!selected) {
                    "production" !== "production" && warn("Cannot find element: " + el);
                    return document.createElement("div");
                }
                return selected;
            } else {
                return el;
            }
        }
        function createElement$1(tagName, vnode) {
            var elm = document.createElement(tagName);
            if (tagName !== "select") {
                return elm;
            }
            if (vnode.data && vnode.data.attrs && vnode.data.attrs.multiple !== undefined) {
                elm.setAttribute("multiple", "multiple");
            }
            return elm;
        }
        function createElementNS(namespace, tagName) {
            return document.createElementNS(namespaceMap[namespace], tagName);
        }
        function createTextNode(text) {
            return document.createTextNode(text);
        }
        function createComment(text) {
            return document.createComment(text);
        }
        function insertBefore(parentNode, newNode, referenceNode) {
            parentNode.insertBefore(newNode, referenceNode);
        }
        function removeChild(node, child) {
            node.removeChild(child);
        }
        function appendChild(node, child) {
            node.appendChild(child);
        }
        function parentNode(node) {
            return node.parentNode;
        }
        function nextSibling(node) {
            return node.nextSibling;
        }
        function tagName(node) {
            return node.tagName;
        }
        function setTextContent(node, text) {
            node.textContent = text;
        }
        function setAttribute(node, key, val) {
            node.setAttribute(key, val);
        }
        var nodeOps = Object.freeze({
            createElement: createElement$1,
            createElementNS: createElementNS,
            createTextNode: createTextNode,
            createComment: createComment,
            insertBefore: insertBefore,
            removeChild: removeChild,
            appendChild: appendChild,
            parentNode: parentNode,
            nextSibling: nextSibling,
            tagName: tagName,
            setTextContent: setTextContent,
            setAttribute: setAttribute
        });
        var ref = {
            create: function create(_, vnode) {
                registerRef(vnode);
            },
            update: function update(oldVnode, vnode) {
                if (oldVnode.data.ref !== vnode.data.ref) {
                    registerRef(oldVnode, true);
                    registerRef(vnode);
                }
            },
            destroy: function destroy(vnode) {
                registerRef(vnode, true);
            }
        };
        function registerRef(vnode, isRemoval) {
            var key = vnode.data.ref;
            if (!key) {
                return;
            }
            var vm = vnode.context;
            var ref = vnode.componentInstance || vnode.elm;
            var refs = vm.$refs;
            if (isRemoval) {
                if (Array.isArray(refs[key])) {
                    remove(refs[key], ref);
                } else if (refs[key] === ref) {
                    refs[key] = undefined;
                }
            } else {
                if (vnode.data.refInFor) {
                    if (Array.isArray(refs[key]) && refs[key].indexOf(ref) < 0) {
                        refs[key].push(ref);
                    } else {
                        refs[key] = [ ref ];
                    }
                } else {
                    refs[key] = ref;
                }
            }
        }
        var emptyNode = new VNode("", {}, []);
        var hooks = [ "create", "activate", "update", "remove", "destroy" ];
        function isUndef(v) {
            return v === undefined || v === null;
        }
        function isDef(v) {
            return v !== undefined && v !== null;
        }
        function isTrue(v) {
            return v === true;
        }
        function sameVnode(a, b) {
            return a.key === b.key && a.tag === b.tag && a.isComment === b.isComment && isDef(a.data) === isDef(b.data) && sameInputType(a, b);
        }
        function sameInputType(a, b) {
            if (a.tag !== "input") {
                return true;
            }
            var i;
            var typeA = isDef(i = a.data) && isDef(i = i.attrs) && i.type;
            var typeB = isDef(i = b.data) && isDef(i = i.attrs) && i.type;
            return typeA === typeB;
        }
        function createKeyToOldIdx(children, beginIdx, endIdx) {
            var i, key;
            var map = {};
            for (i = beginIdx; i <= endIdx; ++i) {
                key = children[i].key;
                if (isDef(key)) {
                    map[key] = i;
                }
            }
            return map;
        }
        function createPatchFunction(backend) {
            var i, j;
            var cbs = {};
            var modules = backend.modules;
            var nodeOps = backend.nodeOps;
            for (i = 0; i < hooks.length; ++i) {
                cbs[hooks[i]] = [];
                for (j = 0; j < modules.length; ++j) {
                    if (isDef(modules[j][hooks[i]])) {
                        cbs[hooks[i]].push(modules[j][hooks[i]]);
                    }
                }
            }
            function emptyNodeAt(elm) {
                return new VNode(nodeOps.tagName(elm).toLowerCase(), {}, [], undefined, elm);
            }
            function createRmCb(childElm, listeners) {
                function remove$$1() {
                    if (--remove$$1.listeners === 0) {
                        removeNode(childElm);
                    }
                }
                remove$$1.listeners = listeners;
                return remove$$1;
            }
            function removeNode(el) {
                var parent = nodeOps.parentNode(el);
                if (isDef(parent)) {
                    nodeOps.removeChild(parent, el);
                }
            }
            var inPre = 0;
            function createElm(vnode, insertedVnodeQueue, parentElm, refElm, nested) {
                vnode.isRootInsert = !nested;
                if (createComponent(vnode, insertedVnodeQueue, parentElm, refElm)) {
                    return;
                }
                var data = vnode.data;
                var children = vnode.children;
                var tag = vnode.tag;
                if (isDef(tag)) {
                    if (false) {
                        if (data && data.pre) {
                            inPre++;
                        }
                        if (!inPre && !vnode.ns && !(config.ignoredElements.length && config.ignoredElements.indexOf(tag) > -1) && config.isUnknownElement(tag)) {
                            warn("Unknown custom element: <" + tag + "> - did you " + "register the component correctly? For recursive components, " + 'make sure to provide the "name" option.', vnode.context);
                        }
                    }
                    vnode.elm = vnode.ns ? nodeOps.createElementNS(vnode.ns, tag) : nodeOps.createElement(tag, vnode);
                    setScope(vnode);
                    {
                        createChildren(vnode, children, insertedVnodeQueue);
                        if (isDef(data)) {
                            invokeCreateHooks(vnode, insertedVnodeQueue);
                        }
                        insert(parentElm, vnode.elm, refElm);
                    }
                    if (false) {
                        inPre--;
                    }
                } else if (isTrue(vnode.isComment)) {
                    vnode.elm = nodeOps.createComment(vnode.text);
                    insert(parentElm, vnode.elm, refElm);
                } else {
                    vnode.elm = nodeOps.createTextNode(vnode.text);
                    insert(parentElm, vnode.elm, refElm);
                }
            }
            function createComponent(vnode, insertedVnodeQueue, parentElm, refElm) {
                var i = vnode.data;
                if (isDef(i)) {
                    var isReactivated = isDef(vnode.componentInstance) && i.keepAlive;
                    if (isDef(i = i.hook) && isDef(i = i.init)) {
                        i(vnode, false, parentElm, refElm);
                    }
                    if (isDef(vnode.componentInstance)) {
                        initComponent(vnode, insertedVnodeQueue);
                        if (isTrue(isReactivated)) {
                            reactivateComponent(vnode, insertedVnodeQueue, parentElm, refElm);
                        }
                        return true;
                    }
                }
            }
            function initComponent(vnode, insertedVnodeQueue) {
                if (isDef(vnode.data.pendingInsert)) {
                    insertedVnodeQueue.push.apply(insertedVnodeQueue, vnode.data.pendingInsert);
                }
                vnode.elm = vnode.componentInstance.$el;
                if (isPatchable(vnode)) {
                    invokeCreateHooks(vnode, insertedVnodeQueue);
                    setScope(vnode);
                } else {
                    registerRef(vnode);
                    insertedVnodeQueue.push(vnode);
                }
            }
            function reactivateComponent(vnode, insertedVnodeQueue, parentElm, refElm) {
                var i;
                var innerNode = vnode;
                while (innerNode.componentInstance) {
                    innerNode = innerNode.componentInstance._vnode;
                    if (isDef(i = innerNode.data) && isDef(i = i.transition)) {
                        for (i = 0; i < cbs.activate.length; ++i) {
                            cbs.activate[i](emptyNode, innerNode);
                        }
                        insertedVnodeQueue.push(innerNode);
                        break;
                    }
                }
                insert(parentElm, vnode.elm, refElm);
            }
            function insert(parent, elm, ref) {
                if (isDef(parent)) {
                    if (isDef(ref)) {
                        nodeOps.insertBefore(parent, elm, ref);
                    } else {
                        nodeOps.appendChild(parent, elm);
                    }
                }
            }
            function createChildren(vnode, children, insertedVnodeQueue) {
                if (Array.isArray(children)) {
                    for (var i = 0; i < children.length; ++i) {
                        createElm(children[i], insertedVnodeQueue, vnode.elm, null, true);
                    }
                } else if (isPrimitive(vnode.text)) {
                    nodeOps.appendChild(vnode.elm, nodeOps.createTextNode(vnode.text));
                }
            }
            function isPatchable(vnode) {
                while (vnode.componentInstance) {
                    vnode = vnode.componentInstance._vnode;
                }
                return isDef(vnode.tag);
            }
            function invokeCreateHooks(vnode, insertedVnodeQueue) {
                for (var i$1 = 0; i$1 < cbs.create.length; ++i$1) {
                    cbs.create[i$1](emptyNode, vnode);
                }
                i = vnode.data.hook;
                if (isDef(i)) {
                    if (isDef(i.create)) {
                        i.create(emptyNode, vnode);
                    }
                    if (isDef(i.insert)) {
                        insertedVnodeQueue.push(vnode);
                    }
                }
            }
            function setScope(vnode) {
                var i;
                var ancestor = vnode;
                while (ancestor) {
                    if (isDef(i = ancestor.context) && isDef(i = i.$options._scopeId)) {
                        nodeOps.setAttribute(vnode.elm, i, "");
                    }
                    ancestor = ancestor.parent;
                }
                if (isDef(i = activeInstance) && i !== vnode.context && isDef(i = i.$options._scopeId)) {
                    nodeOps.setAttribute(vnode.elm, i, "");
                }
            }
            function addVnodes(parentElm, refElm, vnodes, startIdx, endIdx, insertedVnodeQueue) {
                for (;startIdx <= endIdx; ++startIdx) {
                    createElm(vnodes[startIdx], insertedVnodeQueue, parentElm, refElm);
                }
            }
            function invokeDestroyHook(vnode) {
                var i, j;
                var data = vnode.data;
                if (isDef(data)) {
                    if (isDef(i = data.hook) && isDef(i = i.destroy)) {
                        i(vnode);
                    }
                    for (i = 0; i < cbs.destroy.length; ++i) {
                        cbs.destroy[i](vnode);
                    }
                }
                if (isDef(i = vnode.children)) {
                    for (j = 0; j < vnode.children.length; ++j) {
                        invokeDestroyHook(vnode.children[j]);
                    }
                }
            }
            function removeVnodes(parentElm, vnodes, startIdx, endIdx) {
                for (;startIdx <= endIdx; ++startIdx) {
                    var ch = vnodes[startIdx];
                    if (isDef(ch)) {
                        if (isDef(ch.tag)) {
                            removeAndInvokeRemoveHook(ch);
                            invokeDestroyHook(ch);
                        } else {
                            removeNode(ch.elm);
                        }
                    }
                }
            }
            function removeAndInvokeRemoveHook(vnode, rm) {
                if (isDef(rm) || isDef(vnode.data)) {
                    var listeners = cbs.remove.length + 1;
                    if (isDef(rm)) {
                        rm.listeners += listeners;
                    } else {
                        rm = createRmCb(vnode.elm, listeners);
                    }
                    if (isDef(i = vnode.componentInstance) && isDef(i = i._vnode) && isDef(i.data)) {
                        removeAndInvokeRemoveHook(i, rm);
                    }
                    for (i = 0; i < cbs.remove.length; ++i) {
                        cbs.remove[i](vnode, rm);
                    }
                    if (isDef(i = vnode.data.hook) && isDef(i = i.remove)) {
                        i(vnode, rm);
                    } else {
                        rm();
                    }
                } else {
                    removeNode(vnode.elm);
                }
            }
            function updateChildren(parentElm, oldCh, newCh, insertedVnodeQueue, removeOnly) {
                var oldStartIdx = 0;
                var newStartIdx = 0;
                var oldEndIdx = oldCh.length - 1;
                var oldStartVnode = oldCh[0];
                var oldEndVnode = oldCh[oldEndIdx];
                var newEndIdx = newCh.length - 1;
                var newStartVnode = newCh[0];
                var newEndVnode = newCh[newEndIdx];
                var oldKeyToIdx, idxInOld, elmToMove, refElm;
                var canMove = !removeOnly;
                while (oldStartIdx <= oldEndIdx && newStartIdx <= newEndIdx) {
                    if (isUndef(oldStartVnode)) {
                        oldStartVnode = oldCh[++oldStartIdx];
                    } else if (isUndef(oldEndVnode)) {
                        oldEndVnode = oldCh[--oldEndIdx];
                    } else if (sameVnode(oldStartVnode, newStartVnode)) {
                        patchVnode(oldStartVnode, newStartVnode, insertedVnodeQueue);
                        oldStartVnode = oldCh[++oldStartIdx];
                        newStartVnode = newCh[++newStartIdx];
                    } else if (sameVnode(oldEndVnode, newEndVnode)) {
                        patchVnode(oldEndVnode, newEndVnode, insertedVnodeQueue);
                        oldEndVnode = oldCh[--oldEndIdx];
                        newEndVnode = newCh[--newEndIdx];
                    } else if (sameVnode(oldStartVnode, newEndVnode)) {
                        patchVnode(oldStartVnode, newEndVnode, insertedVnodeQueue);
                        canMove && nodeOps.insertBefore(parentElm, oldStartVnode.elm, nodeOps.nextSibling(oldEndVnode.elm));
                        oldStartVnode = oldCh[++oldStartIdx];
                        newEndVnode = newCh[--newEndIdx];
                    } else if (sameVnode(oldEndVnode, newStartVnode)) {
                        patchVnode(oldEndVnode, newStartVnode, insertedVnodeQueue);
                        canMove && nodeOps.insertBefore(parentElm, oldEndVnode.elm, oldStartVnode.elm);
                        oldEndVnode = oldCh[--oldEndIdx];
                        newStartVnode = newCh[++newStartIdx];
                    } else {
                        if (isUndef(oldKeyToIdx)) {
                            oldKeyToIdx = createKeyToOldIdx(oldCh, oldStartIdx, oldEndIdx);
                        }
                        idxInOld = isDef(newStartVnode.key) ? oldKeyToIdx[newStartVnode.key] : null;
                        if (isUndef(idxInOld)) {
                            createElm(newStartVnode, insertedVnodeQueue, parentElm, oldStartVnode.elm);
                            newStartVnode = newCh[++newStartIdx];
                        } else {
                            elmToMove = oldCh[idxInOld];
                            if (false) {
                                warn("It seems there are duplicate keys that is causing an update error. " + "Make sure each v-for item has a unique key.");
                            }
                            if (sameVnode(elmToMove, newStartVnode)) {
                                patchVnode(elmToMove, newStartVnode, insertedVnodeQueue);
                                oldCh[idxInOld] = undefined;
                                canMove && nodeOps.insertBefore(parentElm, newStartVnode.elm, oldStartVnode.elm);
                                newStartVnode = newCh[++newStartIdx];
                            } else {
                                createElm(newStartVnode, insertedVnodeQueue, parentElm, oldStartVnode.elm);
                                newStartVnode = newCh[++newStartIdx];
                            }
                        }
                    }
                }
                if (oldStartIdx > oldEndIdx) {
                    refElm = isUndef(newCh[newEndIdx + 1]) ? null : newCh[newEndIdx + 1].elm;
                    addVnodes(parentElm, refElm, newCh, newStartIdx, newEndIdx, insertedVnodeQueue);
                } else if (newStartIdx > newEndIdx) {
                    removeVnodes(parentElm, oldCh, oldStartIdx, oldEndIdx);
                }
            }
            function patchVnode(oldVnode, vnode, insertedVnodeQueue, removeOnly) {
                if (oldVnode === vnode) {
                    return;
                }
                if (isTrue(vnode.isStatic) && isTrue(oldVnode.isStatic) && vnode.key === oldVnode.key && (isTrue(vnode.isCloned) || isTrue(vnode.isOnce))) {
                    vnode.elm = oldVnode.elm;
                    vnode.componentInstance = oldVnode.componentInstance;
                    return;
                }
                var i;
                var data = vnode.data;
                if (isDef(data) && isDef(i = data.hook) && isDef(i = i.prepatch)) {
                    i(oldVnode, vnode);
                }
                var elm = vnode.elm = oldVnode.elm;
                var oldCh = oldVnode.children;
                var ch = vnode.children;
                if (isDef(data) && isPatchable(vnode)) {
                    for (i = 0; i < cbs.update.length; ++i) {
                        cbs.update[i](oldVnode, vnode);
                    }
                    if (isDef(i = data.hook) && isDef(i = i.update)) {
                        i(oldVnode, vnode);
                    }
                }
                if (isUndef(vnode.text)) {
                    if (isDef(oldCh) && isDef(ch)) {
                        if (oldCh !== ch) {
                            updateChildren(elm, oldCh, ch, insertedVnodeQueue, removeOnly);
                        }
                    } else if (isDef(ch)) {
                        if (isDef(oldVnode.text)) {
                            nodeOps.setTextContent(elm, "");
                        }
                        addVnodes(elm, null, ch, 0, ch.length - 1, insertedVnodeQueue);
                    } else if (isDef(oldCh)) {
                        removeVnodes(elm, oldCh, 0, oldCh.length - 1);
                    } else if (isDef(oldVnode.text)) {
                        nodeOps.setTextContent(elm, "");
                    }
                } else if (oldVnode.text !== vnode.text) {
                    nodeOps.setTextContent(elm, vnode.text);
                }
                if (isDef(data)) {
                    if (isDef(i = data.hook) && isDef(i = i.postpatch)) {
                        i(oldVnode, vnode);
                    }
                }
            }
            function invokeInsertHook(vnode, queue, initial) {
                if (isTrue(initial) && isDef(vnode.parent)) {
                    vnode.parent.data.pendingInsert = queue;
                } else {
                    for (var i = 0; i < queue.length; ++i) {
                        queue[i].data.hook.insert(queue[i]);
                    }
                }
            }
            var bailed = false;
            var isRenderedModule = makeMap("attrs,style,class,staticClass,staticStyle,key");
            function hydrate(elm, vnode, insertedVnodeQueue) {
                if (false) {
                    if (!assertNodeMatch(elm, vnode)) {
                        return false;
                    }
                }
                vnode.elm = elm;
                var tag = vnode.tag;
                var data = vnode.data;
                var children = vnode.children;
                if (isDef(data)) {
                    if (isDef(i = data.hook) && isDef(i = i.init)) {
                        i(vnode, true);
                    }
                    if (isDef(i = vnode.componentInstance)) {
                        initComponent(vnode, insertedVnodeQueue);
                        return true;
                    }
                }
                if (isDef(tag)) {
                    if (isDef(children)) {
                        if (!elm.hasChildNodes()) {
                            createChildren(vnode, children, insertedVnodeQueue);
                        } else {
                            var childrenMatch = true;
                            var childNode = elm.firstChild;
                            for (var i$1 = 0; i$1 < children.length; i$1++) {
                                if (!childNode || !hydrate(childNode, children[i$1], insertedVnodeQueue)) {
                                    childrenMatch = false;
                                    break;
                                }
                                childNode = childNode.nextSibling;
                            }
                            if (!childrenMatch || childNode) {
                                if (false) {
                                    bailed = true;
                                    console.warn("Parent: ", elm);
                                    console.warn("Mismatching childNodes vs. VNodes: ", elm.childNodes, children);
                                }
                                return false;
                            }
                        }
                    }
                    if (isDef(data)) {
                        for (var key in data) {
                            if (!isRenderedModule(key)) {
                                invokeCreateHooks(vnode, insertedVnodeQueue);
                                break;
                            }
                        }
                    }
                } else if (elm.data !== vnode.text) {
                    elm.data = vnode.text;
                }
                return true;
            }
            function assertNodeMatch(node, vnode) {
                if (isDef(vnode.tag)) {
                    return vnode.tag.indexOf("vue-component") === 0 || vnode.tag.toLowerCase() === (node.tagName && node.tagName.toLowerCase());
                } else {
                    return node.nodeType === (vnode.isComment ? 8 : 3);
                }
            }
            return function patch(oldVnode, vnode, hydrating, removeOnly, parentElm, refElm) {
                if (isUndef(vnode)) {
                    if (isDef(oldVnode)) {
                        invokeDestroyHook(oldVnode);
                    }
                    return;
                }
                var isInitialPatch = false;
                var insertedVnodeQueue = [];
                if (isUndef(oldVnode)) {
                    isInitialPatch = true;
                    createElm(vnode, insertedVnodeQueue, parentElm, refElm);
                } else {
                    var isRealElement = isDef(oldVnode.nodeType);
                    if (!isRealElement && sameVnode(oldVnode, vnode)) {
                        patchVnode(oldVnode, vnode, insertedVnodeQueue, removeOnly);
                    } else {
                        if (isRealElement) {
                            if (oldVnode.nodeType === 1 && oldVnode.hasAttribute("server-rendered")) {
                                oldVnode.removeAttribute("server-rendered");
                                hydrating = true;
                            }
                            if (isTrue(hydrating)) {
                                if (hydrate(oldVnode, vnode, insertedVnodeQueue)) {
                                    invokeInsertHook(vnode, insertedVnodeQueue, true);
                                    return oldVnode;
                                } else if (false) {
                                    warn("The client-side rendered virtual DOM tree is not matching " + "server-rendered content. This is likely caused by incorrect " + "HTML markup, for example nesting block-level elements inside " + "<p>, or missing <tbody>. Bailing hydration and performing " + "full client-side render.");
                                }
                            }
                            oldVnode = emptyNodeAt(oldVnode);
                        }
                        var oldElm = oldVnode.elm;
                        var parentElm$1 = nodeOps.parentNode(oldElm);
                        createElm(vnode, insertedVnodeQueue, oldElm._leaveCb ? null : parentElm$1, nodeOps.nextSibling(oldElm));
                        if (isDef(vnode.parent)) {
                            var ancestor = vnode.parent;
                            while (ancestor) {
                                ancestor.elm = vnode.elm;
                                ancestor = ancestor.parent;
                            }
                            if (isPatchable(vnode)) {
                                for (var i = 0; i < cbs.create.length; ++i) {
                                    cbs.create[i](emptyNode, vnode.parent);
                                }
                            }
                        }
                        if (isDef(parentElm$1)) {
                            removeVnodes(parentElm$1, [ oldVnode ], 0, 0);
                        } else if (isDef(oldVnode.tag)) {
                            invokeDestroyHook(oldVnode);
                        }
                    }
                }
                invokeInsertHook(vnode, insertedVnodeQueue, isInitialPatch);
                return vnode.elm;
            };
        }
        var directives = {
            create: updateDirectives,
            update: updateDirectives,
            destroy: function unbindDirectives(vnode) {
                updateDirectives(vnode, emptyNode);
            }
        };
        function updateDirectives(oldVnode, vnode) {
            if (oldVnode.data.directives || vnode.data.directives) {
                _update(oldVnode, vnode);
            }
        }
        function _update(oldVnode, vnode) {
            var isCreate = oldVnode === emptyNode;
            var isDestroy = vnode === emptyNode;
            var oldDirs = normalizeDirectives$1(oldVnode.data.directives, oldVnode.context);
            var newDirs = normalizeDirectives$1(vnode.data.directives, vnode.context);
            var dirsWithInsert = [];
            var dirsWithPostpatch = [];
            var key, oldDir, dir;
            for (key in newDirs) {
                oldDir = oldDirs[key];
                dir = newDirs[key];
                if (!oldDir) {
                    callHook$1(dir, "bind", vnode, oldVnode);
                    if (dir.def && dir.def.inserted) {
                        dirsWithInsert.push(dir);
                    }
                } else {
                    dir.oldValue = oldDir.value;
                    callHook$1(dir, "update", vnode, oldVnode);
                    if (dir.def && dir.def.componentUpdated) {
                        dirsWithPostpatch.push(dir);
                    }
                }
            }
            if (dirsWithInsert.length) {
                var callInsert = function() {
                    for (var i = 0; i < dirsWithInsert.length; i++) {
                        callHook$1(dirsWithInsert[i], "inserted", vnode, oldVnode);
                    }
                };
                if (isCreate) {
                    mergeVNodeHook(vnode.data.hook || (vnode.data.hook = {}), "insert", callInsert);
                } else {
                    callInsert();
                }
            }
            if (dirsWithPostpatch.length) {
                mergeVNodeHook(vnode.data.hook || (vnode.data.hook = {}), "postpatch", function() {
                    for (var i = 0; i < dirsWithPostpatch.length; i++) {
                        callHook$1(dirsWithPostpatch[i], "componentUpdated", vnode, oldVnode);
                    }
                });
            }
            if (!isCreate) {
                for (key in oldDirs) {
                    if (!newDirs[key]) {
                        callHook$1(oldDirs[key], "unbind", oldVnode, oldVnode, isDestroy);
                    }
                }
            }
        }
        var emptyModifiers = Object.create(null);
        function normalizeDirectives$1(dirs, vm) {
            var res = Object.create(null);
            if (!dirs) {
                return res;
            }
            var i, dir;
            for (i = 0; i < dirs.length; i++) {
                dir = dirs[i];
                if (!dir.modifiers) {
                    dir.modifiers = emptyModifiers;
                }
                res[getRawDirName(dir)] = dir;
                dir.def = resolveAsset(vm.$options, "directives", dir.name, true);
            }
            return res;
        }
        function getRawDirName(dir) {
            return dir.rawName || dir.name + "." + Object.keys(dir.modifiers || {}).join(".");
        }
        function callHook$1(dir, hook, vnode, oldVnode, isDestroy) {
            var fn = dir.def && dir.def[hook];
            if (fn) {
                fn(vnode.elm, dir, vnode, oldVnode, isDestroy);
            }
        }
        var baseModules = [ ref, directives ];
        function updateAttrs(oldVnode, vnode) {
            if (!oldVnode.data.attrs && !vnode.data.attrs) {
                return;
            }
            var key, cur, old;
            var elm = vnode.elm;
            var oldAttrs = oldVnode.data.attrs || {};
            var attrs = vnode.data.attrs || {};
            if (attrs.__ob__) {
                attrs = vnode.data.attrs = extend({}, attrs);
            }
            for (key in attrs) {
                cur = attrs[key];
                old = oldAttrs[key];
                if (old !== cur) {
                    setAttr(elm, key, cur);
                }
            }
            if (isIE9 && attrs.value !== oldAttrs.value) {
                setAttr(elm, "value", attrs.value);
            }
            for (key in oldAttrs) {
                if (attrs[key] == null) {
                    if (isXlink(key)) {
                        elm.removeAttributeNS(xlinkNS, getXlinkProp(key));
                    } else if (!isEnumeratedAttr(key)) {
                        elm.removeAttribute(key);
                    }
                }
            }
        }
        function setAttr(el, key, value) {
            if (isBooleanAttr(key)) {
                if (isFalsyAttrValue(value)) {
                    el.removeAttribute(key);
                } else {
                    el.setAttribute(key, key);
                }
            } else if (isEnumeratedAttr(key)) {
                el.setAttribute(key, isFalsyAttrValue(value) || value === "false" ? "false" : "true");
            } else if (isXlink(key)) {
                if (isFalsyAttrValue(value)) {
                    el.removeAttributeNS(xlinkNS, getXlinkProp(key));
                } else {
                    el.setAttributeNS(xlinkNS, key, value);
                }
            } else {
                if (isFalsyAttrValue(value)) {
                    el.removeAttribute(key);
                } else {
                    el.setAttribute(key, value);
                }
            }
        }
        var attrs = {
            create: updateAttrs,
            update: updateAttrs
        };
        function updateClass(oldVnode, vnode) {
            var el = vnode.elm;
            var data = vnode.data;
            var oldData = oldVnode.data;
            if (!data.staticClass && !data.class && (!oldData || !oldData.staticClass && !oldData.class)) {
                return;
            }
            var cls = genClassForVnode(vnode);
            var transitionClass = el._transitionClasses;
            if (transitionClass) {
                cls = concat(cls, stringifyClass(transitionClass));
            }
            if (cls !== el._prevClass) {
                el.setAttribute("class", cls);
                el._prevClass = cls;
            }
        }
        var klass = {
            create: updateClass,
            update: updateClass
        };
        var validDivisionCharRE = /[\w).+\-_$\]]/;
        function parseFilters(exp) {
            var inSingle = false;
            var inDouble = false;
            var inTemplateString = false;
            var inRegex = false;
            var curly = 0;
            var square = 0;
            var paren = 0;
            var lastFilterIndex = 0;
            var c, prev, i, expression, filters;
            for (i = 0; i < exp.length; i++) {
                prev = c;
                c = exp.charCodeAt(i);
                if (inSingle) {
                    if (c === 39 && prev !== 92) {
                        inSingle = false;
                    }
                } else if (inDouble) {
                    if (c === 34 && prev !== 92) {
                        inDouble = false;
                    }
                } else if (inTemplateString) {
                    if (c === 96 && prev !== 92) {
                        inTemplateString = false;
                    }
                } else if (inRegex) {
                    if (c === 47 && prev !== 92) {
                        inRegex = false;
                    }
                } else if (c === 124 && exp.charCodeAt(i + 1) !== 124 && exp.charCodeAt(i - 1) !== 124 && !curly && !square && !paren) {
                    if (expression === undefined) {
                        lastFilterIndex = i + 1;
                        expression = exp.slice(0, i).trim();
                    } else {
                        pushFilter();
                    }
                } else {
                    switch (c) {
                      case 34:
                        inDouble = true;
                        break;

                      case 39:
                        inSingle = true;
                        break;

                      case 96:
                        inTemplateString = true;
                        break;

                      case 40:
                        paren++;
                        break;

                      case 41:
                        paren--;
                        break;

                      case 91:
                        square++;
                        break;

                      case 93:
                        square--;
                        break;

                      case 123:
                        curly++;
                        break;

                      case 125:
                        curly--;
                        break;
                    }
                    if (c === 47) {
                        var j = i - 1;
                        var p = void 0;
                        for (;j >= 0; j--) {
                            p = exp.charAt(j);
                            if (p !== " ") {
                                break;
                            }
                        }
                        if (!p || !validDivisionCharRE.test(p)) {
                            inRegex = true;
                        }
                    }
                }
            }
            if (expression === undefined) {
                expression = exp.slice(0, i).trim();
            } else if (lastFilterIndex !== 0) {
                pushFilter();
            }
            function pushFilter() {
                (filters || (filters = [])).push(exp.slice(lastFilterIndex, i).trim());
                lastFilterIndex = i + 1;
            }
            if (filters) {
                for (i = 0; i < filters.length; i++) {
                    expression = wrapFilter(expression, filters[i]);
                }
            }
            return expression;
        }
        function wrapFilter(exp, filter) {
            var i = filter.indexOf("(");
            if (i < 0) {
                return '_f("' + filter + '")(' + exp + ")";
            } else {
                var name = filter.slice(0, i);
                var args = filter.slice(i + 1);
                return '_f("' + name + '")(' + exp + "," + args;
            }
        }
        function baseWarn(msg) {
            console.error("[Vue compiler]: " + msg);
        }
        function pluckModuleFunction(modules, key) {
            return modules ? modules.map(function(m) {
                return m[key];
            }).filter(function(_) {
                return _;
            }) : [];
        }
        function addProp(el, name, value) {
            (el.props || (el.props = [])).push({
                name: name,
                value: value
            });
        }
        function addAttr(el, name, value) {
            (el.attrs || (el.attrs = [])).push({
                name: name,
                value: value
            });
        }
        function addDirective(el, name, rawName, value, arg, modifiers) {
            (el.directives || (el.directives = [])).push({
                name: name,
                rawName: rawName,
                value: value,
                arg: arg,
                modifiers: modifiers
            });
        }
        function addHandler(el, name, value, modifiers, important) {
            if (modifiers && modifiers.capture) {
                delete modifiers.capture;
                name = "!" + name;
            }
            if (modifiers && modifiers.once) {
                delete modifiers.once;
                name = "~" + name;
            }
            var events;
            if (modifiers && modifiers.native) {
                delete modifiers.native;
                events = el.nativeEvents || (el.nativeEvents = {});
            } else {
                events = el.events || (el.events = {});
            }
            var newHandler = {
                value: value,
                modifiers: modifiers
            };
            var handlers = events[name];
            if (Array.isArray(handlers)) {
                important ? handlers.unshift(newHandler) : handlers.push(newHandler);
            } else if (handlers) {
                events[name] = important ? [ newHandler, handlers ] : [ handlers, newHandler ];
            } else {
                events[name] = newHandler;
            }
        }
        function getBindingAttr(el, name, getStatic) {
            var dynamicValue = getAndRemoveAttr(el, ":" + name) || getAndRemoveAttr(el, "v-bind:" + name);
            if (dynamicValue != null) {
                return parseFilters(dynamicValue);
            } else if (getStatic !== false) {
                var staticValue = getAndRemoveAttr(el, name);
                if (staticValue != null) {
                    return JSON.stringify(staticValue);
                }
            }
        }
        function getAndRemoveAttr(el, name) {
            var val;
            if ((val = el.attrsMap[name]) != null) {
                var list = el.attrsList;
                for (var i = 0, l = list.length; i < l; i++) {
                    if (list[i].name === name) {
                        list.splice(i, 1);
                        break;
                    }
                }
            }
            return val;
        }
        function genComponentModel(el, value, modifiers) {
            var ref = modifiers || {};
            var number = ref.number;
            var trim = ref.trim;
            var baseValueExpression = "$$v";
            var valueExpression = baseValueExpression;
            if (trim) {
                valueExpression = "(typeof " + baseValueExpression + " === 'string'" + "? " + baseValueExpression + ".trim()" + ": " + baseValueExpression + ")";
            }
            if (number) {
                valueExpression = "_n(" + valueExpression + ")";
            }
            var assignment = genAssignmentCode(value, valueExpression);
            el.model = {
                value: "(" + value + ")",
                expression: '"' + value + '"',
                callback: "function (" + baseValueExpression + ") {" + assignment + "}"
            };
        }
        function genAssignmentCode(value, assignment) {
            var modelRs = parseModel(value);
            if (modelRs.idx === null) {
                return value + "=" + assignment;
            } else {
                return "var $$exp = " + modelRs.exp + ", $$idx = " + modelRs.idx + ";" + "if (!Array.isArray($$exp)){" + value + "=" + assignment + "}" + "else{$$exp.splice($$idx, 1, " + assignment + ")}";
            }
        }
        var len;
        var str;
        var chr;
        var index$1;
        var expressionPos;
        var expressionEndPos;
        function parseModel(val) {
            str = val;
            len = str.length;
            index$1 = expressionPos = expressionEndPos = 0;
            if (val.indexOf("[") < 0 || val.lastIndexOf("]") < len - 1) {
                return {
                    exp: val,
                    idx: null
                };
            }
            while (!eof()) {
                chr = next();
                if (isStringStart(chr)) {
                    parseString(chr);
                } else if (chr === 91) {
                    parseBracket(chr);
                }
            }
            return {
                exp: val.substring(0, expressionPos),
                idx: val.substring(expressionPos + 1, expressionEndPos)
            };
        }
        function next() {
            return str.charCodeAt(++index$1);
        }
        function eof() {
            return index$1 >= len;
        }
        function isStringStart(chr) {
            return chr === 34 || chr === 39;
        }
        function parseBracket(chr) {
            var inBracket = 1;
            expressionPos = index$1;
            while (!eof()) {
                chr = next();
                if (isStringStart(chr)) {
                    parseString(chr);
                    continue;
                }
                if (chr === 91) {
                    inBracket++;
                }
                if (chr === 93) {
                    inBracket--;
                }
                if (inBracket === 0) {
                    expressionEndPos = index$1;
                    break;
                }
            }
        }
        function parseString(chr) {
            var stringQuote = chr;
            while (!eof()) {
                chr = next();
                if (chr === stringQuote) {
                    break;
                }
            }
        }
        var warn$1;
        var RANGE_TOKEN = "__r";
        var CHECKBOX_RADIO_TOKEN = "__c";
        function model(el, dir, _warn) {
            warn$1 = _warn;
            var value = dir.value;
            var modifiers = dir.modifiers;
            var tag = el.tag;
            var type = el.attrsMap.type;
            if (false) {
                var dynamicType = el.attrsMap["v-bind:type"] || el.attrsMap[":type"];
                if (tag === "input" && dynamicType) {
                    warn$1('<input :type="' + dynamicType + '" v-model="' + value + '">:\n' + "v-model does not support dynamic input types. Use v-if branches instead.");
                }
                if (tag === "input" && type === "file") {
                    warn$1("<" + el.tag + ' v-model="' + value + '" type="file">:\n' + "File inputs are read only. Use a v-on:change listener instead.");
                }
            }
            if (tag === "select") {
                genSelect(el, value, modifiers);
            } else if (tag === "input" && type === "checkbox") {
                genCheckboxModel(el, value, modifiers);
            } else if (tag === "input" && type === "radio") {
                genRadioModel(el, value, modifiers);
            } else if (tag === "input" || tag === "textarea") {
                genDefaultModel(el, value, modifiers);
            } else if (!config.isReservedTag(tag)) {
                genComponentModel(el, value, modifiers);
                return false;
            } else if (false) {
                warn$1("<" + el.tag + ' v-model="' + value + '">: ' + "v-model is not supported on this element type. " + "If you are working with contenteditable, it's recommended to " + "wrap a library dedicated for that purpose inside a custom component.");
            }
            return true;
        }
        function genCheckboxModel(el, value, modifiers) {
            var number = modifiers && modifiers.number;
            var valueBinding = getBindingAttr(el, "value") || "null";
            var trueValueBinding = getBindingAttr(el, "true-value") || "true";
            var falseValueBinding = getBindingAttr(el, "false-value") || "false";
            addProp(el, "checked", "Array.isArray(" + value + ")" + "?_i(" + value + "," + valueBinding + ")>-1" + (trueValueBinding === "true" ? ":(" + value + ")" : ":_q(" + value + "," + trueValueBinding + ")"));
            addHandler(el, CHECKBOX_RADIO_TOKEN, "var $$a=" + value + "," + "$$el=$event.target," + "$$c=$$el.checked?(" + trueValueBinding + "):(" + falseValueBinding + ");" + "if(Array.isArray($$a)){" + "var $$v=" + (number ? "_n(" + valueBinding + ")" : valueBinding) + "," + "$$i=_i($$a,$$v);" + "if($$c){$$i<0&&(" + value + "=$$a.concat($$v))}" + "else{$$i>-1&&(" + value + "=$$a.slice(0,$$i).concat($$a.slice($$i+1)))}" + "}else{" + value + "=$$c}", null, true);
        }
        function genRadioModel(el, value, modifiers) {
            var number = modifiers && modifiers.number;
            var valueBinding = getBindingAttr(el, "value") || "null";
            valueBinding = number ? "_n(" + valueBinding + ")" : valueBinding;
            addProp(el, "checked", "_q(" + value + "," + valueBinding + ")");
            addHandler(el, CHECKBOX_RADIO_TOKEN, genAssignmentCode(value, valueBinding), null, true);
        }
        function genSelect(el, value, modifiers) {
            var number = modifiers && modifiers.number;
            var selectedVal = "Array.prototype.filter" + ".call($event.target.options,function(o){return o.selected})" + '.map(function(o){var val = "_value" in o ? o._value : o.value;' + "return " + (number ? "_n(val)" : "val") + "})";
            var assignment = "$event.target.multiple ? $$selectedVal : $$selectedVal[0]";
            var code = "var $$selectedVal = " + selectedVal + ";";
            code = code + " " + genAssignmentCode(value, assignment);
            addHandler(el, "change", code, null, true);
        }
        function genDefaultModel(el, value, modifiers) {
            var type = el.attrsMap.type;
            var ref = modifiers || {};
            var lazy = ref.lazy;
            var number = ref.number;
            var trim = ref.trim;
            var needCompositionGuard = !lazy && type !== "range";
            var event = lazy ? "change" : type === "range" ? RANGE_TOKEN : "input";
            var valueExpression = "$event.target.value";
            if (trim) {
                valueExpression = "$event.target.value.trim()";
            }
            if (number) {
                valueExpression = "_n(" + valueExpression + ")";
            }
            var code = genAssignmentCode(value, valueExpression);
            if (needCompositionGuard) {
                code = "if($event.target.composing)return;" + code;
            }
            addProp(el, "value", "(" + value + ")");
            addHandler(el, event, code, null, true);
            if (trim || number || type === "number") {
                addHandler(el, "blur", "$forceUpdate()");
            }
        }
        function normalizeEvents(on) {
            var event;
            if (on[RANGE_TOKEN]) {
                event = isIE ? "change" : "input";
                on[event] = [].concat(on[RANGE_TOKEN], on[event] || []);
                delete on[RANGE_TOKEN];
            }
            if (on[CHECKBOX_RADIO_TOKEN]) {
                event = isChrome ? "click" : "change";
                on[event] = [].concat(on[CHECKBOX_RADIO_TOKEN], on[event] || []);
                delete on[CHECKBOX_RADIO_TOKEN];
            }
        }
        var target$1;
        function add$1(event, handler, once, capture) {
            if (once) {
                var oldHandler = handler;
                var _target = target$1;
                handler = function(ev) {
                    var res = arguments.length === 1 ? oldHandler(ev) : oldHandler.apply(null, arguments);
                    if (res !== null) {
                        remove$2(event, handler, capture, _target);
                    }
                };
            }
            target$1.addEventListener(event, handler, capture);
        }
        function remove$2(event, handler, capture, _target) {
            (_target || target$1).removeEventListener(event, handler, capture);
        }
        function updateDOMListeners(oldVnode, vnode) {
            if (!oldVnode.data.on && !vnode.data.on) {
                return;
            }
            var on = vnode.data.on || {};
            var oldOn = oldVnode.data.on || {};
            target$1 = vnode.elm;
            normalizeEvents(on);
            updateListeners(on, oldOn, add$1, remove$2, vnode.context);
        }
        var events = {
            create: updateDOMListeners,
            update: updateDOMListeners
        };
        function updateDOMProps(oldVnode, vnode) {
            if (!oldVnode.data.domProps && !vnode.data.domProps) {
                return;
            }
            var key, cur;
            var elm = vnode.elm;
            var oldProps = oldVnode.data.domProps || {};
            var props = vnode.data.domProps || {};
            if (props.__ob__) {
                props = vnode.data.domProps = extend({}, props);
            }
            for (key in oldProps) {
                if (props[key] == null) {
                    elm[key] = "";
                }
            }
            for (key in props) {
                cur = props[key];
                if (key === "textContent" || key === "innerHTML") {
                    if (vnode.children) {
                        vnode.children.length = 0;
                    }
                    if (cur === oldProps[key]) {
                        continue;
                    }
                }
                if (key === "value") {
                    elm._value = cur;
                    var strCur = cur == null ? "" : String(cur);
                    if (shouldUpdateValue(elm, vnode, strCur)) {
                        elm.value = strCur;
                    }
                } else {
                    elm[key] = cur;
                }
            }
        }
        function shouldUpdateValue(elm, vnode, checkVal) {
            return !elm.composing && (vnode.tag === "option" || isDirty(elm, checkVal) || isInputChanged(elm, checkVal));
        }
        function isDirty(elm, checkVal) {
            return document.activeElement !== elm && elm.value !== checkVal;
        }
        function isInputChanged(elm, newVal) {
            var value = elm.value;
            var modifiers = elm._vModifiers;
            if (modifiers && modifiers.number || elm.type === "number") {
                return toNumber(value) !== toNumber(newVal);
            }
            if (modifiers && modifiers.trim) {
                return value.trim() !== newVal.trim();
            }
            return value !== newVal;
        }
        var domProps = {
            create: updateDOMProps,
            update: updateDOMProps
        };
        var parseStyleText = cached(function(cssText) {
            var res = {};
            var listDelimiter = /;(?![^(]*\))/g;
            var propertyDelimiter = /:(.+)/;
            cssText.split(listDelimiter).forEach(function(item) {
                if (item) {
                    var tmp = item.split(propertyDelimiter);
                    tmp.length > 1 && (res[tmp[0].trim()] = tmp[1].trim());
                }
            });
            return res;
        });
        function normalizeStyleData(data) {
            var style = normalizeStyleBinding(data.style);
            return data.staticStyle ? extend(data.staticStyle, style) : style;
        }
        function normalizeStyleBinding(bindingStyle) {
            if (Array.isArray(bindingStyle)) {
                return toObject(bindingStyle);
            }
            if (typeof bindingStyle === "string") {
                return parseStyleText(bindingStyle);
            }
            return bindingStyle;
        }
        function getStyle(vnode, checkChild) {
            var res = {};
            var styleData;
            if (checkChild) {
                var childNode = vnode;
                while (childNode.componentInstance) {
                    childNode = childNode.componentInstance._vnode;
                    if (childNode.data && (styleData = normalizeStyleData(childNode.data))) {
                        extend(res, styleData);
                    }
                }
            }
            if (styleData = normalizeStyleData(vnode.data)) {
                extend(res, styleData);
            }
            var parentNode = vnode;
            while (parentNode = parentNode.parent) {
                if (parentNode.data && (styleData = normalizeStyleData(parentNode.data))) {
                    extend(res, styleData);
                }
            }
            return res;
        }
        var cssVarRE = /^--/;
        var importantRE = /\s*!important$/;
        var setProp = function(el, name, val) {
            if (cssVarRE.test(name)) {
                el.style.setProperty(name, val);
            } else if (importantRE.test(val)) {
                el.style.setProperty(name, val.replace(importantRE, ""), "important");
            } else {
                el.style[normalize(name)] = val;
            }
        };
        var prefixes = [ "Webkit", "Moz", "ms" ];
        var testEl;
        var normalize = cached(function(prop) {
            testEl = testEl || document.createElement("div");
            prop = camelize(prop);
            if (prop !== "filter" && prop in testEl.style) {
                return prop;
            }
            var upper = prop.charAt(0).toUpperCase() + prop.slice(1);
            for (var i = 0; i < prefixes.length; i++) {
                var prefixed = prefixes[i] + upper;
                if (prefixed in testEl.style) {
                    return prefixed;
                }
            }
        });
        function updateStyle(oldVnode, vnode) {
            var data = vnode.data;
            var oldData = oldVnode.data;
            if (!data.staticStyle && !data.style && !oldData.staticStyle && !oldData.style) {
                return;
            }
            var cur, name;
            var el = vnode.elm;
            var oldStaticStyle = oldVnode.data.staticStyle;
            var oldStyleBinding = oldVnode.data.style || {};
            var oldStyle = oldStaticStyle || oldStyleBinding;
            var style = normalizeStyleBinding(vnode.data.style) || {};
            vnode.data.style = style.__ob__ ? extend({}, style) : style;
            var newStyle = getStyle(vnode, true);
            for (name in oldStyle) {
                if (newStyle[name] == null) {
                    setProp(el, name, "");
                }
            }
            for (name in newStyle) {
                cur = newStyle[name];
                if (cur !== oldStyle[name]) {
                    setProp(el, name, cur == null ? "" : cur);
                }
            }
        }
        var style = {
            create: updateStyle,
            update: updateStyle
        };
        function addClass(el, cls) {
            if (!cls || !(cls = cls.trim())) {
                return;
            }
            if (el.classList) {
                if (cls.indexOf(" ") > -1) {
                    cls.split(/\s+/).forEach(function(c) {
                        return el.classList.add(c);
                    });
                } else {
                    el.classList.add(cls);
                }
            } else {
                var cur = " " + (el.getAttribute("class") || "") + " ";
                if (cur.indexOf(" " + cls + " ") < 0) {
                    el.setAttribute("class", (cur + cls).trim());
                }
            }
        }
        function removeClass(el, cls) {
            if (!cls || !(cls = cls.trim())) {
                return;
            }
            if (el.classList) {
                if (cls.indexOf(" ") > -1) {
                    cls.split(/\s+/).forEach(function(c) {
                        return el.classList.remove(c);
                    });
                } else {
                    el.classList.remove(cls);
                }
            } else {
                var cur = " " + (el.getAttribute("class") || "") + " ";
                var tar = " " + cls + " ";
                while (cur.indexOf(tar) >= 0) {
                    cur = cur.replace(tar, " ");
                }
                el.setAttribute("class", cur.trim());
            }
        }
        function resolveTransition(def$$1) {
            if (!def$$1) {
                return;
            }
            if (typeof def$$1 === "object") {
                var res = {};
                if (def$$1.css !== false) {
                    extend(res, autoCssTransition(def$$1.name || "v"));
                }
                extend(res, def$$1);
                return res;
            } else if (typeof def$$1 === "string") {
                return autoCssTransition(def$$1);
            }
        }
        var autoCssTransition = cached(function(name) {
            return {
                enterClass: name + "-enter",
                enterToClass: name + "-enter-to",
                enterActiveClass: name + "-enter-active",
                leaveClass: name + "-leave",
                leaveToClass: name + "-leave-to",
                leaveActiveClass: name + "-leave-active"
            };
        });
        var hasTransition = inBrowser && !isIE9;
        var TRANSITION = "transition";
        var ANIMATION = "animation";
        var transitionProp = "transition";
        var transitionEndEvent = "transitionend";
        var animationProp = "animation";
        var animationEndEvent = "animationend";
        if (hasTransition) {
            if (window.ontransitionend === undefined && window.onwebkittransitionend !== undefined) {
                transitionProp = "WebkitTransition";
                transitionEndEvent = "webkitTransitionEnd";
            }
            if (window.onanimationend === undefined && window.onwebkitanimationend !== undefined) {
                animationProp = "WebkitAnimation";
                animationEndEvent = "webkitAnimationEnd";
            }
        }
        var raf = inBrowser && window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : setTimeout;
        function nextFrame(fn) {
            raf(function() {
                raf(fn);
            });
        }
        function addTransitionClass(el, cls) {
            (el._transitionClasses || (el._transitionClasses = [])).push(cls);
            addClass(el, cls);
        }
        function removeTransitionClass(el, cls) {
            if (el._transitionClasses) {
                remove(el._transitionClasses, cls);
            }
            removeClass(el, cls);
        }
        function whenTransitionEnds(el, expectedType, cb) {
            var ref = getTransitionInfo(el, expectedType);
            var type = ref.type;
            var timeout = ref.timeout;
            var propCount = ref.propCount;
            if (!type) {
                return cb();
            }
            var event = type === TRANSITION ? transitionEndEvent : animationEndEvent;
            var ended = 0;
            var end = function() {
                el.removeEventListener(event, onEnd);
                cb();
            };
            var onEnd = function(e) {
                if (e.target === el) {
                    if (++ended >= propCount) {
                        end();
                    }
                }
            };
            setTimeout(function() {
                if (ended < propCount) {
                    end();
                }
            }, timeout + 1);
            el.addEventListener(event, onEnd);
        }
        var transformRE = /\b(transform|all)(,|$)/;
        function getTransitionInfo(el, expectedType) {
            var styles = window.getComputedStyle(el);
            var transitionDelays = styles[transitionProp + "Delay"].split(", ");
            var transitionDurations = styles[transitionProp + "Duration"].split(", ");
            var transitionTimeout = getTimeout(transitionDelays, transitionDurations);
            var animationDelays = styles[animationProp + "Delay"].split(", ");
            var animationDurations = styles[animationProp + "Duration"].split(", ");
            var animationTimeout = getTimeout(animationDelays, animationDurations);
            var type;
            var timeout = 0;
            var propCount = 0;
            if (expectedType === TRANSITION) {
                if (transitionTimeout > 0) {
                    type = TRANSITION;
                    timeout = transitionTimeout;
                    propCount = transitionDurations.length;
                }
            } else if (expectedType === ANIMATION) {
                if (animationTimeout > 0) {
                    type = ANIMATION;
                    timeout = animationTimeout;
                    propCount = animationDurations.length;
                }
            } else {
                timeout = Math.max(transitionTimeout, animationTimeout);
                type = timeout > 0 ? transitionTimeout > animationTimeout ? TRANSITION : ANIMATION : null;
                propCount = type ? type === TRANSITION ? transitionDurations.length : animationDurations.length : 0;
            }
            var hasTransform = type === TRANSITION && transformRE.test(styles[transitionProp + "Property"]);
            return {
                type: type,
                timeout: timeout,
                propCount: propCount,
                hasTransform: hasTransform
            };
        }
        function getTimeout(delays, durations) {
            while (delays.length < durations.length) {
                delays = delays.concat(delays);
            }
            return Math.max.apply(null, durations.map(function(d, i) {
                return toMs(d) + toMs(delays[i]);
            }));
        }
        function toMs(s) {
            return Number(s.slice(0, -1)) * 1e3;
        }
        function enter(vnode, toggleDisplay) {
            var el = vnode.elm;
            if (el._leaveCb) {
                el._leaveCb.cancelled = true;
                el._leaveCb();
            }
            var data = resolveTransition(vnode.data.transition);
            if (!data) {
                return;
            }
            if (el._enterCb || el.nodeType !== 1) {
                return;
            }
            var css = data.css;
            var type = data.type;
            var enterClass = data.enterClass;
            var enterToClass = data.enterToClass;
            var enterActiveClass = data.enterActiveClass;
            var appearClass = data.appearClass;
            var appearToClass = data.appearToClass;
            var appearActiveClass = data.appearActiveClass;
            var beforeEnter = data.beforeEnter;
            var enter = data.enter;
            var afterEnter = data.afterEnter;
            var enterCancelled = data.enterCancelled;
            var beforeAppear = data.beforeAppear;
            var appear = data.appear;
            var afterAppear = data.afterAppear;
            var appearCancelled = data.appearCancelled;
            var duration = data.duration;
            var context = activeInstance;
            var transitionNode = activeInstance.$vnode;
            while (transitionNode && transitionNode.parent) {
                transitionNode = transitionNode.parent;
                context = transitionNode.context;
            }
            var isAppear = !context._isMounted || !vnode.isRootInsert;
            if (isAppear && !appear && appear !== "") {
                return;
            }
            var startClass = isAppear && appearClass ? appearClass : enterClass;
            var activeClass = isAppear && appearActiveClass ? appearActiveClass : enterActiveClass;
            var toClass = isAppear && appearToClass ? appearToClass : enterToClass;
            var beforeEnterHook = isAppear ? beforeAppear || beforeEnter : beforeEnter;
            var enterHook = isAppear ? typeof appear === "function" ? appear : enter : enter;
            var afterEnterHook = isAppear ? afterAppear || afterEnter : afterEnter;
            var enterCancelledHook = isAppear ? appearCancelled || enterCancelled : enterCancelled;
            var explicitEnterDuration = toNumber(isObject(duration) ? duration.enter : duration);
            if (false) {
                checkDuration(explicitEnterDuration, "enter", vnode);
            }
            var expectsCSS = css !== false && !isIE9;
            var userWantsControl = getHookArgumentsLength(enterHook);
            var cb = el._enterCb = once(function() {
                if (expectsCSS) {
                    removeTransitionClass(el, toClass);
                    removeTransitionClass(el, activeClass);
                }
                if (cb.cancelled) {
                    if (expectsCSS) {
                        removeTransitionClass(el, startClass);
                    }
                    enterCancelledHook && enterCancelledHook(el);
                } else {
                    afterEnterHook && afterEnterHook(el);
                }
                el._enterCb = null;
            });
            if (!vnode.data.show) {
                mergeVNodeHook(vnode.data.hook || (vnode.data.hook = {}), "insert", function() {
                    var parent = el.parentNode;
                    var pendingNode = parent && parent._pending && parent._pending[vnode.key];
                    if (pendingNode && pendingNode.tag === vnode.tag && pendingNode.elm._leaveCb) {
                        pendingNode.elm._leaveCb();
                    }
                    enterHook && enterHook(el, cb);
                });
            }
            beforeEnterHook && beforeEnterHook(el);
            if (expectsCSS) {
                addTransitionClass(el, startClass);
                addTransitionClass(el, activeClass);
                nextFrame(function() {
                    addTransitionClass(el, toClass);
                    removeTransitionClass(el, startClass);
                    if (!cb.cancelled && !userWantsControl) {
                        if (isValidDuration(explicitEnterDuration)) {
                            setTimeout(cb, explicitEnterDuration);
                        } else {
                            whenTransitionEnds(el, type, cb);
                        }
                    }
                });
            }
            if (vnode.data.show) {
                toggleDisplay && toggleDisplay();
                enterHook && enterHook(el, cb);
            }
            if (!expectsCSS && !userWantsControl) {
                cb();
            }
        }
        function leave(vnode, rm) {
            var el = vnode.elm;
            if (el._enterCb) {
                el._enterCb.cancelled = true;
                el._enterCb();
            }
            var data = resolveTransition(vnode.data.transition);
            if (!data) {
                return rm();
            }
            if (el._leaveCb || el.nodeType !== 1) {
                return;
            }
            var css = data.css;
            var type = data.type;
            var leaveClass = data.leaveClass;
            var leaveToClass = data.leaveToClass;
            var leaveActiveClass = data.leaveActiveClass;
            var beforeLeave = data.beforeLeave;
            var leave = data.leave;
            var afterLeave = data.afterLeave;
            var leaveCancelled = data.leaveCancelled;
            var delayLeave = data.delayLeave;
            var duration = data.duration;
            var expectsCSS = css !== false && !isIE9;
            var userWantsControl = getHookArgumentsLength(leave);
            var explicitLeaveDuration = toNumber(isObject(duration) ? duration.leave : duration);
            if (false) {
                checkDuration(explicitLeaveDuration, "leave", vnode);
            }
            var cb = el._leaveCb = once(function() {
                if (el.parentNode && el.parentNode._pending) {
                    el.parentNode._pending[vnode.key] = null;
                }
                if (expectsCSS) {
                    removeTransitionClass(el, leaveToClass);
                    removeTransitionClass(el, leaveActiveClass);
                }
                if (cb.cancelled) {
                    if (expectsCSS) {
                        removeTransitionClass(el, leaveClass);
                    }
                    leaveCancelled && leaveCancelled(el);
                } else {
                    rm();
                    afterLeave && afterLeave(el);
                }
                el._leaveCb = null;
            });
            if (delayLeave) {
                delayLeave(performLeave);
            } else {
                performLeave();
            }
            function performLeave() {
                if (cb.cancelled) {
                    return;
                }
                if (!vnode.data.show) {
                    (el.parentNode._pending || (el.parentNode._pending = {}))[vnode.key] = vnode;
                }
                beforeLeave && beforeLeave(el);
                if (expectsCSS) {
                    addTransitionClass(el, leaveClass);
                    addTransitionClass(el, leaveActiveClass);
                    nextFrame(function() {
                        addTransitionClass(el, leaveToClass);
                        removeTransitionClass(el, leaveClass);
                        if (!cb.cancelled && !userWantsControl) {
                            if (isValidDuration(explicitLeaveDuration)) {
                                setTimeout(cb, explicitLeaveDuration);
                            } else {
                                whenTransitionEnds(el, type, cb);
                            }
                        }
                    });
                }
                leave && leave(el, cb);
                if (!expectsCSS && !userWantsControl) {
                    cb();
                }
            }
        }
        function checkDuration(val, name, vnode) {
            if (typeof val !== "number") {
                warn("<transition> explicit " + name + " duration is not a valid number - " + "got " + JSON.stringify(val) + ".", vnode.context);
            } else if (isNaN(val)) {
                warn("<transition> explicit " + name + " duration is NaN - " + "the duration expression might be incorrect.", vnode.context);
            }
        }
        function isValidDuration(val) {
            return typeof val === "number" && !isNaN(val);
        }
        function getHookArgumentsLength(fn) {
            if (!fn) {
                return false;
            }
            var invokerFns = fn.fns;
            if (invokerFns) {
                return getHookArgumentsLength(Array.isArray(invokerFns) ? invokerFns[0] : invokerFns);
            } else {
                return (fn._length || fn.length) > 1;
            }
        }
        function _enter(_, vnode) {
            if (!vnode.data.show) {
                enter(vnode);
            }
        }
        var transition = inBrowser ? {
            create: _enter,
            activate: _enter,
            remove: function remove$$1(vnode, rm) {
                if (!vnode.data.show) {
                    leave(vnode, rm);
                } else {
                    rm();
                }
            }
        } : {};
        var platformModules = [ attrs, klass, events, domProps, style, transition ];
        var modules = platformModules.concat(baseModules);
        var patch = createPatchFunction({
            nodeOps: nodeOps,
            modules: modules
        });
        if (isIE9) {
            document.addEventListener("selectionchange", function() {
                var el = document.activeElement;
                if (el && el.vmodel) {
                    trigger(el, "input");
                }
            });
        }
        var model$1 = {
            inserted: function inserted(el, binding, vnode) {
                if (vnode.tag === "select") {
                    var cb = function() {
                        setSelected(el, binding, vnode.context);
                    };
                    cb();
                    if (isIE || isEdge) {
                        setTimeout(cb, 0);
                    }
                } else if (vnode.tag === "textarea" || el.type === "text" || el.type === "password") {
                    el._vModifiers = binding.modifiers;
                    if (!binding.modifiers.lazy) {
                        if (!isAndroid) {
                            el.addEventListener("compositionstart", onCompositionStart);
                            el.addEventListener("compositionend", onCompositionEnd);
                        }
                        if (isIE9) {
                            el.vmodel = true;
                        }
                    }
                }
            },
            componentUpdated: function componentUpdated(el, binding, vnode) {
                if (vnode.tag === "select") {
                    setSelected(el, binding, vnode.context);
                    var needReset = el.multiple ? binding.value.some(function(v) {
                        return hasNoMatchingOption(v, el.options);
                    }) : binding.value !== binding.oldValue && hasNoMatchingOption(binding.value, el.options);
                    if (needReset) {
                        trigger(el, "change");
                    }
                }
            }
        };
        function setSelected(el, binding, vm) {
            var value = binding.value;
            var isMultiple = el.multiple;
            if (isMultiple && !Array.isArray(value)) {
                "production" !== "production" && warn('<select multiple v-model="' + binding.expression + '"> ' + "expects an Array value for its binding, but got " + Object.prototype.toString.call(value).slice(8, -1), vm);
                return;
            }
            var selected, option;
            for (var i = 0, l = el.options.length; i < l; i++) {
                option = el.options[i];
                if (isMultiple) {
                    selected = looseIndexOf(value, getValue(option)) > -1;
                    if (option.selected !== selected) {
                        option.selected = selected;
                    }
                } else {
                    if (looseEqual(getValue(option), value)) {
                        if (el.selectedIndex !== i) {
                            el.selectedIndex = i;
                        }
                        return;
                    }
                }
            }
            if (!isMultiple) {
                el.selectedIndex = -1;
            }
        }
        function hasNoMatchingOption(value, options) {
            for (var i = 0, l = options.length; i < l; i++) {
                if (looseEqual(getValue(options[i]), value)) {
                    return false;
                }
            }
            return true;
        }
        function getValue(option) {
            return "_value" in option ? option._value : option.value;
        }
        function onCompositionStart(e) {
            e.target.composing = true;
        }
        function onCompositionEnd(e) {
            e.target.composing = false;
            trigger(e.target, "input");
        }
        function trigger(el, type) {
            var e = document.createEvent("HTMLEvents");
            e.initEvent(type, true, true);
            el.dispatchEvent(e);
        }
        function locateNode(vnode) {
            return vnode.componentInstance && (!vnode.data || !vnode.data.transition) ? locateNode(vnode.componentInstance._vnode) : vnode;
        }
        var show = {
            bind: function bind(el, ref, vnode) {
                var value = ref.value;
                vnode = locateNode(vnode);
                var transition = vnode.data && vnode.data.transition;
                var originalDisplay = el.__vOriginalDisplay = el.style.display === "none" ? "" : el.style.display;
                if (value && transition && !isIE9) {
                    vnode.data.show = true;
                    enter(vnode, function() {
                        el.style.display = originalDisplay;
                    });
                } else {
                    el.style.display = value ? originalDisplay : "none";
                }
            },
            update: function update(el, ref, vnode) {
                var value = ref.value;
                var oldValue = ref.oldValue;
                if (value === oldValue) {
                    return;
                }
                vnode = locateNode(vnode);
                var transition = vnode.data && vnode.data.transition;
                if (transition && !isIE9) {
                    vnode.data.show = true;
                    if (value) {
                        enter(vnode, function() {
                            el.style.display = el.__vOriginalDisplay;
                        });
                    } else {
                        leave(vnode, function() {
                            el.style.display = "none";
                        });
                    }
                } else {
                    el.style.display = value ? el.__vOriginalDisplay : "none";
                }
            },
            unbind: function unbind(el, binding, vnode, oldVnode, isDestroy) {
                if (!isDestroy) {
                    el.style.display = el.__vOriginalDisplay;
                }
            }
        };
        var platformDirectives = {
            model: model$1,
            show: show
        };
        var transitionProps = {
            name: String,
            appear: Boolean,
            css: Boolean,
            mode: String,
            type: String,
            enterClass: String,
            leaveClass: String,
            enterToClass: String,
            leaveToClass: String,
            enterActiveClass: String,
            leaveActiveClass: String,
            appearClass: String,
            appearActiveClass: String,
            appearToClass: String,
            duration: [ Number, String, Object ]
        };
        function getRealChild(vnode) {
            var compOptions = vnode && vnode.componentOptions;
            if (compOptions && compOptions.Ctor.options.abstract) {
                return getRealChild(getFirstComponentChild(compOptions.children));
            } else {
                return vnode;
            }
        }
        function extractTransitionData(comp) {
            var data = {};
            var options = comp.$options;
            for (var key in options.propsData) {
                data[key] = comp[key];
            }
            var listeners = options._parentListeners;
            for (var key$1 in listeners) {
                data[camelize(key$1)] = listeners[key$1];
            }
            return data;
        }
        function placeholder(h, rawChild) {
            return /\d-keep-alive$/.test(rawChild.tag) ? h("keep-alive") : null;
        }
        function hasParentTransition(vnode) {
            while (vnode = vnode.parent) {
                if (vnode.data.transition) {
                    return true;
                }
            }
        }
        function isSameChild(child, oldChild) {
            return oldChild.key === child.key && oldChild.tag === child.tag;
        }
        var Transition = {
            name: "transition",
            props: transitionProps,
            abstract: true,
            render: function render(h) {
                var this$1 = this;
                var children = this.$slots.default;
                if (!children) {
                    return;
                }
                children = children.filter(function(c) {
                    return c.tag;
                });
                if (!children.length) {
                    return;
                }
                if (false) {
                    warn("<transition> can only be used on a single element. Use " + "<transition-group> for lists.", this.$parent);
                }
                var mode = this.mode;
                if (false) {
                    warn("invalid <transition> mode: " + mode, this.$parent);
                }
                var rawChild = children[0];
                if (hasParentTransition(this.$vnode)) {
                    return rawChild;
                }
                var child = getRealChild(rawChild);
                if (!child) {
                    return rawChild;
                }
                if (this._leaving) {
                    return placeholder(h, rawChild);
                }
                var id = "__transition-" + this._uid + "-";
                child.key = child.key == null ? id + child.tag : isPrimitive(child.key) ? String(child.key).indexOf(id) === 0 ? child.key : id + child.key : child.key;
                var data = (child.data || (child.data = {})).transition = extractTransitionData(this);
                var oldRawChild = this._vnode;
                var oldChild = getRealChild(oldRawChild);
                if (child.data.directives && child.data.directives.some(function(d) {
                    return d.name === "show";
                })) {
                    child.data.show = true;
                }
                if (oldChild && oldChild.data && !isSameChild(child, oldChild)) {
                    var oldData = oldChild && (oldChild.data.transition = extend({}, data));
                    if (mode === "out-in") {
                        this._leaving = true;
                        mergeVNodeHook(oldData, "afterLeave", function() {
                            this$1._leaving = false;
                            this$1.$forceUpdate();
                        });
                        return placeholder(h, rawChild);
                    } else if (mode === "in-out") {
                        var delayedLeave;
                        var performLeave = function() {
                            delayedLeave();
                        };
                        mergeVNodeHook(data, "afterEnter", performLeave);
                        mergeVNodeHook(data, "enterCancelled", performLeave);
                        mergeVNodeHook(oldData, "delayLeave", function(leave) {
                            delayedLeave = leave;
                        });
                    }
                }
                return rawChild;
            }
        };
        var props = extend({
            tag: String,
            moveClass: String
        }, transitionProps);
        delete props.mode;
        var TransitionGroup = {
            props: props,
            render: function render(h) {
                var tag = this.tag || this.$vnode.data.tag || "span";
                var map = Object.create(null);
                var prevChildren = this.prevChildren = this.children;
                var rawChildren = this.$slots.default || [];
                var children = this.children = [];
                var transitionData = extractTransitionData(this);
                for (var i = 0; i < rawChildren.length; i++) {
                    var c = rawChildren[i];
                    if (c.tag) {
                        if (c.key != null && String(c.key).indexOf("__vlist") !== 0) {
                            children.push(c);
                            map[c.key] = c;
                            (c.data || (c.data = {})).transition = transitionData;
                        } else if (false) {
                            var opts = c.componentOptions;
                            var name = opts ? opts.Ctor.options.name || opts.tag || "" : c.tag;
                            warn("<transition-group> children must be keyed: <" + name + ">");
                        }
                    }
                }
                if (prevChildren) {
                    var kept = [];
                    var removed = [];
                    for (var i$1 = 0; i$1 < prevChildren.length; i$1++) {
                        var c$1 = prevChildren[i$1];
                        c$1.data.transition = transitionData;
                        c$1.data.pos = c$1.elm.getBoundingClientRect();
                        if (map[c$1.key]) {
                            kept.push(c$1);
                        } else {
                            removed.push(c$1);
                        }
                    }
                    this.kept = h(tag, null, kept);
                    this.removed = removed;
                }
                return h(tag, null, children);
            },
            beforeUpdate: function beforeUpdate() {
                this.__patch__(this._vnode, this.kept, false, true);
                this._vnode = this.kept;
            },
            updated: function updated() {
                var children = this.prevChildren;
                var moveClass = this.moveClass || (this.name || "v") + "-move";
                if (!children.length || !this.hasMove(children[0].elm, moveClass)) {
                    return;
                }
                children.forEach(callPendingCbs);
                children.forEach(recordPosition);
                children.forEach(applyTranslation);
                var body = document.body;
                var f = body.offsetHeight;
                children.forEach(function(c) {
                    if (c.data.moved) {
                        var el = c.elm;
                        var s = el.style;
                        addTransitionClass(el, moveClass);
                        s.transform = s.WebkitTransform = s.transitionDuration = "";
                        el.addEventListener(transitionEndEvent, el._moveCb = function cb(e) {
                            if (!e || /transform$/.test(e.propertyName)) {
                                el.removeEventListener(transitionEndEvent, cb);
                                el._moveCb = null;
                                removeTransitionClass(el, moveClass);
                            }
                        });
                    }
                });
            },
            methods: {
                hasMove: function hasMove(el, moveClass) {
                    if (!hasTransition) {
                        return false;
                    }
                    if (this._hasMove != null) {
                        return this._hasMove;
                    }
                    var clone = el.cloneNode();
                    if (el._transitionClasses) {
                        el._transitionClasses.forEach(function(cls) {
                            removeClass(clone, cls);
                        });
                    }
                    addClass(clone, moveClass);
                    clone.style.display = "none";
                    this.$el.appendChild(clone);
                    var info = getTransitionInfo(clone);
                    this.$el.removeChild(clone);
                    return this._hasMove = info.hasTransform;
                }
            }
        };
        function callPendingCbs(c) {
            if (c.elm._moveCb) {
                c.elm._moveCb();
            }
            if (c.elm._enterCb) {
                c.elm._enterCb();
            }
        }
        function recordPosition(c) {
            c.data.newPos = c.elm.getBoundingClientRect();
        }
        function applyTranslation(c) {
            var oldPos = c.data.pos;
            var newPos = c.data.newPos;
            var dx = oldPos.left - newPos.left;
            var dy = oldPos.top - newPos.top;
            if (dx || dy) {
                c.data.moved = true;
                var s = c.elm.style;
                s.transform = s.WebkitTransform = "translate(" + dx + "px," + dy + "px)";
                s.transitionDuration = "0s";
            }
        }
        var platformComponents = {
            Transition: Transition,
            TransitionGroup: TransitionGroup
        };
        Vue$3.config.mustUseProp = mustUseProp;
        Vue$3.config.isReservedTag = isReservedTag;
        Vue$3.config.getTagNamespace = getTagNamespace;
        Vue$3.config.isUnknownElement = isUnknownElement;
        extend(Vue$3.options.directives, platformDirectives);
        extend(Vue$3.options.components, platformComponents);
        Vue$3.prototype.__patch__ = inBrowser ? patch : noop;
        Vue$3.prototype.$mount = function(el, hydrating) {
            el = el && inBrowser ? query(el) : undefined;
            return mountComponent(this, el, hydrating);
        };
        setTimeout(function() {
            if (config.devtools) {
                if (devtools) {
                    devtools.emit("init", Vue$3);
                } else if (false) {
                    console[console.info ? "info" : "log"]("Download the Vue Devtools extension for a better development experience:\n" + "https://github.com/vuejs/vue-devtools");
                }
            }
            if (false) {
                console[console.info ? "info" : "log"]("You are running Vue in development mode.\n" + "Make sure to turn on production mode when deploying for production.\n" + "See more tips at https://vuejs.org/guide/deployment.html");
            }
        }, 0);
        function shouldDecode(content, encoded) {
            var div = document.createElement("div");
            div.innerHTML = '<div a="' + content + '">';
            return div.innerHTML.indexOf(encoded) > 0;
        }
        var shouldDecodeNewlines = inBrowser ? shouldDecode("\n", "&#10;") : false;
        var isUnaryTag = makeMap("area,base,br,col,embed,frame,hr,img,input,isindex,keygen," + "link,meta,param,source,track,wbr");
        var canBeLeftOpenTag = makeMap("colgroup,dd,dt,li,options,p,td,tfoot,th,thead,tr,source");
        var isNonPhrasingTag = makeMap("address,article,aside,base,blockquote,body,caption,col,colgroup,dd," + "details,dialog,div,dl,dt,fieldset,figcaption,figure,footer,form," + "h1,h2,h3,h4,h5,h6,head,header,hgroup,hr,html,legend,li,menuitem,meta," + "optgroup,option,param,rp,rt,source,style,summary,tbody,td,tfoot,th,thead," + "title,tr,track");
        var decoder;
        function decode(html) {
            decoder = decoder || document.createElement("div");
            decoder.innerHTML = html;
            return decoder.textContent;
        }
        var singleAttrIdentifier = /([^\s"'<>\/=]+)/;
        var singleAttrAssign = /(?:=)/;
        var singleAttrValues = [ /"([^"]*)"+/.source, /'([^']*)'+/.source, /([^\s"'=<>`]+)/.source ];
        var attribute = new RegExp("^\\s*" + singleAttrIdentifier.source + "(?:\\s*(" + singleAttrAssign.source + ")" + "\\s*(?:" + singleAttrValues.join("|") + "))?");
        var ncname = "[a-zA-Z_][\\w\\-\\.]*";
        var qnameCapture = "((?:" + ncname + "\\:)?" + ncname + ")";
        var startTagOpen = new RegExp("^<" + qnameCapture);
        var startTagClose = /^\s*(\/?)>/;
        var endTag = new RegExp("^<\\/" + qnameCapture + "[^>]*>");
        var doctype = /^<!DOCTYPE [^>]+>/i;
        var comment = /^<!--/;
        var conditionalComment = /^<!\[/;
        var IS_REGEX_CAPTURING_BROKEN = false;
        "x".replace(/x(.)?/g, function(m, g) {
            IS_REGEX_CAPTURING_BROKEN = g === "";
        });
        var isPlainTextElement = makeMap("script,style,textarea", true);
        var reCache = {};
        var decodingMap = {
            "&lt;": "<",
            "&gt;": ">",
            "&quot;": '"',
            "&amp;": "&",
            "&#10;": "\n"
        };
        var encodedAttr = /&(?:lt|gt|quot|amp);/g;
        var encodedAttrWithNewLines = /&(?:lt|gt|quot|amp|#10);/g;
        function decodeAttr(value, shouldDecodeNewlines) {
            var re = shouldDecodeNewlines ? encodedAttrWithNewLines : encodedAttr;
            return value.replace(re, function(match) {
                return decodingMap[match];
            });
        }
        function parseHTML(html, options) {
            var stack = [];
            var expectHTML = options.expectHTML;
            var isUnaryTag$$1 = options.isUnaryTag || no;
            var canBeLeftOpenTag$$1 = options.canBeLeftOpenTag || no;
            var index = 0;
            var last, lastTag;
            while (html) {
                last = html;
                if (!lastTag || !isPlainTextElement(lastTag)) {
                    var textEnd = html.indexOf("<");
                    if (textEnd === 0) {
                        if (comment.test(html)) {
                            var commentEnd = html.indexOf("-->");
                            if (commentEnd >= 0) {
                                advance(commentEnd + 3);
                                continue;
                            }
                        }
                        if (conditionalComment.test(html)) {
                            var conditionalEnd = html.indexOf("]>");
                            if (conditionalEnd >= 0) {
                                advance(conditionalEnd + 2);
                                continue;
                            }
                        }
                        var doctypeMatch = html.match(doctype);
                        if (doctypeMatch) {
                            advance(doctypeMatch[0].length);
                            continue;
                        }
                        var endTagMatch = html.match(endTag);
                        if (endTagMatch) {
                            var curIndex = index;
                            advance(endTagMatch[0].length);
                            parseEndTag(endTagMatch[1], curIndex, index);
                            continue;
                        }
                        var startTagMatch = parseStartTag();
                        if (startTagMatch) {
                            handleStartTag(startTagMatch);
                            continue;
                        }
                    }
                    var text = void 0, rest$1 = void 0, next = void 0;
                    if (textEnd >= 0) {
                        rest$1 = html.slice(textEnd);
                        while (!endTag.test(rest$1) && !startTagOpen.test(rest$1) && !comment.test(rest$1) && !conditionalComment.test(rest$1)) {
                            next = rest$1.indexOf("<", 1);
                            if (next < 0) {
                                break;
                            }
                            textEnd += next;
                            rest$1 = html.slice(textEnd);
                        }
                        text = html.substring(0, textEnd);
                        advance(textEnd);
                    }
                    if (textEnd < 0) {
                        text = html;
                        html = "";
                    }
                    if (options.chars && text) {
                        options.chars(text);
                    }
                } else {
                    var stackedTag = lastTag.toLowerCase();
                    var reStackedTag = reCache[stackedTag] || (reCache[stackedTag] = new RegExp("([\\s\\S]*?)(</" + stackedTag + "[^>]*>)", "i"));
                    var endTagLength = 0;
                    var rest = html.replace(reStackedTag, function(all, text, endTag) {
                        endTagLength = endTag.length;
                        if (!isPlainTextElement(stackedTag) && stackedTag !== "noscript") {
                            text = text.replace(/<!--([\s\S]*?)-->/g, "$1").replace(/<!\[CDATA\[([\s\S]*?)]]>/g, "$1");
                        }
                        if (options.chars) {
                            options.chars(text);
                        }
                        return "";
                    });
                    index += html.length - rest.length;
                    html = rest;
                    parseEndTag(stackedTag, index - endTagLength, index);
                }
                if (html === last) {
                    options.chars && options.chars(html);
                    if (false) {
                        options.warn('Mal-formatted tag at end of template: "' + html + '"');
                    }
                    break;
                }
            }
            parseEndTag();
            function advance(n) {
                index += n;
                html = html.substring(n);
            }
            function parseStartTag() {
                var start = html.match(startTagOpen);
                if (start) {
                    var match = {
                        tagName: start[1],
                        attrs: [],
                        start: index
                    };
                    advance(start[0].length);
                    var end, attr;
                    while (!(end = html.match(startTagClose)) && (attr = html.match(attribute))) {
                        advance(attr[0].length);
                        match.attrs.push(attr);
                    }
                    if (end) {
                        match.unarySlash = end[1];
                        advance(end[0].length);
                        match.end = index;
                        return match;
                    }
                }
            }
            function handleStartTag(match) {
                var tagName = match.tagName;
                var unarySlash = match.unarySlash;
                if (expectHTML) {
                    if (lastTag === "p" && isNonPhrasingTag(tagName)) {
                        parseEndTag(lastTag);
                    }
                    if (canBeLeftOpenTag$$1(tagName) && lastTag === tagName) {
                        parseEndTag(tagName);
                    }
                }
                var unary = isUnaryTag$$1(tagName) || tagName === "html" && lastTag === "head" || !!unarySlash;
                var l = match.attrs.length;
                var attrs = new Array(l);
                for (var i = 0; i < l; i++) {
                    var args = match.attrs[i];
                    if (IS_REGEX_CAPTURING_BROKEN && args[0].indexOf('""') === -1) {
                        if (args[3] === "") {
                            delete args[3];
                        }
                        if (args[4] === "") {
                            delete args[4];
                        }
                        if (args[5] === "") {
                            delete args[5];
                        }
                    }
                    var value = args[3] || args[4] || args[5] || "";
                    attrs[i] = {
                        name: args[1],
                        value: decodeAttr(value, options.shouldDecodeNewlines)
                    };
                }
                if (!unary) {
                    stack.push({
                        tag: tagName,
                        lowerCasedTag: tagName.toLowerCase(),
                        attrs: attrs
                    });
                    lastTag = tagName;
                }
                if (options.start) {
                    options.start(tagName, attrs, unary, match.start, match.end);
                }
            }
            function parseEndTag(tagName, start, end) {
                var pos, lowerCasedTagName;
                if (start == null) {
                    start = index;
                }
                if (end == null) {
                    end = index;
                }
                if (tagName) {
                    lowerCasedTagName = tagName.toLowerCase();
                }
                if (tagName) {
                    for (pos = stack.length - 1; pos >= 0; pos--) {
                        if (stack[pos].lowerCasedTag === lowerCasedTagName) {
                            break;
                        }
                    }
                } else {
                    pos = 0;
                }
                if (pos >= 0) {
                    for (var i = stack.length - 1; i >= pos; i--) {
                        if (false) {
                            options.warn("tag <" + stack[i].tag + "> has no matching end tag.");
                        }
                        if (options.end) {
                            options.end(stack[i].tag, start, end);
                        }
                    }
                    stack.length = pos;
                    lastTag = pos && stack[pos - 1].tag;
                } else if (lowerCasedTagName === "br") {
                    if (options.start) {
                        options.start(tagName, [], true, start, end);
                    }
                } else if (lowerCasedTagName === "p") {
                    if (options.start) {
                        options.start(tagName, [], false, start, end);
                    }
                    if (options.end) {
                        options.end(tagName, start, end);
                    }
                }
            }
        }
        var defaultTagRE = /\{\{((?:.|\n)+?)\}\}/g;
        var regexEscapeRE = /[-.*+?^${}()|[\]\/\\]/g;
        var buildRegex = cached(function(delimiters) {
            var open = delimiters[0].replace(regexEscapeRE, "\\$&");
            var close = delimiters[1].replace(regexEscapeRE, "\\$&");
            return new RegExp(open + "((?:.|\\n)+?)" + close, "g");
        });
        function parseText(text, delimiters) {
            var tagRE = delimiters ? buildRegex(delimiters) : defaultTagRE;
            if (!tagRE.test(text)) {
                return;
            }
            var tokens = [];
            var lastIndex = tagRE.lastIndex = 0;
            var match, index;
            while (match = tagRE.exec(text)) {
                index = match.index;
                if (index > lastIndex) {
                    tokens.push(JSON.stringify(text.slice(lastIndex, index)));
                }
                var exp = parseFilters(match[1].trim());
                tokens.push("_s(" + exp + ")");
                lastIndex = index + match[0].length;
            }
            if (lastIndex < text.length) {
                tokens.push(JSON.stringify(text.slice(lastIndex)));
            }
            return tokens.join("+");
        }
        var onRE = /^@|^v-on:/;
        var dirRE = /^v-|^@|^:/;
        var forAliasRE = /(.*?)\s+(?:in|of)\s+(.*)/;
        var forIteratorRE = /\((\{[^}]*\}|[^,]*),([^,]*)(?:,([^,]*))?\)/;
        var argRE = /:(.*)$/;
        var bindRE = /^:|^v-bind:/;
        var modifierRE = /\.[^.]+/g;
        var decodeHTMLCached = cached(decode);
        var warn$2;
        var delimiters;
        var transforms;
        var preTransforms;
        var postTransforms;
        var platformIsPreTag;
        var platformMustUseProp;
        var platformGetTagNamespace;
        function parse(template, options) {
            warn$2 = options.warn || baseWarn;
            platformGetTagNamespace = options.getTagNamespace || no;
            platformMustUseProp = options.mustUseProp || no;
            platformIsPreTag = options.isPreTag || no;
            preTransforms = pluckModuleFunction(options.modules, "preTransformNode");
            transforms = pluckModuleFunction(options.modules, "transformNode");
            postTransforms = pluckModuleFunction(options.modules, "postTransformNode");
            delimiters = options.delimiters;
            var stack = [];
            var preserveWhitespace = options.preserveWhitespace !== false;
            var root;
            var currentParent;
            var inVPre = false;
            var inPre = false;
            var warned = false;
            function warnOnce(msg) {
                if (!warned) {
                    warned = true;
                    warn$2(msg);
                }
            }
            function endPre(element) {
                if (element.pre) {
                    inVPre = false;
                }
                if (platformIsPreTag(element.tag)) {
                    inPre = false;
                }
            }
            parseHTML(template, {
                warn: warn$2,
                expectHTML: options.expectHTML,
                isUnaryTag: options.isUnaryTag,
                canBeLeftOpenTag: options.canBeLeftOpenTag,
                shouldDecodeNewlines: options.shouldDecodeNewlines,
                start: function start(tag, attrs, unary) {
                    var ns = currentParent && currentParent.ns || platformGetTagNamespace(tag);
                    if (isIE && ns === "svg") {
                        attrs = guardIESVGBug(attrs);
                    }
                    var element = {
                        type: 1,
                        tag: tag,
                        attrsList: attrs,
                        attrsMap: makeAttrsMap(attrs),
                        parent: currentParent,
                        children: []
                    };
                    if (ns) {
                        element.ns = ns;
                    }
                    if (isForbiddenTag(element) && !isServerRendering()) {
                        element.forbidden = true;
                        "production" !== "production" && warn$2("Templates should only be responsible for mapping the state to the " + "UI. Avoid placing tags with side-effects in your templates, such as " + "<" + tag + ">" + ", as they will not be parsed.");
                    }
                    for (var i = 0; i < preTransforms.length; i++) {
                        preTransforms[i](element, options);
                    }
                    if (!inVPre) {
                        processPre(element);
                        if (element.pre) {
                            inVPre = true;
                        }
                    }
                    if (platformIsPreTag(element.tag)) {
                        inPre = true;
                    }
                    if (inVPre) {
                        processRawAttrs(element);
                    } else {
                        processFor(element);
                        processIf(element);
                        processOnce(element);
                        processKey(element);
                        element.plain = !element.key && !attrs.length;
                        processRef(element);
                        processSlot(element);
                        processComponent(element);
                        for (var i$1 = 0; i$1 < transforms.length; i$1++) {
                            transforms[i$1](element, options);
                        }
                        processAttrs(element);
                    }
                    function checkRootConstraints(el) {
                        if (false) {
                            if (el.tag === "slot" || el.tag === "template") {
                                warnOnce("Cannot use <" + el.tag + "> as component root element because it may " + "contain multiple nodes.");
                            }
                            if (el.attrsMap.hasOwnProperty("v-for")) {
                                warnOnce("Cannot use v-for on stateful component root element because " + "it renders multiple elements.");
                            }
                        }
                    }
                    if (!root) {
                        root = element;
                        checkRootConstraints(root);
                    } else if (!stack.length) {
                        if (root.if && (element.elseif || element.else)) {
                            checkRootConstraints(element);
                            addIfCondition(root, {
                                exp: element.elseif,
                                block: element
                            });
                        } else if (false) {
                            warnOnce("Component template should contain exactly one root element. " + "If you are using v-if on multiple elements, " + "use v-else-if to chain them instead.");
                        }
                    }
                    if (currentParent && !element.forbidden) {
                        if (element.elseif || element.else) {
                            processIfConditions(element, currentParent);
                        } else if (element.slotScope) {
                            currentParent.plain = false;
                            var name = element.slotTarget || '"default"';
                            (currentParent.scopedSlots || (currentParent.scopedSlots = {}))[name] = element;
                        } else {
                            currentParent.children.push(element);
                            element.parent = currentParent;
                        }
                    }
                    if (!unary) {
                        currentParent = element;
                        stack.push(element);
                    } else {
                        endPre(element);
                    }
                    for (var i$2 = 0; i$2 < postTransforms.length; i$2++) {
                        postTransforms[i$2](element, options);
                    }
                },
                end: function end() {
                    var element = stack[stack.length - 1];
                    var lastNode = element.children[element.children.length - 1];
                    if (lastNode && lastNode.type === 3 && lastNode.text === " " && !inPre) {
                        element.children.pop();
                    }
                    stack.length -= 1;
                    currentParent = stack[stack.length - 1];
                    endPre(element);
                },
                chars: function chars(text) {
                    if (!currentParent) {
                        if (false) {
                            if (text === template) {
                                warnOnce("Component template requires a root element, rather than just text.");
                            } else if (text = text.trim()) {
                                warnOnce('text "' + text + '" outside root element will be ignored.');
                            }
                        }
                        return;
                    }
                    if (isIE && currentParent.tag === "textarea" && currentParent.attrsMap.placeholder === text) {
                        return;
                    }
                    var children = currentParent.children;
                    text = inPre || text.trim() ? decodeHTMLCached(text) : preserveWhitespace && children.length ? " " : "";
                    if (text) {
                        var expression;
                        if (!inVPre && text !== " " && (expression = parseText(text, delimiters))) {
                            children.push({
                                type: 2,
                                expression: expression,
                                text: text
                            });
                        } else if (text !== " " || !children.length || children[children.length - 1].text !== " ") {
                            children.push({
                                type: 3,
                                text: text
                            });
                        }
                    }
                }
            });
            return root;
        }
        function processPre(el) {
            if (getAndRemoveAttr(el, "v-pre") != null) {
                el.pre = true;
            }
        }
        function processRawAttrs(el) {
            var l = el.attrsList.length;
            if (l) {
                var attrs = el.attrs = new Array(l);
                for (var i = 0; i < l; i++) {
                    attrs[i] = {
                        name: el.attrsList[i].name,
                        value: JSON.stringify(el.attrsList[i].value)
                    };
                }
            } else if (!el.pre) {
                el.plain = true;
            }
        }
        function processKey(el) {
            var exp = getBindingAttr(el, "key");
            if (exp) {
                if (false) {
                    warn$2("<template> cannot be keyed. Place the key on real elements instead.");
                }
                el.key = exp;
            }
        }
        function processRef(el) {
            var ref = getBindingAttr(el, "ref");
            if (ref) {
                el.ref = ref;
                el.refInFor = checkInFor(el);
            }
        }
        function processFor(el) {
            var exp;
            if (exp = getAndRemoveAttr(el, "v-for")) {
                var inMatch = exp.match(forAliasRE);
                if (!inMatch) {
                    "production" !== "production" && warn$2("Invalid v-for expression: " + exp);
                    return;
                }
                el.for = inMatch[2].trim();
                var alias = inMatch[1].trim();
                var iteratorMatch = alias.match(forIteratorRE);
                if (iteratorMatch) {
                    el.alias = iteratorMatch[1].trim();
                    el.iterator1 = iteratorMatch[2].trim();
                    if (iteratorMatch[3]) {
                        el.iterator2 = iteratorMatch[3].trim();
                    }
                } else {
                    el.alias = alias;
                }
            }
        }
        function processIf(el) {
            var exp = getAndRemoveAttr(el, "v-if");
            if (exp) {
                el.if = exp;
                addIfCondition(el, {
                    exp: exp,
                    block: el
                });
            } else {
                if (getAndRemoveAttr(el, "v-else") != null) {
                    el.else = true;
                }
                var elseif = getAndRemoveAttr(el, "v-else-if");
                if (elseif) {
                    el.elseif = elseif;
                }
            }
        }
        function processIfConditions(el, parent) {
            var prev = findPrevElement(parent.children);
            if (prev && prev.if) {
                addIfCondition(prev, {
                    exp: el.elseif,
                    block: el
                });
            } else if (false) {
                warn$2("v-" + (el.elseif ? 'else-if="' + el.elseif + '"' : "else") + " " + "used on element <" + el.tag + "> without corresponding v-if.");
            }
        }
        function findPrevElement(children) {
            var i = children.length;
            while (i--) {
                if (children[i].type === 1) {
                    return children[i];
                } else {
                    if (false) {
                        warn$2('text "' + children[i].text.trim() + '" between v-if and v-else(-if) ' + "will be ignored.");
                    }
                    children.pop();
                }
            }
        }
        function addIfCondition(el, condition) {
            if (!el.ifConditions) {
                el.ifConditions = [];
            }
            el.ifConditions.push(condition);
        }
        function processOnce(el) {
            var once$$1 = getAndRemoveAttr(el, "v-once");
            if (once$$1 != null) {
                el.once = true;
            }
        }
        function processSlot(el) {
            if (el.tag === "slot") {
                el.slotName = getBindingAttr(el, "name");
                if (false) {
                    warn$2("`key` does not work on <slot> because slots are abstract outlets " + "and can possibly expand into multiple elements. " + "Use the key on a wrapping element instead.");
                }
            } else {
                var slotTarget = getBindingAttr(el, "slot");
                if (slotTarget) {
                    el.slotTarget = slotTarget === '""' ? '"default"' : slotTarget;
                }
                if (el.tag === "template") {
                    el.slotScope = getAndRemoveAttr(el, "scope");
                }
            }
        }
        function processComponent(el) {
            var binding;
            if (binding = getBindingAttr(el, "is")) {
                el.component = binding;
            }
            if (getAndRemoveAttr(el, "inline-template") != null) {
                el.inlineTemplate = true;
            }
        }
        function processAttrs(el) {
            var list = el.attrsList;
            var i, l, name, rawName, value, modifiers, isProp;
            for (i = 0, l = list.length; i < l; i++) {
                name = rawName = list[i].name;
                value = list[i].value;
                if (dirRE.test(name)) {
                    el.hasBindings = true;
                    modifiers = parseModifiers(name);
                    if (modifiers) {
                        name = name.replace(modifierRE, "");
                    }
                    if (bindRE.test(name)) {
                        name = name.replace(bindRE, "");
                        value = parseFilters(value);
                        isProp = false;
                        if (modifiers) {
                            if (modifiers.prop) {
                                isProp = true;
                                name = camelize(name);
                                if (name === "innerHtml") {
                                    name = "innerHTML";
                                }
                            }
                            if (modifiers.camel) {
                                name = camelize(name);
                            }
                        }
                        if (isProp || platformMustUseProp(el.tag, el.attrsMap.type, name)) {
                            addProp(el, name, value);
                        } else {
                            addAttr(el, name, value);
                        }
                    } else if (onRE.test(name)) {
                        name = name.replace(onRE, "");
                        addHandler(el, name, value, modifiers);
                    } else {
                        name = name.replace(dirRE, "");
                        var argMatch = name.match(argRE);
                        var arg = argMatch && argMatch[1];
                        if (arg) {
                            name = name.slice(0, -(arg.length + 1));
                        }
                        addDirective(el, name, rawName, value, arg, modifiers);
                        if (false) {
                            checkForAliasModel(el, value);
                        }
                    }
                } else {
                    if (false) {
                        var expression = parseText(value, delimiters);
                        if (expression) {
                            warn$2(name + '="' + value + '": ' + "Interpolation inside attributes has been removed. " + "Use v-bind or the colon shorthand instead. For example, " + 'instead of <div id="{{ val }}">, use <div :id="val">.');
                        }
                    }
                    addAttr(el, name, JSON.stringify(value));
                }
            }
        }
        function checkInFor(el) {
            var parent = el;
            while (parent) {
                if (parent.for !== undefined) {
                    return true;
                }
                parent = parent.parent;
            }
            return false;
        }
        function parseModifiers(name) {
            var match = name.match(modifierRE);
            if (match) {
                var ret = {};
                match.forEach(function(m) {
                    ret[m.slice(1)] = true;
                });
                return ret;
            }
        }
        function makeAttrsMap(attrs) {
            var map = {};
            for (var i = 0, l = attrs.length; i < l; i++) {
                if (false) {
                    warn$2("duplicate attribute: " + attrs[i].name);
                }
                map[attrs[i].name] = attrs[i].value;
            }
            return map;
        }
        function isForbiddenTag(el) {
            return el.tag === "style" || el.tag === "script" && (!el.attrsMap.type || el.attrsMap.type === "text/javascript");
        }
        var ieNSBug = /^xmlns:NS\d+/;
        var ieNSPrefix = /^NS\d+:/;
        function guardIESVGBug(attrs) {
            var res = [];
            for (var i = 0; i < attrs.length; i++) {
                var attr = attrs[i];
                if (!ieNSBug.test(attr.name)) {
                    attr.name = attr.name.replace(ieNSPrefix, "");
                    res.push(attr);
                }
            }
            return res;
        }
        function checkForAliasModel(el, value) {
            var _el = el;
            while (_el) {
                if (_el.for && _el.alias === value) {
                    warn$2("<" + el.tag + ' v-model="' + value + '">: ' + "You are binding v-model directly to a v-for iteration alias. " + "This will not be able to modify the v-for source array because " + "writing to the alias is like modifying a function local variable. " + "Consider using an array of objects and use v-model on an object property instead.");
                }
                _el = _el.parent;
            }
        }
        var isStaticKey;
        var isPlatformReservedTag;
        var genStaticKeysCached = cached(genStaticKeys$1);
        function optimize(root, options) {
            if (!root) {
                return;
            }
            isStaticKey = genStaticKeysCached(options.staticKeys || "");
            isPlatformReservedTag = options.isReservedTag || no;
            markStatic$1(root);
            markStaticRoots(root, false);
        }
        function genStaticKeys$1(keys) {
            return makeMap("type,tag,attrsList,attrsMap,plain,parent,children,attrs" + (keys ? "," + keys : ""));
        }
        function markStatic$1(node) {
            node.static = isStatic(node);
            if (node.type === 1) {
                if (!isPlatformReservedTag(node.tag) && node.tag !== "slot" && node.attrsMap["inline-template"] == null) {
                    return;
                }
                for (var i = 0, l = node.children.length; i < l; i++) {
                    var child = node.children[i];
                    markStatic$1(child);
                    if (!child.static) {
                        node.static = false;
                    }
                }
            }
        }
        function markStaticRoots(node, isInFor) {
            if (node.type === 1) {
                if (node.static || node.once) {
                    node.staticInFor = isInFor;
                }
                if (node.static && node.children.length && !(node.children.length === 1 && node.children[0].type === 3)) {
                    node.staticRoot = true;
                    return;
                } else {
                    node.staticRoot = false;
                }
                if (node.children) {
                    for (var i = 0, l = node.children.length; i < l; i++) {
                        markStaticRoots(node.children[i], isInFor || !!node.for);
                    }
                }
                if (node.ifConditions) {
                    walkThroughConditionsBlocks(node.ifConditions, isInFor);
                }
            }
        }
        function walkThroughConditionsBlocks(conditionBlocks, isInFor) {
            for (var i = 1, len = conditionBlocks.length; i < len; i++) {
                markStaticRoots(conditionBlocks[i].block, isInFor);
            }
        }
        function isStatic(node) {
            if (node.type === 2) {
                return false;
            }
            if (node.type === 3) {
                return true;
            }
            return !!(node.pre || !node.hasBindings && !node.if && !node.for && !isBuiltInTag(node.tag) && isPlatformReservedTag(node.tag) && !isDirectChildOfTemplateFor(node) && Object.keys(node).every(isStaticKey));
        }
        function isDirectChildOfTemplateFor(node) {
            while (node.parent) {
                node = node.parent;
                if (node.tag !== "template") {
                    return false;
                }
                if (node.for) {
                    return true;
                }
            }
            return false;
        }
        var fnExpRE = /^\s*([\w$_]+|\([^)]*?\))\s*=>|^function\s*\(/;
        var simplePathRE = /^\s*[A-Za-z_$][\w$]*(?:\.[A-Za-z_$][\w$]*|\['.*?']|\[".*?"]|\[\d+]|\[[A-Za-z_$][\w$]*])*\s*$/;
        var keyCodes = {
            esc: 27,
            tab: 9,
            enter: 13,
            space: 32,
            up: 38,
            left: 37,
            right: 39,
            down: 40,
            delete: [ 8, 46 ]
        };
        var genGuard = function(condition) {
            return "if(" + condition + ")return null;";
        };
        var modifierCode = {
            stop: "$event.stopPropagation();",
            prevent: "$event.preventDefault();",
            self: genGuard("$event.target !== $event.currentTarget"),
            ctrl: genGuard("!$event.ctrlKey"),
            shift: genGuard("!$event.shiftKey"),
            alt: genGuard("!$event.altKey"),
            meta: genGuard("!$event.metaKey"),
            left: genGuard("'button' in $event && $event.button !== 0"),
            middle: genGuard("'button' in $event && $event.button !== 1"),
            right: genGuard("'button' in $event && $event.button !== 2")
        };
        function genHandlers(events, native) {
            var res = native ? "nativeOn:{" : "on:{";
            for (var name in events) {
                res += '"' + name + '":' + genHandler(name, events[name]) + ",";
            }
            return res.slice(0, -1) + "}";
        }
        function genHandler(name, handler) {
            if (!handler) {
                return "function(){}";
            }
            if (Array.isArray(handler)) {
                return "[" + handler.map(function(handler) {
                    return genHandler(name, handler);
                }).join(",") + "]";
            }
            var isMethodPath = simplePathRE.test(handler.value);
            var isFunctionExpression = fnExpRE.test(handler.value);
            if (!handler.modifiers) {
                return isMethodPath || isFunctionExpression ? handler.value : "function($event){" + handler.value + "}";
            } else {
                var code = "";
                var genModifierCode = "";
                var keys = [];
                for (var key in handler.modifiers) {
                    if (modifierCode[key]) {
                        genModifierCode += modifierCode[key];
                        if (keyCodes[key]) {
                            keys.push(key);
                        }
                    } else {
                        keys.push(key);
                    }
                }
                if (keys.length) {
                    code += genKeyFilter(keys);
                }
                if (genModifierCode) {
                    code += genModifierCode;
                }
                var handlerCode = isMethodPath ? handler.value + "($event)" : isFunctionExpression ? "(" + handler.value + ")($event)" : handler.value;
                return "function($event){" + code + handlerCode + "}";
            }
        }
        function genKeyFilter(keys) {
            return "if(!('button' in $event)&&" + keys.map(genFilterCode).join("&&") + ")return null;";
        }
        function genFilterCode(key) {
            var keyVal = parseInt(key, 10);
            if (keyVal) {
                return "$event.keyCode!==" + keyVal;
            }
            var alias = keyCodes[key];
            return "_k($event.keyCode," + JSON.stringify(key) + (alias ? "," + JSON.stringify(alias) : "") + ")";
        }
        function bind$1(el, dir) {
            el.wrapData = function(code) {
                return "_b(" + code + ",'" + el.tag + "'," + dir.value + (dir.modifiers && dir.modifiers.prop ? ",true" : "") + ")";
            };
        }
        var baseDirectives = {
            bind: bind$1,
            cloak: noop
        };
        var warn$3;
        var transforms$1;
        var dataGenFns;
        var platformDirectives$1;
        var isPlatformReservedTag$1;
        var staticRenderFns;
        var onceCount;
        var currentOptions;
        function generate(ast, options) {
            var prevStaticRenderFns = staticRenderFns;
            var currentStaticRenderFns = staticRenderFns = [];
            var prevOnceCount = onceCount;
            onceCount = 0;
            currentOptions = options;
            warn$3 = options.warn || baseWarn;
            transforms$1 = pluckModuleFunction(options.modules, "transformCode");
            dataGenFns = pluckModuleFunction(options.modules, "genData");
            platformDirectives$1 = options.directives || {};
            isPlatformReservedTag$1 = options.isReservedTag || no;
            var code = ast ? genElement(ast) : '_c("div")';
            staticRenderFns = prevStaticRenderFns;
            onceCount = prevOnceCount;
            return {
                render: "with(this){return " + code + "}",
                staticRenderFns: currentStaticRenderFns
            };
        }
        function genElement(el) {
            if (el.staticRoot && !el.staticProcessed) {
                return genStatic(el);
            } else if (el.once && !el.onceProcessed) {
                return genOnce(el);
            } else if (el.for && !el.forProcessed) {
                return genFor(el);
            } else if (el.if && !el.ifProcessed) {
                return genIf(el);
            } else if (el.tag === "template" && !el.slotTarget) {
                return genChildren(el) || "void 0";
            } else if (el.tag === "slot") {
                return genSlot(el);
            } else {
                var code;
                if (el.component) {
                    code = genComponent(el.component, el);
                } else {
                    var data = el.plain ? undefined : genData(el);
                    var children = el.inlineTemplate ? null : genChildren(el, true);
                    code = "_c('" + el.tag + "'" + (data ? "," + data : "") + (children ? "," + children : "") + ")";
                }
                for (var i = 0; i < transforms$1.length; i++) {
                    code = transforms$1[i](el, code);
                }
                return code;
            }
        }
        function genStatic(el) {
            el.staticProcessed = true;
            staticRenderFns.push("with(this){return " + genElement(el) + "}");
            return "_m(" + (staticRenderFns.length - 1) + (el.staticInFor ? ",true" : "") + ")";
        }
        function genOnce(el) {
            el.onceProcessed = true;
            if (el.if && !el.ifProcessed) {
                return genIf(el);
            } else if (el.staticInFor) {
                var key = "";
                var parent = el.parent;
                while (parent) {
                    if (parent.for) {
                        key = parent.key;
                        break;
                    }
                    parent = parent.parent;
                }
                if (!key) {
                    "production" !== "production" && warn$3("v-once can only be used inside v-for that is keyed. ");
                    return genElement(el);
                }
                return "_o(" + genElement(el) + "," + onceCount++ + (key ? "," + key : "") + ")";
            } else {
                return genStatic(el);
            }
        }
        function genIf(el) {
            el.ifProcessed = true;
            return genIfConditions(el.ifConditions.slice());
        }
        function genIfConditions(conditions) {
            if (!conditions.length) {
                return "_e()";
            }
            var condition = conditions.shift();
            if (condition.exp) {
                return "(" + condition.exp + ")?" + genTernaryExp(condition.block) + ":" + genIfConditions(conditions);
            } else {
                return "" + genTernaryExp(condition.block);
            }
            function genTernaryExp(el) {
                return el.once ? genOnce(el) : genElement(el);
            }
        }
        function genFor(el) {
            var exp = el.for;
            var alias = el.alias;
            var iterator1 = el.iterator1 ? "," + el.iterator1 : "";
            var iterator2 = el.iterator2 ? "," + el.iterator2 : "";
            if (false) {
                warn$3("<" + el.tag + ' v-for="' + alias + " in " + exp + '">: component lists rendered with ' + "v-for should have explicit keys. " + "See https://vuejs.org/guide/list.html#key for more info.", true);
            }
            el.forProcessed = true;
            return "_l((" + exp + ")," + "function(" + alias + iterator1 + iterator2 + "){" + "return " + genElement(el) + "})";
        }
        function genData(el) {
            var data = "{";
            var dirs = genDirectives(el);
            if (dirs) {
                data += dirs + ",";
            }
            if (el.key) {
                data += "key:" + el.key + ",";
            }
            if (el.ref) {
                data += "ref:" + el.ref + ",";
            }
            if (el.refInFor) {
                data += "refInFor:true,";
            }
            if (el.pre) {
                data += "pre:true,";
            }
            if (el.component) {
                data += 'tag:"' + el.tag + '",';
            }
            for (var i = 0; i < dataGenFns.length; i++) {
                data += dataGenFns[i](el);
            }
            if (el.attrs) {
                data += "attrs:{" + genProps(el.attrs) + "},";
            }
            if (el.props) {
                data += "domProps:{" + genProps(el.props) + "},";
            }
            if (el.events) {
                data += genHandlers(el.events) + ",";
            }
            if (el.nativeEvents) {
                data += genHandlers(el.nativeEvents, true) + ",";
            }
            if (el.slotTarget) {
                data += "slot:" + el.slotTarget + ",";
            }
            if (el.scopedSlots) {
                data += genScopedSlots(el.scopedSlots) + ",";
            }
            if (el.model) {
                data += "model:{value:" + el.model.value + ",callback:" + el.model.callback + ",expression:" + el.model.expression + "},";
            }
            if (el.inlineTemplate) {
                var inlineTemplate = genInlineTemplate(el);
                if (inlineTemplate) {
                    data += inlineTemplate + ",";
                }
            }
            data = data.replace(/,$/, "") + "}";
            if (el.wrapData) {
                data = el.wrapData(data);
            }
            return data;
        }
        function genDirectives(el) {
            var dirs = el.directives;
            if (!dirs) {
                return;
            }
            var res = "directives:[";
            var hasRuntime = false;
            var i, l, dir, needRuntime;
            for (i = 0, l = dirs.length; i < l; i++) {
                dir = dirs[i];
                needRuntime = true;
                var gen = platformDirectives$1[dir.name] || baseDirectives[dir.name];
                if (gen) {
                    needRuntime = !!gen(el, dir, warn$3);
                }
                if (needRuntime) {
                    hasRuntime = true;
                    res += '{name:"' + dir.name + '",rawName:"' + dir.rawName + '"' + (dir.value ? ",value:(" + dir.value + "),expression:" + JSON.stringify(dir.value) : "") + (dir.arg ? ',arg:"' + dir.arg + '"' : "") + (dir.modifiers ? ",modifiers:" + JSON.stringify(dir.modifiers) : "") + "},";
                }
            }
            if (hasRuntime) {
                return res.slice(0, -1) + "]";
            }
        }
        function genInlineTemplate(el) {
            var ast = el.children[0];
            if (false) {
                warn$3("Inline-template components must have exactly one child element.");
            }
            if (ast.type === 1) {
                var inlineRenderFns = generate(ast, currentOptions);
                return "inlineTemplate:{render:function(){" + inlineRenderFns.render + "},staticRenderFns:[" + inlineRenderFns.staticRenderFns.map(function(code) {
                    return "function(){" + code + "}";
                }).join(",") + "]}";
            }
        }
        function genScopedSlots(slots) {
            return "scopedSlots:_u([" + Object.keys(slots).map(function(key) {
                return genScopedSlot(key, slots[key]);
            }).join(",") + "])";
        }
        function genScopedSlot(key, el) {
            return "[" + key + ",function(" + String(el.attrsMap.scope) + "){" + "return " + (el.tag === "template" ? genChildren(el) || "void 0" : genElement(el)) + "}]";
        }
        function genChildren(el, checkSkip) {
            var children = el.children;
            if (children.length) {
                var el$1 = children[0];
                if (children.length === 1 && el$1.for && el$1.tag !== "template" && el$1.tag !== "slot") {
                    return genElement(el$1);
                }
                var normalizationType = checkSkip ? getNormalizationType(children) : 0;
                return "[" + children.map(genNode).join(",") + "]" + (normalizationType ? "," + normalizationType : "");
            }
        }
        function getNormalizationType(children) {
            var res = 0;
            for (var i = 0; i < children.length; i++) {
                var el = children[i];
                if (el.type !== 1) {
                    continue;
                }
                if (needsNormalization(el) || el.ifConditions && el.ifConditions.some(function(c) {
                    return needsNormalization(c.block);
                })) {
                    res = 2;
                    break;
                }
                if (maybeComponent(el) || el.ifConditions && el.ifConditions.some(function(c) {
                    return maybeComponent(c.block);
                })) {
                    res = 1;
                }
            }
            return res;
        }
        function needsNormalization(el) {
            return el.for !== undefined || el.tag === "template" || el.tag === "slot";
        }
        function maybeComponent(el) {
            return !isPlatformReservedTag$1(el.tag);
        }
        function genNode(node) {
            if (node.type === 1) {
                return genElement(node);
            } else {
                return genText(node);
            }
        }
        function genText(text) {
            return "_v(" + (text.type === 2 ? text.expression : transformSpecialNewlines(JSON.stringify(text.text))) + ")";
        }
        function genSlot(el) {
            var slotName = el.slotName || '"default"';
            var children = genChildren(el);
            var res = "_t(" + slotName + (children ? "," + children : "");
            var attrs = el.attrs && "{" + el.attrs.map(function(a) {
                return camelize(a.name) + ":" + a.value;
            }).join(",") + "}";
            var bind$$1 = el.attrsMap["v-bind"];
            if ((attrs || bind$$1) && !children) {
                res += ",null";
            }
            if (attrs) {
                res += "," + attrs;
            }
            if (bind$$1) {
                res += (attrs ? "" : ",null") + "," + bind$$1;
            }
            return res + ")";
        }
        function genComponent(componentName, el) {
            var children = el.inlineTemplate ? null : genChildren(el, true);
            return "_c(" + componentName + "," + genData(el) + (children ? "," + children : "") + ")";
        }
        function genProps(props) {
            var res = "";
            for (var i = 0; i < props.length; i++) {
                var prop = props[i];
                res += '"' + prop.name + '":' + transformSpecialNewlines(prop.value) + ",";
            }
            return res.slice(0, -1);
        }
        function transformSpecialNewlines(text) {
            return text.replace(/\u2028/g, "\\u2028").replace(/\u2029/g, "\\u2029");
        }
        var prohibitedKeywordRE = new RegExp("\\b" + ("do,if,for,let,new,try,var,case,else,with,await,break,catch,class,const," + "super,throw,while,yield,delete,export,import,return,switch,default," + "extends,finally,continue,debugger,function,arguments").split(",").join("\\b|\\b") + "\\b");
        var unaryOperatorsRE = new RegExp("\\b" + "delete,typeof,void".split(",").join("\\s*\\([^\\)]*\\)|\\b") + "\\s*\\([^\\)]*\\)");
        var identRE = /[A-Za-z_$][\w$]*/;
        var stripStringRE = /'(?:[^'\\]|\\.)*'|"(?:[^"\\]|\\.)*"|`(?:[^`\\]|\\.)*\$\{|\}(?:[^`\\]|\\.)*`|`(?:[^`\\]|\\.)*`/g;
        function detectErrors(ast) {
            var errors = [];
            if (ast) {
                checkNode(ast, errors);
            }
            return errors;
        }
        function checkNode(node, errors) {
            if (node.type === 1) {
                for (var name in node.attrsMap) {
                    if (dirRE.test(name)) {
                        var value = node.attrsMap[name];
                        if (value) {
                            if (name === "v-for") {
                                checkFor(node, 'v-for="' + value + '"', errors);
                            } else if (onRE.test(name)) {
                                checkEvent(value, name + '="' + value + '"', errors);
                            } else {
                                checkExpression(value, name + '="' + value + '"', errors);
                            }
                        }
                    }
                }
                if (node.children) {
                    for (var i = 0; i < node.children.length; i++) {
                        checkNode(node.children[i], errors);
                    }
                }
            } else if (node.type === 2) {
                checkExpression(node.expression, node.text, errors);
            }
        }
        function checkEvent(exp, text, errors) {
            var keywordMatch = exp.replace(stripStringRE, "").match(unaryOperatorsRE);
            if (keywordMatch) {
                errors.push("avoid using JavaScript unary operator as property name: " + '"' + keywordMatch[0] + '" in expression ' + text.trim());
            }
            checkExpression(exp, text, errors);
        }
        function checkFor(node, text, errors) {
            checkExpression(node.for || "", text, errors);
            checkIdentifier(node.alias, "v-for alias", text, errors);
            checkIdentifier(node.iterator1, "v-for iterator", text, errors);
            checkIdentifier(node.iterator2, "v-for iterator", text, errors);
        }
        function checkIdentifier(ident, type, text, errors) {
            if (typeof ident === "string" && !identRE.test(ident)) {
                errors.push("invalid " + type + ' "' + ident + '" in expression: ' + text.trim());
            }
        }
        function checkExpression(exp, text, errors) {
            try {
                new Function("return " + exp);
            } catch (e) {
                var keywordMatch = exp.replace(stripStringRE, "").match(prohibitedKeywordRE);
                if (keywordMatch) {
                    errors.push("avoid using JavaScript keyword as property name: " + '"' + keywordMatch[0] + '" in expression ' + text.trim());
                } else {
                    errors.push("invalid expression: " + text.trim());
                }
            }
        }
        function baseCompile(template, options) {
            var ast = parse(template.trim(), options);
            optimize(ast, options);
            var code = generate(ast, options);
            return {
                ast: ast,
                render: code.render,
                staticRenderFns: code.staticRenderFns
            };
        }
        function makeFunction(code, errors) {
            try {
                return new Function(code);
            } catch (err) {
                errors.push({
                    err: err,
                    code: code
                });
                return noop;
            }
        }
        function createCompiler(baseOptions) {
            var functionCompileCache = Object.create(null);
            function compile(template, options) {
                var finalOptions = Object.create(baseOptions);
                var errors = [];
                var tips = [];
                finalOptions.warn = function(msg, tip$$1) {
                    (tip$$1 ? tips : errors).push(msg);
                };
                if (options) {
                    if (options.modules) {
                        finalOptions.modules = (baseOptions.modules || []).concat(options.modules);
                    }
                    if (options.directives) {
                        finalOptions.directives = extend(Object.create(baseOptions.directives), options.directives);
                    }
                    for (var key in options) {
                        if (key !== "modules" && key !== "directives") {
                            finalOptions[key] = options[key];
                        }
                    }
                }
                var compiled = baseCompile(template, finalOptions);
                if (false) {
                    errors.push.apply(errors, detectErrors(compiled.ast));
                }
                compiled.errors = errors;
                compiled.tips = tips;
                return compiled;
            }
            function compileToFunctions(template, options, vm) {
                options = options || {};
                if (false) {
                    try {
                        new Function("return 1");
                    } catch (e) {
                        if (e.toString().match(/unsafe-eval|CSP/)) {
                            warn("It seems you are using the standalone build of Vue.js in an " + "environment with Content Security Policy that prohibits unsafe-eval. " + "The template compiler cannot work in this environment. Consider " + "relaxing the policy to allow unsafe-eval or pre-compiling your " + "templates into render functions.");
                        }
                    }
                }
                var key = options.delimiters ? String(options.delimiters) + template : template;
                if (functionCompileCache[key]) {
                    return functionCompileCache[key];
                }
                var compiled = compile(template, options);
                if (false) {
                    if (compiled.errors && compiled.errors.length) {
                        warn("Error compiling template:\n\n" + template + "\n\n" + compiled.errors.map(function(e) {
                            return "- " + e;
                        }).join("\n") + "\n", vm);
                    }
                    if (compiled.tips && compiled.tips.length) {
                        compiled.tips.forEach(function(msg) {
                            return tip(msg, vm);
                        });
                    }
                }
                var res = {};
                var fnGenErrors = [];
                res.render = makeFunction(compiled.render, fnGenErrors);
                var l = compiled.staticRenderFns.length;
                res.staticRenderFns = new Array(l);
                for (var i = 0; i < l; i++) {
                    res.staticRenderFns[i] = makeFunction(compiled.staticRenderFns[i], fnGenErrors);
                }
                if (false) {
                    if ((!compiled.errors || !compiled.errors.length) && fnGenErrors.length) {
                        warn("Failed to generate render function:\n\n" + fnGenErrors.map(function(ref) {
                            var err = ref.err;
                            var code = ref.code;
                            return err.toString() + " in\n\n" + code + "\n";
                        }).join("\n"), vm);
                    }
                }
                return functionCompileCache[key] = res;
            }
            return {
                compile: compile,
                compileToFunctions: compileToFunctions
            };
        }
        function transformNode(el, options) {
            var warn = options.warn || baseWarn;
            var staticClass = getAndRemoveAttr(el, "class");
            if (false) {
                var expression = parseText(staticClass, options.delimiters);
                if (expression) {
                    warn('class="' + staticClass + '": ' + "Interpolation inside attributes has been removed. " + "Use v-bind or the colon shorthand instead. For example, " + 'instead of <div class="{{ val }}">, use <div :class="val">.');
                }
            }
            if (staticClass) {
                el.staticClass = JSON.stringify(staticClass);
            }
            var classBinding = getBindingAttr(el, "class", false);
            if (classBinding) {
                el.classBinding = classBinding;
            }
        }
        function genData$1(el) {
            var data = "";
            if (el.staticClass) {
                data += "staticClass:" + el.staticClass + ",";
            }
            if (el.classBinding) {
                data += "class:" + el.classBinding + ",";
            }
            return data;
        }
        var klass$1 = {
            staticKeys: [ "staticClass" ],
            transformNode: transformNode,
            genData: genData$1
        };
        function transformNode$1(el, options) {
            var warn = options.warn || baseWarn;
            var staticStyle = getAndRemoveAttr(el, "style");
            if (staticStyle) {
                if (false) {
                    var expression = parseText(staticStyle, options.delimiters);
                    if (expression) {
                        warn('style="' + staticStyle + '": ' + "Interpolation inside attributes has been removed. " + "Use v-bind or the colon shorthand instead. For example, " + 'instead of <div style="{{ val }}">, use <div :style="val">.');
                    }
                }
                el.staticStyle = JSON.stringify(parseStyleText(staticStyle));
            }
            var styleBinding = getBindingAttr(el, "style", false);
            if (styleBinding) {
                el.styleBinding = styleBinding;
            }
        }
        function genData$2(el) {
            var data = "";
            if (el.staticStyle) {
                data += "staticStyle:" + el.staticStyle + ",";
            }
            if (el.styleBinding) {
                data += "style:(" + el.styleBinding + "),";
            }
            return data;
        }
        var style$1 = {
            staticKeys: [ "staticStyle" ],
            transformNode: transformNode$1,
            genData: genData$2
        };
        var modules$1 = [ klass$1, style$1 ];
        function text(el, dir) {
            if (dir.value) {
                addProp(el, "textContent", "_s(" + dir.value + ")");
            }
        }
        function html(el, dir) {
            if (dir.value) {
                addProp(el, "innerHTML", "_s(" + dir.value + ")");
            }
        }
        var directives$1 = {
            model: model,
            text: text,
            html: html
        };
        var baseOptions = {
            expectHTML: true,
            modules: modules$1,
            directives: directives$1,
            isPreTag: isPreTag,
            isUnaryTag: isUnaryTag,
            mustUseProp: mustUseProp,
            canBeLeftOpenTag: canBeLeftOpenTag,
            isReservedTag: isReservedTag,
            getTagNamespace: getTagNamespace,
            staticKeys: genStaticKeys(modules$1)
        };
        var ref$1 = createCompiler(baseOptions);
        var compileToFunctions = ref$1.compileToFunctions;
        var idToTemplate = cached(function(id) {
            var el = query(id);
            return el && el.innerHTML;
        });
        var mount = Vue$3.prototype.$mount;
        Vue$3.prototype.$mount = function(el, hydrating) {
            el = el && query(el);
            if (el === document.body || el === document.documentElement) {
                "production" !== "production" && warn("Do not mount Vue to <html> or <body> - mount to normal elements instead.");
                return this;
            }
            var options = this.$options;
            if (!options.render) {
                var template = options.template;
                if (template) {
                    if (typeof template === "string") {
                        if (template.charAt(0) === "#") {
                            template = idToTemplate(template);
                            if (false) {
                                warn("Template element not found or is empty: " + options.template, this);
                            }
                        }
                    } else if (template.nodeType) {
                        template = template.innerHTML;
                    } else {
                        if (false) {
                            warn("invalid template option:" + template, this);
                        }
                        return this;
                    }
                } else if (el) {
                    template = getOuterHTML(el);
                }
                if (template) {
                    if (false) {
                        mark("compile");
                    }
                    var ref = compileToFunctions(template, {
                        shouldDecodeNewlines: shouldDecodeNewlines,
                        delimiters: options.delimiters
                    }, this);
                    var render = ref.render;
                    var staticRenderFns = ref.staticRenderFns;
                    options.render = render;
                    options.staticRenderFns = staticRenderFns;
                    if (false) {
                        mark("compile end");
                        measure(this._name + " compile", "compile", "compile end");
                    }
                }
            }
            return mount.call(this, el, hydrating);
        };
        function getOuterHTML(el) {
            if (el.outerHTML) {
                return el.outerHTML;
            } else {
                var container = document.createElement("div");
                container.appendChild(el.cloneNode(true));
                return container.innerHTML;
            }
        }
        Vue$3.compile = compileToFunctions;
        __webpack_exports__["default"] = Vue$3;
    }).call(__webpack_exports__, __webpack_require__(52));
}, function(module, exports, __webpack_require__) {
    "use strict";
    var utils = __webpack_require__(0);
    var bind = __webpack_require__(40);
    var Axios = __webpack_require__(64);
    var defaults = __webpack_require__(17);
    function createInstance(defaultConfig) {
        var context = new Axios(defaultConfig);
        var instance = bind(Axios.prototype.request, context);
        utils.extend(instance, Axios.prototype, context);
        utils.extend(instance, context);
        return instance;
    }
    var axios = createInstance(defaults);
    axios.Axios = Axios;
    axios.create = function create(instanceConfig) {
        return createInstance(utils.merge(defaults, instanceConfig));
    };
    axios.Cancel = __webpack_require__(37);
    axios.CancelToken = __webpack_require__(63);
    axios.isCancel = __webpack_require__(38);
    axios.all = function all(promises) {
        return Promise.all(promises);
    };
    axios.spread = __webpack_require__(78);
    module.exports = axios;
    module.exports.default = axios;
}, function(module, exports, __webpack_require__) {
    "use strict";
    var Cancel = __webpack_require__(37);
    function CancelToken(executor) {
        if (typeof executor !== "function") {
            throw new TypeError("executor must be a function.");
        }
        var resolvePromise;
        this.promise = new Promise(function promiseExecutor(resolve) {
            resolvePromise = resolve;
        });
        var token = this;
        executor(function cancel(message) {
            if (token.reason) {
                return;
            }
            token.reason = new Cancel(message);
            resolvePromise(token.reason);
        });
    }
    CancelToken.prototype.throwIfRequested = function throwIfRequested() {
        if (this.reason) {
            throw this.reason;
        }
    };
    CancelToken.source = function source() {
        var cancel;
        var token = new CancelToken(function executor(c) {
            cancel = c;
        });
        return {
            token: token,
            cancel: cancel
        };
    };
    module.exports = CancelToken;
}, function(module, exports, __webpack_require__) {
    "use strict";
    var defaults = __webpack_require__(17);
    var utils = __webpack_require__(0);
    var InterceptorManager = __webpack_require__(65);
    var dispatchRequest = __webpack_require__(66);
    var isAbsoluteURL = __webpack_require__(74);
    var combineURLs = __webpack_require__(72);
    function Axios(instanceConfig) {
        this.defaults = instanceConfig;
        this.interceptors = {
            request: new InterceptorManager(),
            response: new InterceptorManager()
        };
    }
    Axios.prototype.request = function request(config) {
        if (typeof config === "string") {
            config = utils.merge({
                url: arguments[0]
            }, arguments[1]);
        }
        config = utils.merge(defaults, this.defaults, {
            method: "get"
        }, config);
        if (config.baseURL && !isAbsoluteURL(config.url)) {
            config.url = combineURLs(config.baseURL, config.url);
        }
        var chain = [ dispatchRequest, undefined ];
        var promise = Promise.resolve(config);
        this.interceptors.request.forEach(function unshiftRequestInterceptors(interceptor) {
            chain.unshift(interceptor.fulfilled, interceptor.rejected);
        });
        this.interceptors.response.forEach(function pushResponseInterceptors(interceptor) {
            chain.push(interceptor.fulfilled, interceptor.rejected);
        });
        while (chain.length) {
            promise = promise.then(chain.shift(), chain.shift());
        }
        return promise;
    };
    utils.forEach([ "delete", "get", "head" ], function forEachMethodNoData(method) {
        Axios.prototype[method] = function(url, config) {
            return this.request(utils.merge(config || {}, {
                method: method,
                url: url
            }));
        };
    });
    utils.forEach([ "post", "put", "patch" ], function forEachMethodWithData(method) {
        Axios.prototype[method] = function(url, data, config) {
            return this.request(utils.merge(config || {}, {
                method: method,
                url: url,
                data: data
            }));
        };
    });
    module.exports = Axios;
}, function(module, exports, __webpack_require__) {
    "use strict";
    var utils = __webpack_require__(0);
    function InterceptorManager() {
        this.handlers = [];
    }
    InterceptorManager.prototype.use = function use(fulfilled, rejected) {
        this.handlers.push({
            fulfilled: fulfilled,
            rejected: rejected
        });
        return this.handlers.length - 1;
    };
    InterceptorManager.prototype.eject = function eject(id) {
        if (this.handlers[id]) {
            this.handlers[id] = null;
        }
    };
    InterceptorManager.prototype.forEach = function forEach(fn) {
        utils.forEach(this.handlers, function forEachHandler(h) {
            if (h !== null) {
                fn(h);
            }
        });
    };
    module.exports = InterceptorManager;
}, function(module, exports, __webpack_require__) {
    "use strict";
    var utils = __webpack_require__(0);
    var transformData = __webpack_require__(69);
    var isCancel = __webpack_require__(38);
    var defaults = __webpack_require__(17);
    function throwIfCancellationRequested(config) {
        if (config.cancelToken) {
            config.cancelToken.throwIfRequested();
        }
    }
    module.exports = function dispatchRequest(config) {
        throwIfCancellationRequested(config);
        config.headers = config.headers || {};
        config.data = transformData(config.data, config.headers, config.transformRequest);
        config.headers = utils.merge(config.headers.common || {}, config.headers[config.method] || {}, config.headers || {});
        utils.forEach([ "delete", "get", "head", "post", "put", "patch", "common" ], function cleanHeaderConfig(method) {
            delete config.headers[method];
        });
        var adapter = config.adapter || defaults.adapter;
        return adapter(config).then(function onAdapterResolution(response) {
            throwIfCancellationRequested(config);
            response.data = transformData(response.data, response.headers, config.transformResponse);
            return response;
        }, function onAdapterRejection(reason) {
            if (!isCancel(reason)) {
                throwIfCancellationRequested(config);
                if (reason && reason.response) {
                    reason.response.data = transformData(reason.response.data, reason.response.headers, config.transformResponse);
                }
            }
            return Promise.reject(reason);
        });
    };
}, function(module, exports, __webpack_require__) {
    "use strict";
    module.exports = function enhanceError(error, config, code, response) {
        error.config = config;
        if (code) {
            error.code = code;
        }
        error.response = response;
        return error;
    };
}, function(module, exports, __webpack_require__) {
    "use strict";
    var createError = __webpack_require__(39);
    module.exports = function settle(resolve, reject, response) {
        var validateStatus = response.config.validateStatus;
        if (!response.status || !validateStatus || validateStatus(response.status)) {
            resolve(response);
        } else {
            reject(createError("Request failed with status code " + response.status, response.config, null, response));
        }
    };
}, function(module, exports, __webpack_require__) {
    "use strict";
    var utils = __webpack_require__(0);
    module.exports = function transformData(data, headers, fns) {
        utils.forEach(fns, function transform(fn) {
            data = fn(data, headers);
        });
        return data;
    };
}, function(module, exports, __webpack_require__) {
    "use strict";
    var chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
    function E() {
        this.message = "String contains an invalid character";
    }
    E.prototype = new Error();
    E.prototype.code = 5;
    E.prototype.name = "InvalidCharacterError";
    function btoa(input) {
        var str = String(input);
        var output = "";
        for (var block, charCode, idx = 0, map = chars; str.charAt(idx | 0) || (map = "=", 
        idx % 1); output += map.charAt(63 & block >> 8 - idx % 1 * 8)) {
            charCode = str.charCodeAt(idx += 3 / 4);
            if (charCode > 255) {
                throw new E();
            }
            block = block << 8 | charCode;
        }
        return output;
    }
    module.exports = btoa;
}, function(module, exports, __webpack_require__) {
    "use strict";
    var utils = __webpack_require__(0);
    function encode(val) {
        return encodeURIComponent(val).replace(/%40/gi, "@").replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
    }
    module.exports = function buildURL(url, params, paramsSerializer) {
        if (!params) {
            return url;
        }
        var serializedParams;
        if (paramsSerializer) {
            serializedParams = paramsSerializer(params);
        } else if (utils.isURLSearchParams(params)) {
            serializedParams = params.toString();
        } else {
            var parts = [];
            utils.forEach(params, function serialize(val, key) {
                if (val === null || typeof val === "undefined") {
                    return;
                }
                if (utils.isArray(val)) {
                    key = key + "[]";
                }
                if (!utils.isArray(val)) {
                    val = [ val ];
                }
                utils.forEach(val, function parseValue(v) {
                    if (utils.isDate(v)) {
                        v = v.toISOString();
                    } else if (utils.isObject(v)) {
                        v = JSON.stringify(v);
                    }
                    parts.push(encode(key) + "=" + encode(v));
                });
            });
            serializedParams = parts.join("&");
        }
        if (serializedParams) {
            url += (url.indexOf("?") === -1 ? "?" : "&") + serializedParams;
        }
        return url;
    };
}, function(module, exports, __webpack_require__) {
    "use strict";
    module.exports = function combineURLs(baseURL, relativeURL) {
        return baseURL.replace(/\/+$/, "") + "/" + relativeURL.replace(/^\/+/, "");
    };
}, function(module, exports, __webpack_require__) {
    "use strict";
    var utils = __webpack_require__(0);
    module.exports = utils.isStandardBrowserEnv() ? function standardBrowserEnv() {
        return {
            write: function write(name, value, expires, path, domain, secure) {
                var cookie = [];
                cookie.push(name + "=" + encodeURIComponent(value));
                if (utils.isNumber(expires)) {
                    cookie.push("expires=" + new Date(expires).toGMTString());
                }
                if (utils.isString(path)) {
                    cookie.push("path=" + path);
                }
                if (utils.isString(domain)) {
                    cookie.push("domain=" + domain);
                }
                if (secure === true) {
                    cookie.push("secure");
                }
                document.cookie = cookie.join("; ");
            },
            read: function read(name) {
                var match = document.cookie.match(new RegExp("(^|;\\s*)(" + name + ")=([^;]*)"));
                return match ? decodeURIComponent(match[3]) : null;
            },
            remove: function remove(name) {
                this.write(name, "", Date.now() - 864e5);
            }
        };
    }() : function nonStandardBrowserEnv() {
        return {
            write: function write() {},
            read: function read() {
                return null;
            },
            remove: function remove() {}
        };
    }();
}, function(module, exports, __webpack_require__) {
    "use strict";
    module.exports = function isAbsoluteURL(url) {
        return /^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(url);
    };
}, function(module, exports, __webpack_require__) {
    "use strict";
    var utils = __webpack_require__(0);
    module.exports = utils.isStandardBrowserEnv() ? function standardBrowserEnv() {
        var msie = /(msie|trident)/i.test(navigator.userAgent);
        var urlParsingNode = document.createElement("a");
        var originURL;
        function resolveURL(url) {
            var href = url;
            if (msie) {
                urlParsingNode.setAttribute("href", href);
                href = urlParsingNode.href;
            }
            urlParsingNode.setAttribute("href", href);
            return {
                href: urlParsingNode.href,
                protocol: urlParsingNode.protocol ? urlParsingNode.protocol.replace(/:$/, "") : "",
                host: urlParsingNode.host,
                search: urlParsingNode.search ? urlParsingNode.search.replace(/^\?/, "") : "",
                hash: urlParsingNode.hash ? urlParsingNode.hash.replace(/^#/, "") : "",
                hostname: urlParsingNode.hostname,
                port: urlParsingNode.port,
                pathname: urlParsingNode.pathname.charAt(0) === "/" ? urlParsingNode.pathname : "/" + urlParsingNode.pathname
            };
        }
        originURL = resolveURL(window.location.href);
        return function isURLSameOrigin(requestURL) {
            var parsed = utils.isString(requestURL) ? resolveURL(requestURL) : requestURL;
            return parsed.protocol === originURL.protocol && parsed.host === originURL.host;
        };
    }() : function nonStandardBrowserEnv() {
        return function isURLSameOrigin() {
            return true;
        };
    }();
}, function(module, exports, __webpack_require__) {
    "use strict";
    var utils = __webpack_require__(0);
    module.exports = function normalizeHeaderName(headers, normalizedName) {
        utils.forEach(headers, function processHeader(value, name) {
            if (name !== normalizedName && name.toUpperCase() === normalizedName.toUpperCase()) {
                headers[normalizedName] = value;
                delete headers[name];
            }
        });
    };
}, function(module, exports, __webpack_require__) {
    "use strict";
    var utils = __webpack_require__(0);
    module.exports = function parseHeaders(headers) {
        var parsed = {};
        var key;
        var val;
        var i;
        if (!headers) {
            return parsed;
        }
        utils.forEach(headers.split("\n"), function parser(line) {
            i = line.indexOf(":");
            key = utils.trim(line.substr(0, i)).toLowerCase();
            val = utils.trim(line.substr(i + 1));
            if (key) {
                parsed[key] = parsed[key] ? parsed[key] + ", " + val : val;
            }
        });
        return parsed;
    };
}, function(module, exports, __webpack_require__) {
    "use strict";
    module.exports = function spread(callback) {
        return function wrap(arr) {
            return callback.apply(null, arr);
        };
    };
}, , function(module, exports, __webpack_require__) {
    "use strict";
    var _vue = __webpack_require__(61);
    var _vue2 = _interopRequireDefault(_vue);
    var _vueRouter = __webpack_require__(59);
    var _vueRouter2 = _interopRequireDefault(_vueRouter);
    var _jquery = __webpack_require__(35);
    var _jquery2 = _interopRequireDefault(_jquery);
    var _noty = __webpack_require__(56);
    var _noty2 = _interopRequireDefault(_noty);
    var _axios = __webpack_require__(53);
    var _axios2 = _interopRequireDefault(_axios);
    var _promisePolyfill = __webpack_require__(58);
    var _promisePolyfill2 = _interopRequireDefault(_promisePolyfill);
    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            default: obj
        };
    }
    if (!window.Promise) {
        window.Promise = _promisePolyfill2.default;
    }
    window.jQuery = window.$ = _jquery2.default;
    window.noty = _noty2.default;
    window.axios = _axios2.default;
    window.Vue = _vue2.default;
    window.VueRouter = _vueRouter2.default;
    window.Vue.use(window.VueRouter);
    __webpack_require__(54);
    __webpack_require__(55);
    window.$.noty.defaults = {
        layout: "topRight",
        theme: "relax",
        type: "success",
        text: "",
        dismissQueue: true,
        force: false,
        maxVisible: 5,
        template: '<div class="noty_message"><span class="noty_text"></span><div class="noty_close"></div></div>',
        timeout: 3500,
        progressBar: true,
        animation: {
            open: {
                height: "toggle"
            },
            close: {
                height: "toggle"
            },
            easing: "swing",
            speed: 500
        },
        closeWith: [ "button", "click" ],
        modal: false,
        killer: false,
        callback: {
            onShow: function onShow() {},
            afterShow: function afterShow() {},
            onClose: function onClose() {},
            afterClose: function afterClose() {},
            onCloseClick: function onCloseClick() {}
        },
        buttons: false
    };
    window.showSuccessMessage = function(message) {
        return (0, _noty2.default)({
            text: message,
            type: "success"
        });
    };
    window.showErrorMessage = function(message) {
        return (0, _noty2.default)({
            text: message,
            type: "error",
            timeout: 8e3,
            progressBar: true
        });
    };
}, , , function(module, exports, __webpack_require__) {
    module.exports = {
        default: __webpack_require__(86),
        __esModule: true
    };
}, function(module, exports, __webpack_require__) {
    module.exports = {
        default: __webpack_require__(87),
        __esModule: true
    };
}, function(module, exports, __webpack_require__) {
    "use strict";
    exports.__esModule = true;
    var _iterator = __webpack_require__(84);
    var _iterator2 = _interopRequireDefault(_iterator);
    var _symbol = __webpack_require__(83);
    var _symbol2 = _interopRequireDefault(_symbol);
    var _typeof = typeof _symbol2.default === "function" && typeof _iterator2.default === "symbol" ? function(obj) {
        return typeof obj;
    } : function(obj) {
        return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj;
    };
    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            default: obj
        };
    }
    exports.default = typeof _symbol2.default === "function" && _typeof(_iterator2.default) === "symbol" ? function(obj) {
        return typeof obj === "undefined" ? "undefined" : _typeof(obj);
    } : function(obj) {
        return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof(obj);
    };
}, function(module, exports, __webpack_require__) {
    __webpack_require__(111);
    __webpack_require__(109);
    __webpack_require__(112);
    __webpack_require__(113);
    module.exports = __webpack_require__(20).Symbol;
}, function(module, exports, __webpack_require__) {
    __webpack_require__(110);
    __webpack_require__(114);
    module.exports = __webpack_require__(32).f("iterator");
}, function(module, exports) {
    module.exports = function(it) {
        if (typeof it != "function") throw TypeError(it + " is not a function!");
        return it;
    };
}, function(module, exports) {
    module.exports = function() {};
}, function(module, exports, __webpack_require__) {
    var toIObject = __webpack_require__(3), toLength = __webpack_require__(106), toIndex = __webpack_require__(105);
    module.exports = function(IS_INCLUDES) {
        return function($this, el, fromIndex) {
            var O = toIObject($this), length = toLength(O.length), index = toIndex(fromIndex, length), value;
            if (IS_INCLUDES && el != el) while (length > index) {
                value = O[index++];
                if (value != value) return true;
            } else for (;length > index; index++) if (IS_INCLUDES || index in O) {
                if (O[index] === el) return IS_INCLUDES || index || 0;
            }
            return !IS_INCLUDES && -1;
        };
    };
}, function(module, exports, __webpack_require__) {
    var aFunction = __webpack_require__(88);
    module.exports = function(fn, that, length) {
        aFunction(fn);
        if (that === undefined) return fn;
        switch (length) {
          case 1:
            return function(a) {
                return fn.call(that, a);
            };

          case 2:
            return function(a, b) {
                return fn.call(that, a, b);
            };

          case 3:
            return function(a, b, c) {
                return fn.call(that, a, b, c);
            };
        }
        return function() {
            return fn.apply(that, arguments);
        };
    };
}, function(module, exports, __webpack_require__) {
    var getKeys = __webpack_require__(14), gOPS = __webpack_require__(48), pIE = __webpack_require__(25);
    module.exports = function(it) {
        var result = getKeys(it), getSymbols = gOPS.f;
        if (getSymbols) {
            var symbols = getSymbols(it), isEnum = pIE.f, i = 0, key;
            while (symbols.length > i) if (isEnum.call(it, key = symbols[i++])) result.push(key);
        }
        return result;
    };
}, function(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(1).document && document.documentElement;
}, function(module, exports, __webpack_require__) {
    var cof = __webpack_require__(41);
    module.exports = Object("z").propertyIsEnumerable(0) ? Object : function(it) {
        return cof(it) == "String" ? it.split("") : Object(it);
    };
}, function(module, exports, __webpack_require__) {
    var cof = __webpack_require__(41);
    module.exports = Array.isArray || function isArray(arg) {
        return cof(arg) == "Array";
    };
}, function(module, exports, __webpack_require__) {
    "use strict";
    var create = __webpack_require__(46), descriptor = __webpack_require__(15), setToStringTag = __webpack_require__(26), IteratorPrototype = {};
    __webpack_require__(5)(IteratorPrototype, __webpack_require__(7)("iterator"), function() {
        return this;
    });
    module.exports = function(Constructor, NAME, next) {
        Constructor.prototype = create(IteratorPrototype, {
            next: descriptor(1, next)
        });
        setToStringTag(Constructor, NAME + " Iterator");
    };
}, function(module, exports) {
    module.exports = function(done, value) {
        return {
            value: value,
            done: !!done
        };
    };
}, function(module, exports, __webpack_require__) {
    var getKeys = __webpack_require__(14), toIObject = __webpack_require__(3);
    module.exports = function(object, el) {
        var O = toIObject(object), keys = getKeys(O), length = keys.length, index = 0, key;
        while (length > index) if (O[key = keys[index++]] === el) return key;
    };
}, function(module, exports, __webpack_require__) {
    var META = __webpack_require__(16)("meta"), isObject = __webpack_require__(13), has = __webpack_require__(2), setDesc = __webpack_require__(6).f, id = 0;
    var isExtensible = Object.isExtensible || function() {
        return true;
    };
    var FREEZE = !__webpack_require__(12)(function() {
        return isExtensible(Object.preventExtensions({}));
    });
    var setMeta = function(it) {
        setDesc(it, META, {
            value: {
                i: "O" + ++id,
                w: {}
            }
        });
    };
    var fastKey = function(it, create) {
        if (!isObject(it)) return typeof it == "symbol" ? it : (typeof it == "string" ? "S" : "P") + it;
        if (!has(it, META)) {
            if (!isExtensible(it)) return "F";
            if (!create) return "E";
            setMeta(it);
        }
        return it[META].i;
    };
    var getWeak = function(it, create) {
        if (!has(it, META)) {
            if (!isExtensible(it)) return true;
            if (!create) return false;
            setMeta(it);
        }
        return it[META].w;
    };
    var onFreeze = function(it) {
        if (FREEZE && meta.NEED && isExtensible(it) && !has(it, META)) setMeta(it);
        return it;
    };
    var meta = module.exports = {
        KEY: META,
        NEED: false,
        fastKey: fastKey,
        getWeak: getWeak,
        onFreeze: onFreeze
    };
}, function(module, exports, __webpack_require__) {
    var dP = __webpack_require__(6), anObject = __webpack_require__(11), getKeys = __webpack_require__(14);
    module.exports = __webpack_require__(4) ? Object.defineProperties : function defineProperties(O, Properties) {
        anObject(O);
        var keys = getKeys(Properties), length = keys.length, i = 0, P;
        while (length > i) dP.f(O, P = keys[i++], Properties[P]);
        return O;
    };
}, function(module, exports, __webpack_require__) {
    var pIE = __webpack_require__(25), createDesc = __webpack_require__(15), toIObject = __webpack_require__(3), toPrimitive = __webpack_require__(30), has = __webpack_require__(2), IE8_DOM_DEFINE = __webpack_require__(44), gOPD = Object.getOwnPropertyDescriptor;
    exports.f = __webpack_require__(4) ? gOPD : function getOwnPropertyDescriptor(O, P) {
        O = toIObject(O);
        P = toPrimitive(P, true);
        if (IE8_DOM_DEFINE) try {
            return gOPD(O, P);
        } catch (e) {}
        if (has(O, P)) return createDesc(!pIE.f.call(O, P), O[P]);
    };
}, function(module, exports, __webpack_require__) {
    var toIObject = __webpack_require__(3), gOPN = __webpack_require__(47).f, toString = {}.toString;
    var windowNames = typeof window == "object" && window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : [];
    var getWindowNames = function(it) {
        try {
            return gOPN(it);
        } catch (e) {
            return windowNames.slice();
        }
    };
    module.exports.f = function getOwnPropertyNames(it) {
        return windowNames && toString.call(it) == "[object Window]" ? getWindowNames(it) : gOPN(toIObject(it));
    };
}, function(module, exports, __webpack_require__) {
    var has = __webpack_require__(2), toObject = __webpack_require__(107), IE_PROTO = __webpack_require__(27)("IE_PROTO"), ObjectProto = Object.prototype;
    module.exports = Object.getPrototypeOf || function(O) {
        O = toObject(O);
        if (has(O, IE_PROTO)) return O[IE_PROTO];
        if (typeof O.constructor == "function" && O instanceof O.constructor) {
            return O.constructor.prototype;
        }
        return O instanceof Object ? ObjectProto : null;
    };
}, function(module, exports, __webpack_require__) {
    var toInteger = __webpack_require__(29), defined = __webpack_require__(21);
    module.exports = function(TO_STRING) {
        return function(that, pos) {
            var s = String(defined(that)), i = toInteger(pos), l = s.length, a, b;
            if (i < 0 || i >= l) return TO_STRING ? "" : undefined;
            a = s.charCodeAt(i);
            return a < 55296 || a > 56319 || i + 1 === l || (b = s.charCodeAt(i + 1)) < 56320 || b > 57343 ? TO_STRING ? s.charAt(i) : a : TO_STRING ? s.slice(i, i + 2) : (a - 55296 << 10) + (b - 56320) + 65536;
        };
    };
}, function(module, exports, __webpack_require__) {
    var toInteger = __webpack_require__(29), max = Math.max, min = Math.min;
    module.exports = function(index, length) {
        index = toInteger(index);
        return index < 0 ? max(index + length, 0) : min(index, length);
    };
}, function(module, exports, __webpack_require__) {
    var toInteger = __webpack_require__(29), min = Math.min;
    module.exports = function(it) {
        return it > 0 ? min(toInteger(it), 9007199254740991) : 0;
    };
}, function(module, exports, __webpack_require__) {
    var defined = __webpack_require__(21);
    module.exports = function(it) {
        return Object(defined(it));
    };
}, function(module, exports, __webpack_require__) {
    "use strict";
    var addToUnscopables = __webpack_require__(89), step = __webpack_require__(97), Iterators = __webpack_require__(23), toIObject = __webpack_require__(3);
    module.exports = __webpack_require__(45)(Array, "Array", function(iterated, kind) {
        this._t = toIObject(iterated);
        this._i = 0;
        this._k = kind;
    }, function() {
        var O = this._t, kind = this._k, index = this._i++;
        if (!O || index >= O.length) {
            this._t = undefined;
            return step(1);
        }
        if (kind == "keys") return step(0, index);
        if (kind == "values") return step(0, O[index]);
        return step(0, [ index, O[index] ]);
    }, "values");
    Iterators.Arguments = Iterators.Array;
    addToUnscopables("keys");
    addToUnscopables("values");
    addToUnscopables("entries");
}, function(module, exports) {}, function(module, exports, __webpack_require__) {
    "use strict";
    var $at = __webpack_require__(104)(true);
    __webpack_require__(45)(String, "String", function(iterated) {
        this._t = String(iterated);
        this._i = 0;
    }, function() {
        var O = this._t, index = this._i, point;
        if (index >= O.length) return {
            value: undefined,
            done: true
        };
        point = $at(O, index);
        this._i += point.length;
        return {
            value: point,
            done: false
        };
    });
}, function(module, exports, __webpack_require__) {
    "use strict";
    var global = __webpack_require__(1), has = __webpack_require__(2), DESCRIPTORS = __webpack_require__(4), $export = __webpack_require__(43), redefine = __webpack_require__(50), META = __webpack_require__(99).KEY, $fails = __webpack_require__(12), shared = __webpack_require__(28), setToStringTag = __webpack_require__(26), uid = __webpack_require__(16), wks = __webpack_require__(7), wksExt = __webpack_require__(32), wksDefine = __webpack_require__(31), keyOf = __webpack_require__(98), enumKeys = __webpack_require__(92), isArray = __webpack_require__(95), anObject = __webpack_require__(11), toIObject = __webpack_require__(3), toPrimitive = __webpack_require__(30), createDesc = __webpack_require__(15), _create = __webpack_require__(46), gOPNExt = __webpack_require__(102), $GOPD = __webpack_require__(101), $DP = __webpack_require__(6), $keys = __webpack_require__(14), gOPD = $GOPD.f, dP = $DP.f, gOPN = gOPNExt.f, $Symbol = global.Symbol, $JSON = global.JSON, _stringify = $JSON && $JSON.stringify, PROTOTYPE = "prototype", HIDDEN = wks("_hidden"), TO_PRIMITIVE = wks("toPrimitive"), isEnum = {}.propertyIsEnumerable, SymbolRegistry = shared("symbol-registry"), AllSymbols = shared("symbols"), OPSymbols = shared("op-symbols"), ObjectProto = Object[PROTOTYPE], USE_NATIVE = typeof $Symbol == "function", QObject = global.QObject;
    var setter = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;
    var setSymbolDesc = DESCRIPTORS && $fails(function() {
        return _create(dP({}, "a", {
            get: function() {
                return dP(this, "a", {
                    value: 7
                }).a;
            }
        })).a != 7;
    }) ? function(it, key, D) {
        var protoDesc = gOPD(ObjectProto, key);
        if (protoDesc) delete ObjectProto[key];
        dP(it, key, D);
        if (protoDesc && it !== ObjectProto) dP(ObjectProto, key, protoDesc);
    } : dP;
    var wrap = function(tag) {
        var sym = AllSymbols[tag] = _create($Symbol[PROTOTYPE]);
        sym._k = tag;
        return sym;
    };
    var isSymbol = USE_NATIVE && typeof $Symbol.iterator == "symbol" ? function(it) {
        return typeof it == "symbol";
    } : function(it) {
        return it instanceof $Symbol;
    };
    var $defineProperty = function defineProperty(it, key, D) {
        if (it === ObjectProto) $defineProperty(OPSymbols, key, D);
        anObject(it);
        key = toPrimitive(key, true);
        anObject(D);
        if (has(AllSymbols, key)) {
            if (!D.enumerable) {
                if (!has(it, HIDDEN)) dP(it, HIDDEN, createDesc(1, {}));
                it[HIDDEN][key] = true;
            } else {
                if (has(it, HIDDEN) && it[HIDDEN][key]) it[HIDDEN][key] = false;
                D = _create(D, {
                    enumerable: createDesc(0, false)
                });
            }
            return setSymbolDesc(it, key, D);
        }
        return dP(it, key, D);
    };
    var $defineProperties = function defineProperties(it, P) {
        anObject(it);
        var keys = enumKeys(P = toIObject(P)), i = 0, l = keys.length, key;
        while (l > i) $defineProperty(it, key = keys[i++], P[key]);
        return it;
    };
    var $create = function create(it, P) {
        return P === undefined ? _create(it) : $defineProperties(_create(it), P);
    };
    var $propertyIsEnumerable = function propertyIsEnumerable(key) {
        var E = isEnum.call(this, key = toPrimitive(key, true));
        if (this === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return false;
        return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key] ? E : true;
    };
    var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key) {
        it = toIObject(it);
        key = toPrimitive(key, true);
        if (it === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return;
        var D = gOPD(it, key);
        if (D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key])) D.enumerable = true;
        return D;
    };
    var $getOwnPropertyNames = function getOwnPropertyNames(it) {
        var names = gOPN(toIObject(it)), result = [], i = 0, key;
        while (names.length > i) {
            if (!has(AllSymbols, key = names[i++]) && key != HIDDEN && key != META) result.push(key);
        }
        return result;
    };
    var $getOwnPropertySymbols = function getOwnPropertySymbols(it) {
        var IS_OP = it === ObjectProto, names = gOPN(IS_OP ? OPSymbols : toIObject(it)), result = [], i = 0, key;
        while (names.length > i) {
            if (has(AllSymbols, key = names[i++]) && (IS_OP ? has(ObjectProto, key) : true)) result.push(AllSymbols[key]);
        }
        return result;
    };
    if (!USE_NATIVE) {
        $Symbol = function Symbol() {
            if (this instanceof $Symbol) throw TypeError("Symbol is not a constructor!");
            var tag = uid(arguments.length > 0 ? arguments[0] : undefined);
            var $set = function(value) {
                if (this === ObjectProto) $set.call(OPSymbols, value);
                if (has(this, HIDDEN) && has(this[HIDDEN], tag)) this[HIDDEN][tag] = false;
                setSymbolDesc(this, tag, createDesc(1, value));
            };
            if (DESCRIPTORS && setter) setSymbolDesc(ObjectProto, tag, {
                configurable: true,
                set: $set
            });
            return wrap(tag);
        };
        redefine($Symbol[PROTOTYPE], "toString", function toString() {
            return this._k;
        });
        $GOPD.f = $getOwnPropertyDescriptor;
        $DP.f = $defineProperty;
        __webpack_require__(47).f = gOPNExt.f = $getOwnPropertyNames;
        __webpack_require__(25).f = $propertyIsEnumerable;
        __webpack_require__(48).f = $getOwnPropertySymbols;
        if (DESCRIPTORS && !__webpack_require__(24)) {
            redefine(ObjectProto, "propertyIsEnumerable", $propertyIsEnumerable, true);
        }
        wksExt.f = function(name) {
            return wrap(wks(name));
        };
    }
    $export($export.G + $export.W + $export.F * !USE_NATIVE, {
        Symbol: $Symbol
    });
    for (var symbols = "hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","), i = 0; symbols.length > i; ) wks(symbols[i++]);
    for (var symbols = $keys(wks.store), i = 0; symbols.length > i; ) wksDefine(symbols[i++]);
    $export($export.S + $export.F * !USE_NATIVE, "Symbol", {
        for: function(key) {
            return has(SymbolRegistry, key += "") ? SymbolRegistry[key] : SymbolRegistry[key] = $Symbol(key);
        },
        keyFor: function keyFor(key) {
            if (isSymbol(key)) return keyOf(SymbolRegistry, key);
            throw TypeError(key + " is not a symbol!");
        },
        useSetter: function() {
            setter = true;
        },
        useSimple: function() {
            setter = false;
        }
    });
    $export($export.S + $export.F * !USE_NATIVE, "Object", {
        create: $create,
        defineProperty: $defineProperty,
        defineProperties: $defineProperties,
        getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
        getOwnPropertyNames: $getOwnPropertyNames,
        getOwnPropertySymbols: $getOwnPropertySymbols
    });
    $JSON && $export($export.S + $export.F * (!USE_NATIVE || $fails(function() {
        var S = $Symbol();
        return _stringify([ S ]) != "[null]" || _stringify({
            a: S
        }) != "{}" || _stringify(Object(S)) != "{}";
    })), "JSON", {
        stringify: function stringify(it) {
            if (it === undefined || isSymbol(it)) return;
            var args = [ it ], i = 1, replacer, $replacer;
            while (arguments.length > i) args.push(arguments[i++]);
            replacer = args[1];
            if (typeof replacer == "function") $replacer = replacer;
            if ($replacer || !isArray(replacer)) replacer = function(key, value) {
                if ($replacer) value = $replacer.call(this, key, value);
                if (!isSymbol(value)) return value;
            };
            args[1] = replacer;
            return _stringify.apply($JSON, args);
        }
    });
    $Symbol[PROTOTYPE][TO_PRIMITIVE] || __webpack_require__(5)($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
    setToStringTag($Symbol, "Symbol");
    setToStringTag(Math, "Math", true);
    setToStringTag(global.JSON, "JSON", true);
}, function(module, exports, __webpack_require__) {
    __webpack_require__(31)("asyncIterator");
}, function(module, exports, __webpack_require__) {
    __webpack_require__(31)("observable");
}, function(module, exports, __webpack_require__) {
    __webpack_require__(108);
    var global = __webpack_require__(1), hide = __webpack_require__(5), Iterators = __webpack_require__(23), TO_STRING_TAG = __webpack_require__(7)("toStringTag");
    for (var collections = [ "NodeList", "DOMTokenList", "MediaList", "StyleSheetList", "CSSRuleList" ], i = 0; i < 5; i++) {
        var NAME = collections[i], Collection = global[NAME], proto = Collection && Collection.prototype;
        if (proto && !proto[TO_STRING_TAG]) hide(proto, TO_STRING_TAG, NAME);
        Iterators[NAME] = Iterators.Array;
    }
}, function(module, exports, __webpack_require__) {
    (function(global, process) {
        (function(global, undefined) {
            "use strict";
            if (global.setImmediate) {
                return;
            }
            var nextHandle = 1;
            var tasksByHandle = {};
            var currentlyRunningATask = false;
            var doc = global.document;
            var registerImmediate;
            function setImmediate(callback) {
                if (typeof callback !== "function") {
                    callback = new Function("" + callback);
                }
                var args = new Array(arguments.length - 1);
                for (var i = 0; i < args.length; i++) {
                    args[i] = arguments[i + 1];
                }
                var task = {
                    callback: callback,
                    args: args
                };
                tasksByHandle[nextHandle] = task;
                registerImmediate(nextHandle);
                return nextHandle++;
            }
            function clearImmediate(handle) {
                delete tasksByHandle[handle];
            }
            function run(task) {
                var callback = task.callback;
                var args = task.args;
                switch (args.length) {
                  case 0:
                    callback();
                    break;

                  case 1:
                    callback(args[0]);
                    break;

                  case 2:
                    callback(args[0], args[1]);
                    break;

                  case 3:
                    callback(args[0], args[1], args[2]);
                    break;

                  default:
                    callback.apply(undefined, args);
                    break;
                }
            }
            function runIfPresent(handle) {
                if (currentlyRunningATask) {
                    setTimeout(runIfPresent, 0, handle);
                } else {
                    var task = tasksByHandle[handle];
                    if (task) {
                        currentlyRunningATask = true;
                        try {
                            run(task);
                        } finally {
                            clearImmediate(handle);
                            currentlyRunningATask = false;
                        }
                    }
                }
            }
            function installNextTickImplementation() {
                registerImmediate = function(handle) {
                    process.nextTick(function() {
                        runIfPresent(handle);
                    });
                };
            }
            function canUsePostMessage() {
                if (global.postMessage && !global.importScripts) {
                    var postMessageIsAsynchronous = true;
                    var oldOnMessage = global.onmessage;
                    global.onmessage = function() {
                        postMessageIsAsynchronous = false;
                    };
                    global.postMessage("", "*");
                    global.onmessage = oldOnMessage;
                    return postMessageIsAsynchronous;
                }
            }
            function installPostMessageImplementation() {
                var messagePrefix = "setImmediate$" + Math.random() + "$";
                var onGlobalMessage = function(event) {
                    if (event.source === global && typeof event.data === "string" && event.data.indexOf(messagePrefix) === 0) {
                        runIfPresent(+event.data.slice(messagePrefix.length));
                    }
                };
                if (global.addEventListener) {
                    global.addEventListener("message", onGlobalMessage, false);
                } else {
                    global.attachEvent("onmessage", onGlobalMessage);
                }
                registerImmediate = function(handle) {
                    global.postMessage(messagePrefix + handle, "*");
                };
            }
            function installMessageChannelImplementation() {
                var channel = new MessageChannel();
                channel.port1.onmessage = function(event) {
                    var handle = event.data;
                    runIfPresent(handle);
                };
                registerImmediate = function(handle) {
                    channel.port2.postMessage(handle);
                };
            }
            function installReadyStateChangeImplementation() {
                var html = doc.documentElement;
                registerImmediate = function(handle) {
                    var script = doc.createElement("script");
                    script.onreadystatechange = function() {
                        runIfPresent(handle);
                        script.onreadystatechange = null;
                        html.removeChild(script);
                        script = null;
                    };
                    html.appendChild(script);
                };
            }
            function installSetTimeoutImplementation() {
                registerImmediate = function(handle) {
                    setTimeout(runIfPresent, 0, handle);
                };
            }
            var attachTo = Object.getPrototypeOf && Object.getPrototypeOf(global);
            attachTo = attachTo && attachTo.setTimeout ? attachTo : global;
            if ({}.toString.call(global.process) === "[object process]") {
                installNextTickImplementation();
            } else if (canUsePostMessage()) {
                installPostMessageImplementation();
            } else if (global.MessageChannel) {
                installMessageChannelImplementation();
            } else if (doc && "onreadystatechange" in doc.createElement("script")) {
                installReadyStateChangeImplementation();
            } else {
                installSetTimeoutImplementation();
            }
            attachTo.setImmediate = setImmediate;
            attachTo.clearImmediate = clearImmediate;
        })(typeof self === "undefined" ? typeof global === "undefined" ? this : global : self);
    }).call(exports, __webpack_require__(52), __webpack_require__(51));
}, function(module, exports, __webpack_require__) {
    var apply = Function.prototype.apply;
    exports.setTimeout = function() {
        return new Timeout(apply.call(setTimeout, window, arguments), clearTimeout);
    };
    exports.setInterval = function() {
        return new Timeout(apply.call(setInterval, window, arguments), clearInterval);
    };
    exports.clearTimeout = exports.clearInterval = function(timeout) {
        if (timeout) {
            timeout.close();
        }
    };
    function Timeout(id, clearFn) {
        this._id = id;
        this._clearFn = clearFn;
    }
    Timeout.prototype.unref = Timeout.prototype.ref = function() {};
    Timeout.prototype.close = function() {
        this._clearFn.call(window, this._id);
    };
    exports.enroll = function(item, msecs) {
        clearTimeout(item._idleTimeoutId);
        item._idleTimeout = msecs;
    };
    exports.unenroll = function(item) {
        clearTimeout(item._idleTimeoutId);
        item._idleTimeout = -1;
    };
    exports._unrefActive = exports.active = function(item) {
        clearTimeout(item._idleTimeoutId);
        var msecs = item._idleTimeout;
        if (msecs >= 0) {
            item._idleTimeoutId = setTimeout(function onTimeout() {
                if (item._onTimeout) item._onTimeout();
            }, msecs);
        }
    };
    __webpack_require__(115);
    exports.setImmediate = setImmediate;
    exports.clearImmediate = clearImmediate;
} ]);