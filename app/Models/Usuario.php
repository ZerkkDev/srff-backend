<?php

namespace App\Models;

use Illuminate\Auth\Passwords\CanResetPassword;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;

class Usuario extends Model
{
    use HasFactory, HasApiTokens, Notifiable, CanResetPassword;

    protected $primaryKey = 'id_usuario';

    protected $fillable = [
        'cedula_ruc',
        'nombre',
        'correo',
        'contrasenia',
        'direccion',
        'telefono',
        'activo',
        'saldo',
        'id_tipo',
        'id_group'
    ];

    protected $hidden = [
        'contrasenia',
        'created_at',
        'updated_at'
    ];
}
