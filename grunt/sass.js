// https://github.com/gruntjs/grunt-contrib-sass
module.exports = {
	options: {
		sourcemap: 'none',
		force: true,
		style: 'expanded',
		trace: true,
		lineNumbers: true
	},
	theme: {
		options: {
			banner:
				'/*!\n' +
				'Theme Name:  <%= pkg.theme.name %>\n' +
				'Version:     <%= pkg.version %>\n' +
				'Author:      <%= pkg.theme.author %>\n' +
				'Author URI:  <%= pkg.theme.authoruri %>\n' +
				'Theme URI:   <%= pkg.theme.uri %>\n' +
				'Description: <%= pkg.theme.description %>\n' +
				'Text Domain: <%= pkg.theme.textdomain %>\n' +
				'Domain Path: <%= pkg.theme.domainpath %>\n' +
				'License:     <%= pkg.theme.license %>\n' +
				'License URI: <%= pkg.theme.licenseuri %>\n' +
				'Tags:        <%= pkg.theme.tags %>\n' +
				'*/\n'
		},
		files: [
			{
				expand: true,
				cwd: '<%= pkg.directories.sass %>',
				src: 'style.scss',
				dest: '',
				ext: '.css'
			}
		]
	}
//	editorstyle: {
//		options: {
//			sourcemap: 'none',
//			lineNumbers: false,
//			banner:
//				'/*!\n' +
//				'<%= pkg.theme.name %> Editor Styles\n' +
//				'Version: <%= pkg.version %>\n' +
//				'*/\n'
//		},
//		files: [
//			{
//				expand: true,
//				cwd: '<%= pkg.directories.sass %>',
//				src: 'editor-style.scss',
//				dest: '',
//				ext: '.css'
//			}
//		]
//	}
};
