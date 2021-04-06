<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateMatchesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('matches', function (Blueprint $table) {
            $table->bigIncrements('id'); // primary key
            $table->bigInteger('home');
            $table->bigInteger('away');
            $table->string('stadium')->references('name')->on('stadia')->onUpdate('cascade')->onDelete('cascade');
            $table->date('match_date');
            $table->dateTime('match_time');
            $table->string('main_referee');
            $table->string('lineman_1');
            $table->string('lineman_2');

            $table->timestamps();

        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('matches');
    }
}