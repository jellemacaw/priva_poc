# Priva Favicon Package

**TIP! Use <http://realfavicongenerator.net/> to quickly generate all favicon and icon tiles!**

## Add meta items and links to head of page.

```html
<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png?v=oLaaO3QEmY">
<link rel="icon" type="image/png" href="/favicon-32x32.png?v=oLaaO3QEmY" sizes="32x32">
<link rel="icon" type="image/png" href="/favicon-16x16.png?v=oLaaO3QEmY" sizes="16x16">
<link rel="manifest" href="/manifest.json?v=oLaaO3QEmY">
<link rel="mask-icon" href="/safari-pinned-tab.svg?v=oLaaO3QEmY" color="#5bbad5">
<link rel="shortcut icon" href="/favicon.ico?v=oLaaO3QEmY">
<meta name="apple-mobile-web-app-title" content="Priva">
<meta name="application-name" content="Priva">
<meta name="theme-color" content="#ffffff">
```

## Download .zipfile, extract and add to root of the website.
[Download the Priva .zip file](priva_favicons.zip)

------
  

# More info on Favicons (Not Priva specific)
The favicon as we all know it is almost deprecated. Nowadays there are many type of icon tiles to use for different types of devices/ browsers/ OS. Below we try to list the ones known at the time of writing.


## Regular (oldskool) favicon
This is a `16x16px` icon named favicon with the extension `.ico` (icon).  
This should be referenced in the head of the page via a meta tag

```html
<link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
```

## Apple touch icons
The Apple touch icon was introduced with the iphone. Back then there was only 1 size `57x57`. But with the comming of ipad and retina devices they added more sizes.  

Other devices like Chrome use the Apple Touch icon aswell. So it's good practise to declare them.

```html
<link rel="apple-touch-icon" sizes="57x57" href="img/apple-touch-icon-57x57.png">
<link rel="apple-touch-icon" sizes="60x60" href="img/apple-touch-icon-60x60.png">
<link rel="apple-touch-icon" sizes="72x72" href="img/apple-touch-icon-72x72.png">
<link rel="apple-touch-icon" sizes="76x76" href="img/apple-touch-icon-76x76.png">
<link rel="apple-touch-icon" sizes="114x114" href="img/apple-touch-icon-114x114.png">
<link rel="apple-touch-icon" sizes="120x120" href="img/apple-touch-icon-120x120.png">
<link rel="apple-touch-icon" sizes="144x144" href="img/apple-touch-icon-144x144.png">
<link rel="apple-touch-icon" sizes="152x152" href="img/apple-touch-icon-152x152.png">
```

## Windows 8 tablet tile
Windows 8 tablets require something extra.  
* For Windows 8.0 and IE 10 you will have to specify a tile background color. These are set through meta tags. 
* F0r Windows 8.1 and IE 11 you will have to place a file on the root of your website named `browserconfig.xml`.

### Windows 8.0 and IE 10
```html
<meta name="msapplication-TileColor" content="#143058">
<meta name="msapplication-TileImage" content="img/mstile-144x144.png">
```

### Windows 8.1 and IE 11
```html
<?xml version="1.0" encoding="utf-8"?>
<browserconfig>
  <msapplication>
    <tile>
      <square70x70logo src="img/mstile-70x70.png"/>
      <square150x150logo src="img/mstile-150x150.png"/>
      <square310x310logo src="img/mstile-310x310.png"/>
      <wide310x150logo src="img/mstile-310x150.png"/>
      <TileColor>#143058</TileColor>
    </tile>
  </msapplication>
</browserconfig>
```

