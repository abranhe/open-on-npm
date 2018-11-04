<p align="center">
	<br>
	<a href="https://npmjs.com/package/open-on-npm"><img src="https://cdn.abranhe.com/projects/open-on-npm/logo.svg" width="200"></a>
	<br>
	<br>
	<a href="https://npmjs.com/open-on-npm">open-on-npm</a>: Open npm packages on your browser
	<br>
</p>

<p align="center">
	<a href="https://travis-ci.org/abranhe/open-on-npm"><img src="https://img.shields.io/travis/abranhe/open-on-npm.svg?logo=travis" /></a>
	<a href="https://github.com/abranhe"><img src="https://abranhe.com/badge.svg"></a>
	<a href="https://cash.me/$abranhe"><img src="https://cdn.abranhe.com/badges/cash-me.svg"></a>
	<a href="https://patreon.com/abranhe"><img src="https://cdn.abranhe.com/badges/patreon.svg" /></a>
	<a href="https://github.com/abranhe/open-on-npm/blob/master/license"><img src="https://img.shields.io/github/license/abranhe/open-on-npm.svg" /></a>
  <a href="https://npmjs.com/package/open-on-npm"><img src="https://img.shields.io/npm/v/open-on-npm.svg"></a>
  <br>
  <br>
</p>

Sometimes you want to open an **npm packages** on the registry after published, or at any time. This pretty 🖖 simple CLI tool  will help you with that! Just being in the root directory of your project you can run `open-on-npm`, it will find the information from your `package.json` and then open it on your browser.

## See

- [Install](#install)
- [CLI](#cli)
- [Related](#related)
- [Team](#team)
- [License](#license)

## Install

```
$ npm install open-on-npm
```

## CLI

```
Open npm packages on the npmjs.com registry

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
```

## Related

- [openup][openup]: Open repositories from your terminal on your web browser.

## Team

|[![Carlos Abraham Logo][abranhe-img]][abranhe]|
| :-: |
| [Carlos Abraham][abranhe] |

## License

[MIT][license] License © [Carlos Abraham][abranhe]

<!-------------------- Links ------------------------>
[abranhe]: https://github.com/abranhe
[abranhe-img]: https://avatars3.githubusercontent.com/u/21347264?s=50
[license]: https://github.com/abranhe/open-on-npm/blob/master/license
[openup]: https://github.com/abranhe/openup
