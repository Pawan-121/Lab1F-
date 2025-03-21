let display = document.getElementById("display");

function appendValue(value) {
    display.value += value;
}

function clearDisplay() {
    display.value = "";
}

function calculateResult() {
    try {
        display.value = eval(display.value);
    } catch {
        display.value = "Error";
    }
}

function calculateSquareRoot() {
    try {
        display.value = Math.sqrt(eval(display.value));
    } catch {
        display.value = "Error";
    }
}

function calculateSquare() {
    try {
        let num = eval(display.value);
        display.value = num * num;
    } catch {
        display.value = "Error";
    }
}

function calculateSin() {
    try {
        let num = eval(display.value);
        display.value = Math.sin(num).toFixed(6);
    } catch {
        display.value = "Error";
    }
}

function calculateCos() {
    try {
        let num = eval(display.value);
        display.value = Math.cos(num).toFixed(6);
    } catch {
        display.value = "Error";
    }
}

function calculateTan() {
    try {
        let num = eval(display.value);
        display.value = Math.tan(num).toFixed(6);
    } catch {
        display.value = "Error";
    }
}
