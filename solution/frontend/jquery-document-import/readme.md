# jQuery document import

jQuery provides an easy way to import files and reuse them. See button example below for demonstration.
This is the way to import front-end block variants.

See <http://api.jquery.com/load/> for complete documentation

## Import complete file WITHOUT feedback
Import accepts path relative to the root of the site.

```example
	<div class="result-1"></div>
	<script>
		var target = ".result-1";
		var block = "/specs/01-Atoms/button/variants/default.html";
		$(target).load(block);
  </script>
```

## Import complete file WITH feedback
The load function accepts a second parameter on complete. In the example below this is a function that writes something to the console.log

```example
	<div class="result-2"></div>
	<script>
		var target = ".result-2";
		var block = "/specs/01-Atoms/button/variants/default.html";

		$(target).load(block, function() {
	  	console.log( "Load was performed." );
		});
  </script>
```

## Import sub-set of file
You are able to load specific elements of within the imported file. In the example below we only import the textnode from the button. This is done by simply adding the jQuery element selector to the url you are importing.

```example
	<div class="result-3"></div>
	<script>
		var target = ".result-3";
		var block = "/specs/01-Atoms/button/variants/default.html .txt";
		$(target).load(block);
  </script>
```
