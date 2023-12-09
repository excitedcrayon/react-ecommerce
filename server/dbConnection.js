import mysql from 'mysql';

export const dbConnection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'react_ecommerce'
});