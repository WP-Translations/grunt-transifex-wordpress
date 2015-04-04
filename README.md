[![License](https://img.shields.io/badge/license-GPL--2.0%2B-red.svg?style=flat-square)](http://www.gnu.org/licenses/gpl-2.0.html) [![Tool](https://img.shields.io/badge/wp--translations-used-brightgreen.svg?style=flat-square)] (http://wp-translations.org)
# Grunt Transifex WordPress #

A set of grunt tasks to integrate i18n tools and Transifex to your WordPress plugin/theme Grunt workflow.

* Creates pot

* Creates pot and pushes it to Transifex

* Pulls translations from Transifex and creates the .mo files

* Extras: Builds a zip folder of all your files - ready to use

* Bonus: A set of others grunt.js ready to use

## Requirements

* Node.js - [Install Node.js](https://github.com/joyent/node/wiki/Installing-Node.js-via-package-manager)
* Grunt-cli and Grunt (`npm install grunt-cli -g`)
* Transifex Client - [Install tx client](http://docs.transifex.com/developer/client/setup)
* Gettext - [Install Gettext](https://www.gnu.org/software/gettext/) or `brew install gettext` -> [Homebrew formula for OS X](http://brewformulas.org/Gettext)

## Getting started

If you haven't used [Grunt](http://gruntjs.com/) before, check out Chris Coyier's post on [getting started with Grunt](http://24ways.org/2013/grunt-is-not-weird-and-hard/).

And for more WP-Grunt optimization [Supercharging your Gruntfile](http://www.html5rocks.com/en/tutorials/tooling/supercharging-your-gruntfile/).

All Grunt configuration are separated into different files already setup for you and almost all Grunt config setups are done in the package.json file

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

### packages.json

All variables are setup in this file. Change all settings to reflect your own project infos. Nothing complicated

#### pot

In your package.json, replace in the section named `pot` the data below:

```js
 "pot": {
    "type": "wp-plugin",
    "textdomain": "foo",
    "src": "foo.php",
    "header": {
      "bugs": "http://wp-translations.org/",
      "team": "WP-Translations <fxb@wp-translations.org>",
      "last_translator": "WP-Translations <fxb@wp-translations.org>"
    }
  },
```
### Creates pot and pushes it to Transifex

In your grunt > exec.js, replace in the section named `exec`  the -- minimum percentage value if needed:

```js
exec: {
	txpull: { // Pull Transifex translation - grunt exec:txpull
		cmd: 'tx pull -a -f --minimum-perc=100' // Change the percentage with --minimum-perc=yourvalue
	}
}
```

That's it you're ready to `Grunt it` now with those commands!

## How it works

### Creates pot

`grunt makepot`

### Check textdomain and makepot

`grunt build:i18n`

### Creates pot and pushes it to Transifex

`grunt tx-push`

### Pulls translations from Transifex and creates the .mo files

`grunt tx-pull`

### Extras: Builds a zip folder of all your files - ready to use

`grunt build`

### Bonus: A set of other grunt.js ready to use

Open the grunt >  bonus folder. Pick a ready made grunt.js and move it into the grunt folder.  Twist it if needed.
`npm install it` and add a grunt task if needed in the `aliases.yaml` file

### Thanks to:

[grunt-wp-i18n](https://github.com/cedaro/grunt-wp-i18n) by Bradley Vercher to generate the .pot files.

[grunt-potomo](https://github.com/axisthemes/grunt-potomo) by AxisThemes to generate automatically the .mo files.

[transifex client](https://github.com/transifex/transifex-client) the client command tool and much more ...

All the [Grunt Crew](https://github.com/gruntjs/) & [@grappler](https://github.com/grappler), the i18n Petit-Suisse expert ;)
