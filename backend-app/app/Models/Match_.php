<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\DB;


class Match_ extends Model
{
    use HasFactory;

    protected $fillable = [
        'id', 'home', 'away', 'stadium', 'match_date', 'main_referee', 'lineman_1', 'linman_2'
    ];

    /*
    funcitonality: view all the matches in the database

    parameter: none

    response: list of matches - could be empty
     */

    public function getMatches () {

        $matches = DB::table('matches')->get();
        return $matches;

    }

        /*
    funcitonality: get data of specific match
    parameter: match id

    response: match data
     */

    public function getMatchdata ($matchid) {

        $match = DB::table('matches')->where('id',$matchid)->get();

        return $match;

    }


    /*
    functionality: check if a match exists

    parameter: int id required

    response: bool true if exists , false otherwise
     */

    public function matchExists ($id) {

        return self::where('id', $id)->exists();


    }

    /*
    funcitonality: edit a matches in the database

    parameter: int 'id'
                int  'home', 
                int  'away'
                string 'stadium'
                string 'match_date'
                string 'main_referee'
                string 'lineman_1'
                string 'linman_2'

    response: bool 
     */

    public function editMatch (Request $request) {

        if (!matchExists){
            return false;
        }
        else{
            DB::table('matches')
            ->where('id', $request->id)
            ->update(['home' => $request->home,
                        'away'  => $request->away,
                        'stadium' => $request->stadium,
                        'date' => $request->date,
                        'time' => $request->time,
                        'main_referee' => $request->main_referee,
                        'lineman_1' => $request->lineman_1,
                        'lineman_2' => $request->lineman_2,]
                    );
            return true;
        }

    }


    /*
    funcitonality: create a matches in the database

    parameter: request carry 
                int 'id'
                int  'home', 
                int  'away'
                string 'stadium'
                string 'match_date'
                string 'main_referee'
                string 'lineman_1'
                string 'linman_2'

    response: bool 
     */
    public function createMatch (Request $request) {

        return DB::table('matches')->insert(['home' => $request->home,
        'away'  => $request->away,
        'stadium' => $request->stadium,
        'date' => $request->date,
        'time' => $request->time,
        'main_referee' => $request->main_referee,
        'lineman_1' => $request->lineman_1,
        'lineman_2' => $request->lineman_2,]);

    }


}
