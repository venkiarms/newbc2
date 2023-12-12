const Mod =require('../model/usermod')

//http://localhost:4000/api/getapi

 const getdata=async(req,res)=>{
    let live;
    try{
        live=await Mod.find();

    }
    catch(err){
        console.log(err)
    }
    if(!live){
        return res.status(404).json({message:'data is not found'})
       
    }
    return res.status(200).json({live})
 }

 
//http://localhost:4000/api/postapi
 const postdata=async(req,res)=>{
    const{name,email,password,phone}=req.body;
    let livewire;
    try{
        livewire =  new Mod({
            name,
            email,
            password,
            phone
        })
        await livewire.save()
    }
    catch(err){
        console.log(err)
    }
    if(!livewire){
        return res.status(404).json({message:'data is not found'})
       
    }
    return res.status(200).json({livewire})


 }

 exports.getdata=getdata;
 exports.postdata=postdata;