# Navigation spec

Different types of navigation blocks.

! Header background is set in Header template spec. 
! Use clarify to view variants.

## Navigation top with 3column submenu

```example
<div class="result-1"></div>
<script>
	var target = ".result-1";
	var block = "variants/default.html";

	$(target).load(block);
</script>
```

## Quicklinks navigation

```example
<div class="quicklinks"></div>
<script>
	var target = ".quicklinks";
	var block = "variants/quicklinks.html";

	$(target).load(block);
</script>
```

## Select overlay

```example
<div class="result-2"></div>
<script>
	var target = ".result-2";
	var block = "variants/select-overlay.html";

	$(target).load(block);
</script>
```
