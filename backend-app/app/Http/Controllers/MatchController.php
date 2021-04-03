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
        return Match_::getMatches();
    }

     /*
    funcitonality: return data of specific match
    parameter: match id

    response: match data 
     */

    
    public function getmatch (Request $request) {
        return Match_::getMatchdata ($request->MatchId);
    }


         /*
    funcitonality: create new match

    parameter: request with match data

    response: boolean 
     */

    
    public function addMatch (Request $request) {
        return Match_::createMatch ($request);
    }

             /*
    funcitonality: edu match

    parameter: request with match data

    response: boolean 
     */

    
    public function editematch (Request $request) {
        return Match_::editMatch ($request);
     }
}
