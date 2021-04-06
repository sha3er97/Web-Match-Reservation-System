<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\DB;
use Carbon\Carbon;


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

    public static function getMatches () {

        $matches = DB::table('matches')->get();
        return $matches;

    }

        /*
    funcitonality: get data of specific match
    parameter: match id

    response: match data
     */

    public static function getMatchdata ($matchid) {

        $match = DB::table('matches')->where('id',$matchid)->get();

        return $match;

    }


    /*
    functionality: check if a match exists

    parameter: int id required

    response: bool true if exists , false otherwise
     */

    public static function matchExists ($id) {

        return  DB::table('matches')->where('id', $id)->exists();


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

    public static function editMatch ($id,$home,$away,$stadium,$date,$time,$main_referee,$lineman_1,$lineman_2) {

        if (!self ::matchExists ($id)){
            return false;
        }
        else{
            DB::table('matches')
            ->where('id', $id)
            ->update(['home' => $home,
                        'away'  => $away,
                        'stadium' => $stadium,
                        'match_date' => Carbon::parse($date),
                        'match_time' => Carbon::parse($time),
                        'main_referee' => $main_referee,
                        'lineman_1' => $lineman_1,
                        'lineman_2' => $lineman_2,]
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
    public static function createMatch ($home,$away,$stadium,$date,$time,$main_referee,$lineman_1,$lineman_2) {

        $isCreated = DB::table('matches')->insert(['home' => $home,
                        'away'  => $away,
                        'stadium' => $stadium,
                        'match_date' => Carbon::parse($date),
                        'match_time' => Carbon::parse($time),
                        'main_referee' => $main_referee,
                        'lineman_1' => $lineman_1,
                        'lineman_2' => $lineman_2,]);

       return DB::table('matches')->max('id');
    }


}
