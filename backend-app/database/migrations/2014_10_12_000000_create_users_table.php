<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateUsersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('users', function (Blueprint $table) {
            $table->string('username');
            $table->string('password');
            $table->string('firstname');
            $table->string('lastname');
            $table->date('birthdate');
            $table->boolean('gender'); // 0-> male 1-> female
            $table->string('city');
            $table->string('address');
            $table->string('email')->unique();
            $table->boolean('role'); // 0-> normal user 1-> manager 
            
            $table->rememberToken();
            $table->timestamps();

            // restrictions
            $table->primary('username');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('users');
    }
}
