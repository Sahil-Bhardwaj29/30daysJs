//Activity 1//
var a=10;
var b=5;
console.log(a+b);//15
console.log(a-b);//5
console.log(a*b);//50
console.log(a/b);//2
console.log(a%b);//0

//Activity 2//
var n=10;
n+=5;
console.log(n);//15
var m=5;
m-=5;
console.log(m);//0

//Activity 3//
var n1=10;
var n2=15;
console.log(n1>n2);//false
console.log(n1<n2);//true
console.log(n1>=n2);//false
console.log(n1<=n2);//true
console.log(n1==n2);//false
console.log(n1===n2);//false

//Activity 4//
var m1=5;
var m2=15;
if(m1>10 && m2>10){
    console.log("Both conditons are satisfied")
}else{
    console.log("Both conditions are not satisfied")//output
}
if(m1>10 || m2>10){
    console.log("Atleast one conditon is satisfied")//output
}else{
    console.log("Both conditions are not satisfied")
}
if(!(m2>m1)){
    console.log("m1 is greater");
}else{
    console.log("m2 is greater");//output
}

//Activity 5
var num=20;
var result= num>0?"positive":"negative";
console.log(result);

///Feature Request///

/*Arithmetic operations script*/
var a=10;
var b=5;
console.log(a+b);//15
console.log(a-b);//5
console.log(a*b);//50
console.log(a/b);//2
console.log(a%b);//0

/*comparision and logical operators script*/
var m1=5;
var m2=15;
if(m1>10 && m2>10){
    console.log("Both conditons are satisfied")
}else{
    console.log("Both conditions are not satisfied")//output
}
if(m1>10 || m2>10){
    console.log("Atleast one conditon is satisfied")//output
}else{
    console.log("Both conditions are not satisfied")
}

/*ternary operator script */
var num=20;
var result= num>0?"positive":"negative";
console.log(result);
