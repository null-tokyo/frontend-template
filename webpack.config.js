module.exports = {
    mode: 'development',
    entry: './src/js/index.js',
    output: {
        filename: 'main.js',
        path: `${__dirname}/dist/js`
    },
    module: {
        rules: [
            //eslint
            {
                enforce: 'pre',
                test: /\.js$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'eslint-loader',
                        options: {
                            quiet: true,
                            failOnWarning: true
                        }
                    }
                ]
            },
            //babel
            {
                test: /\.js$/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            presets: [
                                ['env', {'modules': false} ]
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
  