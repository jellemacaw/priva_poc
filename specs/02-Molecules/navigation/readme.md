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

## Handheld hamburger menu

```example
<div class="hamburger-menu"></div>
<script>
	var target = ".hamburger-menu";
	var block = "variants/handheld.html";

	$(target).load(block);
</script>
```

## Quicklinks navigation

```example
<div class="quicklinks-spec"></div>
<script>
	var target = ".quicklinks-spec";
	var block = "variants/quicklinks.html";

	$(target).load(block);
</script>
```
### Header variant
```example
<div class="quicklinks-header-spec"></div>
<script>
	var target = ".quicklinks-header-spec";
	var block = "variants/quicklinks-header.html";

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


## Post footer navigation

```example
<div class="postfooter-spec theme-taupe"></div>
<script>
	var target = ".postfooter-spec";
	var block = "variants/postfooter.html";

	$(target).load(block);
</script>
```

## Post footer coda navigation

```example
<div class="postfooter-coda-spec theme-taupe"></div>
<script>
	var target = ".postfooter-coda-spec";
	var block = "variants/postfooter-coda.html";

	$(target).load(block);
</script>
```
