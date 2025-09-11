let calculation = "";

// catch all elements having class "digit-button"
const digitButtons = document.querySelectorAll('.digit-button');
digitButtons.forEach(button =>{
  button.addEventListener('click', ()=> {
    press(button.innerText);
  });
});

// catch all elements having class "operand-button"
const operandButton = document.querySelectorAll('.operand-button');
operandButton.forEach(button =>{
  button.addEventListener('click', ()=>{
    press(button.innerText);
  });
});
function press(something){
  // document.getElementById('display').innerText += something;
  // // this above thing only changes what u SEE on screen..., it doesnt change calculation
  // // variable. so we have to update calculation variable 

  calculation += something;

  document.getElementById('display').innerText = calculation;
}

const backspaceButton = document.getElementById('backspace-button');
backspaceButton.addEventListener('click', backspace);
function backspace(){
  calculation = calculation.slice(0, -1);
  document.getElementById('display').innerText = calculation;
}


const acButton = document.getElementById('all-clear-button');
acButton.addEventListener('click', clear);
function clear(){
  calculation = "";
  document.getElementById('display').innerText = calculation;

}

// finding specific element on page by its unique id.
const solveButton = document.getElementById('solve-button');

solveButton.addEventListener('click', solve); // event listener waits for click
// after click it will run function, in this case solve function.

function solve(){
  let result = eval(calculation);
  document.getElementById('display').innerText = result;

  calculation = result.toString();
}
