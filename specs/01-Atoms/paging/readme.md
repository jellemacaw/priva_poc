# Paging spec

Paging atom used under several list types.

## Paging example
Paging typically is used in a body-content box for centering and whitespace with no whitespace at the top. However, it can be used without it.

Typical html block surrounding the paging:
```code
<div class="body-content body-content--center hard--top">
	<div class="body-content__inner">
		[paging atom]
	</div>
</div>
```

### usage
For paging to work, all elements -including the paging rendering itself- should be enclosed by an object with the class <code>.paging-container</code> which also has a unique id.<br>
The paging module uses jQuery load() to get the url defined on the next- or previous-link. It will grab the desired section from the returned html using the id set on the .paging-container. The contents will then be inserted inside this container, replacing also the paging counter.<br>
The url should be a complete, working page so if for some reason scripting has stopped working this entire page will be loaded via a normal page reload.<br>
For first and last pages the class <code>.invisible</code> should be added to the resp. previous or next link. This will hide the link but the other paging bits will not shift in position because of it.

Typical component markup with paging:

```code

<p>Hmmm, this content will not be paginated.</p>

<div id="test-list" class="paging-container">

	<p>Fancy list with items</p>

	<div class="body-content body-content--center hard--top">
		<div class="body-content__inner">
			[paging atom]
		</div>
	</div>

</div>
```

### example

```example
<div id="test-list" class="paging-container">
	<p>sample content</p>
	<div id="sample-paging"></div>
</div>
<script>
	var target = "#sample-paging";
	var block = "variants/default.html";
	$(target).load(block);
</script>
```
