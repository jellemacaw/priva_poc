# Teaser with image list Spec

This component will display a list of teasers-with-image in a 1, 2- or 3-column layout. If the list contains 1 item it will be displayed at 100% wide plus padding. If the list contains 2 or 4 items a 2-column layout will be used, otherwise this component will use a 3-column layout. The teasers have a vertical layout except in a 1-column.

## Default
The front-end styling of the list items uses the [teaser with image variant](../../02-Molecules/media-item#teaser-with-image) of the Media item component.

### Default example
```example
<div class="example--teaserlist"></div>
<script>
	var target = ".example--teaserlist";
	var block = "variants/default.html";
	$(target).parent().load(block);
	$(target).remove();
</script>
```
