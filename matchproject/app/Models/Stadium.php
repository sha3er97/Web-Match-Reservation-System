<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\DB;


class Stadium extends Model
{
    use HasFactory;

    protected $fillable = [
        'name', 'number_of_rows', 'number_of_columns'
    ];



         /*
    funcitonality: add  new stadium

    parameter: all table attributes

    response: database row of that user (true) 
     */

    public static function AddStadium ($name, $number_of_rows, $number_of_columns) {
        
        return DB::insert('insert into stadiums(name, number_of_rows, number_of_columns)
                       values(?, ?, ?);', array($name, $number_of_rows, $number_of_columns));

        // return DB::table('users')->insert([
        //     'name' => $name,
        //     'number_of_rows' => $number_of_rows,
        //     'number_of_columns' => $number_of_columns,
        
        // ]);
    }

}
