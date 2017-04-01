<?php

declare(strict_types=1);

use Illuminate\Database\Seeder;

/**
 * Class AdminTableSeeder.
 */
class AdminTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $university = \App\University::create([
            'university_name'       => 'Сибирский государственный университет водного транспорта',
            'university_short_name' => 'СГУВТ',
        ]);

        \App\DefaultTimes::addDefaultTimes($university->id);

        \App\Admin::create([
            'email'         => 'test@test.ru',
            'password'      => 'password',
            'university_id' => $university->id,
        ]);
    }
}
