<?php

declare(strict_types=1);

namespace Tests\Browser;

use App\Admin;
use App\University;
use Tests\DuskTestCase;
use Laravel\Dusk\Browser;
use Illuminate\Foundation\Testing\DatabaseMigrations;

/**
 * Class LoginTest.
 */
class LoginTest extends DuskTestCase
{
    use DatabaseMigrations;

    /**
     * A Dusk test example.
     *
     * @return void
     */
    public function testLogin()
    {
//        $password = 'secret';
//
//        $university = factory(University::class)->create();
//
//        $admin = factory(Admin::class)->create([
//            'university_id' => $university->id,
//            'password'      => $password,
//        ]);
//
//        $this->browse(function (Browser $browser) use ($admin, $password) {
//            $browser->visit('/login')
//                ->waitUntil('countAssets === 0')
//                ->assertSee('Вход в панель управления')
//                ->type('input[name=email]', $admin->email)
//                ->type('input[name=password]', $password)
//                ->press('.login-button')
//                ->pause(1000)
//                ->assertPathIs('/schedule');
//        });

        $this->browse(function (Browser $browser) {
            $browser->visit('/test')
                ->waitForText('Message');

        });
    }
}
