//function count_Function() {
//    document.getElementById("Counting").innerHTML = Count();
//    function Count() {
//        var Starting_point = 9;
//        function Plus_one() (Starting_point += 1;)
//        Plus_one();
//        return Starting_point;
//    }
//}

function handleClick() {
    // Nested function
    function showMessage() {
        var paragraph = document.getElementById("Nested_Function");
        paragraph.textContent = "Nested function was called!";
    }

    // Call the nested function
    showMessage();
}
