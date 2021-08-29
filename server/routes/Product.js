const express = require("express");
const router = express.Router();
const { Product } = require("../models");

router.get("/" ,async (req, res) => {
    const listOfProduct= await Product.findAll();
    res.json(listOfProduct);
});

router.get('/byId/:id',async(req, res) => {
    const id = req.params.id
    const product = await Product.findByPk(id);
    res.json(product);
});
router.post("/", async (req, res) => {
    const product = req.body;
    await Product.create(product);
    res.json(product);
});


module.exports=router;