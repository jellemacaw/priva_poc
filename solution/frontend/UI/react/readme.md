# React

This project makes heavy use of [ReactJS](https://facebook.github.io/react/index.html).

**React is the “View” in the application**, a fast one. It also provides different ways to organize your templates and gets you think in
components. In a React application, you should **break down** your site, page or feature **into smaller pieces** of components. It means that
your site will be built by the combination of different components. These components are also built on the top of other components and so
on. When a problem becomes challenging, you can break it down into smaller ones and solve it there. You can also **reuse** it somewhere
else later. Think of it like the bricks of Lego. We will discuss **component-driven development** more deeply in this article later.

React also has this virtual DOM thing, what makes the rendering super fast but still keeps it easily understandable and controllable at the
same time. You can combine this with the idea of components and have the power of top-down rendering. We will cover this topic in the second
article.

Ok I admit, I still didn’t answer the question. We have components and fast rendering - but why is it a game changer? Because **React is mainly
a concept** and a library just secondly.

There are already several libraries following these ideas - doing it faster or slower - but slightly different. Like every programming
concept, React has it’s own solutions, tools and libraries turning it into an ecosystem. In this ecosystem, you have to pick your own tools
and build your own \~framework. I know it sounds scary but believe me, you already know most of these tools, we will just connect them to each
other and later you will be very surprised how easy it is. For example for dependencies we won’t use any magic, rather Node’s `require` and
`npm`. For the pub-sub, we will use Node’s `EventEmitter` and as so on.

*(Facebook announced [Relay][] their framework for React at the
[React.js Conf][] in January 2015. But it’s not available yet. The date
of the first public release is unknown.)*

Are you excited already? Let’s dig in!


## The Virtual DOM concept in a nutshell

To track down model changes and apply them on the DOM *(alias rendering)* we have to be aware of two important things:

1.  when data has changed,
2.  which DOM element(s) to be updated.

For the change detection (1) React uses an observer model instead of dirty checking *(continuous model checking for changes)*. That’s why it
doesn’t have to calculate what is changed, it knows immediately. It reduces the calculations and make the app smoother. But the really cool
idea here is **how it manages the DOM manipulations**:

For the **DOM changing challenge** (2) React builds the tree representation of the DOM in the memory and calculates which DOM element
should change. DOM manipulation is heavy, and we would like to keep it at the minimum. Luckily, React tries to keep as **much DOM elements
untouched as possible**. Given the less DOM manipulation can be calculated faster based on the object representation, the costs of the
DOM changes are reduced nicely.

Since **React’s diffing algorithm** uses the tree representation of the DOM and re-calculates all subtrees when its’ parent got modified
*(marked as dirty)*, you should be aware of your model changes, because the whole subtree will be re-rendered then.
Don’t be sad, later we will optimize this behavior together. *(spoiler: with `shouldComponentUpdate()` and ImmutableJS)*

![React.js Tutorial React re-render][] *(source: [React’s diffing algorithm][] - [Christopher Chedeau][])*

### How to render on the server too?

Given the fact, that this kind of DOM representation uses fake DOM, it’s possible to render the HTML output on the server side as well *(without
JSDom, PhantomJS etc.)*. React is also smart enough to recognize that the markup is already there *(from the server)* and will add only the
event handlers on the client side.

*Interesting: React’s rendered HTML markup contains `data-reactid` attributes, which helps React tracking DOM nodes.*

**Useful links, other virtual DOM libraries**

-   [React’s diff algorithm][]
-   [The Secrets of React’s virtual DOM][]
-   [Why is React’s concept of virtual DOM said to be more performant than dirty model checking?][]
-   [virtual-dom][]


## Component-driven development

It was one of the most difficult parts for me to pick up when I was learning React.
In the component-driven development, you won’t see the whole site in one template.
In the beginning you will probably think that it sucks.

-   FilterableProductTable
    -   SearchBar
    -   ProductTable
        -   ProductCategoryRow
        -   ProductRow ![React.js Tutorial Thinking in React][]
            *(source: [Thinking in React][])*


### What should a component contain?

First of all it’s wise to follow the [single responsibility principle][] and ideally, design your components to be responsible for only one
thing. When you start to feel you are not doing it right anymore with your component, you should consider breaking it down into smaller ones.

Since we are talking about component hierarchy, your components will use other components as well. But let’s see the code of a simple component
in ES5:

<pre>
var HelloComponent = React.createClass({
    render: function() {
        return <&#8203;div>Hello {this.props.name}<&#8203;/div>;
    }
});
</pre>

But from now on, we will use ES6. ;)
Let’s check out the same component in ES6:

