// Ternary Operators
document.write(Bigger = (5>1) ? "Left number is bigger":"Right number is bigger");
// Ride program
function Ride_Function() {
    var Height, Can_ride;
    Height = document.getElementById("Height").value;
    Can_ride = (Height < 52) ? "You are too short":"You are tall enough";
    document.getElementById("Ride").innerHTML = Can_ride + " to ride.";
    
}
// Vote program
function Vote_Function() {
    var Age, Can_vote;
    Age = document.getElementById("Age").value;
    Can_vote = (Age < 18) ? "You are too young":"You are old enough";
    document.getElementById("Vote").innerHTML = Can_vote + " to vote.";
    
}
// Vehicle Constructor
function Vehicle(Make, Model, Year, Color) {
    this.Vehicle_Make = Make;
    this.Vehicle_Model = Model;
    this.Vehicle_Year = Year;
    this.Vehicle_Color = Color;
}
var Jack = new Vehicle("Dodge", "Viper", 2020, "Red");
var Emily = new Vehicle("Jeep", "Trail Hawk", 2019, "White and Black");
var Erik = new Vehicle("Ford", "Pinto", 1971, "Mustard");
function myFunction() {
    document.getElementById("Keywords_and_Constructors").innerHTML =
    "Erik drives a " + Erik.Vehicle_Color + "-colored " + Erik.Vehicle_Model +
    " maufactured in " + Erik.Vehicle_Year;
}
// Nested functionById

function handleClick() {
    // Nested function
    function showMessage() {
        var paragraph = document.getElementById("Nested_Function");
        paragraph.textContent = "Nested function was called!";
    }

    // Call the nested function
    showMessage();
}

