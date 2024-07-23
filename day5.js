//Activity 1//
//Task1
function check(n){
    if(n%2==0) return "Even"
    else return "odd"
}
let result=check(7);
console.log(result)
//Task2
function square(m){
    return m*m;
}
let result2=square(7);
console.log(result2);

//Activity 2//
//Task3
let maximum=function(a,b){
    console.log(Math.max(a,b));
}
maximum(15,25);
//Task4
let concatenateString=function (str1,str2){
    console.log(str1+str2);
};
    concatenateString("Sahil","Sharma");

//Activity 3//
//Task5
let sum=(a,b)=>a+b;
console.log(sum(3,6));
//Task6
let checkk=(str)=>{
    for(let i=0;i<str.length;i++){
        if(str[i]=="r"){
            return true;
        }
        else return false;
    }
} 
let result3=checkk("Sahil");
console.log(result3);

//Activity 4//
//Task7
const product=(num1,num2=1)=>{
    return num1*num2;
}
console.log(product(5,3));
//Task8
const greet=(name,age=25)=>{
    console.log("Hello "+name);
}
greet("Sahil");

//Activity 5//
//Task9
const fun1=()=>{
    console.log("Hello");
}
let fun2=(fun,n)=>{
    for(let i=1;i<=n;i++){
        fun();
    }
}
fun2(fun1,3);
//Task10
const cube=(n)=>{
    return n*n*n;
}
const half=(m)=>{
    return m/2;
}
let order=(func1,func2,num)=>{
    let var1=func1(num);
    let var2=func2(var1);
    console.log(var2);
}
order(cube,half,2);