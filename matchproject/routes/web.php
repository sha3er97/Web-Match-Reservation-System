<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

Route::post('/approvePendingUser', 'App\Http\Controllers\AdminController@approvePendingUser');
Route::post('/rejectPendingUser',  'App\Http\Controllers\AdminController@rejectPendingUser');
Route::get('/getAllPendingUsers',  'App\Http\Controllers\AdminController@getAllPendingUsers');
Route::post('/removeUser',  'App\Http\Controllers\AdminController@removeUser');
Route::get('/getAllUser',  'App\Http\Controllers\AdminController@getAllUser');

Route::post('/signIn', 'App\Http\Controllers\AuthenticationController@signIn');
Route::post('/signUp', 'App\Http\Controllers\AuthenticationController@signUp');

Route::patch('/editUserData', 'App\Http\Controllers\UserController@editUserData');



Route::get('/viewMatches', 'App\Http\Controllers\MatchController@getallmatches');
Route::post('/viewMatchInfo', 'App\Http\Controllers\MatchController@getmatch');
Route::post('/addmatch', 'App\Http\Controllers\MatchController@addMatch');
Route::patch('/updateMatch', 'App\Http\Controllers\MatchController@editematch');

Route::post('/viewSeatOfMatch', 'App\Http\Controllers\seatController@getSeatsOfMatch');
Route::post('/reserveSeat', 'App\Http\Controllers\seatController@reserveSeat');
Route::patch('/cancelreservation', 'App\Http\Controllers\seatController@cancelseat');
Route::get('/userreservations', 'App\Http\Controllers\seatController@seatsOfUser');


Route::post('/addStadium', 'App\Http\Controllers\StadiumController@addStadium');
Route::post('/getStadiumData', 'App\Http\Controllers\StadiumController@getStadiumData');

//update put
//creat post
//receive get