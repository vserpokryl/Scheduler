<?php

declare(strict_types=1);

namespace App;

use Illuminate\Database\Eloquent\Model;

/**
 * Class Teacher.
 */
class Teacher extends Model
{
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'first_name', 'middle_name', 'last_name', 'department_id',
    ];

    /**
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function department()
    {
        return $this->belongsTo(Department::class);
    }

    /**
     * @return \Illuminate\Database\Eloquent\Relations\hasMany
     */
    public function schedules()
    {
        return $this->hasMany(Schedule::class);
    }

    /**
     * @return \Illuminate\Database\Eloquent\Relations\hasMany
     */
    public function wishesTeachers()
    {
        return $this->hasMany(WishesTeacher::class);
    }
}
