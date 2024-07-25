//Activity 1//
//Task1
var arr=[1,2,3,4,5];
console.log(arr);
//Task2
let arr2=[1,2,3,4];
console.log(arr2[0],arr2[3]);

//Activity 2//
//Task3
let arr3=[1,2,3,4,5,6];
arr3.push(3);
console.log(arr3);
//Task4
arr3.pop();
console.log(arr3);
//Task5
arr3.shift();
console.log(arr3);
//Task6
arr3.unshift(0);
console.log(arr3);

//Activity 3//
//Task7
let arr4=[0,1,2,3,4,5];
let arr5=arr4.map(double);
function double(n){
    return n*2;
}
console.log(arr5);
//Task8
let arr6=arr4.filter(even);
function even(n){
    return n%2==0
}
console.log(arr6);
//Task9
let arr7=arr4.reduce(sum);
function sum(){
    let sum=0;
    for(let i=0;i<arr4.length;i++){
        sum+=arr4[i];
    }
    return sum;
}
console.log(arr7);

//Activity 4//
//Task10
let arrr=[1,2,3,4,5];
for(let i=0;i<arrr.length;i++){
    console.log(arrr[i]);
}
//Task11
arrr.forEach(print);
function print(n){
    console.log(n);
}

//Activity 5//
//Task12
let matrix=[[1,2,3],[4,5,6],[7,8,9]];
console.log(matrix);
//Task13
console.log(matrix[1][2]);