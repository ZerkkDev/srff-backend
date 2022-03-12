<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;

class Password extends Mailable
{
    use Queueable, SerializesModels;

    public $usuario;
    public $url;

    /**
     * Create a new message instance.
     *
     * @return void
     */
    public function __construct($usuario, $url)
    {
        $this->usuario = $usuario;
        $this->url = $url;
    }

    /**
     * Build the message.
     *
     * @return $this
     */
    public function build()
    {
        return $this
            ->subject('Restablecer contraseña')
            ->markdown('emails.password');
    }
}
