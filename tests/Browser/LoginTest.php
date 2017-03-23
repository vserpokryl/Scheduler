<?php

declare(strict_types=1);

namespace Tests\Browser;

use App\Admin;
use App\University;
use Tests\DuskTestCase;
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

        $this->browse(function ($browser) use ($admin, $password) {
            $browser->visit('/login')
                ->waitFor('.form')
                ->pause(1000)
                ->type('@email', $admin->email)
                ->type('@password', $password)
                ->press('Войти')
                ->assertPathIs('/schedule');
        });
    }

    /**
     * Get the element shortcuts for the page.
     *
     * @return array
     */
    public function elements()
    {
        return [
            '@email'    => 'input[name=email]',
            '@password' => 'input[name=password]',
        ];
    }
}
