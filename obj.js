//normal obj
const Person={
    name:"sai",
    age:90,
    additionalDetails:{ 
        clg:"XQX",
        city:"XXQX"
    }
    
}
console.log(Person['additionalDetails']['clg'])

//object constructor
function Person(name,age){
    this.name=name;
    this.age=age;
}
const p1=new Person("sai",1);
const p2=new Perso("pooj",2);
p1.name