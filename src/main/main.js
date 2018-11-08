const startButton = document.getElementById('startButton');
const table = document.getElementById('table');
const images = [
    '/src/resources/assets/images/cards/angular.png',
    '/src/resources/assets/images/cards/d3.png',
    '/src/resources/assets/images/cards/jenkins.png',
    '/src/resources/assets/images/cards/postcss.png',
    '/src/resources/assets/images/cards/react.png'
];
const cards = [];

function createImageAttribute(imagePath){
    const cardImage = document.createElement('img');
    cardImage.setAttribute('src', imagePath);
    return cardImage;
}

function generateCards() {
    for(let image in images) {
        cards.push(createImageAttribute(image));
    }
}

function addSet(cards) {
    for(let i=0; i<cards.length; i++) {
        const newCardDiv = document.createElement('div');
        const card = cards[i];
        newCardDiv.setAttribute('id', i.toString());
        newCardDiv.setAttribute('class', 'cards');
        newCardDiv.appendChild(card);
        table.appendChild(newCardDiv);
    }
}

const game = {
    start(){
        generateCards();
        addSet(cards);
    }
};

startButton.addEventListener('click', () => game.start(), false);