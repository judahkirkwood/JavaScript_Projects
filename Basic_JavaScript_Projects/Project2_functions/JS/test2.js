// function to calculate a sum
function calculateSum() {
    // Get values of the two inputs by IDs
    const num1 = parseFloat(document.getElementById("num1").value);
    const num2 = parseFloat(document.getElementById("num2").value);

    // Calculate the sum
    const sum = num1 + num2;

    // references the result paragraph by ID
    const resultParagraph = document.getElementById("result");

    // Display the result in the paragraph
    resultParagraph.textContent = `The sum of ${num1} and ${num2} is: ${sum}`;
}

// reference to the result paragraph element by its ID
const resultParagraph = document.getElementById("result");

// Use the isNaN function to check if a value is NaN
function checkIsNaN(value) {
    if (isNaN(value)) {
        resultParagraph.textContent = `${value} is not a number.`;
    } else {
        resultParagraph.textContent = `${value} is a number.`;
    }
}

const inputValue1 = "Hello";
const inputValue2 = 42;

checkIsNaN(inputValue1);
checkIsNaN(inputValue2);

document.getElementById("Test").innerHTML = isNaN('This is a string');
document.getElementById("Test").innerHTML = isNaN('007');

function count_To_Ten() {
    var Digit = "";
    var X = 1;
    while (X < 11) {
        Digit += "<br>" + X;
        X++;
    }
    document.getElementById("Counting_to_Ten").innerHTML = Digit;
}

var ages = [2, 10, 18, 20, 13, 15, 30];
checkAge = (age) => age >= 18;

function myFunction2() {
    document.getElementById('displayAge').innerHTML = ages.some(checkAge);
}