/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Implicit Binding, is left of the dot at call time. 
* 2. Explicit Binding tell the this what the keyword is going to be. Examples are .call, .apply, .bind.
* 3. new Binding, this in the function is bound to the new object. 
* 4. window Binding is when the this keyword is assigned to the window object. 
*

* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding
const windowEx = function() {
    console.log(this.name);
}

window.name = "Shian";
windowEx();

// Principle 2

// code example for Implicit Binding

const person = {
    name: 'Shian',
    implicitEx: function() {
        console.log(this.name);
    }
};

person.implicitEx();

// Principle 3

// code example for New Binding
const newBindEx = function(name, age) {
    this.name = name;
    this.age = age;
};

const me = new newBindEx('Shian', '28');
console.log(me);

// Principle 4

// code example for Explicit Binding
const explicitEx = function() {
    console.log(this.name);
};

const shian = {
    name: 'Shian'
}

explicitEx.call(shian);