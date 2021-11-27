const express = require("express");
const bodyParser = require("body-parser");
const fs = require("fs");
let products = require("./products.json");
var cors = require('cors');
var path = require('path');
var cookieParser = require('cookie-parser')

const app = express();

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false}))
app.use(cookieParser())
app.use(express.static(path.join(__dirname, 'public')))
app.use(express.static(path.join(__dirname,'../client/build')));

//save function
const save = () => {
    fs.writeFile(
        "./products.json",
        JSON.stringify(products),
        (error) => {
            if (error) {
                throw error;
            }
        }
    );
};

//Read(R) in CRUD
app.get("/products", (req, res) => {
    res.json(products);
});
app.get("/products/:productId", (req, res) => {
    console.log(req.params.productId, "req.params.productId")
    const findProduct = products.find((product) =>
        product.productId == req.params.productId
    );
    res.json(findProduct);
});
// //Create(C) in CRUD
app.post("/products", bodyParser.json(), (req, res) => {
    products.push(req.body);
    save();
    res.json({
        status: "success",
        stateInfo: req.body,
    });
});
// //Update(U) in CRUD
app.put("/products/:productId", bodyParser.json(), (req, res) => {
    products = products.map((product) => {
        if (product.productId == req.params.productId) {
            return req.body;
        } else {
            return product;
        }
    });
    save();
    res.json({
        status: "success",
        ProductInfo: req.body,
    });
});
// //Delete(D) in CRUD
app.delete("/products/:productId", (req, res) => {
    products = products.filter((product) => product.productId == req.params.productId);
    save();
    res.json({
        status: "success",
        removed: req.params.productId,
        newLength: products.length,
    });
});

app.listen(4000, () => {
    console.log(`Array of products at http://localhost:4000`);
});