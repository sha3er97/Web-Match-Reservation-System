<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;

class UserController extends Controller
{
    //
     /*
    funcitonality: approve pending user by username

    parameter: username

    response: boolean 
     */

    
    public function editUserData (Request $request) {
        return User::editUserByUsername ($request->username, $request->password, $request->firstname, $request->lastname, $request->birthdate, $request->gender, $request->city, $request->address, $request->email, $request->role);
    }
}
