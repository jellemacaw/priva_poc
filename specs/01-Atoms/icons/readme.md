# Icon Spec

There are several different types of icons.

## Social media icons
As used in the footer

```code
<a href="#" class="fa fa-home fa-fw" aria-hidden="true"></a>
```
### Example
```example
<div class="icons-sm-spec theme-light-taupe"></div>
<script>
	var target = ".icons-sm-spec.theme-light-taupe";
	var block = "variants/socialmedia.html";
	$(target).load(block);
</script>
```

## Tile icons
TODO

## V-shape
The V-shape is implemented as a SASS placeholder, to be extended to other classes. It will add the svg shape as an inline background image without sizing or placement.

```code
%icon-vshape {
	background-image: url("...");
}
```
### Example
```example
<div class="icons-vshape-spec"></div>
```
