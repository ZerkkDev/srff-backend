<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Deposito extends Model
{
    use HasFactory;

    protected $fillable = [
        'id_usuario',
        'valor',
        'banco',
        'comprobante',
        'realizado',
        'razon',
        'aprobado_por',
        'created_at'
    ];

    protected $appends = [
        'usuario',
        'aprobado'
    ];

    function getUsuarioAttribute()
    {
        $usuario = Usuario::find($this->id_usuario);
        return $usuario->nombre;
    }

    function getAprobadoAttribute()
    {
        $usuario = Usuario::find($this->aprobado_por);
        return $usuario->nombre;
    }
}
