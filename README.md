(https://img.shields.io/badge/license-GPL--2.0%2B-red.svg)
# Grunt Transifex WordPress #

A set of grunt tasks to integrate i18n tools and Transifex to your WordPress plugin/theme Grunt workflow.

* Creates pot.

* Creates pot and pushes it to Transifex.

* Pulls translations from Transifex and creates the .mo files.

* Extras: Builds a zip folder of all your files - Ready to use.

## Requirements

* Node.js - [Install Node.js](https://github.com/joyent/node/wiki/Installing-Node.js-via-package-manager)
* Grunt-cli and Grunt (`npm install grunt-cli -g`)
* Transifex Client - [Install tx client](http://docs.transifex.com/developer/client/setup)
* Gettext - [Install Gettext](https://www.gnu.org/software/gettext/) or `brew install gettext` -> [Homebrew formula for OS X](http://brewformulas.org/Gettext) 

## Getting started

If you haven't used [Grunt](http://gruntjs.com/) before check out Chris Coyier's post on [getting started with Grunt](http://24ways.org/2013/grunt-is-not-weird-and-hard/).

And for more WP-Grunt tools check out Devin Price's post [Using Grunt with WordPress Themes](http://wptheming.com/2014/05/grunt-wordpress-themes/).

Clone this repo, cd to the directory, run `npm install` to install the necessary packages.

```
git clone https://github.com/WP-Translations/grunt-transifex-wordpress
cd grunt-transifex-wordpress
npm install
grunt
```

##Configuration

### TX client config file

In .tx->config replace the project_slug and the pot_slug by your own Transifex project data.

### Creates pot

In your Gruntfile.js, replace in the section named `makepot` the data below:

```js
makepot: {
	target: {
		options: {
			mainFile: 'foo.php', // Main project file.
			potFilename: 'foo.pot', // Name of the POT file.
			type: 'wp-plugin', // Type of project (wp-plugin or wp-theme).
			updateTimestamp: true, // Whether the POT-Creation-Date should be updated without other changes.
			updatePoFiles: false // Whether to update PO files in the same directory as the POT file.
		}
	}
}
```
### Creates pot and pushes it to Transifex

In your Gruntfile.js, replace in the section named `exec`  the -- minimum percentage value if needed:

```js
exec: {
	txpull: { // Pull Transifex translation - grunt exec:txpull
		cmd: 'tx pull -a --minimum-perc=100' // Change the percentage with --minimum-perc=yourvalue
	}
}
```

That's it you're ready to `Grunt it` now with those commands!

## How it works

### Creates pot

`grunt makepot`

### Creates pot and pushes it to Transifex

`grunt makandpush`

### Pulls translations from Transifex and creates the .mo files

`grunt tx`

### Extras: Builds a zip folder of all your files - Ready to use

`grunt build`

### More infos - Thanks to ###

[grunt-wp-i18n](https://github.com/blazersix/grunt-wp-i18n) by Bradley Vercher to generate the .pot files.

[grunt-potomo](https://github.com/axisnodejs/grunt-potomo) by Axisnodejs to generate automatically the .mo files

[transifex client](https://github.com/transifex/transifex-client) the client command tool and much more...

All the [Grunt Crew](https://github.com/gruntjs/) & [@grappler](https://github.com/grappler) the i18n Petit-Suisse expert ;)
