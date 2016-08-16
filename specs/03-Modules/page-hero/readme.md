# Page hero Spec

A Page hero component is used to display the page title and (optionally) an abstract of the page and a full width page image.
This component can have a theme applied, default should be <code>theme-light-taupe</code>.


## Basic usage

### Default
Complete example with image, abstract and date + author. This image variant uses the modifier class <code>hero-title--img</code> next to <code>hero-title</code>.
```example
<div class="example--header-content theme-light-taupe"></div>
<script>
	var target = ".example--header-content";
	var block = "variants/default.html";
	$(target).parent().load(block);
	$(target).remove();
</script>
```

### Title only
```example
<div class="example--header-content2 theme-light-taupe"></div>
<script>
	var target = ".example--header-content2";
	var block = "variants/title-only.html";
	$(target).parent().load(block);
	$(target).remove();
</script>
```

### Title and abstract
```example
<div class="example--header-content3 theme-light-taupe"></div>
<script>
	var target = ".example--header-content3";
	var block = "variants/title-abstract.html";
	$(target).parent().load(block);
	$(target).remove();
</script>
```

### Title, abstract and date
```example
<div class="example--header-content4 theme-light-taupe"></div>
<script>
	var target = ".example--header-content4";
	var block = "variants/title-abstract-date.html";
	$(target).parent().load(block);
	$(target).remove();
	</script>
	```

### Optional alternative
Alternative for use with a light background image. Can be enabled by replacing the modifier class <code>hero-title--img</code> with <code>hero-title--alt-img</code>.
```example
<div class="example--header-content5 theme-light-taupe"></div>
<script>
	var target = ".example--header-content5";
	var block = "variants/alternative.html";
	$(target).parent().load(block);
	$(target).remove();
</script>
```
