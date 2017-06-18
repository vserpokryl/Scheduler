<?php

declare(strict_types=1);

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

/**
 * Class CreateDisciplineTypesTable.
 */
class CreateDisciplineTypesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('discipline_types', function (Blueprint $table) {
            $table->increments('id');
            $table->string('type', 255);
            $table->integer('university_id')->unsigned()->index();

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
        Schema::dropIfExists('discipline_types');
    }
}
