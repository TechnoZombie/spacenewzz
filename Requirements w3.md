## Introduction

The React Saga continues and over the next two weeks the goal is to go deeper into it and create another SPA web app but with a twist. Unlike the previous projects where you had a reference to guide you, this time you're starting from scratch. You will start with a list of strict requirements but with a great freedom to design the app as you like. You can explore your creativity or simply “clone“ an already existing website that you like. It’s up to you.

Another big challenge for this project is, asynchronous actions. You'll be integrating with a REST API. This means you'll be learning how to handle data fetching and managing state updates asynchronously.

## Content

-   React Library
    -   Functional Components vs Class Components
    -   Component Lifecycle
    -   React Hooks
    -   Asynchronous Programming

## Goals

-   What are the differences between Functional Components and Class Components?
-   What is the Component Lifecycle?
    -   What are the lifecycle methods available?
-   What are React hooks?
    -   What is the purpose of the `useEffect` hook?
    -   How does `useEffect` relates to the lifecycle methods?

## Resources

-   React:
    -   https://react.dev/
    -   https://www.youtube.com/watch?v=dpw9EHDh2bM
    -   http://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/
-   Project:

    -   Space Flight News Project

        -   Api: https://spaceflightnewsapi.net/
            -   Version 4 Docs: https://api.spaceflightnewsapi.net/v4/docs/
        -   Requirements:

            -   Functional:

                -   Consume Rest API
                -   Pagination
                -   Search Field
                -   Ordering News

                    -   by recent
                    -   by older

                -   Show News Cards List
                -   Light/Dark Theme Switch

            -   Layout
                -   Header
                -   Main Section
                -   Footer


## Findings

Functional Components and Class Components are two ways to define React components. Functional Components are simpler and easier to understand, written as plain JavaScript functions. They are called stateless components because they don't have their own state or lifecycle methods. Class Components, on the other hand, are more complex, written as classes extending from React.Component, and they have their own state and lifecycle methods.

// Functional Component
const Welcome = (props) => <h1>Hello, {props.name}</h1>;

// Class Component
class Welcome extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}</h1>;
  }
}

2. The Component Lifecycle refers to the various stages a React component goes through during its existence, including initialization, mounting, updating, and unmounting.

2.1. Lifecycle methods available include:

- Mounting: constructor(), static getDerivedStateFromProps(), render(), componentDidMount()

- Updating: static getDerivedStateFromProps(), shouldComponentUpdate(), render(), getSnapshotBeforeUpdate(), componentDidUpdate()

- Unmounting: componentWillUnmount()

3. React Hooks are functions that allow you to use state and other React features without writing a class. They let you use state and other React features in functional components.

3.1. The useEffect hook is used to perform side effects in functional components, like fetching data, adding event listeners, or manipulating the DOM. It combines the functionality of componentDidMount, componentDidUpdate, and componentWillUnmount.

3.2. useEffect relates to lifecycle methods as follows:

- componentDidMount: Called after the component is rendered to the DOM for the first time. In useEffect, if the dependency array is empty, the effect is run only once, similar to componentDidMount.

useEffect(() => {
  console.log('Component mounted');
}, []);

.componentDidUpdate: Called after the component is updated in the DOM. In useEffect, if the dependency array is not empty, the effect is run after every render and update, similar to componentDidUpdate.

useEffect(() => {
  console.log('Component updated');
});

- componentWillUnmount: Called right before the component is removed from the DOM. In useEffect, you can return a cleanup function that runs before the component is unmounted, similar to componentWillUnmount.

useEffect(() => {
  console.log('Component mounted');

  return () => {
    console.log('Component unmounted');
  };
}, []);

By utilizing these hooks and lifecycle methods, you can manage the state and behavior of your React components effectively.