<pre>
class HelloComponent extends React.Component {
  render() {
    return <&#8203;div>Hello {this.props.name}<&#8203;/div>;
  }
}
</pre>


### JS, JSX

As you can see, our component is a mix of JS and HTML codes. Wait, what? HTML in my JavaScript? Yes, probably you think it’s strange, but the
idea here is to have everything in one place. Remember, single responsibility. It makes a component extremely flexible and reusable.

In React, it’s possible to write your component in pure JS like:

<pre>
render () {
    return React.createElement("div", null, "Hello ", this.props.name);
}
</pre>

But I think it's not very comfortable to write your HTML in this way. Luckily we can write it in a JSX syntax <em>(JavaScript extension)</em> which let us write HTML inline:

**What is JSX?**
[JSX][] is a XML-like syntax extension to ECMAScript. JSX and HTML syntax are similar but it’s different at some point. For example the
HTML `class` attribute is called `className` in JSX. For more differences and gathering deeper knowledge check out Facebook’s [HTML
Tags vs. React Components][] guide.

Because JSX is not supported in browsers by default *(maybe someday)* we have to compile it to JS. I’ll write about how to use JSX in the Setup
section later. *(by the way Babel can also transpile JSX to JS)*.

**Useful links about JSX:**
- [JSX in depth][]
- [Online JSX compiler][]
- [Babel: How to use the react transformer.][]


### What else can we add?

Each component can have an internal state, some logic, event handlers *(for example: button clicks, form input changes)* and it can also have
inline style. Basically everything what is needed for proper displaying.

You can see a `{this.props.name}` at the code snippet. It means we can pass properties to our components when we are building our component
hierarchy. Like: `<MyComponent name="John Doe" />`

It makes the component reusable and makes it possible to pass our application state from the root component to the child components down,
through the whole application, always just the necessary part of the data.

Check this simple React app snippet below:

<pre>
class UserName extends React.Component {
  render() {
    return <&#8203;div>name: {this.props.name}<&#8203;/div>;
  }
}

class User extends React.Component {
    render() {
      return <&#8203;div>
          <&#8203;h1>City: {this.props.user.city}<&#8203;/h1>
          <&#8203;UserName name={this.props.user.name} />
      <&#8203;/div>;
    }
}

var user = {
    name: 'John',
    city: 'San Francisco'
};

React.render(<&#8203;User user={user} />, mountNode);
</pre>

**Useful links for building components:**
- [Thinking in React][]

  [Relay]: https://gist.github.com/wincent/598fa75e22bdfa44cf47
  [React.js Conf]: http://conf.reactjs.com/
  [React.js Tutorial React re-render]: https://risingstack-blog.s3-eu-west-1.amazonaws.com/2015/04/react-js-tutorial-2.png
  [React’s diffing algorithm]: http://snip.ly/ywCe
  [Christopher Chedeau]: http://snip.ly/alub
  [React’s diff algorithm]: http://calendar.perfplanet.com/2013/diff/
  [The Secrets of React’s virtual DOM]: http://fluentconf.com/fluent2014/public/schedule/detail/32395
  [Why is React’s concept of virtual DOM said to be more performant than
  dirty model checking?]: http://stackoverflow.com/questions/21109361/why-is-reacts-concept-of-virtual-dom-said-to-be-more-performant-than-dirty-mode
  [virtual-dom]: https://github.com/Matt-Esch/virtual-dom
  [React.js Tutorial Thinking in React]: https://risingstack-blog.s3-eu-west-1.amazonaws.com/2015/08/react-js-tutorial-3_7eb441e9aec25b86b08a96ae119fcd7f.png
  [Thinking in React]: https://facebook.github.io/react/docs/thinking-in-react.html
  [single responsibility principle]: http://en.wikipedia.org/wiki/Single_responsibility_principle
  [JSX]: http://snip.ly/TY3h
  [HTML Tags vs. React Components]: http://snip.ly/7DTB
  [JSX in depth]: https://facebook.github.io/react/docs/jsx-in-depth.html
  [Online JSX compiler]: https://facebook.github.io/react/jsx-compiler.html
  [Babel: How to use the react transformer.]: http://babeljs.io/docs/usage/transformers/other/react/
  [Thinking in React]: https://facebook.github.io/react/blog/2013/11/05/thinking-in-react.html
  [ES6]: http://en.wikipedia.org/wiki/ECMAScript
  [Babel]: http://babeljs.io/
  [Learn ES6]: https://babeljs.io/docs/learn-es6
  [Babel: Learn ES6]: https://babeljs.io/docs/learn-es6/
  [React ES6 announcement]: https://facebook.github.io/react/blog/2015/01/27/react-v0.13.0-beta-1.html
