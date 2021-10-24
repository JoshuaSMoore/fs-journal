# C# Fundamentals


**1.** What is the purpose of a `namespace`?
<!-- enter you answer in the space below -->
```
The name of the appliction, and allows for a much easier way to basically import methods/data from other areas of the app. Instead of needing to look for a specific controller or service you are able to do Namespace.Controllers or Namespace.Services to be able to reference multiple services or controllers. 
```
**2.** What is the difference between a `class` and a `struct`?
<!-- enter you answer in the space below -->
```
Structs are value type where Classes are reference type. Structs are stored on the stack where Classes are stored on the heap as well.
```
**3.** What is the method that returns an instance of a class, yet it has no return type?
<!-- enter you answer in the space below -->
```
void
```
## Example 1
```c#
abstract class Car
{
  ...
  public virtual string Start()
  {
    return "Vroooom";
  }
}
```
**5.** In the example what is the access modifier of the `Start()` method?
<!-- enter you answer in the space below -->
```
public
```
**6.** In the example what is `string` an indication of?
<!-- enter you answer in the space below -->
```
the result of the method. 
```
**7.** In the example what is `abstract` preventing?
<!-- enter you answer in the space below -->
```
it is preventing Car from being modified in this instance.
```
**8.** In the example what is the purpose of `virtual`?
<!-- enter you answer in the space below -->
```
it is used to modify the method, so you could change the return string potentially.
```
**9.** Name four access modifiers:
<!-- enter you answer in the space below -->
```
public, private, internal, protected.
```
**10.** If you set a class or method to private, what can access it?
<!-- enter you answer in the space below -->
```
It can only be accessed within the same class or struct. 
```