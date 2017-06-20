<?php

declare(strict_types=1);

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

/**
 * Class CreateTeachingLoadsTable.
 */
class CreateTeachingLoadsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('teaching_loads', function (Blueprint $table) {
            $table->increments('id');

            $table->smallInteger('hours');

            $table->integer('group_id')->unsigned()->index();
            $table->integer('discipline_period_id')->unsigned()->index();
            $table->integer('discipline_id')->unsigned()->index();
            $table->integer('teacher_id')->unsigned()->index();
            $table->integer('classroom_id')->unsigned()->index();
            $table->integer('discipline_type_id')->unsigned()->index();

            $table->timestamps();

            $table->foreign('group_id')
                ->references('id')->on('groups')
                ->onDelete('cascade');
            $table->foreign('discipline_period_id')
                ->references('id')->on('discipline_periods')
                ->onDelete('cascade');
            $table->foreign('discipline_id')
                ->references('id')->on('disciplines')
                ->onDelete('cascade');
            $table->foreign('teacher_id')
                ->references('id')->on('teachers')
                ->onDelete('cascade');
            $table->foreign('classroom_id')
                ->references('id')->on('classrooms')
                ->onDelete('cascade');
            $table->foreign('discipline_id')
                ->references('id')->on('discipline_types')
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
        Schema::dropIfExists('teaching_loads');
    }
}
