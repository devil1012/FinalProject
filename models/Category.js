const db =require('../utils/database');

const Category=class Category{
    constructor(){
    }
    static async fetchAll(){
        try {
            let results =await db.query('SELECT*from category');
            console.log
            return results.row;
        } catch(e){
            console.log('error',e);
        }
    }
};

module.exports=Category;