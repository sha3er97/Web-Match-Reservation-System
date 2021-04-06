<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\DB;

class Seat extends Model
{
    use HasFactory;

    protected $fillable = [
        'id',
        'row',
        'column',
        'state',
        'stadium',
        'user',
        'match',

    ];


     /*
    funcitonality: reserve seat in a match

    parameter: all table attributes

    response: database row of reserved seat 
     */

    public static function reserve ( $row, $column, $state, $stadium, $user, $match) {


        $isCreated =  DB::table('seats')->insert([
            'row' => $row,
            'column' => $column,
            'state' => $state,
            'stadium' => $stadium,
            'user' => $user,
            'match' => $match,
        ]);
        return DB::table('seats')->max('id');
    }

     /*
    funcitonality: get all seats of match

    parameter: match id

    response: list of database of all reserved seats
     */

    
    public static function getseats ($matchid) {
        $seatss = DB::table('seats')->where('match',$matchid)->get();

        return $seatss;
    }

    /*
    funcitonality:delete reserved seat from match

    parameter: seat id

    response: delete seat from databes
     */

    public static function cancelReservation ($seatID) {
        return DB::table('seats')->where('id', $seatID)->delete();
    }

        /*
    funcitonality:delete reserved seat from match

    parameter: seat id

    response: delete seat from databes
     */

    public static function getuserseats ($username) {
/*
        $sentmessages = DB::table('seats')->join('matches', 'matches.id', '=', 'seats.match')
                        ->where('seats.user', $username)
                        ->get(['seats.*', 'matches.*']);

        return  $sentmessages;
*/



        $sentmessages = DB::select(" select *
                from seats as s, matches as m
                where (s.match=m.id and s.user='$username');");

        return  $sentmessages;

    }

 

}
