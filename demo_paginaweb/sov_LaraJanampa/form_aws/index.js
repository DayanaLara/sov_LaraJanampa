const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const path = require('path');

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const conexion = mysql.createConnection({
     host: "localhost",
     port: 33060,
     database: "sasuke",
     user: "root",
     password: "123456"
});

conexion.connect((err) => {
     if (err) {
          console.error('Error de conexión a la base de datos: ' + err.stack);
          return;
     }
     console.log('Conectado a la base de datos.');
});

app.post('/submit-form', (req, res) => {
     const {
          nombre,
          celular,
          email,
          mensaje,
     } = req.body;

     // Validar que el grado no sea nulo o vacío
     if (!grado) {
          return res.status(400).send('El grado es un campo obligatorio.');
     }

     const query = `INSERT INTO admissiones (nombre, celular, email, mensaje) VALUES (?, ?, ?, ?, ?, ?, ?)`;

     conexion.query(query, [
          nombre,
          celular,
          email,
          colegio,
          mensaje,
     ], (err, result) => {
          if (err) {
               console.error('Error al insertar datos: ' + err.stack);
               res.status(500).send('Ocurrió un error al procesar tu consulta.');
               return;
          }

          res.status(200).send('Tu consulta ha sido procesada exitosamente.');
     });
});

app.get('/', (req, res) => {
     res.sendFile(path.join(__dirname, 'admission.html'));
});

app.listen(port, () => {
     console.log(`Servidor escuchando en http://127.0.0.1:${port}`);
});