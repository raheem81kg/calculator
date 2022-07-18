const operandBtns = document.querySelectorAll(".operand");
const operatordBtns = document.querySelectorAll(".operator");

const clearBtn = document.querySelector(".clear");
const equalBtn = document.querySelector(".equal");

const display = document.querySelector(".display");

let storedNumber = "";
let sign = "";

// for deleting display text after pressing a sign
let active = false;

// clicking operands rules
operandBtns.forEach((button) => {
    button.addEventListener("click", () => {
        if (active) {
            display.textContent = "";
            active = false;
        }
        if (display.textContent.includes(".") && button.dataset.button === ".") {
            return;
        } else if (display.textContent === "0" && button.dataset.button === "0") {
            display.textContent = "0";
        } else if (display.textContent === "0" && !(button.dataset.button === "0" || button.dataset.button === ".")) {
            display.textContent = button.dataset.button;
        } else {
            display.textContent += button.dataset.button;
        }
    });
});

// clicking operations

operatordBtns.forEach((button) => {
    button.addEventListener("click", () => {
        if (sign && !storedNumber) {
            sign = button.dataset.button;
            active = true;
        } else if (storedNumber) {
            if (sign == "/" && display.textContent == 0) {
                display.textContent = "Error";
            } else if (sign == "+") {
                display.textContent = +storedNumber + +display.textContent;
                storedNumber = display.textContent;
                sign = "+";
                active = true;
            } else if (sign == "-") {
                display.textContent = +storedNumber - +display.textContent;
                storedNumber = display.textContent;
                sign = "-";
                active = true;
            } else if (sign == "*") {
                display.textContent = +storedNumber * +display.textContent;
                storedNumber = display.textContent;
                sign = "*";
                active = true;
            } else if (sign == "/") {
                display.textContent = +storedNumber / +display.textContent;
                storedNumber = display.textContent;
                sign = "/";
                active = true;
            }
        } else if (sign == "") {
            storedNumber = display.textContent;
            sign = button.dataset.button;
            active = true;
        }
    });
});

// equal
equalBtn.addEventListener("click", () => {
    if (sign == "/" && display.textContent == 0) {
        display.textContent = "Error";
    } else if (sign === "+") {
        display.textContent = +storedNumber + +display.textContent;
        storedNumber = "";
        sign = "";
        active = false;
    } else if (sign === "-") {
        display.textContent = +storedNumber - +display.textContent;
        storedNumber = "";
        sign = "";
        active = false;
    } else if (sign === "*") {
        display.textContent = +storedNumber * +display.textContent;
        storedNumber = "";
        sign = "";
        active = false;
    } else if (sign === "/") {
        display.textContent = +storedNumber / +display.textContent;
        storedNumber = "";
        sign = "";
        active = false;
    } else {
        return;
    }
});

// clearing display
clearBtn.addEventListener("click", () => {
    display.textContent = "0";
    storedNumber = "";
    sign = "";
});

// operator transition
