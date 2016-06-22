# Teaser Spec

TODO


## Basic usage

### Text teaser with abstract
```example
<div class="teaser-spec theme-light-taupe"></div>
<script>
	var target = ".teaser-spec";
	var block = "variants/default.html";
	$(target).load(block);
</script>
```

### Text teaser without abstract
```example
<div class="teaser-spec-compact"></div>
<script>
	var target = ".teaser-spec-compact";
	var block = "variants/no-abstract.html";
	$(target).load(block);
</script>
```

### Tile teaser
```example
<div class="teaser-spec-tile"></div>
<script>
	var target = ".teaser-spec-tile";
	var block = "variants/tile.html";
	$(target).load(block);
</script>
```

### Social media variant
Variant for use in footer
```example
<div class="teaser-spec-sm theme-light-blue"></div>
<script>
	var target = ".teaser-spec-sm";
	var block = "variants/socialmedia.html";
	$(target).load(block);
</script>
```
