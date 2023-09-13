function my_Dictionary() { //Library containing various traits of Cats
    var Cats = { // 
        Species: "Tabby",
        Color: "Brown", //color
        Breed: "European Shorthair",//breed
        Age: 7, //age
        Sound: "meow!" // sound it makes
    };
    delete Cats. Breed; // delete
    document.getElementById("Dictionary").innerHTML = Cats.Breed; //publish/show
}
