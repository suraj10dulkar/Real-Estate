const express = require("express");
const userModal = require("../models/userSchema");
const router = express.Router();

router.post("/add", async(req,res)=>{
    try{
        const users = new userModal(req.body);
        const createUser = await users.save();
        res.status(201).send(createUser);
    }
    catch(e){
        res.status(400).send(e);
    }
});

router.get("/property", async(req,res)=>{
    try{
        const propertyData = await userModal.find();
        res.status(200).send(propertyData);
    }
    catch(e){
        res.status(400).send(e);
    }
})

module.exports = router;