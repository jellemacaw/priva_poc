# Job list Spec

Displays for every selected item the ListTitle + JobType + Location and Country of a Job Page. The ability is offered to specify whether a filter is displayed or not.


## Basic usage


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
