var data = [
    "Ale",
    "Alingsås",
    "Alvesta",
    "Aneby",
    "Arboga",
    "Arjeplogs",
    "Arvidsjaur",
    "Arvika",
    "Askersunds",
    "Avesta",
    "Bengtsfors",
    "Bergs",
    "Bjurholms",
    "Bjuvs",
    "Bodens",
    "Bollebygds",
    "Bollnäs",
    "Borgholms",
    "Borlänge",
    "Borås",
    "Botkyrka",
    "Boxholms",
    "Bromölla",
    "Bräcke",
    "Burlövs",
    "Båstads",
    "Danderyds",
    "Dorotea",
    "Eda",
    "Ekerö",
    "Eksjö",
    "Emmaboda",
    "Enköpings",
    "Eskilstuna",
    "Eslövs",
    "Essunga",
    "Fagersta",
    "Falkenbergs",
    "Falköpings",
    "Falu",
    "Filipstads",
    "Finspångs",
    "Flens",
    "Forshaga",
    "Färgelanda",
    "Gagnefs",
    "Gislaveds",
    "Gnesta",
    "Gnosjö",
    "Gotlands",
    "Grums",
    "Grästorps",
    "Gullspångs",
    "Gällivare",
    "Gävle",
    "Göteborgs",
    "Götene",
    "Habo",
    "Hagfors",
    "Hallsbergs",
    "Hallstahammars",
    "Halmstads",
    "Hammarö",
    "Haninge",
    "Haparanda",
    "Heby",
    "Hedemora",
    "Helsingborgs",
    "Herrljunga",
    "Hjo",
    "Hofors",
    "Huddinge",
    "Hudiksvalls",
    "Hultsfreds",
    "Hylte",
    "Håbo",
    "Hällefors",
    "Härjedalens",
    "Härnösands",
    "Härryda",
    "Hässleholms",
    "Höganäs",
    "Högsby",
    "Hörby",
    "Höörs",
    "Jokkmokks",
    "Järfälla",
    "Jönköpings",
    "Kalix",
    "Kalmar",
    "Karlsborgs",
    "Karlshamns",
    "Karlskoga",
    "Karlskrona",
    "Karlstads",
    "Katrineholms",
    "Kils",
    "Kinda",
    "Kiruna",
    "Klippans",
    "Knivsta",
    "Kramfors",
    "Kristianstads",
    "Kristinehamns",
    "Krokoms",
    "Kumla",
    "Kungsbacka",
    "Kungsörs",
    "Kungälvs",
    "Kävlinge",
    "Köpings",
    "Laholms",
    "Landskrona",
    "Laxå",
    "Lekebergs",
    "Leksands",
    "Lerums",
    "Lessebo",
    "Lidingö",
    "Lidköping",
    "LillaEdets",
    "Lindesbergs",
    "Linköpings",
    "Ljungby",
    "Ljusdals",
    "Ljusnarsbergs",
    "Lomma",
    "Ludvika",
    "Luleå",
    "Lunds",
    "Lycksele",
    "Malmö",
    "Malung-Sälens",
    "Malå",
    "Mariestads",
    "Marks",
    "Melleruds",
    "Mjölby",
    "Mora",
    "Motala",
    "Mullsjö",
    "Munkedals",
    "Munkfors",
    "Mölndals",
    "Mönsterås",
    "Mörbylånga",
    "Nacka",
    "Nora",
    "Norbergs",
    "Nordanstigs",
    "Nordmalings",
    "Norrköpings",
    "Norrtälje",
    "Norsjö",
    "Nybro",
    "Nykvarns",
    "Nyköpings",
    "Nynäshamns",
    "Nässjö",
    "Ockelbo",
    "Olofströms",
    "Orsa",
    "Orust",
    "Osby",
    "Oskarshamns",
    "Ovanåkers",
    "Oxelösunds",
    "Pajala",
    "Partille",
    "Perstorps",
    "Piteå",
    "Ragunda",
    "Robertsfors",
    "Ronneby",
    "Rättviks",
    "Sala",
    "Salems",
    "Sandvikens",
    "Sigtuna",
    "Simrishamns",
    "Sjöbo",
    "Skara",
    "Skellefteå",
    "Skinnskattebergs",
    "Skurups",
    "Skövde",
    "Smedjebackens",
    "Sollefteå",
    "Sollentuna",
    "Solna",
    "Sorsele",
    "Sotenä",
    "Staffanstorps",
    "Stenungsunds",
    "Stockholms",
    "Storfors",
    "Storumans",
    "Strängnäs",
    "Strömstads",
    "Strömsunds",
    "Sundbybergs",
    "Sundsvalls",
    "Sunne",
    "Surahammars",
    "Svalövs",
    "Svedala",
    "Svenljunga",
    "Säffle",
    "Säters",
    "Sävsjö",
    "Söderhamns",
    "Söderköpings",
    "Södertälje",
    "Sölvesborgs",
    "Tanums",
    "Tibro",
    "Tidaholms",
    "Tierps",
    "Timrås",
    "Tingsryds",
    "Tjörns",
    "Tomelilla",
    "Torsby",
    "Torsås",
    "Tranemo",
    "Tranås",
    "Trelleborgs",
    "Trollhättans",
    "Trosa",
    "Tyresö",
    "Täby",
    "Töreboda",
    "Uddevalla",
    "Ulricehamns",
    "Umeå",
    "Upplands-Bro",
    "Upplands-Väsby",
    "Uppsala",
    "Uppvidinge",
    "Vadstena",
    "Vaggeryds",
    "Valdemarsviks",
    "Vallentuna",
    "Vansbro",
    "Vara",
    "Varbergs",
    "Vaxholms",
    "Vellinge",
    "Vetlanda",
    "Vilhelmina",
    "Vimmerby",
    "Vindelns",
    "Vingåkers",
    "Vårgårda",
    "Vänersborgs",
    "Vännäs",
    "Värmdö",
    "Värnamo",
    "Västerviks",
    "Västerås",
    "Växjö",
    "Ydre",
    "Ystads",
    "Åmåls",
    "Ånge",
    "Åre",
    "Årjängs",
    "Åsele",
    "Åstorps",
    "Åtvidabergs",
    "Älmhults",
    "Älvdalens",
    "Älvkarleby",
    "Älvsbyns",
    "Ängelholms",
    "Öckerö",
    "Ödeshögs",
    "Örebro",
    "Örkelljunga",
    "Örnsköldsviks",
    "Östersunds",
    "Österåkers",
    "Östhammars",
    "ÖstraGöinge",
    "Överkalix",
    "Övertorneå"
];

