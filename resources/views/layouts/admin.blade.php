<!DOCTYPE html>
<html lang="ru">

<head>
    <meta charset="UTF-8">
    <link rel="icon" type="image/ico" href="/favicon.ico">
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />

    <meta content='width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0' name='viewport' />
    <meta name="csrf-token" content="{{ csrf_token() }}"/>
    <meta name="app-css-path" content="{{ mix('/css/app.css') }}"/>

    <title>Планировщик расписания</title>

</head>

<body class="administrator-page">

@include('loader')

<div id="app">
    @include('models.adminmenu')

    <router-view></router-view>
</div>
<footer class="footer">
    <div class="container">
        <div class="copyright pull-right">
            &copy; 2017, made with <i class="fa fa-heart heart"></i> by <a href="https://github.com/Nanografon" target="_blank">Nanografon</a>
        </div>
    </div>
</footer>
</body>
<script src="{{ mix('/js/common.js') }}"></script>
<script src="{{ mix('/js/admin.js') }}"></script>
</html>