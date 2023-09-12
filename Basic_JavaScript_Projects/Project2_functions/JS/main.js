// Defining the JavaScript function that uses the += operator
function concatenateStrings() {
    // Initialize an empty string
    let result = "";

    // Concatenating strings using += 
    result += "...and here";
    result += "...we... GO!";
    
    // Get a reference to the output paragraph element by its ID
    const outputParagraph = document.getElementById("outputParagraph");

    // Display the concatenated string in the paragraph
    outputParagraph.textContent = "Result: " + result;
}