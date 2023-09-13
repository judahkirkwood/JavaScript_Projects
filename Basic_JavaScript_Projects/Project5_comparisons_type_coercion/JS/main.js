document.write(typeof "Word");
//Coercion
document.write("12" + 581);
//Infinity
document.write(2E310);
//-Infinity
document.write(-3E310);
//T / F comparisons
document.write(10 > 2);

document.write(10 < 2);
//Console Log inside Developer Tools in the Browser
console.log(2 + 2);

console.log(2 > 7);
 //Comparing values
document.write(8 == 8);

document.write(9 == 2);
 //Comparing types
x = 10;
y = 10;
document.write(x===y);

a = 12;
b = 8;
document.write(a===b);
//AND Boolean
document.write(5 > 2 && 10 > 4);

document.write(5 > 10 && 10 > 4);
//OR Boolean
document.write(5 > 10 || 10 > 4);

document.write(5 > 10 || 10 > 20);

function not_Function() {
    document.getElementById("Not").innerHTML = !(20>10);
    document.getElementById("Not").innerHTML = !(5>10);
}