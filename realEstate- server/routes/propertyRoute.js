const express = require("express");
const propertyModal = require("../models/propertySchema");
const router = express.Router();
const Authenticate = require("../middleware/Authenticate")


router.post("/addproperty", async(req,res)=>{
    try{
        const users = new propertyModal(req.body);
        const createUser = await users.save();
        res.status(201).send(createUser);
    }
    catch(e){
        res.status(400).send("Error in catch");
        console.log(e)
    }
});

router.get("/property", Authenticate, async (req,res)=>{
    
    // console.log(`This is cookie from backend ${req.headers.authorization}`)
    // console.log(`This is cookie-parser ${req.cookies.jwt}`)
    // try{
    //     const propertyData = await propertyModal.find();
    //     res.status(200).send(propertyData);
    // }
    // catch(e){
    //     res.status(400).send(e);
    // }
})

module.exports = router;