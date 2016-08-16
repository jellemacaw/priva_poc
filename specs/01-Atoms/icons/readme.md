# Icon Spec

There are several different types of icons.

## Small icons
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
	var block = "variants/small.html";
	$(target).load(block);
</script>
```

## Extra small icons
Like small icons but even smaller and with a colored circle background, and some text at the end (it will affects line-height, though). The image needs to be 60x60px with enough transparent whitespace. The actual display of the circle is 30x30px.

```code
<a href="#" class="icon-xs">
	<img src="[url]" alt="">
	Interesting text with an icon in front
</a>
```

### Example
```example
<ul class="list-spacious">
  <li>
    <a href="#" class="icon-xs">
    	<img src="img/envelope-xs.png" alt="">
    	Interesting text with an icon in front
    </a>
  </li>
  <li>
    <a href="#" class="icon-xs">
    	<img src="img/phone-xs.png" alt="">
    	Interesting text with an icon in front
    </a>
  </li>
  <li>
    <a href="#" class="icon-xs">
    	<img src="img/down-xs.png" alt="">
    	Interesting text with an icon in front
    </a>
  </li>
</ul>
```

It is also possible to use a Font Awesome icon in stead of an image:

```code
<a href="#" class="icon-xs">
	<i class="fa fa-arrow-circle-down"></i>
	Interesting text with a Font Awesome icon in front
</a>
```

### Example
```example
<ul class="list-spacious">
  <li>
    <a href="#" class="icon-xs">
    	<i class="fa fa-arrow-circle-down"></i>
    	Interesting text with a Font Awesome icon in front
    </a>
  </li>
</ul>
```

## V-shape
The V-shape is implemented both as a SASS function and placeholder.


The function <b>svg-vshape()</b> will return an UTF-8 encoded url. It will add the svg shape as an inline background image without sizing or placement. This can be placed in a background definition:

```code
.classname {
	background: #ccc svg-vshape() 0 0 no-repeat;
}
```

The placeholder <b>%icon-vshape</b> will insert a complete background-image property. This might conflict with a background definition which resets all background properties but using '@extend' is more efficient with repeated use. It uses the above defined SASS function.

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

## Inline image icons
Images displayed as an icon, inline with text.  Vertical this icon only takes up 1em as not to disrupt line-height.

```code
<p>
	<img src="[url]" alt="" class="icon-img">
	Interesting text with an icon in front
</p>
```

### Example
```example
<a href="">
	<img src="img/envelope-lightblue.png" alt="" class="icon-img">
	Interesting text with an icon in front
</a>
```

## Arrow head
"V"-shaped arrow for links and panels. Uses a mixin to insert a pseudo-element with a transformed ">" character.
See [Functions and Mixins](/specs/00-Utilities/mixins) for more details.

### Example
```example
<div class="theme-taupe">
  <a href="" class="btn btn-link">
  	The .btn-link uses this mixin
  </a>
</div>
```


## Tile icons
Big and round, with an image tag for easy extensibility.

```code
<a href="#" class="icon-tile">
  <img src="img/tile-contact.png" alt="Contact">
  Contact
</a>
```


### Example
```example
<div class="theme-light-taupe content-block">
  <a href="#" class="icon-tile">
    <img src="img/tile-contact.png" alt="Contact">
    Contact
  </a>
  <a href="#" class="icon-tile">
    <img src="img/tile-support.png" alt="Service & support">
    Service & support
  </a>
  <a href="#" class="icon-tile">
    <img src="img/tile-mypriva.png" alt="My Priva">
    My Priva
  </a>
</div>
```
