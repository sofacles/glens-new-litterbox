## What does it take to update the UI?

If you have something like

```
myComponent = () => {
    let x = 'x';
    return ( <div>
        x is {x}
          <input
            type="button"
            value="try to update x"
            onClick={() => {
              x = "y";
            }}
          />
      </div>)
}
```

The UI will not update, you need

```
const [x, setX] = useState('x');
```

for that to work.

In that improved component, when you `setX('y')` the component gets rerendered. But if you `setX`, over and over again to the same new value, it only rerenders the
first time you change it.

## Preventing unneccessary rerenders.

Let's pretend that Order is an expensive component to render. If I change the definition of Order from:

```
const Order = (order) => { ... }
```

to:

```
  const Order = memo((order) => { ... })
```

Then the component will only rerender when the reference to order gets recreated.

## Function props can cause rerenders

Wrapping a callback function in `useCallback` and then assigning that wrapped function to a child prop doesn't prevent the child (FruitValidator) from rerendering. You still need to memoize the component.

But, memoizing FruitValidator is not enough.
` FruitValidator` takes two props: a `fruit` object and a callback function. If either of those props get recreated when the parent is rerendered, FruitValidator will be rerendered along with the parent. So, the fruit object needs to be stored in a state variable and the callback function needs to be wrapped in a`useCallback`:

```
  const parentValidationFxn = useCallback((vResult) => {
    console.log(
      `the validation cb in the parent is being called with ${JSON.stringify(
        vResult
      )}`
    );
  }, []); //don't forget the empty dependency array or it won't work.  The `useCallback`` hook is called every time Parent rerenders.
```

## useMemo vs useEffect

They look like they might do the same thing: caching a value betweeen rerenders. In fact, useRef seems like it also does the same thing, but let's think about that later. [This page]|(https://www.reddit.com/r/react/comments/w56gyb/arent_useeffect_with_dependencies_and_usememo_the) has a comment about the difference, which I'll quote:

```
No they are not the same. They happen at different times and have different purposes.

The function you pass to useMemo runs during rendering to recalculate the a value when a dependency changes. The results of a useMemo calculation can be used in the current render. The useMemo function should not have side effects.

The function you pass to useEffect runs after every render in which a dependency changes. The results of a useEffect function can do thinks like manipulate the DOM independent of React, interact with other browser APIs (e.g. fetch), or trigger future renders of the component by setting state, but it can not impact the current render since it is happening after the render is already done. The useEffect function is intended specifically for side effects (hence the name).
```
