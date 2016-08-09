# Related pages list Spec

This component will display a list of pages.

## Default
The front-end styling of the list items uses the [related variant](../../02-Molecules/media-item#related) of the Media item component.

### Default example
```example
<div class="example--relatedlist"></div>
<script>
	var target = ".example--relatedlist";
	var block = "variants/default.html";
	$(target).parent().load(block);
	$(target).remove();
</script>
```
