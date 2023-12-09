import express from "express";
import cors from "cors";
import mysql from "mysql";
import multer from "multer";
import bycrypt from "bcrypt";
import cookieParser from "cookie-parser";

const PORT = 3300;
const app = express();
app.use(express.json());
app.use(cors());

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'react_ecommerce'
});

if(db) console.log('DB Connection Succesful');

/**
 * RUN SERVER
 */
app.listen(PORT, (err) => {
    if(err) console.log('Could not start server');
    console.log(`Running server on PORT: ${PORT}`);
});