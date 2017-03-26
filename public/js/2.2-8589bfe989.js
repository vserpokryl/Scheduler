webpackJsonp([ 2 ], {
    118: function(module, exports, __webpack_require__) {
        var Component = __webpack_require__(8)(__webpack_require__(122), __webpack_require__(125), null, null);
        module.exports = Component.exports;
    },
    122: function(module, exports, __webpack_require__) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: !0
        }), exports.default = {
            data: function() {
                return {};
            },
            created: function() {
                loadedAssets();
                var transparent = !0, big_image = void 0, navbar = $(".navbar-color-on-scroll");
                $(document).ready(function() {
                    $.material.init(), 0 !== navbar.length && $(window).on("scroll", function() {
                        $(document).scrollTop() > 260 ? transparent && (transparent = !1, navbar.removeClass("navbar-transparent")) : transparent || (transparent = !0, 
                        navbar.addClass("navbar-transparent"));
                    }), $(window).width() >= 992 && (big_image = $(".wrapper > .header"), $(window).on("scroll", function() {
                        var oVal = $(window).scrollTop() / 3;
                        big_image.css({
                            transform: "translate3d(0," + oVal + "px,0)",
                            "-webkit-transform": "translate3d(0," + oVal + "px,0)",
                            "-ms-transform": "translate3d(0," + oVal + "px,0)",
                            "-o-transform": "translate3d(0," + oVal + "px,0)"
                        });
                    }));
                }), NProgress.done();
            },
            beforeRouteLeave: function(to, from, next) {
                $(window).off("scroll"), $(".navbar-color-on-scroll").addClass("navbar-transparent"), 
                next();
            }
        };
    },
    125: function(module, exports) {
        module.exports = {
            render: function() {
                var _vm = this, _h = _vm.$createElement;
                _vm._self._c;
                return _vm._m(0);
            },
            staticRenderFns: [ function() {
                var _vm = this, _h = _vm.$createElement, _c = _vm._self._c || _h;
                return _c("div", [ _c("div", {
                    staticClass: "index-page"
                }, [ _c("div", {
                    staticClass: "wrapper"
                }, [ _c("div", {
                    staticClass: "header header-filter",
                    staticStyle: {
                        "background-image": "url('/img/homebg.jpeg')"
                    }
                }, [ _c("div", {
                    staticClass: "container"
                }, [ _c("div", {
                    staticClass: "row"
                }, [ _c("div", {
                    staticClass: "col-md-8 col-md-offset-2"
                }, [ _c("div", {
                    staticClass: "brand"
                }, [ _c("h1", [ _vm._v("Планировщик расписания") ]), _vm._v(" "), _c("h3", [ _vm._v("Программа для составления расписания и просмотра статистики.") ]) ]) ]) ]) ]) ]), _vm._v(" "), _c("div", {
                    staticClass: "main main-raised"
                }, [ _c("div", {
                    staticClass: "section section-basic"
                }, [ _c("div", {
                    staticClass: "container"
                }, [ _vm._v("\n                       Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et libero quibusdam repellat soluta. A aliquam aspernatur deserunt dicta dolorum, eligendi eum libero neque nobis optio quas quidem quis sapiente! Atque, aut autem corporis culpa, dolor doloremque dolorum enim est exercitationem inventore ipsa labore laudantium molestiae molestias officia quos recusandae reprehenderit veritatis? Alias aspernatur at beatae corporis, doloremque dolores eligendi esse excepturi explicabo incidunt, iure molestiae nostrum officia optio, perspiciatis placeat ratione rem rerum! A adipisci alias at, aut commodi consequatur consequuntur corporis culpa cum dicta distinctio dolor eius eligendi esse eum excepturi expedita harum id ipsum laudantium libero magni modi officia officiis omnis, optio porro praesentium quia recusandae reiciendis sed sequi sint sit tempora vel velit vitae. Alias aspernatur blanditiis dolorem error facilis hic impedit laborum maxime necessitatibus provident quaerat, quam quod sed ullam ut! A amet deserunt dignissimos nulla odit temporibus. Consectetur debitis harum illo incidunt laudantium optio quod repellendus similique ut vero! Debitis, dolor earum enim et expedita id modi reiciendis ut velit! A ad cum dicta doloremque, ducimus earum eos illum magni minima mollitia non quis! Aperiam consectetur corporis cumque dolor incidunt nihil, nostrum numquam obcaecati odit pariatur quaerat quia quibusdam repellendus suscipit tempora vero voluptatem voluptates!\n                       Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et libero quibusdam repellat soluta. A aliquam aspernatur deserunt dicta dolorum, eligendi eum libero neque nobis optio quas quidem quis sapiente! Atque, aut autem corporis culpa, dolor doloremque dolorum enim est exercitationem inventore ipsa labore laudantium molestiae molestias officia quos recusandae reprehenderit veritatis? Alias aspernatur at beatae corporis, doloremque dolores eligendi esse excepturi explicabo incidunt, iure molestiae nostrum officia optio, perspiciatis placeat ratione rem rerum! A adipisci alias at, aut commodi consequatur consequuntur corporis culpa cum dicta distinctio dolor eius eligendi esse eum excepturi expedita harum id ipsum laudantium libero magni modi officia officiis omnis, optio porro praesentium quia recusandae reiciendis sed sequi sint sit tempora vel velit vitae. Alias aspernatur blanditiis dolorem error facilis hic impedit laborum maxime necessitatibus provident quaerat, quam quod sed ullam ut! A amet deserunt dignissimos nulla odit temporibus. Consectetur debitis harum illo incidunt laudantium optio quod repellendus similique ut vero! Debitis, dolor earum enim et expedita id modi reiciendis ut velit! A ad cum dicta doloremque, ducimus earum eos illum magni minima mollitia non quis! Aperiam consectetur corporis cumque dolor incidunt nihil, nostrum numquam obcaecati odit pariatur quaerat quia quibusdam repellendus suscipit tempora vero voluptatem voluptates!\n                   ") ]) ]) ]) ]) ]), _vm._v(" "), _c("footer", {
                    staticClass: "footer"
                }, [ _c("div", {
                    staticClass: "container"
                }, [ _c("div", {
                    staticClass: "copyright pull-right"
                }, [ _vm._v("\n               © 2017, made with "), _c("i", {
                    staticClass: "fa fa-heart heart"
                }), _vm._v(" by "), _c("a", {
                    attrs: {
                        href: "https://github.com/Nanografon",
                        target: "_blank"
                    }
                }, [ _vm._v("Nanografon") ]) ]) ]) ]) ]);
            } ]
        };
    }
});