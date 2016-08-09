# Media item Spec

The media item is a general block for showing teaser-like content and is used for various purposes like news, products etc.


## Basic usage

### Default
Not used directly, this is the base template used for all media item variants

```example
<div class="media-item-spec"></div>
<script>
	var target = ".media-item-spec";
	var block = "variants/default.html";
	$(target).parent().load(block);
	$(target).remove();
</script>
```

### Main
Used for news and stories on the homepage. When several are stacked on top of each other, the order of the image and text will automatically alternate.
```example
<div class="media-item-spec-main"></div>
<script>
	var target = ".media-item-spec-main";
	var block = "variants/main.html";
	$(target).parent().load(block);
	$(target).remove();
</script>
```

### Product
Used for product lists.
```example
<div class="media-item-spec-product"></div>
<script>
	var target = ".media-item-spec-product";
	var block = "variants/product.html";
	$(target).parent().load(block);
	$(target).remove();
</script>
```

### Product - text teaser
Used in product lists when shown as a [carousel](../../03-Modules/product-list/#home) in the homepage. This teaser is the closing slide.
```example
<div class="media-item-spec-product-last"></div>
<script>
	var target = ".media-item-spec-product-last";
	var block = "variants/product-last.html";
	$(target).parent().load(block);
	$(target).remove();
</script>
```

### Article
Used for news and stories. Has a horizontal appearance on mobile.
```example
<div class="media-item-spec-article"></div>
<script>
	var target = ".media-item-spec-article";
	var block = "variants/article.html";
	$(target).parent().load(block);
	$(target).remove();
</script>
```

### Related
Used for related pages lists. Always displays horizontally with a category label above the title.
```example
<div class="media-item-spec-related"></div>
<script>
	var target = ".media-item-spec-related";
	var block = "variants/related.html";
	$(target).parent().load(block);
	$(target).remove();
</script>
```

### Teaser with image
Will be shown in a vertical orientation on desktop when placed in a 2- or 3-column layout.
When shown horizontally page wide, this component can be manually adjusted to show the image on the right hand side by adding the modifier class <code>.media-item--reverse</code>. Contrary to the "main" variant, these will not alternate automatically when several are placed above eachother.

```example
<div class="media-item-spec-teaser"></div>
<script>
	var target = ".media-item-spec-teaser";
	var block = "variants/teaser.html";
	$(target).parent().load(block);
	$(target).remove();
</script>
```


### Carousel homepage
Will be shown in the carousel component on the homepage. Can be found as the [default variant of the carousel](../../03-Modules/carousel/#default).

```example
<div class="media-item-spec-carouselhome"></div>
<script>
	var target = ".media-item-spec-carouselhome";
	var block = "variants/carouselHome.html";
	$(target).parent().load(block);
	$(target).remove();
</script>
```



### Carousel page
Will be shown in the 'carousel component with page images and video'. Can be found as the [related assets variant of the carousel](../../03-Modules/carousel/#carousel-for-related-assets).

```example
<div class="media-item-spec-carouselpage"></div>
<script>
	var target = ".media-item-spec-carouselpage";
	var block = "variants/carouselPage.html";
	$(target).parent().load(block);
	$(target).remove();
</script>
```

### Carousel Testimonial
This will show the testimonial in a carousel. When only one item this will be static.

```example
<div class="media-item-spec-carouselTestimonial"></div>
<script>
	var target = ".media-item-spec-carouselTestimonial";
	var block = "variants/testimonial.html";
	$(target).parent().load(block);
	$(target).remove();
</script>
```
