# Writing components

## Structure of a spec

The stucture of a component is like this:

A `Container.jsx` is used as an entrypoint. One of the `Container`'s tasks is to validate props and provide default values if nessesary.

Another tasks of a `Container.jsx` CAN be to watch/listen for events and switch **variants**.

Variants are the core UI components, it's where state is handled if the component has state. If all variants of a component share the exact same state and state-changes, it's also possible to use the `Container.jsx` as a state-holder, and propagate events to the `Container.jsx` and have it re-render the variant.

But many a times, variants will differ in interaction and thus like differ in state.
Sometimes it feels weird creating single variant (usually called 'default') for a component.

> **WARNING**: never asume a single visual representation will be all that is needed for a component.

Creating a *container component* (`Container.jsx`) [is a good practice any way](https://medium.com/@learnreact/container-components-c0e67432e005), so it's an easy step to take. And as a bonus you to have a list of possible render options.

But of course there are edge cases, where creating variants would NOT be sane to do, in utility components mostly. Another case would be if the variants are state-less and differ only in a single CSS-class. In such an case no variant-components need to be created, as it would just add more to maintain with no benifits. Discuss with your team when making such decisions.

## Content of a spec folder

This is a compacted example of a spec folder.
For example this could be `specs/03-modules/rainbows/`.

<pre>
<b>/module-name</b>
│   readme.md <small><i>- documention document</i></small>
│   info.json
│   thumbnail.*
│   Container.jsx <small><i>- main UI class for spec</i></small>
│
└───<b>variants</b>
    │   VariantA.jsx <small><i>- a single visual representation UI class</i></small>
    │   VariantA.css <small><i>- css styling for matching UI class</i></small>
    │   VariantB.jsx
    │   VariantB.css
    │   index.jsx <small><i>- <u>literally</u> an index file for all components contained within this folder</i></small>
</pre>

### Additional content of a spec folder

Besides the folder `variants` a spec *may* contain more folders, specific for that spec.

Here's a expanded example of a spec with additional folders:

<pre>
<b>/module-name</b>
│   readme.md
│   info.json
│   thumbnail.*
│   Container.jsx
│
└───<b>data</b> <small><i>- files with demo/default data (json)</i></small>
|   │   example1.json
|   │   example2.json
|
└───<b>partials</b> <small><i>- sub UI blocks linked to module</i></small>
|   │   PartialUI1.css
|   │   PartialUI1.jsx
|   │   PartialUI2.css
|   │   PartialUI2.jsx
|
└───<b>variants</b>
    │   VariantA.jsx
    │   VariantA.css
    │   VariantB.jsx
    │   VariantB.css
    │   index.jsx
</pre>

The folders for partials and data do not need an index.

You could create any folder you'd like, but you should have a solid use-case. Consult with more developers before adding folders not listed above.

## Content of a .JSX file

A .JSX file consists of up to 4 sections:
1. Declaring dependencies
2. Inline functiones <small><i>(should be avoided, try to move to npm or custom packages)</i></small>
3. Inline Sub UI blocks  <small><i>(should be avoided, try to move to Partials or a (lower) UI category)</i></small>
4. Main UI block

### Container

Example of a Container.jsx content:
```js
import { Component, PropTypes, createElement } from 'react';

import variants from './variants/index';

/**
* <description of the component here, is shown on the spec page>.
*/
export default class ComponentName extends Component {
	static propTypes = {
		/**
		* Main visual display-type
		*/
		Variant: PropTypes.oneOf(Object.keys(variants)),
		/**
		* List of small visual tweaks
		*/
		Modifiers: PropTypes.object,
		/**
		* Data object
		*/
		Data: PropTypes.object.isRequired
	}
	static defaultProps = {
		Variant: 'Default',
		Modifiers: {},
		Data: {
			ComponentTitle: 'This is the main title',
			ComponentText: '<p>Rich text garbage from the CMS</p>',
			SomeOtherProperty: ''
		}
	}

	render() {
		let { props } = this;
		let data = props.Data;

		// some data checking and sanitation could take place

		let variant = variants[props.variant] || variants['Default'];
		let modifiers = Object.keys(props.Modifiers).map(function (item) {
			return `mod_${item}-${props.Modifiers[item]}`;
		});

		let className = [styles.root].concat(modifiers.map(item => styles[item])).join(' ');

		return (
			<div className={className}>
				{createElement(variant, {
					data: data,
					modifiers: modifiers
				})}
			</div>
		);
	}
}
```

### Variant / UI blocks

Example of a variant showing all 4 sections:
```js
// Declare dependencies
import { Component } from 'react';
import styles from './Default.css'

// Inline functions
let calculate = function (a, b) {
	return a + b;
};

// Inline Sub UI blocks
class Module_Partial extends Component {
	render() {
		return (
			<span>{this.props.number}</span>
		);
	}
}

// Main UI block
export default class Module_Default extends Component {
	constructor(props) {
		super(props);

		this.state = {
		};
	}

	render() {
		return (
			<div className={styles.root}>
				<Module_Partial number={calculate(10, 10)} />
			</div>
		);
	}
};
```

An example of a variant more optimal:
```js
// Declare dependencies
import { Component } from 'react';
import calculate from 'vwpfs-calculate';

import Partial from './partials/Partial';

import styles from './Default.css'

// Main UI block
export default class Module_Default extends Component {
	constructor(props) {
		super(props);

		this.state = {
		};
	}

	render() {
		return (
			<div className={styles.root}>
				<Partial number={calculate(10, 10)} />
			</div>
		);
	}
};
```

> Keeping file complexity low and re-usability high is the road to success


### Declaring dependencies

> Every file should declare it's dependencies.

Declaring your dependencies is important, without declaring them, the functionality you need will not be available.
We're trying to avoid the global scope as much as possible.

**Import your dependencies in order:**<br>
*(This is important for the module bundler to place them in the correct order)*
1. Utility npm packages
2. UI blocks from UI categories
3. UI blocks (partials) linked to current component
4. Styles

Example:
```js
// utility dependencies from npm packages
import { Component } from 'react';
import request from 'vwpfs-http-request';
import { merge, set } from 'lodash';

// UI components dependencies from UI categories
import Atoms from 'vwpfs-ui-atoms';
import Molecules from 'vwpfs-ui-molecules';

// UI partials/components linked to the current component
import MapPopup from '../partials/MapPopup'
import List from '../partials/List'

// Styles from CSS file
import styles from './Default.css';
```

Even CSS files can have dependencies:

```css
@import "vwpfs-ui-utilities/colors/sets/theme-variables.css";
@import "vwpfs-ui-utilities/fonts/sets/web-variables.css";
```

## Embedding components (components using components)

Place them in order of complexity.
```js
import Utilities from 'vwpfs-ui-utilities';
import Atoms from 'vwpfs-ui-atoms';
import Molecules from 'vwpfs-ui-molecules';
```

### Components using components in the same category (sibling components)

Components embedding components in the same category/namespace must do so a bit different to prevent circular embedding.
```js
import Icon from 'vwpfs-ui-atoms/icon/Container';
```

##
