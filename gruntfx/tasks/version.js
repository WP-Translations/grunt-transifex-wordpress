module.exports = function (grunt, options) {
    return {
        options: {
        },
        plugin_file:{
            options: {
                prefix: "Version:\\s*"
            },
            src: [options.pkg.name + ".php"]
        },
        readme_txt:{
            options: {
                prefix: "Stable tag:\\s*"
            },
            src: ["readme.txt"]
        },
        package:{
            src: ["package.json"]
        }
    };
};