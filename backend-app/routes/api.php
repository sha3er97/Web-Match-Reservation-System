<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

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


Route::middleware('auth:api')->group(function () {
    
    Route::post('/approvePendingUser', 'AdminController@approvePendingUser');
    Route::post('/rejectPendingUser', 'AdminController@rejectPendingUser');
    Route::get('/getAllPendingUsers', 'AdminController@getAllPendingUsers');
    Route::post('/removeUser', 'AdminController@removeUser');
    Route::get('/getAllUser', 'AdminController@getAllUser');

    Route::post('/signIn', 'AuthenticationController@signIn');
    Route::post('/signUp', 'AuthenticationController@signUp');

    Route::patch('/editUserData', 'UserController@editUserData');

    Route::get('/viewMatches', 'MatchController@getallmatches');
    Route::get('/viewMatchInfo', 'MatchController@getmatch');
    Route::get('/addmatch', 'MatchController@addMatch');
    Route::get('/updateMatch', 'MatchController@editematch');

    Route::get('/viewSeatOfMatch', 'seatController@getSeatsOfMatch');
    Route::get('/reserveSeat', 'seatController@reserveSeat');
    Route::get('/cancelreservation', 'seatController@cancelseat');
    Route::get('/userreservations', 'seatController@seatsOfUser');

    
    Route::get('/addStadium', 'StadiumController@addStadium');
    

});


