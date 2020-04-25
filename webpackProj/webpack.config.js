module.exports = {
	entry     : {
		app : './app/javascript/'
	},
	output    : {
		path       : __dirname + '/dist',
		publicPath : '/',
		filename   : 'bundle.js'
	},
	module    : {
		rules : [
			{
				test : /\.css$/,
				use  : [ { loader: 'style-loader' }, { loader: 'css-loader' } ]
			},
			{ test: /\.js$/, loader: 'eslint-loader', exclude: '/node_modules/' },
			{ test: /\.js$/, loader: 'babel-loader', exclude: '/node_modules/' },
			{ test: /\.jsx$/, loader: 'babel-loader', exclude: '/node_modules/' }
		]
	},
	resolve   : {
		extensions : [ '.webpack.js', '.web.js', '.js', '.json', '.css' ],
		modules    : [ './node_modules', './app' ]
	},
	devServer : {
		contentBase : './dist',
		port        : '3000',
		inline      : true
	}
};
