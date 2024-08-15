// JS class is not object, its a template

class Person{
    constructor(Name, Age){
        this.Name = Name;
        this.Age = Age;
    }
    desp(){
        console.log(`I am ${this.Name} and ${this.Age} years old`);
    }
}

// To create a class inheritance, use the extends keyword.
class Student extends Person{
    constructor(roll, name, dept, age){
        super(name, age); // The super() method refers to the parent class.
        this.roll = roll;
        this.dept = dept;
    }
    cg(id){
        if(id > 130) console.log(` CG doesn't matter, BRO! `);
        else console.log(` I have CG , I am lifeless`);
    }
}

const Arian = new Student(115, 'Arian', 'CSE', 22);
const Labid = new Student(133, 'Labid', 'ME', 25);
Arian.desp();
Arian.cg(115);
Labid.cg(133);


// class declarations are not hoisted.