let ParticulierTrueFalse;
const SmaakBolletjes = {
    aardbei: 0,
    chocolade: 0,
    vanille: 0,
    bakje: 0,
    hoorntje: 0,
    Slagroom: 0,
    Sprinkels: 0,
    CaramelSaus: 0
}

const Prijzen = {
    bolletjes: 0.95,
    hoorntje: 1.25,
    bakje: 0.75,
    slagroom: 0.50,
    sprinkels: 0.30,
    CaramelSaus: 0.90
}

const BonPrijzen = {
    bolletjes: 0,
    hoorntje: 0,
    bakje: 0,
    slagroom: 0,
    sprinkels: 0,
    CaramelSaus: 0,
    ToppingTotaal: 0,
    TotalePrijs: 0
}

function ParticulierOfZakelijk() {
    let Particulier_Zakelijk = prompt("bent u particulier of zakelijk? (1. particulier/2. zakelijk)");
    console.log(Particulier_Zakelijk);
    if (Particulier_Zakelijk == "1") {
        ParticulierTrueFalse = true;
        HoeveelBolletjes();
    } else if (Particulier_Zakelijk == "2") {
        ParticulierTrueFalse = false;
    } else {
        alert("U heeft geen geldige invoer gedaan, Kies 1 voor particulier en 2 voor zakelijk.");
        ParticulierOfZakelijk();
    }
}
ParticulierOfZakelijk();
// console.log(ParticulierTrueFalse);

function HoeveelBolletjes() {
    let HoeveelBolletjesAntwoord = parseInt(prompt("Hoeveel bolletjes wilt u?"));
    let CheckIfNumber = Number.isInteger(HoeveelBolletjesAntwoord);
    // console.log(CheckIfNumber);
    if (CheckIfNumber == true) {
        if (HoeveelBolletjesAntwoord < 4 && HoeveelBolletjesAntwoord > 0) {
            //bakje of hoortnje
            WelkeSmaken(HoeveelBolletjesAntwoord)
        }
        else if (HoeveelBolletjesAntwoord > 3 && HoeveelBolletjesAntwoord < 9) {
            //alleen bakje
        }
        else {
            alert("Sorry zulke grote bakken hebben we niet");
            HoeveelBolletjes();
        }

    }
    else {
        alert("U heeft geen geldige invoer gedaan, Kies een getal tussen de 1 en 8.");
        HoeveelBolletjes();
    }
}

function WelkeSmaken(AantalBolletjes) {
    for (let i = 1; i <= AantalBolletjes; i++) {
        let WelkeSmakenAntwoord = prompt(`Welke smaak wilt u voor bolletje nummer ${i}? A) Aardbei, C) Chocolade of V) Vanille?`);
        if (WelkeSmakenAntwoord == "A" || WelkeSmakenAntwoord == "C" || WelkeSmakenAntwoord == "V") {
            if (WelkeSmakenAntwoord == "A") {
                SmaakBolletjes.aardbei += 1;
                console.log(SmaakBolletjes.aardbei);
            }
            else if (WelkeSmakenAntwoord == "C") {
                SmaakBolletjes.chocolade += 1;
                console.log(SmaakBolletjes.chocolade);
            }
            else if (WelkeSmakenAntwoord == "V") {
                SmaakBolletjes.vanille += 1;
                console.log(SmaakBolletjes.vanille);
            }
        }
        else {
            alert("U heeft geen geldige invoer gedaan, Kies A voor aardbei, C voor chocolade of V voor vanille.");
            i = i - 1;
            // WelkeSmaken(AantalBolletjes);
        }
    }
    BakjeOfHoorntje(AantalBolletjes);
}

function BakjeOfHoorntje(AantalBolletjes) {
    let BakjeOfHoorntjeAntwoord = prompt(`Wilt u deze ${AantalBolletjes} in een bakje of een hoorntje? (1. bakje/2. hoorntje)`);
    if (BakjeOfHoorntjeAntwoord == "1") {
        //bakje
        SmaakBolletjes.bakje += 1;
        WelkeToppings(AantalBolletjes);
    }
    else if (BakjeOfHoorntjeAntwoord == "2") {
        //hoorntje
        SmaakBolletjes.hoorntje += 1;
        WelkeToppings(AantalBolletjes);
    }
    else {
        alert("U heeft geen geldige invoer gedaan, Kies 1 voor bakje en 2 voor hoorntje.");
        BakjeOfHoorntje();
    }
}

function WelkeToppings(AantalBolletjes) {
    let WelkeToppingsAntwoord = prompt("Wilt u nog toppings? (1. ja/2. nee)");
    if (WelkeToppingsAntwoord == "1") {
        for (let i = 1; i <= AantalBolletjes; i++) {
            let WelkeToppingsAntwoord = prompt(`Welke topping wilt u voor bolletje nummer ${i}? A) Slagroom, C) Sprinkels of V) Caramel saus?`);
            if (WelkeToppingsAntwoord == "A" || WelkeToppingsAntwoord == "C" || WelkeToppingsAntwoord == "V") {
                if (WelkeToppingsAntwoord == "A") {
                    SmaakBolletjes.Slagroom += 1;
                    console.log(SmaakBolletjes.Slagroom);
                }
                else if (WelkeToppingsAntwoord == "C") {
                    SmaakBolletjes.Sprinkels += 1;
                    console.log(SmaakBolletjes.Sprinkels);
                }
                else if (WelkeToppingsAntwoord == "V") {
                    SmaakBolletjes.CaramelSaus += 1;
                    console.log(SmaakBolletjes.CaramelSaus);
                }
            }
            else {
                alert("U heeft geen geldige invoer gedaan, Kies A voor Slagroom, C voor Sprinkels of V voor Caramel saus.");
                i = i - 1;
                // WelkeSmaken(AantalBolletjes);
            }
        }
        NogMeerBestellen();
    }
    else if (WelkeToppingsAntwoord == "2") {
        //nee
        NogMeerBestellen();
    }
    else {
        alert("U heeft geen geldige invoer gedaan, Kies 1 voor ja en 2 voor nee.");
        WelkeToppings();
    }
}

