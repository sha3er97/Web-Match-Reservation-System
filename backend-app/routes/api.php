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
/*
Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});*/



Route::prefix('v1')->group(function () {
    Route::prefix('auth')->middleware('auth:api')->group(function () {
        
    
      
    });

    Route::prefix('unauth')->group(function () {
        Route::get('/viewMatches', 'MatchController@getallmatches');
        Route::get('/viewMatchInfo', 'MatchController@getmatch');
        Route::get('/addmatch', 'MatchController@addMatch');
        Route::get('/updateMatch', 'MatchController@editematch');

        Route::get('/viewSeatOfMatch', 'seatController@getSeatsOfMatch');
        Route::get('/reserveSeat', 'seatController@reserveSeat');
        Route::get('/cancelreservation', 'seatController@cancelseat');
        Route::get('/userreservations', 'seatController@seatsOfUser');

        
        Route::get('/addStadium', 'StadiumController@addStadium');
      
        Route::get('/aproveusers', 'AdminController@approvePendingUser');
        Route::get('/rejectusers', 'AdminController@rejectPendingUser');
        Route::get('/getpendingusers', 'AdminController@getAllPendingUsers');
        Route::get('/removeuser', 'AdminController@removeUser');
        Route::get('/getusers', 'AdminController@getAllUser');

        Route::get('/editeuser', 'UserController@editUserData');
    });
});