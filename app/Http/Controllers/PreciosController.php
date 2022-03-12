<?php

namespace App\Http\Controllers;

use App\Models\Precio;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class PreciosController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        // return Precio::get();
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
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
        return Precio::find($id)->update($request->all());
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


    public function preciosActivos()
    {
        $usuario = Auth::user();

        $precios = Precio::where('active', true)->get();
        $precios = $precios->map(function ($precio) use ($usuario) {
            if ($usuario->id_group) {
                $precio->precio = $precio['precio' . $usuario->id_group];
            } else {
                $precio->precio = $precio->prepago;
            }
            return $precio;
        });
        return $precios;
    }
}
