# Handoff

As Figma currently provides no way to inspect plugin data as a viewer (we hope they do allow that at some point), you'd have to fall back to either letting your engineers use the plugin themselves and inspect layers, or use more traditional methods. One of those methods would be Redlining, where you'd create layers showing which tokens were applied to what layers, still containing token names so it would be clear what to apply when.

## Component Spec Toolkit
A group of design system enthusiasts are currently working on a component spec library that you could use in your designs, even without using the Figma Tokens plugin. It would allow you to place annotations in your designs and effectively communicate your design decisions. We plan to collaborate closely with those folks to make sure handoff can be a smooth experience for you! If you want to find out more about this, here's their [demo video](https://www.loom.com/share/a18634d38396459bbdd7751bb909118a) from the Into Design Systems Hackathon of January 2022 including their [Early Access form](https://docs.google.com/forms/d/e/1FAIpQLSfxy42P7QKc0TkLcjXgfn7VudZzwU4OCgZL0Ln9bd3UcJQfzQ/viewform).

## Annotate in the plugin
Another way would be to use the Annotate feature inside Figma Tokens, which aims to do something similar, but in a more automated way. You would select a single layer, go to the Inspect tab, switch to Debug & Annotate, and use the annotate tool to create annotations for you. Those would not update automatically just yet, and only work for single layers.