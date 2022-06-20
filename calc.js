let result;
let conVert = [];
let btn = document.querySelectorAll('button');
console.log(btn);


//let display = document.getElementsByClassName('display');
let display = document.querySelector('.display');
// console.log(display);
// conVert =parseInt(btn.innerHTML);
    display.innerHTML = 0.1;
//});

function modifyDisplay(num) {
    conVert = parseInt(btn.innerHTML);
    display = conVert;
}




let num = btn.addEventListener("click", function() {
    modifyDisplay();
});
