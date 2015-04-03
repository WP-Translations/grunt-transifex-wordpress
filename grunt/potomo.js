// https://github.com/axisthemes/grunt-potomo
module.exports = {
	dist: {
		files: [
			{
				expand: true,
				cwd: '<%= pkg.directories.languages %>',
				src: ['*.po'],
				dest: '<%= pkg.directories.languages %>',
				ext: '.mo',
				nonull: true,
				filter: 'isFile'
			}
		]
	}
};
