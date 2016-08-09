# Bootstrap Spec

Bootstrap is a UI kit to quickly create websites.

See [Bootstrap website](http://getbootstrap.com/) for full documentation.

## Basic usage
Include stylesheet in head of each page.
```
<link href="bootstrap.css" rel="stylesheet">
```
<sup>(For development purposes this styleguide has the library included in the main template.)</sup>

### Example
```example
<div class="row example">
  <div class="col-md-8">.col-md-8</div>
  <div class="col-md-4">.col-md-4</div>
</div>
<div class="row example">
  <div class="col-md-4">.col-md-4</div>
  <div class="col-md-4">.col-md-4</div>
  <div class="col-md-4">.col-md-4</div>
</div>
<div class="row example">
  <div class="col-md-6">.col-md-6</div>
  <div class="col-md-6">.col-md-6</div>
</div>
<style>
.example > * {outline: 1px solid gray}
</style>
```

## Customization of Bootstrap functionality

### Grid:
The Bootstrap grid has been rewritten to make use of flexbox for layout which has the following features/changes:
- the variable $grid-gutter-width is no longer used in the grid
- columns no longer use position: relative
- columns no longer use floats
- rows do not need a clearfix anymore
- columns by default will wrap to a next line if their total width is more than 100%
- columns will always fill up vertically per row even with variable length contents

#### Content order reversal
The order of columns can be reversed from mobile to desktop by using one of the following modifier classes on a row; <code>.row--sm-reverse</code> reverses order from the $screen-sm breakpoint up and <code>.row--md-reverse</code> reverses order from the $screen-md breakpoint up

#### Gutters
By default grids will no longer have a gutter. However there are mixins available to create gutters as modifier classes for rows.

<code>@mixin gutter($side-margin,$between-margin,$vertical-margin: none) </code>

 This gutter mixin allows for wrapping over multiple lines, great for result lists!
 By default the vertical margin will NOT be set (should normally be done by content)<br>
 NOTE: it is not possible to create a $side-margin smaller than half the $between-margin!
 So zero side-margins are not possible here which can have consequences when nesting grids

 |row|||||
 |--|----------- |--| -----------|--|
|$side-margin |  column  | $between-margin |  column  | $side-margin|
||$vertical-margin|| $vertical-margin||

<code>@mixin gutter-row($between-margin,$vertical-margin: none) </code>

 This gutter mixin can create zero width outer gutters but can only be used in a single-line layout! so no wrapping of excess cells/columns to another row!
 By default the vertical margin will NOT be set (should normally be done by content)<br>
 NOTE: this mixin has not been tested! Might be reliant on flex basis for proper working
for flex box to properly distribute width to columns
sample taken from http://codepen.io/chef/pen/GvImH

 |row|||
 |----------- |--| -----------|
|  column  | $between-margin |  column  |
|$vertical-margin|| $vertical-margin|

#### Letting a component fill up a column vertically
By adding the modifier class <code>.fill-column</code> to a direct child of a column this component will fill up all remaining vertical space. Handy when component lengths do not match up over columns and background colors are used on these items.
Note: contents will remain aligned vertically to the top. When using this modifier on multiple components inside the same column the filling out will be distributed evenly, however this can not be 100% guaranteed.

#### example
This example shows a 4-8 page layout with a gutter modification and a component that will fill out vertically. On mobile content order is reversed.

```code
<div class="row row--gutter-sm row--md-reverse">
  <div class="col-md-4">
    [component]
    [component]
    [component]
  </div>
  <div class="col-md-8">
    [component with class="fill-column"]
  </div>
</div>
```

### col-sm-12-6-4 custom column
The column classname <code>.col-sm-12-6-4</code> will be 100% wide on mobile but from the $screen-sm breakpoint up will be 100% wide if it's the only column, 50% wide if there are 2 or 4 columns and 1/3 the screenwidth in all other circumstances.

## Customization and replacement of standard Bootstrap variables

### Typography:
Priva uses a Light font variant as a basis:

|var name|unit|
|---|---|
|$font-weight-base|300|
|$font-family-sans-serif|'Open Sans','Gill Sans', 'Gill Sans MT', Calibri, sans-serif !default|
|$font-family-serif|'Roboto Slab', Rockwell, 'Courier Bold', Courier, Georgia, Times, 'Times New Roman', serif !default|
|$font-family-monospace|Menlo, Monaco, Consolas, "Courier New", monospace !default|
|$font-family-base|$font-family-sans-serif !default|

### Fontsize:

|var name|unit||
|---|---|---|
|$font-size-base|16px||
|$font-size-large|ceil(($font-size-base * 1.25))|~18px|
|$font-size-small|ceil(($font-size-base * 0.85714))|~14px|

### Headings:

|var name|unit|
|---|---|
|$headings-color|$brand-primary|
|$headings-font-weight|600|

|var name|unit||
|---|---|---|
|$font-size-h1|floor(($font-size-base * 3.3125))|~53px|
|$font-size-h2|floor(($font-size-base * 2.8125))|~45px|
|$font-size-h3|ceil(($font-size-base * 1.8125))|~29px|
|$font-size-h4|ceil(($font-size-base * 1.25))|~18px|
|$font-size-h5|$font-size-base|
|$font-size-h6|ceil(($font-size-base * 0.85))|~12px|

|var name|unit|
|---|---|
|$headings-h1-line-height|1.25|
|$headings-h2-line-height|1.13|
|$headings-h3-line-height|1.5|
|$headings-letter-spacing|1px|


### Buttons:

|var name|unit|
|---|---|
|$btn-text-transform|uppercase|
|$btn-font-weight|400|
|$btn-default-color|$brand-primary|
|$btn-default-border|$brand-primary|
|$btn-default-hover-color|#fff|
|$btn-default-hover-bg|$brand-primary|
|$btn-default-hover-border|$brand-primary|

### Maximum site width and media query breakpoints:

|var name|size|
|---|---|
|$max-site-width|1200px|

|media query|size|
|---|---|
|$screen-xs|480px|
|$screen-sm|768px|
|$screen-md|992px|
|$screen-lg|1200px|
