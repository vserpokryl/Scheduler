<?php

declare(strict_types=1);

namespace App;

use Illuminate\Database\Eloquent\Model;

/**
 * Class DefaultTimes.
 */
class DefaultTimes extends Model
{
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'university_id', 'num_subject', 'beginning_hour', 'beginning_minute', 'end_hour', 'end_minute',
    ];

    /**
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function university()
    {
        return $this->belongsTo(University::class);
    }

    /**
     * @param $university_id
     *
     * @return bool
     */
    public static function addDefaultTimes($university_id)
    {
        $defaultTimes = [
            ['beginning_hour' => 8,  'beginning_minute' => 30, 'end_hour' => 10, 'end_minute' => 5],
            ['beginning_hour' => 10, 'beginning_minute' => 15, 'end_hour' => 11, 'end_minute' => 50],
            ['beginning_hour' => 12, 'beginning_minute' => 30, 'end_hour' => 14, 'end_minute' => 05],
            ['beginning_hour' => 14, 'beginning_minute' => 15, 'end_hour' => 15, 'end_minute' => 50],
            ['beginning_hour' => 16, 'beginning_minute' => 00, 'end_hour' => 17, 'end_minute' => 35],
            ['beginning_hour' => 17, 'beginning_minute' => 45, 'end_hour' => 19, 'end_minute' => 20],
        ];

        foreach ($defaultTimes as $num_subject => $defaultTime) {
            if (! self::create([
                'university_id'    => $university_id,
                'num_subject'      => $num_subject,
                'beginning_hour'   => $defaultTime['beginning_hour'],
                'beginning_minute' => $defaultTime['beginning_minute'],
                'end_hour'         => $defaultTime['end_hour'],
                'end_minute'       => $defaultTime['end_minute'],
            ])) {
                return false;
            }
        }

        return true;
    }
}
