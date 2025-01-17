const path = require('path');

module.exports = {
    // we need to define the entry file
    entry: './src/index.js',
    // We need to define the output directory and the file
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js',
    },
    // We need to add 'webpack loaders'
    module: {
        rules: [
            // Add loader to CSS
            {
                test: /\.css$/,
                use: 'css-loader',
            },
            // Add loader to TS
            {
                test: /\.ts$/,
                use: 'ts-loader',
            },
            // Now we need to use babel to trasnpile ES6+ files
            {
                test: /\.(?:js|mjs|cjs)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        targets: "defaults",
                        presets: [
                            ['@babel/preset-env']
                        ]
                    }
                }
            },
            // we need to use too SASS
            {
                test: /\.s[ac]ss$/i,
                use: [
                    // Creates `style` nodes from JS strings
                    "style-loader",
                    // Translates CSS into CommonJS
                    "css-loader",
                    // Compiles Sass to CSS
                    "sass-loader",
                ],
            },
            // We need to add rules to React and JSX sintaxis
            {
                test: /\.(js|jsx)$/, // Ahora incluye archivos .jsx
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            '@babel/preset-env',
                            '@babel/preset-react' // Agrega este preset
                        ]
                    }
                }
            },

        ],

    },
    resolve: {
        extensions: ['.js', '.jsx'],
    },
    // we need to add (plug-ins) too
    plugins: [

    ],
};
