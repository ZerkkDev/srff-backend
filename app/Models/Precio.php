<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Auth;

class Precio extends Model
{
    use HasFactory;

    protected $primaryKey = 'id_precio';

    // protected $fillable = [
    //     'prepago',
    //     'diamantes',
    //     'bonus',
    // ];

}
