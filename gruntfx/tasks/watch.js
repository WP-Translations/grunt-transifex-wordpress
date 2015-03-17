module.exports = function (grunt, options) {
    return {
        styles: {
            files: [
                "src/less/**/*.less"
            ],
            tasks: [
                ["dev"]
            ],
            options: {
                nospawn: true
            }
        },
        php: {
            files: [
                "src/php/**/*.php"
            ],
            tasks: [
                ["checktextdomain"]
            ],
            options: {
                nospawn: true
            }
        }
    };
};