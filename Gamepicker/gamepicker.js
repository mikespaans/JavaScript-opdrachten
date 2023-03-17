import games from './games.json' assert { type: 'json' };
let Allgames = games;
let gamesArray = Array.from(Allgames);
let gamesGenreArray = Array.from(Allgames);
let CheckboxArray = [];

let WinkelWagenDiv = document.getElementById('WinkelWagen');
WinkelWagenDiv.style.visibility = "hidden";



let GameListSelect = document.getElementById('GamesListSelect');

let GameList = document.getElementById('GameList');

let Dropdown = document.getElementById('DropDown');

let genres = Array.from(new Set(games.flatMap(game => game.genres)));

for (let genre of genres) {
    let DropdownOption = document.createElement('option');
    DropdownOption.value = genre;
    DropdownOption.text = genre;
    Dropdown.appendChild(DropdownOption);
}

let GenreButton = document.getElementById('GenreButton');
GenreButton.addEventListener('click', function () {

    let SelectedGenre = Dropdown.options[Dropdown.selectedIndex].value;

    gamesGenreArray = gamesGenreArray.filter(game => game.genres.includes(SelectedGenre));
    DisplayGames(gamesGenreArray);
    console.log(CheckboxArray)
});



let InputField = document.getElementById('InputField');
let InputButton = document.getElementById('InputButton');

InputButton.innerText = 'Ok';
InputButton.addEventListener('click', function () {
    let Inputvalue = InputField.value;

    gamesArray = gamesArray.filter(game => game.name.includes(Inputvalue));
    DisplayGames(gamesArray);
});






DisplayGames(games)




function DisplayGames(Games) {
    if (Games.length == 0) {
        Games = games;
    }
    GameList.innerHTML = '';
    for (let game of Games) {
        let GameDivParent = document.createElement('div');
        GameDivParent.id = "GameDivParent"
        let GameItemDiv = document.createElement('div');
        GameItemDiv.id = "GameItemDiv"
        let GameListItemName = document.createElement('h3');
        let GameItemInfo = document.createElement('p');

        let GameCheckbox = document.createElement('input');
        GameCheckbox.type = 'checkbox';
        GameCheckbox.addEventListener('click', function () {
            CheckboxArray.push(game);
        });


        GameListItemName.innerText = game.name;
        GameItemInfo.innerText = `price; ${game.price}, genre: ${game.genres}, rating: ${game.rating}, critic: ${game.critic}`;

        GameDivParent.appendChild(GameCheckbox);
        GameItemDiv.appendChild(GameListItemName);
        GameItemDiv.appendChild(GameItemInfo);
        GameDivParent.appendChild(GameItemDiv);
        GameList.appendChild(GameDivParent);
    }
}


let BerekenKnop = document.createElement('button');
BerekenKnop.addEventListener('click', function () {
    console.log(GameListSelect)
    GameListSelect.style.display = "none";
    WinkelWagenDiv.style.visibility = "visible";
    Bereken(CheckboxArray);
});

BerekenKnop.innerText = 'Bereken';
GameListSelect.appendChild(BerekenKnop);




function Bereken(GameArray) {
    let TotalPrice = 0;
    WinkelWagenDiv.innerHTML = '';
    WinkelWagenDiv.innerHTML = '<h1>Winkelwagen</h1>';
    for (let game of GameArray) {
        let WinkelWagenItem = document.createElement('h1');
        let ItemPrice = document.createElement('p');
        let Checkbox = document.createElement('input');
        let GameItemDiv = document.createElement('div');
        let GameDivParent = document.createElement('div');
        GameItemDiv.id = "GameItemDiv"
        GameDivParent.id = "GameDivParent"
        Checkbox.type = 'checkbox';


        Checkbox.addEventListener('click', function () {
            let index = GameArray.indexOf(game);
            GameArray.splice(index, 1);
            Bereken(GameArray);
        });

        WinkelWagenItem.innerText = game.name;
        ItemPrice.innerText = `price: ${game.price}`;
        GameItemDiv.appendChild(WinkelWagenItem);
        GameItemDiv.appendChild(ItemPrice);
        GameDivParent.appendChild(Checkbox);
        GameDivParent.appendChild(GameItemDiv);

        WinkelWagenDiv.appendChild(GameDivParent);
        TotalPrice += game.price;
    }

    let Hr = document.createElement('hr');
    WinkelWagenDiv.appendChild(Hr);

    let TotalpriceDisplay = document.createElement('p');
    TotalpriceDisplay.innerText = `Total price: ${TotalPrice.toFixed(2)}`;
    WinkelWagenDiv.appendChild(TotalpriceDisplay);


}