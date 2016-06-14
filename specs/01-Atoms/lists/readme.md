# List Spec

Some basic list types for constructing components. Intended to be used with HTML unordered lists and list-items but can be used with any container and children.

## Vertical
A clean, vertical list

```code
<ul class="list-vert">
	<li>
		[content]
	</li>
</ul>
```
### Example
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
### Example
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
### Example
```example
<div class="list-spec-hor-txt"></div>
<script>
	var target = ".list-spec-hor-txt";
	var block = "variants/horizontal-txtcenter.html";
	$(target).load(block);
</script>
```
