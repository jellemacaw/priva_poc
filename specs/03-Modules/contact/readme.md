# Contact Spec

This component will display 1 or more Contact items. Details to display per Contact item:

- Image

- Name

- JobTitle

- Description

- Phone

- MobilePhone

- Email

- Fax

- LinkText (which links to the specified link)

## Basic usage

**!! Added an extra class to the `body-content` div called `secondary` because `item-title` styling is different.**

### Contact example
This example shows two contacts with the second being the variant with no image.
```example
<div class="example--contact"></div>
<script>
	var target = ".example--contact";
	var block = "variants/default.html";
	$(target).parent().load(block);
	$(target).remove();
</script>
```

### No photo example
Markup for contact information without a photo. (only the container "contact__img" is removed)
```example
<div class="example--no-photo--contact"></div>
<script>
	var target = ".example--no-photo--contact";
	var block = "variants/no-photo.html";
	$(target).parent().load(block);
	$(target).remove();
</script>
```
