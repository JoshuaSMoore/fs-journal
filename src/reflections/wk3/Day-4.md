## What problems does the Observer Pattern seek to solve?
* One-to-many, one-way, and event driven data binding. This comes up frequently when there are too many elements that must be in sync. 

## What are the three mechanisms of the observer pattern?

* The Event Observer, The Subscribe Method, The Unsubscribe Method.

## Review the code generated from the bcw-template and reflect on the proxy objects from yesterday, and your understanding of the observer pattern today. With this knowledge, explain how the magic of the bcw-template uses these two concepts to manage and update the dom.
* The beautiful aspect of the bcw-template is that it feels incredibly secure. Even if it feels confusing for a while until implementation is comfortable you can still tell that you have to have all pieces connected and working in sync or nothing will end up working. The proxy is the bodyguard that basically takes a photo copied state of your app and allows changes to be made to the actual app state if everything is passed through correctly. Especially when it comes with the communication to the dom. I can 100% see why this structure is huge for businesses to ensure not only security but that they have complete control over what the end user has access to vs the developer side. It is a beautiful checks and balances system.

Sporting Good Store: https://joshuasmoore.github.io/Sporting-Good-Store/