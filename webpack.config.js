var webpack = require('webpack');

module.exports = {
    entry : [
        './src/js/index.js'
    ],
    output : {
        path : './dist',
        filename : 'index.js'
    },
    module : {
        loaders : [
            { test : /\.js$/ ,
                loader : 'babel' ,
                exclude : /node_modules/,
                query : { presets : ['react' , 'es2015']}
            },
            {
                test : /\.css$/,
                loader: 'css-loader'
            },
            {
                test : /\.(png|jpe?g|gif|svg)(\?.*)?$/,
                loader : 'url-loader'
            }
        ]
    },

};