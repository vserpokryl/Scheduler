<?php

declare(strict_types=1);

use App\Admin;
use App\University;
use App\DefaultTimes;
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
                'password'      => 'password',
                'university_id' => $university->id,
            ]));

            DefaultTimes::addDefaultTimes($university->id);
        });
    }
}
