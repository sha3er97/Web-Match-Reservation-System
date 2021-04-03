<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Stadium extends Model
{
    use HasFactory;

    protected $fillable = [
        'name', 'number_of_rows', 'number_of_columns'
    ];



         /*
    funcitonality: add  new stadium

    parameter: all table attributes

    response: database row of that user 
     */

    public function AddStadium ($name, $number_of_rows, $number_of_columns) {
        return DB::table('users')->insert([
            'name' => $name,
            'number_of_rows' => $number_of_rows,
            'number_of_columns' => $number_of_columns,
        
        ]);
    }

}
