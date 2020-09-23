# Week 2 Lecture - nucamp-react

Learning goals for this week => Gain familiarity with react and the overall flow of data.

## Agenda

    1) Week 1 - 5 Recap & Questions
    2) OOP
    3) Inheritance
    4) Prototypes
    5) Modularization
    6) Week 6 Intro - React
    7) 

### 1. Week 1 - 5 Recap

- Constructors
- Classes
- es6 (spread, rest, default parameters, arror fx;s)

### 2. OOP

Object-oriented programming (OOP) is a computer programming model that organizes software design around data, or objects, rather than functions and logic. An object can be defined as a data field that has unique attributes and behavior.

OOP focuses on the objects that developers want to manipulate rather than the logic required to manipulate them. This approach to programming is well-suited for programs that are large, complex and actively updated or maintained.

    Benefits of OOP include code reusability, scalability and efficiency.

4 Pillars of OOP:

    1.Abstraction of Data or Hiding of Information is called Abstraction.

    2.Binding of Data and Functions (that manipulate the data) together and keep both safe from outside interference and misuse is called Encapsulation.

    3. Inheritance enables new objects to take on the properties of existing objects.

    4. It is the ability to redefine methods for derived classes. or we can say that object can behave in different forms is call Polymorphism.

Key Concepts:

- Class: A template for a new object.

- Instance: A single object created from a class.

- Inheritance: An object can inherit properties from a parent object.

- Encapsulation: Enclosing an object's data and functionality inside of it.

### 3. Inheritance

When it comes to inheritance, JavaScript only has one construct: objects. Each object has a private property which holds a link to another object called its prototype. That prototype object has a prototype of its own, and so on until an object is reached with null as its prototype. By definition, null has no prototype, and acts as the final link in this prototype chain.

Nearly all objects in JavaScript are instances of Object which sits on the top of a prototype chain.

[Inheritance and the prototype chain](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Inheritance_and_the_prototype_chain)

### 4. Prototypes

Constructors vs Prototypes

    Constructors:

    Once an instance is created, it no longer has a connection to the class or other instances.

    Prototype:

    Gives you the power to control many instances after creation
    Is more memory efficient because it removes duplication

hasOwnProperty

    Objects have a built-in method called 'hasOwnProperty' that tells you if a method is defined on an instance itself or one of its parent prototypes.

extends keyword

    The extends keyword is used to create a child class of another class (parent). The child class inherits all the methods from another class.

super() method

The super keyword is used to access and call functions on an object's parent.

    When used in a constructor, the super keyword appears alone and must be used before the this keyword is used. The super keyword can also be used to call functions on a parent object.

### 5. Modularization

ES6 provides us with a syntax for encapsulating our code in modules. We will revisit this extensively when we get to React.js, for now skip down to the node section.

This provides several significant benefits including:

- avoids naming conflicts
- removes global variables
- better control over scope
- better control over 3rd party libraries
- logical load order
- faster tests

Modules consist of export and import statements

    export is used to designate that a function, object, or primitive will be used outside of the given file (or module)

    import is used to bring in functions, objects, or primitives that have been exported from another external file or module.

You can designate one default export per module. That export does not have to be named specifically when importing, however others need to be imported by name.

    Use wildcard * to import all exports from a module

[What about node?](https://coursework.vschool.io/node-module-patterns/)

Many different modularization patterns can arrise within the Node.js ecosystem. One of the main things to know/remember, which will help you immensely as you're trying to understand these different patterns, is that whatever you set module.exports equal to in one file is the thing that will get pulled in when you require() from another file.

### 6. React

REACT DEV TOOLS -> has everyone installed it? If not lets do that now

React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes.

Declarative views make your code **more predictable** and easier to debug.

React is component-based, meaning you can build **encapsulated** components that manage their own state, then compose them to make complex UIs.

Since component logic is written in JavaScript instead of templates, you can easily pass rich data through your app and keep state out of the DOM.

- Setup

CRA and how everything is connected with ReactDom.render()

- Components

Components let you split the UI into independent, reusable pieces, and think about each piece in isolation.

    2 types:

    1. Functional
    2. Class

Conceptually, components are like JavaScript functions. They accept arbitrary inputs (called “props”) and return React elements describing what should appear on the screen.

- Props

When React sees an element representing a user-defined component, it passes JSX attributes and children to this component as a single object. We call this object “props”.

- State

State is similar to props, but it is private and fully controlled by the component.

In addition to taking input data (accessed via this.props), a component can maintain internal state data (accessed via this.state). When a component’s state data changes, the rendered markup will be updated by re-invoking render().

    Internal state alows for true encapsulation and reusability.
