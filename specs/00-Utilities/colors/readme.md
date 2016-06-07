<link rel="stylesheet" href="css/example.css" />

# Color Spec

The following color palette is defined for this site.

## Palette

```example
<div class="example-swatches">
  <div class="example-swatch-primary">
    <span>$color--primary<br></span>
  </div>
  <div class="example-swatch-secondary">
    <span>$color--secondary<br></span>
  </div>
</div>

<div class="example-swatches">
  <div class="example-swatch-accent01">
    <span>$color--accent-01<br></span>
  </div>
  <div class="example-swatch-accent02">
    <span>$color--accent-02<br></span>
  </div>
  <div class="example-swatch-accent03">
    <span>$color--accent-03<br></span>
  </div>
  <div class="example-swatch-accent04">
    <span>$color--accent-04<br></span>
  </div>
  <div class="example-swatch-accent05">
    <span>$color--accent-05<br></span>
  </div>
  <div class="example-swatch-support">
    <span>$color--support<br></span>
  </div>
</div>

<div class="example-swatches example-swatches--transparancy">
  <div class="example-swatch-primary-op80">
    <span>$color--primary--op80<br></span>
  </div>
  <div class="example-swatch-primary-op70">
    <span>$color--primary--op70<br></span>
  </div>
  <div class="example-swatch-primary-op50">
    <span>$color--primary--op50<br></span>
  </div>
  <div class="example-swatch-primary-op30">
    <span>$color--primary--op30<br></span>
  </div>
  <div class="example-swatch-primary-op20">
    <span>$color--primary--op20<br></span>
  </div>
  <div class="example-swatch-primary-op05">
    <span>$color--primary--op05<br></span>
  </div>
  <div class="example-swatch-primary-light">
    <span>$color--primary--light<br></span>
  </div>
</div>
```


## Basic usage
The colors as defined in the [online styleguide](https://app.frontify.com/document/79284#/basics/colors) are codified by their color names and then abstracted to the color definitions as seen above.
These variable names are imported and used in the custom bootstrap variables file so Bootstrap still uses its own internal variable names. E.g.:

```pre
_color-names.scss         _color-theme.scss         _bootstrap-custom-variables.scss

$color--blue-dianne -->   $color--primary -->       $brand-primary
```
