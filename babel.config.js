module.exports = {
    presets: [
        [
            '@babel/preset-env',
            {
                targets: {
                    node: 'current',
                },
            },
        ],
        // This is preset is important to transform the JSX sintaxis to JS valid syntax
        '@babel/preset-react',
        // Add prestes to transform TypeScript code to JS valid syntax
        '@babel/preset-typescript',
    ],
};