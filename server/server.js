const express = require('express');

const path = require('path');

const socketIO = require('socket.io');
//Servidor para trabajar con el socket
const http = require('http');

const app = express();
let server = http.createServer(app); //configuración para utilizar el socket

const publicPath = path.resolve(__dirname, '../public');
const port = process.env.PORT || 3000;

app.use(express.static(publicPath));

//Esta es la comunicación del backend
module.exports.io = socketIO(server);
require('./sockets/socket');

server.listen(port, (err) => {

    if (err) throw new Error(err);

    console.log(`Servidor corriendo en puerto ${ port }`);

});