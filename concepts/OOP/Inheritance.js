/*
    *** Classical Inheritance vs Prototypical Inheritance ***

    ------Classical Inheritance:

    is a relationship

    Base class-> Animal
    Derived class-> Dog

    Dog is an animal

    -------Prototypical Inheritance:
    in JS every object has prototypical inheritance(except baseObject)
    
    x.__proto__

    Prototype is just a regular object
    in simple terms Prototype is just a base/ parent class.

*/

let x = {};
x.__proto__; // is the baseObject which has methods and properties. eg;, constructor(), toString()...

// __proto__ is deprecated
Object.getPrototypeOf(x);
