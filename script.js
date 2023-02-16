//your code here

let button = document.getElementById("swap");

button.addEventListener("click", function() {
    let div = document.getElementById("app");
    if(div.className=="day") {
        div.className = "night";
        button.className = "button_night";
    } else {
        div.className = "day";
        button.className = "button_day";
    }
})

