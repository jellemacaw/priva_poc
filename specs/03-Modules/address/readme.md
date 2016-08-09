# Address Spec

This component will display the address of a local office.


## Basic usage


### Basic example
```example
<div class="example--address"></div>
<script>
	var target = ".example--address";
	var block = "variants/default.html";
	$(target).parent().load(block);
	$(target).remove();
</script>
```

## Office list item
Variant used in office search results, works as accordeon on mobile when put inside a parent container with `id="office-list"`. On bigger screensizes all information is always shown.
Used in the [office component](/specs/03-Modules/offices/) but container tag was changed to an `<li>` within that context.

### Office list item example
```example
<div class="example--office"></div>
<script>
	var target = ".example--office";
	var block = "variants/office.html";
	$(target).parent().load(block);
	$(target).remove();
</script>
```
