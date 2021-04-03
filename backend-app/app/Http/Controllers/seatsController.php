<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\seat;

class seatController extends Controller
{
    //
     /*
    funcitonality: get reserved seats of match

    parameter: request with match id

    response: list of seats 
     */

    public function getSeatsOfMatch (Request $request) {
        return seat::AddStadium ($request->MatchId);
    }

         /*
    funcitonality: reserve seat in a match

    parameter: reserved seat data

    response: bool
     */
   
    public function reserveSeat (Request $request) {
        return seat::reserve ($request->id,$request->row,$request->column,$request->state,$request->stadium,$request->user,$request->match);
    }


    /*
    funcitonality: cancel seat reservation

    parameter: request have cancel seat ID

    response: bool
     */
   
    public function cancelseat (Request $request) {
        return seat::cancelReservation ($request->id);
    }

}