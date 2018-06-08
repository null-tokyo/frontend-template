module.exports = {
    mode: 'development',
    entry: './src/js/index.js',
    output: {
        path: `${__dirname}/dist/js`,
        filename: 'main.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: [
                {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            ['env', {'modules': false}]
                        ]
                    }
                }
                ]
            }
        ]      
    },
    devServer: {
        contentBase: 'dist',
        open: true
    }
};
  