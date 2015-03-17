module.exports = function (grunt, options) {
    var config = options.assets.styles;
    var files = [];
    var count = config.length;
    for (var i=0; i<count; ++i) {
        var filter = config[i].output.path + "/*.css";
        files.push(filter);
    }

    return {
        options: {
            browsers: ['last 3 versions, > 2%']
        },
        dev: {
            src: files
        },
        dist: {
            src: files
        }
    };
};