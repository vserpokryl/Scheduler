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
Route::pattern('id', '[0-9]+');
Route::get('/', 'HomeController@index')->name('home');

Route::group(['middleware' => ['guest']], function () {
    Route::get('login', 'HomeController@index');
    Route::get('register', 'HomeController@index');
//    Route::get('password_reset', 'HomeController@index');

    Route::post('register', 'Auth\AdminRegisterController@register');
    Route::post('login', 'Auth\AdminLoginController@login');
});

Route::group(['middleware' => ['auth']], function () {
    Route::get('/schedule', 'AdminController@index')->name('admin_home');
    Route::get('logout', 'Auth\AdminLoginController@logout');
});

//    Route::group(['middleware' => ['auth']], function () {
//        Route::match(['GET', 'POST'], 'logout', 'LoginController@logout')->name('logout');
//        Route::get('confirmed', 'ConfirmationController@index')->name('confirmation.confirmed');
//        Route::get('confirm/{token}', 'ConfirmationController@confirm')
//            ->where('token', '[a-zA-Z0-9\._]+')
//            ->name('confirmation.confirm');
//    });
