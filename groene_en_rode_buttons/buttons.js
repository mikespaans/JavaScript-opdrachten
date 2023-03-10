let Container = document.getElementById("container");
document.body.style.backgroundColor = "grey";

function Buttons(AantalButtons) {
    for (let i = 1; i <= AantalButtons; i++) {
        let NewButton = document.createElement("button");
        NewButton.style.backgroundColor = "green";
        NewButton.addEventListener("click", function () {
            NewButton.style.backgroundColor = "red";
        });
        Container.appendChild(NewButton);
        NewButton.innerHTML = i;
        NewButton.style.width = "100px";
        NewButton.style.padding = "10px 20px";
        NewButton.style.margin = "2px";
    }
}

Buttons(30);