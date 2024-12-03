//index.js
const express = require("express");
const routerApi = require("./routes");
const cors = require("cors");

const { logErrors, boomErrorHandler, errorHandler } = require("./middlewares/error.handler");


// creamos una aplicación, asignando el método constructor express()
const app = express();
const port = 3000;

//middleware
app.use(express.json());

routerApi(app);

const whitelist = ['http://localhost:3000', 'https://myapp.com'];
const options = {
  origin: (origin, callback) => {
    if (whitelist.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('not allowed'));
    }
  }
};

app.use(cors(options));

app.get("/", (req, res) => {
  res.send("Mi server en Express");
})
app.get("/nueva-ruta", (req, res) => {
  res.send("Bienvenido a la nueva ruta!");
})

app.use(logErrors);
app.use(boomErrorHandler);
app.use(errorHandler);


app.listen(port, ()=>{
  console.log(`Listening at http://localhost:${port}`)
})
