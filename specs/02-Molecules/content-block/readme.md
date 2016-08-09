# Content block Spec

Provides variable padding for content depending on it's available width. Content will never exeed 40em width.
Makes use of element-query.
The element query code doesn't seem to like SASS variables so we had to set the breakpoint at a fixed 480px.

## Basic usage
Place the following two wrapper classes around your content:

```code
<div class="content-block">
	<div class="content-block__inner">
		[content]
	</div>
</div>
```
### Example
```example
<div class="content-block-spec theme-light-taupe"></div>
<script>
	var target = ".content-block-spec.theme-light-taupe";
	var block = "variants/default.html";
	$(target).load(block);
</script>
```
### Variant with centered content
Also removes max-width limitation.
```code
<div class="content-block content-block--center">
	<div class="content-block__inner">
		[content]
	</div>
</div>
```
```example
<div class="example-content-block-centered-spec theme-light-taupe"></div>
<script>
	var target = ".example-content-block-centered-spec.theme-light-taupe";
	var block = "variants/centered.html";
	$(target).load(block);
</script>
```
### Variant with tighter vertical spacing
```code
<div class="content-block content-block--slim">
	<div class="content-block__inner">
		[content]
	</div>
</div>
```
```example
<div class="example-content-block-slim-spec theme-light-taupe"></div>
<script>
	var target = ".example-content-block-slim-spec";
	var block = "variants/slim.html";
	$(target).load(block);
</script>
```
### Variant with tighter vertical spacing on top
```code
<div class="content-block content-block--slimtop">
	<div class="content-block__inner">
		[content]
	</div>
</div>
```
```example
<div class="example-content-block-slimtop-spec theme-light-taupe"></div>
<script>
	var target = ".example-content-block-slimtop-spec";
	var block = "variants/slimtop.html";
	$(target).load(block);
</script>
```
