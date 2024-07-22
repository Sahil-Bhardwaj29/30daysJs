//Activity 1//
//Task1
for(let i=1;i<=10;i++){
    console.log(i);
}
//Task2
for(let i=1;i<=10;i++){
    console.log(i*5);
}

//Activity 2//
//Task3
let n=1;
let sum=0;
while(n<=10){
    sum+=n;
    n++;
}
console.log(sum);
//Task4
let m=10;
while(m>0){
    console.log(m);
    m--;
}

//Activity 3//
//Task5
let a=1;
do{
    console.log(a);
    a++;
}while(a<=5);
//Task6
let num=6;
let fact=1;
do{
    fact=num*fact;
    num--;
}while(num>=1);
console.log(fact);

//Activity 4//
//Task7

for(let i=1;i<=5;i++){
    let pattern='';
    for(let j=1;j<=i;j++){
        pattern += "* ";
    }
    console.log(pattern);
}
//Activity 5//
//Task8
for(let i=1;i<=10;i++){
    if(i==5) continue;
    else{
        console.log(i);
    }
}
//Task9
for(let i=1;i<=10;i++){
    if(i==7) break;
    else{
        console.log(i);
    }
}