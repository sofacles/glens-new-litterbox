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
