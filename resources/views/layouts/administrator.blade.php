<!DOCTYPE html>
<html lang="ru">

<head>
    <meta charset="UTF-8">
    <link rel="icon" type="image/ico" href="/img/favicon.ico">
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />

    <title>Расписание 2.0 - @yield('title')</title>

    <meta content='width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0' name='viewport' />

    <!--     Fonts and icons     -->
    <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
    <link rel="stylesheet" type="text/css" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700" />
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/latest/css/font-awesome.min.css" />

    <!-- CSS Files -->
    <link rel="stylesheet" href="/css/main.css">

</head>

<body class="administrator-page">

@include('models.adminmenu')

<div class="wrapper">
    <div class="header header-filter" style="background-image: url('/img/city2.jpg');"></div>
    <div class="main main-raised">
        <div class="container">

            @yield('content')
            <div style="margin-bottom: 20px;"></div>

        </div>
    </div>
</div>
@yield('modal')
<footer class="footer">
    <div class="container">
        <div class="copyright pull-right">
            &copy; 2016, made with <i class="fa fa-heart heart"></i> by Nanografon
        </div>
    </div>
</footer>
</body>

<script src="/js/main.js"></script>

@yield('script')

</html>