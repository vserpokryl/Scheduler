<?php

declare(strict_types=1);

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

/**
 * Class DefaultTimes.
 */
class DefaultTimes extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('default_times', function (Blueprint $table) {
            $table->increments('id');
            $table->integer('university_id')->unsigned();
            $table->smallInteger('num_subject')->unsigned();
            $table->smallInteger('beginning_hour')->unsigned();
            $table->smallInteger('beginning_minute')->unsigned();
            $table->smallInteger('end_hour')->unsigned();
            $table->smallInteger('end_minute')->unsigned();
            $table->timestamps();

            $table->foreign('university_id')
                ->references('id')->on('universities')
                ->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('default_times');
    }
}
