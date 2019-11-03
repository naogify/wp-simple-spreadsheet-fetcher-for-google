module.exports = {
    mode: 'production',
    devtool: 'source-map',
    entry: "./blocks/src/**/*.js",
    output: {
        filename: "./blocks/build/build.js"
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env'],
                        plugins: [
                            '@babel/plugin-transform-react-jsx',
                            [
                                // JSをスキャンして、potを作成/アップデート
                                '@wordpress/babel-plugin-makepot',
                                {
                                    'output': `./inc/vk-blocks/build/languages/vk-blocks.pot`
                                }
                            ]
                        ]
                    }
                }
            }
        ]
    }
}
