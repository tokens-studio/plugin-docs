# Changelog

## Version 53 (July 31st, 2021)
This version has been a major rewrite of the state and token management, it will enable us to work on new releases faster and more efficient.

### New features:
- Completely new token storage system under the hood. This was by far the biggest part of the work but at the same time is the one that isn't visible at all.
- Change the naming structure of your tokens to however you like! Token types are no longer reliant on their name (previously to create a spacing token you'd have to store them in the `spacing` object. Now, you can create a structure as you like, as long as you provide a `type` to each token. If you create tokens via the UI this means that you automatically add a type to each token. You can now create tokens such as `esds/baseTokens/spacing/blue` - which should give you more flexibility when it comes to exporting to code. Tokens that have a type that we don't recognize land in the "Other" category.
- Added new option in Settings to ignore the first part of a token name for styles. This was neccessary due to changed behavior (now the "type" property indicates what type a token is instead of the first part of the name). When activated (by default) the first part of a token name will get removed for Figma's styles (so `colors/primary/500` will become a color style named `primary/500)`. Please be aware that this somewhat breaks Import. This setting is mainly there for transition from Version 52 to 53.
- Added new Auto Layout padding tokens top, right, bottom, left.
- Added a new apply selector at the bottom giving you new choices of where token updates should be applied. This has a big performance benefit if you only want to update tokens on your selection, and not the whole page.
- Added a new "Update on Change" toggle to the ApplySelector. Currently everytime you edit a token the plugin traverses your layers to look for tokenized layers. This is bad for performance as it can take quite a long time. By toggling this behaviour off, you have to manually click "Update" to update your page / document / selection. This should make it easier for you to bulk edit tokens.
- Added a new "Update remote" toggle to the ApplySelector. When this is toggled off, JSONbin won't update. Use this as a "Pause" feature for your sync.
- Moved Import and Create Styles buttons to the bottom bar.
- Remade how Import Tokens work: If an existing token with the same name (e.g. a colors/blue/500) is already present it will compare it's value and description to the one in Figma's Styles. If there's a difference, the plugin shows you a Diff
- Added more information to the hover states of tokens and reworked Tooltips. They should now give you more information.
- Added a new Documentation token: "Value". This will output the resolved value (after all aliases have been resolved). So a token that's a reference to another token will now output the value of that other token.
- Updated to JSONBin.io API V3

### Removed features:
- Removed ability to color-code buttons in the UI as it only provided clutter to the UI.
- Removed ability to create token groups manually. You can still create nested tokens, you just have to manually rename them with a "." or a "/" similar to how Figma does it.
