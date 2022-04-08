export class Message {
    messageId: string;
    userId: string;
    message: string;
    messageDate: string;
    messageTime: string;

    constructor (messageId: string, userId: string, message: string, messageDate: string, messagetime: string){
        this.messageId = messageId;
        this.userId = userId;
        this.message = message;
        this.messageDate = messageDate;
        this.messageTime = messagetime;
    }
}