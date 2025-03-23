### Useful resources / documentation
[Engine docs](https://github.com/hackclub/sprig/blob/main/docs/docs.md)
[Getting started](https://sprig.hackclub.com/gallery/getting_started)


## Issues encountered

### Api loading
At one point, I encountered an issue where loading the engine using the API became noticeably slow. This was likely due to overfetching and/or limited API calls available to load the engine from an external source.
The slowdown could also have been caused by network latency or the engine's dependency on external resources during initialization.

Solved by importing the engine directly from the node_modules folder:

```
import { webEngine } from '../node_modules/sprig/dist/web/index.js';
```

### Indetation issues
Rendering of the map was not working as expected when indenting with tabs.
Tabs are not treated as whitespace characters and treated differently, affecting the layout of game elements and unintentionally altering the intended structure of the map. Because of this, when indentation is used to format the map, the rendering fails.

This works:
```
const levels = [
	map
	`..r
	.p.
	...`]
```

I tried to change the enine code to treat tabs as whitespace, but it didn't work. I think this is a limitation of the engine and not something that can be changed easily. Therefore I have decided to create my own function to treat this:


```
function ignoreTabs(arr){
	arr.forEach((val, i) => {
		arr[i] = val.replace(/\t/g, '')
	})
}

ignoreTabs(level)
```
