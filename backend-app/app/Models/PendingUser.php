<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\DB;

class PendingUser extends Model
{
    use HasFactory;

    /*
    funcitonality: get pending user by username

    parameter: string username

    response: database row of that user 
     */
    
    public function getPendingUserByUsername ($username) {
        $user = DB::table('pending_users')->where('username',username)->first();
        return $user;
    }
    /*
    funcitonality: remove pending user

    parameter: string username
    
    response: boolean
     */
    

    public function rejectPendingUserByUsername ($username) {
        return DB::table('pending_users')->where('username', $username)->delete(); 
        
    }

    /*
    funcitonality: get all pending users

    parameter: none

    response: list of database rows of that pending users 
     */
    
    public function getAllPendingUsers () {
        $users = DB::table('pending_users')->get();
        return $users;
    }
}
