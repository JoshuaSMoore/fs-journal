# Intro to JavaScript

**1.** Which keywords are used to declare a variable in JavaScript?
<!-- enter you answer in the space below -->
```
let, const, var
```
**2.** What is the definition of a function?
<!-- enter you answer in the space below -->
```
A function does something that you declare. 
```
**3.** What are the `SOLID` principles?
<!-- enter you answer in the space below -->
```
Single responsibility principle
Open/Closed Principle
Liskov Substitution Principle
Interface Segregation Principle
Dependency Inversion Principle
```
**4.** Given this array: 
```js
let fruit = ['apple', 'banana', 'pineapple',  'orange', 'strawberry']
``` 
What index is the pineapple's current position? How do you know?
<!-- enter you answer in the space below -->
```
fruit[2]
```
**5.** With these two objects: 
```js
let you = { name:"You", hair: true, friends: [] }
let them = { name:"Them", hair: false, friends: [] }
```
how would you .push the `them` object into the `you` object's array of friends?
<!-- enter you answer in the space below -->
```
you.push(them)
```

**6.** Give an example of a JavaScript `Conditional`:
<!-- enter you answer in the space below -->
```
if(age >= 21)
console.log("Can Drink")
```
**7.** In the `for loop` below, what is the name of the piece belongs inside the empty "______" space? What would you put here to increase `i` by one on every iteration?
```js
for ( let i = 0; i < arr.length; _______ ) {
  //...
```
<!-- enter you answer in the space below -->
```
operator, you would use i++ to increment by 1 each loop, i-- to go down 1 each loop.
```
**8.** What does the `DOM` acronym stand for? Which file is first accessed to render the `DOM`?
<!-- enter you answer in the space below -->
```
Document Object Model. 
document.
```

**9.** What are the `9` ECMAScript types as defined by MDN?
<!-- enter you answer in the space below -->
```
Primitives – string, number, Boolean, undefined, NaN, null
References – Array, Objects

```
**10.** When it comes to functions or methods, what is the difference between a `parameter` and an `argument`?
<!-- enter you answer in the space below -->
```
arguments are an Array-like object accessible inside functions that contains the values of the arguments passed to that function.

A parameter is a named variable passed into a function. Parameter variables are used to import arguments into functions.

So Parameters are the names listed in the functions definition, while the argument is the actual value passed to the function.
```
**11.** What is the difference between a `primitive` value and a `reference` value?
<!-- enter you answer in the space below -->
```
a primitive primitive value is data that is not an object and has no methods. Number is set in stone and doesnt change.

Reference is just for lack of better terms referencing the value of the primitive. Changing the value of the veriable will never change the original primitive value, it just difines a new primitive or object.


```