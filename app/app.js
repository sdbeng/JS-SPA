"use strict";

var btnplus = document.getElementById('btnplus');
var btnminus = document.getElementById('btnminus');

var resetbtn = document.getElementById('btnreset');

resetbtn.addEventListener('click', reset);
function reset(e){
	//console.log('reset button pressed');
	e.preventDefault;
		document.getElementById('firstNumber').value = '';
		document.getElementById('secondNumber').value = '';
		
}


btnplus.addEventListener('click', addition);
function addition(e){
	e.preventDefault();

	var num1Val = parseInt(document.getElementById('firstNumber').value,10) || 0;
	var num2Val = parseInt(document.getElementById('secondNumber').value,10) || 0;

	//console.log(num1Val);
	//console.log(num2Val);
	if (num1Val != "" && num2Val != "") {
		var sum = num1Val + num2Val;

		// console.log("The sum is: ",sum);
		var messageSum = num1Val + " plus " + num2Val + " equals " + sum;
		console.log("The sum is: ",messageSum);

		document.getElementById('results').innerHTML = 'the results are... ';
		document.getElementById('results').innerHTML += messageSum;

		return sum;

		
	}	else {
			alert("Please enter a number greater than zero(0)");
	}	
	

};

btnminus.addEventListener('click', subtract);
function subtract(e){
	e.preventDefault();

	var num1Val = parseInt(document.getElementById('firstNumber').value);
	var num2Val = parseInt(document.getElementById('secondNumber').value);

	if (num1Val != "" && num2Val != "") {
		var subtract = num1Val - num2Val;

		console.log("The subtract is: ",subtract);
		

		var messageSubtractor = num1Val + " minus " + num2Val + " equals " + subtract;
		console.log("The subtraction is: ",messageSubtractor);

		document.getElementById('results').innerHTML = 'the results are... ';
		document.getElementById('results').innerHTML += messageSubtractor;

		return subtract;

		
	}	else {
			alert("Please enter a number greater than zero(0)");
	}

	
};



