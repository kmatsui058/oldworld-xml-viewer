<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use Laravel\Socialite\Facades\Socialite;

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

Route::middleware('auth:api', 'cors')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('/auth/google/redirect', function () {
    return Socialite::driver('google')->redirect()->getTargetUrl();;
});
Route::get('/auth/google/callback', function () {
    $user = Socialite::driver('google')->user();
    // $user->token
});
