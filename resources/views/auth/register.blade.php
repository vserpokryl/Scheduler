<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <link rel="icon" type="image/ico" href="/favicon.ico">
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />
    <meta content='width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0' name='viewport' />
    <meta name="csrf-token" content="{{ csrf_token() }}"/>

    <title>Планировщик расписания - Регистрация</title>

    <link rel="stylesheet" href="{{ mix('/css/app.css') }}">
</head>

<body class="signup-page">
<nav class="navbar navbar-transparent navbar-absolute">
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
                    <a href="/">
                        <i class="fa fa-home" aria-hidden="true"></i> Главная
                    </a>
                </li>
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

<div class="wrapper">
    <div class="header header-filter" style="background-image: url('/img/city.jpg'); background-size: cover; background-position: top center;">
        <div class="container">
            <div class="row" style="margin-bottom: 80px;">
                <div class="col-md-6 col-md-offset-3 col-sm-8 col-sm-offset-2">
                    <div class="card card-signup">
                        <form class="form" role="form" method="POST" action="{{ url('/register') }}">
                            <div class="header header-primary text-center">
                                <h4>Регистрация</h4>
                            </div>
                            <div class="content">
                                <div class="input-group">
                                    <span class="input-group-addon">
										<i class="material-icons">account_box</i>
									</span>
                                    <div class="form-group label-floating is-empty">
                                        <label class="control-label" for="username">Логин</label>
                                        <input id="username" type="text" class="form-control" name="username">
                                    </div>
                                </div>

                                <div class="input-group">
                                    <span class="input-group-addon">
										<i class="material-icons">school</i>
									</span>
                                    <div class="form-group label-floating is-empty">
                                        <label class="control-label" for="university_name">Полное название учебного заведения</label>
                                        <input id="university_name" type="text" class="form-control" name="university_name">
                                    </div>
                                </div>

                                <div class="input-group">
                                    <span class="input-group-addon">
										<i class="material-icons">school</i>
									</span>
                                    <div class="form-group label-floating is-empty">
                                        <label class="control-label" for="university_short_name">Сокращенное название учебного заведения</label>
                                        <input id="university_short_name" type="text" class="form-control" name="university_short_name">
                                    </div>
                                </div>

                                <div class="input-group">
                                    <span class="input-group-addon">
                                          <i class="material-icons">lock_outline</i>
                                    </span>
                                    <div class="form-group label-floating is-empty">
                                        <label class="control-label" for="password">Пароль</label>
                                        <input id="password" type="password" class="form-control" name="password">
                                    </div>
                                </div>

                                <div class="input-group">
                                    <span class="input-group-addon">
                                          <i class="material-icons">lock_outline</i>
                                    </span>
                                    <div class="form-group label-floating is-empty">
                                        <label class="control-label" for="password-confirm">Подтверждение пароля</label>
                                        <input id="password-confirm" type="password" class="form-control" name="password-confirm">
                                    </div>
                                </div>
                            </div>
                            <div class="footer text-center">
                                <button type="submit" class="btn btn-simple btn-primary btn-lg">Зарегистрироваться</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        <footer class="footer" style="position: absolute;bottom: 0;width: 100%;height: 80px;">
            <div class="container">
                <div class="copyright pull-right">
                    &copy; {{ date('Y') }}, made with <i class="fa fa-heart heart"></i> by <a href="https://github.com/Nanografon" target="_blank">Nanografon</a>
                </div>
            </div>
        </footer>
    </div>
</div>
</body>
<script src="{{ mix('/js/common.js') }}"></script>
<script>

    $(document).ready(function(){

        $.material.init();

    });
</script>
</html>