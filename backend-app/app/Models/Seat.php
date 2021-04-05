<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

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

    public function reserve ($id, $row, $column, $state, $stadium, $user, $match) {
        return DB::table('seats')->insert([
            'username' => $id,
            'password' => $row,
            'firstname' => $column,
            'lastname' => $state,
            'birthdate' => $stadium,
            'gender' => $user,
            'city' => $match,
   

        ]);
    }

     /*
    funcitonality: get all seats of match

    parameter: match id

    response: list of database of all reserved seats
     */

    
    public function getseats ($matchid) {
        $seatss = DB::table('seats')->ehere('match',$matchid)->get();

        return $seatss;
    }

    /*
    funcitonality:delete reserved seat from match

    parameter: seat id

    response: delete seat from databes
     */

    public function cancelReservation ($seatID) {
        return DB::table('seats')->where('id', $seatID)->delete();
    }

        /*
    funcitonality:delete reserved seat from match

    parameter: seat id

    response: delete seat from databes
     */

    public function getuserseats ($username) {

        $sentmessages = User::join('Match_', 'Match_.id', '=', 'seats.match')
                        ->where('seats.user', $username)
                        ->get(['seats.*', 'Match_.*']);

        return  $sentmessages;




        $sentmessages = DB::select(" select *
                from seats as s, Match_ as m
                where (s.match=m.id and s.user='$username');");

        return  $sentmessages;

    }

 

}
