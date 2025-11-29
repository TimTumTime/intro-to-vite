To Copy into React Learn.doc later:

Hooks have a couple of rules with them. Every hook has the naming convention "use[hook name]", like useState, and useEffect. Just like state variables, they must be invoked within a component's body. With hooks, we shouldn't try to call them conditionally, like in a 'if' statement (this will be covered later). Also another thing is that the setter functions of these hooks, don't immediately update the state (also covered later). If you're still confused, refer to the React documentation with hooks.

You might be tempted to go back to a previous React project and add in state variables, but keep in mind the use cases of state. Whilst state is a pretty common feature in a lot of projects, if our data is not going to change, or if our data is going to be passed in externally, then the answer will be "No, you don't need to implement state". You can get by just fine with just using props. No need to overcomplicate it.

Batching

In React, "batching" refers to the process of grouping multiple state updates into a single update. This can be useful in certain cases because it allows React to optimize the rendering of your components by minimizing the number of DOM updates that it has to perform.

By default, React uses a technique called "auto-batching" to group state updates that occur within the same event loop into a single update. This means that if you call the state update function multiple times in a short period of time, React will only perform a single re-render for all of the updates.

React 18 ensures that state updates invoked from any location will be batched by default. This will batch state updates, including native event handlers, asynchronous operations, timeouts, and intervals.
