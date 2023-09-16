var sent1 = "This is the first half "; // Giving variable 1 a string value//
var sent2 = "and this is the other half."; // Giving variable 2 a string value//
var result = sent1 + sent2; // The variable result will be a function that adds var1 to var2// 
document.write(result); // The result of this function will be written//
// Text Button//
function My_First_Function() {
    var str = "This is the button text!";
    
    document.getElementById("Button_Text").innerHTML = str;

}
// Button alert //
const buttonElement = document.getElementById("myButton");
const paragraphElement = document.getElementById("myButton");
buttonElement.addEventListener("click", function() {
    alert("Button clicked!");
// Button Styling //
});

buttonElement.addEventListener("mouseover", function() {

    buttonElement.style.backgroundColor = "lightblue";

});

buttonElement.addEventListener("mouseout", function() {
    buttonElement.style.backgroundColor = "";

});
// Concatenating sentences //
function myFunction() {
    var sentence = "I am learning";
    sentence += "a lot from this book!";
    document.getElementById("Concatenate").innerHTML = sentence;
}
