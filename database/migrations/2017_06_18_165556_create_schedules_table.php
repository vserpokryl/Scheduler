<?php

declare(strict_types=1);

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

/**
 * Class CreateSchedulesTable
 */
class CreateSchedulesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('schedules', function (Blueprint $table) {
            $table->increments('id');

            $table->smallInteger('week_day');
            $table->smallInteger('num_week');
            $table->smallInteger('num_discipline');

            $table->string('time');
            $table->integer('discipline_id')->unsigned();
            $table->integer('classroom_id')->unsigned()->index();
            $table->integer('teacher_id')->unsigned()->index();
            $table->integer('group_id')->unsigned()->index();
            $table->integer('subgroup_id')->unsigned()->nullable();
            $table->integer('discipline_type_id')->unsigned();
            $table->integer('study_period_id')->unsigned()->index();
            $table->date('date_study')->nullable();

            $table->boolean('all_group');

            $table->timestamps();

            $table->foreign('discipline_id')
                ->references('id')->on('disciplines')
                ->onDelete('cascade');
            $table->foreign('classroom_id')
                ->references('id')->on('classrooms')
                ->onDelete('cascade');
            $table->foreign('teacher_id')
                ->references('id')->on('teachers')
                ->onDelete('cascade');
            $table->foreign('group_id')
                ->references('id')->on('groups')
                ->onDelete('cascade');
            $table->foreign('subgroup_id')
                ->references('id')->on('subgroups')
                ->onDelete('cascade');
            $table->foreign('discipline_type_id')
                ->references('id')->on('discipline_types')
                ->onDelete('cascade');
            $table->foreign('study_period_id')
                ->references('id')->on('study_periods')
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
        Schema::dropIfExists('schedules');
    }
}
