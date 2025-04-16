const display = document.getElementById('display');


function appendToDisplay(value) {
    display.value += value;
}

function Delete(){
    display.value = display.value.slice(0, -1);
}

// Clear the display content
function clearDisplay() {
    display.value = '';
}

// Calculate and show the result
function calculate() {
    try {
        // Use eval to evaluate the expression in the display
        display.value = eval(display.value);
    } catch (error) {
        display.value = 'Error';
    }
}