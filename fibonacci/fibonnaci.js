var btn = document.createElement("button");
btn.innerHTML = "start";
document.body.appendChild(btn);

var Number1 = 1;
var Number2 = 0;

console.log("test start");

function FibonnaciCalculate(Number1, Number2){
    console.log(Number2, Number1);
    var Paragraph = document.getElementById("Text")
    Paragraph.innerHTML += Number2 + "<br>";
    Paragraph.innerHTML += Number1 + "<br>";
    

    Number2 = Number1 + Number2;
    Number1 = Number2 + Number1;
    // console.log(Number1, Number2);
    return [Number1, Number2]
}

function CalculateRepeat(Number1, Number2){
    console.log("test");
    var NewNumbers = FibonnaciCalculate(Number1, Number2)
    for (let i = 0; i < 9; i++){
        NewNumbers = FibonnaciCalculate(NewNumbers[0], NewNumbers[1]); 
    }

}
btn.onclick = function() {
    CalculateRepeat(Number1, Number2);
}
