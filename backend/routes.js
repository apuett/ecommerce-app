const express = require('express')
const router = express.Router()
const Product = require('./ProductModels')

router.post('/post-product',(request,response)=>{
    const addedProduct = new Product({
        key: request.body.key,
        name: request.body.name,
        price: request.body.price,
        description: request.body.description,
        image_path: request.body.image_path
    });
    addedProduct.save()
    .then(data =>{
        response.json(data)
    }).catch(error=>{
        response.json(error)
    })
});

router.get('/product-context', (request, response)=>{
    Product.find({}).then(data=>{
        response.send(data)
    }).catch(error=>{
        response.json(error)
    })
});

module.exports = router;