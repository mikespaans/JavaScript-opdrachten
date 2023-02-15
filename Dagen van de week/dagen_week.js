const DaysArray = ["maandag", "dinsdag", "woensdag", "donderdag", "vrijdag", "zaterdag", "zondag"];
var AlleDagen = document.getElementById("AlleDagen");
AlleDagen.innerHTML = DaysArray;

var Werkdagen = document.getElementById("Werkdagen");
Werkdagen.innerHTML = DaysArray.slice(0,5);

var Weekend = document.getElementById("Weekend");
Weekend.innerHTML = DaysArray.slice(5,7);

var ReverseDaysArray = DaysArray.reverse();

var DagenOmgekeerd = document.getElementById("DagenOmgekeerd");
DagenOmgekeerd.innerHTML = DaysArray;

var WerkdagenOmgekeerd = document.getElementById("WerkdagenOmgekeerd");
WerkdagenOmgekeerd.innerHTML = DaysArray.slice(2,7);

var WeekendOmgekeerd = document.getElementById("WeekendOmgekeerd");
WeekendOmgekeerd.innerHTML = DaysArray.slice(0,2);