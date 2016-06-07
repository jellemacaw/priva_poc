# UI Architecture explaination

You should read this document before developing for the UI.


## Introduction

It's likely this project is significantly different from what you're used too. It's possible you'll find methods, tools, frameworks or methodologies you're unfamiliar with.

This document will help you understand the main parts.


## File System

> **NOTE**: It's important that all folders are lowercase.

> **NOTE**: When the order of contents of a folder is important, prefix with `##-`.


### Description of the file tree:

This is a compacted example of the UI project.
The root folder for UI is `/specs`.

<pre>
<b>/specs</b>
│   about.md <small><i>- introduction document</i></small>
│   index.src.html <small><i>- documention document</i></small>
│   info.json  <small><i>- <a href="/docs/info-json/">config for documentation page</a></i></small>
│
└───<b>00-utilities</b>
│   │   about.md
│   │   index.src.html
│   │   index.jsx <small><i>- <u>iterally</u> an index file for all components contained within this category</i></small>
│   │   info.json
│   │   thumbnail.* <small><i>- picture or icon for visual </i></small>
│   │   package.json <small><i>- npm package config</i></small>
│   │
│   ├───<b>spec-name</b>
│   │   <small><i>contents of specfolders will be discussed later</i></small>
│   │
│   └───<b>spec-name</b>
│   │
│   ...
│
└───<b>01-atoms</b>
│   │
│   ├───<b>spec-name</b>
│   │
│   ...
...
</pre>


## UI categories:

### Complexity

The categories grow in complexity from Utilities to Scaffolds.

| Category                          | Description                                                                   |
|-------------------------------------------------------------------------------------------------------------------|
| [Utility](/specs/00-utilities/)   | Invisible helper UI blocks, Global PubSub Channels, or lists of CSS variables |
| [Atoms](/specs/01-atoms/)         | Stateless UI blocks, that are be included in more complex blocks              |
| [Molecules](/specs/02-molecules/) | UI blocks with some complexity, that are included in more complex blocks      |
| [Modules](/specs/03-modules/)     | UI blocks that are included into the content area by the CMS                  |
| [Scaffolds](/specs/04-scaffolds/) | UI blocks that are included into the main layout by back-end code             |


### Where to place your new component

Each category has certain do's and don't, but that doesn't mean the answer is always clear-cut.

Specs always belong to a single category, when in doubt which category fits your new component best, here are some question you can ask yourself and other developers:

1. What is the complexity?
2. Does your component have it's own state?
3. Can your component be included on the page via the CMS directly?
4. Is your component a core part of the layout or group of pages?

## Components

Components are the absolute backbone or this project, pretty much EVERYTHING is a component.

Components have their own [documentation page](./writing-components), detailing their architecture.
> [**CLICK HERE**](./writing-components) to read more about the structure of components and how to create them.

### Embedding components (components using components)

Embedding of other components is allowed in a single direction: From high-complexity to low-complexity.

So **Modules** may embed **Molecules**, **Atoms** and **Utilities**.
But **Atoms** may never embed **Modules** as that would open the window for circular embedding.

It's allowed for Components to embed components in the same category/namespace, but this must be done a bit different and with care. Again to prevent circular embedding. More detailed information about this can be found on the [component documentation page](./writing-components).


## React

This project makes heavy use of [ReactJS](https://facebook.github.io/react/index.html) together with JSX and ES6.

There are some react-specific-patterns to get to know to write React components, and write them well.
Read more to [get started with react here](./react).


## ES6

TODO
