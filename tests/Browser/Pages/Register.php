<?php

declare(strict_types=1);

namespace Tests\Browser\Pages;

use Laravel\Dusk\Browser;
use Laravel\Dusk\Page as BasePage;

/**
 * Class Register.
 */
class Register extends BasePage
{
    /**
     * Get the URL for the page.
     *
     * @return string
     */
    public function url()
    {
        return '/register';
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
        $browser->assertPathIs($this->url())
            ->assertSee('Регистрация');
    }

    /**
     * Get the element shortcuts for the page.
     *
     * @return array
     */
    public function elements()
    {
        return [
            '@email'                 => 'input[name=email]',
            '@university_name'       => 'input[name=university_name]',
            '@university_short_name' => 'input[name=university_short_name]',
            '@password'              => 'input[name=password]',
            '@password_confirmation' => 'input[name=password_confirmation]',
        ];
    }
}
