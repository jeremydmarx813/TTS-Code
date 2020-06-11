const express = require('express');
const router = express.Router();

const SavedBook = require('../../models/SavedBooks');

//??@route GET api/savedbookroutes
//??@desc Get all savedbookroutes
//??@access Public

router.get('/', (req, res) => {
	
	SavedBooks.find().then(books => res.json(books));
});

//??@route POST api/savedbookroutes
//??@desc saves a book to database
//??@access Public
router.post('/', (req, res) => {
	const newSavedBook = new SavedBook({
		amazon_product_url : req.body.amazon_product_url,
		author             : req.body.author,
		book_image         : req.body.book_image,
		title              : req.body.title,
		book_uri           : req.body.book_uri,
		description        : req.body.description,
		list_name          : req.body.list_name,
		publisher          : req.body.publisher,
		primary_isbn10     : req.body.primary_isbn10 
    });
    newSavedBook.save().then(b => res.json(b)).catch(err => res.status(500).send())
});

module.exports = router;
