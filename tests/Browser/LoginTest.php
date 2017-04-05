<?php

declare(strict_types=1);

namespace Tests\Browser;

use App\Admin;
use App\University;
use Tests\DuskTestCase;
use Laravel\Dusk\Browser;
use Tests\Browser\Pages\Login;
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
        $password = 'secret';

        $university = factory(University::class)->create();

        $admin = factory(Admin::class)->create([
            'university_id' => $university->id,
            'password'      => $password,
        ]);

        $this->browse(function (Browser $browser) use ($admin, $password) {
            //            $browser->visit(new Login())
//                ->waitUntil('countAssets === 0')
//                ->type('@email', $admin->email)
//                ->type('@password', $password)
//                ->pause(500)
//                ->press('.login-button')
//                ->pause(500)
//                ->assertPathIs('/schedule');
        });
    }
}