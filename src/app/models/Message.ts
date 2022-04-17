export class Message {
    username: string;
    message: string;
    messageTime: string;

    constructor (username: string, message: string, messageTime: string){
        this.username = username;
        this.message = message;
        this.messageTime = messageTime;
    }

}