//Activity 1//
//Task1
let Name ="Sahil";
let age=18;
let message=`my Name is ${Name} I am ${age} years old`;
console.log(message);
//Task2
let multistr=`
hello my name is Sahil
I am a student at NIT kkr`
console.log(multistr)

//Activity2//
//Task3
let arr=[1,2,3,4,5,6];
let [a,b, ...args]=arr;
console.log(a,b);
//Task4
let book={
    title:"Money bank",
    author:"Sahil",
    Year:2024
};
let {author,title,...args2}=book;
console.log(author,title);

//Activity 3//
//task5
let arr1=[1,2,3];
let arr2=[...arr1,4,5,6];
console.log(arr2);
//task6
function Sum(...args3){
    let sum=0;
    for(let x of args3){
        sum+=x;
    }
    return sum
}
console.log(Sum(2,3,5,6));

//Activity 4//
//task7
function product(a,b=2){
    return a*b;
}
let res=product(5,7);
let res2=product(5);
console.log(res,res2)

//Activity 5//
//task8
const object={
    name(m){
        this.name=m;
    },
    Age(a){
        this.age=a;
    },
}
object.name("UnKnown");
object.Age(99);
console.log(object);

//task9
let var1="Name";
let var2="age";
const obj={
    [var1]:"Sahil",
    [var2]:18
};
console.log(obj);
