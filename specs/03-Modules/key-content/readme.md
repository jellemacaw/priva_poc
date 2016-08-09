# Key Content Spec

This component will display the abstract and abstract image of a Page.


## Basic usage
The front-end styling of this component is the [decorated variant](../body-content#decorated) of the Body content component. The decorative image will only be visible on desktop screensizes.

### Example
```example
<div class="example--key-content theme-taupe"></div>
<script>
	var target = ".example--key-content";
	var block = "variants/default.html";

	$(target).load(block);
</script>
```
