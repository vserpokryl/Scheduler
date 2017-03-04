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
            <p>
                <router-link to="/user/foo">/user/foo</router-link>
                <router-link to="/user/bar">/user/bar</router-link>
            </p>
            <router-view></router-view>

        </div>
        <div id="app2">
            <v-select :options="options" v-model="selected" label="value" placeholder="Выбор факультета">
                <p slot="no-options">Асипка</p>
            </v-select>
            @{{ selected }}
        </div>
    </div>
    <script src="{{ mix('js/common.js') }}"></script>
    <script src="{{ mix('js/app.js') }}"></script>
    </body>
</html>
