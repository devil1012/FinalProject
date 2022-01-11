const service=require('./service');

exports.getCategories=async(req,res)=>{
    try{
        let results=await service.getCategories();
        res.render('index', { 
            data:results,
            title: 'Final Project' ,
            name:'zac',
            id:'204410053'
        });
    }catch(err){
        console.log('Controller getCategories',err);
    }
}