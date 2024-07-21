//Activity 1//
//Task1
let n = 5;
if (n == 0) {
    console.log("Zero")
}
else if (n > 0) {
    console.log("Positive number")
}
else {
    console.log("Negative number")
}
//Task2
let age = 19;
if (age >= 18) {
    console.log("Eligible for vote")
} else {
    console.log("NOT Eligible for vote")
}

//Activity 2//
//Task3
let a = 15, b = 60, c = 10;
if (a > b) {
    if (a > c) {
        console.log("a is greatest");
    } else {
        console.log("c is greatest");
    }
}
else if (b > a) {
    if (b > c) {
        console.log("b is greatest");
    } else {
        console.log("c is greatest");
    }
}

//Activity 3//
//Task4
let day = 5;
switch (day) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thrusday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunday");
        break;
}
//Task5
let Score=76;
switch (Math.floor(Score/10)) {
    case 10:
        console.log("A+");
        break;
    case 9:
        console.log("A");
        break;
    case 8:
        console.log("B");
        break;
    case 7:
        console.log("C");
        break;
    case 6:
        console.log("D");
        break;
    case 5:
        console.log("E");
        break;
    default:
        console.log("F");
        break;
}

//Activity 4//
//Task6
let num=17;
let result=num%2==0?"Even":"Odd";
console.log(result);

//Activity 5//
//Task7
let year=2024;
if(year%4==0&&(year%100!=0 || year%400==0)){
    console.log("Leap Year")
}else{
    console.log("Not a Leap Year")
}
