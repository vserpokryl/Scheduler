<!DOCTYPE html>
<html lang="ru">

<head>
    <meta charset="UTF-8">
    <link rel="icon" type="image/ico" href="/favicon.ico">
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />
    <meta content='width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0' name='viewport' />
    <meta name="csrf-token" content="{{ csrf_token() }}"/>

    <title>Планировщик расписания - Главная</title>

    <link rel="stylesheet" href="{{ mix('/css/app.css') }}">
</head>

<body>
<!-- Navbar -->
@if (Auth::guest())
    @include('models.guestmenu')
@else
    @include('models.adminmenu')
@endif
<!-- End Navbar -->

<div class="index-page">
    <div class="wrapper">
        <div class="header header-filter" style="background-image: url('/img/bg2.jpeg');">
            <div class="container">
                <div class="row">
                    <div class="col-md-8 col-md-offset-2">
                        <div class="brand">
                            <h1>Расписание 2.0</h1>
                            <h3>Программа для составления расписания и просмотра статистики.</h3>
                        </div>
                    </div>
                </div>

            </div>
        </div>

        <div class="main main-raised">
            <div class="section section-basic">
                <div class="container">
                </div>
            </div>
        </div>
    </div>
</div>
<footer class="footer">
    <div class="container">
        <div class="copyright pull-right">
            &copy; {{ date('Y') }}, made with <i class="fa fa-heart heart"></i> by <a href="https://github.com/Nanografon" target="_blank">Nanografon</a>
        </div>
    </div>
</footer>
<script src="{{ mix('/js/common.js') }}"></script>
<script src="{{ mix('/js/app.js') }}"></script>
<script>

    let transparent = true;
    let big_image;

    $(document).ready(function(){

        $.material.init();

        $('[data-toggle="tooltip"], [rel="tooltip"]').tooltip();

        if($('.navbar-color-on-scroll').length !== 0){
            $(window).on('scroll', function() {
                if($(document).scrollTop() > 260 ) {
                    if(transparent) {
                        transparent = false;
                        $('.navbar-color-on-scroll').removeClass('navbar-transparent');
                    }
                } else {
                    if( !transparent ) {
                        transparent = true;
                        $('.navbar-color-on-scroll').addClass('navbar-transparent');
                    }
                }
            });
        }

        $('[data-toggle="popover"]').popover();

        let window_width = $(window).width();

        if (window_width >= 992){
            big_image = $('.wrapper > .header');
            $(window).on('scroll', function() {
                let oVal = ($(window).scrollTop() / 4);
                big_image.css({
                    'transform':'translate3d(0,' + oVal +'px,0)',
                    '-webkit-transform':'translate3d(0,' + oVal +'px,0)',
                    '-ms-transform':'translate3d(0,' + oVal +'px,0)',
                    '-o-transform':'translate3d(0,' + oVal +'px,0)'
                });

            });
        }

    });
</script>
</body>
</html>