<?php

namespace App\Http\Controllers;

use App\Models\Deposito;
use App\Models\Usuario;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Throwable;

class DepositoController extends Controller
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
        Deposito::create($request->all());
        if ($request->realizado) {
            $usuario = Usuario::find($request->id_usuario);
            $usuario->saldo += $request->valor;
            $usuario->update();
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
        //
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
        //
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


    public function comprobante(Request $request)
    {
        $deposito = Deposito::where('comprobante', $request->comprobante)
            ->where('realizado', true)->first();
        if ($deposito) {
            return ['comprobante' => true];
        }
    }

    public function showByDates(Request $request)
    {
        $usuario = Auth::user();
        if ($usuario->id_tipo === 1) {
            return Deposito::whereBetween('created_at', [$request->desde, $request->hasta])
                ->orderBy('created_at', 'DESC')->paginate(10);
        }
        if ($usuario->id_tipo === 3) {
            return Deposito::whereBetween('created_at', [$request->desde, $request->hasta])
                ->where('id_usuario', $usuario->id_usuario)
                ->orderBy('created_at', 'DESC')->paginate(10);
        }
        if ($usuario->id_tipo === 4) {
            return Deposito::whereBetween('created_at', [$request->desde, $request->hasta])
                ->where('aprobado_por', $usuario->id_usuario)
                ->orderBy('created_at', 'DESC')->paginate(10);
        }
    }

    public function showByComprobante(Request $request)
    {
        return Deposito::where('comprobante', 'like', '%' . $request->comprobante . '%')
            ->orderBy('created_at', 'DESC')->paginate(10);
    }

    public function migracion()
    {
        error_log('migration start');
        try {
            // $depositos = DepositoRealizado::get();
            // return count($depositos);
            // foreach ($depositos as $key => $item) {
            //     $nueva = [
            //         'id_usuario' => $item->id_usuario,
            //         'valor' => $item->valor,
            //         'banco' => $item->banco,
            //         'comprobante' => $item->comprobante,
            //         'estado' => 'realizado',
            //         'aprobado_por' => 1,
            //         'created_at' => $item->fecha
            //     ];
            //     Deposito::create($nueva);
            //     error_log($item->id_deposito);
            // }
            return ['message' => 'done...'];
        } catch (Throwable $th) {
            return $th;
        }
    }
}
