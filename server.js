const express = require('express'); //PUNTO DE ENTRADA A NUESTRO BACKEND
const connectDB = require('./config/db');
const path = require('path');

const app = express(); //INICIALIZACIÓN

//Conectamos con la base de datos
connectDB();

//Inicio de Middleware
app.use(express.json({ extended: false }));

//app.get('/', (req, res) =>
//res.json({ msg: 'Welcome to the ContactKeeper API' })
//); //Indicamos que hace get: req= request //res=response

//Definimos las rutas
app.use('/api/users', require('./routes/users'));
app.use('/api/auth', require('./routes/auth'));
app.use('/api/contacts', require('./routes/contacts'));

//Serve static assets in production

if (process.env.NODE_ENV === 'production') {
  //Set static folder
  app.use(express.static('client/build'));

  app.get('*', (req, res) =>
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
  );
}

const PORT = process.env.port || 5000; //Establecemos el puerto

app.listen(PORT, () => console.log(`Server started on port ${PORT}`)); //Le decimos que puerto vamos a usar a la app
