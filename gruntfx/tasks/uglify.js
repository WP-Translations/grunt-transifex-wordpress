module.exports = function (grunt, options) {
    var config = options.assets;

    var files = {};
    var count = config.scripts.length;
    for (var i=0; i<count; ++i) {
        var asset = config.scripts[i];
        var key = asset.output.path + "/" + asset.output.file;
        files[key] = asset.input;
    }

    return {
        dev: {
            options: {
                sourceMap: true,
                sourceMapFilename: config.sourcemap.path + "/" + config.sourcemap.name + ".js.map",
                sourceMapURL: config.sourcemap.relativeUrl + "/" + config.sourcemap.name + ".js.map",
                sourceMapBasepath: config.sourcemap.basePath,
                sourceMapRootpath: config.sourcemap.rootPath
            },
            files: files
        },
        dist: {
            options: {
                sourceMap: false
            },
            files: files
        }
    };
};