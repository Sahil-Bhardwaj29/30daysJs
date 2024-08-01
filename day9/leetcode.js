//Create Hello world Function//
function fun(){
    console.log("Hello world");
}
function createHelloWorld(){
    return fun();
}
createHelloWorld();

//Counter//
let n=4;
let call=["call","call","call"];
function counter(n,call){
    let a=[];
    for(let i=0;i<call.length;i++){
        a[i]=n;
        n++;
    }
    return a;
}
let result =counter(n,call);
console.log(result);