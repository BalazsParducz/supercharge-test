const startButton = document.getElementById('startButton');
const table = document.getElementById('table');
const images = [
    '../resources/assets/images/cards/angular.png',
    '../resources/assets/images/cards/d3.png',
    '../resources/assets/images/cards/jenkins.png',
    '../resources/assets/images/cards/postcss.png',
    '../resources/assets/images/cards/react.png'
];
const cards = [];

function drawCardImage(imagePath){
    const cardImage = document.createElement('img');
    cardImage.setAttribute('src', imagePath);
    return cardImage;
}

function generateCards() {
    for(let image in images) {
        cards.push(drawCardImage(image));
    }
}

function addSet(cards) {
    for(let i=0; i<cards.length; i++) {
        const newSet = document.createElement('div');
        let card = cards[i];
        newSet.setAttribute('id', i.toString());
        newSet.setAttribute('class', 'cards');
        newSet.innerHTML.concat(card);
    }
    return newSet;
}


const game = {
    start(){
        generateCards();
        table.appendChild(addSet());
    }
};

startButton.addEventListener('click', () => game.start(), false);