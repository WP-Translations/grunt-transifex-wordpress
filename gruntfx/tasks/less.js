module.exports = function (grunt, options) {
    var config = options.assets;

    var files = {};
    var count = config.styles.length;
    for (var i=0; i<count; ++i) {
        var asset = config.styles[i];
        var key = asset.output.path + "/" + asset.output.file;
        files[key] = asset.input;
    }

    return {
        dev: {
            options: {
                compress: false,
                sourceMap: true,
                sourceMapFilename: config.sourcemap.path + "/css/" + config.sourcemap.name + ".min.css.map",
                sourceMapURL: config.sourcemap.relativeUrl + "/css/" + config.sourcemap.name + ".min.css.map",
                sourceMapBasepath: config.sourcemap.basePath,
                sourceMapRootpath: config.sourcemap.rootPath
            },
            files: files
        },
        dist: {
            options: {
                compress: true,
                yuicompress: true,
                optimization: 2,
                sourceMap: false
            },
            files: files
        }
    };
};