# Product list Spec

This component will display a list of proucts.
Can also be used for a four-column presentation of blog posts.

## Default
The front-end styling of the list items uses the [product variant](../../02-Molecules/media-item#product) of the Media item component. Special feature is the mobile appearance (2 columns) on desktop when placed in a .col-md-3 or .col-md-4 wide pagelayout column.

### Default example
```example
<div class="example--productlist"></div>
<script>
	var target = ".example--productlist";
	var block = "variants/default.html";
	$(target).parent().load(block);
	$(target).remove();
</script>
```

### Default with paging example
```example
<div class="example--productlistpaging"></div>
<script>
	var target = ".example--productlistpaging";
	var block = "variants/paging.html";
	$(target).parent().load(block);
	$(target).remove();
</script>
```

## Home
For placement of products on the homepage. Uses a carousel.
The front-end styling of the list items uses the [product variant](../../02-Molecules/media-item#product) of the Media item component. The last slide is a teaser as defined here: [product list teaser](../../02-Molecules/media-item#product-text-teaser)

### Home example
```example
<div class="example--productcarousellist"></div>
<script>
	var target = ".example--productcarousellist";
	var block = "variants/home.html";
	$(target).parent().load(block);
	$(target).remove();
</script>
```
