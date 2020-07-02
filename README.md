# React Redux with hooks CRUD example

## Stage I Example

An in-memory React Redux CRUD application. The purpose of this code is to demonstrate how to
design Redux without the drawbacks. No Redux plumbling code, pure functions, loosely coupled components
with SOLID design principles.

For a fully functional API CRUD client / server application with extra features please see Stage II at
https://github.com/PaulCaruana/react-hooks-global-reducer-server.

### Background and design

This purpose of this code is to show how to
develop a simple to use CRUD React application and counter logic without 
the pitfalls Redux. The following constraints and design practices 
have been employed:

- Using hooks for both Global and local state with no need for Providers 
or passing state to unnecessary components.
- No Redux boilerplate code, no React classes and no HOC are required. 
Just pure functional components.
- Separation of data from presentation layer. This means that containers 
and components are Redux agnostic and contain no Redux statements (such as 'dispatch') .
- Provide the advantages of Redux design ensuring processing is predictable in addition to
enforcing immutability which makes code efficient and maintainable.
- Debugging in development, give to ability to test code with Redux time travel browser extension as well as logging
Redux state to console.
- As per MVC framework separate view, business logic and data access.
This design principle promotes separation of concerns that makes code easier to understand and test.
- Promote re-use by providing tested generic / abstract and encapulated classes that can be overridden 
and extended.
- Above all, the code must be designed and structured to be easy to develop and maintained.

## Prerequisites
 
Please ensure that the latest version of NPM and NodeJs are installed 
 
## Installing
 
```
yarn 
```
 
## Run application
 
```
yarn start
```
 
 ## Running the tests
 ```
 yarn test
 ```
 
 ## Author
 
 **Paul Caruana** 
 
 ## Demo
 
 TBA
