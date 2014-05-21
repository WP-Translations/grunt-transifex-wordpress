# Grunt Transifex WordPress #

A set of grunt tasks to integrate i18n tools and Transifex to your WordPress plugin/theme workflow.

1. Creates pot.

2. Creates pot and pushes it to Transifex.

3. Pulls translations from Transifex and creates the .mo files.

4. Extras: Builds a zip folder of all your files - Ready to use.

## Requirements

* Node.js - [Install Node.js](https://github.com/joyent/node/wiki/Installing-Node.js-via-package-manager)
* Grunt-cli and Grunt (`npm install grunt-cli -g`)
* Transifex Client - [Install tx client](http://docs.transifex.com/developer/client/setup)

## Getting started

If you haven't used [Grunt](http://gruntjs.com/) before check out Chris Coyier's post on [getting started with Grunt](http://24ways.org/2013/grunt-is-not-weird-and-hard/).

Clone this repo, cd to the directory, run `npm install` to install the necessary packages.

```
git clone https://github.com/WP-Translations/grunt-transifex-wordpress
cd grunt-transifex-wordpress
npm install
grunt
```

## How it works

### Creates pot

grunt makepot

### Creates pot and pushes it to Transifex

grunt makandpush

### Pulls translations from Transifex and creates the .mo files

grunt tx

### Extras: Builds a zip folder of all your files - Ready to use

grunt build
