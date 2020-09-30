const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const routes = require('./routes');

const app = express();

const PORTA = process.env.PORT || 8080;

app.use(bodyParser.json());
app.use(cors());
app.use(routes);

app.use((req, res, next) => {
    const error = new Error("página não encontrada");
    error.status = 404;
    next(error); 
});

app.use((error, req, res, next) => {
    res.status(error.status || 500);
    res.json({error: error.message});
});

app.listen(PORTA, () => console.log("pai tá on"));

