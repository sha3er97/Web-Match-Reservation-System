<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use Illuminate\Support\Facades\Auth;
use Tymon\JWTAuth\Facades\JWTAuth;
use Illuminate\Support\Str;
use Carbon\Carbon;
use App\Models\User;
use App\Models\UsersTokens;
use Validator;
use Mail;

class AuthenticationController extends Controller
{
    /*
     function: Sign in a user.

     Param : string required the username of the current user.
     Param : password string required The password of the user.

     * @response 200 {
     * 	"success": "true",
     * 	"token": "6155cb365da1512356e99b6f8b5cb5757a28fb5baeae91503721fd201e61810be503e8167abad97c"
     * }
     *
     * @response 404 {
     * 	"success": "false",
     * 	"error": "username and password don't matched"
     * }
     *
     * @response 422 {
     * 	"success": "false",
     * 	"error": "Invalid or some data missed"
     * }
     */
    public function signIn(Request $request)
    {
        $valid = Validator::make($request->all(), [
            'username' => 'required|min:5',
            'password' => 'required|min:8',
        ]);

        if ($valid->fails()) {
            return response()->json([
                'success' => 'false',
                'error' => 'Invalid or some data missed',
            ], 422);
        }

        $credentials = ['username' => $request->username, 'password' => $request->password];

        if (!$token = auth()->attempt($credentials)) {
            return response()->json([
                'success' => 'false',
                'error' => 'username and password don\'t matched',
            ], 404);
        }

        UsersTokens::insertToken([
            'username' => $request->username,
            'token' => $token,
            'expires_at' => Carbon::createFromTimestamp(auth()->getPayload()['exp'])->toDateTimeString(),
        ]);

        return response()->json([
            'success' => 'true',
            'token' => $token,
        ], 200);
    }

    /*
     * Function : Signup a user.
     *
     * Parameter : username string required the username of the current user.
     * Parameter : password string required The password of the user.
     * Parameter : password_confirmation string required The confirm password of the user.
     * Parameter : email string required The email of the user.
     * 
     * @response 200 {
     * 	"success": "true",
     * 	"token": "6155cb365da1512356e99b6f8b5cb5757a28fb5baeae91503721fd201e61810be503e8167abad97c"
     * }
     *
     * @response 422 {
     * 	"success": "false",
     * 	"error": "Invalid or some data missed"
     * }
     */
    public function signUp(Request $request)
    {
        $valid = Validator::make($request->all(), [
            'username' => 'required|unique:users|min:5',
            'password' => 'required|confirmed|min:8',
            'firstname' => 'required',
            'lastname' => 'required',
            'birthdate' => 'required',
            'gender' => 'required',
            'city' => 'required',
            'address' => 'required',
            'email' => 'required|email|unique:users',
            'role' => 'required',
            
        ]);

        if ($valid->fails()) {
            return response()->json([
                'success' => 'false',
                'error' => 'Invalid or some data missed',
            ], 422);
        }

        $user = User::storeUser([
            'username' => $request->username,
            'password' => $request->password,
            'firstname' => $request->firstname,
            'lastname' => $request->lastname,
            'birthdate' => $request->birthdate,
            'gender' => $request->gender,
            'city' => $request->city,
            'address' => $request->address,
            'email' => $request->email, 
            'role' => $request->role,
        ]);

        $token = auth()->login($user);

        UsersTokens::insertToken([
            'username' => $request->username,
            'token' => $token,
            'expires_at' => Carbon::createFromTimestamp(auth()->getPayload()['exp'])->toDateTimeString(),
        ]);

        return response()->json([
            'success' => 'true',
            'token' => $token,
        ], 200);
    }

}
