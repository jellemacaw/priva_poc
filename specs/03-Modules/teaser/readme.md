# Teaser Spec

TODO


## Basic usage

### Text teaser with abstract
```example
<div class="example-teaser-spec theme-light-taupe"></div>
<script>
	var target = ".example-teaser-spec";
	var block = "variants/default.html";
	$(target).load(block);
</script>
```

### Text teaser without abstract
```example
<div class="example-teaser-spec-compact"></div>
<script>
	var target = ".example-teaser-spec-compact";
	var block = "variants/no-abstract.html";
	$(target).load(block);
</script>
```

### Image teaser
Will be shown in a vertical orientation on desktop when placed in a 2- or 3-column layout.
When shown horizontally page wide, this component can be manually adjusted to show the image on the right hand side by adding the modifier class <code>.media-item--reverse</code>. Contrary to the "main" variant, these will not alternate automatically when several are placed above eachother.<br>
The front-end styling of the list items uses the [teaser variant](../../02-Molecules/media-item#teaser) of the Media item component.

```example
<div class="example-teaser-spec-image theme-taupe"></div>
<script>
	var target = ".example-teaser-spec-image";
	var block = "../../02-Molecules/media-item/variants/teaser.html";
	$(target).load(block);
</script>
```

### Tile teaser
```example
<div class="example-teaser-spec-tile theme-light-taupe"></div>
<script>
	var target = ".example-teaser-spec-tile";
	var block = "variants/tile.html";
	$(target).load(block);
</script>
```

### Button teaser
By default the button "primary" <code>.btn-primary</code> is used but the user can also select "call to action" <code>.btn-cta</code>, "call to action alternative" <code>.btn-cta-alt</code>, "primary 2" <code>.btn-primary2</code>, "primary 3" <code>.btn-primary3</code> and "primary 4 (white)" <code>.btn-primary4</code>.<br>
Note: button appearance is dependent on the applied theme.
```example
<div class="example-teaser-spec-button"></div>
<script>
	var target = ".example-teaser-spec-button";
	var block = "variants/button.html";
	$(target).load(block);
</script>
<style>
.example-teaser-spec-button { background: linear-gradient(#fff 40%,rgba(0,0,0,.15))}
.example-teaser-spec-button .btn { margin-bottom: 2em;}
</style>
```

### Icon list variant
Variant for use in footer with social media icons.
```example
<div class="example-teaser-spec-sm theme-light-blue"></div>
<script>
	var target = ".example-teaser-spec-sm";
	var block = "variants/iconlist.html";
	$(target).load(block);
</script>
```
