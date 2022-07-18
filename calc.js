// set global variables
let num1;
let num2;
let operator;
let operand;
let result;
let prevFunc = "FALSE";
let solved = "FALSE";
let funcSet ="FALSE";
let numBtns = document.querySelectorAll('.pad');
let funcBtns = document.querySelectorAll('.func_pad');
let display = document.querySelector('.display') ;
let operators =['CLR','DIV','MUL','DOT','SUB','ADD','EQUAL'];


// get functions from buttons and write functions for functionality
// grab all the function buttons and set first number
function setFuncs() {

    for(let j =0; j < funcBtns.length; j++) {
	funcBtns[j].addEventListener("click", function() {
	    operator = operators[j];
	    if(funcSet == "TRUE") {
		
		getOp();
		operate(num1, num2, prevFunc);

	    } else {
		funcSet= 'TRUE';
		getOp();
	    }
	});
    }
}


// get the value and setup the action from the button

function getOp() {
  
    if (operator =="CLR"){
	num1;
	num2;
	display.innerHTML = 0;
	operator;
	operand;
	prevFunc = "FALSE";
	funcSet = "FALSE";
	solved = "FALSE";
    } else if(operator=="EQUAL") {
	operate(num1, num2, operand);
	funcSet = "FALSE";
    }  else {
	operand = operator;
//	num1=parseInt(display.innerHTML);
    }  
}

// get numbers from buttons as intigers

function setNums() {
    if(!result) {

    for (let i =0; i < numBtns.length; i++) {
	numBtns[i].addEventListener("click", function() {
	    if(funcSet=="TRUE") {
		num1 = parseFloat(display.innerHTML);
		num2 = parseFloat(numBtns[i].innerHTML);
		console.log(num2);
		display.innerHTML = num2;
	//	display.innerHTML += num2;
		prevFunc = operand;
		    } else {
		num1 = parseFloat(numBtns[i].innerHTML);
		if (parseFloat(display.innerHTML) != 0) {
		    display.innerHTML += num1;
		} else {
		    display.innerHTML = num1;
		}
	    }

	});
		}

    } else {
//	num1 = parseFloat(display.innerHTML);
    }
}



// access the display		

function operate(num1, num2, operand) {
    if(operand=='') {
	num1 + 0;
    }
    
    if (operand == "ADD") {
	result = num1 + num2;
        solved = "TRUE";
    } else if (operand == "SUB") {
	result = num1 - num2;
        solved = "TRUE";
    } else if (operand == "MUL") {
	result = num1 * num2;
        solved = "TRUE";
    } else if (operand == "DIV") {
	result = num1 / num2;
        solved = "TRUE";
    }
    display.innerHTML= result;
    prevFunc= operand;
    
   

    // console.log(result);
    console.log(num1);
    console.log(prevFunc);
    console.log(operator);
    console.log(num2);
    console.log(operand);
    console.log(result);
    num1 = result;
    console.log('******');
    console.log(num1);
}



// Function Calls

setNums();
setFuncs();
