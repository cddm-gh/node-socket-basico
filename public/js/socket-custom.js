var socket = io();
// Cúando se conecta al servidor 
socket.on('connect', function() {
    console.log('Conectado al servidor.');
});

// Cúando se desconecta al servidor 
socket.on('disconnect', function() {
    console.log('Se perdió la conexión con el servidor.');
});

socket.on('enviarMensaje', function(data) {
    console.log(data);
});

//Enviar información al servidor
socket.emit('enviarMensaje', {
    usuario: 'Carlos',
    mensaje: 'Hola Node.js'
}, function(resp) {
    console.log('respuesta server: ', resp);
});