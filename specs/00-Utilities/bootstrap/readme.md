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
<div class="row">
  <div class="col-md-1">.col-md-1</div>
  <div class="col-md-1">.col-md-1</div>
  <div class="col-md-1">.col-md-1</div>
  <div class="col-md-1">.col-md-1</div>
  <div class="col-md-1">.col-md-1</div>
  <div class="col-md-1">.col-md-1</div>
  <div class="col-md-1">.col-md-1</div>
  <div class="col-md-1">.col-md-1</div>
  <div class="col-md-1">.col-md-1</div>
  <div class="col-md-1">.col-md-1</div>
  <div class="col-md-1">.col-md-1</div>
  <div class="col-md-1">.col-md-1</div>
</div>
<div class="row">
  <div class="col-md-8">.col-md-8</div>
  <div class="col-md-4">.col-md-4</div>
</div>
<div class="row">
  <div class="col-md-4">.col-md-4</div>
  <div class="col-md-4">.col-md-4</div>
  <div class="col-md-4">.col-md-4</div>
</div>
<div class="row">
  <div class="col-md-6">.col-md-6</div>
  <div class="col-md-6">.col-md-6</div>
</div>
```

## Customization and replacement of standard Bootstrap

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

### Media queries breakpoints:  

|var name|unit|
|---|---|
|$screen-xs|480px|
|$screen-sm|768px|
|$screen-md|992px|  
|$screen-lg|1200px|  
