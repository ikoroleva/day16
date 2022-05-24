import { MessageBase, LocalMessage, RemoteMessage } from "./classes/Message";
import { Conversation } from "./classes/Conversation";

const arrayToChat = (data) => {

    const conversationElement = document.querySelector('.conversation');
    const conversation = new Conversation(conversationElement);

    data.forEach((messageData, index) => {
        setTimeout(() => {

            let message;

            if (messageData.side === 'local') {
                message = new LocalMessage(messageData);

            } else if (messageData.side === 'remote') {
                message = new RemoteMessage(messageData);

            }

            conversation.addMessage(message.element);

        }, index * 1000);
    })
}

export { arrayToChat };