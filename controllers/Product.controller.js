const Product = require("../models/items.model")
const getroute = async (req, res) => {
    try {
        // /:id
        // const {id}= req.params;
        // find(id)
        const show = await Product.find({});
        res.status(200).json(show);
    }
    catch (error) {
        res.status(500).send({ message: error.message });
    }
}
const altergetroute=async(req,res)=>{
    try{
        const {brand}=req.params;
        const getbrand= await Product.find({"brand":brand});
        res.status(200).json(getbrand);
    }
    catch(err){
        res.status(200).send({message:err.message})
    }
}
const createroute = async (req, res) => {
    try {
        const items = await Product.create(req.body);
        res.status(200).json(items);
    }
    catch (error) {
        res.status(500).send({ message: error.message });
    }
}

const updateroute=async (req, res) => {
    try {
        const { name } = req.params;
        const updateData = req.body;
        
        const updatedProduct = await Product.updateMany({ "brand": name }, updateData);
        
        if (!updatedProduct) {
            return res.status(400).send("Product not found or update failed");
        }
        
        const allProducts = await Product.find({});
        return res.status(200).json(allProducts);
        
    } catch (err) {
        return res.status(500).send({ message: err.message });
    }
}

const deleteroute =async (req, res) => {
        try {
            const { brand } = req.params;
            const delbrand = await Product.deleteMany({ "brand": brand });
            if (!delbrand) {
                res.status(404).send("error");
            }

            const allProducts = await Product.find({});
            return res.status(200).json(allProducts);
        }
        catch (err) {

        }
    }


module.exports = {
    getroute,altergetroute, createroute,updateroute,deleteroute
}