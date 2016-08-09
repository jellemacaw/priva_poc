# Offices Spec

Offices with Google Maps. Uses the [Google maps molecule](/specs/02-Molecules/google-map/) and in the list the [office variant of address](/specs/03-Modules/address/#office-list-item) for each office.
Each list item contains an id which can be used to link to from a Google Maps InfoWindow.

TODO: on mobile, Google maps shouldn't be loaded (is now hidden using "display: none")

## Example
```example
<div class="example--offices-spec"></div>
<script>
	var target = ".example--offices-spec";
	var block = "variants/default.html";
	$(target).load(block);
</script>
```
