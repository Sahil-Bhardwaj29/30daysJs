// Task 1
let bt1 = document.getElementById("btn1");
if (bt1) {
    bt1.addEventListener('click', function() {  
        let p12 = document.getElementById("p1");
        p12.textContent = "Paragraph has been changed";
    }, false);
}

// Task 2
let img = document.getElementById("img1");
if (img) {
    img.addEventListener('click', function() {
        img.style.border = "2px solid black"; // Set a 2px solid black border
    });
}

// Task 3
// Add your code for task 3 here
