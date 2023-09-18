function full_Sentence() { //Concatenate method
    var string_1 = "These are ";
    var string_2 = "multiple words ";
    var string_3 = "turned into ";
    var string_4 = "a complete sentence.";
    var whole_sentence = string_1.concat(string_2, string_3, string_4);
    document.getElementById("Concatenate").innerHTML = whole_sentence;
}
//slice method
function slice_Method() {
    var Sentence = "Today I am working, while watching my baby girl and football.";
    var Section = Sentence.slice(26,47);
    document.getElementById("Slice").innerHTML = Section;
}
//lower case to UPPER CASE
function UpperCase_Method() {
    var Lower = "this used to be in lower case!";
    var Upper = Lower.toUpperCase();
    document.getElementById("UpperCase").innerHTML = Upper;
}
//string method
function string_Method() {
    var X = 234;
    document.getElementById("Number_to_Strings").innerHTML = X.toString();
}
//precision method
function precision_Method() {
    var Y = 12648.124658795463152164897;
    document.getElementById("Precision").innerHTML = Y.toPrecision(9);
}
//toFixed method returns specified number of decimal places to string
function toFixed_Method() {
    var num = 9876543210.0123456789;
    document.getElementById("toFixed").innerHTML = num.toFixed(4);
}