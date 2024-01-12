/* eslint-disable no-undef */

// REQUERIR EXPRESS
const express = require('express');

// MODULO PATH
const path = require('path');

// INICIAR EXPRESS
const app = express();

// DEFINIR DIRECTORIO BUILD DE ESTATICOS
app.use(express.static(path.join(__dirname, 'dist')));

// ESTABLECER EL USO DE REACT ROUTER DOM
app.get('/*', function(req, res){
  // CONECTAR EL BUILD CON EL INDEX
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

// PONER EN ESCUCHA EL PUERTO
app.listen(3100, ()=>{
  console.log('Start Test - Page CPC Node');
});