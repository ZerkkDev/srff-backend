<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\AvisoController;
use App\Http\Controllers\DepositoController;
use App\Http\Controllers\GroupController;
use App\Http\Controllers\PreciosController;
use App\Http\Controllers\RecargaController;
use App\Http\Controllers\TipoUsuarioController;
use App\Http\Controllers\UsuarioController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::post('register', [AuthController::class, 'register']);
Route::post('confirmacion', [AuthController::class, 'confirmacion']);
Route::post('auth', [AuthController::class, 'auth']);
Route::post('password', [AuthController::class, 'password']);
Route::post('password/reset', [AuthController::class, 'passwordReset']);

Route::group(['middleware' => ['auth:sanctum']], function () {
    Route::get('access', [UsuarioController::class, 'access']);
    Route::get('logout', [AuthController::class, 'logout']);

    Route::apiResources([
        'user' => UsuarioController::class,
        'tipo' => TipoUsuarioController::class,
        'group' => GroupController::class,
        'precio' => PreciosController::class,
        'recarga' => RecargaController::class,
        'deposito' => DepositoController::class,
        'aviso' => AvisoController::class
    ]);

    //users
    Route::get('users/saldo', [UsuarioController::class, 'saldo']);
    Route::post('users/nombre', [UsuarioController::class, 'showByNombre']);
    Route::post('users/group', [UsuarioController::class, 'showByGroup']);
    Route::get('users/empleados', [UsuarioController::class, 'showEmpleados']);
    Route::post('users/cambio/contrasenia', [UsuarioController::class, 'cambioContrasenia']);
    //precios
    Route::get('precios/activos', [PreciosController::class, 'preciosActivos']);
    //recargas
    Route::post('recargar', [RecargaController::class, 'recargar']);
    Route::post('recargas/dates', [RecargaController::class, 'showByDates']);
    Route::post('recargas/jugador', [RecargaController::class, 'showByIdJugador']);
    Route::post('recargas/ganancia', [RecargaController::class, 'calcularGanancia']);
    Route::post('recargas/comisiones', [RecargaController::class, 'comisiones']);
    Route::post('recargas/contabilidad', [RecargaController::class, 'contabilidad']);
    //depositos
    Route::post('depositos/comprobante/check', [DepositoController::class, 'comprobante']);
    Route::post('depositos/comprobante', [DepositoController::class, 'showByComprobante']);
    Route::post('depositos/dates', [DepositoController::class, 'showByDates']);
});

Route::get('avisos/active', [AvisoController::class, 'showActive']);

// Route::get('countUsers', [UsuarioController::class, 'countUsers']);
// Route::post('loadusers', [UsuarioController::class, 'loadusers']);
// Route::get('recargas/migracion', [RecargaController::class, 'migracion']);
// Route::get('depositos/migracion', [DepositoController::class, 'migracion']);
