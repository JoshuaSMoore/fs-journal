# Application Architecture, MVC Design Pattern

**1.** What are the Pillars of Object Oriented Programming (`OOP`)?
<!-- enter you answer in the space below -->
```
encapsulation, specialization, and polymorphism
```
**2.** How would you access the `name` of the below object using the `property` variable?
```js
let staff = {
  name: "Tim",
  age: 26,
  job: "Code Monkey"
  }
let property = 'name'
```
<!-- enter you answer in the space below -->
```
staff[property]
```
**3.** What is Encapsulation?
<!-- enter you answer in the space below -->
```
It is the bundling of data, along with the method that operate on that data into a single unit.
```
**4.** What does the S stand for in the `SOLID` principles?
<!-- enter you answer in the space below -->
```
Single-responsibility Principle
```
**5.** What the difference between a `class` and an instance of a `class`?
<!-- enter you answer in the space below -->
```
class is directly communicating with the specified class, while an instance of the class allows you to communicate with the classes alias which is huge from a secuirty standpoint becasue it doesnt allow the end user to have any access to that specific class.
```
**6.** What is a `Proxy` object?
<!-- enter you answer in the space below -->
```
a proxy object acts as an intermediary between the client and the accessible object. Basically the bodyguard of the appstate.
```

**7.** What is the purpose of the `MVC` pattern?
<!-- enter you answer in the space below -->
```
The purpose of the MVC pattern is security, ensuring the end user only has access to what they should have access too, helps when it comes to orginization and ensuring you can truly pinpoint where issues stem from. And also makes sure that each function that takes places goes through a proper checks and balances system before being invoked. 
```
**8.** What is the job of the `Controller` in the `MVC` Pattern?
<!-- enter you answer in the space below -->
```
The controller contains public mthods called Action Methods, basically it handles incoming requests, retrievers necessary model data and returns the right response.
```

**9.** What is the job of the `Service` in `MVC`?
<!-- enter you answer in the space below -->
```
the business logic, it mediates communication between th econtroller and the app state which allows the controller to know what response it needs to provide the end user.
```
**10.** What is the job of the `Model` in `MVC`?
<!-- enter you answer in the space below -->
```
The models are the component that contains a set of classes that are used to represent the business data as well as contain logic to manage the business data. 
```

