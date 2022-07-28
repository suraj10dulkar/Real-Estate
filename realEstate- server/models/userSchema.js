const mongoose = require("mongoose");
const validator = require("validator");

const userSchema = new mongoose.Schema({
    property_type:{
            type:String,
            required:true
    },
    price:{
            type:Number,
            required:true

    },
    property_age:{
            type:String,
            required:true
    },
    property_description:{
            type:String,
            required:true
    },
    negotiable:{
            type:String,
            required:true
    },
    ownership:{
        type:String,
        required:true
        
    },
    property_approved:{
        type:String,
        required:true
        
    },
    bank_loan:{
        type:String,
        required:true
        
    },
    length:{
        type:String,
        required:true
        
    },
    breadth:{
        type:String,
        required:true
        
    },
    total_area:{
        type:String,
        required:true
        
    },
    area_unit:{
        type:String,
        required:true
        
    },
    no_of_bhk:{
        type:Number,
        required:true
        
    },
    no_of_floors:{
        type:Number,
        required:true
        
    },
    attached:{
        type:String,
        required:true
        
    },
    western_toilet:{
        type:String,
        required:true
        
    },
    furnished:{
        type:String,
        required:true
        
    },
    car_parking:{
        type:String,
        required:true
        
    },
    lift:{
        type:String,
        required:true
        
    },
    electricity:{
        type:String,
        required:true
        
    },
    facing:{
        type:String,
        required:true
        
    },
    name:{
        type:String,
        required:true,
        minlength:4
        
    },
    mobile:{
        type:Number,
        required:true,
        min:10,
        unique:true
        
    },
    posted_by:{
        type:String,
        required:true
        
    },
    sale_type:{
        type:String,
        required:true
        
    },
    featured_package:{
        type:String,
        required:true
        
    },
    ppd_package:{
        type:String,
        required:true
        
    },
    image:{
        type:String,
        required:true
        
    },
    email:{
        type:String,
        required:true,
        unique:[true,"Email id is already present"],
        validate(value){
            if(validator.isEmail(value))
            {
                throw new Error("Invalid Email")
            }
        }
        
    },
    city:{
        type:String,
        required:true
        
    },
    area:{
        type:String,
        required:true
        
    },
    pincode:{
        type:Number,
        required:true,
        min:6,
        max:6
        
    },
    address:{
        type:String,
        required:true
        
    },
    landmark:{
        type:String,
        required:true
        
    },
    latitude:{
        type:String,
        required:true
        
    },
    longitude:{
        type:String,
        required:true
        
    },
    ppd_id:{
        type:String,
        required:true
        
    },
    views:{
        type:Number,
        required:true
        
    },
    status:{
        type:String,
        required:true
        
    },
    days_left:{
        type:Number,
        required:true
        
    }

});

const userModal = new mongoose.model('user',userSchema);
module.exports = userModal;