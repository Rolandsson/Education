/*
<div class="card">
    <header class="card-header">
        <h2>Lorem, ipsum.</h2>
    </header>
    <div class="card-body">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laudantium, autem. Illum dolorum delectus voluptatem cumque molestiae veniam, ducimus possimus harum?</div>
</div>
*/

function createCard(headerText, cardText) {
    let card    = document.createElement('div');
    let header  = document.createElement('header');
    let h2      = document.createElement('h2');
    let body    = document.createElement('div');
    let button  = document.createElement('button');

    card.className      = 'card';
    header.className    = 'card-header';
    body.className      = 'card-body';
    button.className    = 'card-btn';

    h2.textContent      = headerText;
    body.textContent    = cardText;
    button.textContent  = 'Vill du se mer?';

    card.append(header);
    card.append(body);
    card.append(button);
    header.append(h2);

    button.addEventListener('click', event => {
        console.log("You selected card", headerText);
    });

    return card;
}

cardHeader = 'Någon fin rubrik';
cardText = 'En fin text om något väldigt fint med en fin rubrik som är fin';

let container = document.querySelector('.container');

let card = createCard(cardHeader, cardText);
container.append(card);


cardHeader = 'Någon mindre fin rubrik';
card = createCard(cardHeader, cardText);
container.append(card);


cardHeader = 'Inte en fin rubrik';
card = createCard(cardHeader, cardText);
container.append(card);