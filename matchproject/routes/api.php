<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/
//auth:

Route::middleware('api')->group(function () {
    
    Route::post('/approvePendingUser', 'App\Http\Controllers\AdminController@approvePendingUser');
    Route::post('/rejectPendingUser',  'App\Http\Controllers\AdminController@rejectPendingUser');
    Route::get('/getAllPendingUsers',  'App\Http\Controllers\AdminController@getAllPendingUsers');
    Route::post('/removeUser',  'App\Http\Controllers\AdminController@removeUser');
    Route::get('/getAllUser',  'App\Http\Controllers\AdminController@getAllUser');

    Route::post('/signIn', 'App\Http\Controllers\AuthenticationController@signIn');
    Route::post('/signUp', 'App\Http\Controllers\AuthenticationController@signUp');

    Route::patch('/editUserData', 'App\Http\Controllers\UserController@editUserData');

    Route::get('/viewMatches', 'App\Http\Controllers\MatchController@getallmatches');
    Route::get('/viewMatchInfo', 'App\Http\Controllers\MatchController@getmatch');
    Route::get('/addmatch', 'App\Http\Controllers\MatchController@addMatch');
    Route::get('/updateMatch', 'App\Http\Controllers\MatchController@editematch');

    Route::get('/viewSeatOfMatch', 'App\Http\Controllers\seatController@getSeatsOfMatch');
    Route::get('/reserveSeat', 'App\Http\Controllers\seatController@reserveSeat');
    Route::get('/cancelreservation', 'App\Http\Controllers\seatController@cancelseat');
    Route::get('/userreservations', 'App\Http\Controllers\seatController@seatsOfUser');

    
    Route::get('/addStadium', 'App\Http\Controllers\StadiumController@addStadium');
    

});
