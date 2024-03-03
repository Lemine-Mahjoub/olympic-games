const path = require('path');

module.exports = {
    entry: './js/app.js',
    output: {
        path: path.resolve(__dirname, 'render'),
        filename: 'main.js'
    },
    module: {
        rules: [
                {
                    test: /\.js$/,
                    exclude: /node_modules/,
                    use: {
                        loader: 'babel-loader',
                        options: {
                            presets: ['@babel/preset-env']
                        }
                    }
                }
            ]
        }
           
};  
