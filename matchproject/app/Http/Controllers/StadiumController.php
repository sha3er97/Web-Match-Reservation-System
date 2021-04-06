<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Stadium;

class StadiumController extends Controller
{
     //
     /*
    funcitonality: approve pending user by username

    parameter: username

    response: boolean 
     */

    public function addStadium (Request $request) {
        $bool =  Stadium::AddStadium ($request->name, $request->number_of_rows, $request->number_of_columns);
        return response()->json([
            'success' => $bool
        ],200);
    }
}
