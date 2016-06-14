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
<div class="helper-spec__content-block theme-light-taupe"></div>
<script>
	var target = ".helper-spec__content-block.theme-light-taupe";
	var block = "variants/default.html";
	$(target).load(block);
</script>
```
