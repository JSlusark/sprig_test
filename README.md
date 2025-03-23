# Things encountered


## Useful resources
[Engine docs](https://github.com/hackclub/sprig/blob/main/docs/docs.md)


### Indetation issues
Rendering of the map was not working as expected when indentin with tabs.
Tabs are not treated as whitespace characters and treated differently, affecting the layout of game elements and unintentionally altering the intended structure of the map. Because of this, when indentation is used to format the map, the rendering fails.

This works:
```
const levels = [
	map
	`..r
   .p.
   ...`]
```

This won't:
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
