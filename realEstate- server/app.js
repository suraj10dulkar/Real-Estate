const express = require("express")
const app = express();
const userController = require("./routes/userRoute");

const port = process.env.PORT || 5000 ;


app.use(express.json({limit: "30mb", extended:true}));
app.use(express.urlencoded({extended: false}));
app.use(cors());

app.listen(port, (err)=>{
    if(err){
        console.log(err)
    }else{
        console.log("Listening to server at port 5000")
    }
    
})


app.get("/", (req, res)=>{
    res.status(200).send("Realestate Backend server zw")
})

app.use("/userRoute", userController);