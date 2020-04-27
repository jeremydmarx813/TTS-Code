module.exports = {
	entry     : {
		app : './app/javascript/'
	},
	output    : {
		path       : __dirname + '/dist',
		publicPath : '/',
		filename   : 'bundle.js'
	},
	devServer : {
		contentBase : './dist',
		port        : '3000',
		inline      : true
	}
};
