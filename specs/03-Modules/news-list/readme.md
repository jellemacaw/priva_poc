# News/stories list Spec

This component will display a list of news items.

## Default
For placement of news and stories.
The front-end styling of the list items uses the [article variant](../../02-Molecules/media-item#main) of the Media item component.

### Default example
```example
<div class="example--newslist"></div>
<script>
	var target = ".example--newslist";
	var block = "variants/default.html";
	$(target).parent().load(block);
	$(target).remove();
</script>
```

### Paging example
```example
<div class="example--newslistpaging"></div>
<script>
	var target = ".example--newslistpaging";
	var block = "variants/paging.html";
	$(target).parent().load(block);
	$(target).remove();
</script>
```

## Home
For placement of news and stories on the homepage.
The front-end styling of the list items uses the [main variant](../../02-Molecules/media-item#main) of the Media item component.

### Home example
```example
<div class="example--newshomelist"></div>
<script>
	var target = ".example--newshomelist";
	var block = "variants/home.html";
	$(target).parent().load(block);
	$(target).remove();
</script>
```

### Home with paging example
```example
<div class="example--newshomelistpaging"></div>
<script>
	var target = ".example--newshomelistpaging";
	var block = "variants/homepaging.html";
	$(target).parent().load(block);
	$(target).remove();
</script>
```
