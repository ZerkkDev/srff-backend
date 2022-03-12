<?php

namespace App\Http\Controllers;

use App\Models\Group;
use App\Models\Usuario;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class UsuarioController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
    }


    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $usuario = Usuario::find($id);
        $usuario->update($request->all());
        return $usuario;
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }

    public function saldo()
    {
        $usuario = Auth::user();
        return ['saldo' => $usuario->saldo];
    }

    public function access()
    {
        $usuario = Auth::user();

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
        return $usuario;
    }

    public function showByNombre(Request $request)
    {
        return Usuario::where('nombre', 'like', '%' . $request->nombre . '%')->paginate(10);
    }

    public function showByGroup(Request $request)
    {
        return Usuario::where('id_group', $request->id_group)->paginate(10);
    }

    public function showEmpleados()
    {
        return Usuario::where('id_tipo', 4)->get();
    }

    public function cambioContrasenia(Request $request)
    {
        $usuario = Auth::user();
        if ($usuario) {
            if ($usuario->contrasenia !== hash('sha256', $request->contrasenia)) {
                return response(['contrasenia' => 'Contraseña actual es incorrecta'], 400);
            }
            $usuario->update(['contrasenia' => hash('sha256', $request->nueva)]);
            return ['message' => 'Contraseña guardada'];
        }
    }

    public function loadusers(Request $request)
    {
        $users = $request->toArray();
        // return $users;

        $response = array();
        foreach ($users as $key => $user) {
            // return $users[$key];
            // return $user;
            // return ['user' => $user];

            $usuario = Usuario::where('correo', $user['correo'])->first();
            if ($usuario) {
                array_push($response, $user['correo']);
            } else {
                Usuario::create([
                    'cedula_ruc' => $user['cedula'],
                    'nombre' => $user['nombre'],
                    'correo' => $user['correo'],
                    'contrasenia' => hash('sha256', $user['cedula']),
                    'direccion' => $user['direccion'],
                    'telefono' => '',
                    'activo' => true,
                    'saldo' => 0,
                    'id_tipo' => 3,
                    'id_group' => 2,
                ]);
            }
        }
        return $response;
    }

    public function countUsers()
    {
        return Usuario::count();
    }
}