/*
data.forEach(element => {
    var e = document.createElement('option');
    e.id = element + " kommun";
    e.innerHTML = element + " kommun";
    e.value = element + " kommun"

    document.getElementById('kommun').appendChild(e);
});
*/

let price = 0;
let price1 = 0;
let price2 = 0;

let kommun = "";

document.getElementById('kommun').addEventListener('change', (e) => {
    var select = document.getElementById('kommun');
    kommun = select.options[select.selectedIndex].text;
});

document.getElementById('submit').addEventListener('click', (e) => {
    if (document.getElementById('rum').value == 0 || document.getElementById('boarea').value == 0 || document.getElementById('tomtarea').value == 0 || kommun == "") {
        alert("error");
    } else {
        fetchData();
    }
});


async function fetchData() {
    document.getElementById('result').innerHTML = '<img src="./loader.gif" width="150" alt="">';
    let rum = document.getElementById('rum').value;
    let boarea = document.getElementById('boarea').value;
    let tomtarea = document.getElementById('tomtarea').value;

    let url = `https://localhost:7059/WeatherForecast?Kommun=${kommun}&BoArea=${boarea}&Rum=${rum}&TomtArea=${tomtarea}`;

    console.log(url);
    await fetch(url)
        .then(response => response.json())
        .then((data) => {
            console.log(data);
            if (parseInt(data[0].pris) > 1000000) {
                price = Math.round((parseInt(data[0].pris) / 1000000) * 100) / 100;

                price1 = Math.round((price * 0.95)*100)/100;
                price2 = Math.round((price * 1.05)*100)/100;

            } else {
                price = data[0].pris;
            }
            setTimeout(() => {
                document.getElementById('result').innerHTML = `<div class="result"><h2>${price1}m - ${price2}m kr</h2> <h5>(${data[0].pris} kr)</h5></div>`;
            }, 700);

        });

}
