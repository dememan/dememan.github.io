const express = require('express');
const app = express();

module.exports = {
    search: function (searchKey, res) {

        const mysql = require('mysql');
        const dbConfig = { HOST: "localhost", USER: "root",PASSWORD: "miusql", DB: "entries" } ;
        // Create a connection to the database
        const connection = mysql.createConnection({
            host: dbConfig.HOST,
            user: dbConfig.USER,
            password: dbConfig.PASSWORD,
            database: dbConfig.DB
        });
        // open the MySQL connection
        connection.connect(error => {
            if (error) throw error;
            console.log("Successfully connected to the database.");
            connection.query(`select * from entries where word='${searchKey}' `, (error, recordset) => {
                if (error) {
                    console.log('query error ' + error);
                    return res.send(null);;
                }
                if (recordset.length) {
                    console.log("found word: ", recordset);
                    return res.send(recordset);
                }
                return res.send(null); //empty                
            });
        });
    }
}