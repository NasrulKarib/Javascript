function Person(first, last, age){
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.fullName = function(){
        return this.firstName + ' ' + this.lastName;
    }
}
// This is called constructor, blue print for object
const Arian = new Person('Arian','Khan', 25);
const Abid = new Person('Abid','Hasan', 24);
const Rubel = new Person('Rubel','Islam', 26);

console.log(Abid.fullName());

/*
    Built-in JS constructors:
   String(), Number(), Boolean(), Object(), Array(), RegExp(), Function(), Date()
   ** Math() is not constructor 
*/