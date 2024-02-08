let maat = ["hertta", "risti", "ruutu", "pata"];

let kortit = [];
let pelajaankortti = [];
let jakajankortti = [];

const  luoKorttipakka = () => {

for (i = 0; i < maat.length; i++) {
    for (numero = 1; numero <= 13; numero++) {
        kortit.push([maat[i], numero]);
    }
}
};


document.getElementById('uudenpeli').addEventListener("click", function() {
    kortit = [];
    pelajaankortti = [];
    jakajankortti = [];

    document.getElementById('jaa').addEventListener("click", jaa);
    document.getElementById('nosta-kortti').addEventListener("click", nuostapelajaankortti);

    document.querySelectorAll(".kortti").forEach(function(kortti) {
        kortti.innerHTML = "";
    })
    document.getElementById("jakajan-pisteet").innerHTML = "";
    luoKorttipakka();
    kortit.sort(function(a, b){return 0.5 - Math.random()});

    nuostapelajaankortti();
    nuostapelajaankortti();
});

const haeMaaSymboli = (maa) => {
    switch(maa) {
        case "hertta":
        return "&hearts;";
        break;
        case "risti":
        return "&clubs;";
        break;
        case "ruutu":
        return "&diams;";
        break;
        case "pata":
        return "&spades;";
        }
};

const nuostajakajankortti = () => {
    if (jakajankortti.length == 5) {
        return;
    }
    let kortti = kortit.pop();
    jakajankortti.push(kortti);
    let pituus = jakajankortti.length;
    document.getElementById("jakaja"+ pituus).innerHTML = `
    <span id="ensimmainen-numero">${kortti[1]}</span>
    <span id="maa">${haeMaaSymboli(kortti[0])}</span>
    <span id="toinen-numero">${kortti[1]}</span>
    `;
    if (kortti[0] == "hertta" || kortti[0] == "ruutu" ) {
        document.getElementById("jakaja"+ pituus).classList.add("punainen");
        document.getElementById("jakaja"+ pituus).classList.remove("musta");

    } else  {
        document.getElementById("jakaja"+ pituus).classList.add("musta");
        document.getElementById("jakaja"+ pituus).classList.remove("punainen");
    }

    if (jakajankortti.length >= 2) {
        let pisteet = 0;
        for (let kortti of jakajankortti) {
            pisteet += kortti[1];
        }

        let pisteet1 = 0;
        for (let kortti of pelajaankortti) {
            pisteet1 += kortti[1];
        }

        if (pisteet > 21) {
            document.getElementById("jakajan-pisteet").innerHTML = `Pelaaja voitti`
            document.getElementById('jaa').removeEventListener("click", jaa);
            document.getElementById('nosta-kortti').removeEventListener("click", nuostapelajaankortti);
        } else if (pisteet == 21 || jakajankortti.length == 5) {
            document.getElementById("jakajan-pisteet").innerHTML = `Pelaaja häviää`
            document.getElementById('jaa').removeEventListener("click", jaa);
            document.getElementById('nosta-kortti').removeEventListener("click", nuostapelajaankortti);
        } else if (pisteet > pisteet1 ) {
            document.getElementById("jakajan-pisteet").innerHTML = `Pelaaja häviää`
            document.getElementById('jaa').removeEventListener("click", jaa);
            document.getElementById('nosta-kortti').removeEventListener("click", nuostapelajaankortti);
        } else {
            nuostajakajankortti();
        }
    }
};

const nuostapelajaankortti = () => {
    if (pelajaankortti.length == 5) {
        return;
    }
    let kortti = kortit.pop();
    pelajaankortti.push(kortti);
    let pituus = pelajaankortti.length;
    document.getElementById("pelaajankortit"+ pituus).innerHTML = `
    <span id="ensimmainen-numero">${kortti[1]}</span>
    <span id="maa">${haeMaaSymboli(kortti[0])}</span>
    <span id="toinen-numero">${kortti[1]}</span>
    `;
    if (kortti[0] == "hertta" || kortti[0] == "ruutu" ) {
        document.getElementById("pelaajankortit"+ pituus).classList.add("punainen");
        document.getElementById("pelaajankortit"+ pituus).classList.remove("musta");

    } else  {
        document.getElementById("pelaajankortit"+ pituus).classList.add("musta");
        document.getElementById("pelaajankortit"+ pituus).classList.remove("punainen");
    }

    if (pelajaankortti.length >= 2) {
        let pisteet = 0;
        for (let kortti of pelajaankortti) {
            pisteet += kortti[1];
        }
        
        if (pisteet > 21) {
            document.getElementById("jakajan-pisteet").innerHTML = `Pelaaja häviää`
            document.getElementById('jaa').removeEventListener("click", jaa);
            document.getElementById('nosta-kortti').removeEventListener("click", nuostapelajaankortti);
        } else if (pisteet == 21 || pelajaankortti.length == 5) {
            document.getElementById("jakajan-pisteet").innerHTML = `Pelaaja voitti`
            document.getElementById('jaa').removeEventListener("click", jaa);
            document.getElementById('nosta-kortti').removeEventListener("click", nuostapelajaankortti);
        } 
    }
};

const jaa = () => {
    document.getElementById('jaa').removeEventListener("click", jaa);
    document.getElementById('nosta-kortti').removeEventListener("click", nuostapelajaankortti);
    nuostajakajankortti();
    nuostajakajankortti();


}






