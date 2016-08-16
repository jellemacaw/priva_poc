# Search Spec
This spec contains the different variants of the search module and search results.

## Search results
A variant on [job-list](/specs/03-Modules/job-list) with some extras; the number of results and a search box showing the performed search.

### Search result component
```example
<div class="example--searchresult"></div>
<script>
	var target = ".example--searchresult";
	var block = "variants/results.html";
	$(target).parent().load(block);
	$(target).remove();
</script>
```

## Search for a product component
A module that is placed in a column to enable searching for a product. Clicking 'search' button takes you to a new page.

### Search for a product
```example
<div class="example--searchforaproduct"></div>
<script>
	var target = ".example--searchforaproduct";
	var block = "variants/product-search.html";
	$(target).parent().load(block);
	$(target).remove();
</script>
```
