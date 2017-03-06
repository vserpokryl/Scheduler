<?php

declare(strict_types=1);
use Illuminate\Routing\Router;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

/* @var Router $router */
Route::get('/', 'HomeController@index')->name('home');
Route::pattern('id', '[0-9]+');

Route::group(['namespace' => 'Auth'], function () {
    Route::group(['middleware' => ['guest']], function () {
        Route::get('login', 'LoginController@index')->name('login');
        Route::post('login', 'LoginController@login');
        Route::get('register', 'RegisterController@index')->name('register');
        Route::post('register', 'RegisterController@register');
    });

    Route::group(['middleware' => ['auth']], function () {
        Route::match(['GET', 'POST'], 'logout', 'LoginController@logout')->name('logout');
        Route::get('confirmed', 'ConfirmationController@index')->name('confirmation.confirmed');
        Route::get('confirm/{token}', 'ConfirmationController@confirm')
            ->where('token', '[a-zA-Z0-9\._]+')
            ->name('confirmation.confirm');
    });
});
