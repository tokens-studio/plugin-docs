# Typography tokens

Typography tokens supported for now are:
- Font families
- Font weights
- Font sizes
- Line heights
- Letter spacing
- Paragraph spacing
- Paragraph Indent
- Text decoration
- Text case

A typography token is a composite token consisting of a few parameters that make up a type definition. We also have individual token types for each of these options, as you can apply them individually as well. However, in order to create styles, you'd have to use a Typography token.

An example of a typography token looks like this:

```
{
  "Bold": {
    "value": {
      "fontFamily": "{fontFamilies.heading}",
      "fontWeight": "{fontWeights.heading.bold}",
      "lineHeight": "{lineHeights.tight}",
      "fontSize": "{fontSizes.lg}",
      "letterSpacing": "{letterSpacing.tighter}",
      "paragraphSpacing": "{paragraphSpacing.none}"
      "paragraphIndent": "{paragraphIndent.none}"
    },
    "type": "typography"
  }
}
```


import Callout from 'nextra-theme-docs/callout'

<Callout emoji="⚠️">
  While Font Family and Font Weight tokens can be applied individually to text nodes, both must be applied simultaneously to cause a visual change in Figma. 
</Callout> 

### Font family

You can define your font family as a single value or also as a comma-separated list. The plugin will try each of these, and if it finds one that works, takes this one

### Font weight

Font weights are defined using strings such as Regular or Bold and are applied in combination with a fontFamily token (or as part of a typography token) We also provide a way to support numerical weights such as 400, 600 - however due to the fact that Figma doesn't let us set a font weight by using these numbers we had to implement a mapping that gets this right for the majority of fonts, but it could be that this mapping doesn't work for your case. You can always use the exact string that's available inside Figma's font choice (e.g. font family `Inter` with a weight of `Bold`).

