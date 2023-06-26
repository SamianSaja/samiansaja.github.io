const express = require("express");
const path = require("path");
const mysql = require("mysql");
const dotenv = require("dotenv");

// .env
dotenv.config({ path: './.env' });

const app = express();

// database connection
const db = mysql.createConnection({
    host: process.env.DATABASE_HOST,
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE
});

db.connect( (error) => {
    if (error){
        console.log(error)
    }else {
        console.log("database connected")
    }
})
// menggunakan direktori untuk folder public
const publicDirectory = path.join(__dirname, './public');
app.use(express.static(publicDirectory));

// menggunakan hbs untuk view
app.set('view engine', 'hbs');

// request respon panggilan dengan get
app.get("/", (req, res) => {
    // res.send("<h1>Home page</>")
    res.render("index");
});

// membuat server di port 5000
app.listen(5000, () => {
    console.log("server starter on port 5000")
})