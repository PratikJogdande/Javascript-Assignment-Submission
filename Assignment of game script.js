let cards =[
    {
        Image: "https://www.pngfind.com/pngs/m/50-504321_lamborghini-aventador-sv-roadster-blue-car-lamborghini-aventador.png",
        value: 1,
        status: "closed"
    },

    {
        Image: "https://www.pngfind.com/pngs/m/50-504321_lamborghini-aventador-sv-roadster-blue-car-lamborghini-aventador.png",
        value: 1,
        status: "closed"
    },

    {
        Image: "https://www.pngfind.com/pngs/m/126-1266724_bugatti-png-bugatti-special-edition-transparent-png.png",
        value: 2,
        status: "closed"
    },

    {
        Image: "https://www.pngfind.com/pngs/m/126-1266724_bugatti-png-bugatti-special-edition-transparent-png.png",
        value: 2,
        status: "closed"
    },

    {
        Image: "https://www.pngfind.com/pngs/m/512-5128843_mclaren-650-png-transparent-png.png",
        value: 3,
        status: "closed"
    },

    {
        Image: "https://www.pngfind.com/pngs/m/512-5128843_mclaren-650-png-transparent-png.png",
        value: 3,
        status: "closed"
    },

    {
        Image: "https://www.pngfind.com/pngs/m/42-427636_bmw-i8-roadster-png-transparent-png.png",
        value: 4,
        status: "closed"
    },

    {
        Image: "https://www.pngfind.com/pngs/m/42-427636_bmw-i8-roadster-png-transparent-png.png",
        value: 4,
        status: "closed"
    },

    {
        Image: "https://www.pngfind.com/pngs/m/203-2039088_nissan-gtr-png-nissan-gtr-premium-2019-transparent.png",
        value: 5,
        status: "closed"
    },

    {
        Image: "https://www.pngfind.com/pngs/m/203-2039088_nissan-gtr-png-nissan-gtr-premium-2019-transparent.png",
        value: 5,
        status: "closed"
    }
];


let temp;
for(let i = cards.length-1; i >= 0; i--){

    let j = Math.floor(Math.random()*(i+1));

    temp = cards[i];
    cards[i] = cards[j];
    cards[j] = temp;

}

let cardsCopy = cards;


function displayCards(data){

    let cardsString="";

    data.forEach(function(card,Assignment_of_game_html){
        cardsString += `
            <div class="card" style="background-image: url('${card.Image}')">
                <div class="overlay ${card.status}" onclick="openCard(${Assignment_of_game_html})">
                </div>
            </div>
        `;
    });

    document.getElementById('cards').innerHTML = cardsString;

}

displayCards(cards);

let cardCount = 1;
let val1 = null, val2 = null;
let score = 0;

function openCard(Assignment_of_game_html){


    cards[Assignment_of_game_html].status = "opened";

    if (cardCount===1) {
        val1 = cards[Assignment_of_game_html].value;
        cardCount++;
    }
    else if(cardCount===2){
        val2 = cards[Assignment_of_game_html].value;

        if (val1 === val2) {
            score++;
            document.getElementById('score').innerText = score;

            val1 = null;
            val2 = null;
            cardCount = 1;
        }
        else{

            alert("Oops, GameOver!! Better luck next time ");
            location.reload();

        }

    }

    displayCards(cards);
}