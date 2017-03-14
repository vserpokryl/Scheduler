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

<body>

@include('loader')

<div id="app">

    @if (Auth::guest())
        @include('models.guestmenu')
    @else
        @include('models.adminmenu')
    @endif

    <router-view></router-view>

</div>
</body>
<script src="{{ mix('/js/common.js') }}"></script>
<script src="{{ mix('/js/home.js') }}"></script>
</html>