const path = require('path');
const webpack = require('webpack'); //to access built-in plugins

module.exports = {
	devtool: 'source-map',
	entry: [
		'./src/client/index.js'
	],
	output: {
		path: __dirname + '/src/public',
		publicPath: '/src/public/',
		filename: 'bundle.js'
	},
	module: {
		loaders: [
			{
				test: /\.jsx?$/,
        exclude: /node_modules/, //exclude any and all files in the node_modules folder
        loader: 'babel-loader',
        query: {
					presets: ['es2015', 'react', 'env']
				}
			},
			{
				test: /\.css$/,
				use: [ 'style-loader', 'css-loader' ] 
			}
		]
	},
	node: {
		dns: 'mock',
		net: 'mock'
	},
	devServer: {
		port: 3000,
		inline: true
	}
};
