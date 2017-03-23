<?php

declare(strict_types=1);

namespace App\Http\Controllers;

/**
 * Class AdminController.
 */
class AdminController extends Controller
{
    public function index()
    {
        return view('layouts.admin');
    }
}
