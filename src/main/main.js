const startButton = document.getElementById('startButton');

const game = {
    start(){
        console.log("test click");
    }
};

startButton.addEventListener('click', () => game.start(), false);