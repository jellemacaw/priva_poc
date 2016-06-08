<link rel="stylesheet" href="css/example.css">

# Body Content Spec

A content component is used to display a piece of text. There is no limitation to the length of the text.

## Data

| Fieldname | Displayname | Type  | Description | Comments |
| ------------- |-------------| -----| -----|
| Title        | Title         | Single-line textfield | Title displayed as H2                     | = H2 |
| AnchorTitle  | Anchor Title  | Single-line textfield | Title displayed in the Anchor Navigation  | When this field is empty, the item is not displayed in the Anchor Navigation Component |
| Abstract     | Abstract      | Multi-line textfield  | Abstract displayed below the Title        | -    |
| BodyText     | Body Text     | Rich textfield        | Text displayed                            | -   |

## Basic usage
Blaat

### Example
```example
<article class="body-content">

  <div class="body-content__inner">

    <h2 class="h2">H2: Single-line textfield</h2>

    <p>
      Appropriately harness e-business process improvements vis-a-vis magnetic strategic theme areas. Quickly exploit open-source infrastructures and premium technologies. Interactively e-enable resource maximizing systems without robust models.
    </p>
    <h3>Subkop (h3)</h3>
    <p>
      Interactively underwhelm high-quality process improvements and highly efficient synergy. Intrinsicly leverage other's high-quality interfaces without <a href="#">optimal core competencies</a>. Continually seize interactive customer service before long-term high-impact innovation. Rapidiously reconceptualize superior leadership before goal-oriented quality vectors.
    </p>
    <ul>
      <li>Interactively underwhelm high-quality process improvements and highly efficient synergy.</li>
      <li>Completely envisioneer state of the art results before multifunctional innovation.</li>
      <li>Rapidiously reconceptualize superior leadership before goal-oriented quality vectors.</li>
    </ul>
    <h4>Subkop (h4)</h4>
    <p>
      Completely envisioneer state of the art results before multifunctional innovation. Quickly cultivate cross-media synergy with multidisciplinary strategic theme areas.
    </p>
    <figure>
      <img class="img-responsive" src="assets/img/content-image.jpg" alt="Text here">
      <figcaption>A cheeky macaque, Lower Kintaganban River, Borneo.</figcaption>
    </figure>
    <p>
      Completely envisioneer state of the art results before multifunctional innovation. Quickly cultivate cross-media synergy with multidisciplinary strategic theme areas.
    </p>

  </div>

</article>
```
