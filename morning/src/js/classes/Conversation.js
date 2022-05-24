class Conversation {
    constructor(element) {
        this.element = element;

    }

    addMessage(messageElement) {
        this.element.appendChild(messageElement);
    }


}

export { Conversation };