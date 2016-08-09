# Responsive images spec

How to do responsive with different images.
This spec describes how photos can be encoded to show different sizes and aspect ratios on the client.

## Basics
For serving the correct image size dependent on browser width and screen DPI we use the HTML5 Picture specification. Whitin the <b>Picture</b> element we define a <b>source</b> per media query breakpoint (which can be optimized for the component and does not have to have any relation to breakpoints used in the site) and use <b>srcset</b> to define a set of images to be used at that media query. Typically we define 2 photo urls here; one standard and one for high DPI screens in a comma separated list. The high DPI version is indicated by the space-separated "2x" marker after the url. Make sure media queries do not overlap as this can lead to unexpected results<br>
In each url we define the desired image height and/or width as url parameters for the server-side Image Render Service to give us the correct size and aspect ratio of the photo.<br>
As per the spec we end with a single <b>img</b> tag. This should have a url for the image format to be displayed to user agents that don't support the Picture element (most common, oldIE's on desktops)<br>

Code-wise there are no restrictions to the number of <b>source</b> elements per picture, use common sense to deliver the best experience to users.<br>

This setup allows for future expansion like more editorial control to deliver different photos for different breakpoints.

Typical html for a responsive photo:
```code
<picture>
	<source
		media="(max-width: 768px)"
		srcset="photo-4-3.png?w=200&h=150, photo-4-3.png?w=400&h=300 2x">
	<source
		media="(min-width: 768px) and (max-width: 1250px)"
		srcset="photo-2-1.png?w=500&h=250, photo-2-1.png?w=1000&h=500 2x">
	<source
		media="(min-width: 1250px)"
		srcset="photo-2-1.png?w=750&h=375, photo-2-1.png?w=1500&h=750 2x">
	<img src="photo-2-1.png?w=750&h=375" alt="alt text here">
</picture>
```

### example

```example
<div class="result-1"></div>
<script>
	var target = ".result-1";
	var block = "variants/default.html";

	$(target).load(block);
</script>
```

For a simple image which only needs a high DPI version to be displayed but no further breakpoints definitions the <b>srcset</b> can be added directly to the <b>img</b> tag, next to the <b>src</b>. In this case there is no need to add <b>source</b> or <b>picture</b> elements.
```code
	<img src="photo-2-1.png?w=750&h=375" srcset="photo-2-1.png?w=750&h=375, photo-2-1.png?w=1500&h=750 2x" alt="alt text here">
```
