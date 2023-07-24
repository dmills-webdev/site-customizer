const path = require('path');

module.exports = {
    entry: {
        main: ['./src/main.js', './src/main.scss' ],
        settings:  [ './src/settings.js', './src/settings.scss' ],
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].min.js'
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