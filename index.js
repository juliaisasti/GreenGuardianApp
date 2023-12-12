require("./config/db_pgsql");
const express = require("express");
const app = express();
const port = 3000;

const helmet = require("helmet");
// Set Content Security Policies
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

const plantsRouter = require('./routes/plants.route')

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/plants", plantsRouter);

app.listen(port, () => {
  console.log(`Example app listening!!!! on http://localhost:${port}`);
});

module.exports = app;
