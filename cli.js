#!/usr/bin/env node
'use strict';

const npmName = require('npm-name');
const open = require('opn');
const feedback = require('@abranhe/feedback');
const meow = require('meow');
const readPkgUp = require('read-pkg-up');

const cli = meow(`
	Usage

	  $ open-on-npm [package-name/null]

	Options

	  -f, --feedback  Send a feedback
	  -h, --help      Show help message and close
	  -v, --version   View package Version
	      --force     Open the package url even if it is not published

	Examples

	  $ open-on-npm non-published-packge
	  The packge 'non-published-package' is not published. Try --force!

	  $ open-on-npm non-published-packge --force

	  $ open-on-npm
`, {
	flags: {
		help: {
			type: 'boolean',
			alias: 'h'
		},
		version: {
			type: 'boolean',
			alias: 'v'
		},
		feedback: {
			type: 'boolean',
			alias: 'f'
		}
	}
});

if (cli.input.length > 1) {
	console.log('Invalid number of parameters. Maximun 1 (package-name)');
	process.exit();
}

let pkgName;

(async () => {
	const pkgJson = await readPkgUp();
	cli.input[0] ? pkgName = cli.input[0] : pkgName = pkgJson.pkg.name; // eslint-disable-line no-unused-expressions

	if (!await npmName(pkgName)) { // eslint-disable-line no-negated-condition
		open(`https://www.npmjs.com/${pkgName}`);
		process.exit();
	} else {
		console.log(`The packge '${pkgName}' is not published. Try --force!`);
	}

	if (cli.flags.force) {
		open(`https://www.npmjs.com/${pkgName}`);
		process.exit();
	}
})();

if (cli.flags.feedback) {
	feedback.project('open-on-npm');
	feedback.message(feedback.defaultMessage);
	feedback.web();
}
