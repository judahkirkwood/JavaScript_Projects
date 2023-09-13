function addition_Function() {
    var addition = 3 + 4;
    document.getElementById("Add").innerHTML = "3 + 4 = " + addition;
}

function subtraction_Function() {
    var subtraction = 6 - 3;
    document.getElementById("Subtract").innerHTML = "6 - 3 = " + subtraction;
}

function multiplication_Function() {
    var multiplication = 8 * 9;
    document.getElementById("Multiply").innerHTML = "8 x 9 = " + multiplication;
}

function division_Function() {
    var division = 49 / 7;
    document.getElementById("Divide").innerHTML = "49 / 7 = " + division;
}

function multiple_Function() {
    var multi = (8 + 3) * 12 / 3 -5;
    document.getElementById("Multi").innerHTML = "8 + 3, x 12, &divide 3, - 5 = " + multi;
}

function modulus_Operator() {
    var remainder = 29 % 7;
    document.getElementById("Modulus").innerHTML = "When you divide 29 by 7 you have a remainder of: " + remainder;
}

function negation_Operator() {
    var x = 10;
    document.getElementById("Negative").innerHTML = -x;
}

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log(getRandomInt(1, 6)); // Output: a random integer between 1 and 6

var y = 6;
y--;
document.write(y);

var y = 6;
y++;
document.write(y);

window.alert(Math.random() * 100);

console.log(Math.PI);

console.log(Math.pow(4, 7));

function my_Dictionary() {
    var Animal = {
        Species: "Dog",
        Color: "Black",
        Breed: "Labrador",
        Age: 5,
        Sound: "Bark!"
    };
    document.getElementById("Dictionary").innerHTML = Animal.Breed;
}
