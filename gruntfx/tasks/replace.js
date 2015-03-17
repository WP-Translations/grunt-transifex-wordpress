module.exports = function (grunt, options) {
    return {
        bxslider_css: {
            src: ['src/less/bxslider/*.less'],
            overwrite: true,
            replacements: [
                {
                    from: 'images/',
                    to: '../img/'
                }
            ]
        }
    };
};