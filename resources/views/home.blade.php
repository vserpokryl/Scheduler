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

<body class="index-page">
    <!-- Navbar -->
@if (Auth::guest())
    <nav class="navbar navbar-transparent navbar-fixed-top navbar-color-on-scroll">
        <div class="navbar-header">
            <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#navigation-index">
                <span class="sr-only">Навигация</span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
            </button>
        </div>
        <div class="container">
            <div class="collapse navbar-collapse" id="navigation-index">
                <ul class="nav navbar-nav navbar-right">
                    <li>
                        <a href="{{ secure_url(route('login', [], false)) }}">
                            <i class="fa fa-sign-in" aria-hidden="true"></i> Вход
                        </a>
                    </li>
                    <li>
                        <a href="{{ secure_url(route('register', [], false)) }}">
                            <i class="fa fa-user-plus" aria-hidden="true"></i> Регистрация
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
@else
    @include('models.adminmenu')
@endif
<!-- End Navbar -->

<div class="wrapper">
    <div class="header header-filter" style="background-image: url('img/bg2.jpeg');">
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

<footer class="footer">
    <div class="container">
        <div class="copyright pull-right">
            &copy; {{ date('Y') }}, made with <i class="fa fa-heart heart"></i> by Nanografon
        </div>
    </div>
</footer>
<script src="{{ mix('/js/common.js') }}"></script>
<script src="{{ mix('/js/app.js') }}"></script>
</body>
</html>