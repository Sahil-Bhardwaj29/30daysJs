const user ={
    username:"Sahil",
    id:121,

    welcomeMessage: function(){
        console.log(`${this.username},welcome!`)
        console.log(this)
    }
}
user.welcomeMessage()
console.log(this)

function chai(){
    console.log(this)//global object
}
chai()

//Arrow function ()=>{}
const chaii=()=>{
    console.log(this)//{}
}
chaii()
const addTwo=(num1,num2)=>(num1+num2)//no return statement req

//Immediately Invoked Function Expressions
//to remove global scope pollution
(function fun(){
    console.log("Hello")
})();     // (no return case)(call function)

 // fasly value
 // false,0,-0,BigInt 0n,"",NaN,null,undefined

 //truthy values
 //"0","false"," ",[],{},function(){}

 //Object.keys() --->array of keys

//Nullish coalscing operator(??)
let var1;
// var1=null ?? 10
// var1 = undefined?? 15
var1=null ?? undefined ?? 1 
console.log(var1)