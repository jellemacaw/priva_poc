# Font Spec

The custom fonts 'Open Sans' and 'Roboto Slab' are sourced from Google Fonts.
The fonts are loaded via the [Google webfontloader](https://github.com/typekit/webfontloader).

<b>Note:</b>
For performance reasons the fonts are loaded with basic Latin characters. For future country-specific sites extended character sets might be needed (cyrilic, greek, korean etc.)



## Font families
```example
<h3 class="sourcejs-fonts-font-OSl">Grumpy wizards make toxic brew for the evil Queen and Jack.</h3>
<h3 class="sourcejs-fonts-font-OSli">Grumpy wizards make toxic brew for the evil Queen and Jack.</h3>
<h3 class="sourcejs-fonts-font-OS">Grumpy wizards make toxic brew for the evil Queen and Jack.</h3>
<h3 class="sourcejs-fonts-font-OSsb">Grumpy wizards make toxic brew for the evil Queen and Jack.</h3>
<h3 class="sourcejs-fonts-font-OSb">Grumpy wizards make toxic brew for the evil Queen and Jack.</h3>
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
    families: ['Open Sans:300,400,600,700,300italic']
  }
});
```

For use in the stylesheet the fonts are set as variables in bootstrap-custom-variables.scss (see the [Bootstrap Spec](/specs/00-Utilities/bootstrap/)) with the following font cascade:

```pre
$font-family-sans-serif:  'Open Sans','Gill Sans', 'Gill Sans MT', Calibri, sans-serif !default;
```
