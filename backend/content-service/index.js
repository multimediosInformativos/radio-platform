// backend/auth-service/index.js
const express = require('express');
const mysql = require('mysql');
const app = express();

// Configuración de la conexión a la base de datos
const db = mysql.createConnection({
    host: 'localhost',
    user: 'master',
    password: 'root',
    database: 'multimedios_informativos'
});

// Conectar a la base de datos
db.connect((err) => {
    if (err) {
        throw err;
    }
    console.log('Conectado a la base de datos MySQL');
});

// Crear un endpoint de prueba
app.get('/test-db', (req, res) => {
    db.query('SELECT * FROM Users', (err, results) => {
        if (err) {
            res.status(500).send('Error en la consulta a la base de datos');
            return;
        }
        res.json(results);
    });
});

// Iniciar el servidor
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});
