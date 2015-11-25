var path = require('path');

module.exports = {
	entry:path.join(__dirname, "app/js/index.js"),
	output:{
		path:path.join(__dirname, "dist/js"),
		filename:"bundle.js"
	},
	
	module:{
		loaders:[
			{
				test: path.join(__dirname, "app"),
				loader:'babel-loader',
				query: {
					plugins: ['transform-runtime'],
					presets: ['es2015']
				}
			}
		]
	},
	
};