<?php

declare(strict_types=1);

namespace Tests\Browser\Pages;

use Laravel\Dusk\Browser;
use Laravel\Dusk\Page as BasePage;

/**
 * Class Login.
 */
class Login extends BasePage
{
    /**
     * Get the URL for the page.
     *
     * @return string
     */
    public function url()
    {
        return '/login';
    }

    /**
     * Assert that the browser is on the page.
     *
     * @param Browser $browser
     *
     * @return void
     */
    public function assert(Browser $browser)
    {
        $password = 'secret';

        $university = factory(University::class)->create();

        $admin = factory(Admin::class)->create([
            'university_id' => $university->id,
            'password'      => $password,
        ]);

        $browser->visit('/login')
            ->assertPathIs($this->url())
            ->waitUntil('window.countAssets === 0')
            ->assertSee('Вход в панель управления')
            ->type('@email', $admin->email)
            ->type('@password', $password)
//                ->pause(500)
            ->press('.login-button');
//                ->pause(3000)
//
//                ->click('#login1')
//                ->waitFor('input[name=email]')
//                ->assertPathIs('/schedule')
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
