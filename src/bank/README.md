I am trying to demonstrate some basic testing concepts. I used to think that it was dumb to mock child components. I think I wanted to join Team (Kent C) Dodds, which I believe
has a non-mocking plank in its platform.

But what if you're testing a wrapper with some pretty complicated components in it? Like, you're writing tests for the parent component and some of the child components make network calls and show/hide things based on the responses. The child components were in separate packages and had their own tests.

So from simplest to simple:
DeadSimple
WithProps
MockFetch

TODO: if some other service or shim or something handles the network calls, maybe saves some state, how do you mock that in the client of the service?

I added a "test:debug": "react-scripts --inspect-brk test --runInBand --no-cache" which lets you debug unit tests in chrome. Just open:
chrome://inspect/#devices

Mocking dependent classes.

See the MockingDataService folder. I show how to mock a dependent class the way the (jest docs show)[https://jestjs.io/docs/es6-class-mocks#calling-jestmock-with-the-module-factory-parameter], with the module factory parameter in MockingClassMethod.jsx.

You can also do it with jest.spyOn, but you can't just:
jest.spyOn(MyDependencyClass, "utilityFxn1")

You have to go:
jest.spyOn(MyDependencyClass.prototype, "utilityFxn1")
