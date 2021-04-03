<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\DB;
class Seat extends Model
{
    use HasFactory;

    protected $fillable = [
        'id', 'row', 'column', 'state', 'stadium', 'user', 'match'
    ];
    /*$table->id();
      
            $table->integer('row');
            $table->integer('column');
            $table->string('state');
            $table->string('stadium');
            $table->string('user');
            $table->integer('match'); */

    /*
    funcitonality: view all the seat of amatch

    parameter: none

    response: list of seats - could be empty
     */

    public function getseats ($matchid) {

        $allSeats = DB::select(" select *
            from seats
            where ('match'= $matchid) ");
            
        return $allSeats;

        
    }

    /*
    funcitonality: cancel reservation of match

    parameter: seat id

    response: boolean
     */
    public static function cancel_reservation($seat_id)
    {
        return self::where('id', $seat_id)->delete();
    }


    public static function reseve($username, $community_id)
    {
        try {
            self::create(['username' => $username, 'community_id' => $community_id]);

            return true;
        } catch (\Exception $e) {
            return false;
        }
    }
}
