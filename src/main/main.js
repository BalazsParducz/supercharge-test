const startButton = document.getElementById('startButton');
const table = document.getElementById('table');
const images = [
    'src/resources/assets/images/cards/angular.png',
    'src/resources/assets/images/cards/d3.png',
    'src/resources/assets/images/cards/jenkins.png',
    'src/resources/assets/images/cards/postcss.png',
    'src/resources/assets/images/cards/react.png'
];
const cards = [];

function makeCard(imagePath){
    const cardElem = document.createElement('img');
    cardElem.setAttribute('src', imagePath);
    cardElem.setAttribute('class', 'cards');
    return cardElem;
}

function generateCards() {
    for(let image in images) {
        cards.push(makeCard(image));
        cards.push(makeCard(image))
    }
}


const game = {
    start(){
        generateCards();
    }
};

startButton.addEventListener('click', () => game.start(), false);