const express = require('express');
const app = express();
const Product=require("./models/items.model")
const ProductRoutes=require("./routes/Product.routes")
const mongoose = require('mongoose');

app.use(express.json());

app.get("/", (req, res) => {
    res.send("welcome");
})

app.use("/api/products",ProductRoutes);





mongoose.connect('mongodb+srv://srdj50500:hCeWQZZ2nHKZjFBd@cluster0.uo5u1.mongodb.net/API?retryWrites=true&w=majority&appName=Cluster0')
.then(() => {
        console.log('Connected!');
        app.listen(3000, () => {
            console.log("hello")
        })

    })
    .catch(() => {
        console.log("error");

    });