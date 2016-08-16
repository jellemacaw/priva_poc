# Anchor list Spec

This component will display a list of internal links to Body content components and list components.

## Default

### Default example
```example
<div class="example--anchorlist"></div>
<script>
	var target = ".example--anchorlist";
	var block = "variants/default.html";
	$(target).parent().load(block);
	$(target).remove();
</script>
```
## Buttons

### Buttons example
```example
<div class="example--anchorbuttonlist"></div>
<script>
	var target = ".example--anchorbuttonlist";
	var block = "variants/buttons.html";
	$(target).parent().load(block);
	$(target).remove();
</script>
```
