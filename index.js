// download express and nodemon
require("dotenv").config();
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const productRoute = require("./routes/productRoute.js");

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// routes
app.use("/api/products", productRoute);

app.get("/", (request, response) => {
    response.send("Hello from Node API Sever Updated");
});

// mongoose
//     .connect("connection-string - /Node-API?")
const PORT = process.env.PORT || 3000;
const URL = process.env.DB_URL;
mongoose
    .connect(URL)
    .then(() => {
        console.log("Connected to database!");
        app.listen(PORT, () => {
            console.log("server is running on port: 3000");
        });
    })
    .catch(() => {
        console.log("Connection failed");
    });
