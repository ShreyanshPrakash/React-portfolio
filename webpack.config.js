//var path = require('path');

module.exports = {

    entry: './components/app.js',
    output: {
        //path: './',
        filename: './bundle.js',

    },

    module: {
        loaders: [
            {
                test: /\.js$/,
                //include: path.resolve(__dirname, 'src'),
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    presets: ['react', 'es2015'],
                    compact:true
                }
            },
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader'
            }
        ]
    },

};
