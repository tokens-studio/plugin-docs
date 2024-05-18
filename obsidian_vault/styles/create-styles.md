# Creating styles

You can tell the plugin to create any styles for tokens that have not been created yet. The plugin will respect your naming of your tokens, and convert any group to a `/` separated style.

We also respect some choices you might make on how your styles should be named, in Settings you'll find 2 options:

- Ignore first part of token name for styles: This will strip away the very first part of the token name, so `colors.red.500` becomes `red.500`
- Prefix styles with Theme name: When using Themes this will prepend the name of the Theme to the created style. So a token `background.default` in the Theme `light` becomes `light.background.default`

import Callout from 'nextra-theme-docs/callout'

<Callout>
  Styles are only created if a token set is `active`. If a token set is `inactive` or `Treated as source`, the styles for these sets won't be created.
</Callout>
