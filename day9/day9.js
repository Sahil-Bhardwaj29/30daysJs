//Activity 1//
//Task1
document.getElementById("fun1").textContent = "hello world";
//TAsk2
let x = document.querySelector(".container");
x.style.backgroundColor = "grey";

//Activity 2//
//Task3
document.getElementById("body").innerHTML += "<div> Hello I am here </div>"
//task4
document.getElementById("list").innerHTML +=
    "<li> One Piece </li> <li> Naruto </li> <li> Bleach</li>"

//Activity 3//
//task5
let y = document.getElementById("fun1");
y.remove();
//task6
let z = document.querySelector("#list");
z.lastChild.remove();

//Activity 4//
//task7
const k = document.getElementById("img2");
k.setAttribute('src', 'https://i.pinimg.com/originals/a2/cf/1f/a2cf1fc9c4a90ac9b7c9d1306a0886ae.jpg')
//task8
const dd = document.getElementById('f');
dd.classList.add('img');
dd.classList.remove('img');
//Activity 5//
//task9
let bt1 = document.getElementById("btn1");
bt1.addEventListener('click', function () {
    let ans=document.getElementById("Ist")
    Ist.innerHTML="here is the paragraph number 1"
},false)
//task10
let bt2=document.getElementById("img2");
bt2.addEventListener('mouseover',function(){
    let ans=document.querySelector("#img2");
    ans.style.border="12px solid red"

},false)