function NogMeerBestellen() {
    let NogMeerBestellenAntwoord = prompt("Wilt u nog meer bestellen? (1. ja/2. nee)");
    if (NogMeerBestellenAntwoord == "1") {
        //ja
        ParticulierOfZakelijk();
    }
    else if (NogMeerBestellenAntwoord == "2") {
        //nee
        // console.log(SmaakBolletjes);
        ParticulierBonnetje();
    }
    else {
        alert("U heeft geen geldige invoer gedaan, Kies 1 voor ja en 2 voor nee.");
        NogMeerBestellen();
    }
}



function PrijzenUitrekenen() {
    BonPrijzen.bolletjes = SmaakBolletjes.aardbei * Prijzen.bolletjes;
    BonPrijzen.bolletjes += SmaakBolletjes.chocolade * Prijzen.bolletjes;
    BonPrijzen.bolletjes += SmaakBolletjes.vanille * Prijzen.bolletjes;
    BonPrijzen.hoorntje = SmaakBolletjes.hoorntje * Prijzen.hoorntje;
    BonPrijzen.bakje = SmaakBolletjes.bakje * Prijzen.bakje;
    BonPrijzen.slagroom = SmaakBolletjes.Slagroom * Prijzen.slagroom;
    BonPrijzen.sprinkels = SmaakBolletjes.Sprinkels * Prijzen.sprinkels;
    BonPrijzen.CaramelSaus = SmaakBolletjes.CaramelSaus * Prijzen.CaramelSaus;
    BonPrijzen.ToppingTotaal = BonPrijzen.slagroom + BonPrijzen.sprinkels + BonPrijzen.CaramelSaus;
    BonPrijzen.TotalePrijs = BonPrijzen.bolletjes + BonPrijzen.hoorntje + BonPrijzen.bakje + BonPrijzen.ToppingTotaal;
    console.log(BonPrijzen);
}

function ParticulierBonnetje() {
    PrijzenUitrekenen();
    let ParticulierBonnetjeAntwoord = prompt("Wilt u een bonnetje? (1. ja/2. nee)");
    if (ParticulierBonnetjeAntwoord == "1") {
        //ja
        // console.log(SmaakBolletjes);
        console.log('---------["Papi Gelato"]---------')
        if (SmaakBolletjes.bakje > 0) {
            console.log("bakje : ", BonPrijzen.bakje);
        }
        if (SmaakBolletjes.hoorntje > 0) {
            console.log("hoorntje : ", BonPrijzen.hoorntje);
        }
        if (BonPrijzen.ToppingTotaal > 0) {
            console.log("Topping : ", BonPrijzen.ToppingTotaal);
        }
        if (BonPrijzen.bolletjes > 0) {
            console.log("bolletjes : ", BonPrijzen.bolletjes);
        }
        if (BonPrijzen.TotalePrijs > 0) {
            console.log("Totaal : ", BonPrijzen.TotalePrijs);
        }

    }
    else if (ParticulierBonnetjeAntwoord == "2") {
        //nee
        // console.log(SmaakBolletjes);
        return;
    }
    else {
        alert("U heeft geen geldige invoer gedaan, Kies 1 voor ja en 2 voor nee.");
        ParticulierBonnetje();
    }
}

function HoeveelLiter() {
    let HoeveelLiterAntwoord = prompt("Hoeveel liter wilt u bestellen?");
    if (Number.isInteger(HoeveelLiterAntwoord) == true) {
        //ja
        SmakenLiters(HoeveelLiterAntwoord);

    }
    else {
        alert("U heeft geen geldige invoer gedaan, Kies een getal.");
        HoeveelLiter();
    }
}

const ZakelijkSmaken = {
    aardbei: 0,
    chocolade: 0,
    vanille: 0,
}

function SmakenLiters(AantalLiters) {
    for (let i = 0; i < AantalLiters; i++) {
        let WelkeSmakenAntwoord = prompt("Welke smaken wilt u toevoegen? (A. Aardbei, C. Chocolade, V. Vanille)");
        if (WelkeSmakenAntwoord == "A") {
            ZakelijkSmaken.aardbei += 1;
            console.log(ZakelijkSmaken.aardbei);
        }
        else if (WelkeSmakenAntwoord == "C") {
            ZakelijkSmaken.chocolade += 1;
            console.log(ZakelijkSmaken.chocolade);
        }
        else if (WelkeSmakenAntwoord == "V") {
            ZakelijkSmaken.vanille += 1;
            console.log(ZakelijkSmaken.vanille);
        }
        else {
            alert("U heeft geen geldige invoer gedaan, Kies A voor Aardbei, C voor Chocolade of V voor Vanille.");
            i = i - 1;
            // WelkeSmaken(AantalBolletjes);
        }
    }
    ZakelijkBonnetje();
}

function ZakelijkBonnetje() {
    let AantalLiters = ZakelijkSmaken.aardbei + ZakelijkSmaken.chocolade + ZakelijkSmaken.vanille;
    let AantalLitersPrijs = AantalLiters * 9.80;
    console.log('---------["Papi Gelato"]---------')
    console.log(`${AantalLiters}liter : `, AantalLitersPrijs);
}