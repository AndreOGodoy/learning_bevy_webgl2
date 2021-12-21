const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const WasmPackPlugin = require("@wasm-tool/wasm-pack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = {
    entry: './src/index.js',
    output: {
	path: path.resolve(__dirname, 'dist'),
	filename: 'index.js',
    },
    module: {
	rules: [
	    {
		test: /\.css$/i,
		use: ["style-loader", "css-loader"]
	    }
	]
    },
    plugins: [
	new CopyWebpackPlugin({
	    patterns: [
		{from: './src/assets', to: 'assets'}
	    ]
	}),
	
	new HtmlWebpackPlugin({
	    template: './public/index.html'
	}),

	new WasmPackPlugin({
	    crateDirectory: path.resolve(__dirname, './src/wasm'),
	    extraArgs: '-- -j 2'
	})
    ],
    experiments: {
	asyncWebAssembly: true
    },
    mode: 'development'
}
