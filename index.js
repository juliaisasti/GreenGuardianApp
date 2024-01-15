require('./models/association.model')
require("./config/db_pgsql");
const cors = require('cors');
const express = require("express");
const app = express();
const port = 3000;

// PAQUETE PARA IMPLEMENTAR SEGURIDAD EN LA APLICACIÓN
// Set Content Security Policies
const helmet = require("helmet");
const scriptSources = ["'self'", "'unsafe-inline'", "'unsafe-eval'"];

app.use(
  helmet.contentSecurityPolicy({
    useDefaults: true,
    directives: {
      defaultSrc: ["'self'"],
      scriptSrc: scriptSources,
      "img-src": ["'self'", "https:", "data:"],
    },
  })
);

// PERMITIR EL ACCESO DEL FRONT AL BACK 
app.use(cors({origin:true, credentials:true}))

const plantsRouter = require('./routes/plants.route')
const favPlantsRouter = require('./routes/favPlants.route')
// const usersRouter = require('./routes/users.route')

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/plants", plantsRouter);
app.use("/fav-plants", favPlantsRouter);
// app.use("/users", usersRouter)

app.listen(port, () => {
  console.log(`Example app listening!!!! on http://localhost:${port}`);
});

module.exports = app;
