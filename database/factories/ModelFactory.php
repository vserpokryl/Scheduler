<?php

declare(strict_types=1);
/*
|--------------------------------------------------------------------------
| Model Factories
|--------------------------------------------------------------------------
|
| Here you may define all of your model factories. Model factories give
| you a convenient way to create models for testing and seeding your
| database. Just tell the factory how a default model should look.
|
*/

/** @var \Illuminate\Database\Eloquent\Factory $factory */
$factory->define(App\Admin::class, function (Faker\Generator $faker) {
    static $university_id;
    static $password;

    return [
        'email'          => $faker->unique()->safeEmail,
        'password'       => $password ?: $password = 'secret',
        'university_id'  => $university_id ?: $university_id = 1,
        'remember_token' => str_random(10),
    ];
});

$factory->define(App\University::class, function (Faker\Generator $faker) {
    return [
        'university_name'          => $faker->name,
        'university_short_name'    => $faker->name,
    ];
});