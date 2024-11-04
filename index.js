const display = document.getElementById("display");
let lastOper = '';
let lastnum = '';
let ans = 0;
let firstCalculation = true;

function NUMBER(input) {
    
    display.value += input;
    lastnum += input; 
}

function OPERATORS(oper) {
    display.value += oper;
    lastOper = oper; 
    lastnum = '';
}

function clearDisplay() {
    display.value = "";
    lastOper = '';
    lastnum = '';
    ans = 0;
    firstCalculation = true;
}

function CALCULATE() {
   
        if (firstCalculation) {
          
            ans = eval(display.value);
            display.value = ans;
            firstCalculation = false;
        } else {
          
            let expression = ans + lastOper + lastnum;
            ans = eval(expression);
            display.value = ans;
        }
   
}

