<!DOCTYPE html>
<html lang="{{ config('app.locale') }}">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="csrf-token" content="{{ csrf_token() }}">

        <title>Laravel</title>

        <link rel="stylesheet" href="{{ mix('css/app.css') }}" type="text/css">
    </head>
    <body>
    <div>
        <div id="app">
            <v-select v-model="selected" :options="['foo','bar']"></v-select>
            <p>
                <router-link to="/user/foo">/user/foo</router-link>
                <router-link to="/user/bar">/user/bar</router-link>
            </p>
            <router-view></router-view>
        </div>
    </div>
    <script src="{{ mix('js/common.js') }}"></script>
    <script src="{{ mix('js/app.js') }}"></script>
    </body>
</html>
