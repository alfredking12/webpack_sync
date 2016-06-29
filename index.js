var fs = require('fs');
var path = require('path');
var FFI = require("ffi");

var libc = new FFI.Library(null, {
    "system": ["int32", ["string"]]
});

module.exports = function(options) {
	
    if (!options || !options.entry || !options.output || 
        !options.output.filename || !options.output.path) {
        console.log('webpack: !options || !options.entry || !options.output || !options.output.filename || !options.output.path');
        return false;
    }
    
    //临时配置文件路径
    var config_file = './webpack.config.js.tmp';
    //输出文件路径
    var output_file = [options.output.path, options.output.filename].join(path.sep);
    
    //移除已经存在的文件
    if (fs.existsSync(output_file)) {
        fs.unlinkSync(output_file);
    }
    
    //处理正则表达式输出到文本的问题 test:{{xxx}} value:/\.|jsx$/
    var loaders = [];
    if (options.module && options.module.loaders) {
        for (var i = 0;i<options.module.loaders.length; i++) {
            var item = options.module.loaders[i];
            loaders.push({
                test: item.test, 
                value: item.value
            });
            delete item.value;
        }
    }
    //按照webpack配置文件格式
    var data = 'module.exports = ' + JSON.stringify(options) + ';';
    for (var i = 0;i<loaders.length; i++) {
        var item = loaders[i];
        var search = '\"' + item.test + '\"';
        data = data.replace(search, item.value);
    }
    
    //写入配置文件
    fs.writeFileSync(config_file, data);
    
    //执行webpack命令
    var optimized = options.optimized ? ' -P' : '';
    libc.system("webpack --config " + config_file + optimized);
    
    //通过检查文件输出判断是否成功执行
    var ret = fs.existsSync(output_file);
    
    //TODO：通过文件内容开头，判断执行情况
    
    if (ret) {
        //fs.unlink(config_file)
    }
    return ret;
}