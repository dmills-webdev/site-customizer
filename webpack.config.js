const path = require('path');

module.exports = {
    entry: [
        path.resolve(__dirname, './src/script.js'),
        path.resolve(__dirname, './src/style.scss'),
    ],
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'main.min.js',
    },

    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: [],
            }, {
                test: /\.scss$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'file-loader',
                        options: { 
                            name: '[name].min.css'
                        }
                    },
                    {
                        loader: 'sass-loader',
                        options: { 
                            implementation: require("sass"),
                        }
                    }  
                ]
            }
        ]
    },

    watch: true,
    mode: 'production'
};