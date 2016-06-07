# How to Install and run this project

This project originates from: [SourceJS loves React](https://github.com/sourcejs/sourcejs-react-bundle-example)

Based on latest SourceJS 0.6 nightly builds, and a bunch of plugins:

* [sourcejs-react-styleguidist](http://github.com/sourcejs/sourcejs-react-styleguidist)
* [sourcejs-react-docgen](http://github.com/sourcejs/sourcejs-react-docgen)

Available features:

* Live code editor
* Automatic React Doc generation
* Hot Module Replacement
* Clarify mode for responsive testing
* Advanced navigation support
* SourceJS ecosystem support

## Install

1. Install the [latest stable NodeJS](https://nodejs.org/en/)
2. Add npm to the system PATH
3. open terminal/commandprompt (NOTE: Run as administrator)
4. Navigate to project root
5. run: <code>npm install</code>
6. run: <code>npm run postinstall</code>

## Runcmd

1. open terminal/commandprompt (NOTE: Run as administrator)
2. Navigate to project root<br/><br/>
3. **Windows only:** to add the node_modules.bin folder (found with `npm bin`) to the [PATH variable](http://bit.ly/1VaZHgn).<br/>
   run: `shellinit.bat`, (though this may not be needed on yur machine)<br/><br/>
4. run: <code>npm start</code>
5. open browser at location: http://127.0.0.1:8080
6. It can take a bit of time for the css &amp; js bundles to generate ±15 seconds. So a bit of patience is required, but after initial bundling is complete, the subsequent generations should be quick, ±300ms depending on the change made.
7. There way appear some Errors/Warnings in the console from \[Babel\] about some files that were too large, you can safely ignore those


## About: SourceJS React Styleguide Bundle Example

Example of pre-configured [SourceJS](http://sourcejs.com) bundle for building React Component Libraries and Style Guides.

Based on latest SourceJS 0.6 nightly builds, and a bunch of plugins:

* [sourcejs-react-styleguidist](http://github.com/sourcejs/sourcejs-react-styleguidist)
* [sourcejs-react-docgen](http://github.com/sourcejs/sourcejs-react-docgen)

Available features:

* Live code editor
* Automatic React Doc generation
* Hot Module Replacement
* Clarify mode for responsive testing
* Advanced navigation support
* SourceJS ecosystem support

[**Live demo**](https://sourcejs-react-bundle.herokuapp.com)

[![image](http://d.pr/i/1ij48+)](https://sourcejs-react-bundle.herokuapp.com/specs/button/)

### Setup

```
npm i && npm start
open http://127.0.0.1:8080
```

To update SourceJS (in case of new installed plugins), run

```
npm run build-source
```

#### Writing Documentation

Example components are placed into `./specs` folder. Each component has its JSX/CSS sources, `readme.md` documentation with component examples and text description and `info.json` meta file.

Simple, but extendable syntax allows automatically building rich component presentation pages.

```markdown
# Placeholder Spec

<&#8203;%- info.__docGenRaw.description %&#8203;>

## Properties

<&#8203;%- info.__docGenHTML %&#8203;>

## Basic placeholder

&#8203;`&#8203;`&#8203;`
<Placeholder type="beard"/>
&#8203;`&#8203;`&#8203;`

```
Renders into

![image](http://d.pr/i/18Y12+)

---

### License

The MIT License, see the included [license.md](license.md) file.
