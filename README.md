[![License](https://img.shields.io/badge/license-GPL--2.0%2B-red.svg?style=flat-square)](http://www.gnu.org/licenses/gpl-2.0.html) [![Tool](https://img.shields.io/badge/wp--translations-used-brightgreen.svg?style=flat-square)] (http://wp-translations.org)
# Grunt Transifex WordPress #

A set of grunt tasks to integrate i18n tools and Transifex to your WordPress plugin/theme Grunt workflow.

* Creates pot

* Creates pot and pushes it to Transifex

* Pulls translations from Transifex and creates the .mo files

* Extras: Builds a zip folder of all your files - ready to use

## Requirements

* Node.js - [Install Node.js](https://github.com/joyent/node/wiki/Installing-Node.js-via-package-manager)
* Grunt-cli and Grunt (`npm install grunt-cli -g`)
* Transifex Client - [Install tx client](http://docs.transifex.com/developer/client/setup)
* Gettext - [Install Gettext](https://www.gnu.org/software/gettext/) or `brew install gettext` -> [Homebrew formula for OS X](http://brewformulas.org/Gettext)
* [PHP CLI](http://www.php.net/manual/en/features.commandline.introduction.php) in your system path.

## Getting started

If you haven't used [Grunt](http://gruntjs.com/) before, check out Chris Coyier's post on [getting started with Grunt](http://24ways.org/2013/grunt-is-not-weird-and-hard/).

And for more WP-Grunt tools check out Devin Price's post [Using Grunt with WordPress Themes](http://wptheming.com/2014/05/grunt-wordpress-themes/).

Clone this repo, cd to the directory, run `npm install` to install the necessary packages.

```
git clone https://github.com/WP-Translations/grunt-transifex-wordpress
cd grunt-transifex-wordpress
npm install
grunt
```

## Setup & Configuration

### Transifex

#### TX configuration

Make sure you have a ~/.transifexrc.
It is unique per user and stores the hostname, username and password for every Transifex server that you are using. It is stored in the user's home directory.

```
[https://www.transifex.com]
username = user
token =
password = p@ssw0rd
hostname = https://www.transifex.com
```

More info about [setting up your Transifex client](http://docs.transifex.com/developer/client/config#transifexrc)

#### TX client config file

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

### Checktexdomain

In your Gruntfile.js, replace in the section named `checktextdomain` the text_domain option:

```js
checktextdomain: {
			options:{
				text_domain: 'foo',
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

### Check textdomain and makepot

`grunt go-pot`

### Creates pot and pushes it to Transifex

`grunt tx-push`

### Pulls translations from Transifex and creates the .mo files

`grunt tx-pull`

### Extras: Builds a zip folder of all your files - ready to use

`grunt build`

### Thanks to:

[grunt-wp-i18n](https://github.com/cedaro/grunt-wp-i18n) by Bradley Vercher to generate the .pot files.

[grunt-potomo](https://github.com/axisthemes/grunt-potomo) by AxisThemes to generate automatically the .mo files.

[transifex client](https://github.com/transifex/transifex-client) the client command tool and much more ...

All the [Grunt Crew](https://github.com/gruntjs/) & [@grappler](https://github.com/grappler), the i18n Petit-Suisse expert ;)
