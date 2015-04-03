https://github.com/jharding/grunt-exec
module.exports = {
	// Update WebTranslateIt translation - grunt exec:update_po_wti
	update_po_wti: {
		cmd: 'wti pull',
		cwd: '<%= pkg.theme.domainpath %>',
	}
};
