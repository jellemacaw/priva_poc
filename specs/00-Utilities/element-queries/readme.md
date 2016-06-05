<link rel="stylesheet" href="css/eqcss.css">
<script src="../../../node_modules/eqcss/EQCSS.min.js"></script>

# Element Queries Spec

You can use element queries to manipulate elements. Much like Media Queries but scoped to elements like paragraphs, headings, links or just classes(.) and ids (#).

See [Media Queries website](http://elementqueries.com/) for full documentation.

## Basic usage
Include script in head
```
<script src="../../../node_modules/eqcss/EQCSS.min.js"></script>
```

HTML Element
```
<a href="#" class="btn btn-primary">Button</a>
```

CSS
```
@element ".btn-primary" and (min-width: 500px) {
  .btn-primary {
    background: gold;
  }
}
```

### Example
```example
<a href="#" class="btn btn-primary">Button</a>
```
