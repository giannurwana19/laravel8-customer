<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Laravel\Scout\Searchable;

class Customer extends Model
{
    use HasFactory, Searchable;

    /**
     * The attributes that aren't mass assignable.
     *
     * @var array
     */
    protected $guarded = [];

    // 1 Customer dimiliki 1 user
    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function url()
    {
        return "/customers/{$this->id}";
    }
}









// h: DOKUMENTASI
// pada table customers, kita buat kolom api_token untuk mengautentikasi user
// namanya harus api_token
// dan nanti kita kirimkan di header Authorization -> Bearer <token_disini>
// untuk middleware auth:api, kita gunakan Bearer token dari kolom api_token
