export class Message {
    username: string;
    message: string;
    sportName: string;
    messageTime: string;

    constructor (username: string, message: string, sportName: string, messageTime: string){
        this.username = username;
        this.message = message;
        this.sportName = sportName;
        this.messageTime = messageTime;
    }

}