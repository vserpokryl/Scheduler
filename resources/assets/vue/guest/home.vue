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
                            <h2>Составление расписания занятий в высших учебных заведениях</h2>
                            <p class="h4">Составление расписания – одна из наиболее распространённых задач в планировании и оптимизации учебного процесса в учебных заведениях.</p>
                            <p class="h4">От того, насколько хорошо составлено расписание, зависит эффективность работы преподавателей, усвоение учебного материала студентами, рациональное использование материальных ресурсов.</p>
                            <p class="h4">Для облегчения составления расписания была разработана и введена в действие специализированная программа, получившая название «Планировщик расписания». При помощи этого программного обеспечения можно составить расписание занятий, вне зависимости от вместимости учебного заведения, количества студенческой аудитории, графиков обучения и прочих параметров.</p>
                            <p class="h4">Основные возможности:</p>
                            <ul class="list-unstyled h4 opportunities">
                                <li><i class="fa fa-check" aria-hidden="true"></i> Управление корпусами</li>
                                <li><i class="fa fa-check" aria-hidden="true"></i> Управление аудиториями</li>
                                <li><i class="fa fa-check" aria-hidden="true"></i> Управление факультетами</li>
                                <li><i class="fa fa-check" aria-hidden="true"></i> Управление кафедрами</li>
                                <li><i class="fa fa-check" aria-hidden="true"></i> Управление преподавателями</li>
                                <li><i class="fa fa-check" aria-hidden="true"></i> Управление группами</li>
                                <li><i class="fa fa-check" aria-hidden="true"></i> Управление подгруппами</li>
                                <li><i class="fa fa-check" aria-hidden="true"></i> Управление дисциплинами</li>
                                <li><i class="fa fa-check" aria-hidden="true"></i> Управление пожеланиями преподавателей</li>
                                <li><i class="fa fa-check" aria-hidden="true"></i> Учет пожеланий преподавателей</li>
                                <li><i class="fa fa-check" aria-hidden="true"></i> Внесение изменений в уже построенное расписание</li>
                                <li><i class="fa fa-check" aria-hidden="true"></i> Составление расписания для очного отделения</li>
                                <li><i class="fa fa-check" aria-hidden="true"></i> Составление расписания для заочного отделения</li>
                                <li><i class="fa fa-check" aria-hidden="true"></i> Просмотр занятости аудиторий</li>
                                <li><i class="fa fa-check" aria-hidden="true"></i> Просмотр занятости преподавателей</li>
                                <li><i class="fa fa-check" aria-hidden="true"></i> Учет занятости аудиторий</li>
                                <li><i class="fa fa-check" aria-hidden="true"></i> Учет занятости преподавателей</li>
                                <li><i class="fa fa-check" aria-hidden="true"></i> Печать расписания для группы</li>
                                <li><i class="fa fa-check" aria-hidden="true"></i> Печать расписания для подгруппы</li>
                                <li><i class="fa fa-check" aria-hidden="true"></i> Печать расписания для преподавателей</li>
                            </ul>
                            <p class="h4">Исходный код данного проекта, а также краткое руководство по его настройке находится по адресу <a href="https://github.com/Nanografon/Scheduler" target="_blank">Scheduler</a></p>
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