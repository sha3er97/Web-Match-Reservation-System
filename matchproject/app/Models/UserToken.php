<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class UsersTokens extends Model
{
    public $timestamps = false; // To cancel expectations of updated_at and created_at tables.

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'username', 'token', 'expires_at',
    ];

    /**
     * Insert new token of a use.
     *
     * @param array $data username and token of a user
     *
     * @return object if record inserted successfully returns record. otherwise, false.
     */
    public static function insertToken($data)
    {
        try {
            return self::create($data);
        } catch (\Exception $e) {
            return false;
        }
    }
}
