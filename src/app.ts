import dotenv from 'dotenv';
dotenv.config();
import path from 'path';
import express from 'express';
import bodyParser from 'body-parser';
import Mongoose from 'mongoose';
import commonHelper from './helper/commonHelper';
import { userRoutes } from '../src/domain/users/routes/userRoutes'

global.CONFIG = require("./configuration/env/" + process.env.NODE_ENV);
global.HELPER = new commonHelper();

// console.log(global.CONFIG)

const app = express();
const PORT = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "./views"));
app.get("/", (req, res) => {
    res.render('home');
});

Mongoose.connect(process.env.MONGO_URL)
    .then(() => console.log("MongoDB is connected!"))
    .catch((err) => console.log(err))

app.use("/user", userRoutes)
app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`)
})

