const express = require("express")
const app = express()

app.listen(5000, (err)=>{
    if(err){
        console.log(err)
    }else{
        console.log("Listening to server at port 5000")
    }
    
})

app.get("/", (req, res)=>{
    res.status(200).send("Realestate Backend")
})