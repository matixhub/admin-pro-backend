require('dotenv').config();

const express = require('express');
const cors = require('cors');

const { dbConnection } = require('./database/config');

//Crear el servidor de express
const app = express();

//Configurar CORS
app.use(cors());
//Con use se usa como middleware que se ajecutara en todas las lineas hacia abajo

//Base de Datos
dbConnection();
//mean_user
//p0kZfQHDv5rHFGH3

//Rutas
app.get( '/', (req, res) => {
    res.json({
        ok: true,
        msg: 'Hola Mundo'
    });

}); 

app.listen( process.env.PORT , () =>{
    console.log('Servidor corriendo en el puerto');
});