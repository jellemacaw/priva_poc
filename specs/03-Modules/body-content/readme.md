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
Blaat

### Example
```example
<div class="example--body-content"></div>
<script>
	var target = ".example--body-content";
	var block = "variants/default.html";

	$(target).load(block);
</script>
```
