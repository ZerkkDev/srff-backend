<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Group extends Model
{
    use HasFactory;

    protected $appends = [
        'nombre',
    ];

    function getNombreAttribute()
    {
        $usuario = Usuario::find($this->admin);
        if ($usuario) {
            return $usuario->nombre;
        }
    }
}
