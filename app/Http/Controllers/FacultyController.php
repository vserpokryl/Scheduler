<?php

declare(strict_types=1);

namespace App\Http\Controllers;

use Auth;

/**
 * Class FacultyController.
 */
class FacultyController extends Controller
{
    /**
     * @return mixed
     */
    public function getAll()
    {
        return Auth::user()->university->faculties()->select('id', 'name', 'short_name')->get();
    }
}
