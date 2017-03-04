<?php

declare(strict_types=1);

namespace App;

use Illuminate\Notifications\Notifiable;
use Illuminate\Foundation\Auth\User as Authenticatable;

/**
 * Class User.
 */
class User extends Authenticatable
{
    use Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name', 'email', 'password',
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password', 'remember_token',
    ];

    /**
     * @param string $password
     * @param string $user
     *
     * @return User
     */
    public function setPasswordAttribute(string $password, string $user): User
    {
        $this->attributes['password'] = bcrypt($password);

        return $this;
    }
}
