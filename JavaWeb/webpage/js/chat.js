class Chat {
    constructor(url, port) {
        const adress = `${url}:${port}/chat`;
        this.socket = Stomp.over(new SockJS(adress));
    }

    connect(callback) {
        this.socket.connect({}, frame => {
            callback(frame);
        });
    }

    onJoin(callback) {
        this.socket.subscribe('/topic/join', message => {
            callback(message.body);
        });
        return this;
    }

    onMessage(callback) {
        this.socket.subscribe('/topic/chat', message => {
            callback(JSON.parse(message.body));
        });
        return this;
    }

    broadcast(username, message) {
        this.socket.send('/chat', {}, JSON.stringify({
            username: username,
            message: message
        }));
    }

    join(username) {
        this.socket.send('/join', {}, username);
    }
}