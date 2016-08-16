# Accordion Spec

This component will display an accordion. The accordion is build on the [Bootstrap collapse method](http://v4-alpha.getbootstrap.com/components/collapse/).

## F.O. Specifications.
This component can be used for things like FAQ's.  
The collapsed item shows the title (e.g. a question). When the item is pressed, it expand the reveal text (e.g. an answer to the question).  
  
Allow the entire area of the collapsed accordion to be interactive to expand the accordion. And vice versa.  
  
Allow multiple accordion items to be open.

## Example

### Basic example
```example
<div class="example--accordion"></div>
<script>
	var target = ".example--accordion";
	var block = "variants/default.html";
	$(target).parent().load(block);
	$(target).remove();
</script>
```

## Code
* `data-target` should match content div `ID` 

```html
<ul id="accordion_id" class="list-vert mw_accordion">
  <li class="panel">
     <button data-toggle="collapse" data-target="#item1" class="mw_accordion__toggle collapsed"></button>
     <h3 class="item-title--large">Item title 1</h3>
      <p class="item-label">Abstract</p>
      <div id="item1" class="collapse content"></div>
  </li>
  <li class="panel">
     <button data-toggle="collapse" data-target="#item2" class="mw_accordion__toggle collapsed"></button>
     <h3 class="item-title--large">Item title without abstract</h3>
      <div id="item2" class="collapse content"></div>
  </li>
  <li class="panel">
     <button data-toggle="collapse" data-target="#item3" class="mw_accordion__toggle collapsed"></button>
     <h3 class="item-title--large">This item has an extremely long title. This would never happen in real life, right?</h3>
      <p class="item-label">Abstract</p>
      <div id="item3" class="collapse content"></div>
  </li>
</ul>
```