
# Mixins and functions Spec

This spec includes additional mixins and functions not part of Bootstrap.

## Mixins

### Arrowhead

The mixin <b>icon-arrowhead(x)</b> will add an ::after pseudo-element containing a restyled ">" character.
In order for the transforms to work, the element needs to be placed outside the normal flow. By default this is done by positioning the element absolutely. This can be overruled by passing a different positioning value.
It is also possible to add arbitrary other styling to this mixin.
So to disable the positioning behaviour and float the arrow one could use:

#### Basic usage
```code
.element {
  background: blue;

  @include icon-arrowhead(static) {
    float: right;
    margin-left: .5em;
  }
}
```




## Functions

### Calculate rem from px

The function <b>rem(x)</b> will transform a pixel size into the equivalent rem units. The bootstrap variable <code>$font-size-base</code> is used to calculate the corresponding rem size.

#### Basic usage
```code
margin-left: rem(24); // 1.5rem with a base font-size of 16px
```

### Calculate em from px

The function <b>em(x[,y])</b> will transform a pixel size into the equivalent em units. An optional 2nd number can be used to override the font-size context if this differs from the base font-size. By default the bootstrap variable <code>$font-size-base</code> is used.

#### Basic usage
```code
font-size: em(24,12);  // 2em
```


### Inline svg

The function <b>svg-url(x)</b> will transform svg markup into an UTF-8 data URI for use as a background-image. It will automatically escape certain characters for cross-browser compatibility  using the <b>str-replace($string, $search, $replace: '')</b> function and chunk the string to avoid a "SystemStackError: stack level too deep" error.

#### Basic usage
```code
background-image: svg-url('<svg xmlns="http://www.w3.org/2000/svg" width="32.62" ...>...</svg>');
```
