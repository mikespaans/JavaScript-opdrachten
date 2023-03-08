let Container = document.getElementById("container");
let ButtonArray = ["Red", "Green", "Blue"];

for (let Button of ButtonArray) {
    console.log(Button);
    let NewButton = document.createElement("button");
    NewButton.addEventListener("click", function () {
        console.log(Button);
        document.body.style.backgroundColor = Button;
    });
    Container.appendChild(NewButton);
    NewButton.style.backgroundColor = Button;
    NewButton.innerHTML = Button;
    NewButton.style.width = "100px";
    NewButton.style.padding = "10px 20px";
    NewButton.style.margin = "2px";
}

function changeColor(color) {
    console.log(color);
    document.body.style.backgroundColor = color;
}
