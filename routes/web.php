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
Route::get('/faculties/getAll/{university}', 'FacultyController@getAll');
Route::get('/specialties/getAll/{faculty}', 'SpecialtyController@getAll');
Route::get('/groups/getAll/{specialty}', 'GroupController@getAll');
Route::get('/schedule/get/{group}', 'ScheduleController@getSchedule');

Route::group(['middleware' => ['guest']], function () {
    Route::get('login', 'HomeController@index');
    Route::get('register', 'HomeController@index');
//    Route::get('password_reset', 'HomeController@index');

    Route::post('register', 'Auth\AdminRegisterController@register');
    Route::post('login', 'Auth\AdminLoginController@login');
});

Route::group(['middleware' => ['auth']], function () {
    Route::get('/schedule', 'AdminController@index')->name('admin_home');

    Route::get('/edit/groups', 'AdminController@index');
    Route::post('/edit/groups/add', 'GroupController@add');
    Route::delete('/edit/groups/destroy/{group}', 'GroupController@destroy');
    Route::put('/edit/groups/update/{group}', 'GroupController@update');

    Route::get('/edit/faculties', 'AdminController@index');
    Route::post('/edit/faculties/add', 'FacultyController@add');
    Route::delete('/edit/faculties/destroy/{faculty}', 'FacultyController@destroy');
    Route::put('/edit/faculties/update/{faculty}', 'FacultyController@update');

    Route::get('/edit/specialties', 'AdminController@index');
    Route::post('/edit/specialties/add', 'SpecialtyController@add');
    Route::delete('/edit/specialties/destroy/{specialty}', 'SpecialtyController@destroy');
    Route::put('/edit/specialties/update/{specialty}', 'SpecialtyController@update');

    Route::get('/edit/teachers', 'AdminController@index');
    Route::post('/edit/teachers/add', 'TeacherController@add');
    Route::delete('/edit/teachers/destroy/{teacher}', 'TeacherController@destroy');
    Route::put('/edit/teachers/update/{teacher}', 'TeacherController@update');

    Route::get('/edit/subjects', 'AdminController@index');
    Route::post('/edit/subjects/add', 'SubjectController@add');
    Route::delete('/edit/subjects/destroy/{subject}', 'SubjectController@destroy');
    Route::put('/edit/subjects/update/{subject}', 'SubjectController@update');

    Route::get('/edit/buildings', 'AdminController@index');
    Route::post('/edit/buildings/add', 'BuildingController@add');
    Route::delete('/edit/buildings/destroy/{building}', 'BuildingController@destroy');
    Route::put('/edit/buildings/update/{building}', 'BuildingController@update');

    Route::get('/edit/classrooms', 'AdminController@index');
    Route::post('/edit/classrooms/add', 'ClassroomController@add');
    Route::delete('/edit/classrooms/destroy/{classroom}', 'ClassroomController@destroy');
    Route::put('/edit/classrooms/update/{classroom}', 'ClassroomController@update');

    Route::get('/edit/teachingloads', 'AdminController@index');
    Route::post('/edit/teachingloads/add', 'TeachingloadController@add');
    Route::delete('/edit/teachingloads/destroy/{teachingload}', 'TeachingloadController@destroy');
    Route::put('/edit/teachingloads/update/{teachingload}', 'TeachingloadController@update');

    Route::get('logout', 'Auth\AdminLoginController@logout');
});

//    Route::group(['middleware' => ['auth']], function () {
//        Route::match(['GET', 'POST'], 'logout', 'LoginController@logout')->name('logout');
//        Route::get('confirmed', 'ConfirmationController@index')->name('confirmation.confirmed');
//        Route::get('confirm/{token}', 'ConfirmationController@confirm')
//            ->where('token', '[a-zA-Z0-9\._]+')
//            ->name('confirmation.confirm');
//    });
