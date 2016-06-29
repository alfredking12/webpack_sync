# Webpack Sync
webpack_sync is a Node.js addon for use webpack synchronously.


# Examples
```
var ok = webpack({
    entry: './index.jsx',
    output: {
        filename: './index.js',
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
```

# Requirements
- Linux, OS X, Windows, or Solaris.
- webpack CLI should install global by npm.

# Installation
Make sure you've install webpack CLI
```
npm install -g webpack
```

Install webpack_sync
```
npm install webpack_sync
```

Install Webpack Loaders and Plugins if need
> You can also install loaders and plugins local if you need, such as url-loader, jsx-loader, css-loader, style-loader and so on.
> When webpack CLI run, it will find module local and global.   
```
npm install --save-dev url-loader jsx-loader style-loader css-loader
```

### Options
> The same as [Webpack's Configuration]('http://webpack.github.io/docs/configuration.html')
> Just update **module->loaders** (JSON.stringify(options) can't convert the regex well so that writing the webpack.config.js unexpectly) :
> - 'test' describes placeholder, which will be replaced by 'value'   
> - 'value' describes the regex