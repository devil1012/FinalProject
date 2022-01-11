const service=require('./service');

exports.getCategories=async(req,res)=>{
    try{
        const data=await service.getCategories();
            return res.json(data);
       
    }catch(err){
        console.log('Controller getCategories',err);
    }
}