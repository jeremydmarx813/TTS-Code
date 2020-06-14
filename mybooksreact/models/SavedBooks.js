const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const SavedBookSchema = new Schema({
	amazon_product_url : {
		type     : String,
		required : true
	},
	author             : {
		type     : String,
		required : true
	},
	book_image         : {
		type     : String,
		required : true
	},
	title              : {
		type     : String,
		required : true
	},
	book_uri           : {
		type     : String,
		required : true
	},
	description        : {
		type     : String,
		required : true
	},
	list_name          : {
		type     : String,
		required : true
	},
	publisher          : {
		type     : String,
		required : true
	},
	primary_isbn10     : {
		type     : String,
		required : true
	},
	title              : {
		type     : String,
		required : true
	},
	isSaved            : {
		type     : String,
		required : true
	}
});

module.exports = SavedBooks = mongoose.model('saved-books', SavedBookSchema);
