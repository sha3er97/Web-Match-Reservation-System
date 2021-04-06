<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\DB;
use Carbon\Carbon;

class PendingUser extends Model
{
    use HasFactory;

    /*
    funcitonality: get pending user by username

    parameter: string username

    response: database row of that user 
     */
    
    public static function getPendingUserByUsername ($username) {
        $user = DB::table('pending_users')->where('username',$username)->first();
        return $user;
    }
    /*
    funcitonality: remove pending user

    parameter: string username
    
    response: boolean
     */
    

    public static function rejectPendingUserByUsername ($username) {
        return DB::table('pending_users')->where('username', $username)->delete(); 
        
    }

    /*
    funcitonality: get all pending users

    parameter: none

    response: list of database rows of that pending users 
     */
    
    public static function getAllPendingUsers () {
        $users = DB::table('pending_users')->get();
        return $users;
    }

    /*
    funcitonality: add pending users

    parameter: none

    response: list of database rows of that pending users 
     */
    
    public static function addPendingUser ($username, $password, $firstname, $lastname, $birthdate, $gender, $city, $address, $email, $role) {
        return DB::table('pending_users')->insert([
            'username' => $username,
            'password' => $password,
            'firstname' => $firstname,
            'lastname' => $lastname,
            'birthdate' => Carbon::parse($birthdate),
            'gender' => $gender,
            'city' => $city,
            'address' => $address,
            'email' => $email,
            'role' => $role,

        ]);
    }

}
