@component('mail::message')
# Saludos {{$usuario->nombre}}

Para restablecer su contraseña haga click en el boton.

@component('mail::button', ['url' => $url])
Nueva Contraseña
@endcomponent

Zona Gamer Store
@endcomponent