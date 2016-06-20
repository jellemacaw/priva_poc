# Job Spec

This component will display a block with the meta data of the job. This includes: PageTitle + JobType + JobLevel + ContractType + Location. This component shou


## Basic usage
The front-end styling of this component is the [decorated variant](../body-content#decorated) of the Body content component. The decorative image will only be visible on desktop screensizes.

### Example
```example
<div class="example--job"></div>
<script>
	var target = ".example--job";
	var block = "variants/default.html";

	$(target).load(block);
</script>
```
