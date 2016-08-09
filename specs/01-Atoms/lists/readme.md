# List Spec

Some basic list types for constructing components. Intended to be used with HTML unordered lists and list-items but can be used with any container and children.

## Clear
Works like a normal list but shows no bullets and has no padding.

```code
<ul class="list-clear">
	<li>
		[content]
	</li>
</ul>
```
### Clear Example
```example
<div class="list-spec-clear"></div>
<script>
	var target = ".list-spec-clear";
	var block = "variants/clear.html";
	$(target).load(block);
</script>
```

## Spacious
Like Clear but with some opinions about whitespace between and after the list. Used in Address and Contact components.

```code
<ul class="list-spacious">
	<li>
		[content]
	</li>
</ul>
```
### Spacious Example
```example
<div class="list-spec-spacious"></div>
<script>
	var target = ".list-spec-spacious";
	var block = "variants/spacious.html";
	$(target).load(block);
</script>
```

## Inline
Displays items horizontally as text elements. Small adaptation of Bootstrap default to compensate for project styling of a normal list and remove any spacing between list-items.

```code
<ul class="list-inline">
	<li>
		[content]
	</li>
</ul>
```
### Inline Example
```example
<div class="list-spec-inline"></div>
<script>
	var target = ".list-spec-inline";
	var block = "variants/inline.html";
	$(target).load(block);
</script>
```

## Vertical
A clean, vertical list

```code
<ul class="list-vert">
	<li>
		[content]
	</li>
</ul>
```
### Vertical Example
```example
<div class="list-spec"></div>
<script>
	var target = ".list-spec";
	var block = "variants/vertical.html";
	$(target).load(block);
</script>
```

## Horizontal
A clean, horizontal list which items will wrap but content will not. Uses element query to collapse to vertical when less than 480px wide. Default, items are displayed centered in horizontal mode.

```code
<ul class="list-hor">
	<li>
		[content]
	</li>
</ul>
```
### Horizontal Example
```example
<div class="list-spec-hor"></div>
<script>
	var target = ".list-spec-hor";
	var block = "variants/horizontal.html";
	$(target).load(block);
</script>
```

## Text center modifier
Adding the class .list--txtcenter to either list type will center text when displayed as a single column.

```code
<ul class="list-hor list--txtcenter">
	<li>
		[content]
	</li>
</ul>
```
### Text center Example
```example
<div class="list-spec-hor-txt"></div>
<script>
	var target = ".list-spec-hor-txt";
	var block = "variants/horizontal-txtcenter.html";
	$(target).load(block);
</script>
```
