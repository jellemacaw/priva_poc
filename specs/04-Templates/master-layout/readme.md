﻿# Master template Spec

The master template is based on bootstrap classes but uses flexbox for creating layouts

## Sections
A page consists of sections. Sections are FULL WIDTH by default. Pass the class "boxed" to box a section

```example
<div class="container-fluid example">
	<section class="boxed">
		<div class="row">
			<div class="col-md-12">Boxed row</div>
		</div>
	</section>
	<section>
		<div class="row">
			<div class="col-md-12">Full width row</div>
		</div>
	</section>
</div>
```

## fluid container grid layout (Demo)

```example
<div class="container-fluid example">
	<section>
		<div class="row">
			<div class="col-md-6">.col-md-6</div>
			<div class="col-md-6">.col-md-6</div>
		</div>
	</section>
	<section>
		<div class="row">
			<div class="col-md-8">
				<div class="row">
					<div class="col-md-4">.col-md-4</div>
					<div class="col-md-4">.col-md-4</div>
					<div class="col-md-4">.col-md-4</div>
				</div>
			</div>
			<div class="col-md-4">.col-md-4</div>
		</div>
	</section>
	<section>
	  <div class="row">
			<div class="col-md-4">.col-md-4</div>
			<div class="col-md-8">.col-md-8</div>
	  </div>
	</section>
	<section>
	  <div class="row">
			<div class="col-md-4">.col-md-4</div>
			<div class="col-md-4">.col-md-4</div>
			<div class="col-md-4">.col-md-4</div>
	  </div>
	</section>
	<section class="boxed">
		<div class="row">
			<div class="col-md-6">
			  <div class="row">
					<div class="col-md-6">.col-md-6</div>
					<div class="col-md-6">.col-md-6</div>
				</div>
			</div>
			<div class="col-md-6">
			  <div class="row">
					<div class="col-md-4">.col-md-4</div>
					<div class="col-md-4">.col-md-4</div>
					<div class="col-md-4">.col-md-4</div>
				</div>
			</div>
		</div>
	</section>
	<section>
	  <div class="row">
			<div class="col-md-8">.col-md-8</div>
			<div class="col-md-4">.col-md-4</div>
	  </div>
	</section>
	<section class="boxed">
	  <div class="row">
			<div class="col-md-12">.col-md-12</div>
	  </div>
	</section>
</div>
```

## Template variant 3-9
On responsive view the columns become full width with the left column on top

```example
<div class="container-fluid example">
	<section>
		<div class="row">
			<div class="col-md-3">Left top column</div>
			<div class="col-md-9">Right bottom column</div>
		</div>
	</section>
</div>
```

## Template variant 3-9 Inverted
On responsive view the columns become full width with the right column on top

```example
<div class="container-fluid example">
	<section>
		<div class="row row--md-reverse">
			<div class="col-md-9">Right top column</div>
			<div class="col-md-3">Left bottom column</div>
		</div>
	</section>
</div>
```

## Template variant 4-8
On responsive view the columns become full width with the left column on top

```example
<div class="container-fluid example">
	<section>
		<div class="row">
			<div class="col-md-4">Left top column</div>
			<div class="col-md-8">Right bottom column</div>
		</div>
	</section>
</div>
```

## Template variant 4-8 Inverted
On responsive view the columns become full width with the right column on top

```example
<div class="container-fluid example">
	<section>
		<div class="row row--md-reverse">
			<div class="col-md-8">Right top column</div>
			<div class="col-md-4">Left bottom column</div>
		</div>
	</section>
</div>
```

## Template variant 6-6
On responsive view the columns become full width with the left column on top

```example
<div class="container-fluid example">
	<section>
		<div class="row">
			<div class="col-md-6">Left top column</div>
			<div class="col-md-6">Right bottom column</div>
		</div>
	</section>
</div>
```

## Template variant 6-6 Inverted
On responsive view the columns become full width with the right column on top

```example
<div class="container-fluid example">
	<section>
		<div class="row row--md-reverse">
			<div class="col-md-6">Right top column</div>
			<div class="col-md-6">Left bottom column</div>
		</div>
	</section>
</div>
```

## Template variant 8-4
On responsive view the columns become full width with the left column on top

```example
<div class="container-fluid example">
	<section>
		<div class="row">
			<div class="col-md-8">Left top column</div>
			<div class="col-md-4">Right bottom column</div>
		</div>
	</section>
</div>
```

## Template variant 8-4 Inverted
On responsive view the columns become full width with the right column on top

```example
<div class="container-fluid example">
	<section>
		<div class="row row--md-reverse">
			<div class="col-md-4">Right top column</div>
			<div class="col-md-8">Left bottom column</div>
		</div>
	</section>
</div>
```

## Template variant 9-3
On responsive view the columns become full width with the left column on top

```example
<div class="container-fluid example">
	<section>
		<div class="row">
			<div class="col-md-9">Left column</div>
			<div class="col-md-3">Right column</div>
		</div>
	</section>
</div>
```

