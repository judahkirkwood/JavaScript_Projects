var X= 12; //X set as global variable = 12//
function Add_numbers_1() {
    document.write(20 + X + "<br>");
}
function Add_numbers_2() {
    document.write(X + 120 + "<br>");
}
Add_numbers_1();
Add_numbers_2();

function Add_numbers_3() {
    var X = 8; //X set to local variable = 8//
    document.write(20 + X + "<br>");
}
function Add_numbers_4() {
    document.write(X + 125 + "<br>"); //Here X will be referencing the Global not local//
    }
Add_numbers_3();
Add_numbers_4();

function Add_numbers_5() {
    var x = 10;
    console.log(15 + x);
}
function Add_numbers_6() {
    console.log(x + 100);//console.log recognized var x undefined in "Add_numbers_6" on lines 26 and 29//
}
Add_numbers_5();
Add_numbers_6();

function get_Date() {
    if (new Date().getHours() < 12) {
    document.getElementById("Greeting").innerHTML = "How are you today?";
    }
}

var age = 30;

function get_Age() {
    if (age < 38) {
        document.write("You are younger than me." + "<br>");
    } else {
        document.write("You are older than me." + "<br>");
    }
}

get_Age();

function Age_Function() {
    Age = document.getElementById("Age").value;
    if (Age >= 38) {
        YouAre = "You are older than me!";
    }
    else {
        YouAre = "You are younger than me.";
    }
    document.getElementById("How_old_are_you?").innerHTML = YouAre;
}

function Time_Function() {
    var Time = new Date().getHours();
    var Reply;
    if (Time < 12 == Time> 0) {
        Reply = "It is morning.";
    }
    else if (Time >= 12 == Time < 18) {
        Reply = "It is afternoon.";
    }
    else {
        Reply = "It is evening.";
    }
    document.getElementById("Time_of_day").innerHTML = Reply;
}

