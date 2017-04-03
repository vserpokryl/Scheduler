<?php

declare(strict_types=1);

namespace App\Http\Controllers\Auth;

use Auth;
use Validator;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

/**
 * Class LoginController.
 */
class AdminLoginController extends Controller
{
    /**
     * Create a new controller instance.
     */
    public function __construct()
    {
        $this->middleware('guest', ['except' => 'logout']);
    }

    /**
     * @param Request $request
     *
     * @return \Illuminate\Http\RedirectResponse|\Illuminate\Routing\Redirector
     */
    public function logout(Request $request)
    {
        Auth::guard()->logout();

        $request->session()->flush();

        $request->session()->regenerate();

        return redirect('/');
    }

    /**
     * @param Request $request
     *
     * @return array|\Illuminate\Http\RedirectResponse|\Illuminate\Routing\Redirector
     */
    public function login(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'email'    => 'required|email',
            'password' => 'required|min:6',
        ]);

        if ($validator->fails()) {
            return [
                'success'  => false,
                'invalid'  => true,
                'messages' => $validator->messages(),
            ];
        }

        if (Auth::guard()->attempt([
                'email' => $request->email,
                'password' => $request->password,
            ], $request->remember)) {
            return [
                'success' => true,
                'goto'    => route('admin_home', [], false),
            ];
        }

        return [
            'success' => false,
            'message' => 'Такой комбинации логин и пароль не существует!',
        ];
    }
}
