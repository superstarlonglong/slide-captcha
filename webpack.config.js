const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
		entry:{
			bundle1: './src/slide_tools.js',   //  第一个JS文件

			bundle2: './src/slide_ui.js',    //  第二个JS文件
		},
		output:{
				filename:'[name].js',//根据入口名，生成不同的文件，这里示例的入口名是main被省略了，所以生成的是main.js而不是index.js
				path:path.resolve(__dirname,'dist')
		},
		plugins:[
			new HtmlWebpackPlugin({
					template:'index.html'//模板文件，将根据这个文件生成
			}),
			new CleanWebpackPlugin(),
	],
	rules:[
		{
			test: /\.(js)$/,
        loader: 'eslint-loader',
        exclude: /node_modules/,
        enforce: 'pre',
        options: {
        　　fix: true,
        }
	],

	}