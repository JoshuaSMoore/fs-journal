## What are the two common operations that we will set in the handler?
* get and set

## What do you have to make sure you are doing with every Get to insure the value does not become undefined?
You have to have made a proxyin order for the get to have some custom logic to pull from. You also have to make sure you include two parameters the object iteself and the property being accessed.

## What are some of the benefits of the proxy object that we are using in our structure for applications?
* Security is the main one, if something is not passed through the proxy correctly it will always be blocked and not allowed to take place. This is huge for now allowing the end user to make changes to the code which can break it. Traps also are huge here because its built in intelligence that can ensure the code is bing used correctly and that you as a developer have passed all information correctly and securely through your application. 

GregsList: https://joshuasmoore.github.io/fall21-gregslist/