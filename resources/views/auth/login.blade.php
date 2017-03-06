<!DOCTYPE html>
<html lang="ru">

<head>
    <meta charset="UTF-8">
    <link rel="icon" type="image/ico" href="/favicon.ico">
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />
    <meta content='width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0' name='viewport' />
    <meta name="csrf-token" content="{{ csrf_token() }}"/>

    <title>Планировщик расписания - Вход</title>

    <link rel="stylesheet" href="{{ mix('/css/app.css') }}">
</head>

<body>
<div class="signup-page">
<nav class="navbar navbar-transparent navbar-absolute">
    <div class="container">
        <div class="navbar-header">
            <a class="navbar-brand" href="/">Главная</a>
        </div>
    </div>
</nav>

<div class="wrapper">
    <div class="header header-filter" style="background-image: url('/img/city.jpg'); background-size: cover; background-position: top center;">
        <div class="container">
            <div class="row" style="margin-bottom: 80px;">
                <div class="col-md-4 col-md-offset-4 col-sm-6 col-sm-offset-3">
                    <div class="card card-signup">
                        <form class="form" role="form" method="POST" action="{{ route('login') }}">
                            <div class="header header-primary text-center">
                                <h4>Вход в панель управления</h4>
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
                                          <i class="material-icons">lock_outline</i>
                                    </span>
                                    <div class="form-group label-floating is-empty">
                                        <label class="control-label" for="password">Пароль</label>
                                        <input id="password" type="password" class="form-control" name="password">
                                    </div>
                                </div>

                                <div class="col-md-8 col-md-offset-2">
                                    <div class="checkbox">
                                        <label>
                                            <input type="checkbox" name="remember">
                                            Запомнить меня
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div class="footer text-center">
                                <button type="submit" class="btn btn-simple btn-primary btn-lg">Войти</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        <footer class="footer" style="position: absolute;bottom: 0;width: 100%;height: 80px;">
            <div class="container">
                <div class="copyright pull-right">
                    &copy; {{ date('Y') }}, made with <i class="fa fa-heart heart"></i> by <a href="https://vk.com/nanografon" target="_blank">Nanografon</a>
                </div>
            </div>
        </footer>
    </div>
</div>
</div>
<script src="{{ mix('/js/common.js') }}"></script>
<script src="{{ mix('/js/app.js') }}"></script>
</body>
</html>
