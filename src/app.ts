import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import bodyParser from 'body-parser';

global.CONFIG = require("./configuration/env/" + process.env.NODE_ENV);
console.log(global.CONFIG)

const app = express();
const PORT = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

app.get("/", (req, res) => {
    res.send("Hello from app");
});

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`)
})

