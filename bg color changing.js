var color = ["blue", "green", "yellow", "red", "pink", "violet", "crimson", "grey", "lightgray", "skyblue"]

function on() {


    var t = Math.floor((Math.random() * 10) + 1);
    document.body.style.backgroundColor = color[t];


}