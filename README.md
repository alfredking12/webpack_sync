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
> Since use webpack CLI, you should install loaders and plugins global if you need, such as url-loader, jsx-loader and so on.   
```
npm install -g url-loader jsx-loader
```

### Options
> The same as [Webpack's Configuration]('http://webpack.github.io/docs/configuration.html')
> Just update **module->loaders** (JSON.stringify(options) can't convert the regex well so that writing the webpack.config.js unexpectly) :
> - 'test' describes placeholder, which will be replaced by 'value'   
> - 'value' describes the regex