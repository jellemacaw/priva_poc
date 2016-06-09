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

    <h2>H2: Single-line textfield</h2>

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

    <figure>
      <picture>
        <source
          media="(max-width: 599px)"
          srcset="http://placehold.it/360x240?text=360x240&w=360&h=240, http://placehold.it/720x480?text=hdpi:720x480&w=720&h=480 x2">
        <source
          media="(min-width: 600px)"
          srcset="http://placehold.it/560x372?text=560x372&w=560&h=372, http://placehold.it/1120x740?text=hdpi:1120x740&w=1120&h=744 x2">
        <img src="http://placehold.it/560x372?text=fallback:560x372&w=560&h=372" alt="alt text here">
      </picture>
      <figcaption>A very descriptive caption</figcaption>
    </figure>

    <h4>Subkop (h4)</h4>
    <p>
      Appropriately harness e-business process improvements vis-a-vis magnetic strategic theme areas. Quickly exploit open-source infrastructures and premium technologies. Interactively e-enable resource maximizing systems without robust models.
    </p>
    <p>
      Completely envisioneer state of the art results before multifunctional innovation. Quickly cultivate cross-media synergy with multidisciplinary strategic theme areas.
    </p>

    <figure>
      <div class="embed-responsive embed-responsive-16by9">
        <video controls>
          <source src="https://archive.org/download/WebmVp8Vorbis/webmvp8_512kb.mp4" type="video/mp4">
          <source src="https://archive.org/download/WebmVp8Vorbis/webmvp8.webm" type="video/webm">
        </video>
      </div>
      <figcaption>A very descriptive caption for a movie</figcaption>
    </figure>

  </div>

</article>
```
