export class MessageData {
    name: string;
    message: string;
    messageTime: string;
    messageDate: string;

    constructor (name: string, message: string, messageTime: string, messageDate: string){
        this.name = name;
        this.message = message;
        this.messageTime = messageTime;
        this.messageDate = messageDate;
    }
}