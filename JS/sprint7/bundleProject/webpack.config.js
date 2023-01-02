const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { resolve } = require('path')
const path=require('path')
module.exports={
    mode:"development",
    entry:'./src/index.js',
    output:
    {
        filename:'bundle.js',
        path:resolve(__dirname,'dist'),
        libraryTarget:'var',
        library:'EntryPoint'
    },
    plugins:[
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            filename:'output.html',
            inject:true,
            template:path.resolve(__dirname,'src','index.html')
        })
    ]
}