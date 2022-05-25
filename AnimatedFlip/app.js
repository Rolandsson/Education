let cardContainer = document.querySelector('.card-container');

imagePaths = [
    'yoshi.jpeg',
    'mario.jpeg',
    'gandalf.webp',
    'sushi.jpeg'
]

function getImageSource(path) {
    return `url("asset/${path}")`
}

function createCard(imagePath) {
    let card = document.createElement('div');
    let cardFront = document.createElement('div');

    card.className = 'card';
    cardFront.className = 'card-front';

    cardFront.style.backgroundImage = getImageSource(imagePath);
    
    card.append(cardFront);

    return card;
}

imagePaths.forEach(path => {
    let card = createCard(path);
    let cardFlipped = false;

    card.addEventListener('click', event => {
        if(cardFlipped) {
            card.style.animation = 'flipOut 2s forwards 1';

        } else {
            card.style.animation = 'flipIn 2s forwards 1';
        }
        cardFlipped = !cardFlipped;
    });


    cardContainer.append(card);
});