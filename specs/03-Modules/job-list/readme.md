# Job list Spec

Displays for every selected item the ListTitle + JobType + Location and Country of a Job Page. The ability is offered to specify whether a filter is displayed or not.


## Basic usage

Provide the class `no-filters` to the div `filter-results` to change the padding-left. This will make sure the alignment is correct for pages with no filters in the left column.  
  
Example: `<div class="filter-results no-filters">`

### Example
```example
<div class="example--job-list"></div>
<script>
	var target = ".example--job-list";
	var block = "variants/default.html";
	$(target).parent().load(block);
	$(target).remove();
</script>
```
