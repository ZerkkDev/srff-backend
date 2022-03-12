<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Auth;

class Recarga extends Model
{
    use HasFactory;

    protected $fillable = [
        'id_jugador',
        'id_usuario',
        'precio',
        'descripcion',
        'realizado',
        'aprobado_por',
        'id_precio',
        'created_at',
    ];

    protected $appends = [
        'usuario',
        'diamantes',
        'tarjeta',
        'aprobado',
        'base',
        'comision',
        'group_precio'
    ];

    function getUsuarioAttribute()
    {
        $usuario = Usuario::find($this->id_usuario);
        return $usuario->nombre;
    }

    function getDiamantesAttribute()
    {
        $precio = Precio::find($this->id_precio);
        return $precio->diamantes;
    }

    function getTarjetaAttribute()
    {
        $precio = Precio::find($this->id_precio);
        return $precio->tarjeta;
    }

    function getAprobadoAttribute()
    {
        $usuario = Usuario::find($this->aprobado_por);
        if ($usuario) {
            return $usuario->nombre;
        }
    }

    function getBaseAttribute()
    {
        $precio = Precio::find($this->id_precio);
        return $precio->juego;
    }

    function getComisionAttribute()
    {
        $usuario = Auth::user();
        $precio = Precio::find($this->id_precio);
        $group = Group::where('admin', $usuario->id_usuario)->first();
        if ($group) {
            return $precio['precio' . $group->id] - $precio->prepago;
        }
    }

    function getGroupPrecioAttribute()
    {
        $usuario = Usuario::find($this->id_usuario);
        if ($usuario->id_group) {
            $precio = Precio::find($this->id_precio);
            return $precio['precio' . $usuario->id_group];
        }
    }
}
