<link rel="stylesheet" href="css/example.css">

# Font Spec

The custom fonts 'Open Sans' and 'Roboto Slab' are sourced from Google Fonts.
The fonts are loaded via the [Google webfontloader](https://github.com/typekit/webfontloader).

<b>Note:</b>
For performance reasons the fonts are loaded with basic Latin characters. For future country-specific sites extended character sets might be needed (cyrilic, greek, korean etc.)



## Font families
```example
<h3 class="example-font-OS">Grumpy wizards make toxic brew for the evil Queen and Jack.</h3>
<h3 class="example-font-OSb">Grumpy wizards make toxic brew for the evil Queen and Jack.</h3>
<h3 class="example-font-OSl">Grumpy wizards make toxic brew for the evil Queen and Jack.</h3>
<h3 class="example-font-RS">Grumpy wizards make toxic brew for the evil Queen and Jack.</h3>
```

## Basic usage
Link to hosted script library in head.
```
<script src="https://ajax.googleapis.com/ajax/libs/webfont/1.6.16/webfont.js"></script>
```
Include configuration script in head.
```
<script src="webfont-config.js"></script>
```
<sup>(For development purposes this styleguide has the javascript files included in the main template.)</sup>

In this script the required fonts are defined

```javascript
WebFont.load({
  google: {
    families: ['Open Sans:400,700,300', 'Roboto Slab']
  }
});
```

For use in the stylesheet the fonts are set as variables in bootstrap-custom-variables.scss (see the [Bootstrap Spec](/specs/00-Utilities/bootstrap/)) with the following font cascade:

```pre
$font-family-sans-serif:  'Open Sans','Gill Sans', 'Gill Sans MT', Calibri, sans-serif !default;

$font-family-serif:       'Roboto Slab', Rockwell, 'Courier Bold', Courier, Georgia, Times, 'Times New Roman', serif !default;
```
