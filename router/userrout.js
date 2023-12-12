const express=require('express')

const router= express.Router();

const com =require('../controller/usercon')

router.get('/getapi',com.getdata)
router.post('/postapi',com.postdata)


module.exports=router;