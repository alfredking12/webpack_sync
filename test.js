var webpack = require('./index.js');

var ok = webpack({
    entry: './index1.jsx',
    output: {
        filename: './index2.js',
        path: './output/'
    },
    module: {
        //加载器配置
        loaders: [
            { test: '{{jsx-loader-test}}', loader: 'jsx-loader?harmony', value: '/\\.jsx$/' },
            { test: '{{url-loader-test}}', loader: 'url-loader?limit=8192', value: '/\\.(png|jpg)$/'}
        ]
    },
});

if (!ok)
{
    console.log("webpack失败");
}