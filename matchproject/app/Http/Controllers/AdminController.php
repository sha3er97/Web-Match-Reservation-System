<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use App\Models\PendingUser;

class AdminController extends Controller
{
    //

     /*
    funcitonality: approve pending user by username

    parameter: username

    response: boolean 
     */

    
    public function approvePendingUser (Request $request) {
        $user = PendingUser::getPendingUserByUsername($request->username);
        PendingUser::rejectPendingUserByUsername($request->username);
        $bool = User::addUser($user->username, $user->password, $user->firstname, $user->lastname, $user->birthdate, $user->gender, $user->city, $user->address, $user->email, $user->role) ;
        return response()->json([
            'success' => $bool
        ],200);
    }


     /*
    funcitonality: remove pending user by username

    parameter: username

    response: boolean 
     */

    
    public function rejectPendingUser (Request $request) {
        $bool = PendingUser::rejectPendingUserByUsername($request->username);
        return response()->json([
            'success' => $bool
        ],200);
    }

     /*
    funcitonality: get all pending users

    parameter: none

    response: boolean 
     */

    
    public function getAllPendingUsers (Request $request) {
        $pendingUsers =  PendingUser::getAllPendingUsers();
        return response()->json([
            'success' => true,
            'pending_users' => $pendingUsers
        ],200);
    }

    /*
    funcitonality: remove user

    parameter: none

    response: boolean 
      */

    
    public function removeUser (Request $request) {
        $bool = User::removeUserByUsername();
        return response()->json([
            'success' => $bool
        ],200);
    }
   

    /*
    funcitonality: get all current users

    parameter: none

    response: boolean 
      */

    
    public function getAllUser (Request $request) {
        $users = User::getAllUsers();
         response() -> json ([
            'users' => $users
        ],200);
    }

}
