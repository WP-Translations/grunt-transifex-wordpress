module.exports = function (grunt, options) {
    return {
        build: {
            options: {
                archive: "releases/" + options.pkg.name + '-' + options.pkg.version + ".zip"
            },
            files: [
                {
                    expand: true,
                    src: options.build.includeFiles,
                    dest: options.pkg.name
                }
            ]
        }
    }
};