<?php

declare(strict_types=1);

namespace App\Http\Controllers\Auth;

use App\Admin;
use Validator;
use App\University;
use App\DefaultTimes;
use Illuminate\Http\Request;
use Illuminate\Contracts\Auth\Guard;
use App\Http\Controllers\Controller;
use Illuminate\Contracts\Auth\StatefulGuard;

/**
 * Class RegisterController.
 */
class AdminRegisterController extends Controller
{
    /**
     * Create a new controller instance.
     */
    public function __construct()
    {
        $this->middleware('guest');
    }

    /**
     * Create a new user instance after a valid registration.
     *
     * @param Request $request
     *
     * @param Guard $guard
     *
     * @return array
     */
    protected function register(Request $request, Guard $guard)
    {
        $validator = Validator::make($request->all(), [
            'university_name'       => 'required|string|max:255|unique:universities',
            'university_short_name' => 'required|string|max:15',

            'email'                 => 'required|email|max:255|unique:admins',
            'password'              => 'required|string|confirmed|min:6|max:60',
            'password_confirmation' => 'required|string',
        ]);

        if ($validator->fails()) {
            return [
                'success'  => false,
                'invalid'  => true,
                'messages' => $validator->messages(),
            ];
        }

        $university = University::create($request->only('university_name', 'university_short_name'));

        DefaultTimes::addDefaultTimes($university->id);

        $admin = Admin::create([
            'email'         => $request->email,
            'password'      => $request->password,
            'university_id' => $university->id,
        ]);

        /* @var StatefulGuard $guard */
        $guard->login($admin, true);

        return [
            'success' => true,
            'goto'    => route('admin_home', [], false),
            'message' => 'Вы успешно зарегистрированы!',
        ];
    }
}
