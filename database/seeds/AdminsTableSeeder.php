<?php

declare(strict_types=1);

use App\Admin;
use App\Faculty;
use App\University;
use App\DefaultTime;
use Illuminate\Database\Seeder;

/**
 * Class AdminsTableSeeder.
 */
class AdminsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        factory(University::class, 1)->create([
            'university_name'       => 'Сибирский государственный университет водного транспорта',
            'university_short_name' => 'СГУВТ',
        ])->each(function ($university) {
            $university->admins()->save(factory(Admin::class)->make([
                'email'         => 'test@test.ru',
                'password'      => 'password'
            ]));

            $university->faculties()->save(factory(Faculty::class)->make([
                'name'          => 'Электромеханический факультет',
                'short_name'    => 'ЭМФ',
            ]));

            $university->faculties()->save(factory(Faculty::class)->make([
                'name'          => 'Гидротехнический факультет',
                'short_name'    => 'ГТФ',
            ]));

            $university->faculties()->save(factory(Faculty::class)->make([
                'name'          => 'Судомеханический факультет',
                'short_name'    => 'СМФ',
            ]));

            $university->faculties()->save(factory(Faculty::class)->make([
                'name'          => 'Факультет судовождения',
                'short_name'    => 'СВФ',
            ]));

            $university->faculties()->save(factory(Faculty::class)->make([
                'name'          => 'Факультет управление на водном транспорте',
                'short_name'    => 'УВТ',
            ]));

            DefaultTime::addDefaultTimes($university->id);
        });
    }
}
