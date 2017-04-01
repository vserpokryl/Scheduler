<?php

declare(strict_types=1);

namespace Tests\Browser;

use App\Admin;
use App\University;
use Tests\DuskTestCase;
use Laravel\Dusk\Browser;
use Tests\Browser\Pages\Register;
use Illuminate\Foundation\Testing\DatabaseMigrations;

/**
 * Class LoginTest.
 */
class RegisterTest extends DuskTestCase
{
    use DatabaseMigrations;

    /**
     * A Dusk test example.
     *
     * @return void
     */
    public function testRegister()
    {
        $password = 'secret';

        $university = factory(University::class)->make();

        $admin = factory(Admin::class)->make([
            'university_id' => $university->id,
            'password'      => $password,
        ]);

        $this->browse(function (Browser $browser) use ($admin, $password, $university) {
            $browser->visit(new Register())
                ->waitUntil('countAssets === 0')
                ->type('@email', $admin->email)
                ->type('@university_name', $university->university_name)
                ->type('@university_short_name', $university->university_short_name)
                ->type('@password', $password)
                ->type('@password_confirmation', $password)
                ->pause(500)
                ->press('.register-button')
                ->pause(3000)
                ->assertPathIs('/schedule');

            $db_university = University::where('university_name', $university->university_name)->first();
            $db_admin = Admin::where('university_id', $db_university->id)->first();

            $this->assertEquals($university->university_name, $db_university->university_name);
            $this->assertEquals($university->university_short_name, $db_university->university_short_name);

            $this->assertEquals($admin->email, $db_admin->email);
        });
    }
}
