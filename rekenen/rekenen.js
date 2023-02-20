var arrayEen = [1,2,3,4,5,6,7,8,9,10];
var arrayTwee = [2,4,6,8,10,12,14,16,18,20];

function Optellen(List1, List2){
    const OptellenH2 = document.createElement("h2");
    const OptellenText = document.createElement("p");

    OptellenH2.innerHTML = "Optellen van de twee arrays zijn:"

    for (let i = 0; i < 10; i++){
        console.log(i);
        var OptellenResultaat = List1[i] + List2[i];
        OptellenText.innerHTML += List1[i] + " + " + List2[i] + " = ";
        OptellenText.innerHTML += OptellenResultaat;
        OptellenText.innerHTML += "<br>"
    }

    
    document.body.appendChild(OptellenH2);
    document.body.appendChild(OptellenText);

}

function Aftrekken(List1, List2){
    const AftrekkenH2 = document.createElement("h2");
    const AftrekkenText = document.createElement("p");

    AftrekkenH2.innerHTML = "Aftrekken van de twee arrays zijn:"

    for (let i = 0; i < 10; i++){
        console.log(i);
        var OptellenResultaat = List1[i] + List2[i];
        AftrekkenText.innerHTML += List1[i] + " - " + List2[i] + " = ";
        AftrekkenText.innerHTML += OptellenResultaat;
        AftrekkenText.innerHTML += "<br>"
    }

    
    document.body.appendChild(AftrekkenH2);
    document.body.appendChild(AftrekkenText);
}

function Vermenigvuldigen(List1, List2){
    const VermenigvuldigenH2 = document.createElement("h2");
    const VermenigvuldigenText = document.createElement("p");

    VermenigvuldigenH2.innerHTML = "Vermenigvuldigen van de twee arrays zijn:"

    for (let i = 0; i < 10; i++){
        console.log(i);
        var OptellenResultaat = List1[i] + List2[i];
        VermenigvuldigenText.innerHTML += List1[i] + " * " + List2[i] + " = ";
        VermenigvuldigenText.innerHTML += OptellenResultaat;
        VermenigvuldigenText.innerHTML += "<br>"
    }

    
    document.body.appendChild(VermenigvuldigenH2);
    document.body.appendChild(VermenigvuldigenText);
}

function Delen(List1, List2){
    const DelenH2 = document.createElement("h2");
    const DelenText = document.createElement("p");

    DelenH2.innerHTML = "Delen van de twee arrays zijn:"

    for (let i = 0; i < 10; i++){
        console.log(i);
        var OptellenResultaat = List1[i] + List2[i];
        DelenText.innerHTML += List1[i] + " - " + List2[i] + " = ";
        DelenText.innerHTML += OptellenResultaat;
        DelenText.innerHTML += "<br>"
    }

    
    document.body.appendChild(DelenH2);
    document.body.appendChild(DelenText);
}

Optellen(arrayEen, arrayTwee);
Aftrekken(arrayEen, arrayTwee);
Vermenigvuldigen(arrayEen, arrayTwee);
Delen(arrayEen, arrayTwee);
