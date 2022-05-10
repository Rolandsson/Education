let input, chatDiv;
let username;

const url = 'http://localhost';
const port = 8080;

let chat = new Chat(url, port);

function createUserlbl(username) {
    let nameLbl = document.createElement('label');
    nameLbl.className = 'chat-username';
    nameLbl.textContent = username;

    chatDiv.append(nameLbl);
    return nameLbl;
}

function createMessagePara(message) {
    let p = document.createElement('p');
    p.className = 'chat-message';
    p.innerHTML = message;

    chatDiv.append(p);
    return p;
}

function greetUser(username) {
    let lbl = createUserlbl(username);
    lbl.classList.add('joined-text');

    lbl.textContent += " joined the channel";
}

function addMessage(content) {
    createUserlbl(content.username);
    createMessagePara(content.message);
    chatDiv.scrollTop = chat.scrollHeight;
}

function onChatEnterKey() {
    if(!username) {
        input.placeholder = 'Write a message';
        username = input.value;
        chat.join(username);
    } else {
        chat.broadcast(username, input.value);
    }
    input.value = '';
}

document.addEventListener('DOMContentLoaded', event => {
    input = document.querySelector('.chat-input');
    chatDiv = document.querySelector('.chat-history');

    input.addEventListener('keydown', event => {
        if(event.key == 'Enter') {
            onChatEnterKey();
        }
    });

    chat.connect(() => {
        input.placeholder = "Write username";
        input.disabled = false;
    
        chat.onJoin(greetUser);
        chat.onMessage(addMessage);
    });
});