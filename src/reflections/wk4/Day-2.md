## What are the three states of a Promise?
* Pending: initial state, before it succeeds or fails, Resolving: completed Promise, Rejected: Failed Promise

## How do promises seek to resolve the issues of "callback hell"?
* If we handle multiple async operations with promises instead of just using callbacks we are able to chain callbacks rather then just passing them. It also results in cleaner looking code which is easier to read, sort through, and resolve any potential issues.

## What is the difference between .then() and .catch()?

* The then() method is called after a promise is resolved, which allows us to decide what we are going to do with the resolved promise. The catch() method is used for any promises that are rejected, it will just back to the catch and if submitted correctly will give us a specific message so we know the outcome of the promise. 