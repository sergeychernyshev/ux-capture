## Gatsby UX Capture plugin

This plugin integrates [UX Capture](https://github.com/ux-capture/ux-capture) UX metrics instrumentation library into Gatsby.

Add it to your `gatsby-config.js` file

```
module.exports = {
	plugins: [`@ux-capture/gatsby-plugin-ux-capture`]
};
```

and use UX Capture React bindings ([`@ux-capture\react-ux-capture`](https://github.com/ux-capture/ux-capture/tree/master/packages/react-ux-capture)) to instrument individual views and elements on the page.

See a [Gatsby UX Capture implementation example](https://github.com/ux-capture/ux-capture/tree/master/packages/gatsby-ux-capture-example).
