<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Match_;

class MatchController extends Controller
{
    //
     /*
    funcitonality: get all mtches

    parameter: none

    response: list of matches 
     */

    
    public function getallmatches (Request $request) {
        $matches = Match_::getMatches();
        return response() -> json ([
            'matches' => $matches
        ],200); 
    }

     /*
    funcitonality: return data of specific match
    parameter: match id

    response: match data 
     */

    
    public function getmatch (Request $request) {
        $matches= Match_::getMatchdata ($request->MatchId);
        return response() -> json ([
            'matchData' => $matches
        ],200); 
    }


         /*
    funcitonality: create new match

    parameter: request with match data

    response: boolean 
     */

    
    public function addMatch (Request $request) {
        $matchCreated= Match_::createMatch ($request->home,$request->away,$request->stadium,$request->date,$request->time,$request->main_referee,$request->lineman_1,$request->lineman_2);
    
        return response() -> json ([
            'matchcreated' => $matchCreated
        ],200); 
    }

             /*
    funcitonality: edu match

    parameter: request with match data

    response: boolean 
     */

    
    public function editematch (Request $request) {
        $matchupdated = Match_::editMatch ($request->id,$request->home,$request->away,$request->stadium,$request->date,$request->time,$request->main_referee,$request->lineman_1,$request->lineman_2);
     
        return response() -> json ([
            'matchupdate' => $matchupdated  // true or false
        ],200); 
    }
    
}
