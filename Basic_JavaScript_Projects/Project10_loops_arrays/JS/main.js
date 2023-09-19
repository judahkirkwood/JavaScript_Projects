function Call_Loop() {
    var Digit = "";
    var X = 1;
    while (X < 16) {
        Digit += "<br>" + X;
        X++;
    }
    document.getElementById("Loop").innerHTML = Digit;
}

function my_String_Length() {
    var MyString = "This is my string!";
    var StringLength = MyString.length;
        document.getElementById("StringLength").innerHTML = "String Length: " + StringLength;
}

var Instruments = ["Guitar", "Drums", "Keyboard", "Bass", "Percussion", "Lead Guitar", "Organ"];
var Content = "";
var Y;
function for_Loop() {
    for (Y = 0; Y < Instruments.length; Y++) {
        Content += Instruments[Y] + "<br>";
    }
    document.getElementById("List_of_Instruments").innerHTML = Content;
}

function array_Function() {
    var Car_Picture = [];
    Car_Picture[0] = "parked";
    Car_Picture[1] = "driving";
    Car_Picture[2] = "speeding";
    Car_Picture[3] = "stopping";
    document.getElementById("Array").innerHTML = "In this picture, the car is " +
        Car_Picture[2] + ".";
}

function constant_function() {
    const Guitar_Amp = {type:"Tube Amp", brand:"Vox", color:"black"};
    Guitar_Amp.color = "red";
    Guitar_Amp.price = "$1200";
    document.getElementById("Constant").innerHTML = "The cost of the " + Guitar_Amp.type + " amp made by " + Guitar_Amp.brand + " is: " + Guitar_Amp.price;
}

function let_Function() {
var digi = 25;
{
let digi = 17;
document.getElementById("Let").textContent = digi;
}
}

function calculateSum() {
    var e = 12;
    var f = 26;
    var result = e + f;

    document.getElementById("Result").textContent = "The sum is: " + result;

    return result;
}

let car = {
    make: " Dodge",
    model: " Durango",
    year: " 2017",
    color: " white",
    description : function() {
        return "The car is a " + this.year + this.color + this.make + this.model;
    }
};
document.getElementById("Car_Object").innerHTML = car.description() + ".";

var outputList = document.getElementById("Loop_break");


for (var i = 1; i <= 10; i++) {
    
    var listItem = document.createElement("li");
    listItem.textContent = "Item " + i;
    outputList.appendChild(listItem);

    if (i === 5) {
        break;
    }
}

var outputList = document.getElementById("Continue_Loop");

for (var i = 1; i <= 10; i++) {
    
    if (i % 2 === 0) {
        continue;
    }

    
    var listItem = document.createElement("li");
    listItem.textContent = "Item " + i;
    outputList.appendChild(listItem);
}