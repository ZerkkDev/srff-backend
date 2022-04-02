<?php

namespace App\Http\Controllers;

use App\Mail\Password;
use App\Mail\Register;
use App\Models\Group;
use App\Models\Usuario;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Mail;

class AuthController extends Controller
{
    public function register(Request $request)
    {
        $usuario = Usuario::where('correo', $request->correo)->first();
        if ($usuario) {
            return response(['register' => 'Ya existe un usuario con ese correo.'], 400);
        }
        if ($request->contrasenia !== $request->confirmacion) {
            return response(['register' => 'Las contraseñas no son iguales'], 400);
        }

        $request['contrasenia'] = hash('sha256', $request->contrasenia);
        $request['activo'] = false;
        $request['saldo'] = 0;
        $request['id_tipo'] = 3;
        $usuario = Usuario::create($request->all());

        $rand = rand(0, 1000);
        $token = hash('sha256', $usuario->correo . $rand);
        DB::table('password_resets')->insert([
            'email' => $usuario->correo,
            'token' => $token,
            'created_at' => date("Y-m-d H:i:s")
        ]);

        $url = 'https://zonagamerstore.com/#/register/confirmacion/' . $token;
        Mail::to($usuario->correo)->send(new Register($url));
        return ['message' => 'Revise su correo para activar su cuenta.'];
    }

    public function confirmacion(Request $request)
    {
        $token = DB::table('password_resets')
            ->where('token', $request->token)->first();

        if ($token) {
            $usuario = Usuario::where('correo', $token->email)->first();
            if ($usuario) {
                $usuario->activo = true;
                $usuario->update();
                DB::table('password_resets')->where('email', $usuario->correo)->delete();
                return ['message' => 'Cuenta activada'];
            } else {
                return response('Su link de activación ha expirado', 400);
            }
        } else {
            return response('Su link de activación ha expirado', 400);
        }
    }

    public function resend(Request $request)
    {
        $token = DB::table('password_resets')
            ->where('token', $request->token)->first();

        if ($token) {
            $url = 'https://zonagamerstore.com/#/register/confirmacion/' . $token->token;
            Mail::to($token->email)->send(new Register($url));
            return ['message' => 'Revise su correo para activar su cuenta.'];
        }
    }

    public function auth(Request $request)
    {
        $usuario = Usuario::where('correo', $request->email)->first();
        if (!$usuario) {
            return response(['auth' => 'Usuario no registrado'], 400);
        }
        if ($usuario->activo == false) {
            return response(['auth' => 'Usuario no activo'], 400);
        }
        if ($usuario->contrasenia !== hash('sha256', $request->password)) {
            return response(['auth' => 'Contraseña incorrecta'], 400);
        }

        $modules = array();
        if ($usuario->id_tipo == 1) { //admin
            $modules = [
                [
                    'name' => 'recargas',
                    'path' => 'recargas-admin',
                    'icon' => 'fa fa-credit-card'
                ],
                [
                    'name' => 'depositos',
                    'path' => 'depositos-admin',
                    'icon' => 'fa fa-money-check-alt'
                ],
                [
                    'name' => 'historial de recargas',
                    'path' => 'historial-recargas',
                    'icon' => 'fa fa-book'
                ],
                [
                    'name' => 'historial de depositos',
                    'path' => 'historial-depositos',
                    'icon' => 'fa fa-book'
                ],
                [
                    'name' => 'contabilidad',
                    'path' => 'contabilidad',
                    'icon' => 'fa fa-file-invoice-dollar'
                ],
                [
                    'name' => 'usuarios',
                    'path' => 'users',
                    'icon' => 'fa fa-users'
                ],
                [
                    'name' => 'precios',
                    'path' => 'precios',
                    'icon' => 'fa fa-tag'
                ],
                [
                    'name' => 'avisos',
                    'path' => 'avisos',
                    'icon' => 'fa fa-exclamation-triangle'
                ],
            ];
        }
        if ($usuario->id_tipo == 4) { //empleada
            $modules = [
                [
                    'name' => 'recargas',
                    'path' => 'recargas-admin',
                    'icon' => 'fa fa-credit-card'
                ],
                [
                    'name' => 'depositos',
                    'path' => 'depositos-admin',
                    'icon' => 'fa fa-money-check-alt'
                ],
                [
                    'name' => 'historial de recargas',
                    'path' => 'historial-recargas',
                    'icon' => 'fa fa-book'
                ],
                [
                    'name' => 'historial de depositos',
                    'path' => 'historial-depositos',
                    'icon' => 'fa fa-book'
                ],
                [
                    'name' => 'contabilidad',
                    'path' => 'contabilidad',
                    'icon' => 'fa fa-file-invoice-dollar'
                ],
            ];
        }
        if ($usuario->id_tipo == 3) { // cliente
            $modules = [
                [
                    'name' => 'recargas',
                    'path' => 'recargas',
                    'icon' => 'fa fa-credit-card'
                ],
                [
                    'name' => 'depositos',
                    'path' => 'depositos',
                    'icon' => 'fa fa-money-check-alt'
                ],
                [
                    'name' => 'publicidad',
                    'path' => 'publicidad',
                    'icon' => 'fa fa-bullhorn'
                ],
                [
                    'name' => 'historial de recargas',
                    'path' => 'historial-recargas',
                    'icon' => 'fa fa-book'
                ],
                [
                    'name' => 'historial de depositos',
                    'path' => 'historial-depositos',
                    'icon' => 'fa fa-book'
                ],
            ];
        }
        if (Group::where('admin', $usuario->id_usuario)->exists()) {
            array_push(
                $modules,
                [
                    'name' => 'comisiones',
                    'path' => 'comisiones',
                    'icon' => 'fa fa-dollar-sign'
                ]
            );
        }
        $usuario['modules'] = $modules;

        $token = $usuario->createToken('token')->plainTextToken;
        $response = [
            'token' => $token,
            'usuario' => $usuario
        ];
        return $response;
    }

    public function logout(Request $request)
    {
        // Auth::user()->tokens()->delete();
        Auth::user()->currentAccessToken()->delete();
        return ['message' => 'Tokens Deleted'];
    }

    public function password(Request $request)
    {
        $usuario = Usuario::where('correo', $request->email)->first();
        if (!$usuario) {
            return response(['password' => 'Su correo no se encuentra registrado'], 400);
        }

        // $token = bcrypt($usuario->correo);
        $rand = rand(0, 1000);
        $token = hash('sha256', $usuario->correo . $rand);
        DB::table('password_resets')->insert([
            'email' => $request->email,
            'token' => $token,
            'created_at' => date("Y-m-d H:i:s")
        ]);

        $url = 'https://zonagamerstore.com/#/password/reset/' . $token;
        Mail::to($usuario->correo)->send(new Password($usuario, $url));
        return ['message' => 'Correo enviado'];
    }

    public function passwordReset(Request $request)
    {
        $token = DB::table('password_resets')
            ->where('token', $request->token)->first();

        if ($token) {
            if ($request->password === $request->password_confirm) {
                $usuario = Usuario::where('correo', $token->email)->first();
                if ($usuario) {
                    $usuario->contrasenia = hash('sha256', $request->password);
                    $usuario->update();
                    DB::table('password_resets')->where('email', $usuario->correo)->delete();
                    return ['message' => 'Contraseña creada'];
                }
            } else {
                return response(['password' => 'Las contraseñas no son iguales'], 400);
            }
        }
    }
}
