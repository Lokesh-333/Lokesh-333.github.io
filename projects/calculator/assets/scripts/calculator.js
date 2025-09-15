// this is to get the prev calculation, if refreshed the page
let calculation = localStorage.getItem('calculation') || '';
updateDisplay(calculation);

// this is to update calculation
let updateCalculationList = document.querySelectorAll('.js-update-calculation');
updateCalculationList.forEach((currentItem)=>{
  currentItem.addEventListener('click', ()=>{
    calculation += currentItem.innerHTML;
    updateDisplay(calculation);
  });
});

// this clears everything
let allClear = document.querySelector('.js-all-clear-button');
allClear.addEventListener('click', ()=>{
  calculation = '';
  updateDisplay(calculation);
});

// this deletes one step back
let deleteButton = document.querySelector('.js-delete-button');
deleteButton.addEventListener('click', ()=>{
  calculation = calculation.slice(0, calculation.length-1);
  updateDisplay(calculation);
});

// this is to change the sign
let signChange = document.querySelector('.js-sign-change-button');
signChange.addEventListener('click', ()=>{
  calculation = `-(${calculation})`;
  updateDisplay(calculation);
});

// this is to evaluate the calculation
// eval() -> returns a number, we have to convert it back to string
let evaluate = document.querySelector('.js-evaluate-button');
evaluate.addEventListener('click', ()=>{
  calculation = String(eval(calculation));
  updateDisplay(calculation);
});

// this function updates the calculation to the display
function updateDisplay(calculation){
  let display = document.querySelector('.js-display');
  display.innerHTML = calculation;
  localStorage.setItem('calculation', calculation);
}
