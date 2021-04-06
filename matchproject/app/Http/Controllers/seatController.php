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
        $seats_of_match = seat::getseats ($request->MatchId);
        return response()->json([
            'success' => true,
            'seats_of_match' => $seats_of_match
        ],200);
    }

         /*
    funcitonality: reserve seat in a match

    parameter: reserved seat data

    response: bool
     */
   
    public function reserveSeat (Request $request) {
        $id =  seat::reserve ($request->row,$request->column,$request->state,$request->stadium,$request->user,$request->match);
        return response()->json([
            'success' => true,
            'seat_id' => $id
        ],200);
    }


    /*
    funcitonality: cancel seat reservation

    parameter: request have cancel seat ID

    response: bool
     */
   
    public function cancelseat (Request $request) {
        $bool = seat::cancelReservation ($request->id);
        return response()->json([
            'success' => $bool    //bool canceled or not
        ],200);
    }

    /*
    funcitonality: cancel seat reservation

    parameter: request have cancel seat ID

    response: bool
     */
   
    public function seatsOfUser (Request $request) {
        $seats = seat::getuserseats ($request->username);
        return response()->json([
            'success' => true,
            'seatsid' => $seats
        ],200);

    }
}
