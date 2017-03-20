# Vainglory Community Mapper

Find Vainglory players around you ! [See it in action here](https://vainglory.crtx.gg).

## Usage

First, clone the projet (or fork it first, then clone it).

You will need your own FireBase & Vainglory API key to run your own instance.
Create `src/config.js` :

```javascript
const config = {
  FB_API_KEY: "<your FireBase API key>",
  GM_API_KEY: "<your Google API key>",
  VG_API_KEY: "<your Vainglory API key>"
}

export default config;
```

You're good to go! open a terminal and type :

```bash
npm install   # Fetch JS dependencies.
npm start     # Start a development server.
```

For production use, you should build an optimized version with `npm run build`. You can now upload the `build` folder on your own server.

*Note : If you use your own fork, feel free to change the footer links (Github/Twitter) in `src/components/Deck.js`.*

## CHANGELOG

See [CHANGELOG](./CHANGELOG.md).

## Credits & Feedback

Made with <3 by [Djiit](https://twitter.com/Djiit).

Found a bug ? [Please file up an issue](https://github.com/Djiit/vgmapper/issues).

Have an idea ? [Tell me on Twitter](https://twitter.com/Djiit)!
