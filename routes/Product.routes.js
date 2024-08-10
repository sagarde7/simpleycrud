const express=require("express");
const Product=require("../models/items.model");
const router=express.Router();
const {getroute,altergetroute,createroute,updateroute,deleteroute}= require("../controllers/Product.controller")

router.get("/",getroute);
router.post("/",createroute);
router.get("/:brand",altergetroute);
router.put("/:brand",updateroute);
router.delete("/:brand",deleteroute);


module.exports=router;