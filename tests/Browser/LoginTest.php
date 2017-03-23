<?php

namespace Tests\Browser;

use App\Admin;
use App\University;
use Tests\DuskTestCase;
use Illuminate\Foundation\Testing\DatabaseMigrations;

class LoginTest extends DuskTestCase
{
    /**
     * A Dusk test example.
     *
     * @return void
     */
    public function testLogin()
    {
//        $university = factory(University::class)->create();
//
//        dd($university);

//        $admin = factory(Admin::class)->create([
//            'email' => 'test@mytest.ru',
//            'password' => '12345678',
//            'university_id' => $university->id,
//        ]);


//        $this->browse(function ($browser) use ($admin) {
//            $browser->visit('/login')
//                ->waitFor('.form')
//                ->type('email', $admin->email)
//                ->type('password', '12345678')
//                ->press('Login')
//                ->assertPathIs('/schedule');
//        });
    }
}
