# Icon Spec

There are several different types of icons.

## Social media icons
As used in the footer. An img-tag is used to facilitate easy expansion.

```code
<a href="#" class="icon-sm">
  <img src="img/icon-sm-twitter.png" alt="twitter">
</a>
```
### Example
```example
<div class="icons-sm-spec theme-light-blue"></div>
<script>
	var target = ".icons-sm-spec";
	var block = "variants/socialmedia.html";
	$(target).load(block);
</script>
```

## V-shape
The V-shape is implemented both as a SASS function and placeholder.


The function <b>svg-vshape()</b> will return an UTF-8 encoded url. It will add the svg shape as an inline background image without sizing or placement. This can be placed in a background definition:

```code
.classname {
	background: #ccc svg-vshape() 0 0 no-repeat;
}
```

The placeholder <b>@extend %icon-vshape</b> will insert a complete background-image property. This might conflict with a background definition which resets all background properties but is more efficient with repeated use. It uses the SASS function.

```code
.classname {
	background: transparent center no-repeat;
	@extend %icon-vshape;
}
```
<sub>The background definition in the above example might overrule the @extend due to source order issues! This can be avoided by not using the background shorthand.</sub>

### Example
```example
<div class="icons-vshape-spec"></div>
```

## Image icons
Images displayed as an icon inline with text.

```code
<a href="">
	<img src="[url]" alt="" class="icon-img">
	Interesting text with an icon in front
</a>
```

### Example
```example
<a href="">
	<img src="img/envelope-lightblue.png" alt="" class="icon-img">
	Interesting text with an icon in front
</a>
```


## Tile icons
TODO
