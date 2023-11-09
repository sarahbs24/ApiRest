const express = require("express");
const app = express();
const mongoose = require("mongoose");
const port = process.env.PORT || 8000; 
const bodyParser = require('body-parser');
const utilisateurRoute = require('./router/utilisateurRoute');
const URI ='mongodb://localhost:27017/app' ;

mongoose.connect("mongodb://localhost:27017/app", { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connexion à MongoDB réussie'))
  .catch(err => console.error('Ereur de connexion à MongoDB', err));


const apiRoutes = require('./router/utilisateurRoute');
app.use(bodyParser.json());
app.use('/api/', utilisateurRoute);

app.listen(8000, () => {
  console.log(`Serveur écoutant sur le port 8000`);
});
