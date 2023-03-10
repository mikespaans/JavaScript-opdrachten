let KleurenArray = ["red", "purple", "blue", "black"]

let Container = document.getElementById("container");
document.body.style.backgroundColor = "grey";

function Buttons(AantalButtons) {
    for (let i = 1; i <= AantalButtons; i++) {
        let NewButton = document.createElement("button");
        NewButton.style.backgroundColor = "green";
        NewButton.addEventListener("click", function () {
            let buttonKleur = NewButton.style.backgroundColor;
            if (buttonKleur == "green") {
                NewButton.style.backgroundColor = "red";
            }
            else {
                let IndexKleur = KleurenArray.indexOf(buttonKleur);
                if (IndexKleur == KleurenArray.length - 1) {
                    NewButton.remove();
                } else {
                    let NieuweKleur = KleurenArray[IndexKleur + 1];
                    NewButton.style.backgroundColor = NieuweKleur;
                }
            }
        });
        Container.appendChild(NewButton);
        NewButton.innerHTML = i;
        NewButton.style.width = "100px";
        NewButton.style.padding = "10px 20px";
        NewButton.style.margin = "2px";
    }
}

Buttons(30);