## Template variant 9-3 Inverted
On responsive view the columns become full width with the right column on top

```example
<div class="container-fluid example">
	<section>
		<div class="row row--md-reverse">
			<div class="col-md-3">Right top column</div>
			<div class="col-md-9">Left bottom column</div>
		</div>
	</section>
</div>
```

## Template variant 3-3-6
On responsive view the columns become full width in the ltr order

```example
<div class="container-fluid example">
	<section>
		<div class="row">
			<div class="col-md-3">First top column</div>
			<div class="col-md-3">Second column</div>
			<div class="col-md-6">Third bottom column</div>
		</div>
	</section>
</div>
```

## Template variant 3-3-6 Inverted
On responsive view the columns become full width in the rtl order

```example
<div class="container-fluid example">
	<section>
		<div class="row row--md-reverse">
			<div class="col-md-6">Third top column</div>
			<div class="col-md-3">Second column</div>
			<div class="col-md-3">First bottom column</div>
		</div>
	</section>
</div>
```

## Template variant 4-4-4
On responsive view the columns become full width in the ltr order

```example
<div class="container-fluid example">
	<section>
		<div class="row">
			<div class="col-md-4">First top column</div>
			<div class="col-md-4">Second column</div>
			<div class="col-md-4">Third bottom column</div>
		</div>
	</section>
</div>
```

## Template variant 4-4-4 Inverted
On responsive view the columns become full width in the rtl order

```example
<div class="container-fluid example">
	<section>
		<div class="row row--md-reverse">
			<div class="col-md-4">Third top column</div>
			<div class="col-md-4">Second column</div>
			<div class="col-md-4">First bottom column</div>
		</div>
	</section>
</div>
```

## Template variant 6-3-3
On responsive view the columns become full width in the ltr order

```example
<div class="container-fluid example">
	<section>
		<div class="row">
			<div class="col-md-6">First column</div>
			<div class="col-md-3">Second column</div>
			<div class="col-md-3">Third column</div>
		</div>
	</section>
</div>
```

## Template variant 6-3-3 Inverted
On responsive view the columns become full width in the rtl order

```example
<div class="container-fluid example">
	<section>
		<div class="row row--md-reverse">
			<div class="col-md-3">Third top column</div>
			<div class="col-md-3">Second column</div>
			<div class="col-md-6">First bottom column</div>
		</div>
	</section>
</div>
```

## Template variant 2-2-4-4
On responsive view the columns become full width in the ltr order

```example
<div class="container-fluid example">
	<section>
		<div class="row">
			<div class="col-md-2">First top column</div>
			<div class="col-md-2">Second column</div>
			<div class="col-md-4">Third column</div>
			<div class="col-md-4">Fourth bottom column</div>
		</div>
	</section>
</div>
```

## Template variant 2-2-4-4 Inverted
On responsive view the columns become full width in the rtl order

```example
<div class="container-fluid example">
	<section>
		<div class="row row--md-reverse">
			<div class="col-md-4">Fourth top column</div>
			<div class="col-md-4">Third column</div>
			<div class="col-md-2">Second column</div>
			<div class="col-md-2">First bottom column</div>
		</div>
	</section>
</div>
```

## Template variant 3-3-3-3
On responsive view the columns become full width in the ltr order

```example
<div class="container-fluid example">
	<section>
		<div class="row">
			<div class="col-md-3">First column</div>
			<div class="col-md-3">Second column</div>
			<div class="col-md-3">Third column</div>
			<div class="col-md-3">Fourth column</div>
		</div>
	</section>
</div>
```

## Template variant 3-3-3-3 Inverted
On responsive view the columns become full width in the rtl order

```example
<div class="container-fluid example">
	<section>
		<div class="row row--md-reverse">
			<div class="col-md-3">Fourth top column</div>
			<div class="col-md-3">Third column</div>
			<div class="col-md-3">Second column</div>
			<div class="col-md-3">First bottom column</div>
		</div>
	</section>
</div>
```

## Template variant 2-2-2-2-2-2
On responsive view the columns become full width in the ltr order

```example
<div class="container-fluid example">
	<section>
		<div class="row">
			<div class="col-md-2">First column</div>
			<div class="col-md-2">Second column</div>
			<div class="col-md-2">Third column</div>
			<div class="col-md-2">Fourth column</div>
			<div class="col-md-2">Fifth column</div>
			<div class="col-md-2">Sixth column</div>
		</div>
	</section>
</div>
```

## Template variant 2-2-2-2-2-2 Inverted
On responsive view the columns become full width in the rtl order

```example
<div class="container-fluid example">
	<section>
		<div class="row row--md-reverse">
			<div class="col-md-2">Sixth top column</div>
			<div class="col-md-2">Fifth column</div>
			<div class="col-md-2">Fourth column</div>
			<div class="col-md-2">Third column</div>
			<div class="col-md-2">Second column</div>
			<div class="col-md-2">First bottom column</div>
		</div>
	</section>
</div>
```
