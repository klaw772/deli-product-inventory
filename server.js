const express =require('express');
const fs = require('fs');
const app = express();

const port = process.env.PORT || 8080;
const productData = fs.readFileSync('data.json');
const parsedProductData = JSON.parse(productData);

app.get('/products', (req, res) => {
    res.json(parsedProductData);
})

app.get('/products/:id', (req, res) => {
    // requested item in JSON array is one less index because our item id's start at 1
    res.json(parsedProductData.products[req.params.id - 1]);
})

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
})