<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateSeatsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('seats', function (Blueprint $table) {
            //$table->bigIncrements('id');
            $table->integer('row');
            $table->integer('column');
            $table->string('state');
            $table->string('stadium')->references('name')->on('stadia')->onUpdate('cascade')->onDelete('cascade');
            $table->string('user')->references('username')->on('users')->onUpdate('cascade')->onDelete('cascade');
            $table->bigInteger('match')->references('id')->on('matches')->onUpdate('cascade')->onDelete('cascade');

            $table->timestamps();

            // TBD 
            // make the primary key composite (row,colums,stadium)
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('seats');
    }
}
