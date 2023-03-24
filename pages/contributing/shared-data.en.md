# Shared data

We believe data stored by the plugin should be accessible by other plugin makers as well, to create a thriving ecosystem of tools all being able to communicate with one another. Imagine a world where we're able to store plugin data on a layer or document, and other plugins can pick that back up, and do the things their plugin does best. This is why we've opened up the plugin data that the plugin stores on your document or nodes so you can use it with other plugins as well.

### How does it work?
We're storing tokens stored on a document on the shared plugin data namespace `tokens`. Other plugins can read from that. Also, we're storing applied decisions on each node on the same shared namespace. All you'd need to do is find out what tokens are stored on a node. Figma provides a couple of helpful functions to do so.

#### Getting tokens stored on the document
`figma.root.getSharedPluginData("tokens", "values")` allows you to read all tokens stored on the document.

#### Getting applied tokens on a layer
`node.getSharedPluginData("tokens", key)` gives you the token that was applied on that `node` for that `key`. To find out what `keys` are available, you'd first run `node.getSharedPluginDataKeys("tokens")` on the `node` to find out what `keys` are set. With that result you're able to query the stored tokens.

#### Applying tokens on a layer
`node.setSharedPluginData("tokens", key, value)` allows you to store a token on a layer. You'd need to make sure that `key` is [any of the plugin data keys](https://github.com/tokens-studio/figma-plugin/blob/main/src/config/properties.js) that we're using.

### Figma Plugin Helpers
We've [built a tool](https://www.npmjs.com/package/@six7/figma-tokens-helpers) that allows you to read all of the above more easily in your own plugin. We're exposing functions that wrap our plugin data functions, so you can easily get tokens stored on the document, on the layer, and even get the resolved tokens taking the activated sets/themes into account!

### Examples
#### Automator
Automator is able to read and write to the shared plugin space. You could create all kinds of crazy automations - you could even create whole token sets using Automator. We've even [built an automation that automatically creates Documentation](https://automator.community/automation/create-documentation-for-figma-tokens) for you!

#### Pro Layout Panel
What would make a really great Auto Layout enhancement even greater? The ability to choose from design tokens as your spacing values. [Pro Layout Panel](https://www.mrbiscuit.design) allows you to do that, so you can use the tokens you created in Tokens Studio for Figma and apply those (using the last used set combination in Tokens Studio for Figma)
