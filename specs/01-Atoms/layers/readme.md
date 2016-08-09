# Layers (lightbox) Spec

Basic html/css layers that form a static overlay. controlled by onClick function

## Basic usage
Add an any element with a click function. for example
`<button data-layer-id="666" onClick="layerHandler(event)">Click to open</button>`.

And add the layer that needs to be shown with a div with the classes `layer` and  an `id` that corrensponds with the id that you put in the data-layer-id attribute. Inside that div must be a div with class `layer__inner`. Contents for the lightbox need to be place inside thsi div, like a form or other module.
As the very last item insite this div should be the close button: `<button class="close-layer" data-layer-id="666" onClick="layerHandler(event)"></button>`

Looking at the code you will see `id` and `data-layer-id` are using the same id. These have to be the same for the lightbox to work.

The layer will be moved to the bottom of the page so nesting will not cause any trouble ("Menu" is an exception)


### Example

```example
<div class="layers-example-1"></div>
<script>
	var target = ".layers-example-1";
	var block = "variants/default.html";
	$(target).parent().load(block);
	$(target).remove();
</script>
```

### Menu
Variant used for country selection on desktop and mobile navigation.
This variant has the additional modifier class `.layer--inline` which will prevent it from being moved to the bottom of the html source.

```example
<div class="layers-example-menu"></div>
<script>
	var target = ".layers-example-menu";
	var block = "variants/menu.html";
	$(target).load(block);
</script>
```

### Video

```example
<div class="layers-example-video"></div>
<script>
	var target = ".layers-example-video";
	var block = "variants/video.html";
	$(target).load(block);
</script>
```
