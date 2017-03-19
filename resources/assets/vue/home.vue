<template>
    <div>
        <div class="index-page">
           <div class="wrapper">
               <div class="header header-filter" style="background-image: url('/img/homebg.jpeg');">
                   <div class="container">
                       <div class="row">
                           <div class="col-md-8 col-md-offset-2">
                               <div class="brand">
                                   <h1>Планировщик расписания</h1>
                                   <h3>Программа для составления расписания и просмотра статистики.</h3>
                               </div>
                           </div>
                       </div>
                   </div>
               </div>

               <div class="main main-raised">
                   <div class="section section-basic">
                       <div class="container">
                           Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et libero quibusdam repellat soluta. A aliquam aspernatur deserunt dicta dolorum, eligendi eum libero neque nobis optio quas quidem quis sapiente! Atque, aut autem corporis culpa, dolor doloremque dolorum enim est exercitationem inventore ipsa labore laudantium molestiae molestias officia quos recusandae reprehenderit veritatis? Alias aspernatur at beatae corporis, doloremque dolores eligendi esse excepturi explicabo incidunt, iure molestiae nostrum officia optio, perspiciatis placeat ratione rem rerum! A adipisci alias at, aut commodi consequatur consequuntur corporis culpa cum dicta distinctio dolor eius eligendi esse eum excepturi expedita harum id ipsum laudantium libero magni modi officia officiis omnis, optio porro praesentium quia recusandae reiciendis sed sequi sint sit tempora vel velit vitae. Alias aspernatur blanditiis dolorem error facilis hic impedit laborum maxime necessitatibus provident quaerat, quam quod sed ullam ut! A amet deserunt dignissimos nulla odit temporibus. Consectetur debitis harum illo incidunt laudantium optio quod repellendus similique ut vero! Debitis, dolor earum enim et expedita id modi reiciendis ut velit! A ad cum dicta doloremque, ducimus earum eos illum magni minima mollitia non quis! Aperiam consectetur corporis cumque dolor incidunt nihil, nostrum numquam obcaecati odit pariatur quaerat quia quibusdam repellendus suscipit tempora vero voluptatem voluptates!
                           Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et libero quibusdam repellat soluta. A aliquam aspernatur deserunt dicta dolorum, eligendi eum libero neque nobis optio quas quidem quis sapiente! Atque, aut autem corporis culpa, dolor doloremque dolorum enim est exercitationem inventore ipsa labore laudantium molestiae molestias officia quos recusandae reprehenderit veritatis? Alias aspernatur at beatae corporis, doloremque dolores eligendi esse excepturi explicabo incidunt, iure molestiae nostrum officia optio, perspiciatis placeat ratione rem rerum! A adipisci alias at, aut commodi consequatur consequuntur corporis culpa cum dicta distinctio dolor eius eligendi esse eum excepturi expedita harum id ipsum laudantium libero magni modi officia officiis omnis, optio porro praesentium quia recusandae reiciendis sed sequi sint sit tempora vel velit vitae. Alias aspernatur blanditiis dolorem error facilis hic impedit laborum maxime necessitatibus provident quaerat, quam quod sed ullam ut! A amet deserunt dignissimos nulla odit temporibus. Consectetur debitis harum illo incidunt laudantium optio quod repellendus similique ut vero! Debitis, dolor earum enim et expedita id modi reiciendis ut velit! A ad cum dicta doloremque, ducimus earum eos illum magni minima mollitia non quis! Aperiam consectetur corporis cumque dolor incidunt nihil, nostrum numquam obcaecati odit pariatur quaerat quia quibusdam repellendus suscipit tempora vero voluptatem voluptates!
                       </div>
                   </div>
               </div>
           </div>
       </div>
       <footer class="footer">
           <div class="container">
               <div class="copyright pull-right">
                   &copy; 2017, made with <i class="fa fa-heart heart"></i> by <a href="https://github.com/Nanografon" target="_blank">Nanografon</a>
               </div>
           </div>
        </footer>
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

        let transparent = true;
        let big_image;
        let navbar = $('.navbar-color-on-scroll');

        $(document).ready(function(){

            $.material.init();

            //$('[data-toggle="tooltip"], [rel="tooltip"]').tooltip();

            if(navbar.length !== 0){
                $(window).on('scroll', function() {
                    if($(document).scrollTop() > 260 ) {
                        if(transparent) {
                            transparent = false;
                            navbar.removeClass('navbar-transparent');
                        }
                    } else {
                        if( !transparent ) {
                            transparent = true;
                            navbar.addClass('navbar-transparent');
                        }
                    }
                });
            }

            //$('[data-toggle="popover"]').popover();

            let window_width = $(window).width();

            if (window_width >= 992){
                big_image = $('.wrapper > .header');
                $(window).on('scroll', function() {
                    let oVal = ($(window).scrollTop() / 3);
                    big_image.css({
                        'transform':'translate3d(0,' + oVal +'px,0)',
                        '-webkit-transform':'translate3d(0,' + oVal +'px,0)',
                        '-ms-transform':'translate3d(0,' + oVal +'px,0)',
                        '-o-transform':'translate3d(0,' + oVal +'px,0)'
                    });

                });
            }

        });
        NProgress.done();
    },
    beforeRouteLeave(to, from, next) {

        $(window).off('scroll');
        $('.navbar-color-on-scroll').addClass('navbar-transparent');

        next();
    }
}
</script>