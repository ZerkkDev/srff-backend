<?php

namespace App\Http\Controllers;

use App\Models\Group;
use App\Models\Precio;
use App\Models\Recarga;
use App\Models\Usuario;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Throwable;

class RecargaController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $usuario = Auth::user();
        $precio = Precio::find($request->id_precio);
        if ($usuario && $precio) {
            if ($usuario->id_group) {
                $selected_precio = $precio['precio' . $usuario->id_group];
            } else {
                $selected_precio = $precio->prepago;
            }

            if ($usuario->saldo >= $selected_precio) {
                $usuario->saldo -= $selected_precio;
                $usuario->update();

                $recarga = Recarga::create($request->all());
                return [
                    'saldo' => $usuario->saldo,
                    'recarga' => $recarga
                ];
            }
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        return Recarga::find($id);
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
        $usuario = Usuario::find($request->id_usuario);
        $precio = Precio::find($request->id_precio);

        if ($usuario && $precio) {
            if ($usuario->id_group) {
                $selected_precio = $precio['precio' . $usuario->id_group];
            } else {
                $selected_precio = $precio->prepago;
            }

            if ($request->realizado) {
                if ($usuario->id_group) {
                    $group = Group::find($usuario->id_group);
                    $admin = Usuario::find($group->admin);
                    $diferencia = $precio['precio' . $usuario->id_group] - $precio->prepago;
                    $admin->saldo += $diferencia;
                    $admin->update();
                }
            } else {
                //se devuelve el saldo
                $usuario->saldo += $selected_precio;
                $usuario->update();
            }
            return Recarga::find($id)->update($request->all());
        }
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


    public function showByDates(Request $request)
    {
        $usuario = Auth::user();
        if ($usuario->id_tipo === 1) {
            if ($request->id_precio != 0) {
                $response = Recarga::whereBetween('created_at', [$request->desde, $request->hasta])
                    ->where('id_precio', $request->id_precio)
                    ->orderBy('created_at', 'DESC')->paginate(10);
            } else {
                $response = Recarga::whereBetween('created_at', [$request->desde, $request->hasta])
                    ->orderBy('created_at', 'DESC')
                    ->paginate(10);
            }
            return $response;
        }
        if ($usuario->id_tipo === 3) {
            return Recarga::whereBetween('created_at', [$request->desde, $request->hasta])
                ->where('id_usuario', $usuario->id_usuario)
                ->orderBy('created_at', 'DESC')->paginate(10);
        }
        if ($usuario->id_tipo === 4) {
            return Recarga::whereBetween('created_at', [$request->desde, $request->hasta])
                ->where('aprobado_por', $usuario->id_usuario)
                ->orderBy('created_at', 'DESC')->paginate(10);
        }
    }

    public function showByIdJugador(Request $request)
    {
        $usuario = Auth::user();
        if ($usuario->id_tipo === 1) {
            return Recarga::where('id_jugador', 'like', '%' . $request->id_jugador . '%')
                ->orderBy('created_at', 'DESC')->paginate(10);
        }
        if ($usuario->id_tipo === 3) {
            return Recarga::where('id_jugador', 'like', '%' . $request->id_jugador . '%')
                ->where('id_usuario', $usuario->id_usuario)
                ->orderBy('created_at', 'DESC')->paginate(10);
        }
        if ($usuario->id_tipo === 4) {
            return Recarga::where('id_jugador', 'like', '%' . $request->id_jugador . '%')
                ->where('aprobado_por', $usuario->id_usuario)
                ->orderBy('created_at', 'DESC')->paginate(10);
        }
    }

    public function comisiones(Request $request)
    {
        $usuario = Auth::user();
        $group = Group::where('admin', $usuario->id_usuario)->first();

        $usuarios = Usuario::where('id_group', $group->id)->pluck('id_usuario');
        return Recarga::whereBetween('created_at', [$request->desde, $request->hasta])
            ->whereIn('id_usuario', $usuarios)
            ->where('realizado', true)
            ->orderBy('created_at', 'DESC')
            ->paginate(10);
    }

    public function calcularGanancia(Request $request)
    {
        $recargas = Recarga::whereBetween('created_at', [$request->desde, $request->hasta])
            ->where('realizado', true)
            ->pluck('precio');
        return $recargas;
    }

    public function contabilidad(Request $request)
    {
        $precios = Precio::where('active', true)->get();
        $response = $precios->map(function ($precio) use ($request) {
            if ($request->id_usuario) {
                $recargas = Recarga::whereBetween('created_at', [$request->desde, $request->hasta])
                    ->where('id_precio', $precio->id_precio)
                    ->where('aprobado_por', $request->id_usuario)
                    ->where('realizado', true)
                    ->get();
            } else {
                $usuario = Auth::user();
                $recargas = Recarga::whereBetween('created_at', [$request->desde, $request->hasta])
                    ->where('id_precio', $precio->id_precio)
                    ->where('aprobado_por', $usuario->id_usuario)
                    ->where('realizado', true)
                    ->get();
            }
            $precio['cantidad'] = count($recargas);
            $precio['total'] = round($precio->prepago * count($recargas), 2);
            return $precio;
        });
        return $response;
    }

    public function migracion()
    {
        error_log('migration start');
        try {
            // $recargas = RecargasAceptada::get();
            // return count($recargas);
            // foreach ($recargas as $key => $recarga) {
            //     $nueva = [
            //         'id_jugador' => $recarga->id_jugador,
            //         'id_usuario' => $recarga->id_usuario,
            //         'precio' => $recarga->precio,
            //         'descripcion' => $recarga->referencia,
            //         'estado' => 'realizado',
            //         'id_precio' => $recarga->id_precio,
            //         'aprobado_por' => 1,
            //         'created_at' => $recarga->fecha
            //     ];
            //     Recarga::create($nueva);
            //     error_log($recarga->id_recarga);
            // }
            return ['message' => 'done...'];
        } catch (Throwable $th) {
            return $th;
        }
    }
}
