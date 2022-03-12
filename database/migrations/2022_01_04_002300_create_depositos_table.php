<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateDepositosTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('depositos', function (Blueprint $table) {
            $table->id();
            $table->integer('id_usuario');
            $table->foreign('id_usuario')
                ->references('id_usuario')
                ->on('usuarios');
            $table->decimal('valor', 10, 2);
            $table->string('banco', 100);
            $table->string('comprobante', 15);
            $table->string('estado', 9);
            $table->string('razon')->nullable();
            $table->integer('aprobado_por');
            $table->foreign('aprobado_por')
                ->references('id_usuario')
                ->on('usuarios');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('depositos');
    }
}
