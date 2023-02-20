var promptNumber = prompt("voer een getal in. ")
var PromptArray = []
var Numbers = 0;

function CreatePyramide(){
    for (let i = 1; i <= promptNumber; i++){
        PromptArray.push(i);
    }

    const PyramideHeader = document.createElement("h1")
    const PyramideArrayText = document.createElement("p")
    const PyramideText = document.createElement("p")

    PyramideHeader.innerHTML = "Pyramide Oplopend";
    PyramideArrayText.innerHTML = "Array : " + PromptArray;

    for (let i = 0; i < PromptArray.length; i++){
        Numbers = ""; // reset Numbers variable as a string
        for (let AddNumber = 0; AddNumber <= i; AddNumber++) {
            Numbers += PromptArray[AddNumber].toString(); // add each number to the string
        }
        PyramideText.innerHTML += Numbers + "<br>";
    }
    
    document.body.appendChild(PyramideHeader);
    document.body.appendChild(PyramideArrayText);
    document.body.appendChild(PyramideText)
}

CreatePyramide();