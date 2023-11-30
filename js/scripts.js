var dog = $("#Doggo")
var cat = $("#Cat")
var quoteh1 = $("#quotes")
var meow = document.getElementById("meow")
var bark = document.getElementById("bark")
var index = 0;
var quotes = [
    "Home Sweet Home",
    "Live Laugh Love",
    "Home is where the heat is",
    "Home is where the heart is",
    "Home is where the wifi is",
    "Home is where the pants aren't",
    "Home is where the pants are"]

var colors = ["#FAF8D4", "#EBDCCB", "#C3BAAA", "#91818A", "#B2A3B5"]

quoteh1.on("click", function () {
    //increase value of index by 1
    index++;
    //check to see if we are at the end of the array
    if (index == quotes.length) {
        //if we are at end of array start back to 0
        index = 0;
    }
    //update the DOM
    $(this).text(quotes[index])
})

dog.hide()
cat.hide()

$("#Chair-seat").on("click", function () {
    dog.fadeToggle(1000)
})

$("#Pot").on("click", function () {
    cat.fadeToggle(1000)
})

dog.on("click", function () {
    bark.play()
    console.log("barking!")
    $("#Doggo .cls-8").css("fill", "cyan")
})
cat.on("click", function () {
    meow.play()
    console.log("meowing!")
})

$(document).on("keypress", function (e) {
    //console.log(e)
    if (e.key == "f" || e.key == "F") {
        console.log(e.key)
        $("#Chair-seat, #Doggo").css("transform", "translate(-100px,-500px) rotate(-10deg)")
    } else if (e.key == "l") {
        $("#Chair-seat, #Doggo").css("transform", "translate(0,0px) rotate(0deg)")
    } else if (e.key == " ") {
        var rand = Math.floor(Math.random()*colors.length)
        console.log(rand)
        $("body").css("background-color", colors[rand])
    }

})