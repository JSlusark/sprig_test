# Things encountered


## Useful resources
[Engine docs](https://github.com/hackclub/sprig/blob/main/docs/docs.md)



##Unexpected findings (unsure if bugs)
### Indetation issues
Rendering of the map was not working as expected when indentin with tabs.
Tabs are not treated as whitespace characters and treated differently, affecting the layout of game elements and unintentionally altering the intended structure of the map. Because of this, when indentation is used to format the map, the rendering fails.

This works:
``
const levels = [
	map
	`..r
   .p.
   ...`]
``

This won't:
``
const levels = [
	map
	`..r
	.p.
	...`]
``