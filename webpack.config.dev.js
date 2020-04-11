const webpack = require("webpack");
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

// Declare Node envoronment
process.env.NODE_ENV = "development";

module.exports = {
	mode: "development",
	target: "web",
	devtool: "cheap-module-source-map", // possibilità di vedere il nostro codice originale quando eseguiamo il debug nel Browser
	entry: "./src/index.js",
	output: {
		// nella modalità development Webpack non esporterà nulla...
		path: path.resolve(__dirname, "build"),
		publicPath: "/",
		filename: "bundle.js",
	},
	// definizione del web server con webpack?
	devServer: {
		stats: "minimal",
		overlay: true,
		historyApiFallback: true,
		disableHostCheck: true,
		headers: { "Access-Control-Allow-Origin": "*" },
		https: false,
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: "src/index.html",
			favicon: "src/favicon.ico",
		}),
	],
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: ["babel-loader", "eslint-loader"],
			},
			{
				test: /(\.css)$/,
				use: ["style-loader", "css-loader"],
			},
			{},
		],
	},
};
