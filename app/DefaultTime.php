<?php

declare(strict_types=1);

namespace App;

use Illuminate\Database\Eloquent\Model;

/**
 * Class DefaultTime
 */
class DefaultTime extends Model
{
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'university_id', 'num_subject', 'start_hour', 'start_minute', 'end_hour', 'end_minute',
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
            ['start_hour' => 8,  'start_minute' => 30, 'end_hour' => 10, 'end_minute' => 5],
            ['start_hour' => 10, 'start_minute' => 15, 'end_hour' => 11, 'end_minute' => 50],
            ['start_hour' => 12, 'start_minute' => 30, 'end_hour' => 14, 'end_minute' => 05],
            ['start_hour' => 14, 'start_minute' => 15, 'end_hour' => 15, 'end_minute' => 50],
            ['start_hour' => 16, 'start_minute' => 00, 'end_hour' => 17, 'end_minute' => 35],
            ['start_hour' => 17, 'start_minute' => 45, 'end_hour' => 19, 'end_minute' => 20],
        ];

        foreach ($defaultTimes as $num_subject => $defaultTime) {
            if (! self::create([
                'university_id' => $university_id,
                'num_subject'   => $num_subject,
                'start_hour'    => $defaultTime['start_hour'],
                'start_minute'  => $defaultTime['start_minute'],
                'end_hour'      => $defaultTime['end_hour'],
                'end_minute'    => $defaultTime['end_minute'],
            ])) {
                return false;
            }
        }

        return true;
    }
}
