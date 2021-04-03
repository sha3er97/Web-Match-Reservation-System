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
        PendingUSer::removePendingUserByUsername($request->username);
        return User::addUser($user->username, $user->password, $user->firstname, $user->lastname, $user->birthdate, $user->gender, $user->city, $user->address, $user->email, $user->role) ;
    }


     /*
    funcitonality: remove pending user by username

    parameter: username

    response: boolean 
     */

    
    public function rejectPendingUser (Request $request) {
        return PendingUSer::rejectPendingUserByUsername($request->username);
    }

     /*
    funcitonality: get all pending users

    parameter: none

    response: boolean 
     */

    
    public function getAllPendingUsers (Request $request) {
        return PendingUSer::getAllPendingUsers();
    }

    /*
    funcitonality: remove user

    parameter: none

    response: boolean 
     

    
    public function removeUser (Request $request) {
        return PendingUSer::getAllPendingUsers();
    }
    */

}