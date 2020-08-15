let express = require('express'),
    router = express.Router();

router.get('/',(req,res)=>{
    /* 
        Books homepage which will show the various books in the database which 
        have had synopsis written recently.
    */

    res.render('books/index');
    
    // Book.find({}, (err, foundBooks) => {
    //     err ? console.log(err) : res.render('books/index', { books: foundBooks });
    // });
})

module.exports = router;