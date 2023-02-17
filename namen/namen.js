const NameArray = [];
function CreatePrompt(){
    console.log("test");
    var PromptInput = prompt("Hoeveel namen wilt u in de array stoppen? (minimaal 3).")
    for(let i = 0; i < PromptInput; i++){
        var NameToAdd = prompt("voer een naam in")
        NameArray.push(NameToAdd);
    }
    console.log(NameArray);
    var FilledNamesH2 = document.getElementById("FilledNamesH2");
    FilledNamesH2.innerHTML = "De ingevoerde namen in de array zijn: "

    var FilledNamesText = document.getElementById("FilledNamesText");
    FilledNamesText.innerHTML = NameArray

    var NamesReversedH2 = document.getElementById("NamesReversedH2");
    NamesReversedH2.innerHTML = "De ingevoerde namen in de array in omgekeerde volgorde zijn:"

    var NamesReversedText = document.getElementById("NamesReversedText");
    NamesReversedText.innerHTML = NameArray.reverse()
}
CreatePrompt()