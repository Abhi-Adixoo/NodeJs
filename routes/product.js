const express = require("express");
const router=express.Router();

const Product=require('../models/product')
console.log('router call');


// Get Product
router.get('/', async(req,res)=>{
    try {
        const product=await Product.find();
        res.json(product);
    } catch (error) {
        res.send('Error'+error);
    }
})

// Get Product by ID
router.get('/:id', async(req,res)=>{
    try {
        const product=await Product.findById(req.params.id);
        res.json(product);
    } catch (error) {
        res.send('Error'+error);
    }
})


// Post(Add) a product.
router.post('/', async (req,res)=>{

    const product= new Product({
        name:req.body.name,
        brand:req.body.brand,
        ram:req.body.ram,
        camera:req.body.camera,
        network:req.body.network,
        fingerprint:req.body.fingerprint,
        price:req.body.price
    })
    
    try {
       const prod1= await product.save();
       res.json(prod1)
    } catch (error) {
        res.send('Error');
    }
})

// Update the product
router.patch('/:id', async(req,res)=>{
    try {
        const product = await Product.findById(req.params.id);
        if (product == null) {
            return res.status(404).json({message: 'Cannot find product'});
        }

        if (req.body.name != null) {
            product.name = req.body.name;
        }
        if (req.body.brand != null) {
            product.brand = req.body.brand;
        }
        if (req.body.ram != null) {
            product.ram = req.body.ram;
        }
        if (req.body.camera != null) {
            product.camera = req.body.camera;
        }
        if (req.body.network != null) {
            product.network = req.body.network;
        }
        if (req.body.fingerprint != null) {
            product.fingerprint = req.body.fingerprint;
        }
        if (req.body.price != null) {
            product.price = req.body.price;
        }

        const updatedProduct = await product.save();
        res.json(updatedProduct);
    } catch (err) {
        res.status(500).json({message: err.message});
    }
});


// Delete the Product
router.delete('/:id', async(req, res) => {
    try {
        const product = await Product.findById(req.params.id);
        if (product == null) {
            return res.status(404).json({message: 'Cannot find product'});
        }
        await Product.deleteOne({_id: req.params.id});
        res.json({message: 'Deleted Product'});
    } catch (err) {
        res.status(500).json({message: err.message});
    }
});



module.exports=router;