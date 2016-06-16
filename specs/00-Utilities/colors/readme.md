# Color Spec

The following color palette is defined for this site.

## Palette

```example

<h4 class="sourcejs-colortitle">Primary colors</h4>
<div class="sourcejs-colorswatches">
  <div class="sourcejs-color-taupe">
    <span>$color--taupe<br></span>
  </div>
  <div class="sourcejs-color-light-taupe">
    <span>$color--light-taupe<br></span>
  </div>
  <div class="sourcejs-color-petrol">
    <span>$color--petrol<br></span>
  </div>
  <div class="sourcejs-color-petrol2">
    <span>$color--petrol2<br></span>
  </div>
  <div class="sourcejs-color-pacific-blue">
    <span>$color--pacific-blue<br></span>
  </div>
  <div class="sourcejs-color-cannon-pink">
    <span>$color--cannon-pink<br></span>
  </div>
</div>

<h4 class="sourcejs-colortitle">Overlay colors</h4>
<div class="sourcejs-colorswatches sourcejs-colorswatches--transparancy">
  <div class="sourcejs-color-petrol--overlay">
    <span>$color--petrol--overlay<br></span>
  </div>
  <div class="sourcejs-color-armadillo--overlay">
    <span>$color--armadillo--overlay<br></span>
  </div>
  <div class="sourcejs-color-black--overlay">
    <span>$color--black--overlay<br></span>
  </div>
  <div class="sourcejs-color-gradient--hero">
    <span>$gradient--hero *<br></span>
  </div>
</div>
<small>* can only be set as a background</small>

<h4 class="sourcejs-colortitle">Additional colors</h4>
<div class="sourcejs-colorswatches">
  <div class="sourcejs-color-lima1">
    <span>$color--lima1<br></span>
  </div>
  <div class="sourcejs-color-genoa">
    <span>$color--genoa<br></span>
  </div>
  <div class="sourcejs-color-alizarin-crimson">
    <span>$color--alizarin-crimson<br></span>
  </div>
  <div class="sourcejs-color-black">
    <span>$color--black<br></span>
  </div>
  <div class="sourcejs-color-white">
    <span>$color--white<br></span>
  </div>
</div>
```


## Basic usage
The colors as defined in the [online styleguide](https://app.frontify.com/document/79284#/basics/colors) are codified by their color names. These names are imported and used in the custom bootstrap variables file so Bootstrap still uses its own internal variable names in all its components. E.g.:

```pre
color-names.scss             _bootstrap-custom-variables.scss

$color--petrol      -->       $brand-primary
```
