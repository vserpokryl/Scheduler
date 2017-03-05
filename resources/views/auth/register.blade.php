<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <link rel="icon" type="image/ico" href="/img/favicon.ico">
    <title>Расписание 2.0 - Вход</title>

    <!--     Fonts and icons     -->
    <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
    <link rel="stylesheet" type="text/css" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700" />
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/latest/css/font-awesome.min.css" />

    <!-- CSS Files -->
    <link rel="stylesheet" href="/css/main.css">

</head>

<body class="signup-page">
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
                        <form class="form" role="form" method="POST" action="{{ url('/register') }}">
                            <div class="header header-primary text-center">
                                <h4>Регистрация нового пользователя</h4>
                            </div>
                            <div class="content">
                                {{ csrf_field() }}

                                <div class="input-group{{ $errors->has('username') ? ' has-error' : '' }}">
                                    <span class="input-group-addon">
										<i class="material-icons">account_box</i>
									</span>
                                    <input id="username" type="text" class="form-control" name="username" placeholder="Логин" value="{{ old('username') }}">
                                    @if ($errors->has('username'))
                                        <span class="help-block">
                                            <strong>{{ $errors->first('username') }}</strong>
                                        </span>
                                    @endif
                                </div>

                                <div class="input-group{{ $errors->has('password') ? ' has-error' : '' }}">
                                    <span class="input-group-addon">
                                          <i class="material-icons">lock_outline</i>
                                    </span>
                                    <input id="password" type="password" placeholder="Пароль" class="form-control" name="password">

                                    @if ($errors->has('password'))
                                        <span class="help-block">
                                            <strong>{{ $errors->first('password') }}</strong>
                                        </span>
                                    @endif
                                </div>


                                <div class="input-group{{ $errors->has('password_confirmation') ? ' has-error' : '' }}">
                                    <span class="input-group-addon">
                                          <i class="material-icons">lock_outline</i>
                                    </span>
                                    <input id="password-confirm" type="password" placeholder="Подтверждение пароля" class="form-control" name="password_confirmation">

                                    @if ($errors->has('password_confirmation'))
                                        <span class="help-block">
                                            <strong>{{ $errors->first('password_confirmation') }}</strong>
                                        </span>
                                    @endif
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
                    &copy; 2016, made with <i class="fa fa-heart heart"></i> by <a href="https://vk.com/nanografon" target="_blank">Nanografon</a>
                </div>
            </div>
        </footer>
    </div>
</div>
</body>
<script src="/js/main.js"></script>
</html>