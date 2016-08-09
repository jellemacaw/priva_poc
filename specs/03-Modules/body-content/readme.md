# Body Content Spec

A content component is used to display a piece of text. There is no limitation to the length of the text.

## Data

| Fieldname | Displayname | Type  | Description | Comments |
| ------------- |-------------| -----| -----|
| Title        | Title         | Single-line textfield | Title displayed as H2                     | = H2 |
| AnchorTitle  | Anchor Title  | Single-line textfield | Title displayed in the Anchor Navigation  | When this field is empty, the item is not displayed in the Anchor Navigation Component |
| Abstract     | Abstract      | Multi-line textfield  | Abstract displayed below the Title        | -    |
| BodyText     | Body Text     | Rich textfield        | Text displayed                            | -   |

## Basic usage

### Body Content example
```example
<div class="example--body-content"></div>
<script>
	var target = ".example--body-content";
	var block = "variants/default.html";
	$(target).parent().load(block);
	$(target).remove();
</script>
```

## Full story component
The full story component can be configured to only show part of the body content on mobile views. By pressing the 'read full story' button all the content will be visible. It is not possible to close the panel afterwards.
This functionality will be enabled by adding the state class "is-collapsed" to the full-story container.

### Full story example
```example
<div class="example--full-story"></div>
<script>
	var target = ".example--full-story";
	var block = "variants/fullstory.html";
	$(target).parent().load(block);
	$(target).remove();
</script>
```

## Decorated
This version has an decorative image in the bottom right corner that will only be shown at higher screen resolutions.
This front-end structure is only used for the [Key content](../key-content) and [Job](../job) components.
The decorative image has a width of 140px or 280px (High dpi) but a non-determinded height.

### Decorated example
```example
<div class="example--job-content theme-light-taupe"></div>
<script>
	var target = ".example--job-content";
	var block = "variants/decorated.html";
	$(target).load(block);
</script>
```
