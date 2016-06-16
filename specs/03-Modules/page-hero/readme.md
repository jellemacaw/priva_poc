# Page hero Spec

A Page hero component is used to display the page title and (optionally) an abstract of the page and a full width page image.
This component can have a theme applied, default should be <code>theme-light-taupe</code>.


## Basic usage

### Default
Compleet example with image, abstract and date. This image variant uses the modifier class <code>hero-title--img</code> next to <code>hero-title</code>.
```example
<div class="example--header-content theme-light-taupe"></div>
<script>
	$(".example--header-content").load("variants/default.html");
</script>
```

### Title only
```example
<div class="example--header-content2 theme-light-taupe"></div>
<script>
	$(".example--header-content2").load("variants/title-only.html");
</script>
```

### Title and abstract
```example
<div class="example--header-content3 theme-light-taupe"></div>
<script>
	$(".example--header-content3").load("variants/title-abstract.html");
</script>
```

### Title, abstract and date
```example
<div class="example--header-content4 theme-light-taupe"></div>
<script>
	$(".example--header-content4").load("variants/title-abstract-date.html");
	</script>
	```

### Optional alternative
Alternative for use with a light background image. Can be enabled by replacing the modifier class <code>hero-title--img</code> with <code>hero-title--alt-img</code>.
```example
<div class="example--header-content5 theme-light-taupe"></div>
<script>
	$(".example--header-content5").load("variants/alternative.html");
</script>
```
