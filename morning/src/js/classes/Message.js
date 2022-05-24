// class Message {
//     constructor(messageData) {
//         this.text = messageData.text;
//         this.side = messageData.side;
//         this.name = messageData.name;

//         const messageElement = document.createElement('div');
//         messageElement.className = 'message';
//         const messageText = document.createElement('div');
//         messageText.className = 'message__text';
//         messageText.textContent = messageData.text;
//         messageElement.appendChild(messageText);

//         this.element = messageElement;
//     }
// }

class MessageBase {
    constructor(messageData) {

        this.element = document.createElement('div');
        this.element.className = this.getMessageClassName();

        const messageText = document.createElement('div');
        messageText.className = 'message__text';
        messageText.textContent = messageData.text;

        this.element.appendChild(messageText);

    };

    getMessageClassName() {
        throw Error('getMessageClassName is not implemented.')
    };
}


class RemoteMessage extends MessageBase {
    getMessageClassName() {
        return 'message message--local'
    }
    // constructor() {
    //     super();
    //     this.side = 'remote';

    //     const messageLocal = document.querySelector('.message');
    //     messageLocal.classList.add('message--local');

    //     this.messageLocal = messageLocal;

    // }
}

class LocalMessage extends MessageBase {
    // constructor() {
    //     super();
    //     this.side = 'local';

    //     const messageLocal = document.querySelector('.message');
    //     messageLocal.classList.add('message--local');

    //     this.messageLocal = messageLocal;
    // }

    getMessageClassName() {
        return 'message message--remote'
    }
}

export { MessageBase }
export { LocalMessage }
export { RemoteMessage }