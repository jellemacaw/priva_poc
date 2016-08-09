# SLickslider Carousel

This is a jQuery carousel build with slick (<http://kenwheeler.github.io/slick/>). See website for full documentation.

## Basic usage

### Carousel parameters.
Carousel parameters are set globaly in `carouselHandler()` function
```js

$(itemId).slick({
    infinite: true,
    autoplay:true,
    autoplaySpeed:6000,
    dots:true,
    dotsClass:'numSlides',
    fade:true,
    respondTo:'slider',
    speed:1000,
    lazyLoad:'ondemand',
    prevArrow:'<span class="nav prev"><i class="fa fa-long-arrow-left" aria-hidden="true"></i></span>',
    nextArrow:'<span class="nav next"><i class="fa fa-long-arrow-right" aria-hidden="true"></i></span>'
  });

```
See website for full documentation on config setting. Url to specified on top of this page.

### Place the following two wrapper classes around your content:

```html
<div id='slider' class='carousel'>
        <div class="slide">
					<div class="content transbg full centered">
						<h5>Slide title</h5>
						<div class="slide-txt">This is an awesome slideshow</div>
						<a href="#" class="btn txt-arrow right">
							Read more
						</a>
					</div>
					<img src="http://lorempixel.com/1200/650/people/" >
				</div>
        <div class="slide"><img src="http://lorempixel.com/1200/650/people/"></div>
        <div class="slide"><img src="http://lorempixel.com/1200/650/people/"></div>
        <div class="slide"><img src="http://lorempixel.com/1200/650/people/"></div>
        <div class="slide"><img src="http://lorempixel.com/1200/650/people/"></div>
</div>
```
<!-- ### Use classes on content div to apply "modifiers"

| Modifier  | Classname  |
|---|---|
| Position content in top left corner  | top-left  |
| Position content in top right corner  | top-right  |
| Position content in bottom right corner | bottom-right  |
| Position content in bottom left corner  | bottom-left  |
| Add transparent background to content div  | transbg  |
| full width transparent background bottom with centered text  | transbg full centered  | -->

### Default
```example
<div class="carousel-1"></div>
<script>
	var target = ".carousel-1";
	var block = "variants/default.html";
	$(target).load(block);
</script>
```

### Small

Add small class to main carousel div and the rest is magic.
```html
<div id='slider' class='carousel small'>
```

| Modifier  | Classname  |
|---|---|
| Small has no modifiers yet | ? |

```example
<div class="carousel-small"></div>
<script>
	var target = ".carousel-small";
	var block = "variants/small.html";
	$(target).load(block);
</script>
```


### Carousel for related assets

```example
<div class="carousel-related-assets"></div>
<script>
	var target = ".carousel-related-assets";
	var block = "variants/relatedAssets.html";
	$(target).load(block);
</script>
```


### Carousel for Testimonial teaser

```example
<div class="carousel-teaser-testimonial"></div>
<script>
	var target = ".carousel-teaser-testimonial";
	var block = "variants/teaserTestimonial.html";
	$(target).load(block);
</script>
```
