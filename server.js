const express =require('express');
const fs = require('fs');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());

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

app.post('/products', (req, res) => {
    let brandName = req.body.brandName;
    let productName = req.body.productName;
    let dollarsPerPound = req.body.dollarsPerPound;
    let image = req.body.image;
    //finding last element of data array and incrementing id 
    let id = parsedProductData.products[parsedProductData.products.length - 1].id + 1

    let productToAdd = {
        id: id,
        brandName: brandName,
        productName: productName,
        dollarsPerPound: dollarsPerPound,
        image: image,
    }
    parsedProductData.products.push(productToAdd);

    fs.writeFileSync('data.json', JSON.stringify(parsedProductData));
    return res.redirect('/')
})

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
})