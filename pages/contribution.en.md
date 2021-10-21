# Contribution

If you want to get started contributing to Figma Tokens read this short guideline that should server as a first Readme.

1. Clone the repository
2. Run `yarn` to install dependencies
3. Run `yarn build:watch` to build the plugin and watch for changes
4. Open Figma -> Plugins -> Development -> Import plugin from manifest... and choose manifest.json file from this repo.


### Known issues
 
#### Cannot read property document of undefined

This error can be solved by clearing Figma's cache. To do that follow the steps outlined in [this document](https://help.figma.com/hc/en-us/articles/360040328553-Can-I-work-offline-with-Figma-#clear-data).
 
```
Mac
Use the Terminal app to clear the cache.

Quit the Figma desktop app.
Open the Terminal.app and enter the following command:  rm -rf "$HOME/Library/Application Support/Figma/"{Desktop,DesktopProfile}
Try opening the Figma desktop app again.
```
