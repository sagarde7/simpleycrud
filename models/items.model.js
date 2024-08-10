const mongoose=require("mongoose");

const ProductSchema= mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    brand:{
        type:String,
        required:true
    },
    quantity:{
        type:String,
        default:0
    },
    price:{
        type: Number,
        required: true
    }
},
{
    Timestamp:true
}

)

const Product= mongoose.model("Product",ProductSchema);

module.exports=Product;