# Full story Spec

The full story component can be configured to only show part of the body content on mobile views. By pressing the 'read full story' button all the content will be visible. It is not possible to close the panel afterwards.
This functionality will be enabled by adding the state class "is-collapsed" to the full-story container.


## Basic usage
The front-end of this component is the [full story variant](../body-content#full-story-component) of the Body content component.

### Example
```example
<div class="example--full-story-content theme-light-taupe"></div>
<script>
	var target = ".example--full-story-content";
	var block = "/specs/03-Modules/body-content/variants/fullstory.html";
	$(target).load(block);
</script>
```
