var express = require('express');
var router = express.Router();

const db = require('../utils/database');

/* CREATE*/
router.post('/add',async(req,res)=>{
  const id=req.body.id;
  const name=req.body.name;
  const author=req.body.author;
  try{
    const query={
      text:`insert into book (id,name,author) values($1,$2,$3)`,
      values:[id,name,author]
    }
    await db.query(query);
    res.redirect('/books_53');
  }catch{

  }
})

/* READ */
router.get('/', async function (req, res) {
  let data;
  try {
    const results = await db.query('SELECT * FROM book');
    data = results.rows;
    console.log('data', JSON.stringify(data));
    // res.json(data);
    res.render('books_53', { data });
  } catch (err) {
    console.log('Errors on getting books!');
    res.render('books_53', { data: '' });
  }
});

router.get('/add',(req,res)=>{
  res.render('books_53/add_53');
})

router.get('/edit/:id',async(req,res)=>{
  const id=req.params.id;
  try{
    const query = {
      text: `SELECT * FROM book WHERE id = $1;`,
      values: [id]
    }
    const results = await db.query(query);
    data=results.rows;
    res.render('books_53/edit_53',{
      id:data[0].id,
      name:data[0].name,
      author:data[0].author
    });
  }catch{
  }
})

router.post('/update',async(req,res)=>{
  try{ 
    const query = {
      text: `UPDATE book SET name = $1, author = $2 WHERE id=$3;`,
      values: [req.body.name , req.body.author , req.body.id]
    }
    await db.query(query);
    res.redirect('/books_53');
  }
  catch(err){
    console.log(err);
  }
})

/* DELETE */
router.get('/delete/:id', async (req, res) => {
   try {
    const query = {
      text: `DELETE FROM book WHERE id = $1;`,
      values: [req.params.id]
    }
     const results = await db.query(query);
     res.redirect('/books_53');
   } catch (err) {
     console.log(err);
   }
});


module.exports = router;