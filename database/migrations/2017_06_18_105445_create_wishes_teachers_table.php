<?php

declare(strict_types=1);

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

/**
 * Class CreateWishesTeachersTable.
 */
class CreateWishesTeachersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('wishes_teachers', function (Blueprint $table) {
            $table->increments('id');

            $table->smallInteger('week_day');
            $table->smallInteger('num_week');
            $table->smallInteger('num_discipline');

            $table->integer('teacher_id')->unsigned()->index();

            $table->timestamps();

            $table->foreign('teacher_id')
                ->references('id')->on('teachers')
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
        Schema::dropIfExists('wishes_teachers');
    }
}
