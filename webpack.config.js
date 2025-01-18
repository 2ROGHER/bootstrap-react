const path = require('path');

module.exports = {
    // we need to define the entry file
    // Output
    entry: './src/index.js',
    // We need to define the output directory and the file
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js',
    },
    // Modules 
    module: {
        rules: [
            /**
             * We need here to add diferents loadres to process any type fils before to 
             * add to the boundle package
             */

            // Loaders to works with CSS
            {
                test: /\.css$/,
                use: 'css-loader',
            },
            // Add loader to TypeScript 
            {
                test: /\.ts$/,
                exclude: /node_modules/,
                use: {
                    loader: 'ts-loader',
                    options: {
                        targets: "defaults",
                        presets: [
                            ['@babel/preset-typescript']
                        ]
                    }
                }
            },
            // Rules to transpile code  with ES6+ and Next with Babel 
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
            // Loaders to SASS
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
            // Loaders and rules by React and JSX sintaxis
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

