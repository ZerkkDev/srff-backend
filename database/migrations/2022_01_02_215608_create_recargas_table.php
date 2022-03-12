<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateRecargasTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('recargas', function (Blueprint $table) {
            $table->id();
            $table->string('id_jugador', 15);
            $table->integer('id_usuario');
            $table->foreign('id_usuario')
                ->references('id_usuario')
                ->on('usuarios');
            $table->decimal('precio', 10, 2);
            $table->string('descripcion', 100);
            $table->string('estado', 9);
            $table->integer('id_precio');
            $table->foreign('id_precio')
                ->references('id_precio')
                ->on('precios');
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
        Schema::dropIfExists('recargas');
    }
}
