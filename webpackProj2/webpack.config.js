module.exports = {
	entry     : {
		app : './app/javascript/'
	},
	output    : {
		path       : __dirname + '/dist',
		publicPath : '/',
		filename   : 'bundle.js'
	},
	module: {
		rules: [
		  {
			test: /\.css$/,
			use: [
			  { loader: 'style-loader' },
			  { loader: 'css-loader'}
			]
		  }
		]
	  },
	devServer : {
		contentBase : './dist',
		port        : '3000',
		inline      : true
	}
};
