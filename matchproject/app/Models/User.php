<?php

namespace App\Models;

use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Illuminate\Support\Facades\DB;
use Carbon\Carbon;

class User extends Authenticatable
{
    use HasFactory, Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name',
        'email',
        'password',
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    /**
     * The attributes that should be cast to native types.
     *
     * @var array
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
    ];

    /********************************************************************/
    

     /*
    funcitonality: add user by userame

    parameter: all table attributes

    response: database row of that user 
     */

    public static function addUser ($username, $password, $firstname, $lastname, $birthdate, $gender, $city, $address, $email, $role) {
        return DB::table('users')->insert([
            'username' => $username,
            'password' => $password,
            'firstname' => $firstname,
            'lastname' => $lastname,
            'birthdate' =>  Carbon::parse($birthdate),
            'gender' => $gender,
            'city' => $city,
            'address' => $address,
            'email' => $email,
            'role' => $role

        ]);
    }

     /*
    funcitonality: get all users

    parameter: none

    response: list of database rows of all users
     */

    
    public static function getAllUsers () {
       
        $users = DB::select(" select * from users ;");

        return $users;
    }

     /*
    funcitonality: remove  user by username

    parameter: username

    response: none
     */

    
    public static function removeUserByUsername ($username) {

        try {
            return DB::table('users')->where('username', $username)->delete();
        } catch (\Exception $e) {
            return false;
        }
        //return DB::table('users')->where('username', $username)->delete();
    }

    /*
    funcitonality: edit data of specific user

    parameter: all table attributes

    response: bool
     */

    
    public static function editUserByUsername ($username, $password, $firstname, $lastname, $birthdate, $gender, $city, $address, $email, $role){
        return DB::table('users')
                    ->where('username', $username)
                    ->update(['password' => $password,
                               'firstname' => $firstname,
                               'lastname' => $lastname,
                               'birthdate' => $birthdate,
                               'gender' =>$gender,
                               'city' => $city,
                               'address' => $address,
                               'email' => $email,
                               'role' => $role ]);
    }


    /*
    funcitonality: check existance user

    parameter: username

    response: bool
     */
    public static function userExists ($username) {
        return  DB::table('users')->where('username', $username)->exists();
    }
}
