var Tafels = [2, 4, 6, 8];

function TafelsBerekenen(TafelList){
    for (let i = 0; i < TafelList.length; i++){
        const TafelHeader = document.createElement("H1")
        const TafelText = document.createElement("p")

        TafelHeader.innerHTML = "Tafel van " + TafelList[i] + ":"
        
        document.body.appendChild(TafelHeader);
    
        for (let Number = 1; Number < 11; Number++){
            var Result = Number * TafelList[i];
            TafelText.innerHTML += Number + " + " + TafelList[i] + " = ";
            TafelText.innerHTML += Result;
            TafelText.innerHTML += "<br>";

        }
        document.body.appendChild(TafelText);
    }
}

TafelsBerekenen(Tafels);