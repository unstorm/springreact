const path = require('path');
const webpack = require('webpack');

//개발서버 포트정
const port = process.env.PORT || 3000;

module.exports = {
    entry: './src/main/frontend/index.js',
    module: {
        rules: [
            {
                test: path.join(__dirname, '.'),
                exclude: /(node_modules)/,
                use: [{
                    loader: 'babel-loader',
                    options: {
                        presets: ["@babel/preset-env", "@babel/preset-react"]
                    }
                }]
            }
        ]
    },
    //webpack 빌드 경로
    output: {
        path: __dirname,
        filename: './src/main/resources/static/built/bundle.js'
        //publicPath: '/',
        //filename: 'bundle.js'
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ],
    //테스트 서버 경로
    devServer: {
        // host: 'localhost',
         hot: true,
         port: port,
        // historyApiFallback: true,
        open: true,
        contentBase: './dist'
    }
};
